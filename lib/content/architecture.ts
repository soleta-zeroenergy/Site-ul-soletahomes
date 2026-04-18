/* ─────────────────────────────────────────────────────────────────────────────
   Architecture & Design — content data
   All five architecture pages draw from this single file.
   ───────────────────────────────────────────────────────────────────────────── */

/* ── Hub page ────────────────────────────────────────────────────────────────── */

export const architectureHero = {
  eyebrow: "Architecture & Design",
  heading: "Design, structure, materials and performance shaped as one system.",
  body: "Design language, structural system, material selection and energy performance are not four separate decisions at Soleta. They are one integrated approach — each one shaping and constraining the others.",
};

export const architecturePillars = [
  {
    eyebrow: "Design Language",
    heading: "A visual logic rooted in site and climate",
    body: "Soleta homes have a recognisable character — proportions, materials, the way light enters — but it is a language that adapts to every site. We explain the principles behind it.",
    href: "/architecture/design-language",
    cta: "Explore Design Language",
  },
  {
    eyebrow: "Post & Beam System",
    heading: "The structural system behind every Soleta home",
    body: "Post and beam glulam timber frame — manufactured in our factory, assembled on your site. We explain the system, the wall build-up and what prefabrication means for quality and speed.",
    href: "/architecture/post-beam",
    cta: "Explore Construction",
  },
  {
    eyebrow: "Healthy Materials",
    heading: "Materials chosen for durability and indoor quality",
    body: "Every material in a Soleta home is selected against the same criteria: natural origin, long lifespan, honest behaviour over time. We explain what we use and why.",
    href: "/architecture/healthy-materials",
    cta: "Explore Materials",
  },
  {
    eyebrow: "ZeroEnergy",
    heading: "Energy performance designed in from the start",
    body: "Energy efficiency at Soleta begins with the envelope, not with renewables. We explain the design logic, the systems and what performance depends on — including site and use.",
    href: "/architecture/energy-zeroenergy",
    cta: "Explore ZeroEnergy",
  },
];

/* Hub framing — the "why it is one system" editorial block */
export const architectureFraming = {
  heading: "Why these four are inseparable",
  body: "A Soleta home performs because its design, structure, materials and energy systems are designed together. The structural system determines what insulation is possible. The insulation determines what glazing ratio makes sense. The glazing strategy determines the orientation. The orientation determines the design. Pull one thread and the others move. This is why we treat architecture as a system — not a menu.",
};

/* ── Design Language ─────────────────────────────────────────────────────────── */

export const designLanguageContent = {
  eyebrow: "Soleta Design Language",
  heading: "Architecture that belongs\nwhere it stands.",
  intro:
    "A Soleta home is recognisable without being uniform. There is a shared language — proportions, materials, the way light enters — but it is a language that adapts to every site, every climate and every client.",
  sections: [
    {
      heading: "First principles: site before style",
      body: "Every Soleta project begins with the land, not the catalogue. Orientation, topography, prevailing wind, tree lines, view corridors, planning constraints — these are read before a line is drawn. The design emerges from what the site asks for, not from what we have built before. The result is homes that feel inevitable in their location — not placed upon it.",
    },
    {
      heading: "Light, glazing and privacy",
      body: "Every Soleta home is planned around natural light as a thermal and experiential resource. South-facing glazing for passive solar gain, controlled north light for studios and workspaces, east-facing bedrooms for morning quality. Glazing ratios are calibrated — large enough to connect interior to landscape, disciplined enough to avoid glare and overheating. Privacy is resolved through orientation and landscape, not frosted glass.",
    },
    {
      heading: "Proportion, rhythm and restraint",
      body: "The Soleta palette is deliberately narrow: warm whites, natural timber tones, dark-stained or charred cladding, large planes of glass. Restraint is not poverty — it is what allows a home to belong to its landscape rather than compete with it. The same logic governs interior proportion: ceiling heights, window placement, the relationship between structural bays and inhabitable space. Nothing is arbitrary.",
    },
    {
      heading: "Interior continuity",
      body: "The design logic of the exterior carries through to the interior. Structural timber appears inside as well as out — not as decoration but as the honest expression of how the building stands. Material thresholds between inside and outside are reduced: the same stone or timber continues across the threshold. Ceilings follow roof geometry. The home reads as one thing, not as a facade applied over a conventional interior.",
    },
    {
      heading: "Flexibility without drift",
      body: "The Soleta structural system is designed to be extended without demolition. New modules connect to pre-planned junction points in the original structure — allowing a home to grow with a family, or be reconfigured as needs change, without the disruption and waste of conventional renovation. Flexibility is designed in from the start, not retrofitted as an afterthought.",
    },
  ],
};

/* ── Post & Beam ─────────────────────────────────────────────────────────────── */

export const postBeamContent = {
  eyebrow: "Post & Beam Construction",
  heading: "Structural clarity that supports architecture, flexibility and long-term durability.",
  intro:
    "Every Soleta home is built twice — once in our production facility in Central Europe, and once on your site. Factory production means controlled conditions, no weather delays and precision that is impossible to achieve on a traditional building site.",
  sections: [
    {
      heading: "What the system is",
      body: "Post and beam is a structural system in which vertical posts and horizontal beams — made from glued laminated timber (glulam) — carry all the loads of the building. There are no load-bearing internal walls. This gives complete freedom in the floor plan and allows large openings and spans that masonry construction cannot achieve without steel reinforcement.",
    },
    {
      heading: "What it means for spatial quality",
      body: "Because the structure is external and clearly legible, the interior is genuinely free. Rooms can be arranged, merged or divided without structural consequence. Large glazed openings are possible without the visual interruption of columns or lintels. The structural grid becomes a quiet ordering principle — present but not dominant.",
    },
    {
      heading: "Precision and prefabrication",
      body: "Every structural element is cut, drilled and finished in our factory under controlled conditions. Elements are labelled, loaded in assembly order and transported to site. The structural frame of a Classic Soleta home is typically erected in 3 to 5 days. The complete weatherproof envelope — structure, insulation, cladding, windows — is achieved within 2 to 4 weeks. This speed is a consequence of preparation, not of shortcuts.",
    },
    {
      heading: "Flexibility over time",
      body: "The post and beam system allows additions and reconfigurations that are structurally impossible in masonry. Pre-planned junction points in the original structure allow new modules to be connected without demolishing existing fabric. A home built for two can grow to accommodate four without rebuilding — provided the original structure was designed with this in mind. We design for it as a matter of course.",
    },
    {
      heading: "Durability and maintenance",
      body: "Glulam structural timber, correctly designed and protected from direct moisture exposure, has a service life exceeding 80 years. The Soleta wall build-up — vapour-permeable membrane, natural insulation, ventilated cladding — is designed to allow moisture to move and escape, preventing the condensation damage that shortens the life of airtight synthetic constructions. Cladding is the sacrificial layer, designed to be replaced without touching the structure.",
    },
  ],
  specs: [
    { label: "Wall U-value",   value: "0.15 W/m²K" },
    { label: "Insulation",     value: "Natural wood fibre — λ 0.038 W/mK" },
    { label: "Wall thickness", value: "35 cm" },
    { label: "Frame material", value: "Glulam — GL24h class" },
    { label: "Roof U-value",   value: "0.12 W/m²K" },
    { label: "Windows",        value: "Triple-glazed — Uw 0.8 W/m²K" },
    { label: "Airtightness",   value: "n₅₀ ≤ 0.6 h⁻¹ (Passive House standard)" },
  ],
  faq: [
    {
      question: "How long does the structural frame take to assemble on site?",
      answer:
        "The structural frame of a Classic Soleta home is typically erected in 3 to 5 working days. The complete weatherproof envelope — structure, insulation, cladding, windows — is achieved within 2 to 4 weeks. Final fit-out and systems installation follows on site.",
    },
    {
      question: "Can the floor plan be changed after the home is built?",
      answer:
        "Internal partitions are non-load-bearing and can be moved or removed without structural consequence. The post and beam system means there are no hidden structural walls. Additions and extensions are possible by connecting to pre-planned junction points in the original structure.",
    },
    {
      question: "Is glulam timber structurally equivalent to steel or concrete?",
      answer:
        "Glulam is stronger than steel by weight — meaning it achieves equivalent structural performance at lower mass. It is dimensionally stable, precisely predictable in its behaviour and does not corrode. For residential and light commercial spans, glulam is structurally preferable to both steel and reinforced concrete in most respects.",
    },
  ],
};

/* ── Healthy Materials ───────────────────────────────────────────────────────── */

export const healthyMaterialsContent = {
  eyebrow: "Healthy Materials",
  heading: "Materials that age well\nand behave honestly.",
  intro:
    "Every material in a Soleta home is selected against the same criteria: natural origin where possible, long designed lifespan, predictable behaviour over time, and no hidden consequences for the people inside or the building's performance. This is a design and durability position, not a wellness claim.",
  stats: [
    { value: "97%", label: "Organic materials by mass" },
    { value: "0",   label: "Synthetic insulation used" },
    { value: "80+", label: "Years designed lifespan" },
    { value: "100%", label: "Formaldehyde-free adhesives" },
  ],
  principles: [
    {
      heading: "Natural wood fibre insulation throughout",
      body: "We use natural wood fibre insulation in walls, roof and floor assemblies. It regulates humidity, stores carbon and is produced without petrochemical inputs. Its thermal and hygric performance is well-documented and stable over the life of the building.",
    },
    {
      heading: "Vapour-permeable construction",
      body: "A Soleta wall breathes. The vapour-permeable membrane and natural insulation allow moisture to move through the wall assembly and escape — preventing the condensation that damages airtight buildings with synthetic membranes. Moisture management is passive, structural and permanent.",
    },
    {
      heading: "Formaldehyde-free adhesives",
      body: "Our glulam structural elements use formaldehyde-free adhesives certified to the strictest European indoor air quality standards. We specify this as a supply chain requirement — not as a marketing position — and verify it through material certification documentation.",
    },
    {
      heading: "Surfaces that age visibly and well",
      body: "Timber weathers. Larch cladding silvers. Stone darkens. We select materials that improve with age rather than deteriorate — and that signal their age honestly rather than concealing it. A Soleta home at fifteen years should look better than at year one, not worse.",
    },
  ],
  honesty: {
    heading: "Material honesty",
    body: "No surface in a Soleta home pretends to be something it is not. Structural timber appears as structural timber. Stone is stone. Cladding is the sacrificial weather layer — not the structural skin. This commitment to material honesty is practical as well as aesthetic: honest materials are easier to inspect, easier to maintain and easier to repair.",
  },
};

/* ── ZeroEnergy ──────────────────────────────────────────────────────────────── */

export const zeroEnergyContent = {
  eyebrow: "Energy Efficiency & ZeroEnergy",
  heading: "Energy performance\ndesigned in from the start.",
  intro:
    "At Soleta, energy performance begins with the building envelope — insulation, airtightness, glazing strategy and orientation. Renewable energy systems are added on top of a highly efficient base. This sequence matters: a poorly insulated home with solar panels is still a poorly insulated home.",

  /* Design-led energy narrative — rendered before the levels grid */
  designSections: [
    {
      heading: "Envelope, insulation and airtightness",
      body: "A standard Soleta wall achieves a U-value of 0.15 W/m²K with 35 cm of natural wood fibre insulation. The roof reaches 0.12 W/m²K. Airtightness is tested on completion: n₅₀ ≤ 0.6 h⁻¹, equivalent to the Passive House standard. This level of envelope performance reduces heating demand to a point where modest renewable systems can cover the remainder.",
    },
    {
      heading: "Glazing, shading and passive solar",
      body: "Glazing is oriented and sized deliberately. South-facing glazing captures winter solar gain; summer shading — via roof overhangs, external blinds or deciduous planting — prevents overheating. The glazing strategy is calibrated per site: latitude, surrounding landscape and client programme all affect the right balance. Triple-glazed units with Uw ≤ 0.8 W/m²K are standard across all configurations.",
    },
    {
      heading: "Ventilation and indoor comfort",
      body: "Airtight buildings require controlled ventilation. We specify mechanical ventilation with heat recovery (MVHR) as standard on all ZeroEnergy configurations. Incoming fresh air is preheated by outgoing stale air at efficiency above 90%. The system maintains air quality and eliminates condensation without energy penalty — and without the draughts and noise of trickle ventilators.",
    },
  ],

  what: {
    heading: "What ZeroEnergy means in practice",
    body: "A ZeroEnergy home combines a highly insulated, airtight building envelope that minimises demand, with renewable energy systems sized to meet that demand. The Soleta system achieves this through natural wood fibre insulation, triple-glazed windows, heat recovery ventilation and a renewable energy package tailored to the site. Performance figures reflect modelled typical conditions; actual results vary by location, use and occupant behaviour.",
  },

  levels: [
    {
      name:        "Standard",
      label:       "Energy class A+",
      description: "All Soleta homes meet Energy Class A+ as standard. High-performance envelope, natural insulation, triple glazing. Annual heating demand below 30 kWh/m² in Central European conditions.",
      included:    true,
    },
    {
      name:        "ZeroEnergy",
      label:       "Near-zero or zero net energy",
      description: "Solar photovoltaic system, solar thermal or geothermal heating, heat recovery ventilation with bypass. Net annual energy import: near-zero or zero, depending on site solar yield and consumption profile.",
      included:    false,
    },
    {
      name:        "Off-Grid",
      label:       "Designed for grid independence",
      description: "Battery storage, backup generation, water harvesting and treatment. Designed for remote sites with unreliable or absent grid connection. Performance depends on site resource availability.",
      included:    false,
    },
  ],

  systems: [
    {
      name: "Solar photovoltaic",
      body: "Roof-integrated or ground-mounted PV array, sized to the home's modelled annual consumption. Excess production fed to the grid or stored in battery. Yield depends on roof orientation and local solar irradiance.",
    },
    {
      name: "Geothermal heating",
      body: "Ground-source heat pump using stable ground temperature (typically 8–12°C in Central and Northern Europe) as a heat source. COP of 4–5 under design conditions — meaning four to five units of heat for every unit of electricity consumed.",
    },
    {
      name: "Solar thermal",
      body: "Roof-mounted solar collectors for domestic hot water and space heating support. Reduces heat pump load during spring and autumn. Most effective at latitudes with consistent spring/autumn sun.",
    },
    {
      name: "Heat recovery ventilation",
      body: "Mechanical ventilation with heat recovery (MVHR) — incoming fresh air is preheated by outgoing stale air. Heat recovery efficiency above 90%. Maintains air quality and eliminates condensation in airtight buildings.",
    },
    {
      name: "Battery storage",
      body: "Lithium-ion battery storage allows solar production to be used at night and during low-production periods. Sizing is project-specific; typically covers 2–3 days of average consumption at current battery costs.",
    },
    {
      name: "Smart energy management",
      body: "Integrated energy management system monitors production, consumption, grid import/export and indoor conditions. Accessible via smartphone. System optimises self-consumption and provides alerts for anomalies.",
    },
  ],

  /* Site-dependency caveat — rendered after systems grid */
  siteNote: {
    heading: "What performance depends on",
    body: "ZeroEnergy performance is site-specific. Solar yield varies significantly by latitude, roof pitch and shading. Geothermal potential depends on ground conditions and available land for collectors. We model energy performance for each project using site-specific data before specifying systems. Published energy class figures reflect standard Central European conditions; actual performance figures are provided at design stage.",
  },

  faq: [
    {
      question: "How much does the ZeroEnergy upgrade add to cost?",
      answer:
        "The ZeroEnergy package typically adds 15–25% to the base building cost, depending on the site's renewable energy potential and the home's size and use. The range reflects significant site variation — a south-facing site with good solar access requires a smaller, cheaper system than a shaded or northerly site.",
    },
    {
      question: "Does ZeroEnergy work in Northern European climates?",
      answer:
        "Yes. Northern and Central Europe have solar irradiance and ground temperatures well-suited to the Soleta system. We have completed ZeroEnergy homes in climates ranging from alpine to coastal. Site-specific modelling is done before system specification — we do not apply a standard package without checking the numbers.",
    },
    {
      question: "Can ZeroEnergy systems be added after the home is built?",
      answer:
        "Yes, but it is more cost-effective to design for them from the start. We plan conduit routes, structural penetrations and electrical capacity for ZeroEnergy systems in all homes, even when they are not initially installed. Retrofit is possible; pre-planned retrofit is cheaper.",
    },
    {
      question: "What is the difference between ZeroEnergy and Passive House?",
      answer:
        "Passive House is a certification standard focused on the building envelope — insulation thickness, airtightness, thermal bridge elimination. ZeroEnergy is an energy balance outcome — the building produces as much energy as it uses over a year. A Passive House is not necessarily ZeroEnergy, and a ZeroEnergy home is not necessarily Passive House certified. Soleta homes meet Passive House envelope performance standards and achieve ZeroEnergy balance with the renewable energy package.",
    },
    {
      question: "Can a Soleta home operate completely off-grid?",
      answer:
        "Yes. Our Off-Grid configuration adds battery storage, backup generation and — where required — water harvesting and treatment. This is appropriate for remote mountain or lakeside sites where grid connection is expensive or unreliable. Off-grid sizing is calculated per site; it is not a standard package.",
    },
  ],
};
