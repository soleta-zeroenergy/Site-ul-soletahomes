export const processHero = {
  eyebrow: "Process & Services",
  heading: "From first conversation\nto moving in.",
  body: "Building a home is one of the most significant decisions you will make. We have designed our process to make it clear, predictable and — as much as possible — enjoyable.",
};

export const processSteps = [
  {
    number: "01",
    label: "Dream",
    heading: "First conversation",
    duration: "1–2 weeks",
    description:
      "We begin with a conversation — not a sales pitch. Tell us about your site, your vision, how you live and what matters most to you. We listen, ask questions and give you an honest assessment of what is feasible within your budget and timeline.",
    deliverable: "Project brief · Model recommendation · Budget estimate",
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
    href: "/process/design-planning",
  },
  {
    number: "03",
    label: "Engineering",
    heading: "The technical foundation",
    duration: "4–12 weeks",
    description:
      "Structural engineering, energy calculations, detailed manufacturing drawings and — if you need it — building permit support. This is the stage most builders rush. We do not. Every joint, every connection and every thermal bridge is calculated before production begins.",
    deliverable: "Structural calculations · Energy model · Building permit (if required)",
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
    href: "/process/turnkey",
  },
];

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
  primaryCta: { label: "Request a Private Offer", href: "/contact" },
  secondaryCta: { label: "Download the Catalogue", href: "/catalog" },
  theme: "dark",
};
