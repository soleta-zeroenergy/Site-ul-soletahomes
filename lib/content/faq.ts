/* ─────────────────────────────────────────────────────────────────────────────
   FAQ — content data
   Powers /faq page. Structured in 6 categories.
   ───────────────────────────────────────────────────────────────────────────── */

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  id: string;
  label: string;
  heading: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  /* ── 1. Models & Custom ──────────────────────────────────────────────────── */
  {
    id: "models-custom",
    label: "Models & Custom",
    heading: "Models and custom design",
    items: [
      {
        question: "What is the difference between the collection models and a custom design?",
        answer: "The collection models — Signature, Classic, Holiday & Retreat and Custom Architecture — are resolved, engineered and tested architectural systems. They can be adapted to your site and brief within a defined range: orientation, window configuration, internal layout, cladding and finish selections. Custom Design is for projects where the brief, site or programme cannot be resolved by adapting a standard model. Custom projects use the same structural system and factory fabrication method; what changes is the architectural form, massing and spatial arrangement.",
      },
      {
        question: "Can I modify a collection model significantly?",
        answer: "Yes — within the structural logic of the system. We can adjust the floor plan within the structural grid, modify window sizes and positions, change the cladding material and finish, and adapt the internal layout. We cannot extend the structural footprint indefinitely without moving into custom design territory, and we cannot remove the post-and-beam structural system. The range of modifications available for each model is discussed during the Design & Planning stage.",
      },
      {
        question: "What does the Custom Architecture path involve?",
        answer: "Custom Architecture begins with an extended site and brief analysis — typically two to three weeks. We develop two or three distinct concept directions before committing to a path. The output is a complete engineering-ready drawing set: floor plans, elevations, sections, 3D visualisations and a material specification schedule. Custom projects take longer and cost more than standard model adaptations. The process, timeline and fee structure are confirmed before design work begins.",
      },
      {
        question: "Can I see completed examples before committing?",
        answer: "Yes. Our Built Projects section shows completed homes across the main model types. For project-specific photography or site visits to completed homes, we can arrange access by request — typically after an initial conversation in which we understand your project context.",
      },
      {
        question: "Are the homes delivered fully finished or as a structure only?",
        answer: "Soleta homes are available as a complete turnkey delivery — finished, commissioned and ready to move into — or as a structural kit for clients who wish to handle their own internal fit-out. The delivery scope is confirmed in writing before the project begins. The majority of our clients choose the full turnkey path.",
      },
    ],
  },

  /* ── 2. Price & Scope ────────────────────────────────────────────────────── */
  {
    id: "price-scope",
    label: "Price & Scope",
    heading: "Price and project scope",
    items: [
      {
        question: "What is included in a Soleta project price?",
        answer: "The standard project price covers design and engineering, factory manufacturing, transport to site, on-site assembly, and the complete turnkey fit-out — internal finishes, kitchen, bathrooms, installed and commissioned systems. What is typically not included: the land, foundation works (which depend on site ground conditions), landscaping and external works beyond the immediate building footprint, and furniture. The exact scope is confirmed in writing in the project offer before any work begins.",
      },
      {
        question: "How is the project priced?",
        answer: "Pricing is based on the specific home — model type, size, specification, delivery location and project scope. We do not publish fixed price lists because the variables are too significant to make a general figure useful. An indicative budget range is provided at the Private Consulting stage. A firm offer is produced after design and engineering are complete. We do not price until we have enough information to price accurately.",
      },
      {
        question: "Are foundations included in the price?",
        answer: "Foundation works are typically scoped and priced separately, because ground conditions vary significantly between sites and we cannot quote a foundation price without understanding the site. We can advise on foundation type during the engineering stage. Ground screw (KSF) foundations — which we use where site conditions allow — are fast, non-invasive and significantly less expensive than conventional concrete strip or slab foundations.",
      },
      {
        question: "What is the Private Consulting session and is it free?",
        answer: "The Private Consulting session is a structured conversation with our design and technical team — approximately two hours — in which we review your site, your brief and your budget range and give you an honest assessment of what is possible. The session is a paid service. The fee is credited against the project offer if you proceed within six months.",
      },
    ],
  },

  /* ── 3. Process & Delivery ───────────────────────────────────────────────── */
  {
    id: "process-delivery",
    label: "Process & Delivery",
    heading: "Process and delivery",
    items: [
      {
        question: "How long does a Soleta project take from first conversation to handover?",
        answer: "The typical duration from initial contact to handover is 12 to 18 months for a standard collection model project. This includes the Dream stage (1–2 weeks), Design & Planning (4–8 weeks), Engineering (4–12 weeks), Build — factory and site combined (6–10 weeks), and Turnkey Delivery (2–6 weeks). Custom design projects take longer at the design and engineering stages. Timeline depends on project complexity, permit requirements, site readiness and scheduling.",
      },
      {
        question: "What is the Build stage and how long is the team on my site?",
        answer: "The Build stage covers factory manufacturing and on-site assembly. Manufacturing takes place in our Central European production facility — every element is cut, finished and labelled in assembly order before transport. On site, the structural frame is typically erected in 3 to 5 working days. The complete weatherproof envelope — structure, insulation, cladding, windows — is typically achieved within 2 to 4 weeks of assembly start. Internal works then begin. Total site duration depends on project scope.",
      },
      {
        question: "Do I need to be present during the build?",
        answer: "You do not need to be present on site during the build stage. Our project manager coordinates the assembly team and is your point of contact throughout. We send regular updates and can arrange site visits at agreed points. The handover walkthrough — typically 3 to 4 hours — is the one point where your presence is important, as we go through every system, every room and every detail together.",
      },
      {
        question: "What is the handover process?",
        answer: "Handover is a structured walkthrough — not a key exchange. Our project manager and the relevant technical lead walk you through every room, every system and every piece of documentation. Snagging items identified during the walkthrough are recorded, prioritised and resolved before or shortly after the handover date. You receive the full documentation pack — as-built drawings, system certificates, maintenance schedule and warranties — once the walkthrough is complete.",
      },
    ],
  },

  /* ── 4. Land, Country & Permits ─────────────────────────────────────────── */
  {
    id: "land-permits",
    label: "Land, Country & Permits",
    heading: "Land, country and permits",
    items: [
      {
        question: "Do you deliver to my country?",
        answer: "We have delivered homes to Romania, France, Germany, Austria, Switzerland, Poland and other European countries. We can deliver to most European markets, though the complexity and cost of delivery, permits and site coordination vary significantly by location. We confirm delivery availability and the relevant logistics approach during the Private Consulting stage.",
      },
      {
        question: "Can you help with building permits?",
        answer: "Yes. We offer a Permits & Legal Coordination service that covers technical documentation preparation and coordination with local planning professionals. In Romania, we handle permit submissions directly. For other European markets, we prepare the technical package and coordinate with a locally registered professional who handles the submission and planning liaison — a legal requirement in most jurisdictions. We do not guarantee permit outcomes. Permit decisions rest with the local authority.",
      },
      {
        question: "What do I need to know before buying land for a Soleta home?",
        answer: "Before purchasing a plot, it is worth understanding the zoning classification, any height or setback restrictions, the planning history, site access for a crane and heavy goods vehicle, and any ground condition issues that would affect foundation choice. We can review a plot as part of the Private Consulting session before you commit to a purchase. We cannot advise on property law or tell you what a planning authority will decide — but we can identify the questions you should be asking.",
      },
      {
        question: "What if my plot has unusual constraints?",
        answer: "Unusual site constraints — steep topography, restricted access, proximity to protected areas, unusual ground conditions — affect design, engineering, foundation approach and logistics. They do not necessarily make a project impossible, but they affect scope, complexity and cost. We review site constraints at the earliest possible stage so that the project brief and budget reflect reality from the beginning.",
      },
    ],
  },

  /* ── 5. Materials & Performance ─────────────────────────────────────────── */
  {
    id: "materials-performance",
    label: "Materials & Performance",
    heading: "Materials and performance",
    items: [
      {
        question: "What structural system do Soleta homes use?",
        answer: "All Soleta homes use a post-and-beam structural system — glulam (GL24h structural grade) columns and beams, factory-fabricated by CNC to precise tolerances. The structural frame is erected on site in 3 to 5 days. The system allows for large, column-free interior spans and significant glazed areas without structural compromise. It also allows the home to be extended, reconfigured or adapted over its lifetime without demolishing the structure.",
      },
      {
        question: "What insulation is used and why?",
        answer: "We use wood fibre insulation — either rigid boards or blown-in fill depending on the element. Wood fibre is a natural, hygroscopic insulation material: it manages moisture vapour within the wall construction rather than blocking it, which is appropriate for a timber frame system. We do not use mineral wool, EPS or polyurethane foam. The thermal performance of the wall build-up is calculated during the energy modelling stage for each project.",
      },
      {
        question: "What energy performance can I expect?",
        answer: "Energy performance depends on the home model, the specification selected, the site location and orientation, and the installed systems. Our standard collection models achieve high levels of thermal performance through envelope quality rather than added technology. ZeroEnergy specification — which includes renewable energy generation and a managed energy system — is designed to produce at least as much energy as the home consumes over a full year. Actual performance is site-specific and is modelled during the engineering stage.",
      },
      {
        question: "How long will a Soleta home last?",
        answer: "Soleta homes are engineered for a minimum 80-year lifespan. The glulam structural frame, if maintained and protected from moisture, will exceed this. Timber cladding requires periodic re-treatment — the schedule depends on the species, exposure and orientation. The maintenance schedule provided at handover sets out what to check and when. Our aftercare programme is available to manage this on your behalf.",
      },
    ],
  },

  /* ── 6. Aftercare ────────────────────────────────────────────────────────── */
  {
    id: "aftercare",
    label: "Aftercare",
    heading: "Aftercare and warranty",
    items: [
      {
        question: "What aftercare does Soleta offer?",
        answer: "We offer a structured aftercare programme that covers annual inspection visits, maintenance guidance, warranty management and technical support. The programme is separately booked — it is not automatically included in the build contract. It is available from the point of handover and can be arranged at any time after that, including for older Soleta homes.",
      },
      {
        question: "What does the annual inspection cover?",
        answer: "Each annual inspection follows a structured protocol: exterior cladding condition and re-treatment requirements; roof and drainage; foundation drainage; window and door seals and hardware; ZeroEnergy systems output and component condition where applicable; ventilation system condition and filter state. The inspection produces a written report with a prioritised maintenance list and recommended schedule for the year ahead.",
      },
      {
        question: "What warranty is provided?",
        answer: "Warranty terms are set out in the project contract and vary by component — structural elements, systems, finishes and appliances each carry different terms. We manage warranty claims directly: if something goes wrong within warranty scope, you contact us, not the individual component supplier. Warranty does not cover damage caused by misuse, modifications made without our involvement, or events outside normal use conditions.",
      },
      {
        question: "Can I join the aftercare programme if I bought my Soleta home years ago?",
        answer: "Yes. The aftercare programme is available for all Soleta homes, including those built before the programme existed in its current form. Homes that have not been inspected for a period may require an initial assessment visit before the standard annual programme begins. Contact us with details of your home and we will advise on the appropriate starting point.",
      },
    ],
  },
];
