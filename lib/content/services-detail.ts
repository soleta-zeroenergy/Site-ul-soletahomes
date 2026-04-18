/* ─────────────────────────────────────────────────────────────────────────────
   Services — detail page content
   Powers the 5 service detail pages under /services/*.
   The services hub (app/services/page.tsx) draws from lib/content/services.ts
   and is not affected by this file.
   ───────────────────────────────────────────────────────────────────────────── */

export type ServiceSection = {
  heading: string;
  body: string;
};

export type ServiceFaqItem = {
  question: string;
  answer: string;
};

export type ServiceDetailContent = {
  slug: string;
  eyebrow: string;
  label: string;
  heading: string;
  intro: string;
  framing: {
    left: string;
    right: string;
  };
  sections: ServiceSection[];
  deliverables: string[];
  caveat: {
    heading: string;
    body: string;
  };
  supportBlock: {
    eyebrow: string;
    body: string;
  };
  faq?: ServiceFaqItem[];
  cta: {
    eyebrow: string;
    heading: string;
    body: string;
  };
};

export const servicesDetail: ServiceDetailContent[] = [
  /* ── 1. Private Consulting ─────────────────────────────────────────────── */
  {
    slug: "private-consulting",
    eyebrow: "Services",
    label: "Private Consulting",
    heading: "Clarity before commitment",
    intro:
      "A structured session with our design and technical team. We review your site, your brief and your budget range — and give you an honest picture of what is feasible before any obligation is created.",
    framing: {
      left:
        "Most building projects go wrong because the early decisions were made with incomplete information. The Private Consulting service exists to correct that. Before a design brief is signed, before a model is selected, before an offer is requested — this is the conversation that establishes what is actually possible on your specific site, within your realistic budget, in the time you have.",
      right:
        "This is not a sales session. Our interest is in giving you an honest assessment — including when the answer is that now is not the right time, or that your expectations need adjusting.",
    },
    sections: [
      {
        heading: "What the session covers",
        body: "We work through four areas in sequence: your site — its location, orientation, access, topography and any known planning constraints; your brief — who the home is for, how you live, what matters most; your budget range — what is realistic for the model type or custom scope you have in mind; and your next step — which path we recommend and why. The session runs to approximately two hours. We do not rush it.",
      },
      {
        heading: "How it is structured",
        body: "Send us your site information in advance — a cadastral plan, photographs, any planning documents, and a rough sense of your budget range. We review these before the session so we arrive prepared, not starting from zero. The session itself is a working conversation, not a presentation. You ask questions; we give direct answers.",
      },
      {
        heading: "What you take away",
        body: "After the session, we send a written summary: our read of the site, our model or service recommendation, the indicative budget range for that path, and the questions you should answer before proceeding. The summary is yours to keep regardless of whether you go further with us.",
      },
    ],
    deliverables: [
      "Structured session with our design and technical team",
      "Site analysis — orientation, access, planning constraints, opportunities",
      "Model or service recommendation aligned to your brief and budget",
      "Indicative budget range for the recommended path",
      "Written session summary with our recommendations",
      "No obligation to proceed",
    ],
    caveat: {
      heading: "What this session does and does not include",
      body: "The Private Consulting session is a strategic assessment, not a design stage. No drawings, plans or specifications are produced. The budget range we give you is indicative — a proper project offer comes after design work is complete. If your site is outside Romania, we can conduct the session remotely; site analysis is based on the information you provide rather than a physical visit. The session fee is credited against the project offer if you proceed within six months.",
    },
    supportBlock: {
      eyebrow: "The right starting point",
      body: "The clients who get the most from this session are those who come prepared. A rough cadastral plan, a few site photographs, a sense of the budget range and a short description of how they live — that is enough for us to give genuinely useful guidance. Clients who arrive with detailed plans or material references also find the session useful as a technical and feasibility check.",
    },
    cta: {
      eyebrow: "Book a session",
      heading: "Request a Private Consulting session",
      body: "Tell us about your site and project. We will arrange a session with the relevant members of our team.",
    },
  },

  /* ── 2. Custom Design ──────────────────────────────────────────────────── */
  {
    slug: "custom-design",
    eyebrow: "Services",
    label: "Custom Design",
    heading: "Architecture from the site up",
    intro:
      "Full architectural design from first principles — for clients whose brief, site or vision cannot be resolved by adapting a standard model. The structural system and fabrication logic still apply. The design does not.",
    framing: {
      left:
        "A Soleta collection model is a resolved, engineered and tested architectural system. For many projects, adapting one of those models is the right answer — faster, better-tested and more cost-certain than starting from scratch. Custom Design is for the projects where it is not. A site with difficult topography. A brief with spatial requirements no standard model satisfies. A client who needs a home that is entirely theirs.",
      right:
        "Custom does not mean unconstrained. The post-and-beam structural system, the factory fabrication method and the material logic all still apply. What changes is everything the system leaves open: spatial arrangement, massing, orientation, glazing strategy, material expression.",
    },
    sections: [
      {
        heading: "How the design process works",
        body: "We begin with an extended site and brief analysis — typically two to three weeks. We study the land, the light, the views, the local planning context and your brief in detail before we draw anything. We then produce two or three distinct concept directions, presented together so you can see the range of what is possible before committing to a path. Once a direction is chosen, we develop it into a complete architectural package.",
      },
      {
        heading: "What a complete package contains",
        body: "The design output is an engineering-ready set of drawings: floor plans at 1:100 and 1:50, elevations, section drawings through the key spaces, detail drawings at the critical junctions, 3D visualisations of the exterior and main interior volumes, and a complete material specification schedule. This package goes directly to our engineering team and then to the factory — there is no translation between design intent and production.",
      },
      {
        heading: "How custom design connects to the build process",
        body: "Custom Design is integrated into the same five-stage process as standard model projects. After design sign-off, the project moves to Engineering — structural calculations, energy model, manufacturing drawings — and then to Build and Turnkey Delivery. The custom design stage replaces the model selection and brief-to-drawing step; everything after it follows the same disciplined process.",
      },
    ],
    deliverables: [
      "Extended site and brief analysis",
      "Concept options — two to three distinct design directions",
      "Developed design — floor plans, elevations, sections at 1:100 and 1:50",
      "Detail drawings at critical junctions",
      "3D visualisations — exterior and main interior volumes",
      "Material and finish specification schedule",
      "Engineering-ready drawing package",
    ],
    caveat: {
      heading: "What custom design requires from you",
      body: "Custom Design projects take longer and cost more than standard model adaptations — that is the nature of working from first principles. Design duration is typically 8 to 16 weeks depending on complexity and revision rounds. The number of revision rounds is agreed in scope before work begins — not open-ended. Changes requested after engineering has begun are significantly more costly than changes made at the design stage. We are direct about this from the start.",
    },
    supportBlock: {
      eyebrow: "System-led, not system-limited",
      body: "The post-and-beam structural approach gives custom projects a rigour and a material honesty that fully bespoke timber construction often lacks. The system is the constraint that makes the architecture good — it demands that every spatial decision is also a structural and fabrication decision. Clients who understand this tend to produce better outcomes than those who treat the system as an obstacle.",
    },
    cta: {
      eyebrow: "Begin your custom project",
      heading: "Tell us about your site and vision",
      body: "Custom projects begin with a Private Consulting session. We review your site and brief before any design work is scoped or priced.",
    },
  },

  /* ── 3. Permits & Legal ────────────────────────────────────────────────── */
  {
    slug: "permits-legal",
    eyebrow: "Services",
    label: "Permits & Legal Coordination",
    heading: "Permit preparation and coordination",
    intro:
      "We prepare the technical documentation for building permit submissions and coordinate with the relevant local professionals. Permit requirements differ by country, municipality and plot. We navigate this — we do not guarantee outcomes.",
    framing: {
      left:
        "Building permit requirements across Europe vary more than most clients expect. The same structural system, the same energy specification and the same architectural approach can be straightforward to permit in one municipality and complex in another. What we bring is experience across multiple jurisdictions, a technical documentation standard that planners recognise, and a clear understanding of where the work is ours and where it requires a licensed local professional.",
      right:
        "We prepare. We coordinate. We support. The permit decision rests with the authority, not with us — and we are honest about that from the first conversation.",
    },
    sections: [
      {
        heading: "What we prepare",
        body: "Our technical team produces the documentation that permit authorities typically require for a timber-frame residential building: architectural drawings to planning authority standards, structural calculation summaries, energy performance documentation, fire safety and access statements, and site plans. For projects in Romania, we have direct experience across a wide range of municipalities and can handle submission and follow-up directly. The documentation quality is consistent regardless of market.",
      },
      {
        heading: "How we work with local professionals",
        body: "For projects outside Romania, building permit submission and planning liaison must be handled by a locally registered professional — this is a legal requirement in most European jurisdictions, not a preference. We work alongside those professionals: we provide the technical package, they handle the submission, the correspondence with the authority and any planning hearings. We select or work with local professionals whose experience with timber-frame construction reduces the risk of technical misunderstandings.",
      },
      {
        heading: "Pre-purchase site advice",
        body: "If you are considering a plot and have not yet committed to a purchase, we can review the zoning classification, the planning history and any known restrictions before you buy. We cannot tell you what a planning authority will decide — but we can help you understand what questions to ask and what conditions are typical for that site type. This review is available as part of the Private Consulting service.",
      },
    ],
    deliverables: [
      "Architectural drawings prepared to planning authority standards",
      "Structural calculation summary for planning submission",
      "Energy performance documentation",
      "Fire safety and access statement",
      "Site and location plans",
      "Submission coordination and follow-up (Romania — direct)",
      "Technical package handover to local professional (other markets)",
      "Response to technical queries from planning authorities",
    ],
    caveat: {
      heading: "Important: what this service does not include",
      body: "We are not a law firm. We do not provide legal advice, represent you in legal proceedings or guarantee planning approval. Permit outcomes depend on local authority policy, site-specific conditions and factors outside our control. In markets other than Romania, permit submission and planning liaison is handled by a locally licensed professional — our role is technical preparation and coordination. Timelines for permit decisions vary by municipality and cannot be guaranteed. We will give you our honest assessment of likely timelines based on comparable projects, but we will not make promises that planning authorities have not authorised us to make.",
    },
    supportBlock: {
      eyebrow: "Technical documentation that planners recognise",
      body: "The most common cause of permit delays is documentation that does not meet the technical standard the authority expects. Our permit documentation is prepared by the same team that produces the manufacturing drawings — the level of technical precision is the same. Planners rarely need to ask twice for information we have already provided.",
    },
    faq: [
      {
        question: "Do you handle permits in all European countries?",
        answer: "We handle permits directly in Romania. For other European markets — including France, Germany, Austria, Switzerland and Italy — we prepare the technical documentation and coordinate with a locally licensed professional who handles the submission. The availability of suitable local professionals and the complexity of the permit process varies by market. We confirm the coordination approach for your specific country during the engineering stage.",
      },
      {
        question: "What happens if my permit application is refused?",
        answer: "Permit refusal does not happen often when the documentation is well-prepared and the site is appropriate for the proposed development — but it does happen. If your application is refused, we review the refusal reasons with you and advise on whether an amended submission or an appeal is the right response. Preparation and submission of an amended application is treated as a separate scope of work from the original application.",
      },
      {
        question: "How long does a building permit typically take?",
        answer: "In Romania, the statutory period for most residential building permits is 30 days from submission of a complete application, though practical timelines vary by municipality and case complexity. In other European markets, timelines range from 6 weeks to several months. We will give you a realistic estimate based on comparable projects in your specific location — not a best-case figure.",
      },
    ],
    cta: {
      eyebrow: "Permit coordination",
      heading: "Discuss your permit requirements",
      body: "Tell us about your site and country. We will explain what the permit process typically involves and what we can prepare.",
    },
  },

  /* ── 4. Interior Design ────────────────────────────────────────────────── */
  {
    slug: "interior-design",
    eyebrow: "Services",
    label: "Interior Design",
    heading: "The architecture carried inside",
    intro:
      "Material continuity, built-in design, lighting as spatial structure. The interior design service extends the logic of the architecture to every surface and fitting — not as decoration added after, but as part of the same considered whole.",
    framing: {
      left:
        "A Soleta home has a natural material language before the interior design work begins: exposed glulam structure, wood fibre surfaces, carefully proportioned openings. The interior design service works within and extends that language — selecting the finishes, fittings and built-ins that maintain its coherence rather than contradicting it. The result is a home that reads as one thing, from the structural frame to the kitchen worktop.",
      right:
        "We do not source furniture from catalogues or assemble interiors from trend boards. We design surfaces, specify materials, detail built-ins and resolve lighting — working directly with craftspeople and manufacturers whose output we know.",
    },
    sections: [
      {
        heading: "Material and finish continuity",
        body: "Floor, wall and ceiling finishes are selected to continue the material register of the architecture. Timber species are matched or complemented, not contrasted for effect. Stone and ceramic selections are made for authenticity of material — not for visual impact divorced from the spatial context. Every finish is presented as a physical sample before it is ordered. You see and handle the actual material, not a screen approximation.",
      },
      {
        heading: "Built-in design and spatial logic",
        body: "Kitchens, bathrooms, storage and built-in joinery are designed as part of the architecture, not sourced as standard units. A kitchen in a Soleta home is dimensioned and detailed to fit the specific space, to relate to the structural grid and to express the same material honesty as the rest of the house. Built-ins are designed by our team and made by the craftspeople we work with — not selected from a manufacturer's range.",
      },
      {
        heading: "Lighting as architecture",
        body: "Lighting design starts with the natural light — how it enters, how it moves through the day, where it gathers at dusk. Artificial lighting is designed to support that logic rather than to replace it. We specify fixed lighting as an architectural decision: where recessed, where surface-mounted, where wall-washed, where absent. Decorative lighting is selected last, for warmth and character, within the framework the architectural lighting establishes.",
      },
    ],
    deliverables: [
      "Floor, wall and ceiling finish selections — all rooms",
      "Physical sample board for client approval before ordering",
      "Kitchen design and specification",
      "Bathroom design and specification",
      "Built-in joinery design and specification",
      "Lighting design — fixed and architectural",
      "Furniture specification (full service option)",
      "Coordination with construction team during build",
    ],
    caveat: {
      heading: "Scope and what is confirmed separately",
      body: "The Interior Design service is available as a full package — from finish selections through to furniture specification and procurement coordination — or as a finishes-only service covering floors, walls and ceilings. Furniture procurement, where included, is coordinated by our team but priced separately from the interior design fee. The scope of the service for your project is confirmed in writing before work begins. Interior design is most effective when it begins at the design stage, not after the build is complete — late-stage changes to built-ins or finish substrates carry significant cost implications.",
    },
    supportBlock: {
      eyebrow: "Materials that age well",
      body: "The materials we specify are chosen partly for how they look on the day the home is completed, and partly for how they will look in ten or twenty years. Natural timber darkens and mellows. Stone develops a patina. Linen softens. We consider this trajectory when making selections — a home should improve with habitation, not look its best in the first photographs.",
    },
    cta: {
      eyebrow: "Interior design",
      heading: "Extend the architecture inside",
      body: "Tell us about your project. We will explain which interior design scope suits your stage and brief.",
    },
  },

  /* ── 5. Aftercare ──────────────────────────────────────────────────────── */
  {
    slug: "aftercare",
    eyebrow: "Services",
    label: "Aftercare",
    heading: "Continuity after handover",
    intro:
      "Annual inspections, maintenance guidance, warranty coordination and technical support. A Soleta home is designed to last 80 years or more — the aftercare programme exists to make sure it does.",
    framing: {
      left:
        "Most building companies consider their responsibility complete at handover. We do not. A home built to Soleta standards will perform reliably for decades — but only if it is maintained correctly. Natural materials are durable, but they require periodic attention. Systems need servicing. Timber cladding needs re-treatment on a schedule. The aftercare programme puts that attention on a structure, so nothing is left to chance or memory.",
      right:
        "Our aftercare team is the same team that designed and built your home. When something needs attention, we understand the context immediately — we do not investigate from scratch.",
    },
    sections: [
      {
        heading: "What the annual inspection covers",
        body: "Each annual inspection follows a structured protocol: exterior cladding condition and re-treatment requirements; roof and drainage; foundation drainage and ground-level detailing; window and door seals and hardware; ZeroEnergy systems output and component condition where applicable; ventilation system condition and filter state. The inspection produces a written report with a prioritised list of any items requiring attention and a recommended maintenance schedule for the year ahead.",
      },
      {
        heading: "Maintenance guidance and documentation",
        body: "At handover, you receive a maintenance schedule tailored to your specific home — what to check, when and how. The aftercare programme extends this: we maintain a record of your home's condition over time, track when re-treatment or servicing is due and remind you before the window passes. We also hold copies of all your technical documentation — as-built drawings, system certificates, material specifications — so you are never searching for information in an emergency.",
      },
      {
        heading: "Technical support and warranty coordination",
        body: "If something goes wrong, the aftercare programme gives you a direct line to the technical team who built the home. We diagnose the issue, determine whether it falls within warranty scope, and coordinate any repair or replacement work. Warranty claims are managed by us, not left to you to navigate with individual component suppliers. Where work is required outside warranty scope, we advise honestly on options and costs before any work begins.",
      },
    ],
    deliverables: [
      "Annual structural inspection — cladding, roof, foundation, drainage",
      "ZeroEnergy systems check — output, efficiency, component condition",
      "Ventilation system service — filter condition and flow rate",
      "Written inspection report with prioritised maintenance items",
      "Maintenance schedule and advance reminders",
      "Warranty claim management and coordination",
      "Access to technical documentation archive",
      "Direct technical support line",
    ],
    caveat: {
      heading: "Programme scope and geography",
      body: "Aftercare is a separately booked programme, not an automatic extension of the build contract. It is available from the year of handover and can be arranged at any point after that — including for Soleta homes built before the programme existed. Response times and visit scheduling depend on your location: for homes in Romania, inspections are conducted directly by our team. For homes in other European countries, we arrange inspections through trusted local partners who are briefed on Soleta construction standards. Emergency response times vary by geography and are confirmed in the programme agreement. The programme does not cover damage caused by misuse, modifications made without our involvement or events outside normal use conditions.",
    },
    supportBlock: {
      eyebrow: "The same team, long after handover",
      body: "The value of aftercare is not just in the inspections — it is in the continuity of knowledge. The people who inspect your home each year are the same people who made the decisions that shaped it. That institutional memory means small issues are understood in context, not treated as isolated problems. It also means that when you want to extend, modify or sell, you have a complete and reliable record of the home's condition and history.",
    },
    faq: [
      {
        question: "When can I join the aftercare programme?",
        answer: "The aftercare programme is available from the point of handover and can be arranged at any time after that — including for homes that have been in use for several years. There is no penalty for joining late, though homes that have not been inspected for a period may require an initial assessment visit before the standard annual programme begins.",
      },
      {
        question: "Is aftercare included in the build contract?",
        answer: "Aftercare is a separate programme, not part of the standard build contract. It is priced and agreed independently from the build offer. We discuss aftercare availability during the Turnkey Delivery stage and provide programme details at handover, but enrolment is always your choice.",
      },
      {
        question: "What if my home is not in Romania?",
        answer: "For homes outside Romania, inspections are conducted by local partners selected and briefed by our team. We remain the point of contact and the technical authority — the local partner carries out the physical inspection and reports back to us. Emergency response times and visit scheduling for non-Romanian homes are confirmed in your programme agreement and reflect the practical constraints of geography.",
      },
    ],
    cta: {
      eyebrow: "Aftercare programme",
      heading: "Keep the home performing as designed",
      body: "Tell us about your Soleta home and when it was completed. We will explain the programme options and what is relevant for your situation.",
    },
  },
];
