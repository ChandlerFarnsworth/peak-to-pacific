/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           PEAK TO PACIFIC — TRIP CONFIG                      ║
 * ║  This is the ONE file you edit to update the whole site.     ║
 * ║  No coding required — just fill in the values below.        ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * HOW TO UPDATE:
 *   • Current location  → edit CURRENT_LOCATION
 *   • Mark a stop done  → change status to "completed"
 *   • Update stats      → edit STATS
 *   • Now playing       → edit SPOTIFY (or set up the Netlify function)
 *   • Donation total    → edit DONATION.raised
 *   • Add photos        → set up CLOUDINARY below, then upload from your phone
 */

// ─────────────────────────────────────────────
// 📍 CURRENT LOCATION
// Update this every time you move to a new spot.
// ─────────────────────────────────────────────
const CURRENT_LOCATION = {
  lat: 40.0150,
  lng: -105.2705,
  label: "Boulder, CO",
  note: "Pre-trip — graduation day! 🎓",
};

// ─────────────────────────────────────────────
// 🗺️  TRIP STOPS
// status options: "completed" | "current" | "upcoming"
// ─────────────────────────────────────────────
const STOPS = [
  // ── PHASE 1: ROCKIES ──────────────────────────────────────
  {
    id: 1,
    phase: "Phase 1 — Rockies",
    name: "Boulder, CO",
    subtitle: "University of Colorado Boulder · Graduation 🎓",
    dates: "May 12",
    status: "completed",
    lat: 40.0150,
    lng: -105.2705,
    highlights: ["Graduation ceremony", "Pack up and hit the road"],
    emoji: "🎓",
  },
  {
    id: 2,
    phase: "Phase 1 — Rockies",
    name: "Grand Teton National Park",
    subtitle: "Wyoming",
    dates: "May 12–14",
    status: "upcoming",
    lat: 43.7904,
    lng: -110.6818,
    highlights: [
      "Jenny Lake Campground",
      "Schwabacher Landing (sunset)",
      "Jenny Lake (sunrise)",
      "Delta Lake via Lupine Meadows (7.6 mi, 2,300 ft gain)",
    ],
    emoji: "🏔️",
    nights: 2,
  },
  {
    id: 3,
    phase: "Phase 1 — Rockies",
    name: "Yellowstone National Park",
    subtitle: "Wyoming",
    dates: "May 14–15",
    status: "upcoming",
    lat: 44.4280,
    lng: -110.5885,
    highlights: [
      "Mammoth Campground",
      "Old Faithful",
      "Grand Prismatic Spring",
      "Grand Canyon of Yellowstone",
      "Beaver Ponds Loop (5 mi)",
    ],
    emoji: "🌋",
    nights: 1,
  },
  {
    id: 4,
    phase: "Phase 1 — Rockies",
    name: "Glacier National Park",
    subtitle: "Montana",
    dates: "May 15–17",
    status: "upcoming",
    lat: 48.6961,
    lng: -113.7180,
    highlights: [
      "Avalanche or Apgar Campground",
      "Going-to-the-Sun Road",
      "Avalanche Lake (6 mi)",
      "Hidden Lake (5 mi, 1,300 ft gain)",
    ],
    emoji: "🏔️",
    nights: 2,
  },

  // ── PHASE 2: PACIFIC NORTHWEST ────────────────────────────
  {
    id: 5,
    phase: "Phase 2 — Pacific Northwest",
    name: "Mount Rainier National Park",
    subtitle: "Washington",
    dates: "May 17–18",
    status: "upcoming",
    lat: 46.8799,
    lng: -121.7269,
    highlights: [
      "Camp near Paradise",
      "Skyline Trail (5–6 mi, ~3–4 hrs)",
    ],
    emoji: "🌋",
    nights: 1,
  },
  {
    id: 6,
    phase: "Phase 2 — Pacific Northwest",
    name: "Seattle, WA",
    subtitle: "Washington",
    dates: "May 18",
    status: "upcoming",
    lat: 47.6062,
    lng: -122.3321,
    highlights: [
      "Pike Place Market",
      "Space Needle",
      "Dinner in Capitol Hill",
    ],
    emoji: "🌆",
    nights: 1,
  },
  {
    id: 7,
    phase: "Phase 2 — Pacific Northwest",
    name: "Olympic National Park",
    subtitle: "Washington",
    dates: "May 19–20",
    status: "upcoming",
    lat: 47.8021,
    lng: -123.6044,
    highlights: [
      "Fairholme Campground",
      "Marymere Falls Trail (2 mi)",
      "Sol Duc Falls (1.5 mi)",
      "Hoh Rainforest — Hall of Mosses",
      "Rialto Beach — Hole-in-the-Wall",
      "Ruby Beach",
    ],
    emoji: "🌲",
    nights: 2,
  },

  // ── PHASE 3: OREGON ───────────────────────────────────────
  {
    id: 8,
    phase: "Phase 3 — Oregon Coast",
    name: "Cannon Beach, OR",
    subtitle: "Oregon",
    dates: "May 21",
    status: "upcoming",
    lat: 45.8918,
    lng: -123.9615,
    highlights: ["Haystack Rock (quick stop ~1 hr)"],
    emoji: "🏖️",
    nights: 0,
  },
  {
    id: 9,
    phase: "Phase 3 — Oregon Coast",
    name: "Natural Bridges Viewpoint",
    subtitle: "Oregon",
    dates: "May 21",
    status: "upcoming",
    lat: 42.0964,
    lng: -124.3597,
    highlights: ["Scenic coastal viewpoint (30–45 min)"],
    emoji: "🌊",
    nights: 0,
  },
  {
    id: 10,
    phase: "Phase 3 — Oregon Coast",
    name: "Brookings, OR",
    subtitle: "Oregon",
    dates: "May 21",
    status: "upcoming",
    lat: 42.0534,
    lng: -124.2834,
    highlights: ["Hotel stay", "Southern Oregon coast"],
    emoji: "🏨",
    nights: 1,
  },

  // ── PHASE 4: CALIFORNIA NORTH ────────────────────────────
  {
    id: 11,
    phase: "Phase 4 — Northern California",
    name: "Redwood National & State Parks",
    subtitle: "California",
    dates: "May 22",
    status: "upcoming",
    lat: 41.2132,
    lng: -124.0046,
    highlights: [
      "Lady Bird Johnson Grove Trail (1.5 mi)",
      "Ancient coastal redwoods",
    ],
    emoji: "🌲",
    nights: 0,
  },
  {
    id: 12,
    phase: "Phase 4 — Northern California",
    name: "Chico, CA",
    subtitle: "California",
    dates: "May 22–23",
    status: "upcoming",
    lat: 39.7285,
    lng: -121.8375,
    highlights: ["Stay with Dan 🤙"],
    emoji: "🏠",
    nights: 1,
  },
  {
    id: 13,
    phase: "Phase 4 — Northern California",
    name: "Lake Tahoe",
    subtitle: "California / Nevada",
    dates: "May 23–24",
    status: "upcoming",
    lat: 39.0968,
    lng: -120.0324,
    highlights: ["Eagle Falls (2 mi, ~1–2 hrs)", "Crystal-clear alpine lake"],
    emoji: "💎",
    nights: 1,
  },
  {
    id: 14,
    phase: "Phase 4 — Northern California",
    name: "Yosemite National Park",
    subtitle: "California",
    dates: "May 24–26",
    status: "upcoming",
    lat: 37.8651,
    lng: -119.5383,
    highlights: [
      "Tunnel View",
      "Yosemite Falls",
      "Mist Trail — Vernal Falls (3–5 mi)",
    ],
    emoji: "🏞️",
    nights: 2,
  },

  // ── PHASE 5: CALIFORNIA COAST ─────────────────────────────
  {
    id: 15,
    phase: "Phase 5 — California Coast",
    name: "San Francisco, CA",
    subtitle: "California",
    dates: "May 27",
    status: "upcoming",
    lat: 37.8199,
    lng: -122.4783,
    highlights: ["Golden Gate Bridge (quick stop)", "Begin Pacific Coast Highway"],
    emoji: "🌉",
    nights: 0,
  },
  {
    id: 16,
    phase: "Phase 5 — California Coast",
    name: "Big Sur, CA",
    subtitle: "California",
    dates: "May 27–28",
    status: "upcoming",
    lat: 36.2704,
    lng: -121.8081,
    highlights: ["Bixby Creek Bridge", "McWay Falls viewpoint", "Pacific Coast Highway"],
    emoji: "🌊",
    nights: 1,
  },
  {
    id: 17,
    phase: "Phase 5 — California Coast",
    name: "Los Angeles, CA",
    subtitle: "California",
    dates: "May 28+",
    status: "upcoming",
    lat: 34.0522,
    lng: -118.2437,
    highlights: ["Stay with Aunt Cat 🏠", "Explore the city"],
    emoji: "🌴",
    nights: 2,
  },

  // ── PHASE 6: DESERT ──────────────────────────────────────
  {
    id: 18,
    phase: "Phase 6 — Desert & Southwest",
    name: "Las Vegas, NV",
    subtitle: "Nevada",
    dates: "TBD",
    status: "upcoming",
    lat: 36.1699,
    lng: -115.1398,
    highlights: ["The Strip", "Fremont Street"],
    emoji: "🎰",
    nights: 1,
  },

  // ── PHASE 7: UTAH MIGHTY 3 ───────────────────────────────
  {
    id: 19,
    phase: "Phase 7 — Utah's Mighty 3",
    name: "Zion National Park",
    subtitle: "Utah",
    dates: "TBD",
    status: "upcoming",
    lat: 37.2982,
    lng: -113.0263,
    highlights: ["Angels Landing", "The Narrows", "Emerald Pools"],
    emoji: "🏜️",
    nights: 1,
  },
  {
    id: 20,
    phase: "Phase 7 — Utah's Mighty 3",
    name: "Bryce Canyon National Park",
    subtitle: "Utah",
    dates: "TBD",
    status: "upcoming",
    lat: 37.5930,
    lng: -112.1871,
    highlights: ["Hoodoos at sunrise", "Rim Trail", "Navajo Loop"],
    emoji: "🌄",
    nights: 1,
  },
  {
    id: 21,
    phase: "Phase 7 — Utah's Mighty 3",
    name: "Arches National Park",
    subtitle: "Utah",
    dates: "TBD",
    status: "upcoming",
    lat: 38.7331,
    lng: -109.5925,
    highlights: ["Delicate Arch", "Landscape Arch", "Devils Garden"],
    emoji: "🌅",
    nights: 1,
  },
  {
    id: 22,
    phase: "Phase 8 — Home!",
    name: "Boulder, CO",
    subtitle: "Back home 🎉",
    dates: "TBD",
    status: "upcoming",
    lat: 40.0150,
    lng: -105.2705,
    highlights: ["Road trip complete!", "1,000+ miles of memories"],
    emoji: "🏠",
    nights: 0,
  },
];

// ─────────────────────────────────────────────
// 📊 STATS
// Update these as you go!
// ─────────────────────────────────────────────
const STATS = {
  milesDriven: 0,
  totalMiles: 4200,        // estimated total trip miles
  stopsCompleted: 0,
  totalStops: 22,
  statesVisited: [],       // e.g. ["CO", "WY", "MT", "WA", "OR", "CA", "NV", "UT"]
  daysOnRoad: 0,
  tripStartDate: "2026-05-12", // UPDATE to actual start date
  hikesMiles: 0,
  nightsCamped: 0,
};

// ─────────────────────────────────────────────
// 🎵 SPOTIFY PLAYLIST
//
// SETUP (1 minute):
//   1. Open Spotify → go to your road trip playlist
//   2. Click the three dots (···) → Share → Copy link to playlist
//      Link looks like: https://open.spotify.com/playlist/37i9dQZF1DX...
//   3. Paste it below ↓
//
// The playlist embeds directly on the Stats page — visitors can play
// it without leaving the site (Spotify account not required to listen).
// ─────────────────────────────────────────────
const SPOTIFY_PLAYLIST_URL = "https://open.spotify.com/playlist/2iAVRtGir5B6chb5Of1t4q?si=cde2ed29eb854863"; // ← PASTE YOUR PLAYLIST LINK HERE
// Example: "https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO"

// ─────────────────────────────────────────────
// 💸 DONATIONS
// Update `raised` whenever someone Venmos you!
// ─────────────────────────────────────────────
const DONATION = {
  venmoHandle: "@Chandler_LF",   // ← UPDATE THIS
  venmoUrl: "https://venmo.com/Chandler_LF", // ← UPDATE THIS
  goal: 100,
  raised: 25,
  currency: "USD",
  goalLabel: "gas & camping fund",
  supporters: [
    {name: "Tim", amount: 25},
    // Add names (first name only is fine) as people donate!
    // { name: "Mom", amount: 50 },
    // { name: "Jake", amount: 25 },
  ],
};

// ─────────────────────────────────────────────
// 🗺️ MAPBOX
// Get a free token at mapbox.com/account/access-tokens
// Free tier: 50,000 map loads/month — way more than you need.
// ─────────────────────────────────────────────
const MAPBOX_TOKEN = "pk.eyJ1IjoibWFwbW9zYWljIiwiYSI6ImNtbDc3ZG5xbjBsMDkzZW9hNDh2NmJjaXgifQ.8l_pGlje_2Nru52w6JCYFg"; // ← PASTE YOUR TOKEN HERE

// ─────────────────────────────────────────────
// 📸 GOOGLE PHOTOS (Shared album for the gallery)
//
// SETUP (2 minutes):
//   1. Open Google Photos on your phone or photos.google.com
//   2. Create an album for the trip (e.g. "Peak to Pacific 2026")
//   3. Tap Share → Create shared album → copy the link
//   4. Paste the link below ↓
//
// Anyone you share the site with can tap "View Album" to see all your photos.
// To add new photos mid-trip, just add them to the album in Google Photos — no
// need to touch this file again.
// ─────────────────────────────────────────────
const GOOGLE_PHOTOS_URL = "https://photos.app.goo.gl/Bj3pdmZHRdmDzTKt7"; // ← PASTE YOUR SHARED ALBUM LINK HERE
// Example: "https://photos.google.com/share/AF1QipM..."

// ─────────────────────────────────────────────
// 📸 CLOUDINARY (Auto photo sync from your phone)
//
// SETUP (5 minutes, completely free):
//   1. Go to cloudinary.com → sign up free
//   2. Dashboard → Settings → Upload → Add upload preset
//      • Set "Signing mode" to "Unsigned"
//      • Name it "peak-to-pacific" (or anything you like)
//      • Save
//   3. Copy your Cloud Name from the dashboard top-left
//   4. Paste both below ↓
//   5. Bookmark upload.html on your phones — photos auto-appear in gallery!
//
// Free tier: 25GB storage, 25GB bandwidth/month (more than plenty)
// ─────────────────────────────────────────────
const CLOUDINARY = {
  cloudName:    "dl9xi3sqq",     // ← e.g. "djxyzabc123"
  uploadPreset: "peak-to-pacific",     // ← your unsigned preset name
  tag:          "peak-to-pacific",     // tag applied to all uploaded photos
};

// ─────────────────────────────────────────────
// 📸 GALLERY (fallback if Cloudinary not set up)
// If you prefer to upload manually, drop files in /photos/
// and add entries here. Cloudinary takes priority when configured.
// ─────────────────────────────────────────────
const GALLERY = [
  // { file: "grand-teton-delta-lake.jpg", caption: "Delta Lake at sunrise", location: "Grand Teton NP" },
  // { file: "yellowstone-prismatic.jpg", caption: "Grand Prismatic Spring", location: "Yellowstone" },
];

// ─────────────────────────────────────────────
// ✈️ TRIP META
// ─────────────────────────────────────────────
const TRIP_META = {
  title: "Peak to Pacific",
  tagline: "Boulder → Pacific Coast → Utah → Home",
  travelers: ["Chandler", "Teigan"],
  startLocation: "Boulder, CO",
  endLocation: "Boulder, CO (round trip)",
  startDate: "May 12, 2026",
  estimatedEndDate: "June 2026",
  instagramHandle: "",  // optional: "@yourhandle"
};

// ── DO NOT EDIT BELOW THIS LINE ────────────────────────────
if (typeof module !== "undefined") module.exports = {
  CURRENT_LOCATION, STOPS, STATS, SPOTIFY_PLAYLIST_URL, DONATION, GALLERY, GOOGLE_PHOTOS_URL, TRIP_META,
};
