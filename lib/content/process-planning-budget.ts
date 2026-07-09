/* ─────────────────────────────────────────────────────────────────────────────
   Planning & Budget — content data
   /process/planning-budget draws from this file.
   ───────────────────────────────────────────────────────────────────────────── */

/* ── Page header ─────────────────────────────────────────────────────────────── */

export const planningBudgetHeader = {
  eyebrow: "Planning & Budget",
  label: "Planning & Budget",
  heading: "How budget clarity is built into a Soleta project",
  subtitle:
    "We do not publish fixed prices online. Instead, budget clarity is built progressively — through conversation, site information, and design decisions — until a formal offer can be made responsibly.",
  imageSrc: "https://img.soletahomes.com/Planning_and_budgeting_971x1619.webp",
  imageAlt: "Planning and budgeting notes over an architectural plan",
};

/* ── 1. Why there is no fixed online price list ─────────────────────────────── */

export const noFixedPriceList = {
  label: "01",
  heading: "Why there is no fixed online price list",
  body:
    "A Soleta home is shaped by variables that cannot be reduced to a single published figure: the model and size, the specification level, the site and its ground conditions, the delivery country, and the scope you choose to include. Publishing a generic price would either mislead clients with unusually simple sites, or under-represent the cost for clients with more demanding ones. We would rather give you an honest, project-specific answer than a public number that does not apply to your project.",
};

/* ── 2. What shapes the budget ──────────────────────────────────────────────── */

export const budgetFactors = {
  label: "02",
  heading: "What shapes the budget",
  items: [
    {
      title: "Model and size",
      body: "The collection direction — Signature, Classic, or Holiday & Retreat — and the overall size of the home are the starting point for any estimate.",
    },
    {
      title: "Specification level",
      body: "Material choices, glazing, insulation thickness, and finish quality all move the budget within a given model and size.",
    },
    {
      title: "Site and foundation conditions",
      body: "Ground conditions, access, topography and any required site works are assessed per plot and affect both scope and cost.",
    },
    {
      title: "Delivery country and location",
      body: "Transport, local coordination, and in-country requirements vary by market and are confirmed for your specific location.",
    },
    {
      title: "Scope you choose to include",
      body: "A structural package, an extended delivery scope where available, or something in between — the scope selected materially changes the total figure.",
    },
  ],
};

/* ── 3. How clarity develops stage by stage ─────────────────────────────────── */

export const budgetStages = {
  label: "03",
  heading: "How clarity develops stage by stage",
  intro:
    "Budget clarity is not delivered all at once. It develops in step with the information we have about your project — becoming progressively more precise as design, engineering and site details are confirmed.",
  stages: [
    {
      number: "01",
      title: "Early orientation",
      body: "In the first conversation, we discuss your brief, your site, and your priorities. At this point we can orient you toward the right collection direction and general scale, but not yet a reliable figure.",
    },
    {
      number: "02",
      title: "Feasibility range",
      body: "Once we understand your site and intended scope, we can share an indicative range based on comparable projects — enough to help you judge whether the direction is realistic for your budget.",
    },
    {
      number: "03",
      title: "Preliminary specification",
      body: "As the design develops and material and finish decisions take shape, the range narrows. This is where most of the meaningful budget decisions are made together.",
    },
    {
      number: "04",
      title: "Formal offer",
      body: "Once design and engineering are sufficiently advanced, and site and scope are confirmed, we issue a formal project offer. This is the figure you can rely on to proceed.",
    },
  ],
};

/* ── 4. What Soleta can control ─────────────────────────────────────────────── */

export const whatSoletaControls = {
  label: "04",
  heading: "What Soleta can control",
  body:
    "The structural system, manufacturing quality, factory lead times, and the coordination between design, engineering and production are within our direct control. Because these are handled by one team, we can give you a dependable, well-informed figure once we have enough information about your project — rather than a figure that shifts as it passes between separate contractors.",
};

/* ── 5. What remains local or project-dependent ─────────────────────────────── */

export const whatRemainsLocal = {
  label: "05",
  heading: "What remains local or project-dependent",
  body:
    "Foundation works, building permit fees, local professional fees, utility connections, and certain site works depend on local conditions, regulations and authorities outside our direct control. We do not offer turnkey delivery in every country, and where local coordination is required, scope and cost are confirmed against your specific site and market before a formal offer is issued.",
};

/* ── 6. When a formal offer becomes possible ────────────────────────────────── */

export const whenFormalOfferPossible = {
  label: "06",
  heading: "When a formal offer becomes possible",
  body:
    "A formal offer becomes possible once we have sufficient design development, engineering input, confirmed scope, and site information for your project. Until that point, any figure we share is indicative and intended to help you plan — not a commitment. We are explicit about which stage a number belongs to, so you always know how much weight to give it.",
};

/* ── Budget FAQ ──────────────────────────────────────────────────────────────── */

export const budgetFaq = [
  {
    question: "Why does Soleta not publish fixed prices online?",
    answer:
      "Because the variables that shape a project's cost — model, size, specification, site conditions, delivery country and scope — are too significant to make a single published figure meaningful. A generic online price would not reflect your specific project, and we would rather give you an accurate, project-specific answer than a public number that does not apply.",
  },
  {
    question: "When can I receive a reliable project budget?",
    answer:
      "An indicative range is possible once we understand your site and intended scope, typically during the Dream and early Design & Planning stages. A formal, reliable offer is issued once design and engineering are sufficiently advanced and your site and scope are confirmed.",
  },
  {
    question: "What affects the budget most?",
    answer:
      "The model and size you choose, the specification level, your site's ground conditions, the delivery country, and the scope you select — from structural kit only through to a fully turnkey home — are the main factors that move the budget.",
  },
  {
    question: "What costs remain local or separately scoped?",
    answer:
      "Foundation works, building permit fees, local professional fees, utility connections and certain site works depend on local conditions, regulations and authorities. These are confirmed against your specific site and market, and are not included in a generic published figure.",
  },
];

/* ── Closing CTA ─────────────────────────────────────────────────────────────── */

export const planningBudgetCta = {
  eyebrow: "Ready to begin",
  heading: "Request a Private Consultation",
  body: "Tell us about your site, your vision, and your priorities. We will give you an honest, project-specific assessment of what is possible.",
  primaryCta: { label: "Request a Private Consultation", href: "/request-private-offer" },
  secondaryCta: { label: "Back to Process overview", href: "/process" },
};
