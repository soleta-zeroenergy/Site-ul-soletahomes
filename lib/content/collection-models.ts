export type HomeModel = {
  slug: string;
  eyebrow: string;
  heading: string;
  subheading: string;
  badge: string;
  description: string[];
  specs: { label: string; value: string }[];
  includes: string[];
  excludes: string[];
  variants: { name: string; area: string; bedrooms: string; price: string }[];
  faq: { question: string; answer: string }[];
  relatedHref: string;
  relatedLabel: string;
};

export const classicModel: HomeModel = {
  slug: "classic",
  eyebrow: "Classic Soleta Homes",
  heading: "Timeless timber.\nBuilt to last generations.",
  subheading:
    "The Classic Soleta is our most requested home — generous proportions, enduring materials and a design that belongs in any landscape.",
  badge: "Most popular",
  description: [
    "The Classic Soleta was born from a simple conviction: a home should work with nature, not against it. Post and beam timber construction, natural insulation and passive solar orientation combine to create a home that stays warm in winter and cool in summer — without relying on expensive systems.",
    "Every Classic Soleta is built in our factory under controlled conditions, then transported and assembled on your site in days, not months. The result is a home with the quality of fine joinery and the speed of modern manufacturing.",
    "Our modular exoskeleton system means the Classic can grow with your family. Add a new wing, a studio or a covered terrace — without demolishing or disturbing the existing structure.",
  ],
  specs: [
    { label: "Structure", value: "Post & beam glulam timber frame" },
    { label: "Insulation", value: "Natural wood fibre — 35 cm wall" },
    { label: "Energy class", value: "A+ — ZeroEnergy option available" },
    { label: "Build time", value: "Factory: 6 weeks · On-site: 2–4 weeks" },
    { label: "Lifespan", value: "80+ years" },
    { label: "Foundation", value: "Ground screws (KSF) or concrete" },
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
    "Foundation works (quoted separately)",
    "Utility connections (electricity, water, sewage)",
    "Building permit (we assist — see Permits & Legal)",
    "Interior furniture and appliances",
  ],
  variants: [
    { name: "Classic 48", area: "48 m²", bedrooms: "1–2 bedrooms", price: "From €X" },
    { name: "Classic 72", area: "72 m²", bedrooms: "2–3 bedrooms", price: "From €X" },
    { name: "Classic 95", area: "95 m²", bedrooms: "3 bedrooms", price: "From €X" },
    { name: "Classic 120", area: "120 m²", bedrooms: "3–4 bedrooms", price: "From €X" },
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
        "Both. The Classic meets all Romanian and EU building standards for permanent residence. It is equally popular as a full-time family home and as a high-quality holiday home.",
    },
  ],
  relatedHref: "/collection",
  relatedLabel: "View all collections",
};

export const signatureModel: HomeModel = {
  slug: "signature",
  eyebrow: "Signature Homes",
  heading: "Architecture that\ndefines its landscape.",
  subheading:
    "For landmark sites and clients who want something genuinely distinctive. Every Signature home is a one-of-a-kind collaboration.",
  badge: "Bespoke · Premium",
  description: [
    "The Signature collection exists for projects where the ordinary is not an option. These are homes designed from first principles — shaped by the specific character of the site, the client's way of living and a commitment to architectural integrity that goes beyond style.",
    "Signature homes are fully custom. We begin with an extended discovery process — studying the land, the light, the views and the brief — before a single line is drawn. The result is architecture that could only exist in that exact place.",
    "Materials are selected for longevity and authenticity. Exposed glulam structure, hand-selected timber cladding, bespoke glazing systems and natural stone are combined to create spaces that improve with age.",
  ],
  specs: [
    { label: "Design", value: "Fully custom — no standard plans" },
    { label: "Structure", value: "Exposed glulam post & beam" },
    { label: "Cladding", value: "Bespoke — timber, stone, metal or composite" },
    { label: "Glazing", value: "Custom triple-glazed systems" },
    { label: "Energy class", value: "A+ standard · Passive House on request" },
    { label: "Lifespan", value: "100+ years" },
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
  variants: [
    { name: "Signature S", area: "120–200 m²", bedrooms: "3–4 bedrooms", price: "On request" },
    { name: "Signature L", area: "200–350 m²", bedrooms: "4–6 bedrooms", price: "On request" },
    { name: "Signature XL", area: "350 m²+", bedrooms: "6+ bedrooms", price: "On request" },
  ],
  faq: [
    {
      question: "How is a Signature home different from a Custom Architecture project?",
      answer:
        "Signature homes are full-service bespoke projects — we lead the entire process from site analysis to handover. Custom Architecture allows you to bring your own architect's design and have Soleta manufacture and assemble it.",
    },
    {
      question: "What is the minimum budget for a Signature home?",
      answer:
        "Signature projects start from €250,000 for the building (excluding land, foundation and site works). We discuss budget and feasibility in the first consultation — there is no obligation.",
    },
    {
      question: "Can we specify our own materials?",
      answer:
        "Yes. We work with a curated palette of premium materials and can source specific materials on request. All selections are reviewed for durability, sustainability and compatibility with our construction system.",
    },
  ],
  relatedHref: "/collection",
  relatedLabel: "View all collections",
};

export const largeFamilyModel: HomeModel = {
  slug: "large-family",
  eyebrow: "Large Family Homes",
  heading: "Space that grows\nwith your family.",
  subheading:
    "4 to 7 bedrooms, generous living areas and a modular structure that allows new additions at any time — without demolition.",
  badge: "4–7 bedrooms",
  description: [
    "The Large Family collection addresses a real challenge: families grow, and needs change. Most homes cannot adapt without expensive and disruptive renovation. Soleta's modular exoskeleton system changes that — new wings, studios or covered terraces can be added years later without touching the original structure.",
    "Large Family homes are engineered for multi-generational living. Separate sleeping wings, flexible open-plan living areas and optional annexe modules mean the home can accommodate grandparents, grown children or long-term guests — each with genuine privacy.",
    "At this scale, ZeroEnergy systems make a significant financial difference. We design the energy system for the full projected footprint of the home — including future additions — so nothing needs to be retrofitted.",
  ],
  specs: [
    { label: "Size range", value: "120 m² – 300 m²" },
    { label: "Bedrooms", value: "4 to 7" },
    { label: "Structure", value: "Extended post & beam glulam" },
    { label: "Additions", value: "Modular — no demolition required" },
    { label: "Energy class", value: "A+ · ZeroEnergy standard at this scale" },
    { label: "Lifespan", value: "80+ years" },
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
  relatedHref: "/collection",
  relatedLabel: "View all collections",
};

export const holidayRetreatModel: HomeModel = {
  slug: "holiday-retreat",
  eyebrow: "Holiday & Retreat Homes",
  heading: "A second home that\nfeels like a first escape.",
  subheading:
    "Compact, calm architecture designed for rest, nature and honest connection to the landscape.",
  badge: "1–3 bedrooms",
  description: [
    "The Holiday & Retreat collection is designed for one purpose: to make arriving feel like relief. Compact, thoughtfully planned spaces that maximise natural light, outdoor connection and the quality of quiet.",
    "These homes are built for challenging locations — coastal headlands, mountain sites, lakeside plots and dense forests. Ground screw foundations mean minimal site disruption and the option to relocate if circumstances change.",
    "Holiday homes can also generate income. We advise on layouts optimised for short-term rental — including separate entrance options, outdoor shower and sauna configurations, and the ZeroEnergy systems that make off-grid operation viable.",
  ],
  specs: [
    { label: "Size range", value: "24 m² – 95 m²" },
    { label: "Bedrooms", value: "1 to 3" },
    { label: "Foundation", value: "Ground screws — relocatable" },
    { label: "Off-grid", value: "ZeroEnergy option available" },
    { label: "Build time", value: "3–4 months from contract" },
    { label: "Lifespan", value: "80+ years" },
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
  variants: [
    { name: "Nest 24", area: "24 m²", bedrooms: "1 bedroom", price: "From €X" },
    { name: "Retreat 48", area: "48 m²", bedrooms: "1–2 bedrooms", price: "From €X" },
    { name: "Lodge 72", area: "72 m²", bedrooms: "2–3 bedrooms", price: "From €X" },
    { name: "Retreat 95", area: "95 m²", bedrooms: "3 bedrooms", price: "From €X" },
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
        "Yes — all Soleta homes meet Romanian and EU building regulations for both permanent and holiday use. We assist with all permit applications and can advise on local planning constraints before you commit.",
    },
  ],
  relatedHref: "/collection",
  relatedLabel: "View all collections",
};

export const customArchModel: HomeModel = {
  slug: "custom-architecture",
  eyebrow: "Custom Architecture",
  heading: "Start from a sketch.\nWe build around your vision.",
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
    { label: "Structure", value: "Any timber-frame configuration" },
    { label: "Size", value: "No minimum or maximum" },
    { label: "Energy", value: "A+ to Passive House — as specified" },
    { label: "Warranty", value: "10 years full structural warranty" },
    { label: "Timeline", value: "Depends on design complexity" },
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
    { name: "Custom M", area: "120–250 m²", bedrooms: "3–5 bedrooms", price: "On request" },
    { name: "Custom L", area: "250 m²+", bedrooms: "5+ bedrooms", price: "On request" },
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
  relatedHref: "/collection",
  relatedLabel: "View all collections",
};

export const allModels = [
  classicModel,
  signatureModel,
  largeFamilyModel,
  holidayRetreatModel,
  customArchModel,
];
