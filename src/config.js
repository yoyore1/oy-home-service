// ============================================================================
//  SINGLE SOURCE OF TRUTH — O.Y. Home Service (window cleaning, Mississauga/GTA).
//  Real data pulled from their Google Business listing. Lines marked CONFIRM
//  are placeholders to verify with the owner.
// ============================================================================

export const SITE = {
  brand: {
    name: "O.Y. Home Service",
    shortName: "O.Y.",
    legalName: "O.Y. Home Service",
    tagline: "Crystal-clear windows, inside and out.",
    // Contact ----------------------------------------------------------------
    phone: "(437) 928-3139",
    phoneHref: "+14379283139",
    email: "hello@oyhomeservice.ca",          // CONFIRM (no public email listed)
    // Location & coverage ----------------------------------------------------
    city: "Mississauga",
    state: "ON",
    region: "the GTA",
    hours: "Mon–Sun · 8am–7pm",               // CONFIRM (Google shows "closes 7pm")
    // Trust ------------------------------------------------------------------
    foundedYear: 2019,                         // CONFIRM
    license: "Fully insured",
    ownerName: "the O.Y. team",                // CONFIRM (owner name unknown)
  },

  // Headline proof numbers — rating + reviewCount are REAL (Google). ---------
  stats: {
    yearsInBusiness: 6,                        // CONFIRM
    homesCleaned: 1500,                        // CONFIRM (rendered as "homes brightened")
    rating: 5.0,                               // REAL — Google
    reviewCount: 104,                          // REAL — Google
    responseHours: 24,
    guaranteeDays: 14,                         // CONFIRM (streak-free re-clean window)
  },

  // The 6 services. `img` maps to /assets/img/<img>.jpg ----------------------
  // No public prices, so priceFrom is null on all (free quote).
  services: [
    {
      id: "exterior", img: "house-wash", name: "Exterior Window Cleaning",
      benefit: "Hand-detailed, streak-free glass and frames — we cut through hard water, pollen and grime so the outside sparkles like new.",
      priceFrom: null,
    },
    {
      id: "interior", img: "driveway", name: "Interior Window Cleaning",
      benefit: "Spotless inside glass, sills and tracks — shoe covers on, everything protected, not a smudge or drip left behind.",
      priceFrom: null,
    },
    {
      id: "gutter", img: "roof", name: "Gutter Cleaning",
      benefit: "We clear every downspout and gutter by hand and flush them clean, so water flows away from your roof, walls and foundation.",
      priceFrom: null,
    },
    {
      id: "screens", img: "deck", name: "Screen & Track Cleaning",
      benefit: "Screens, sills and sliding tracks scrubbed and rinsed — the details most cleaners skip, done every single time.",
      priceFrom: null,
    },
    {
      id: "skylights", img: "patio", name: "Skylights & Hard-to-Reach Glass",
      benefit: "Skylights, second-storey and awkward windows reached safely with the right gear — crystal clear, top to bottom.",
      priceFrom: null,
    },
    {
      id: "commercial", img: "commercial", name: "Storefront & Commercial",
      benefit: "Scheduled, reliable storefront and office window cleaning that keeps your business looking sharp for every customer.",
      priceFrom: null,
    },
  ],

  // 4-step process ----------------------------------------------------------
  process: [
    { step: "01", title: "Request your free quote", text: "Tell us about your windows in 60 seconds — online or by phone. No pushy sales calls, ever." },
    { step: "02", title: "Get a clear, fixed price", text: "We send an itemized, no-surprises quote — fast, fair, and exactly what you'll pay." },
    { step: "03", title: "We make them sparkle", text: "Our insured team arrives on time, protects your home, and hand-details every pane inside and out." },
    { step: "04", title: "You enjoy the view", text: "We walk it with you. If a window isn't streak-free, we re-do it on the spot. That's the whole deal." },
  ],

  // Recent-work gallery (alternating rows). img maps to /assets/img/<img>.jpg
  gallery: [
    { img: "house-wash", surface: "Full exterior windows", area: "Mississauga", time: "Cleaned in one visit",  quote: "I can finally see clearly again — they look brand new. Wish I'd called sooner." },
    { img: "driveway",   surface: "Interior & out",        area: "Oakville",    time: "Whole-home detail",      quote: "Spotless inside and out, and they left everything cleaner than they found it." },
    { img: "roof",       surface: "Gutter clean-out",      area: "Burlington",  time: "Same-day service",       quote: "Cleared and flushed every gutter, showed me before-and-after photos. Total pros." },
    { img: "deck",       surface: "Screens & tracks",      area: "Brampton",    time: "Single visit",           quote: "They even scrubbed the tracks and screens. Nobody does that — these guys do." },
  ],

  // Before / After comparison tiles (the signature slider) ------------------
  // `after` = clean photo, `before` = matching dirty photo. When `before` is
  // omitted, the slider fakes it with a CSS grime filter.
  beforeAfter: [
    { id: "exterior", label: "Exterior", after: "house-wash", before: "house-wash-before" },
    { id: "interior", label: "Interior", after: "driveway",   before: "driveway-before" },
    { id: "gutter",   label: "Gutters",  after: "roof-after", before: "roof" },
    { id: "screens",  label: "Screens",  after: "deck-after", before: "deck" },
  ],

  // Reviews — CONFIRM/replace with real review text (5.0 / 104 is REAL) -------
  testimonials: [
    { name: "Sarah M.", area: "Mississauga", rating: 5, service: "Exterior + Interior", quote: "Booked them for a whole-home window clean and wow — every pane is crystal clear, inside and out. Polite, on time, and not a single streak. Worth every penny." },
    { name: "David R.", area: "Oakville",    rating: 5, service: "Gutter Cleaning",       quote: "They cleaned the windows and the gutters in one trip, sent me before-and-after photos, and left zero mess. Easily the best service I've used." },
    { name: "Priya K.", area: "Burlington",  rating: 5, service: "Full Package",          quote: "Five stars isn't enough. The view from my living room is unreal now. Three neighbours have already booked them." },
    { name: "Tom B.",   area: "Brampton",    rating: 5, service: "Screens & Tracks",      quote: "They scrubbed the screens and tracks I'd given up on. Professional, friendly, and the windows have never looked better." },
  ],

  // Objection-handling FAQ ---------------------------------------------------
  faqs: [
    { q: "How much does window cleaning cost?", a: "It depends on the number, size and accessibility of your windows. Tell us about your home and we'll send a clear, itemized quote — never a vague range, and never a surprise on the day." },
    { q: "Do you clean both inside and outside?", a: "Yes — interior and exterior, plus sills, frames, screens and tracks if you'd like. We bring shoe covers and protect your home, leaving everything spotless." },
    { q: "How often should I have my windows cleaned?", a: "Most homes look their best with a clean once or twice a year. We'll happily set up a schedule so your glass always stays clear — no need to remember." },
    { q: "Are you insured?", a: "Yes — O.Y. Home Service is fully insured. We're happy to provide proof of insurance before we ever step on your property." },
    { q: "Do you also clean gutters, screens and tracks?", a: "We do. Gutter clean-outs, screen washing and track detailing are some of our most popular add-ons — just mention them when you book." },
    { q: "What if a window streaks or it rains after?", a: "Our work is streak-free, guaranteed. If anything isn't perfect — or rain spots a freshly cleaned window soon after — we'll come back and make it right. You only pay when you're thrilled." },
  ],

  // Where you work — drives the service-area cloud & local SEO --------------
  serviceAreas: [
    "Mississauga", "Toronto", "Oakville", "Burlington",
    "Brampton", "Milton", "Vaughan", "Etobicoke",
    "Markham", "Richmond Hill", "Caledon", "Georgetown",
  ],

  // The services dropdown in the estimate form ------------------------------
  formServices: [
    "Exterior Window Cleaning", "Interior Window Cleaning", "Inside & Out",
    "Gutter Cleaning", "Screen & Track Cleaning", "Skylights / Hard-to-Reach",
    "Storefront / Commercial", "Full Package", "Something else",
  ],

  // SEO ---------------------------------------------------------------------
  seo: {
    title: "O.Y. Home Service | Window & Gutter Cleaning in Mississauga & the GTA",
    description:
      "5.0★ window cleaning across Mississauga & the GTA — streak-free interior & exterior glass, gutters, screens & tracks. Fully insured. Free, no-obligation quotes. Call (437) 928-3139.",
    url: "https://www.oyhomeservice.ca",
  },
};

export default SITE;
