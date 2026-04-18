/* ─────────────────────────────────────────────────────────────────────────────
   Process & Services — content data
   /process hub page and the 5 step detail pages draw from this file.
   ───────────────────────────────────────────────────────────────────────────── */

/* ── Hero ────────────────────────────────────────────────────────────────────── */

export const processHero = {
  eyebrow: "Process & Services",
  heading: "One team.\nOne process.\nStart to finish.",
  body: "Building a home is one of the most consequential decisions you will make. Our process is designed to give you clarity at every stage — what happens, what you receive and what depends on your specific site, country and brief.",
};

/* ── Why continuity matters ──────────────────────────────────────────────────── */

export const processWhy = {
  heading: "Why one team from start to finish matters",
  body: "When design, engineering, manufacturing and assembly are handled by the same organisation, accountability is undivided. There is no gap between the architect and the builder, no translation loss between the engineer and the factory, no finger-pointing between the site team and the supplier. We designed our process around this because fragmented delivery is where most building projects lose time, money and quality.",
};

/* ── The 5 stages ────────────────────────────────────────────────────────────── */

export const processSteps = [
  {
    number: "01",
    label: "Dream",
    heading: "First conversation",
    duration: "1–2 weeks",
    description:
      "We begin with a conversation — not a sales pitch. Tell us about your site, your vision, how you live and what matters most to you. We listen, ask questions and give you an honest assessment of what is feasible within your budget and timeline.",
    deliverable: "Project brief · Model recommendation · Budget estimate",
    deliverables: [
      "Project brief documenting your requirements",
      "Model recommendation aligned to your site and budget",
      "Indicative budget estimate",
    ],
    href: "/process/dream",
  },
  {
    number: "02",
    label: "Design & Planning",
    heading: "Your home takes shape",
    duration: "4–8 weeks",
    description:
      "Our design team develops the architectural plan around your brief. Floor plans, elevations, section drawings, material selections and 3D visualisations. You review, revise and approve before anything moves forward. Nothing is fixed until you say so.",
    deliverable: "Architectural drawings · 3D visuals · Material schedule · Final offer",
    deliverables: [
      "Architectural drawings — plans, elevations, sections",
      "3D visualisations of your home",
      "Material and finish schedule",
      "Final project offer for signature",
    ],
    href: "/process/design-planning",
  },
  {
    number: "03",
    label: "Engineering",
    heading: "The technical foundation",
    duration: "4–12 weeks",
    description:
      "Structural engineering, energy calculations and detailed manufacturing drawings. If your project requires building permit support, this is the stage where technical documentation is prepared. This is the stage most builders rush. We do not. Every joint, every connection and every thermal bridge is calculated before production begins.",
    deliverable: "Structural calculations · Energy model · Building permit (if required)",
    deliverables: [
      "Structural engineering calculations",
      "Energy model and performance specification",
      "Detailed manufacturing drawings",
      "Building permit documentation, where applicable",
    ],
    href: "/process/engineering",
  },
  {
    number: "04",
    label: "Build",
    heading: "Factory to site",
    duration: "6–10 weeks",
    description:
      "Your home is manufactured in our production facility in Central Europe. Every element is cut, drilled and finished under controlled conditions, then labelled and loaded in assembly order. When the truck arrives on your site, the structural frame goes up in 3 to 5 days. The complete weatherproof envelope — structure, insulation, cladding, windows — is achieved within 2 to 4 weeks.",
    deliverable: "Manufactured home · Transported to site · Structural frame erected · Envelope complete",
    deliverables: [
      "Home manufactured in our production facility",
      "Transport and logistics to your site",
      "Structural frame erected on site",
      "Weatherproof envelope complete — structure, insulation, cladding, windows",
    ],
    href: "/process/build",
  },
  {
    number: "05",
    label: "Turnkey Delivery",
    heading: "Keys in hand",
    duration: "2–6 weeks",
    description:
      "Final finishes, installations, systems commissioning and handover. We walk you through every system — heating, ventilation, energy management, smart home controls. You receive full documentation, warranties and a direct line to our aftercare team.",
    deliverable: "Completed home · Systems commissioned · Full documentation · Warranty pack",
    deliverables: [
      "Completed, move-in-ready home",
      "All systems commissioned and tested",
      "Full technical documentation and warranties",
      "Introduction to the aftercare programme",
    ],
    href: "/process/turnkey",
  },
];

/* ── Services around the process ─────────────────────────────────────────────── */

export const processServices = [
  {
    title: "Private Consulting",
    body: "A structured session with our design and technical team. We review your site, your brief and your budget, and give you an honest assessment of what is possible. Bookable before any commitment to proceed.",
  },
  {
    title: "Custom Design",
    body: "Full architectural design from first principles, for clients who want a home entirely shaped by their site and programme rather than adapted from a standard model.",
  },
  {
    title: "Permits & Legal Coordination",
    body: "Building permit preparation and coordination across European markets, working with local planning professionals. Permit requirements vary significantly by country, municipality and plot — scope and timeline are confirmed at the engineering stage.",
  },
  {
    title: "Interior Design",
    body: "Material selections, furniture specification, lighting design and coordination — available as a full service or as a targeted consultation to support your own designer.",
  },
  {
    title: "Aftercare",
    body: "Annual inspections, maintenance programmes and warranty support. We built your home — we want it to perform for decades. Aftercare is available as a standalone service after handover.",
  },
];

/* ── Scope: included vs separately scoped ────────────────────────────────────── */

export const processScope = {
  included: {
    heading: "Typically included in every project",
    items: [
      "Structural system — post and beam glulam frame",
      "Natural wood fibre insulation — walls, roof and floor",
      "Triple-glazed windows and external doors",
      "Ventilated cladding system",
      "Factory manufacturing and transport to site",
      "On-site structural assembly and envelope installation",
      "Structural engineering and energy model",
      "Technical documentation and structural warranty",
    ],
  },
  separate: {
    heading: "Project-specific or separately scoped",
    items: [
      "Foundation works — type and cost depend on ground conditions",
      "Building permits — requirements vary by country and municipality",
      "Interior finishes — paint, flooring, kitchen, bathrooms",
      "MEP installations — electrical, plumbing, heating",
      "ZeroEnergy renewable systems — sized and priced per site",
      "Interior design and furniture coordination",
      "Landscaping and external works",
      "Local professional fees — planners, structural engineers",
    ],
  },
};

/* ── Expectations / indicative timeline ─────────────────────────────────────── */

export const processExpectations = [
  {
    value: "1–2 weeks",
    label: "Dream to signed brief — typical range",
  },
  {
    value: "8–16 weeks",
    label: "Design & engineering — depending on complexity",
  },
  {
    value: "6–10 weeks",
    label: "Factory production — from manufacturing start",
  },
  {
    value: "4–8 weeks",
    label: "On-site assembly to handover — weather and site dependent",
  },
];

/* ── FAQ ─────────────────────────────────────────────────────────────────────── */

export const processFaq = [
  {
    question: "What is included in the base project scope?",
    answer:
      "Every Soleta project includes the structural system, natural insulation, triple-glazed windows, cladding, factory manufacturing, transport to site, on-site structural assembly and envelope installation, structural engineering, an energy model and technical documentation. Foundation works, interior finishes, MEP installations, building permits and renewable energy systems are project-specific and separately scoped.",
  },
  {
    question: "Do you handle building permits?",
    answer:
      "We prepare the technical documentation required for building permit applications — structural drawings, energy calculations, specification documents — and coordinate with local planning professionals where required. Permit requirements, timelines and fees vary significantly by country, region and municipality. We confirm what is required and what is included at the engineering stage of your project.",
  },
  {
    question: "How long does the full process take?",
    answer:
      "A straightforward project — standard model, clear site, no complex planning — typically takes 6 to 10 months from first conversation to handover. Complex or custom projects, or those requiring building permits in slower-moving jurisdictions, take longer. We give indicative timelines at the Dream stage and confirm them when engineering is complete.",
  },
  {
    question: "Do you work outside Romania?",
    answer:
      "Yes. We have completed projects in Romania, Germany, France, Austria and other European markets. Our structural system is CE-marked for use across the EU. Where local permits or professional coordination are required, we work with trusted local partners. International projects are handled through our standard process — the main variable is permit timeline, which we clarify per country.",
  },
  {
    question: "Can I use my own architect or interior designer?",
    answer:
      "Yes. We work with clients who bring their own architects and with architects who specify Soleta for their clients. The structural system and wall build-up are fixed — these are what give us the performance and warranty we offer. Design and interior decisions are yours. Where external architects are involved, we work through a coordinated technical interface to ensure the design and the system are compatible.",
  },
  {
    question: "What happens if planning permission is not granted?",
    answer:
      "Planning outcomes depend on the local authority, the site and the design — factors we cannot fully control. If a permit application is refused, we review the refusal grounds with you and assess whether a revised design or a resubmission is viable. Costs incurred at the engineering stage to that point are charged as incurred. We discuss this risk explicitly before the engineering stage begins.",
  },
  {
    question: "What is the aftercare programme?",
    answer:
      "We offer annual inspection visits, maintenance guidance, warranty management and technical support for completed homes. Aftercare is available as a standalone programme after handover and is particularly relevant for clients in countries where we do not have a permanent local presence. Your project documentation, system manuals and warranty pack are provided at handover.",
  },
];

/* ── Service levels (kept for compatibility — no longer rendered on hub) ─────── */

export const serviceLevels = [
  {
    name: "Kit Only",
    label: "You build, we manufacture",
    description:
      "We manufacture the complete structural kit — frame, insulation, cladding, windows — and deliver it to your site. Your team assembles it. Ideal for experienced self-builders or clients with trusted local contractors.",
    includes: [
      "Full structural manufacturing drawings",
      "Factory-made structural kit",
      "Transport to site",
      "Technical support during assembly",
      "3-year structural warranty",
    ],
    price: "From €X/m²",
    cta: "Enquire",
  },
  {
    name: "Turnkey",
    label: "We deliver a finished home",
    description:
      "We manage everything from manufacturing through to a finished, move-in-ready home. You make the decisions — we handle the complexity. The most popular choice for clients building their primary residence.",
    includes: [
      "Everything in Kit Only",
      "On-site assembly by Soleta team",
      "All internal finishes",
      "Kitchen and bathroom installation",
      "Electrical and plumbing completion",
      "ZeroEnergy systems (optional)",
      "5-year full warranty",
    ],
    price: "From €X/m²",
    cta: "Enquire",
    featured: true,
  },
  {
    name: "Full Service",
    label: "We manage everything",
    description:
      "Design, permits, foundation, manufacturing, assembly, finishes, landscaping — one contract, one point of contact. For clients who want the outcome without the process.",
    includes: [
      "Everything in Turnkey",
      "Full architectural design",
      "Building permit management",
      "Foundation works",
      "Interior design",
      "Landscape coordination",
      "10-year full warranty",
    ],
    price: "On request",
    cta: "Enquire",
  },
];

/* ── Legacy services (kept for compatibility) ─────────────────────────────────── */

export const services = [
  {
    label: "Private Consulting",
    href: "/services/private-consulting",
    description:
      "A structured 2-hour session with our design and technical team. We review your site, your brief and your budget — and give you an honest assessment of what is possible. No obligation.",
  },
  {
    label: "Custom Design",
    href: "/services/custom-design",
    description:
      "Full architectural design from first principles. For clients who want a home that is entirely their own — not adapted from a standard model.",
  },
  {
    label: "Permits & Legal",
    href: "/services/permits-legal",
    description:
      "Building permit preparation and submission across Europe, in partnership with local planning professionals. We know what planners need and how to give it to them.",
  },
  {
    label: "Interior Design",
    href: "/services/interior-design",
    description:
      "Material selections, furniture specification, lighting design and coordination. Available as a full service or as a consultation to support your own designer.",
  },
  {
    label: "Aftercare",
    href: "/services/aftercare",
    description:
      "Annual inspections, maintenance programmes, warranty management and extension support. We built your home — we want it to last.",
  },
];

export const timelineData = [
  { phase: "Dream", weeks: "1–2", cumulative: "2" },
  { phase: "Design", weeks: "4–8", cumulative: "10" },
  { phase: "Engineering", weeks: "4–12", cumulative: "22" },
  { phase: "Build", weeks: "6–10", cumulative: "32" },
  { phase: "Delivery", weeks: "2–6", cumulative: "38" },
];

export const processCta = {
  eyebrow: "Ready to start",
  heading: "Begin your Soleta project",
  body: "The first conversation is free. Tell us about your site and your vision — we will tell you what is possible.",
  primaryCta: { label: "Request a Private Offer", href: "/request-private-offer" },
  secondaryCta: { label: "Download the Catalogue", href: "/catalog" },
  theme: "dark",
};
