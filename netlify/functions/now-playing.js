/**
 * ════════════════════════════════════════════════════════════
 *  Peak to Pacific — Spotify Now Playing
 *  Netlify Serverless Function
 * ════════════════════════════════════════════════════════════
 *
 *  SETUP (one-time, ~15 minutes):
 *
 *  Step 1 — Create a Spotify App:
 *    → Go to https://developer.spotify.com/dashboard
 *    → Click "Create app"
 *    → Set Redirect URI to: http://localhost:3000/callback
 *    → Copy your Client ID and Client Secret
 *
 *  Step 2 — Get your Refresh Token:
 *    → In a browser, open this URL (replace YOUR_CLIENT_ID):
 *      https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID
 *        &response_type=code&redirect_uri=http://localhost:3000/callback
 *        &scope=user-read-currently-playing,user-read-recently-played
 *    → After approving, you'll be redirected to localhost with ?code=XXXX
 *    → Copy that code, then run this curl command in your terminal:
 *      curl -X POST https://accounts.spotify.com/api/token \
 *        -H "Content-Type: application/x-www-form-urlencoded" \
 *        -d "grant_type=authorization_code&code=PASTE_CODE_HERE
 *            &redirect_uri=http://localhost:3000/callback
 *            &client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET"
 *    → Copy the "refresh_token" from the response
 *
 *  Step 3 — Add environment variables in Netlify:
 *    → Netlify dashboard → Your site → Site settings → Environment variables
 *    → Add:
 *        SPOTIFY_CLIENT_ID     = your client id
 *        SPOTIFY_CLIENT_SECRET = your client secret
 *        SPOTIFY_REFRESH_TOKEN = your refresh token
 *
 *  Step 4 — Deploy and you're live!
 *    → The stats page will auto-fetch from /.netlify/functions/now-playing
 * ════════════════════════════════════════════════════════════
 */

const TOKEN_ENDPOINT  = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_URL = 'https://api.spotify.com/v1/me/player/currently-playing';
const RECENT_URL      = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';

async function getAccessToken(clientId, clientSecret, refreshToken) {
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const res = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
  });

  const data = await res.json();
  if (!data.access_token) throw new Error('Failed to get access token');
  return data.access_token;
}

exports.handler = async () => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache, no-store',
  };

  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env;

  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ playing: false, error: 'Spotify credentials not configured' }),
    };
  }

  try {
    const accessToken = await getAccessToken(
      SPOTIFY_CLIENT_ID,
      SPOTIFY_CLIENT_SECRET,
      SPOTIFY_REFRESH_TOKEN,
    );

    const authHeader = { Authorization: `Bearer ${accessToken}` };

    // Try currently playing first
    const nowRes = await fetch(NOW_PLAYING_URL, { headers: authHeader });

    if (nowRes.status === 200) {
      const data = await nowRes.json();
      if (data?.item && data.is_playing) {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            playing: true,
            song:     data.item.name,
            artist:   data.item.artists.map(a => a.name).join(', '),
            album:    data.item.album.name,
            albumArt: data.item.album.images[0]?.url || null,
            songLink: data.item.external_urls.spotify,
            duration: data.item.duration_ms,
            progress: data.progress_ms,
          }),
        };
      }
    }

    // Fallback: recently played
    const recentRes = await fetch(RECENT_URL, { headers: authHeader });
    if (recentRes.status === 200) {
      const recent = await recentRes.json();
      const track  = recent?.items?.[0]?.track;
      if (track) {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            playing:  false,
            recent:   true,
            song:     track.name,
            artist:   track.artists.map(a => a.name).join(', '),
            album:    track.album.name,
            albumArt: track.album.images[0]?.url || null,
            songLink: track.external_urls.spotify,
          }),
        };
      }
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ playing: false }),
    };

  } catch (err) {
    console.error('Spotify function error:', err);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ playing: false, error: err.message }),
    };
  }
};
