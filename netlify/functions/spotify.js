const fetch = require('node-fetch');

exports.handler = async () => {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env;

  // Get access token
  const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=refresh_token&refresh_token=${SPOTIFY_REFRESH_TOKEN}`,
  });

  const { access_token } = await tokenRes.json();

  // Get now playing
  const nowRes = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: { Authorization: `Bearer ${access_token}` },
  });

  if (nowRes.status === 204) {
    return { statusCode: 200, body: JSON.stringify({ playing: false }) };
  }

  const data = await nowRes.json();
  return {
    statusCode: 200,
    body: JSON.stringify({
      playing: data.is_playing,
      song: data.item?.name,
      artist: data.item?.artists?.[0]?.name,
      albumArt: data.item?.album?.images?.[0]?.url,
      songLink: data.item?.external_urls?.spotify,
    }),
  };
};