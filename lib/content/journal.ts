/* ─────────────────────────────────────────────────────────────────────────────
   Journal content
   Practical editorial articles for prospective Soleta clients.
   ───────────────────────────────────────────────────────────────────────────── */

export type JournalCategory =
  | "Planning & Land"
  | "Design & Living"
  | "Process, Budget & Build";

export type JournalArticle = {
  slug:        string;
  title:       string;
  excerpt:     string;
  category:    JournalCategory;
  image:       string;
  imageAlt:    string;
  publishedAt: string;   /* ISO date string — YYYY-MM-DD */
  featured?:   boolean;
  body?:       JournalSection[];
  intro?:      string;   /* short intro for stub pages */
};

export type JournalSection = {
  heading: string;
  content: string;        /* plain prose — paragraphs separated by \n\n */
};

/* ── Article data ────────────────────────────────────────────────────────── */

export const journalArticles: JournalArticle[] = [

  /* ── 1 — FULL ARTICLE ─────────────────────────────────────────────────── */
  {
    slug:        "evaluate-land-before-planning-a-timber-home",
    title:       "How to evaluate land before planning a timber home",
    excerpt:
      "Land decisions made before a project begins have more influence on the outcome than almost any design choice made afterward. Here is how to think about them.",
    category:    "Planning & Land",
    image:       "/images/hero.webp",
    imageAlt:    "Soleta — evaluating land for a timber home",
    publishedAt: "2025-10-15",
    featured:    true,
    intro:
      "Land decisions made before a project begins have more influence on the outcome than almost any design choice made afterward.",
    body: [
      {
        heading: "Why land comes before design",
        content:
          `Most clients approach a new home project by thinking about the house first — the number of rooms, the style, the square metres. Land is treated as a given, or as a formality to be sorted before the interesting work begins.\n\nThis is a mistake. The land shapes the house in ways that design cannot undo afterward. Orientation, topography, subsoil conditions, access, and planning status all directly determine what is buildable, what will perform well, and what a realistic budget looks like. Buying land without understanding these factors means committing to constraints you have not yet accounted for.\n\nFor timber construction specifically, the land question is even more consequential. Timber homes respond to their sites in ways that masonry construction does not. The way a site drains, the direction of prevailing weather, the quality of sunlight throughout the year — these translate directly into structural logic and long-term performance. A good site makes this work easy. A problematic site makes it expensive and sometimes irresolvable.`,
      },
      {
        heading: "Orientation and solar access",
        content:
          `The single most important factor for a passive or low-energy timber home is solar orientation. A south-facing site in the northern hemisphere gives you the opportunity to design for natural light, passive solar gain in winter, and natural shading in summer. It is not a luxury — it is the difference between a home that works thermally by design and one that requires mechanical systems to compensate for a fundamental shortcoming.\n\nBefore visiting a site, check its orientation on a map. When you visit, go at different times of day if possible. Note where the sun rises and sets relative to the plot, which areas are in shadow from trees or neighbouring buildings, and how long usable outdoor space receives direct light. These observations are difficult to undo at the design stage.\n\nNorth-facing or heavily shaded sites are not impossible to build on, but they require a different design response and typically result in higher energy demand. The cost of that compromise compounds over the lifetime of the home.`,
      },
      {
        heading: "Topography and structural implications",
        content:
          `Flat land is rarely as simple as it appears, and sloped land is rarely as complicated as it seems. Both deserve careful attention, but for different reasons.\n\nOn flat land, the critical question is drainage. If the site does not shed water effectively — whether from rain, snowmelt, or a high water table — you have a foundation problem. Timber structures are sensitive to sustained moisture at their base. Good drainage is not a detail. It is a precondition for the building system to function as intended over decades.\n\nOn sloped land, the question is how the slope will be managed structurally. A modest slope can be absorbed into the foundation design without significant cost. A steep slope introduces the need for retaining walls, adjusted foundation systems, or split-level structural responses — all of which affect budget and complexity. What looks like a dramatic and desirable site in photographs may involve engineering costs that are not immediately visible until the ground is assessed by a structural engineer.\n\nThe key is to not make assumptions in either direction. Have the topography properly surveyed. Know what is below the surface, not just what you can see.`,
      },
      {
        heading: "Access, utilities, and infrastructure",
        content:
          `A site without road access is a different proposition from a serviced plot. The difference is not just cost — it is also planning risk and project duration.\n\nFor timber construction specifically, access matters early. Prefabricated structural elements often arrive as large components that require vehicle access and sometimes crane access. A site that is difficult to reach adds delivery complexity and cost that is worth understanding before purchase.\n\nUtilities are equally important. Connection to water, drainage, and electricity is the baseline. In rural or remote areas, each of these may require significant investment: borehole drilling for water, septic systems for drainage, grid extension or off-grid energy systems for power. None of these is prohibitive, but all of them need to be budgeted honestly. A plot price that seems favourable may become less so when infrastructure costs are included.\n\nDo not assume utilities are available. Confirm their presence and the cost of connection before proceeding.`,
      },
      {
        heading: "Planning status and permitted use",
        content:
          `A site's planning status determines whether a residential dwelling can be built on it, and under what conditions. This is one of the most consequential checks to perform, and one that is sometimes ignored by buyers focused on the aesthetic or location qualities of a plot.\n\nPlanning categories, zoning, and building regulations differ significantly by country, region, and sometimes municipality. Agricultural land, forest land, and protected zones often carry restrictions that cannot be resolved by an architect, regardless of the design quality. Building permit conditions may restrict height, footprint, materials, or appearance in ways that affect what is achievable.\n\nBefore committing to a site, understand its current planning classification and what you would need to obtain to build on it. This may require a planning consultant or local architect in addition to your project architect. The cost of that advice is trivial compared to the cost of buying land on which permission cannot be obtained.`,
      },
      {
        heading: "What to observe on a site visit",
        content:
          `A site visit is not just about seeing the view. It is an opportunity to gather information that does not appear on a map or in a land registry.\n\nPay attention to the following: the quality of the soil surface and whether it feels stable underfoot; the presence of water — streams, drainage channels, wet patches — which indicate how the land manages rainfall; the condition of any existing trees, especially large ones close to the proposed building area, as roots and proximity to structures are a structural and legal consideration; the character of neighbouring land use, which may affect what is practical or desirable to build; and the ambient noise environment, which matters significantly for a retreat or primary residence.\n\nSpend time on the site rather than walking through it quickly. Sit where the main living spaces might be. Understand where the light comes from and where the views are oriented. A site that is correct on paper but wrong in experience is rarely salvageable at the design stage.`,
      },
      {
        heading: "The land question and the project conversation",
        content:
          `The most useful moment to involve an architect or project team in a land question is before purchase, not after. An early review of a site's suitability, its planning status, and its structural implications can prevent a significant mistake — and can also confirm that a site that seemed complicated is, in fact, workable.\n\nAt Soleta, land evaluation is part of how early project conversations are structured. If you are assessing a site, or weighing two or three options, that is a useful basis for a first discussion. The goal of that conversation is not to push you toward a purchase — it is to help you understand what a given site makes possible, and what it makes difficult.`,
      },
    ],
  },

  /* ── 2 — FULL ARTICLE ─────────────────────────────────────────────────── */
  {
    slug:        "what-shapes-the-budget-of-a-premium-timber-house",
    title:       "What shapes the budget of a premium timber house",
    excerpt:
      "Budget questions are rarely answered honestly in the early stages of a project. This article explains what actually drives cost — and why the honest answer depends on a series of prior decisions.",
    category:    "Process, Budget & Build",
    image:       "/images/Signature800x533.webp",
    imageAlt:    "Soleta Signature — premium timber construction",
    publishedAt: "2025-10-08",
    intro:
      "Budget questions are rarely answered honestly in the early stages of a project. This article explains what actually drives cost — and why the honest answer depends on a series of prior decisions.",
    body: [
      {
        heading: "Why a single number is not a useful starting point",
        content:
          `The first budget question prospective clients usually ask is: "How much does it cost per square metre?" It is an understandable question. It offers the reassurance of a number.\n\nThe honest answer is that a cost-per-square-metre figure, given early and without context, is not useful. It is often misleading. The factors that determine the budget of a premium timber home are not primarily related to floor area. They are related to decisions about structural scope, design complexity, site conditions, specification level, and execution strategy — decisions that are interdependent and that cannot be sensibly separated from each other.\n\nA more productive early question is: what determines the budget? Understanding the real cost drivers allows you to make informed decisions about where to invest, where to adjust, and what a realistic number for your specific project is likely to be.`,
      },
      {
        heading: "Size and structural scope",
        content:
          `Floor area matters, but it is not a simple multiplier. A 150 m² home with complex geometry, split levels, a large structural span, or a significant number of custom junctions will cost more per square metre than a 180 m² home with a clear, efficient structural system.\n\nTimber construction rewards simplicity of structure. The post and beam system used in Soleta homes is efficient and precise when the structural logic is clean. When the brief asks for structural elements that work against that logic — cantilevers, irregular geometries, roof forms that require complex engineering — the cost per element rises accordingly.\n\nThis is not an argument against complexity. A complex form may be exactly right for a particular site or brief. But it is an argument for understanding that structural decisions have cost consequences, and that the structure and the budget need to be in dialogue from early in the design process.`,
      },
      {
        heading: "Site conditions and foundation",
        content:
          `Foundation cost is one of the most frequently underestimated line items in a timber home budget. A typical estimate assumes straightforward ground conditions — stable, well-drained, accessible. Many sites do not meet this description.\n\nSloped sites require more complex foundation engineering. Weak or variable subsoil may require deeper or wider foundations, piled systems, or ground reinforcement. High water tables require drainage and waterproofing measures. Remote sites require access logistics that affect both delivery and foundation work.\n\nThe foundation is invisible in the finished home, which means it tends to receive less attention than it deserves in early budget conversations. In practice, it is one of the cost variables most likely to cause a budget to diverge from expectation if it has not been properly investigated.\n\nA ground investigation — a soil survey, at minimum — is one of the most cost-effective pieces of information you can obtain before making budget commitments.`,
      },
      {
        heading: "Specification and material level",
        content:
          `Timber construction can be specified at very different levels of quality and finish. The structural system itself is one consideration. The facade treatment is another. The interior fit-out — floors, walls, ceilings, joinery, fixtures, and mechanical systems — is where the specification range is widest and where client choices have the most direct effect on cost.\n\nA home with simple interior finishes, standard windows, and a conventional heating system is a different financial proposition from a home with custom joinery, triple-glazed high-performance windows, exposed structural timber throughout, and an integrated MVHR and heat pump system. Both can be excellent. They are not equivalent in cost.\n\nThe specification question is also where the conversation about what a home is for becomes relevant. A primary family residence in a cold climate has different performance requirements from a seasonal retreat. Getting the specification right for the use case — rather than defaulting to either maximum or minimum — is part of the value of a proper design process.`,
      },
      {
        heading: "Degree of customisation",
        content:
          `Starting from an existing architectural direction — a model, a family of forms, an established structural system — is more cost-efficient than beginning from scratch. This is true for every major construction type and timber homes are no exception.\n\nAn adapted model, where the structure and spatial logic are established and the customisation involves configuration, orientation, facade, and specification, distributes the cost of engineering and design across a repeatable base. The result can be highly individual without requiring the full investment of a custom project.\n\nA fully custom project — where the brief, geometry, structure, and specification are all developed from first principles — requires more design development, more engineering coordination, and more decision-making time. The output is unique and fully responsive to the site and client. The investment is proportionally higher.\n\nNeither approach is inherently superior. The relevant question is which is appropriate for your site, your brief, and your budget.`,
      },
      {
        heading: "Location and logistics",
        content:
          `The country and region in which a project is delivered affects cost in several ways. Labour rates, material availability, planning requirements, VAT and tax structures, and contractor market conditions all vary by jurisdiction. A project in Switzerland is a different financial proposition from the same project in Romania, even if the architectural specification is identical.\n\nFor international projects, there is also the question of project management and coordination. Working across languages, regulatory systems, and supply chains adds logistical complexity that needs to be accounted for in both budget and timeline.\n\nThis does not mean international projects are not viable — they are, and Soleta has experience with clients across multiple countries. But the location question needs to be part of the budget conversation, not an afterthought.`,
      },
      {
        heading: "How to approach a realistic budget conversation",
        content:
          `The most useful early budget conversation is one that starts from direction rather than from a number. What kind of site? What kind of house? What level of specification? Primary or seasonal use? What is the project's relationship to the existing Soleta models — starting from an existing direction, adapting significantly, or building a custom response?\n\nFrom that context, a meaningful cost orientation becomes possible. Not a fixed price — projects at the design stage cannot have fixed prices — but a realistic sense of the range that a particular direction implies, and the decisions that would move the budget within or outside that range.\n\nAt Soleta, the Private Offer process is structured to gather exactly this kind of early context. It is not a commitment. It is the basis for a substantive first response — one that addresses your specific situation rather than offering a generic number that will have to be revised as soon as the real variables become visible.`,
      },
    ],
  },

  /* ── 3 — FULL ARTICLE ─────────────────────────────────────────────────── */
  {
    slug:        "starting-from-a-model-or-building-a-custom-direction",
    title:       "Starting from a model or building a custom direction",
    excerpt:
      "The choice between adapting an established model and pursuing a fully custom design involves real trade-offs in time, cost, certainty, and creative latitude. Here is how to think about it.",
    category:    "Design & Living",
    image:       "/images/Classic800x533.webp",
    imageAlt:    "Soleta Classic — model-based direction",
    publishedAt: "2025-09-25",
    intro:
      "The choice between adapting an established model and pursuing a fully custom design involves real trade-offs in time, cost, certainty, and creative latitude.",
    body: [
      {
        heading: "The question most clients face early",
        content:
          `Clients who arrive at a project having seen a specific Soleta model often ask whether the model can be adapted to their site and requirements. Clients who arrive with a strong site and a clear spatial vision often ask whether a fully individual response is possible. In practice, most projects begin somewhere between these two poles and move toward one or the other as the brief and site become clearer.\n\nThe underlying question — model or custom — is not primarily a question of preference or prestige. It is a practical question with real consequences for timeline, budget, decision-making complexity, and the ultimate character of the home. Understanding these consequences makes it easier to choose the right starting point.`,
      },
      {
        heading: "What a model-based direction actually means",
        content:
          `A model is not a catalogue item. It is an architectural direction — a structural system, a spatial logic, a characteristic approach to proportion, materials, and the relationship between interior and exterior — that has been developed, engineered, and refined through design and construction experience.\n\nStarting from a model means inheriting a proven structural base. The post and beam system is engineered. The wall build-ups are established. The dimensional logic — how the module relates to the plan, where structural elements sit, how the roof geometry works — is resolved. This has significant practical advantages.\n\nFirst, it reduces design risk. The solutions to the structural problems have already been worked out. The engineering does not start from scratch. Second, it reduces timeline. The path from first conversation to construction-ready documentation is more direct when the structural logic is already established. Third, it creates cost predictability. When the base system is known, the range of project cost is more confidently estimated early.\n\nAdaptation within this framework can be substantial. Configuration, orientation, facade treatment, interior specification, and the relationship of the building to its site are all open to design development. Two homes based on the same structural direction can read as entirely different in character. The model constrains the structural logic, not the spatial or experiential result.`,
      },
      {
        heading: "What a custom direction actually means",
        content:
          `A fully custom project begins from the brief and the site, not from an existing structural framework. It is developed architecturally from first principles — which means the geometry, structure, spatial organisation, and technical systems are all designed in response to the specific project.\n\nThe advantages of this approach are real. The result is unique. The design can respond to an unusual site condition, an unconventional brief, or a spatial aspiration that does not fit within the logic of an existing model family. The creative latitude is higher and the outcome is, by definition, not available in any other form.\n\nThe tradeoffs are equally real. Custom projects take longer to develop. More decisions need to be made, more options need to be explored, and more engineering work is required before construction-ready documentation exists. The uncertainty in early budget estimation is higher, because the structural and technical variables are not yet resolved. The timeline from first conversation to construction start is longer.\n\nThis is not an argument against custom work. For the right project — a genuinely unusual site, a specific brief that cannot be accommodated within an existing direction, a client who wants full creative engagement with the design process — a custom approach is the correct one. But it should be entered with an honest understanding of what it involves.`,
      },
      {
        heading: "The adapted model: the most common path",
        content:
          `In practice, most Soleta projects are neither a direct model build nor a fully custom project. They are adapted models — projects where the structural framework of an existing direction provides the base, and the design work focuses on configuring, adjusting, and specifying that framework for a specific site and client.\n\nThis is a genuinely productive middle ground. It retains the efficiency and cost predictability of a proven structural system while allowing the design to respond meaningfully to the site, the orientation, the programme, and the client's spatial preferences. The result feels individual because it is — the house has been designed for this site and this client — but it is not built from zero.\n\nThe adaptation range varies by project. Some adaptations are modest: the same spatial organisation with a different facade treatment, a different orientation, and adjusted room proportions. Others are more significant: the structural module is used but the plan is substantially reworked, the roof geometry is modified, or the programme is extended in ways that require additional structural development. Both are possible within the adapted model framework. What determines the boundary is when the adaptation begins to require engineering solutions that go beyond the established system — at that point, the project is moving toward custom territory.`,
      },
      {
        heading: "How to know which direction is right",
        content:
          `The clearest signal that a model-based direction makes sense is when you see an existing Soleta form and recognise it as fundamentally aligned with what you want to build — not identical to it, but close enough in scale, character, and structural approach that the adaptations you would need are within the natural range of the system.\n\nThe clearest signal that a custom direction may be necessary is when your site has conditions or your brief has requirements that no existing model handles naturally — a very steep slope, an unconventional programme, a specific spatial relationship between interior and landscape that existing structural systems would struggle to accommodate.\n\nIn most cases, the right direction becomes clear through early project conversation — looking at the site, understanding the brief, and examining what the existing models can and cannot accommodate. That conversation does not require a commitment. It is the step that allows a direction to be chosen from an informed position rather than from a guess.`,
      },
      {
        heading: "A practical note on timing",
        content:
          `The model-versus-custom question has a time dimension that is worth understanding early. If a project has a defined timeline — planning permission needs to be submitted by a certain date, construction needs to start in a particular season, a household move is scheduled — the model-based direction offers more certainty. The path to construction documentation is more predictable.\n\nA custom project should be given the time it requires. Rushing the design development of a custom project to meet an external deadline is one of the most reliable ways to compromise the result. If the timeline is fixed, a model-based or adapted-model direction is the more honest choice. If the timeline is flexible, the custom route becomes a genuine option.\n\nAt Soleta, this is part of the early project conversation. We do not try to fit clients into a direction that is not right for them. But we do try to give clients an accurate picture of what each path involves, so that the direction chosen is chosen honestly.`,
      },
    ],
  },

  /* ── 4 — STUB ─────────────────────────────────────────────────────────── */
  {
    slug:        "what-to-prepare-before-requesting-a-private-offer",
    title:       "What to prepare before requesting a private offer",
    excerpt:
      "A private offer request is most useful when it includes the right information. Here is what to prepare — and why each piece matters.",
    category:    "Process, Budget & Build",
    image:       "/images/Retreat800x533.webp",
    imageAlt:    "Soleta Retreat — preparing a project brief",
    publishedAt: "2025-09-10",
    intro:
      "A private offer request is most useful when it includes the right information. The more specific the brief, the more precise and useful the response. Here is what to prepare — and why each piece matters for the early project conversation.",
    body: [
      {
        heading: "Why the brief matters",
        content:
          `A private offer is not a sales interaction. It is a project review — an assessment of what a specific brief, on a specific site, at a specific stage, realistically involves. The quality of the response depends directly on the quality of the information provided.\n\nThis does not mean the brief needs to be complete or polished. Many clients submit a brief at an early and uncertain stage, and that is entirely appropriate. But the brief should be honest, specific, and grounded in what you actually know at this point — rather than idealized or vague in a way that prevents a meaningful response.`,
      },
      {
        heading: "Location and site",
        content:
          `Location is the first and most consequential piece of information. Country and region determine planning context, climate, and execution logistics. If you have a specific site, a description of its character — topography, orientation, existing access, utilities, planning status — is more useful than coordinates alone.\n\nIf you do not yet have land, say so. An early project conversation without a defined site is still possible and often useful. But the more specific you can be about what region or type of site you are looking for, the more relevant the response can be.`,
      },
      {
        heading: "Intended use and programme",
        content:
          `Is this a primary residence or a retreat? Will it be used year-round or seasonally? How many people will live in it, and what are the key spatial requirements? These questions shape everything from structural scope to mechanical system specification to budget.\n\nYou do not need to arrive with a detailed room list. But a clear sense of how the home will be used — and who will use it — allows the project review to be grounded in reality rather than generic assumptions.`,
      },
      {
        heading: "Budget range",
        content:
          `Budget is the part of the brief that clients most often omit or express reluctantly. It is also one of the most useful pieces of information for structuring a meaningful response.\n\nA budget range — even a wide one — allows the project direction to be assessed against what is feasible. Without it, any response about scope, specification, and approach is theoretical. With it, the conversation can focus on what is achievable within the actual parameters of the project.\n\nBudget honesty at this stage saves time for both parties. If the budget and the brief are misaligned, it is better to know early.`,
      },
      {
        heading: "Timeline",
        content:
          `When are you hoping to break ground? Is there a move-in date that is driving the timeline, or is the project more open-ended? Timeline affects which project direction is appropriate, what level of design development is realistic before construction, and how the project is sequenced.\n\nA firm timeline creates useful constraints. An open timeline allows more flexibility in the design process. Either is a valid starting point — but knowing which one you are dealing with shapes the early project conversation.`,
      },
    ],
  },

  /* ── 5 — STUB ─────────────────────────────────────────────────────────── */
  {
    slug:        "planning-a-retreat-home-versus-a-primary-residence",
    title:       "Planning a retreat home versus a primary residence",
    excerpt:
      "The differences between a retreat and a primary residence go deeper than programme. They affect structure, specification, mechanical systems, and the fundamental logic of the brief.",
    category:    "Design & Living",
    image:       "/images/Retreat800x533.webp",
    imageAlt:    "Soleta Retreat — seasonal home in landscape",
    publishedAt: "2025-09-02",
    intro:
      "The differences between a retreat and a primary residence go deeper than programme. They affect structure, specification, mechanical systems, and the fundamental logic of the brief. Understanding these differences early produces a more honest brief and a more useful design conversation.",
    body: [
      {
        heading: "Use and occupancy patterns",
        content:
          `A primary residence is occupied year-round by the same people, with established routines, storage requirements, and spatial needs that accumulate over time. A retreat is occupied intermittently — often intensively during certain seasons and barely at all during others.\n\nThese different occupancy patterns produce different spatial and technical requirements. A primary residence needs consistent thermal comfort throughout the year. A retreat needs the ability to reach comfortable temperatures quickly after a period of non-use, and to be maintained safely — including mechanical systems and water — during extended closure.`,
      },
      {
        heading: "Specification and performance logic",
        content:
          `High-performance thermal envelope design — thick insulation, airtightness, MVHR systems — is most cost-effective in a primary residence because the energy savings accumulate over continuous use. For a retreat used intensively for a few weeks per year, the return on that investment is lower.\n\nThis does not mean retreats should be specified poorly. It means the specification logic should match the use case. A well-considered retreat specification addresses quick heat-up time, ease of operation by non-specialists, robust systems that tolerate extended shutdown, and low-maintenance materials that age well in a building that is not continuously occupied.`,
      },
      {
        heading: "Programme and spatial priorities",
        content:
          `Primary residences accumulate storage, utility spaces, home office functions, and the infrastructure of daily life. Retreats are often more spatially focused — a strong main living space, a simpler sleeping arrangement, outdoor connection as a primary experience.\n\nThis spatial economy, done well, produces some of the most satisfying timber homes. The retreat brief, precisely because it asks for less, demands more precision from the design. Every space needs to earn its place. The discipline of a limited programme, applied to a responsive site, is where timber construction often shows its best qualities.`,
      },
    ],
  },

  /* ── 6 — STUB ─────────────────────────────────────────────────────────── */
  {
    slug:        "what-healthy-materials-mean-in-practice",
    title:       "What healthy materials mean in practice",
    excerpt:
      "The term is used freely in architecture. Here is what it actually means for a timber home — how material choices translate into durability, indoor quality, and long-term maintenance.",
    category:    "Design & Living",
    image:       "/images/WhySoleta900x1200.webp",
    imageAlt:    "Soleta — natural timber material quality",
    publishedAt: "2025-08-20",
    intro:
      "The term 'healthy materials' is used freely in premium architecture marketing. Its meaning is rarely spelled out. Here is what it actually means in the context of a timber home — how material choices affect durability, indoor air quality, and what you will be living with in twenty years.",
    body: [
      {
        heading: "What the term usually means, and what it should mean",
        content:
          `In most marketing contexts, 'healthy materials' means natural or organic materials — timber, stone, clay, natural fibre. This framing is not wrong, but it is incomplete. The relevant question is not just what a material is made of, but how it behaves over time, how it is detailed, and what it does in the conditions of real use.\n\nA natural material poorly specified or poorly detailed can perform worse than a synthetic material correctly used. Timber exposed to sustained moisture without adequate protection rots regardless of its origin. Natural insulation with inadequate moisture management can harbour mould. The material category is less important than the build logic within which it is used.`,
      },
      {
        heading: "Indoor air quality and off-gassing",
        content:
          `The most direct way material choices affect occupants is through indoor air quality. Adhesives, sealants, paints, floor finishes, composite boards, and foam-based insulation materials all have off-gassing profiles — they release compounds into the interior air, some of which have documented health effects at sustained exposure levels.\n\nMinimising the use of materials with high VOC (volatile organic compound) content, particularly in interior finishes and structural adhesives, reduces chronic indoor air exposure. This is a real consideration, especially in airtight buildings where the mechanical ventilation system is the primary air exchange mechanism.\n\nThe practical implication is that material selection should consider not just the structural and aesthetic function of a material, but its interior air profile — and that specification decisions about paints, adhesives, and floor finishes have consequences that are not visible in the immediate appearance of the finished space.`,
      },
      {
        heading: "Durability and ageing",
        content:
          `A material that ages visibly and well — that develops character over time rather than degrading — is not just an aesthetic preference. It is a durability strategy. Materials that patina, weather, and settle with use do not need to be replaced or refinished as frequently as materials that deteriorate.\n\nMassive timber, correctly detailed, improves structurally over time. Natural stone floors wear but do not fail. Larch cladding, left to silver, maintains its structural integrity for decades without treatment. These materials make maintenance simpler — not because they require nothing, but because what they require is straightforward and the result of that maintenance is predictable.`,
      },
    ],
  },

  /* ── 7 — STUB ─────────────────────────────────────────────────────────── */
  {
    slug:        "what-clients-usually-underestimate-before-starting",
    title:       "What clients usually underestimate before starting",
    excerpt:
      "Budget overruns and timeline slippage rarely come from the headline items. They come from the things that were not considered, not costed, or assumed to be simpler than they are.",
    category:    "Process, Budget & Build",
    image:       "/images/Life800x600.webp",
    imageAlt:    "Soleta — project decision clarity",
    publishedAt: "2025-08-05",
    intro:
      "Budget overruns and timeline slippage rarely come from the headline items. They come from the things that were not considered, not costed, or assumed to be simpler than they are. This is a frank account of what clients most often underestimate — not to discourage, but to make the starting position more honest.",
    body: [
      {
        heading: "Foundation and ground conditions",
        content:
          `The foundation is the line item most reliably underestimated in early budgets. The reason is simple: until the ground is properly investigated, its conditions are unknown, and estimates are made on the assumption of straightforward ground.\n\nWhen ground conditions are variable, soft, wet, or sloped in ways that require engineering responses — piled foundations, retaining structures, drainage systems — the cost can increase significantly from early estimates. This is not unusual. It is the standard pattern. The mitigation is a proper ground investigation before budget commitments are made.`,
      },
      {
        heading: "Planning and permitting time",
        content:
          `Planning permission takes longer than most clients expect, in almost every jurisdiction. The timeline for obtaining a permit — from application submission to decision — varies widely by country, municipality, and the complexity of the application, but rarely runs to the optimistic schedule that clients hope for at the start.\n\nDelays in planning directly delay construction start. They also delay the period during which financing arrangements are active, which has cost implications. Planning contingency — both time and cost — should be built into any project plan at the outset rather than treated as a problem to solve if it arises.`,
      },
      {
        heading: "The cost of decisions",
        content:
          `Design development takes time. Each major decision — structural configuration, facade treatment, interior specification — requires information gathering, options review, and decision-making. Clients who do not have enough time to engage with this process either delegate decisions to the design team (which may produce outcomes they later wish were different) or make decisions quickly (which sometimes requires expensive revisions).\n\nThe time cost of a project is real. Making good decisions — which means informed decisions, made with sufficient time and information — is part of the work of being a client. Projects where the client is actively engaged in the decision process at the right moments tend to produce better results and fewer costly revisions.`,
      },
    ],
  },

  /* ── 8 — STUB ─────────────────────────────────────────────────────────── */
  {
    slug:        "what-changes-when-building-across-different-climates-and-regions",
    title:       "What changes when building across different climates and regions",
    excerpt:
      "Timber construction adapts to climate. But the adaptations are not cosmetic — they affect structure, insulation strategy, mechanical systems, and the fundamental approach to moisture and weather.",
    category:    "Planning & Land",
    image:       "/images/Aurora800x600.webp",
    imageAlt:    "Soleta Aurora — alpine climate build",
    publishedAt: "2025-07-22",
    intro:
      "Timber construction adapts to climate, but the adaptations are not cosmetic. They affect the structural detailing, the insulation and airtightness strategy, the mechanical systems, and the approach to moisture management. Here is what actually changes — and what stays the same — when building a timber home across different European climates.",
    body: [
      {
        heading: "Cold climates: insulation, airtightness, and moisture management",
        content:
          `In cold climates — alpine zones, northern and eastern European regions with sustained winter temperatures — the thermal envelope is the central design challenge. High levels of insulation and careful airtightness detailing are necessary to achieve comfortable indoor conditions without proportionally high energy consumption.\n\nThe moisture logic is also specific to cold climates. In cold conditions, moisture-laden warm interior air tends to move toward the colder outer structure. If this movement is not controlled — through vapour-open or vapour-controlled membranes, correctly positioned within the wall assembly — condensation can occur within the structure itself. Over time, this produces the conditions for timber degradation. The wall build-up is not just an insulation question; it is a moisture management question.`,
      },
      {
        heading: "Temperate and mixed climates",
        content:
          `Temperate climates — much of central and western Europe — present a different challenge. Summer cooling becomes as relevant as winter heating. The glazing strategy, the solar shading logic, and the orientation of the building need to balance winter solar gain with summer overheating prevention.\n\nThis is where passive design — intelligent orientation, appropriate glazing ratios, external shading devices, thermal mass where appropriate — reduces the need for active cooling systems. Getting the passive design right reduces long-term operating cost and keeps the mechanical systems simpler.`,
      },
      {
        heading: "Planning and regulatory variation by country",
        content:
          `Beyond the physical climate, the regulatory climate varies significantly across European countries. Building regulations, planning requirements, technical standards for construction, energy performance certifications, and approval processes differ by jurisdiction in ways that directly affect project timeline, cost, and what is achievable.\n\nFor international projects, this regulatory variation is as important as the physical climate adaptation. A project team with experience in the relevant jurisdiction — or a local technical partner who can navigate the regulatory environment — is not a luxury. It is a precondition for a project that progresses efficiently.`,
      },
    ],
  },
];

/* ── Helpers ─────────────────────────────────────────────────────────────── */

export function getArticle(slug: string): JournalArticle | undefined {
  return journalArticles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: JournalCategory): JournalArticle[] {
  return journalArticles.filter((a) => a.category === category);
}

export const JOURNAL_CATEGORIES: JournalCategory[] = [
  "Planning & Land",
  "Design & Living",
  "Process, Budget & Build",
];

export const featuredArticle = journalArticles.find((a) => a.featured) ?? journalArticles[0];
