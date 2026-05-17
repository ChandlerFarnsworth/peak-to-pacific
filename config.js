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
  note: "Pre-trip — leaving Monday! 🎒",
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
    subtitle: "University of Colorado Boulder · Departure Day",
    dates: "May 18",
    status: "current",
    lat: 40.0150,
    lng: -105.2705,
    highlights: ["Pack up and hit the road", "Long drive to Grand Teton ahead"],
    emoji: "🎓",
  },
  {
    id: 2,
    phase: "Phase 1 — Rockies",
    name: "Grand Teton National Park",
    subtitle: "Wyoming",
    dates: "May 18–20",
    status: "upcoming",
    lat: 43.7904,
    lng: -110.6818,
    highlights: [
      "Schwabacher Landing & Mormon Row (sunset/sunrise)",
      "Jenny Lake — Hidden Falls & Inspiration Point",
      "Taggart Lake or Bradley Lake hike",
      "Snake River Overlook",
    ],
    emoji: "🏔️",
    nights: 2,
  },

  // ── PHASE 2: UTAH ─────────────────────────────────────────
  {
    id: 3,
    phase: "Phase 2 — Utah",
    name: "Salt Lake City, UT",
    subtitle: "Utah · Reset Day",
    dates: "May 20",
    status: "upcoming",
    lat: 40.7608,
    lng: -111.8910,
    highlights: [
      "Rest & reset — real bed, laundry",
      "Restock food and water",
      "Explore SLC if time allows",
    ],
    emoji: "🏙️",
    nights: 1,
  },
  {
    id: 4,
    phase: "Phase 2 — Utah",
    name: "Zion National Park",
    subtitle: "Utah",
    dates: "May 21–22",
    status: "upcoming",
    lat: 37.2982,
    lng: -113.0263,
    highlights: [
      "Pa'rus Trail & Watchman Trail (evening arrival)",
      "Riverside Walk & Emerald Pools",
      "Scout Lookout or Angels Landing (permit required)",
      "The Narrows (conditions permitting)",
    ],
    emoji: "🏜️",
    nights: 2,
  },

  // ── PHASE 3: CALIFORNIA ───────────────────────────────────
  {
    id: 5,
    phase: "Phase 3 — California",
    name: "Yosemite National Park",
    subtitle: "California",
    dates: "May 24–26",
    status: "upcoming",
    lat: 37.8651,
    lng: -119.5383,
    highlights: [
      "Tunnel View, Bridalveil Fall, Valley loop",
      "Yosemite Falls, Mirror Lake, El Capitan Meadow",
      "Half Dome or Mist Trail — Vernal & Nevada Falls",
      "Glacier Point (if road is open)",
    ],
    emoji: "🏞️",
    nights: 3,
  },
  {
    id: 6,
    phase: "Phase 3 — California",
    name: "San Francisco, CA",
    subtitle: "California · Quick Stop",
    dates: "May 27",
    status: "upcoming",
    lat: 37.8199,
    lng: -122.4783,
    highlights: [
      "Golden Gate Bridge",
      "Lands End & Palace of Fine Arts",
      "Food stop before heading south",
    ],
    emoji: "🌉",
    nights: 0,
  },
  {
    id: 7,
    phase: "Phase 3 — California",
    name: "Monterey & Carmel, CA",
    subtitle: "California · Quick Stop",
    dates: "May 27",
    status: "upcoming",
    lat: 36.6002,
    lng: -121.8947,
    highlights: [
      "Cannery Row & Pacific Grove",
      "Carmel Beach",
      "17-Mile Drive (time permitting)",
    ],
    emoji: "🌊",
    nights: 0,
  },
  {
    id: 8,
    phase: "Phase 3 — California",
    name: "San Luis Obispo, CA",
    subtitle: "California",
    dates: "May 27",
    status: "upcoming",
    lat: 35.2828,
    lng: -120.6596,
    highlights: [
      "Overnight stop — Pismo Beach area",
      "Halfway between Monterey and LA",
    ],
    emoji: "🌴",
    nights: 1,
  },
  {
    id: 9,
    phase: "Phase 3 — California",
    name: "Los Angeles, CA",
    subtitle: "California",
    dates: "May 28–30",
    status: "upcoming",
    lat: 34.0522,
    lng: -118.2437,
    highlights: [
      "Griffith Observatory",
      "Santa Monica & Malibu",
      "Burbank / Studio City",
      "Pack car at night for Moab drive",
    ],
    emoji: "🎬",
    nights: 3,
  },

  // ── PHASE 4: DESERT & HOME ────────────────────────────────
  {
    id: 10,
    phase: "Phase 4 — Desert & Home",
    name: "Moab / Arches NP",
    subtitle: "Utah",
    dates: "May 31",
    status: "upcoming",
    lat: 38.5733,
    lng: -109.5498,
    highlights: [
      "Park Avenue & Balanced Rock (evening)",
      "Windows Section & Double Arch",
      "Delicate Arch Viewpoint at sunset",
    ],
    emoji: "🌅",
    nights: 1,
  },
  {
    id: 11,
    phase: "Phase 4 — Desert & Home",
    name: "Boulder, CO",
    subtitle: "Back home! 🎉",
    dates: "June 1",
    status: "upcoming",
    lat: 40.0150,
    lng: -105.2705,
    highlights: ["Road trip complete!", "~3,400 miles of memories"],
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
  totalMiles: 3400,        // estimated total trip miles
  stopsCompleted: 0,
  totalStops: 11,
  statesVisited: [],       // e.g. ["CO", "WY", "UT", "NV", "CA"]
  daysOnRoad: 0,
  tripStartDate: "2026-05-18", // UPDATE to actual start date
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
  tagline: "Boulder → Tetons → Zion → Yosemite → LA → Arches → Home",
  travelers: ["Chandler", "Teigan"],
  startLocation: "Boulder, CO",
  endLocation: "Boulder, CO (round trip)",
  startDate: "May 18, 2026",
  estimatedEndDate: "June 1, 2026",
  instagramHandle: "",  // optional: "@yourhandle"
};

// ── DO NOT EDIT BELOW THIS LINE ────────────────────────────
if (typeof module !== "undefined") module.exports = {
  CURRENT_LOCATION, STOPS, STATS, SPOTIFY_PLAYLIST_URL, DONATION, GALLERY, GOOGLE_PHOTOS_URL, TRIP_META,
};
