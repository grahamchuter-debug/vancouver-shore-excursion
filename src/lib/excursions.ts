export type FitnessLevel = "Easy" | "Moderate" | "Difficult";
export type ReturnConfidence = "High" | "Moderate" | "Tight";

export type CruiseSnapshotFields = {
  timeInPort?: string;
  bestFor?: string;
  activityLevel?: string;
  familyFriendly?: string;
  returnToShip?: string;
  popularTypes?: string;
};

export type Excursion = {
  slug: string;
  path: string;
  title: string;
  shortTitle: string;
  summary: string;
  duration: string;
  fitness: FitnessLevel;
  distanceFromTerminal: string;
  transferRequired: boolean;
  transferNote: string;
  bestFor: string[];
  returnConfidence: ReturnConfidence;
  returnNote: string;
  weatherConsiderations: string;
  cruiseSnapshot: string;
  snapshotFields: CruiseSnapshotFields;
  description: string[];
  highlights: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
  heroImage?: string;
  heroImageAlt?: string;
};

export const excursions: Excursion[] = [
  {
    slug: "best-of-vancouver-and-bridge",
    path: "/best-of-vancouver-and-bridge",
    title: "Best of Vancouver & Bridge Shore Excursion",
    shortTitle: "Best of Vancouver & Bridge",
    summary:
      "A comprehensive introduction to Vancouver — Stanley Park seawall views, Lions Gate Bridge, Capilano Suspension Bridge, and downtown highlights in one well-paced cruise day.",
    duration: "5–6 hours (typical organised tour)",
    fitness: "Easy",
    distanceFromTerminal:
      "Canada Place is downtown; Capilano is roughly 15 km north across Burrard Inlet.",
    transferRequired: true,
    transferNote:
      "Coach or small-group tours include all transfers. Capilano is not walkable from the cruise terminal.",
    bestFor: [
      "First-time Vancouver visitors on a port day or pre-cruise day",
      "Passengers wanting city and nature in one itinerary",
      "Families and photographers seeking iconic viewpoints",
    ],
    returnConfidence: "High",
    returnNote:
      "Signature combo tours are built around cruise and embarkation schedules. Pre-cruise guests should allow buffer before check-in; port-day guests need a clear all-aboard time.",
    weatherConsiderations:
      "Rain is common year-round — dress in layers and bring a light waterproof. Capilano tree canopy offers shelter; Stanley Park seawall segments are exposed to wind.",
    cruiseSnapshot:
      "This is Vancouver's headline sightseeing route: urban waterfront, rainforest bridge, and North Shore mountains without the planning stress of multiple tickets and taxis.",
    snapshotFields: {
      timeInPort: "6–10 hours (port day or pre-cruise)",
      bestFor: "First visits, photography, Alaska embarkation",
      activityLevel: "Easy — some walking at stops",
      familyFriendly: "Excellent with supervision on bridges",
      returnToShip: "High on organised tours",
      popularTypes: "Coach highlights, small-group vans",
    },
    description: [
      "Vancouver rewards visitors who combine coastline and mountains in a single day. A Best of Vancouver and Bridge style tour typically sequences downtown orientation — Canada Place, Coal Harbour, or a Stanley Park drive — with a crossing toward the North Shore and time at Capilano Suspension Bridge Park.",
      "The Lions Gate Bridge becomes part of the story: suspension cables framing Burrard Inlet, cruise ships below, and the North Shore peaks beyond. Guides connect the engineering of the 1938 span with the city's growth from railway terminus to Pacific gateway.",
      "At Capilano, elevated walkways and the main suspension bridge deliver rainforest atmosphere without a long hike. Most tours allow 90–120 minutes on site — enough for the cliff walk, treetop adventure, and cultural exhibits if you pace yourself. The return leg often passes Granville Island or Gastown depending on operator routing and traffic.",
    ],
    highlights: [
      "Stanley Park and Lions Gate Bridge viewpoints",
      "Capilano Suspension Bridge Park",
      "Downtown Vancouver orientation",
      "Efficient routing for cruise schedules",
    ],
    faqs: [
      {
        question: "Does this tour work the day before embarkation?",
        answer:
          "Yes — many Alaska passengers book this format on their pre-cruise day, then return to a Canada Place area hotel for evening check-in. Confirm luggage handling with your hotel and tour operator.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "Walking is easy to moderate at each stop rather than sustained hiking. Capilano paths include stairs and elevated sections — mobility scooters are available at the park with advance notice.",
      },
      {
        question: "Can I do this on a short port call?",
        answer:
          "You need at least six hours ashore for the full combo comfortably. Shorter calls are better suited to Stanley Park and Gastown only.",
      },
    ],
    relatedSlugs: [
      "capilano-suspension-bridge",
      "stanley-park",
      "granville-island",
    ],
  },
  {
    slug: "capilano-suspension-bridge",
    path: "/capilano-suspension-bridge",
    title: "Capilano Suspension Bridge Shore Excursion",
    shortTitle: "Capilano Suspension Bridge",
    summary:
      "Rainforest walkways, canyon views, and the famous suspension bridge across the Capilano River — Vancouver's essential North Shore experience for cruise passengers.",
    duration: "3–4 hours (with transfers)",
    fitness: "Easy",
    distanceFromTerminal:
      "Roughly 15 km from Canada Place; 20–30 minutes by road depending on traffic.",
    transferRequired: true,
    transferNote:
      "Shuttle, coach, or rideshare required. Free shuttle from downtown exists seasonally — verify schedules for your travel date.",
    bestFor: [
      "Nature lovers who want rainforest without a long hike",
      "Pre-cruise passengers with a full morning or afternoon free",
      "Photographers and families with school-age children",
    ],
    returnConfidence: "High",
    returnNote:
      "Half-day Capilano tours are among the most schedule-friendly Vancouver excursions. Allow 45–60 minutes before all-aboard or cruise check-in.",
    weatherConsiderations:
      "The canyon is cooler and damper than downtown. Umbrellas help; boardwalks can be slippery when wet.",
    cruiseSnapshot:
      "Capilano delivers West Coast rainforest drama minutes from the skyscrapers — ideal when you want one unmistakably Vancouver experience on a tight timeline.",
    snapshotFields: {
      timeInPort: "4+ hours with transfers",
      bestFor: "Rainforest, bridges, family adventure",
      activityLevel: "Easy — stairs and elevated paths",
      familyFriendly: "Very good — height caution on bridges",
      returnToShip: "High on half-day tours",
      popularTypes: "Coach tours, shuttle combos, private drivers",
    },
    description: [
      "Capilano Suspension Bridge Park sits in a coastal rainforest gorge where a 137-metre bridge sways gently above the Capilano River. For cruise visitors, it answers a common question: can Vancouver feel wild as well as urban? The park's cliff walk and treetop platforms extend the experience beyond a single crossing.",
      "Indigenous storytelling and historical exhibits ground the site in local culture rather than treating it as a pure thrill attraction. Allow time for the Story Centre and seasonal programming — rushing straight to the bridge and back wastes much of what makes the visit worthwhile.",
      "From Canada Place, the North Shore crossing via Lions Gate or Second Narrows is part of the journey. Morning departures often beat afternoon coach congestion. Pre-cruise guests can visit Capilano and still reach their hotel by late afternoon; embarkation-day guests should only attempt this with an afternoon check-in window.",
    ],
    highlights: [
      "Iconic suspension bridge over Capilano Canyon",
      "Cliffwalk and Treetops Adventure walkways",
      "Rainforest setting minutes from downtown",
      "Works well before Alaska embarkation",
    ],
    faqs: [
      {
        question: "Can I visit Capilano before boarding my ship?",
        answer:
          "Yes, if your cruise check-in is late afternoon or evening and you have luggage stored at your hotel. Do not carry large bags through the park — drop bags first or use hotel storage.",
      },
      {
        question: "Is Capilano suitable for guests afraid of heights?",
        answer:
          "The main bridge and cliff walk involve height and gentle movement. Guests with severe height sensitivity may prefer Stanley Park or Granville Island instead.",
      },
      {
        question: "How long should I spend in the park?",
        answer:
          "Plan 90–120 minutes on site. Add 40–60 minutes round-trip transfer from Canada Place.",
      },
    ],
    relatedSlugs: [
      "best-of-vancouver-and-bridge",
      "stanley-park",
      "gastown",
    ],
  },
  {
    slug: "stanley-park",
    path: "/stanley-park",
    title: "Stanley Park Shore Excursion",
    shortTitle: "Stanley Park",
    summary:
      "Ancient cedars, seawall cycling paths, First Nations totems, and harbour views — Vancouver's 400-hectare urban park at the edge of Canada Place.",
    duration: "2–4 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Stanley Park borders downtown; seawall access is roughly 1–2 km west of Canada Place.",
    transferRequired: false,
    transferNote:
      "Walk, bike, hop-on hop-off, or short taxi from Canada Place. Many guided tours include a drive through the park.",
    bestFor: [
      "Passengers who prefer minimal transfer time",
      "Active guests wanting seawall cycling or walking",
      "Short port calls and flexible pre-cruise mornings",
    ],
    returnConfidence: "High",
    returnNote:
      "Among the easiest Vancouver experiences to self-time. Set a firm turnaround if cycling the full 9 km seawall loop.",
    weatherConsiderations:
      "Exposed seawall sections are windy and wet in rain. Interior forest trails are more sheltered.",
    cruiseSnapshot:
      "Stanley Park proves you need not leave downtown for West Coast scenery — totems, forest, and cruise-ship views in one compact outing.",
    snapshotFields: {
      timeInPort: "2+ hours for highlights",
      bestFor: "Walking, cycling, harbour views",
      activityLevel: "Easy to moderate on bikes",
      familyFriendly: "Excellent",
      returnToShip: "Very high — close to terminal",
      popularTypes: "Bike rental, walking, coach drive-through",
    },
    description: [
      "Stanley Park is a peninsula of rainforest and seawall wrapped around Vancouver Harbour. Cruise passengers see its treeline from their ship; exploring on foot or by bike connects the view to totem poles at Brockton Point, Beaver Lake's quiet paths, and Lions Gate Bridge lookouts.",
      "The seawall is one of North America's great urban rides — flat, scenic, and roughly 9 km for the full loop. Rental shops near the park entrance offer two- and three-hour options suited to port-day windows. Walking to the totems and back from Canada Place is realistic for moderate fitness levels.",
      "Guided tours often treat Stanley Park as one stop within a broader city route. Independent visitors gain flexibility to pause at Prospect Point for photos or grab food at the Teahouse area before returning to the terminal.",
    ],
    highlights: [
      "Seawall walking and cycling with harbour views",
      "First Nations totem poles at Brockton Point",
      "Lions Gate Bridge and North Shore vistas",
      "Minimal distance from Canada Place",
    ],
    faqs: [
      {
        question: "Can I walk to Stanley Park from Canada Place?",
        answer:
          "Yes — allow 20–30 minutes along the waterfront to reach seawall entrances. Taxis and rideshare are inexpensive for one-way returns.",
      },
      {
        question: "Should I rent a bike?",
        answer:
          "Biking suits guests with at least three hours free. The full seawall loop takes 60–90 minutes at a leisurely pace plus photo stops.",
      },
      {
        question: "Is Stanley Park enough for a full port day?",
        answer:
          "For a relaxed day, yes — combine with Gastown or Canada Place waterfront. Most first-time visitors add Capilano or Granville Island if time allows.",
      },
    ],
    relatedSlugs: [
      "best-of-vancouver-and-bridge",
      "granville-island",
      "gastown",
    ],
  },
  {
    slug: "granville-island",
    path: "/granville-island",
    title: "Granville Island Shore Excursion",
    shortTitle: "Granville Island",
    summary:
      "Public market flavours, artisan studios, street performers, and False Creek views — Vancouver's creative waterfront village across the water from downtown.",
    duration: "2–3 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Roughly 2 km from Canada Place; 10 minutes by Aquabus or road.",
    transferRequired: false,
    transferNote:
      "Aquabus and SeaBus connections are scenic options. Taxis and walking via Cambie Bridge are alternatives.",
    bestFor: [
      "Food lovers and market browsers",
      "Rainy-day plans with indoor market halls",
      "Pre-cruise guests wanting a relaxed afternoon",
    ],
    returnConfidence: "High",
    returnNote:
      "Compact site with predictable timing. Watch Aquabus frequency when scheduling return to Canada Place.",
    weatherConsiderations:
      "Indoor market areas suit wet weather. Outdoor performer spaces are weather-dependent.",
    cruiseSnapshot:
      "Granville Island turns a port day into a local food and culture experience — less postcard, more everyday Vancouver.",
    snapshotFields: {
      timeInPort: "2–4 hours",
      bestFor: "Food, shopping, waterfront atmosphere",
      activityLevel: "Easy — flat island paths",
      familyFriendly: "Excellent",
      returnToShip: "High",
      popularTypes: "Self-guided visits, food tours, ferry rides",
    },
    description: [
      "Granville Island began as an industrial sandbar and evolved into a dense cluster of markets, theatres, and maker studios. The public market's aisles of smoked salmon, berries, baked goods, and hot food stalls make it a natural lunch stop for cruise passengers tired of ship dining.",
      "False Creek ferries turn the transfer into part of the experience — short hops under bridges with skyline views. Allow 90 minutes minimum for market browsing and a meal; add time if you explore the net loft shops or Emily Carr University gallery spaces.",
      "Pre-cruise visitors often pair Granville Island with an afternoon at Canada Place watching ships arrive. Post-cruise guests with evening flights appreciate the reliable half-day format without venturing far from downtown hotels.",
    ],
    highlights: [
      "Granville Island Public Market food and produce",
      "False Creek Aquabus scenery",
      "Artisan shops and waterfront buskers",
      "Easy pairing with Canada Place",
    ],
    faqs: [
      {
        question: "How do I reach Granville Island from Canada Place?",
        answer:
          "Aquabus from Plaza of Nations or Hornby Street docks is popular. Taxis take 10–15 minutes depending on traffic.",
      },
      {
        question: "Is Granville Island crowded on cruise days?",
        answer:
          "Weekends and summer lunch hours are busiest. Weekday mornings are calmer for market shopping.",
      },
      {
        question: "Can I bring market food back to the ship?",
        answer:
          "Check your cruise line's policy on fresh food. Many guests eat on site rather than carrying purchases aboard.",
      },
    ],
    relatedSlugs: [
      "stanley-park",
      "gastown",
      "best-of-vancouver-and-bridge",
    ],
  },
  {
    slug: "gastown",
    path: "/gastown",
    title: "Gastown Shore Excursion",
    shortTitle: "Gastown",
    summary:
      "Steam clock, cobblestone streets, Victorian facades, and emerging dining — historic Vancouver at walking distance from the cruise terminal.",
    duration: "1.5–3 hours",
    fitness: "Easy",
    distanceFromTerminal:
      "Roughly 1 km east of Canada Place; 10–15 minutes on foot.",
    transferRequired: false,
    transferNote:
      "Walkable from Canada Place. Guided walking tours often include Gastown with Chinatown and the waterfront.",
    bestFor: [
      "History and architecture enthusiasts",
      "Short port calls with limited transfer time",
      "Evening pre-cruise strolls after hotel check-in",
    ],
    returnConfidence: "High",
    returnNote:
      "Compact neighbourhood — easy to limit scope and return on time. Evening visits suit pre-cruise stays; verify personal safety as in any urban area.",
    weatherConsiderations:
      "Cobblestones are slick when wet. Many pubs and cafes offer indoor refuge.",
    cruiseSnapshot:
      "Gastown compresses Vancouver's origin story into a few walkable blocks — ideal when your ship docks at Canada Place or you are staying nearby before embarkation.",
    snapshotFields: {
      timeInPort: "1.5+ hours",
      bestFor: "History, dining, urban walking",
      activityLevel: "Easy — uneven cobblestones",
      familyFriendly: "Good — best by day",
      returnToShip: "Very high from Canada Place",
      popularTypes: "Walking tours, self-guided strolls",
    },
    description: [
      "Gastown grew around a 1867 saloon and still centres on the steam-powered clock at Water and Cambie. Victorian brick buildings now house boutiques, cocktail bars, and restaurants that draw locals as well as visitors — a useful signal that the district is more than a themed facade.",
      "The neighbourhood flows naturally into Chinatown to the east and the Canada Place waterfront to the west. A morning walking loop might run Gastown, the Olympic Cauldron at Jack Poole Plaza, and Robson Street shopping before returning to the terminal.",
      "For Alaska embarkation passengers, Gastown is an easy first-evening destination after hotel check-in — close enough to walk back, varied enough to feel like a proper city evening rather than a hotel lobby wait.",
    ],
    highlights: [
      "Gastown Steam Clock and heritage streets",
      "Walkable from Canada Place",
      "Strong dining and coffee scene",
      "Gateway to Chinatown and waterfront",
    ],
    faqs: [
      {
        question: "Is Gastown safe for cruise passengers?",
        answer:
          "Gastown is a busy tourist and dining district. Use normal urban awareness, especially after dark, and stay on well-lit main streets.",
      },
      {
        question: "Can I combine Gastown with Stanley Park in one day?",
        answer:
          "Yes — Gastown takes 1–2 hours; Stanley Park adds 2–3 hours. Both are close to Canada Place without highway transfers.",
      },
      {
        question: "When does the steam clock run?",
        answer:
          "The clock whistles on a schedule throughout the day — crowds gather on the hour. Mornings are quieter for photos.",
      },
    ],
    relatedSlugs: [
      "stanley-park",
      "granville-island",
      "best-of-vancouver-and-bridge",
    ],
  },
];

export function getExcursion(slug: string): Excursion | undefined {
  return excursions.find((e) => e.slug === slug);
}

export function getExcursionByPath(path: string): Excursion | undefined {
  return excursions.find((e) => e.path === path);
}

export function getRelatedExcursions(slug: string): Excursion[] {
  const excursion = getExcursion(slug);
  if (!excursion) return [];
  return excursion.relatedSlugs
    .map((s) => getExcursion(s))
    .filter((e): e is Excursion => e !== undefined);
}

export const staticGuidePaths = [
  "/vancouver-cruise-port-guide",
  "/vancouver-pre-cruise-guide",
  "/vancouver-post-cruise-guide",
  "/things-to-do-before-your-alaska-cruise",
  "/things-to-do-after-your-alaska-cruise",
  "/best-hotels-near-canada-place",
  "/private-vancouver-tours",
  "/vancouver-faq",
  "/enquire",
  "/excursions",
];
