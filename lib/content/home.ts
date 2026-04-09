import type { HeroProps }            from "@/components/sections/Hero";
import type { CardGridProps }        from "@/components/sections/CardGrid";
import type { ProjectGridProps }     from "@/components/sections/ProjectGrid";
import type { CtaBandProps }         from "@/components/sections/CtaBand";
import type { FeatureSplitProps }    from "@/components/sections/FeatureSplit";
import type { ValuesGridProps }      from "@/components/sections/ValuesGrid";
import type { SpecStripProps }       from "@/components/sections/SpecStrip";
import type { FaqPreviewProps }      from "@/components/sections/FaqPreview";

/* ── 1. Hero ──────────────────────────────────────────────────────────────── */
export const homeHero: HeroProps = {
  eyebrow:     "Soleta – Art of Serenity",
  heading:     "Living Architecture\nfor a Human Future",
  subtext:
    "Soleta creates premium timber homes with calm architecture, healthy materials and enduring design.",
  primaryCta:   { label: "Request a Private Offer", href: "/contact" },
  secondaryCta: { label: "Explore House Models",    href: "/collection" },
};

/* ── 2. Manifesto / Why Soleta ────────────────────────────────────────────── */
export const homeManifesto: FeatureSplitProps = {
  eyebrow:       "Why Soleta",
  heading:       "Wooden architecture is not a trend.\nIt is a decision.",
  body:
    "We have worked with wood for over twenty years — not because it is fashionable, but because no other material builds better homes. It stores carbon. It breathes. It ages with dignity. And it creates interiors that are demonstrably better for the people who live inside them.",
  bodySecond:
    "Every Soleta home is engineered to produce as much energy as it consumes, manufactured in controlled conditions and assembled on your site in weeks. Architecture that is honest about what it is made of, and why.",
  cta:           { label: "Our architecture & design", href: "/architecture" },
  imagePosition: "right",
  theme:         "warm",
};

/* ── 3. Collection preview ────────────────────────────────────────────────── */
export const homeCollection: CardGridProps = {
  heading: "Architectural families",
  cards: [
    {
      eyebrow: "Signature",
      title:   "Signature Homes",
      body:    "Statement architecture for landmark sites and clients who want something genuinely distinctive.",
      href:    "/collection/signature",
      cta:     "View collection",
    },
    {
      eyebrow: "Classic",
      title:   "Classic Soleta Homes",
      body:    "Timeless proportions, generous living spaces and enduring materials for the permanent family home.",
      href:    "/collection/classic",
      cta:     "View collection",
    },
    {
      eyebrow: "Retreat",
      title:   "Holiday & Retreat Homes",
      body:    "Compact, calm architecture designed for rest and honest connection to the natural landscape.",
      href:    "/collection/holiday-retreat",
      cta:     "View collection",
    },
  ],
  cta:   { label: "All house models", href: "/collection" },
  theme: "warm",
};

/* ── 4. Why Timber + ZeroEnergy ───────────────────────────────────────────── */
export const homeValues: ValuesGridProps = {
  eyebrow: "The Soleta Difference",
  heading: "Four reasons timber\nchanges everything",
  body:    "The decisions we made at the beginning — the material, the system, the standards — determine everything that follows.",
  theme:   "light",
  columns: 4,
  items: [
    {
      title: "Post & Beam Construction",
      body:
        "Glulam structural frames manufactured in our factory. Stronger than steel by weight, dimensionally stable, and assembled on your site in days — not months.",
    },
    {
      title: "Healthy Materials",
      body:
        "97% organic by material composition. No off-gassing adhesives, no synthetic insulation. The air inside a Soleta home is measurably cleaner than the air outside.",
    },
    {
      title: "ZeroEnergy by Design",
      body:
        "Engineered to produce as much energy as it consumes over a year. Not a certificate — an outcome. Your energy bills reflect it from the first winter.",
    },
    {
      title: "Built to Last 80+ Years",
      body:
        "Engineered timber does not degrade like masonry. A Soleta home is fully mortgageable, insurable and designed to be extended without demolition as needs change.",
    },
  ],
};

/* ── 5. Built projects preview ────────────────────────────────────────────── */
export const homeProjects: ProjectGridProps = {
  eyebrow:  "Selected Work",
  heading:  "Homes we have built",
  projects: [
    {
      imageSrc: "",
      title:    "Villa AQUARIUS",
      category: "Private Residence",
      year:     2014,
      href:     "/built-projects/private-residences",
    },
    {
      imageSrc: "",
      title:    "House Aurora",
      category: "Private Residence",
      year:     2021,
      href:     "/built-projects/private-residences",
    },
    {
      imageSrc: "",
      title:    "House Life",
      category: "Holiday Home",
      year:     2024,
      href:     "/built-projects/holiday-homes",
    },
  ],
  cta: { label: "View all projects", href: "/built-projects" },
};

/* ── 6. Process preview ───────────────────────────────────────────────────── */
export const homeProcess: SpecStripProps = {
  eyebrow: "How We Work",
  heading: "From first conversation to handover",
  theme:   "warm",
  cta:     { label: "Discover the full process", href: "/process" },
  items: [
    {
      label:       "Dream",
      description:
        "We visit your site before a single line is drawn. Architecture begins with listening.",
    },
    {
      label:       "Design & Planning",
      description:
        "Options, not a fixed direction. The design is yours by the time we submit for planning.",
    },
    {
      label:       "Engineering",
      description:
        "Technical decisions resolved inside the design — not bolted on afterwards.",
    },
    {
      label:       "Build",
      description:
        "Factory-manufactured elements. Your structural frame erected in 3 to 5 days on site.",
    },
    {
      label:       "Turnkey Delivery",
      description:
        "Keys, documentation and aftercare. One point of responsibility, from start to finish.",
    },
  ],
};

/* ── 7. FAQ ───────────────────────────────────────────────────────────────── */
export const homeFaq: FaqPreviewProps = {
  eyebrow: "Common Questions",
  heading: "What people ask us first",
  theme:   "light",
  columns: 2,
  items: [
    {
      q: "How long does a Soleta home last?",
      a: "Engineered glulam timber does not degrade like masonry. Our homes are designed for a minimum 80-year structural lifespan, are fully mortgageable across all markets we operate in, and can be extended without demolition.",
    },
    {
      q: "What does ZeroEnergy option mean in practice?",
      a: "It means the home produces — through solar, heat recovery and passive design — as much energy as it consumes over a year. Most clients report energy costs 70–90% lower than a conventional home of equivalent size.",
    },
    {
      q: "How long from first meeting to moving in?",
      a: "Typically 12 to 18 weeks from our first site visit to handover. The timeline depends primarily on planning approval in your country, which we manage on your behalf.",
    },
    {
      q: "Do you work only in Europe?",
      a: "No. We currently deliver projects across America (N&S), Australia&New Zealand, Asia and of course, Europe. If you have a site, contact us — we will tell you honestly whether we can serve it.",
    },
    {
      q: "What is included in the price?",
      a: "Factory manufacturing, delivery, and by request: structural erection, insulation, cladding, windows and doors, and project management. Foundations and local statutory fees are scoped separately.",
    },
    {
      q: "Can I see a Soleta home before I commit?",
      a: "Yes. We arrange private visits to completed homes with the agreement of our clients. Contact us to discuss your location and we will propose the most relevant project to visit.",
    },
  ],
};

/* ── 8. Final CTA band ────────────────────────────────────────────────────── */
export const homeCta: CtaBandProps = {
  heading:      "Begin your Soleta project",
  body:         "Tell us about your site, your vision and your timeline.",
  primaryCta:   { label: "Request a Private Offer", href: "/contact" },
  secondaryCta: { label: "Discover the process",    href: "/process" },
  theme:        "dark",
};
