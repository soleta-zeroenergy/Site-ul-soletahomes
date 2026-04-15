import type { HeroProps }            from "@/components/sections/Hero";
import type { CardGridProps }        from "@/components/sections/CardGrid";
import type { ProjectGridProps }     from "@/components/sections/ProjectGrid";
import type { CtaBandProps }         from "@/components/sections/CtaBand";
import type { FeatureSplitProps }    from "@/components/sections/FeatureSplit";
import type { ValuesGridProps }      from "@/components/sections/ValuesGrid";
import type { ProcessTimelineProps } from "@/components/sections/ProcessTimeline";
import type { FaqPreviewProps }      from "@/components/sections/FaqPreview";

/* ── 1. Hero ──────────────────────────────────────────────────────────────── */
export const homeHero: HeroProps = {
  eyebrow:     "Soleta – Art of Serenity",
  heading:     "Living Architecture\nfor a Human Future",
  subtext:
    "Soleta creates premium timber homes with calm architecture, healthy materials and enduring design.",
  primaryCta:   { label: "Request a Private Offer", href: "/contact" },
  secondaryCta: { label: "Explore House Models",    href: "/collection" },
  imageSrc:     "/images/hero.webp",
  imageAlt:     "Soleta ZeroEnergy home",
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
  imageSrc:      "/images/WhySoleta900x1200.webp",
  imageAlt:      "Interior casă Soleta",
  imagePosition: "right",
  theme:         "warm",
};

/* ── 3. Collection preview ────────────────────────────────────────────────── */
export const homeCollection: CardGridProps = {
  heading: "Architectural families",
  cards: [
    {
      imageSrc: "/images/Signature800x533.webp",
      imageAlt: "Signature Homes",
      eyebrow: "Signature",
      title:   "Signature Homes",
      body:    "Statement architecture for landmark sites and clients who want something genuinely distinctive.",
      href:    "/collection/signature",
      cta:     "View collection",
    },
    {
      imageSrc: "/images/Classic800x533.webp",
      imageAlt: "Classic Soleta Homes",
      eyebrow: "Classic",
      title:   "Classic Soleta Homes",
      body:    "Timeless proportions, generous living spaces and enduring materials for the permanent family home.",
      href:    "/collection/classic",
      cta:     "View collection",
    },
    {
      imageSrc: "/images/Retreat800x533.webp",
      imageAlt: "Holiday & Retreat Homes",
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
  columns: 2,
  items: [
    {
      title: "Post & Beam Construction",
      body:  "Glulam structural frames manufactured in our factory. Stronger than steel by weight, dimensionally stable, and assembled on your site in days — not months.",
    },
    {
      title: "Healthy Materials",
      body:  "97% organic by material composition. No off-gassing adhesives, no synthetic insulation. The air inside a Soleta home is measurably cleaner than the air outside.",
    },
    {
      title: "ZeroEnergy by Design",
      body:  "Engineered to produce as much energy as it consumes over a year. Not a certificate — an outcome. Your energy bills reflect it from the first winter.",
    },
    {
      title: "Built to Last 80+ Years",
      body:  "Engineered timber does not degrade like masonry. A Soleta home is fully mortgageable, insurable and designed to be extended without demolition as needs change.",
    },
  ],
};

/* ── 5. Built projects preview ────────────────────────────────────────────── */
export const homeProjects: ProjectGridProps = {
  eyebrow:  "Selected Work",
  heading:  "Homes we have built",
  projects: [
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
  cta: { label: "View all projects", href: "/built-projects" },
};

/* ── 6. Process preview ───────────────────────────────────────────────────── */
export const homeProcess: ProcessTimelineProps = {
  eyebrow: "How We Work",
  heading: "From first conversation\nto handover",
  body:    "A considered process — designed to keep you informed and in control at every stage.",
  theme:   "warm",
  stages: [
    {
      eyebrow: "Stage 01",
      title:   "Dream",
      body:    "We visit your site before a single line is drawn. Architecture begins with listening — about your land, how you intend to live, and what the house needs to do for you.",
    },
    {
      eyebrow: "Stage 02",
      title:   "Design & Planning",
      body:    "Options, not a fixed direction. We present alternatives, refine with you, and submit for planning approval on your behalf.",
    },
    {
      eyebrow: "Stage 03",
      title:   "Engineering",
      body:    "Technical decisions resolved inside the design — not bolted on afterwards. Complete construction documents before ground is broken.",
    },
    {
      eyebrow: "Stage 04",
      title:   "Build",
      body:    "Factory-manufactured elements delivered to your site. The structural frame erected in 3 to 5 days. Weatherproof envelope complete within 2 to 4 weeks.",
    },
    {
      eyebrow: "Stage 05",
      title:   "Turnkey Delivery",
      body:    "Keys, full documentation and aftercare. One point of responsibility from first conversation to handover.",
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
      a: "Engineered glulam timber does not degrade like masonry. Our homes are designed for a minimum 80-year structural lifespan, fully mortgageable, and can be extended without demolition.",
    },
    {
      q: "What does ZeroEnergy mean in practice?",
      a: "The home produces — through solar, heat recovery and passive design — as much energy as it consumes over a year. Most clients report energy costs 70–90% lower than a conventional home.",
    },
    {
      q: "How long from first meeting to moving in?",
      a: "Typically 12 to 18 months from first site visit to handover, depending primarily on planning approval in your country — which we manage on your behalf.",
    },
    {
      q: "What is included in the price?",
      a: "Architecture, engineering, factory manufacturing, delivery, structural erection, insulation, cladding, windows and doors, and project management. Foundations and statutory fees are scoped separately.",
    },
  ],
};

export const homeFaqCta = {
  label: "View all frequently asked questions",
  href:  "/faq",
};

/* ── 8. Final CTA band ────────────────────────────────────────────────────── */
export const homeCta: CtaBandProps = {
  heading:      "Begin your Soleta project",
  body:         "Tell us about your site, your vision and your timeline.",
  primaryCta:   { label: "Request a Private Offer", href: "/contact" },
  secondaryCta: { label: "Discover the process",    href: "/process" },
  theme:        "dark",
};
