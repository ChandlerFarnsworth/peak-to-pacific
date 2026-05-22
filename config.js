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
  lat: 37.2982,
  lng: -113.0263,
  label: "En route to Zion NP",
  note: "Day 5 — driving from SLC to Zion 🚗",
};

// ─────────────────────────────────────────────
// 🗺️  TRIP STOPS
// status options: "completed" | "current" | "upcoming"
// ─────────────────────────────────────────────
const STOPS = [
  // ── PHASE 1: ROCKIES & DESERT ─────────────────────────────
  {
    id: 1,
    phase: "Phase 1 — Rockies & Desert",
    name: "Boulder, CO",
    subtitle: "CU Boulder · Departure Day",
    dates: "May 18",
    status: "completed",
    lat: 40.0150,
    lng: -105.2705,
    highlights: ["Packed up and hit the road", "Surprise change of plans — headed to Arches!"],
    emoji: "🎓",
    nights: 0,
  },
  {
    id: 2,
    phase: "Phase 1 — Rockies & Desert",
    name: "Arches National Park",
    subtitle: "Utah · Surprise First Stop ✅",
    dates: "May 18–19",
    status: "completed",
    lat: 38.7331,
    lng: -109.5925,
    highlights: [
      "Delicate Arch hike",
      "Park Avenue & Balanced Rock",
      "Windows Section & Double Arch",
      "Camped overnight in Moab",
    ],
    emoji: "🌅",
    nights: 1,
  },

  // ── PHASE 2: UTAH ─────────────────────────────────────────
  {
    id: 3,
    phase: "Phase 2 — Utah",
    name: "Salt Lake City, UT",
    subtitle: "Utah · Airbnb (tonight) & Family Friends (May 21)",
    dates: "May 19 & 21",
    status: "completed",
    lat: 40.7608,
    lng: -111.8910,
    highlights: [
      "Airbnb night (May 19) — rested and restocked",
      "Back May 21 to stay with family friends",
      "Laundry, food run, gear check",
    ],
    emoji: "🏙️",
    nights: 2,
  },
  {
    id: 4,
    phase: "Phase 2 — Utah",
    name: "Grand Teton National Park",
    subtitle: "Wyoming",
    dates: "May 20–21",
    status: "completed",
    lat: 43.7904,
    lng: -110.6818,
    highlights: [
      "Jenny Lake Ferry → Hidden Falls → Inspiration Point",
      "Overnight at Jenny Lake Campground",
      "Schwabacher Landing sunrise & Mormon Row",
      "Snake River Overlook",
    ],
    emoji: "🏔️",
    nights: 1,
  },
  {
    id: 5,
    phase: "Phase 2 — Utah",
    name: "Yellowstone National Park",
    subtitle: "Wyoming · Surprise stop! ✅",
    dates: "May 21",
    status: "completed",
    lat: 44.4280,
    lng: -110.5885,
    highlights: [
      "Old Faithful eruption 🌋",
      "Grand Prismatic Spring area",
      "Day visit on the drive back to SLC",
    ],
    emoji: "🌋",
    nights: 0,
  },
  {
    id: 6,
    phase: "Phase 2 — Utah",
    name: "Zion National Park",
    subtitle: "Utah · Sleep in St. George",
    dates: "May 22–23",
    status: "current",
    lat: 37.2982,
    lng: -113.0263,
    highlights: [
      "Pa'rus Trail & Watchman Trail",
      "Riverside Walk & Emerald Pools",
      "Scout Lookout or Angels Landing (permit)",
      "The Narrows (conditions permitting)",
    ],
    emoji: "🏜️",
    nights: 1,
  },

  // ── PHASE 3: CALIFORNIA ───────────────────────────────────
  {
    id: 6,
    phase: "Phase 3 — California",
    name: "Yosemite National Park",
    subtitle: "California · Arrive May 23",
    dates: "May 23–26",
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
    id: 7,
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
    ],
    emoji: "🌉",
    nights: 0,
  },
  {
    id: 8,
    phase: "Phase 3 — California",
    name: "Monterey & Carmel, CA",
    subtitle: "California · Quick Stop",
    dates: "May 27",
    status: "upcoming",
    lat: 36.6002,
    lng: -121.8947,
    highlights: [
      "Cannery Row & Carmel Beach",
      "17-Mile Drive",
    ],
    emoji: "🌊",
    nights: 0,
  },
  {
    id: 9,
    phase: "Phase 3 — California",
    name: "San Luis Obispo, CA",
    subtitle: "California · Overnight Stop",
    dates: "May 27",
    status: "upcoming",
    lat: 35.2828,
    lng: -120.6596,
    highlights: ["Pismo Beach overnight", "Halfway between Monterey and LA"],
    emoji: "🌴",
    nights: 1,
  },
  {
    id: 10,
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
    ],
    emoji: "🎬",
    nights: 3,
  },

  // ── PHASE 4: HOME ─────────────────────────────────────────
  {
    id: 11,
    phase: "Phase 4 — Home",
    name: "Boulder, CO",
    subtitle: "Back home! 🎉",
    dates: "June 1",
    status: "upcoming",
    lat: 40.0150,
    lng: -105.2705,
    highlights: ["Road trip complete!", "Arches first, California coast, Tetons — what a run"],
    emoji: "🏠",
    nights: 0,
  },
];

// ─────────────────────────────────────────────
// 📊 STATS
// Update these as you go!
// ─────────────────────────────────────────────
const STATS = {
  milesDriven: 1390,       // Boulder→Arches(420)+Arches→SLC(240)+SLC→Teton(280)+Teton→Yellowstone(60)+Yellowstone→SLC(325)+SLC→Zion(310 in progress, partial)
  totalMiles: 3700,        // updated for Yellowstone detour added to route
  stopsCompleted: 5,       // Boulder, Arches, SLC, Grand Teton, Yellowstone
  totalStops: 12,          // added Yellowstone
  statesVisited: ["CO", "UT", "WY"],
  daysOnRoad: 5,
  tripStartDate: "2026-05-18",
  hikesMiles: 15,          // Arches (~6 mi) + Jenny Lake area (~7 mi) + Old Faithful area (~2 mi)
  nightsCamped: 2,         // Moab (Arches) + Jenny Lake Campground
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
// 📅 DAY-BY-DAY ITINERARY
// Shown on the Agenda page "Day by Day" tab.
// Update `status` as you go: "done" | "today" | "upcoming"
// ─────────────────────────────────────────────
const DAYS = [
  // ── DAY 1 ─────────────────────────────────────────────
  {
    date: "Mon, May 18",
    route: "Boulder → Arches National Park",
    drive: "~6.5–7 hrs",
    sleep: "Moab, UT",
    phase: "Phase 1 — Rockies & Desert",
    status: "past",
    plan: [
      { section: "🏕️ Stay", items: [
        "Arches Campground inside the park, or motel in Moab",
      ]},
      { section: "📍 Evening at Arches", items: [
        "Park Avenue Viewpoint — massive sandstone fins at golden hour",
        "Balanced Rock — 0.3 mi easy walk, iconic shot",
        "Windows Section — North Window, South Window, Double Arch (0.7 mi loop)",
        "Delicate Arch Lower Viewpoint — no hike needed, stunning at sunset",
      ]},
      { section: "🍽️ Food", items: [
        "Dinner in Moab: Moab Brewery or Spoke on Center",
      ]},
    ],
    note: "Changed plans — Arches first! Great call.",
  },

  // ── DAY 2 ─────────────────────────────────────────────
  {
    date: "Tue, May 19",
    route: "Arches → Salt Lake City",
    drive: "~3.5–4 hrs",
    sleep: "Salt Lake City — Airbnb",
    phase: "Phase 1 — Rockies & Desert",
    status: "today",
    plan: [
      { section: "🌅 Morning at Arches", items: [
        "Delicate Arch hike (3 mi RT, 480 ft gain) — best in morning light",
        "Fiery Furnace Viewpoint on the way out",
      ]},
      { section: "🚗 Drive to SLC", items: [
        "Moab → Green River → I-70 W → SLC (~3.5–4 hrs)",
        "Arrive SLC, check in to Airbnb",
      ]},
      { section: "🛒 Reset", items: [
        "Restock food, snacks, and water at Walmart or Smith's",
        "Laundry if needed",
        "Rest up — Grand Teton drive tomorrow",
      ]},
      { section: "🍽️ Food", items: [
        "Lunch on the road",
        "Dinner in SLC: Red Iguana (best Mexican in Utah), The Porch, or RoHa Brewing",
      ]},
    ],
    note: "You are here! Chill evening — Tetons tomorrow.",
  },

  // ── DAY 3 ─────────────────────────────────────────────
  {
    date: "Wed, May 20",
    route: "Salt Lake City → Grand Teton",
    drive: "~4.5–5 hrs",
    sleep: "Jenny Lake Campground",
    phase: "Phase 2 — Utah",
    status: "past",
    plan: [
      { section: "🏕️ Stay", items: [
        "Jenny Lake Campground — first-come, right on the lake (arrive before noon to grab a site)",
        "Small sites, no hookups — pure wilderness camp",
      ]},
      { section: "🚗 Drive", items: [
        "SLC → Ogden → I-84 E → US-89 N through Star Valley into Jackson",
        "Arrive Jackson area early afternoon if possible",
      ]},
      { section: "🥾 Hike — Jenny Lake Area", items: [
        "Jenny Lake Ferry → Hidden Falls → Inspiration Point (7 mi, moderate) — take the boat one way",
        "OR Taggart Lake Loop (3.8 mi, easy) if arriving later in the day",
        "Camp at Jenny Lake after — perfect sunset from the shore",
      ]},
      { section: "🍽️ Food", items: [
        "Breakfast in SLC before leaving",
        "Pack lunch for the trail",
        "Dinner: cook at camp or grab something quick in Moose Junction",
      ]},
    ],
    note: "Jenny Lake sites go fast — aim to arrive by noon or 1 PM.",
  },

  // ── DAY 4 ─────────────────────────────────────────────
  {
    date: "Thu, May 21",
    route: "Grand Teton → Yellowstone → Salt Lake City",
    drive: "~6–7 hrs",
    sleep: "Salt Lake City — Family Friends",
    phase: "Phase 2 — Utah",
    status: "past",
    plan: [
      { section: "🌅 Morning at the Tetons", items: [
        "Sunrise at Schwabacher Landing — Teton reflections on the Snake River",
        "Mormon Row — Moulton Barn with the full range behind it",
        "Snake River Overlook",
      ]},
      { section: "🌋 Yellowstone Detour", items: [
        "North through Grand Teton → Yellowstone South Entrance",
        "Old Faithful eruption — watched it go off! 🌋",
        "Grand Prismatic Spring overlook",
        "Yellowstone Lake viewpoint on the way through",
      ]},
      { section: "🚗 Drive to SLC", items: [
        "Yellowstone West Entrance → Idaho Falls → SLC (~4.5 hrs)",
        "Arrived at family friends — home-cooked dinner 🙏",
      ]},
    ],
    note: "Best unplanned detour of the trip.",
  },

  // ── DAY 5 ─────────────────────────────────────────────
  {
    date: "Fri, May 22",
    route: "Salt Lake City → Zion → St. George",
    drive: "~4.5–5 hrs",
    sleep: "St. George, UT",
    phase: "Phase 2 — Utah",
    status: "today",
    plan: [
      { section: "🏨 Stay", items: [
        "St. George motel or Airbnb — ~30 min from Zion's east entrance",
        "Best Western Plus Abbey Inn or Airbnb near downtown St. George",
      ]},
      { section: "🚗 Drive", items: [
        "SLC → Provo → US-89 S → Hurricane → Springdale (~4.5 hrs)",
        "Stop at a gas station in Hurricane — last cheap gas near the park",
      ]},
      { section: "🥾 Afternoon in Zion", items: [
        "Pa'rus Trail (1.7 mi, paved, easy) — perfect first look at the canyon",
        "Canyon Overlook Trail (1 mi out-and-back) — great views, short effort",
        "Watchman Trail (3.3 mi, moderate) — best sunset overlook in the park",
      ]},
      { section: "🍽️ Food", items: [
        "Breakfast with family before leaving SLC",
        "Dinner in Springdale or St. George: Oscar's Café, Whiptail Grill, or Black Bear Diner",
      ]},
      { section: "📋 Logistics", items: [
        "Buy America the Beautiful Annual Pass at Zion entry ($80 — covers Yosemite too)",
        "Check Angels Landing permit lottery at recreation.gov (optional — Scout Lookout is free)",
      ]},
    ],
  },

  // ── DAY 6 ─────────────────────────────────────────────
  {
    date: "Sat, May 23",
    route: "St. George → Las Vegas → Yosemite",
    drive: "~8–9 hrs",
    sleep: "Yosemite Valley / El Portal / Mariposa",
    phase: "Phase 3 — California",
    status: "upcoming",
    plan: [
      { section: "🏕️ Stay", items: [
        "Upper Pines Campground (Yosemite Valley) — book at recreation.gov",
        "OR Half Dome Village tent cabins (Curry Village)",
        "OR motel in El Portal or Mariposa if camping is full",
      ]},
      { section: "🚗 Drive", items: [
        "St. George → Las Vegas (~1.5 hrs) via I-15 S",
        "Gas and food in Las Vegas — last cheap stop before California",
        "Las Vegas → Barstow → Bakersfield → Merced → Yosemite (~6.5 hrs)",
        "Enter via CA-140 from Merced — most reliable, open year-round",
      ]},
      { section: "🎰 Las Vegas Quick Stop", items: [
        "In-N-Out on the Strip — Double-Double Animal Style (mandatory)",
        "Keep it short — you've got miles to cover",
      ]},
      { section: "📍 Arriving Yosemite", items: [
        "Tunnel View — your first look at El Cap, Half Dome, and Bridalveil Fall",
        "Bridalveil Fall short walk (0.5 mi) if it's not too late",
      ]},
      { section: "📋 Logistics", items: [
        "Do NOT enter from the east (Tioga Pass may still be closed in May)",
        "Confirm campsite / lodging before hitting the road",
      ]},
    ],
    note: "Long haul but worth it — you wake up in Yosemite Valley tomorrow.",
  },

  // ── DAY 7 ─────────────────────────────────────────────
  {
    date: "Sun, May 24",
    route: "Central CA → Yosemite",
    drive: "~2.5–4.5 hrs",
    sleep: "Yosemite Valley / El Portal / Mariposa",
    phase: "Phase 3 — California",
    status: "upcoming",
    plan: [
      { section: "🏕️ Stay", items: [
        "Upper Pines Campground — best location in Yosemite Valley, reservations required at recreation.gov",
        "OR Lower Pines Campground — on the valley floor near Mirror Lake trailhead",
        "OR tent cabin at Half Dome Village (Curry Village) — easy booking, affordable",
        "OR motel in El Portal or Mariposa if camping is full",
      ]},
      { section: "🚗 Drive", items: [
        "Enter via CA-140 (El Portal Road) from Merced — most reliable, open year-round",
        "Arrive at Tunnel View first — the iconic first look at Yosemite Valley",
      ]},
      { section: "📍 First Day Stops", items: [
        "Tunnel View — El Capitan, Half Dome, and Bridalveil Fall all at once",
        "Bridalveil Fall — short 0.5 mi walk, expect to get misted",
        "Valley View — opposite end of the valley, great El Cap framing",
        "Cook's Meadow stroll — look for deer, evening light on El Cap",
        "Lower Yosemite Fall — 1 mi easy loop, impressive early-season flow",
      ]},
      { section: "🍽️ Food", items: [
        "Lunch on the road before entering",
        "Dinner at Valley Lodge Bar & Grill or Degnan's Kitchen in Yosemite Village",
      ]},
    ],
  },

  // ── DAY 8 ─────────────────────────────────────────────
  {
    date: "Mon, May 25",
    route: "Yosemite — Valley Day",
    drive: null,
    sleep: "Yosemite Valley / El Portal / Mariposa",
    phase: "Phase 3 — California",
    status: "upcoming",
    plan: [
      { section: "🌅 Morning", items: [
        "Mirror Lake loop (5 mi, easy) — start at 7 AM for the best Half Dome reflections",
        "Meadow walk back to camp for breakfast",
      ]},
      { section: "🥾 Hikes & Walks", items: [
        "El Capitan Meadow — watch free soloists on the granite face with binoculars",
        "Sentinel Meadow → Swinging Bridge — calm meadow views, great for photos",
        "Cook's Meadow Loop (1 mi, flat) — Cathedral Rocks reflected in the meadow",
      ]},
      { section: "🌄 Evening", items: [
        "Tunnel View at golden hour — best light hits around 7–8 PM in late May",
        "Valley View for sunset colors on El Capitan",
      ]},
      { section: "🍽️ Food", items: [
        "Picnic lunch in a meadow — pick up supplies at Yosemite Valley Store",
        "Dinner at Village Grill Deck (burgers & sandwiches, outdoor seating)",
      ]},
    ],
    note: "Low-key day — soak it in. Save legs for the big hike tomorrow.",
  },

  // ── DAY 9 ─────────────────────────────────────────────
  {
    date: "Tue, May 26",
    route: "Yosemite — Big Hike Day",
    drive: null,
    sleep: "Yosemite Valley / El Portal / Mariposa",
    phase: "Phase 3 — California",
    status: "upcoming",
    plan: [
      { section: "🥾 Option A — Half Dome (permit required)", items: [
        "Start by 4 AM — 16 mi RT, 4,800 ft gain, cables section near the top",
        "Enter the day-of lottery at recreation.gov (draws at 7 PM the night before, $10)",
        "Bring gloves for the cables, plenty of water, and layers",
      ]},
      { section: "🥾 Option B — Mist Trail (no permit)", items: [
        "Mist Trail → Vernal Fall → Nevada Fall (7 mi RT, 2,000 ft gain)",
        "Start by 7 AM — waterfalls are at full roar in late May, bring a rain jacket",
        "Vernal Fall is one of the most spectacular waterfalls in the US at peak flow",
      ]},
      { section: "🥾 Option C — Glacier Point", items: [
        "Drive or take the bus up Glacier Point Road (if open in late May)",
        "30-minute drive to a panoramic overlook of Half Dome, Nevada Fall, and the full valley",
        "Combine with a walk down Four Mile Trail (4.8 mi, strenuous downhill)",
      ]},
      { section: "🍽️ Food", items: [
        "Pack a full day's food — no services on trail",
        "Dinner at Yosemite Valley Lodge or a celebratory sit-down at The Ahwahnee Bar (walk-ins ok)",
      ]},
    ],
    note: "Half Dome lottery fills fast — try the night before. Mist Trail is never a bad backup.",
  },

  // ── DAY 10 ─────────────────────────────────────────────
  {
    date: "Wed, May 27",
    route: "Yosemite → SF → Monterey → SLO",
    drive: "~7–9 hrs total",
    sleep: "San Luis Obispo / Pismo Beach",
    phase: "Phase 3 — California",
    status: "upcoming",
    plan: [
      { section: "🏨 Stay", items: [
        "SLO: HI Hostel Obispo (cheap, social, great location), or Airbnb near downtown",
        "Pismo Beach: Adagio Inn or beachside Airbnb — wake up to the ocean",
      ]},
      { section: "🌉 San Francisco", items: [
        "Golden Gate Bridge — walk the bridge or shoot from Vista Point on the Marin side",
        "Lands End Coastal Trail (3.4 mi) — hidden ruins, ocean views, connecting to Baker Beach",
        "Palace of Fine Arts — quick stop for photos",
        "Ghirardelli Square for a hot fudge sundae (optional, obviously mandatory)",
      ]},
      { section: "🦦 Monterey", items: [
        "Cannery Row — walk along the waterfront",
        "Monterey Bay Aquarium (2–3 hrs if you stop — sea otters are worth it)",
        "17-Mile Drive through Pebble Beach — Lone Cypress, Bird Rock, ghost tree",
        "Carmel-by-the-Sea Beach — white sand, turquoise water, surreal for California",
      ]},
      { section: "🍽️ Food", items: [
        "Clam chowder in a bread bowl on Cannery Row (Old Fisherman's Grotto)",
        "Dinner in SLO: Firestone Grill (tri-tip sandwich!), or Luna Red",
      ]},
      { section: "📋 Logistics", items: [
        "Leave Yosemite by 8 AM to have enough time at both SF and Monterey",
        "17-Mile Drive toll is $12 — cash or card at the gate",
      ]},
    ],
    note: "Sleep in SLO or Pismo — cuts LA drive to ~3 hrs tomorrow instead of 6+.",
  },

  // ── DAY 11 ─────────────────────────────────────────────
  {
    date: "Thu, May 28",
    route: "Coast → Los Angeles",
    drive: "~3.5–4.5 hrs from SLO",
    sleep: "LA / Burbank",
    phase: "Phase 3 — California",
    status: "upcoming",
    plan: [
      { section: "🏨 Stay", items: [
        "Burbank: Hotel Amarano, Safari Inn, or family/friend's place",
        "Hollywood / Silver Lake: Airbnb for more of a local feel",
      ]},
      { section: "📍 Stops Along the Way", items: [
        "Santa Barbara: Stearns Wharf, State Street walk, mission architecture (~45 min stop)",
        "El Matador State Beach in Malibu — dramatic sea stacks, one of the best beaches in CA",
        "Malibu Pier for photos, then cruise the PCH into the city",
        "Santa Monica Pier: quick walk on the boardwalk",
      ]},
      { section: "🍽️ Food", items: [
        "Breakfast in SLO before leaving",
        "In-N-Out in LA — Double-Double Animal Style (this is non-negotiable)",
        "Dinner in Burbank or Los Feliz: Caioti Pizza, Little Dom's, or family dinner",
      ]},
    ],
  },

  // ── DAY 12 ─────────────────────────────────────────────
  {
    date: "Fri, May 29",
    route: "Los Angeles — Day 1",
    drive: null,
    sleep: "LA / Burbank",
    phase: "Phase 3 — California",
    status: "upcoming",
    plan: [
      { section: "🔭 Morning", items: [
        "Griffith Observatory — free entry, best views of the Hollywood Sign and downtown skyline",
        "Hike up from the Greek Theatre parking lot for extra credit",
      ]},
      { section: "🎬 Midday", items: [
        "Burbank / Studio City stroll — Warner Bros. lot area, Magnolia Blvd",
        "Lunch in Studio City: Aeirloom Bakery or the Trails Café up in Griffith Park",
      ]},
      { section: "🌊 Afternoon", items: [
        "Santa Monica Beach & Pier — rent bikes and ride the Strand south toward Venice",
        "Venice Beach Boardwalk — street performers, Muscle Beach, Abbott Kinney boutiques",
        "Sunset at the Santa Monica Pier or Palisades Park bluff",
      ]},
      { section: "🍽️ Food", items: [
        "Dinner: Gjusta in Venice, Erewhon smoothie bar, or family dinner in Burbank",
      ]},
    ],
  },

  // ── DAY 13 ─────────────────────────────────────────────
  {
    date: "Sat, May 30",
    route: "Los Angeles — Day 2",
    drive: null,
    sleep: "LA / Burbank",
    phase: "Phase 3 — California",
    status: "upcoming",
    plan: [
      { section: "🌿 Activities (pick 1–2)", items: [
        "Getty Center — free admission, incredible views + world-class art (reserve timed entry)",
        "Pasadena: Old Town shops, Colorado Street Bridge, Huntington Library gardens",
        "Malibu: El Matador Beach if you didn't stop on Day 11",
        "Manhattan Beach or Hermosa Beach — laid-back, great for a beach hang",
        "LACMA — free after 3 PM on some days, giant street lamp installation out front",
      ]},
      { section: "🍽️ Food", items: [
        "Brunch: Sqirl in Silver Lake (iconic açaí bowls & toast), or République in Mid-City",
        "Dinner: Koreatown BBQ (Park's BBQ, Genwa) — group BBQ experience",
      ]},
      { section: "📋 Evening Logistics (important!)", items: [
        "Pack the car tonight — everything loaded before bed",
        "Fill gas tank tonight (leave by 6 AM tomorrow)",
        "Download offline maps for Utah: Moab, Arches National Park",
        "Confirm Moab lodging reservation",
        "Set alarm for 5:30 AM",
      ]},
    ],
    note: "Pack everything tonight. It's a 10–11 hour drive tomorrow — leave early or suffer.",
  },

  // ── DAY 14 ─────────────────────────────────────────────
  {
    date: "Sun, May 31",
    route: "LA → Las Vegas",
    drive: "~4 hrs",
    sleep: "Las Vegas, NV",
    phase: "Phase 4 — Home",
    status: "upcoming",
    plan: [
      { section: "🏨 Stay", items: [
        "Las Vegas hotel — great deals on Sunday nights (off-peak)",
        "Excalibur, Luxor, Park MGM, or an Airbnb off-Strip for cheaper rates",
      ]},
      { section: "🚗 Drive", items: [
        "Relaxed morning in LA — no need to rush",
        "LA → Las Vegas via I-15 N (~4 hrs)",
        "Arrive early-mid afternoon",
      ]},
      { section: "🎰 Vegas Evening", items: [
        "Walk the Strip — Bellagio, Cosmopolitan, Park MGM area",
        "Dinner: Secret Pizza on the 3rd floor of the Cosmopolitan (cheap, legendary, no signage)",
        "Watch the Bellagio fountains at night — free and worth it",
      ]},
      { section: "📋 Logistics", items: [
        "Pack the car before leaving LA the night before",
        "Download offline maps for I-15 N and US-89 / I-70 home",
        "Sleep early — big drive tomorrow",
      ]},
    ],
    note: "Split the drive home — way better than a 13-hour death march from LA.",
  },

  // ── DAY 15 ─────────────────────────────────────────────
  {
    date: "Mon, June 1",
    route: "Las Vegas → Boulder 🏠",
    drive: "~9–9.5 hrs",
    sleep: "Boulder — Home!",
    phase: "Phase 4 — Home",
    status: "upcoming",
    plan: [
      { section: "🌅 Morning", items: [
        "Early start from Vegas — leave by 7–8 AM",
        "In-N-Out breakfast burger to go (multiple locations open early)",
      ]},
      { section: "🚗 Drive Home", items: [
        "Las Vegas → St. George, UT (~2 hrs)",
        "St. George → Grand Junction via I-15 N → US-191 N → I-70 E (~4 hrs)",
        "Grand Junction → Glenwood Springs → Denver → Boulder (~3 hrs)",
        "Arrive Boulder ~5–6 PM 🎉",
      ]},
      { section: "🍺 Celebrate", items: [
        "Sanitas Brewing Co. or Backcountry Pizza — you earned every sip",
        "Chautauqua Park sunset walk if the legs are still there",
      ]},
    ],
    note: "Arches on Day 1, Tetons, Zion, Yosemite, California coast — what a run. Welcome home.",
  },
];

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
  tagline: "Boulder → Arches → Tetons → Yellowstone → Zion → Yosemite → LA → Home",
  travelers: ["Chandler", "Teigan"],
  startLocation: "Boulder, CO",
  endLocation: "Boulder, CO (round trip)",
  startDate: "May 18, 2026",
  estimatedEndDate: "June 1, 2026",
  instagramHandle: "",  // optional: "@yourhandle"
};

// ── DO NOT EDIT BELOW THIS LINE ────────────────────────────
if (typeof module !== "undefined") module.exports = {
  CURRENT_LOCATION, STOPS, DAYS, STATS, SPOTIFY_PLAYLIST_URL, DONATION, GALLERY, GOOGLE_PHOTOS_URL, TRIP_META,
};
