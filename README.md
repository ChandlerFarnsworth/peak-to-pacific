# 🏔️ Peak to Pacific — Site Guide

Chandler & Teigan's post-graduation road trip tracker.
Built as a static HTML/CSS/JS site — no build step, no framework, just open and edit.

---

## Quick Start

Open `index.html` in any browser. No server needed for local preview.

**To deploy (free options):**
- **Netlify Drop** (easiest): Go to [netlify.com/drop](https://app.netlify.com/drop) and drag the entire `Peak to Pacific` folder onto the page. Live in seconds.
- **GitHub Pages**: Push to a GitHub repo → Settings → Pages → deploy from `main` branch.

---

## File Structure

```
Peak to Pacific/
├── index.html       🗺  Map & Current Location
├── agenda.html      📅  Itinerary Tracker
├── stats.html       📊  Stats Dashboard
├── gallery.html     📷  Photo Gallery
├── donate.html      ❤️  Support / Donate
├── style.css           Shared design system (don't need to touch this)
├── config.js        ⚡  THE ONE FILE YOU EDIT TO UPDATE EVERYTHING
└── photos/             Drop your trip photos here
```

---

## How to Update the Site

Everything goes through **`config.js`**. Open it in any text editor.

### 📍 Update Current Location
```js
const CURRENT_LOCATION = {
  lat: 43.7904,
  lng: -110.6818,
  label: "Grand Teton National Park",
  note: "Camped at Jenny Lake 🏕️",
};
```
Change `lat`, `lng`, `label`, and `note`. The map marker and banner update automatically.

---

### ✅ Mark a Stop as Completed / Current
In the `STOPS` array, find the stop and change its `status`:
```js
status: "completed"   // ← grayed out, checkmarked on timeline
status: "current"     // ← highlighted with pulsing dot, "You are here" label
status: "upcoming"    // ← normal (default)
```

---

### 📊 Update Stats
```js
const STATS = {
  milesDriven: 847,
  statesVisited: ["CO", "WY", "MT"],
  daysOnRoad: 5,
  hikesMiles: 21,
  nightsCamped: 4,
};
```

---

### 🎵 Update Spotify "Now Playing"
**Option A — Manual (easiest):**
Edit in `config.js`:
```js
const SPOTIFY = {
  enabled: true,
  mode: "manual",
  song: "Going to California",
  artist: "Led Zeppelin",
  albumArt: "",     // optional: paste a URL to the album art image
  songLink: "https://open.spotify.com/track/...",
};
```

**Option B — Automatic via Netlify Function (recommended if you want live updates):**
1. Deploy the site to Netlify
2. Create a `netlify/functions/spotify.js` file (see below)
3. Set environment variables in Netlify dashboard: `SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `SPOTIFY_REFRESH_TOKEN`
4. Change `mode: "api"` in config.js

The function template is at the bottom of this README.

---

### 📸 Add Photos to Gallery

1. Drop your photo files into the `photos/` folder (jpg, png, webp all work)
2. Add entries to the `GALLERY` array in `config.js`:
```js
const GALLERY = [
  { file: "grand-teton-delta-lake.jpg", caption: "Delta Lake at golden hour", location: "Grand Teton NP" },
  { file: "yellowstone-prismatic.jpg", caption: "Grand Prismatic Spring", location: "Yellowstone" },
];
```
That's it — they'll appear in the gallery with lightbox support.

**Tips:**
- Resize photos to ~1200px wide before uploading to keep the site fast
- Use kebab-case filenames (no spaces)
- The `location` field populates the filter buttons at the top of the gallery

---

### 💸 Update Donation Info
```js
const DONATION = {
  venmoHandle: "@ChandlerXXX",
  venmoUrl: "https://venmo.com/ChandlerXXX",
  goal: 500,
  raised: 75,      // ← update this manually when people donate
  supporters: [
    { name: "Mom", amount: 50 },
    { name: "Jake", amount: 25 },
  ],
};
```

---

## Tech Stack & Why

| Thing | Tool | Why |
|-------|------|-----|
| Framework | Plain HTML/CSS/JS | Zero build step, edit in any text editor |
| Map | Leaflet.js + CartoDB tiles | Free, no API key, looks great dark |
| Fonts | Google Fonts (Oswald + Inter) | Free, loads from CDN |
| Hosting | Netlify (recommended) | Free tier, drag-and-drop deploy |
| Photos | Local `/photos/` folder | Simple, no third-party dependency |
| Spotify | Manual or Netlify function | Gracefully degrades to manual |
| Donations | Venmo link + manual counter | Works without a backend |

---

## Realistic Notes on "Live" Features

**Location updates:** There's no GPS auto-tracking built in — you update `CURRENT_LOCATION` in `config.js` and redeploy (takes ~30 seconds on Netlify). This is the most reliable approach without a backend.

**Spotify Now Playing:** The Spotify API requires OAuth and a backend to handle token refresh. The simplest real solution is a Netlify serverless function (takes ~30 min to set up). Or just update manually — it's a road trip, not a concert livestream.

**Donation tracker:** Venmo doesn't expose a public API. The workaround (and the honest recommendation) is to manually update `DONATION.raised` in `config.js` when people send you money. It takes 10 seconds and keeps the progress bar accurate.

**Photo gallery:** For "true" auto-sync from your phone, the cleanest option is Cloudinary's free tier — upload via their mobile app, grab the URL, paste it in. Or just drop files in the folder when you have wifi. Either works.

---

## Netlify Spotify Function (Optional)

If you want live "Now Playing" from Spotify, create this file:

`netlify/functions/spotify.js`:
```js
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
```

Then update `stats.html` to fetch from `/.netlify/functions/spotify` on page load.

---

## Supplying Trip Data to Claude

When you want to update or expand the site, the easiest format to give Claude is:

**For stops:**
```
Stop: Cannon Beach, OR
Dates: May 21
Status: completed
Highlights: Haystack Rock quick stop, walked the beach
```

**For map coordinates:** Just give the place name — Claude can look up coordinates.

**For donation details:**
```
Venmo: @YourHandle
Goal: $500
Raised: $150
Supporters: Mom ($50), Jake ($25), Grandma ($75)
```

---

*Built for Chandler & Teigan · CU Boulder Class of '26 · 🤘*
