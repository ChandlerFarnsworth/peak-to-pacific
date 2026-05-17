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
// 📅 DAY-BY-DAY ITINERARY
// Shown on the Agenda page "Day by Day" tab.
// Update `status` as you go: "done" | "today" | "upcoming"
// ─────────────────────────────────────────────
const DAYS = [
  // ── DAY 1 ─────────────────────────────────────────────
  {
    date: "Mon, May 18",
    route: "Boulder → Grand Teton",
    drive: "~8–9 hrs",
    sleep: "Jackson / Teton area",
    phase: "Phase 1 — Rockies",
    status: "upcoming",
    plan: [
      { section: "🏕️ Stay", items: [
        "Headwaters Campground at Flagg Ranch — inside park, book at recreation.gov",
        "OR Gros Ventre Campground near Moose — first-come, great valley views",
        "OR motel in Jackson (~$120–180/night)",
      ]},
      { section: "📍 Evening Stops", items: [
        "Schwabacher Landing — golden hour reflections of the Tetons",
        "Mormon Row — Moulton Barn with Teton backdrop",
        "Snake River Overlook — Ansel Adams' famous vantage point",
      ]},
      { section: "🍽️ Food", items: [
        "Dinner in Jackson: Million Dollar Cowboy Bar or Persephone Bakery",
      ]},
      { section: "📋 Logistics", items: [
        "Leave Boulder by 7 AM to arrive for sunset",
        "Gas up before leaving — Wyoming gas is pricier",
        "Download Gaia GPS offline maps before you go",
      ]},
    ],
    note: "Keep it light — no big hike after 8+ hrs of driving.",
  },

  // ── DAY 2 ─────────────────────────────────────────────
  {
    date: "Tue, May 19",
    route: "Grand Teton — Full Day",
    drive: null,
    sleep: "Jackson / Teton area",
    phase: "Phase 1 — Rockies",
    status: "upcoming",
    plan: [
      { section: "🌅 Morning", items: [
        "Sunrise at Schwabacher Landing (~5:30 AM) or String Lake",
        "Coffee & breakfast at camp or in Jackson",
      ]},
      { section: "🥾 Hikes", items: [
        "Jenny Lake Ferry → Hidden Falls → Inspiration Point (7 mi, moderate) — take the boat one way",
        "Taggart Lake Loop (3.8 mi, easy) — stunning glacier lake",
        "Bradley Lake extension adds ~1 mile and is worth it",
        "Pack a lunch — eat at the Jenny Lake shore",
      ]},
      { section: "🌄 Evening", items: [
        "Sunset at Mormon Row or Snake River Overlook",
        "Dinner in Jackson: Local Restaurant & Bar or Snake River Grill",
      ]},
    ],
    note: "Avoid Delta Lake unless confirmed snow-free — typically still buried in late May.",
  },

  // ── DAY 3 ─────────────────────────────────────────────
  {
    date: "Wed, May 20",
    route: "Grand Teton → Salt Lake City",
    drive: "~5–6 hrs",
    sleep: "Salt Lake City",
    phase: "Phase 1 — Rockies",
    status: "upcoming",
    plan: [
      { section: "🏨 Stay", items: [
        "Hotel in SLC — Marriott City Center, Hilton, or Airbnb downtown",
        "Real bed + real shower before Utah parks",
      ]},
      { section: "🌅 Morning", items: [
        "One last Teton viewpoint with coffee before leaving",
        "Drive south on US-89 through Star Valley",
      ]},
      { section: "🛒 Activities", items: [
        "Restock food, snacks, and water at Walmart or Smith's",
        "Laundry if needed — next opportunity is LA",
        "Check gear: headlamps, water filters, first aid",
      ]},
      { section: "🍽️ Food", items: [
        "Lunch on the road",
        "Dinner in SLC: Red Iguana (best Mexican in Utah), The Porch, or RoHa Brewing",
      ]},
    ],
    note: "Pure reset day — rest up, restock, and prep for the Utah parks push.",
  },

  // ── DAY 4 ─────────────────────────────────────────────
  {
    date: "Thu, May 21",
    route: "Salt Lake City → Zion",
    drive: "~4.5–5 hrs",
    sleep: "Springdale / Watchman Campground",
    phase: "Phase 2 — Utah",
    status: "upcoming",
    plan: [
      { section: "🏕️ Stay", items: [
        "Watchman Campground — inside the park gates, reservations at recreation.gov",
        "OR South Campground — more open, first-come",
        "OR Airbnb/motel in Springdale (quieter, full kitchen)",
      ]},
      { section: "🚗 Drive", items: [
        "SLC → Provo → US-89 S → Hurricane → Springdale",
        "Stop at a gas station in Hurricane — last cheap gas before the park",
      ]},
      { section: "🥾 Afternoon Hikes", items: [
        "Pa'rus Trail (1.7 mi, paved, easy) — perfect first look at the canyon",
        "Canyon Overlook Trail (1 mi out-and-back) — sweeping views of lower Zion, minimal effort",
        "Watchman Trail (3.3 mi, moderate) — best sunset spot, overlooking the campground and valley",
      ]},
      { section: "🍽️ Food", items: [
        "Breakfast in SLC before driving",
        "Dinner in Springdale: Oscar's Café, Zion Pizza & Noodle, or Whiptail Grill",
      ]},
      { section: "📋 Logistics", items: [
        "Buy America the Beautiful Annual Pass at park entry ($80 — covers all parks this trip)",
        "Pick up free shuttle map inside the visitor center",
        "Check Angels Landing permit status at recreation.gov (daily lottery, enter by midnight)",
      ]},
    ],
  },

  // ── DAY 5 ─────────────────────────────────────────────
  {
    date: "Fri, May 22",
    route: "Zion — Full Day",
    drive: null,
    sleep: "Springdale / Watchman Campground",
    phase: "Phase 2 — Utah",
    status: "upcoming",
    plan: [
      { section: "🌅 Morning", items: [
        "Catch the 6 AM shuttle — beat the heat and crowds significantly",
        "Breakfast at camp before heading out",
      ]},
      { section: "🥾 Hikes", items: [
        "Riverside Walk (2 mi, paved, easy) — canyon narrows at the end, flows into the Narrows",
        "The Narrows — wade up the Virgin River, rent water shoes at Zion Outfitter in Springdale",
        "Emerald Pools: Lower → Middle → Upper (3 mi loop, moderate) — hanging garden vibes",
        "Scout Lookout via West Rim Trail (4 mi RT, strenuous) — best no-permit Angels Landing view",
      ]},
      { section: "🍽️ Food", items: [
        "Pack lunch — eat on the riverbank or at a picnic area",
        "Dinner: Bit & Spur Restaurant & Saloon (Mexican, local fave), or Spotted Dog Café",
      ]},
      { section: "📋 Logistics", items: [
        "Angels Landing permit: enter the daily lottery at recreation.gov (draws at 5 AM)",
        "Narrows water level: check at nps.gov/zion before wading",
        "Rent neoprene socks + walking stick from Zion Outfitter if doing the Narrows",
      ]},
    ],
    note: "If you have an Angels Landing permit, do it first thing — before it gets hot and crowded.",
  },

  // ── DAY 6 ─────────────────────────────────────────────
  {
    date: "Sat, May 23",
    route: "Zion → Central California",
    drive: "~7–9 hrs",
    sleep: "Bakersfield / Visalia / Fresno",
    phase: "Phase 3 — California",
    status: "upcoming",
    plan: [
      { section: "🏨 Stay", items: [
        "Budget motel in Bakersfield, Visalia, or Fresno — just need a bed",
        "Extended Stay America Fresno or Courtyard Visalia work well",
      ]},
      { section: "🚗 Drive", items: [
        "Zion → Las Vegas (~2.5 hrs) via I-15 N",
        "Las Vegas → Barstow → Bakersfield / Fresno (~4.5–6 hrs more)",
        "Enter Yosemite tomorrow via CA-140 from Merced — most reliable, no snow risk",
      ]},
      { section: "🎰 Optional Stop", items: [
        "Quick Las Vegas Strip walk if arriving mid-afternoon (In-N-Out on the Strip is mandatory)",
        "Don't lose time here — keep it under an hour",
      ]},
      { section: "📋 Logistics", items: [
        "Gas up in Las Vegas — California gas is more expensive",
        "Do NOT plan to enter Yosemite from the east (Tioga Pass may still be closed in late May)",
        "Confirm Yosemite campsite reservation tonight",
      ]},
    ],
    note: "Positioning drive — rest up. Yosemite starts tomorrow.",
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
    route: "LA → Moab / Arches",
    drive: "~10–11 hrs",
    sleep: "Moab, UT",
    phase: "Phase 4 — Desert & Home",
    status: "upcoming",
    plan: [
      { section: "🏕️ Stay", items: [
        "Arches Campground — inside the park gates, book at recreation.gov (very competitive)",
        "OR Canyonlands Campground in town — full hookups, pool, great base",
        "OR Aarchway Inn or Moab Valley RV Resort",
      ]},
      { section: "🚗 Drive", items: [
        "Leave LA by 6 AM — I-15 N through Las Vegas (~4 hrs to Vegas)",
        "Gas in Las Vegas, snacks packed the night before",
        "Vegas → St. George → I-70 E → Moab (~6–7 hrs more)",
        "Arrive Moab ~5–7 PM depending on stops",
      ]},
      { section: "🪨 Evening at Arches", items: [
        "Park Avenue Viewpoint — massive sandstone fins at golden hour",
        "Balanced Rock — 0.3 mi easy walk, iconic shot",
        "Windows Section — North Window, South Window, Double Arch (0.7 mi loop)",
        "Delicate Arch Lower Viewpoint — no hike needed, stunning at sunset",
      ]},
      { section: "🍽️ Food", items: [
        "Pack snacks and lunch for the drive",
        "Dinner in Moab: Moab Brewery (reliable), Spoke on Center (great burgers)",
      ]},
    ],
    note: "Longest drive of the trip — leave as early as humanly possible.",
  },

  // ── DAY 15 ─────────────────────────────────────────────
  {
    date: "Mon, June 1",
    route: "Moab → Boulder 🏠",
    drive: "~6–6.5 hrs",
    sleep: "Boulder — Home!",
    phase: "Phase 4 — Desert & Home",
    status: "upcoming",
    plan: [
      { section: "🌅 Morning — Arches", items: [
        "Delicate Arch hike (3 mi RT, 480 ft gain) — start by 5:30 AM for sunrise light",
        "Fiery Furnace Viewpoint on the way out — dramatic labyrinth of fins",
        "Be back at the car by 8 AM at the latest",
      ]},
      { section: "🚗 Drive Home", items: [
        "Moab → Grand Junction, CO (~1.5 hrs) — quick breakfast stop",
        "Grand Junction → Glenwood Springs → Denver → Boulder (~4.5 hrs)",
        "Stop in Glenwood Springs if you want coffee + a quick stretch",
        "Arrive Boulder ~2:30–3 PM 🎉",
      ]},
      { section: "🍺 Celebrate", items: [
        "Sanitas Brewing Co. or Backcountry Pizza — earned it",
        "Chautauqua Park sunset walk if you have the legs left",
      ]},
    ],
    note: "Leave by 7 AM. Skip the morning Arches hike if you'd rather sleep in and drive relaxed.",
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
  CURRENT_LOCATION, STOPS, DAYS, STATS, SPOTIFY_PLAYLIST_URL, DONATION, GALLERY, GOOGLE_PHOTOS_URL, TRIP_META,
};
