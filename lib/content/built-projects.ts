/* ─────────────────────────────────────────────────────────────────────────────
   Built Projects — data layer
   ─────────────────────────────────────────────────────────────────────────────
   Routing convention: /built-projects/[category]/[slug]
   Category values match URL segments exactly (no mapping step needed).
   Case studies: projects with a non-empty `caseStudy` object surface on
   /built-projects/case-studies. They link to the canonical project URL.
   ───────────────────────────────────────────────────────────────────────────── */

/* ── Category types ─────────────────────────────────────────────────────────── */

export type ProjectCategory =
  | "private-residences"
  | "holiday-homes"
  | "hospitality-resorts"
  | "educational-public";

export type CategoryMeta = {
  value:      ProjectCategory;
  label:      string;        // "Private Residences"
  eyebrow:    string;        // eyebrow label on category page
  h1:         string;
  subheading: string;
  href:       string;        // "/built-projects/private-residences"
  cta: {
    heading:  string;
    body:     string;
    primary:  string;
    secondary: string;
  };
};

/* ── Case study extension ────────────────────────────────────────────────────── */

export type CaseStudy = {
  challenge:   string;
  approach:    string;
  outcome:     string;
  highlights?: string[];
};

/* ── Core project type ───────────────────────────────────────────────────────── */

export type BuiltProject = {
  slug:         string;
  category:     ProjectCategory;
  title:        string;
  location:     string;
  country?:     string;
  year:         string;
  area?:        string;
  model?:       string;       // collection family (Signature, Classic, …)
  setting?:     string;       // "Alpine" | "Lakefront" | "Forest" | etc.
  status?:      "completed" | "in-progress";
  featured?:    boolean;      // surfaces on the hub featured strip

  imageSrc:     string;
  imageAlt:     string;
  gallery?:     { src: string; alt?: string }[];

  summary:      string;       // used on cards
  description:  string[];     // prose paragraphs on project page
  siteBrief?:   string[];     // "Site & Brief" section
  archResponse?: string[];    // "Architectural Response" section
  materialLogic?: string[];   // "Material & Construction Logic" section
  outcome?:     string[];     // "Outcome" section

  specs:        { label: string; value: string }[];
  testimonial?: { quote: string; author: string };
  caseStudy?:   CaseStudy;    // presence = surfaces on case-studies hub

  relatedSlugs?: string[];    // slugs from any category
};

/* ── Category metadata ───────────────────────────────────────────────────────── */

export const categoryMeta: CategoryMeta[] = [
  {
    value:      "private-residences",
    label:      "Private Residences",
    eyebrow:    "Private Residences",
    h1:         "Homes built for how you live",
    subheading: "Permanent family homes designed around your site, your light, and the way you truly live. Built to last generations.",
    href:       "/built-projects/private-residences",
    cta: {
      heading:   "Begin your private residence",
      body:      "Tell us about your site, your vision, and your timeline.",
      primary:   "Request a Private Offer",
      secondary: "View all projects",
    },
  },
  {
    value:      "holiday-homes",
    label:      "Holiday Homes",
    eyebrow:    "Holiday Homes",
    h1:         "Homes that make arriving feel like relief",
    subheading: "Compact, calm architecture for plots at the edge of towns, by the water, on mountain sites, and in forest clearings. Concrete slab or ground screw foundations — relocatable. ZeroEnergy option.",
    href:       "/built-projects/holiday-homes",
    cta: {
      heading:   "Begin your holiday home",
      body:      "Tell us about your site, your vision and your timeline.",
      primary:   "Request a Private Offer",
      secondary: "View all projects",
    },
  },
  {
    value:      "hospitality-resorts",
    label:      "Hospitality & Resorts",
    eyebrow:    "Hospitality & Resorts",
    h1:         "Timber hospitality, built at scale",
    subheading: "Guesthouses, eco-resorts, and lodge clusters. The Soleta modular system makes it possible to build hospitality projects of a very high standard, quickly, without compromising on materials or architecture.",
    href:       "/built-projects/hospitality-resorts",
    cta: {
      heading:   "Build a hospitality project",
      body:      "We work with developers and operators on boutique hotels, eco-resorts and lodge clusters. Tell us about your project.",
      primary:   "Start a Conversation",
      secondary: "View all projects",
    },
  },
  {
    value:      "educational-public",
    label:      "Educational & Public",
    eyebrow:    "Educational & Public",
    h1:         "Timber buildings for the public realm",
    subheading: "Schools, kindergartens, community centres, and public spaces. The Soleta system — healthy materials, fast assembly, and long lifespan — makes it an ideal choice for buildings that serve communities.",
    href:       "/built-projects/educational-public",
    cta: {
      heading:   "Build a public timber building",
      body:      "We work with municipalities, foundations and public institutions on educational and community projects.",
      primary:   "Start a Conversation",
      secondary: "View all projects",
    },
  },
];

/* ── Projects ────────────────────────────────────────────────────────────────── */

export const projects: BuiltProject[] = [
  {
    slug:     "villa-falaise",
    category: "private-residences",
    title:    "Villa Falaise",
    location: "Chamonix",
    country:  "France",
    year:     "2023",
    area:     "142 m²",
    model:    "Signature",
    setting:  "Alpine",
    status:   "completed",
    featured: false,

    imageSrc: "/images/Signature800x533.webp",
    imageAlt: "Villa Falaise exterior, Chamonix, France",
    gallery:  [],

    summary:
      "A Signature home set against the Mont Blanc massif — designed to disappear into the alpine landscape while offering full-height glazing onto the glacier.",

    description: [
      "Villa Falaise presented a rare challenge: a landmark alpine site with strict planning requirements and extreme weather conditions. The brief was to create a home that felt rooted in the landscape — not imposed upon it.",
      "The structural solution uses an extended post and beam glulam frame with cantilevered sections that minimise ground contact and reduce visual mass. Charred larch cladding was chosen to weather into the surrounding pine forest.",
      "Full-height glazing on the south facade frames the Mont Blanc massif as a living artwork. Triple-glazed, thermally broken frames ensure the envelope performs at -25°C without relying on mechanical heating.",
    ],

    siteBrief: [
      "The Falaise plot sits at 1,240 m elevation on the northern outskirts of Chamonix — a location with commanding views across the Arve valley to the Mont Blanc massif. Planning restrictions required a maximum ridge height of 7 m and mandatory use of natural cladding materials.",
      "The clients' brief was precise: a home that earns its position on the mountain without announcing itself. Privacy, longevity and thermal resilience were the non-negotiables.",
    ],

    archResponse: [
      "The Signature frame was extended to allow a cantilevered section at the south-west corner — reducing the building's footprint while maximising the view angle onto the glacier. The roofline follows the valley gradient, making the mass read as an extension of the slope.",
      "Full-height south glazing is triple-glazed and thermally broken at every frame junction. The north facade is almost entirely solid — insulated charred larch over a 400 mm timber wall — making the building perform asymmetrically in response to sun and prevailing wind.",
    ],

    materialLogic: [
      "Charred larch cladding was the unanimous choice: it weathers to silver-grey within two seasons, disappearing into the pine forest and requiring zero maintenance. The charring process also provides a Class B fire rating — important at this altitude.",
      "All structural timber is Austrian glulam, specified to alpine load class. The post and beam connections are exposed internally, providing warmth and structural legibility within the open-plan living space.",
    ],

    outcome: [
      "Villa Falaise achieved planning consent on the first submission — a result the local architect attributed to the clarity of the material palette and the restraint of the massing. Build time from foundation pour to handover was 14 weeks.",
      "The home has performed through two alpine winters with no mechanical heating required during the shoulder seasons. The clients report energy bills of approximately €60/month during full winter occupancy.",
    ],

    specs: [
      { label: "Location",    value: "Chamonix, Haute-Savoie, France" },
      { label: "Year",        value: "2023" },
      { label: "Area",        value: "142 m²" },
      { label: "Collection",  value: "Signature" },
      { label: "Energy",      value: "A+ · Near-ZeroEnergy" },
      { label: "Foundation",  value: "Concrete strip — alpine load spec" },
      { label: "Cladding",    value: "Thermally modified larch" },
    ],

    testimonial: {
      quote:  "We wanted a home that earned its place on this mountain. Soleta understood that from the first conversation.",
      author: "Owner, Villa Falaise",
    },

    caseStudy: {
      challenge:  "A landmark alpine site at 1,240 m with strict planning height limits, extreme snow loads and the requirement to use only natural cladding materials.",
      approach:   "Extended Signature frame with cantilevered south-west corner. Charred larch cladding chosen for fire rating and weathering behaviour. Triple-glazed south facade; near-solid north facade.",
      outcome:    "Planning consent on first submission. 14-week build. Energy bills of ~€60/month during full winter occupancy — no mechanical heating needed during shoulder seasons.",
      highlights: [
        "142 m² — Signature frame with alpine extension",
        "Charred larch — Class B fire rated, zero maintenance",
        "14 weeks from foundation to handover",
        "Near-ZeroEnergy at -25°C design temperature",
      ],
    },

    relatedSlugs: ["haus-tegernsee", "worthersee-lodge"],
  },

  {
    slug:     "haus-tegernsee",
    category: "private-residences",
    title:    "Haus Tegernsee",
    location: "Bavaria",
    country:  "Germany",
    year:     "2022",
    area:     "120 m²",
    model:    "Classic",
    setting:  "Lakefront",
    status:   "completed",
    featured: false,

    imageSrc: "/images/Classic800x533.webp",
    imageAlt: "Haus Tegernsee exterior, Bavaria, Germany",
    gallery:  [],

    summary:
      "A Classic Soleta home on the shores of Lake Tegernsee — designed for year-round family living with a direct connection to the water.",

    description: [
      "The clients had owned the lakeside plot for years but struggled to find a design that matched the quality of the setting. The brief was simple: a home that respects the lake, the trees and the Bavarian light.",
      "The Classic 120 was configured with a single open-plan ground floor opening directly onto a cantilevered terrace over the water. The upper level contains three bedrooms, each with its own view corridor through the forest.",
      "The ZeroEnergy package — geothermal heating combined with a 12kW solar array — means the family's energy bills are negligible, even through Bavarian winters.",
    ],

    siteBrief: [
      "The Tegernsee plot is a rare south-facing lakeside parcel — protected forest to the north, direct water frontage to the south. Bavarian planning rules required the home to remain below the existing treeline and respect the historic setback from the water.",
      "The family brief: a year-round home for four with enough flexibility for extended stays. Energy independence was a firm requirement.",
    ],

    archResponse: [
      "The Classic 120 was oriented to maximise south-lake exposure. The ground floor is a single open plan — kitchen, dining and living — opening via full-height sliding doors to a cantilevered terrace that steps directly to the private dock.",
      "Each of the three upper-level bedrooms has its own view corridor framed through the forest canopy. The roof pitch follows the local vernacular but the material palette is entirely contemporary.",
    ],

    materialLogic: [
      "Douglas fir cladding was left untreated to silver naturally, blending with the surrounding pine and birch within a single season. The structural frame is Austrian spruce glulam with visible joints at the terrace connection.",
      "The ZeroEnergy package combines a 120-metre geothermal loop with a 12 kW rooftop solar array. The battery system stores summer surplus for the shoulder seasons.",
    ],

    outcome: [
      "The family moved in by October 2022 — ahead of their first Bavarian winter. Energy monitoring over the first 12 months showed net-positive generation: the home exported 1,800 kWh to the grid.",
      "The terrace-to-dock connection has become the defining feature — the clients describe the home as inseparable from the lake.",
    ],

    specs: [
      { label: "Location",    value: "Tegernsee, Bavaria, Germany" },
      { label: "Year",        value: "2022" },
      { label: "Area",        value: "120 m²" },
      { label: "Collection",  value: "Classic" },
      { label: "Energy",      value: "ZeroEnergy — geothermal + solar" },
      { label: "Foundation",  value: "Ground screws (KSF)" },
      { label: "Cladding",    value: "Douglas fir — natural silver weathering" },
    ],

    testimonial: {
      quote:  "The build was fast, the quality was exactly what was promised. We were in by October, in time for the first winter.",
      author: "Owner, Haus Tegernsee",
    },

    caseStudy: {
      challenge:  "A south-facing lakeside parcel with strict Bavarian height and setback rules, combined with a client requirement for full energy independence.",
      approach:   "Classic 120 oriented fully south. Cantilevered terrace to dock. ZeroEnergy package: 120 m geothermal loop + 12 kW solar + battery storage.",
      outcome:    "Net-positive after 12 months — 1,800 kWh exported to the grid. Family in by October, through Bavarian winter with negligible heating cost.",
      highlights: [
        "120 m² Classic — fully south-oriented",
        "Net-positive ZeroEnergy — 1,800 kWh exported year one",
        "Cantilevered terrace steps to private dock",
        "Ground screw foundations — zero excavation on protected lakeside site",
      ],
    },

    relatedSlugs: ["villa-falaise"],
  },

  /* ── Featured projects ──────────────────────────────────────────────────── */

  {
    slug:     "villa-vanau",
    category: "private-residences",
    title:    "Villa Vanau",
    location: "Romania",
    year:     "2016",
    area:     "194 m²",
    model:    "Signature",
    status:   "completed",
    featured: true,

    imageSrc: "/images/Signature800x533.webp",
    imageAlt: "Villa Vanau exterior, Romania",
    gallery:  [],

    summary:
      "A Signature home set in a green urban area, on the edge of a lake, designed to bring the calm of nature while offering full-height glazing oriented towards the water.",

    description: [
      "Villa Vanau occupies a rare urban site — a green parcel on the edge of a lake within a residential district. The brief asked for a home that brought the calm of nature into daily life without surrendering any of the quality of a permanent city residence.",
      "Full-height south glazing frames the lake as a constant presence throughout the interior. The Signature frame extends to allow a cantilevered terrace at the waterfront boundary.",
      "Natural materials throughout — exposed glulam structure, timber cladding, stone thresholds — reinforce the connection between the interior and the landscape beyond.",
    ],

    specs: [
      { label: "Location",   value: "Romania" },
      { label: "Year",       value: "2016" },
      { label: "Area",       value: "194 m²" },
      { label: "Collection", value: "Signature" },
      { label: "Energy",     value: "A+" },
    ],

    relatedSlugs: ["house-bezmalinovic"],
  },

  {
    slug:     "house-bezmalinovic",
    category: "private-residences",
    title:    "House Bezmalinovic",
    location: "Croatia",
    year:     "2019",
    area:     "150 m²",
    model:    "Classic",
    status:   "completed",
    featured: true,

    imageSrc: "/images/Classic800x533.webp",
    imageAlt: "House Bezmalinovic exterior, Croatia",
    gallery:  [],

    summary:
      "A Classic Soleta home in a mountainous area of Croatia, designed for year-round family living.",

    description: [
      "House Bezmalinovic sits in a mountainous region of Croatia — a site with pronounced seasonal variation and a landscape that demanded careful orientation and material choices.",
      "The Classic 120 was configured for full-time family occupation, with generous living spaces on the ground floor and three bedrooms oriented to capture morning light and mountain views.",
      "Natural wood fibre insulation and a passive solar orientation ensure thermal comfort through both summer and winter without reliance on mechanical systems.",
    ],

    specs: [
      { label: "Location",   value: "Croatia" },
      { label: "Year",       value: "2019" },
      { label: "Area",       value: "150 m²" },
      { label: "Collection", value: "Classic" },
      { label: "Energy",     value: "A+" },
    ],

    relatedSlugs: ["villa-vanau", "soleta-life"],
  },

  {
    slug:     "soleta-life",
    category: "holiday-homes",
    title:    "House Soleta Life",
    location: "Europe",
    year:     "2024",
    area:     "72 m²",
    model:    "Holiday & Retreat",
    status:   "completed",
    featured: true,

    imageSrc: "/images/Life800x600.webp",
    imageAlt: "Exterior, Soleta Life",
    gallery:  [],

    summary:
      "A compact retreat home set at the foot of the mountain — minimal footprint, maximum connection to the sky and the forest.",

    description: [
      "House Soleta Life sits at the foot of a mountain — a position that demanded a home with strong visual and thermal connection to its setting while remaining compact and low-impact.",
      "The 72 m² form is arranged as a single open living space opening to a south-facing terrace. The sleeping mezzanine keeps the ground floor generous without expanding the footprint.",
      "Ground screw foundations ensured zero excavation on the sensitive mountain-adjacent terrain. The ZeroEnergy solar-plus-battery system makes the home fully self-sufficient during the active seasons.",
    ],

    specs: [
      { label: "Location",   value: "Europe" },
      { label: "Year",       value: "2024" },
      { label: "Area",       value: "72 m²" },
      { label: "Collection", value: "Holiday & Retreat" },
      { label: "Energy",     value: "ZeroEnergy — solar + battery" },
      { label: "Foundation", value: "Ground screws" },
    ],

    caseStudy: {
      challenge:  "A narrow waterfront plot with zero-excavation rules, a protected tree line with 600 mm clearances, and dual-use requirements — personal retreat and boutique rental.",
      approach:   "Long, low form threading between existing trees. Ground screws installed in a single day. Open plan ground floor; sleeping mezzanine.",
      outcome:    "Assembled in under a week. Minimal site disturbance on a sensitive waterfront plot. Dual-use operation — personal retreat and boutique rental — working as designed.",
      highlights: [
        "72 m² — form threading existing tree line with 600 mm clearances",
        "Zero excavation — ground screws in one day",
        "Dual-use: personal retreat and boutique rental",
        "ZeroEnergy — solar + battery",
      ],
    },

    relatedSlugs: ["house-bezmalinovic"],
  },

  /* ── Case study projects ────────────────────────────────────────────────── */

  {
    slug:     "soleta-edge",
    category: "private-residences",
    title:    "House Soleta Edge",
    location: "Europe",
    year:     "2022",
    model:    "Classic",
    status:   "completed",

    imageSrc: "/images/Signature800x533.webp",
    imageAlt: "Exterior of House Soleta Edge",
    gallery:  [],

    summary:
      "A Classic home on the outskirts of a suburban settlement — south-facing, strict setback rules, with a requirement for enhanced thermal and acoustic insulation.",

    description: [
      "House Soleta Edge occupies a plot on the outskirts of a suburban settlement — south-facing, with strict setback rules from the property boundaries that shaped every aspect of the massing.",
      "The client's requirement for enhanced thermal and acoustic insulation drove the wall build-up specification beyond standard. Natural wood fibre insulation at increased thickness, combined with a vapour-permeable membrane, delivers measurably superior performance.",
      "The result is a home that performs at the top of its envelope specification while remaining within all planning constraints.",
    ],

    specs: [
      { label: "Location",   value: "Europe" },
      { label: "Year",       value: "2022" },
      { label: "Collection", value: "Classic" },
      { label: "Energy",     value: "A+" },
    ],

    caseStudy: {
      challenge:  "A plot on the outskirts of a suburban settlement, south-facing, with strict setback rules from the property boundaries, combined with the client's requirement for enhanced thermal and acoustic insulation.",
      approach:   "Classic frame with increased insulation specification. Natural wood fibre at greater thickness. Vapour-permeable membrane throughout. Massing resolved within strict boundary setbacks.",
      outcome:    "Enhanced thermal and acoustic performance verified on completion. Home within all planning constraints. Client reports measurably quieter interior than conventional construction.",
      highlights: [
        "South-facing within strict setback envelope",
        "Enhanced insulation — natural wood fibre at increased thickness",
        "Acoustic performance verified on completion",
        "Vapour-permeable construction throughout",
      ],
    },

    relatedSlugs: ["soleta-aurora"],
  },

  {
    slug:     "soleta-aurora",
    category: "private-residences",
    title:    "HOUSE Soleta Aurora",
    location: "Europe",
    year:     "2023",
    model:    "Signature",
    status:   "completed",

    imageSrc: "/images/Aurora800x600.webp",
    imageAlt: "Exterior of House Soleta Aurora",
    gallery:  [],

    summary:
      "A Signature home in a pre-alpine area at 810 m altitude — strict height limits for planning approval, moderate snow loads, exclusively natural materials.",

    description: [
      "HOUSE Soleta Aurora sits in a pre-alpine area at 810 m altitude — a location with pronounced seasonal variation and strict planning height limits that shaped the massing from the outset.",
      "The Signature frame was specified for the site's snow load class. Natural materials were used exclusively throughout — charred timber cladding, natural wood fibre insulation, stone thresholds.",
      "The result is a home that belongs to its pre-alpine landscape while meeting every planning requirement and delivering the spatial quality the site and brief demanded.",
    ],

    specs: [
      { label: "Location",   value: "Europe" },
      { label: "Year",       value: "2023" },
      { label: "Collection", value: "Signature" },
      { label: "Energy",     value: "A+" },
    ],

    caseStudy: {
      challenge:  "A site in a pre-alpine area, located at 810 m altitude, with height limits for planning approval, moderate snow loads, and the requirement to use only natural materials for construction.",
      approach:   "Signature frame specified for pre-alpine snow load class. Exclusively natural materials — charred timber cladding, wood fibre insulation, stone thresholds. Massing calibrated to planning height limits.",
      outcome:    "Planning consent on first submission. Build completed within the alpine construction season. Home performs with exclusively natural materials at 810 m altitude.",
      highlights: [
        "810 m altitude — pre-alpine structural specification",
        "Exclusively natural materials throughout",
        "Planning consent on first submission",
        "Charred timber cladding — fire rated, zero maintenance",
      ],
    },

    relatedSlugs: ["soleta-edge", "soleta-gabrielle"],
  },

  {
    slug:     "soleta-gabrielle",
    category: "holiday-homes",
    title:    "Soleta Gabrielle",
    location: "Europe",
    year:     "2025",
    model:    "Signature",
    status:   "completed",

    imageSrc: "/images/Retreat800x533.webp",
    imageAlt: "Soleta Gabrielle exterior",
    gallery:  [],

    summary:
      "A moderately sloped hillside plot with panoramic views over the city — designed for permanent residence use.",

    description: [
      "Soleta Gabrielle sits on a moderately sloped plot at the top of a hill, with panoramic views over the city. The requirement to use it as a permanent residence — not merely a holiday home — shaped the brief from the outset.",
      "The slope was resolved through a split-level section that follows the terrain without significant excavation. Ground screws provided a precise, low-impact foundation with minimal earthworks.",
      "The panoramic orientation to the city was balanced against privacy requirements and solar performance — the glazing strategy is calibrated to capture views without sacrificing thermal comfort.",
    ],

    specs: [
      { label: "Location",   value: "Europe" },
      { label: "Year",       value: "2025" },
      { label: "Collection", value: "Signature" },
      { label: "Energy",     value: "A+" },
      { label: "Foundation", value: "Ground screws" },
    ],

    caseStudy: {
      challenge:  "A moderately sloped plot on top of a hill, with panoramic views over the city and the requirement to be used as a permanent residence.",
      approach:   "Split-level section following the terrain. Ground screws for low-impact foundation. Glazing calibrated for panoramic views balanced against solar performance and privacy.",
      outcome:    "Permanent residence quality achieved on a hillside plot. Minimal site disturbance. Panoramic views preserved from all principal living spaces.",
      highlights: [
        "Hillside split-level — ground screws, zero excavation",
        "Panoramic city views from all principal spaces",
        "Permanent residence standard on a holiday-category site",
        "2025 — most recently completed Soleta project",
      ],
    },

    relatedSlugs: ["soleta-aurora"],
  },
];

/* ── Helpers ─────────────────────────────────────────────────────────────────── */

/** Find a project by category + slug. */
export function findProject(
  category: ProjectCategory,
  slug: string
): BuiltProject | undefined {
  return projects.find((p) => p.category === category && p.slug === slug);
}

/** Find any project by slug (cross-category — for related projects). */
export function findProjectBySlug(slug: string): BuiltProject | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Get category metadata by value. */
export function getCategoryMeta(value: ProjectCategory): CategoryMeta {
  const meta = categoryMeta.find((c) => c.value === value);
  if (!meta) throw new Error(`Unknown category: ${value}`);
  return meta;
}

/** All projects that have case study content. */
export function getCaseStudyProjects(): BuiltProject[] {
  return projects.filter((p) => p.caseStudy !== undefined);
}

/** Project canonical URL. */
export function projectHref(p: BuiltProject): string {
  return `/built-projects/${p.category}/${p.slug}`;
}
