/* ─────────────────────────────────────────────────────────────────────────────
   Collection Models — single source of truth for all family detail pages
   ───────────────────────────────────────────────────────────────────────────── */

/* ── Shared sub-types ──────────────────────────────────────────────────────── */

export type ModelVariant = {
  name:     string;
  area:     string;
  bedrooms: string;
  price:    string;  // Raw string — only surfaced in UI when priceDisplay === "shown"
};

export type ModelFloorPlan = {
  variantName: string;  // Must match a variant.name in the same model
  src:         string;
  alt?:        string;
  label?:      string;
};

export type RelatedProject = {
  imageSrc?: string;
  imageAlt?: string;
  title:     string;
  location:  string;
  category:  string;
  href?:     string;
  year?:     string | number;
};

/* ── HomeModel ─────────────────────────────────────────────────────────────── */

export type HomeModel = {
  /* Core identity */
  slug:       string;
  eyebrow:    string;
  heading:    string;
  subheading: string;
  badge:      string;

  /* Hero — omitted gracefully when not set */
  heroImageSrc?: string;
  heroImageAlt?: string;

  /* Pricing display rule.
     "shown"      → render variant.price (only set when real prices exist)
     "on-request" → suppress price string; show "Private offer on request"
     undefined    → treated as "on-request" */
  priceDisplay?: "shown" | "on-request";

  /* About / editorial */
  description: string[];

  /* Who this collection is designed for */
  audience?: string[];

  /* What architecturally defines this collection */
  differentiators?: { title: string; body: string }[];

  /* Specifications table */
  specs: { label: string; value: string }[];

  /* Image gallery — lead image + thumbnail strip; section only renders when non-empty */
  gallery?: { src: string; alt?: string }[];

  /* Floor plans — section only renders when array is non-empty */
  floorPlans?: ModelFloorPlan[];

  /* Variants / size configurations */
  variants: ModelVariant[];

  /* What can be adapted per project */
  customizable?: string[];

  /* Delivery / build path summary */
  deliverySummary?: string[];

  /* Includes / excludes */
  includes: string[];
  excludes: string[];

  /* Related built projects */
  relatedProjects?: RelatedProject[];

  /* FAQ */
  faq: { question: string; answer: string }[];

  /* Back-link */
  relatedHref:  string;
  relatedLabel: string;
};

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  CLASSIC                                                                    */
/* ═══════════════════════════════════════════════════════════════════════════ */

export const classicModel: HomeModel = {
  slug:       "classic",
  eyebrow:    "Classic Soleta Homes",
  heading:    "Timeless timber.\nBuilt to last generations.",
  subheading:
    "The Classic Soleta is our most requested home — generous proportions, enduring materials and a design that belongs in any landscape.",
  badge: "Most popular",

  heroImageSrc: "/images/Classic800x533.webp",
  heroImageAlt: "Classic Soleta timber home exterior",

  priceDisplay: "on-request",

  description: [
    "The Classic Soleta was born from a simple conviction: a home should work with nature, not against it. Post and beam timber construction, natural insulation and passive solar orientation combine to create a home that stays warm in winter and cool in summer — without relying on expensive systems.",
    "Every Classic Soleta is built in our factory under controlled conditions, then transported and assembled on your site in days, not months. The result is a home with the quality of fine joinery and the speed of modern manufacturing.",
    "Our modular exoskeleton system means the Classic can grow with your family. Add a new wing, a studio or a covered terrace — without demolishing or disturbing the existing structure.",
  ],

  audience: [
    "Permanent family residences with a 20-plus year horizon",
    "Multi-generational families who need space that can adapt over time",
    "Clients who want full-time living quality in a natural material home",
    "First-time timber home owners looking for a clear, proven starting point",
  ],

  differentiators: [
    {
      title: "Post & beam structure",
      body:  "Exposed glulam frame provides structural honesty — you see what holds the home up. The posts and beams become part of the architecture rather than being hidden behind finishes.",
    },
    {
      title: "Modular by design",
      body:  "The Soleta exoskeleton is engineered for future additions from day one. New rooms, wings or covered terraces connect at pre-planned structural points — no demolition, no disruption.",
    },
    {
      title: "Natural insulation system",
      body:  "35 cm wood fibre walls provide thermal mass and acoustic calm. No synthetic foams. No petrochemical insulation. The material breathes with the climate.",
    },
    {
      title: "ZeroEnergy ready",
      body:  "Solar, geothermal or micro-hydro systems can be integrated at design stage or added later without structural modification. The Classic is designed for the long term.",
    },
  ],

  specs: [
    { label: "Structure",     value: "Post & beam glulam timber frame" },
    { label: "Insulation",    value: "Natural wood fibre — 35 cm wall" },
    { label: "Energy class",  value: "A+ — ZeroEnergy option available" },
    { label: "Build time",    value: "Factory: 6 weeks · On-site: 2–4 weeks" },
    { label: "Lifespan",      value: "80+ years" },
    { label: "Foundation",    value: "Ground screws (KSF) or concrete" },
  ],

  gallery:    [],  // Populate with real images to activate the gallery section
  floorPlans: [],  // No assets yet — section omitted at render time

  variants: [
    { name: "Classic 48",  area: "48 m²",  bedrooms: "1–2 bedrooms", price: "From €X" },
    { name: "Classic 72",  area: "72 m²",  bedrooms: "2–3 bedrooms", price: "From €X" },
    { name: "Classic 95",  area: "95 m²",  bedrooms: "3 bedrooms",   price: "From €X" },
    { name: "Classic 120", area: "120 m²", bedrooms: "3–4 bedrooms", price: "From €X" },
  ],

  customizable: [
    "Internal layout configuration and room distribution",
    "Exterior cladding material — timber species, finish and colour",
    "Window placement, size and glazing specification",
    "Kitchen and bathroom layout and finish level",
    "Terrace, carport or studio wing additions",
    "Foundation type — ground screws or concrete slab",
    "ZeroEnergy system specification",
  ],

  deliverySummary: [
    "Initial consultation and site visit — we study your land before any design begins",
    "Design and planning phase — options presented, permit submitted on your behalf",
    "Factory manufacturing of all structural elements — 6 weeks, off-site",
    "On-site assembly — structural frame erected in 3–5 days, weatherproof envelope in 2–4 weeks",
    "Interior finishing and systems installation",
    "Handover with full documentation and 3-year structural warranty",
  ],

  includes: [
    "Full timber frame structure, manufactured in our factory",
    "Natural wood fibre insulation (35 cm wall)",
    "Exterior cladding and roofing",
    "Triple-glazed windows and external doors",
    "Internal finishes — floors, walls, ceilings",
    "Kitchen and bathroom installations",
    "Electrical and plumbing rough-in",
    "Transport and crane placement on site",
    "3-year structural warranty",
  ],

  excludes: [
    "Land and site preparation",
    "Foundation works (quoted separately per site)",
    "Utility connections — electricity, water, sewage",
    "Building permit (we assist — see Permits & Legal)",
    "Interior furniture and appliances",
  ],

  relatedProjects: [
    {
      imageSrc: "/images/Aurora800x600.webp",
      imageAlt: "House Aurora",
      title:    "House Aurora",
      location: "Europe",
      category: "Private Residence",
      year:     2021,
      href:     "/built-projects/private-residences",
    },
    {
      imageSrc: "/images/Aquarius800x600.webp",
      imageAlt: "Villa Aquarius",
      title:    "Villa AQUARIUS",
      location: "Europe",
      category: "Private Residence",
      year:     2014,
      href:     "/built-projects/private-residences",
    },
  ],

  faq: [
    {
      question: "Can I extend the Classic after it is built?",
      answer:
        "Yes. The Soleta exoskeleton system is designed for modular additions. You can add new rooms, a covered terrace or a studio wing at any point — without demolishing or disturbing the existing structure.",
    },
    {
      question: "How long does the whole process take?",
      answer:
        "From signed contract to moving in: typically 3–6 months. Factory production takes 6 weeks. On-site assembly takes 2–4 weeks. Building permits vary by municipality — we guide you through the process.",
    },
    {
      question: "Does the price include the foundation?",
      answer:
        "Foundation works are quoted separately, as they depend on your specific site. We recommend and work with ground screw (KSF) foundations — fast, low-impact and earthquake-resilient.",
    },
    {
      question: "Can the Classic run on ZeroEnergy?",
      answer:
        "Yes. The Classic is engineered for the ZeroEnergy upgrade — solar, geothermal or micro-hydro systems can be integrated at the design stage or added later.",
    },
    {
      question: "Is this a permanent home or a holiday home?",
      answer:
        "Both. The Classic meets all European building standards for permanent residence. It is equally popular as a full-time family home and as a high-quality holiday home.",
    },
  ],

  relatedHref:  "/collection",
  relatedLabel: "View all collections",
};

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  SIGNATURE                                                                  */
/* ═══════════════════════════════════════════════════════════════════════════ */

export const signatureModel: HomeModel = {
  slug:       "signature",
  eyebrow:    "Signature Homes",
  heading:    "Architecture that\ndefines its landscape.",
  subheading:
    "For landmark sites and clients who want something genuinely distinct. Every Signature home is a one-of-a-kind collaboration.",
  badge: "Bespoke · Premium",

  heroImageSrc: "/images/Signature800x533.webp",
  heroImageAlt: "Signature Soleta home — bespoke timber architecture",

  priceDisplay: "on-request",

  description: [
    "The Signature collection exists for projects where the ordinary is not an option. These are homes designed from first principles — shaped by the specific character of the site, the client's way of living, and a commitment to architectural integrity that goes beyond style.",
    "Signature homes are fully custom. We begin with an extended discovery process — studying the land, the light, the views, and the brief — before a single line is drawn. The result is architecture that could only exist in that exact place.",
    "Materials are selected for longevity and authenticity. Exposed glulam structure, hand-selected timber cladding, bespoke glazing systems, and natural stone are combined to create spaces that improve with age.",
  ],

  audience: [
    "Clients with exceptional or architecturally significant sites",
    "Projects that require a distinct architectural identity — not a catalogue home",
    "Design-led clients who want full creative involvement in the outcome",
    "Private clients and developers commissioning a landmark residence",
  ],

  differentiators: [
    {
      title: "No standard plans",
      body:  "Every Signature home begins from first principles. The massing, orientation, spatial sequence, and material choices are determined entirely by the site and the brief — not by a template.",
    },
    {
      title: "Exposed glulam structure",
      body:  "The timber frame is not hidden — it is the architecture. Structural members are hand-selected and integrated as spatial and visual elements throughout the home.",
    },
    {
      title: "Bespoke material selection",
      body:  "Timber species, cladding profiles, stone, glazing systems, and hardware are all specified for the individual project. Nothing comes from a standard menu.",
    },
    {
      title: "Extended site analysis",
      body:  "We study the land, the light, the seasonal conditions, and the views before a line is drawn. The result is architecture that belongs to its place — not a home that has simply been placed on a site.",
    },
  ],

  specs: [
    { label: "Design",       value: "Fully custom — no standard plans" },
    { label: "Structure",    value: "Exposed glulam post & beam" },
    { label: "Cladding",     value: "Bespoke — timber, stone, metal, or composite" },
    { label: "Glazing",      value: "Custom triple-glazed systems" },
    { label: "Energy class", value: "A+ standard · Passive House on request" },
    { label: "Lifespan",     value: "100+ years" },
  ],

  gallery:    [],  // Populate with real images to activate the gallery section
  floorPlans: [],  // No assets — floor plan section omitted

  variants: [
    { name: "Signature S",  area: "120–200 m²", bedrooms: "3–4 bedrooms", price: "On request" },
    { name: "Signature L",  area: "200–350 m²", bedrooms: "4–6 bedrooms", price: "On request" },
    { name: "Signature XL", area: "350 m²+",    bedrooms: "6+ bedrooms",  price: "On request" },
  ],

  customizable: [
    "Site-specific massing, orientation, and sectional profile",
    "All structural dimensions, spans, and ceiling heights",
    "Cladding system — timber, stone, metal, composite, or combinations",
    "Glazing configuration — custom formats, pivot systems, corner glazing",
    "Interior spatial sequence and material palette",
    "Integration of volumes for pool, spa, garage, or ancillary studio",
    "ZeroEnergy and Passive House energy systems",
  ],

  deliverySummary: [
    "Extended brief and site analysis — land, light, views, planning context",
    "Concept design and client review — alternatives presented, not a single fixed option",
    "Design development and planning permission submission (managed by Soleta)",
    "Engineering, structural calculations, and full construction documentation",
    "Factory manufacturing of all timber elements — 8–12 weeks",
    "On-site assembly, finishing, and commissioning",
    "Handover with full documentation and 10-year structural warranty",
  ],

  includes: [
    "Extended site and brief analysis",
    "Full architectural design service",
    "Custom engineering and structural calculations",
    "Planning permission support",
    "Factory manufacturing of all timber elements",
    "On-site assembly and supervision",
    "Interior design coordination (optional)",
    "10-year structural warranty",
  ],

  excludes: [
    "Land acquisition",
    "Site preparation and groundworks",
    "Utility connections",
    "Interior furniture",
  ],

  relatedProjects: [
    {
      imageSrc: "/images/Aquarius800x600.webp",
      imageAlt: "Villa Aquarius",
      title:    "Villa AQUARIUS",
      location: "Europe",
      category: "Private Residence",
      year:     2014,
      href:     "/built-projects/private-residences",
    },
    {
      imageSrc: "/images/Aurora800x600.webp",
      imageAlt: "House Aurora",
      title:    "House Aurora",
      location: "Europe",
      category: "Private Residence",
      year:     2021,
      href:     "/built-projects/private-residences",
    },
  ],

  faq: [
    {
      question: "How is a Signature home different from a Custom Architecture project?",
      answer:
        "Signature homes are full-service bespoke projects — we lead the entire process, from site analysis to handover. Custom Architecture allows you to bring your own architect's design, and have Soleta manufacture and assemble it.",
    },
    {
      question: "What is the minimum budget for a Signature home?",
      answer:
        "Signature projects start from €250,000 for the building (excluding land, foundation, and site works). We discuss budget and feasibility in the first consultation — with no obligation.",
    },
    {
      question: "Can we specify our own materials?",
      answer:
        "Yes. We work with a curated palette of premium materials and can source specific materials on request. All selections are reviewed from the perspective of durability, sustainability, and compatibility with our construction system.",
    },
  ],

  relatedHref:  "/collection",
  relatedLabel: "View all collections",
};

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  LARGE FAMILY (legacy — unchanged, still rendered by ModelDetail)           */
/* ═══════════════════════════════════════════════════════════════════════════ */

export const largeFamilyModel: HomeModel = {
  slug:       "large-family",
  eyebrow:    "Large Family Homes",
  heading:    "Space that grows\nwith your family.",
  subheading:
    "4 to 7 bedrooms, generous living areas and a modular structure that allows new additions at any time — without demolition.",
  badge: "4–7 bedrooms",
  description: [
    "The Large Family collection addresses a real challenge: families grow, and needs change. Most homes cannot adapt without expensive and disruptive renovation. Soleta's modular exoskeleton system changes that — new wings, studios or covered terraces can be added years later without touching the original structure.",
    "Large Family homes are engineered for multi-generational living. Separate sleeping wings, flexible open-plan living areas and optional annexe modules mean the home can accommodate grandparents, grown children or long-term guests — each with genuine privacy.",
    "At this scale, ZeroEnergy systems make a significant financial difference. We design the energy system for the full projected footprint of the home — including future additions — so nothing needs to be retrofitted.",
  ],
  specs: [
    { label: "Size range",   value: "120 m² – 300 m²" },
    { label: "Bedrooms",     value: "4 to 7" },
    { label: "Structure",    value: "Extended post & beam glulam" },
    { label: "Additions",    value: "Modular — no demolition required" },
    { label: "Energy class", value: "A+ · ZeroEnergy standard at this scale" },
    { label: "Lifespan",     value: "80+ years" },
  ],
  includes: [
    "Full timber frame structure for all modules",
    "Natural insulation throughout",
    "All exterior finishes and roofing",
    "Triple-glazed windows and doors",
    "Kitchen and all bathrooms",
    "Electrical and plumbing rough-in",
    "Transport, crane placement and assembly",
    "5-year structural warranty",
  ],
  excludes: [
    "Land and site preparation",
    "Foundation works (quoted per site)",
    "Utility connections",
    "Building permits (assisted)",
    "Furniture and appliances",
  ],
  variants: [
    { name: "Family 120", area: "120 m²", bedrooms: "4 bedrooms", price: "From €X" },
    { name: "Family 160", area: "160 m²", bedrooms: "5 bedrooms", price: "From €X" },
    { name: "Family 220", area: "220 m²", bedrooms: "6 bedrooms", price: "From €X" },
    { name: "Family 300", area: "300 m²", bedrooms: "7 bedrooms", price: "From €X" },
  ],
  faq: [
    {
      question: "How do modular additions work in practice?",
      answer:
        "The Soleta exoskeleton is designed from day one for future expansion. New modules connect to the existing structure at pre-planned junction points — no demolition, no structural disruption. The addition is manufactured in our factory and assembled on-site in days.",
    },
    {
      question: "Can we phase the build to manage budget?",
      answer:
        "Yes. We can design the full home and build it in phases — starting with the core living areas and adding bedrooms or wings later. The foundation and structure are designed for the full footprint from the start.",
    },
    {
      question: "Is ZeroEnergy standard on Large Family homes?",
      answer:
        "We strongly recommend ZeroEnergy at this scale — the energy savings over 10 years significantly offset the initial investment. It is an option, not a requirement, but most Large Family clients choose it.",
    },
  ],
  relatedHref:  "/collection",
  relatedLabel: "View all collections",
};

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  HOLIDAY & RETREAT                                                          */
/* ═══════════════════════════════════════════════════════════════════════════ */

export const holidayRetreatModel: HomeModel = {
  slug:       "holiday-retreat",
  eyebrow:    "Holiday & Retreat Homes",
  heading:    "A second home that\nfeels like a first escape.",
  subheading:
    "Compact, calm architecture designed for rest, nature and honest connection to the landscape.",
  badge: "1–3 bedrooms",

  heroImageSrc: "/images/Retreat800x533.webp",
  heroImageAlt: "Soleta Holiday & Retreat home in natural setting",

  priceDisplay: "on-request",

  description: [
    "The Holiday & Retreat collection is designed for one purpose: to make arriving feel like relief. Compact, thoughtfully planned spaces that maximise natural light, outdoor connection and the quality of quiet.",
    "These homes are built for challenging locations — coastal headlands, mountain sites, lakeside plots and dense forests. Ground screw foundations mean minimal site disruption and the option to relocate if circumstances change.",
    "Holiday homes can also generate income. We advise on layouts optimised for short-term rental — including separate entrance options, outdoor shower and sauna configurations, and the ZeroEnergy systems that make off-grid operation viable.",
  ],

  audience: [
    "Second home owners seeking calm, low-maintenance architecture in nature",
    "Holiday rental investors wanting high-quality short-term accommodation",
    "Clients with remote or sensitive sites requiring minimal ground disturbance",
    "Anyone who values a well-designed home in a quieter, wilder setting",
  ],

  differentiators: [
    {
      title: "Built for difficult terrain",
      body:  "Ground screw foundations work on slopes, rocky ground and wetland-adjacent sites where conventional foundations are problematic or require significant earthworks.",
    },
    {
      title: "Relocatable",
      body:  "Homes built on ground screws can be dismantled and moved to a new site — particularly useful for plots with temporary planning permission or clients whose circumstances may change.",
    },
    {
      title: "Off-grid capable",
      body:  "Solar, battery storage and rainwater harvesting make independent operation viable even in locations without reliable grid access.",
    },
    {
      title: "Short build time",
      body:  "From signed contract to keys in 3–4 months. The structural frame is erected in days. No prolonged site disturbance in sensitive or remote landscapes.",
    },
  ],

  specs: [
    { label: "Size range",  value: "24 m² – 95 m²" },
    { label: "Bedrooms",    value: "1 to 3" },
    { label: "Foundation",  value: "Ground screws — relocatable" },
    { label: "Off-grid",    value: "ZeroEnergy option available" },
    { label: "Build time",  value: "3–4 months from contract" },
    { label: "Lifespan",    value: "80+ years" },
  ],

  gallery:    [],  // Populate with real images to activate the gallery section
  floorPlans: [],  // No assets — floor plan section omitted

  variants: [
    { name: "Nest 24",    area: "24 m²", bedrooms: "1 bedroom",    price: "From €X" },
    { name: "Retreat 48", area: "48 m²", bedrooms: "1–2 bedrooms", price: "From €X" },
    { name: "Lodge 72",   area: "72 m²", bedrooms: "2–3 bedrooms", price: "From €X" },
    { name: "Retreat 95", area: "95 m²", bedrooms: "3 bedrooms",   price: "From €X" },
  ],

  customizable: [
    "Number of bedrooms and sleeping configuration",
    "Terrace orientation and size — maximise view or ensure privacy",
    "Sauna, outdoor shower and wood-fired hot tub (optional add-ons)",
    "Off-grid system specification — solar, battery, rainwater harvesting",
    "Exterior cladding finish — natural, charred or painted timber",
    "Interior finish level — base specification through to full turnkey",
  ],

  deliverySummary: [
    "Site consultation — terrain, access, orientation, planning constraints reviewed",
    "Design and specification — compact, site-specific layout developed for your brief",
    "Building permit submission (managed by Soleta where applicable)",
    "Factory manufacturing — 4–6 weeks for all structural elements",
    "Ground screw installation and on-site structural assembly — 1–2 weeks",
    "Handover with documentation and 3-year structural warranty",
  ],

  includes: [
    "Full timber frame structure",
    "Natural insulation and weatherproof envelope",
    "All exterior finishes",
    "Windows, external doors and terrace",
    "Bathroom and compact kitchen",
    "Electrical and plumbing rough-in",
    "Transport and ground screw foundation placement",
    "3-year structural warranty",
  ],

  excludes: [
    "Utility connections (off-grid systems quoted separately)",
    "Building permits (assisted)",
    "Interior furniture",
    "Sauna and outdoor shower (optional add-ons)",
  ],

  relatedProjects: [
    {
      imageSrc: "/images/Life800x600.webp",
      imageAlt: "House Life",
      title:    "House Life",
      location: "Europe",
      category: "Holiday Home",
      year:     2024,
      href:     "/built-projects/holiday-homes",
    },
  ],

  faq: [
    {
      question: "Can I use this as a rental property?",
      answer:
        "Yes. We advise on layouts optimised for short-term rental. Many clients use their Holiday & Retreat home as a personal escape and rent it out when not in use — the ZeroEnergy option and ground screw foundation make this particularly attractive for remote locations.",
    },
    {
      question: "Can the home be moved to a different site?",
      answer:
        "Homes built on ground screw foundations can be relocated. This is one of the advantages of the Soleta system — particularly useful for plots with temporary permits or clients whose circumstances may change.",
    },
    {
      question: "Do these meet planning requirements for holiday use?",
      answer:
        "Yes — all Soleta homes meet European building regulations for both permanent and holiday use. We assist with all permit applications and can advise on local planning constraints before you commit.",
    },
  ],

  relatedHref:  "/collection",
  relatedLabel: "View all collections",
};

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  CUSTOM ARCHITECTURE                                                        */
/* ═══════════════════════════════════════════════════════════════════════════ */

export const customArchModel: HomeModel = {
  slug:       "custom-architecture",
  eyebrow:    "Custom Architecture",
  heading:    "Start from a sketch.\nWe build around your vision.",
  subheading:
    "Bring your own architect's design — or start with a brief and let our team shape it. We manufacture and assemble any timber-frame architecture.",
  badge: "Fully bespoke",
  description: [
    "Custom Architecture is for clients who arrive with a vision — or a sketch — rather than a catalogue preference. Perhaps you have already worked with an architect and have drawings. Perhaps you have a site and a feeling, but no fixed design.",
    "In both cases, our role is to translate architectural intention into built reality — with the manufacturing precision, structural expertise and construction management that the Soleta system provides.",
    "We work with external architects as a specialist manufacturing and delivery partner, or we lead the full design process ourselves. Either way, the result is a home that is entirely yours.",
  ],
  specs: [
    { label: "Design origin", value: "Client's architect or Soleta design team" },
    { label: "Structure",     value: "Any timber-frame configuration" },
    { label: "Size",          value: "No minimum or maximum" },
    { label: "Energy",        value: "A+ to Passive House — as specified" },
    { label: "Warranty",      value: "10 years full structural warranty" },
    { label: "Timeline",      value: "Depends on design complexity" },
  ],
  includes: [
    "Design review and structural engineering",
    "Factory manufacturing of all timber elements",
    "Transport and on-site assembly",
    "Site supervision throughout construction",
    "Building permit support",
    "10-year structural warranty",
  ],
  excludes: [
    "Architectural design fees (if external architect)",
    "Land and site preparation",
    "Foundation works",
    "Utility connections",
    "Interior finishes (quoted per specification)",
  ],
  variants: [
    { name: "Custom S", area: "Up to 120 m²", bedrooms: "1–3 bedrooms", price: "On request" },
    { name: "Custom M", area: "120–250 m²",   bedrooms: "3–5 bedrooms", price: "On request" },
    { name: "Custom L", area: "250 m²+",       bedrooms: "5+ bedrooms",  price: "On request" },
  ],
  faq: [
    {
      question: "Can I use my own architect?",
      answer:
        "Yes. We work with external architects as a manufacturing and delivery partner. We review the design for structural and manufacturing feasibility, then produce and assemble all timber elements to the architect's specification.",
    },
    {
      question: "What if I only have a rough idea?",
      answer:
        "That is a perfectly valid starting point. Our design team can develop a full architectural brief from a site, a lifestyle description and a budget. We then design, engineer and build the complete home.",
    },
    {
      question: "Is there a minimum project size?",
      answer:
        "No. We have delivered Custom projects from 40 m² cabins to 400 m² family estates. The approach is the same — rigorous manufacturing, careful assembly, long-term quality.",
    },
  ],
  relatedHref:  "/collection",
  relatedLabel: "View all collections",
};

/* ── Aggregate export ──────────────────────────────────────────────────────── */

export const allModels = [
  classicModel,
  signatureModel,
  largeFamilyModel,
  holidayRetreatModel,
  customArchModel,
];
