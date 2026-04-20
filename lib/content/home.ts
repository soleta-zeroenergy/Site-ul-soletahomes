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
  eyebrow:     "Soleta Homes",
  heading:     "Quiet distinction,\ndesigned around\nyour life",
  subtext:
    "Soleta designs and builds calm, high-performance homes in timber — from enduring family residences and private retreats to fully bespoke architecture.",
  primaryCta:   { label: "Explore the Collection", href: "/collection" },
  secondaryCta: { label: "Request a Private Offer", href: "/request-private-offer" },
  imageSrc:     "https://img.soletahomes.com/sh-home-hero-01-2560X1440-16x9.webp",
  imageAlt:     "Soleta ZeroEnergy home",
};

/* ── 2. Proof strip ───────────────────────────────────────────────────────── */
export const homeProofStrip = {
  items: [
    "Architecture-first",
    "Natural materials",
    "ZeroEnergy thinking",
    "Design to delivery",
  ],
};

/* ── 3. Manifesto ─────────────────────────────────────────────────────────── */
export const homeManifesto: FeatureSplitProps = {
  eyebrow:       "Our View",
  heading:       "Wooden architecture is not a trend.\nIt is a decision.",
  body:
    "A decision about how a home feels, how it performs over time, and how naturally it belongs to its setting. For us, timber is not a style applied at the end. It shapes the architecture from the beginning.",
  cta:           { label: "Our architecture & design", href: "/architecture" },
  imageSrc:      "https://img.soletahomes.com/sh-home-our-view-02-1699X2000-4x5.webp",
  imageAlt:      "Interior Soleta home",
  imagePosition: "right",
  theme:         "warm",
};

/* ── 4. Collection preview ────────────────────────────────────────────────── */
export const homeCollection: CardGridProps = {
  eyebrow: "Start Here",
  heading: "Choose the path that fits your life best",
  body:
    "Some projects begin with a clearly defined direction. Others begin with land, a feeling or a way of living. The Collection helps you identify the most natural starting point.",
  cards: [
    {
      imageSrc: "https://img.soletahomes.com/sh-home-start-here-signature-09-800x533-3x2.webp",
      imageAlt: "Signature Homes",
      eyebrow:  "Signature",
      title:    "Signature Homes",
      body:     "Statement architecture for exceptional sites and clients who want a home with a stronger architectural identity.",
      href:     "/collection/signature",
      cta:      "View collection",
    },
    {
      imageSrc: "https://img.soletahomes.com/sh-home-start-here-classic-10-800x533-3x2.webp",
      imageAlt: "Classic Soleta Homes",
      eyebrow:  "Classic",
      title:    "Classic Soleta Homes",
      body:     "Timeless proportions, natural materials and generous living spaces for the permanent family home.",
      href:     "/collection/classic",
      cta:      "View collection",
    },
    {
      imageSrc: "https://img.soletahomes.com/sh-home-start-here-retreat-11-800x533-3x2.webp",
      imageAlt: "Holiday & Retreat Homes",
      eyebrow:  "Retreat",
      title:    "Holiday & Retreat Homes",
      body:     "Compact, calm architecture designed for rest, nature and a closer relationship with the landscape.",
      href:     "/collection/holiday-retreat",
      cta:      "View collection",
    },
    {
      imageSrc: "https://img.soletahomes.com/sh-home-start-here-custom-12-800x533-3x2.webp",
      imageAlt: "Custom Architecture",
      eyebrow:  "Custom",
      title:    "Custom Architecture",
      body:     "Architecture designed around your brief, your site and your vision — without a fixed starting point.",
      href:     "/collection/custom-architecture",
      cta:      "Start a project",
    },
  ],
  cta:          { label: "Explore the Collection", href: "/collection" },
  theme:        "warm",
  columns:      2,
  fullCardLink: true,
};

/* ── 5. Why Timber ────────────────────────────────────────────────────────── */
export const homeValues: ValuesGridProps = {
  eyebrow:  "Why Timber",
  heading:  "Why more people choose\nto live with timber",
  body:     "The material shapes the architecture, the experience and the performance of the home — from the first day to the last.",
  theme:    "light",
  columns:  2,
  items: [
    {
      title: "Calm, natural interiors",
      body:
        "Timber creates interiors with a warmth and quiet that synthetic materials cannot replicate. Every surface — structure, wall, ceiling — contributes to a sense of calm that improves over time.",
    },
    {
      title: "Precision before the site",
      body:
        "Structural elements are manufactured in controlled conditions before arriving on site. This reduces waste, improves accuracy, and keeps the build process shorter and less disruptive.",
    },
    {
      title: "Energy-conscious from the start",
      body:
        "Soleta homes are designed with energy performance in mind from the earliest stage — passive orientation, natural insulation, and the option to produce as much energy as the home uses.",
    },
    {
      title: "Architecture that lasts",
      body:
        "Engineered timber is stable, mortgageable and designed for the long term. The structure can be extended without demolition as needs change.",
    },
  ],
};

/* ── 6. Built projects preview ────────────────────────────────────────────── */
export const homeProjects: ProjectGridProps = {
  eyebrow:  "Built Work",
  heading:  "Selected projects in real settings",
  body:     "Each project responds differently to land, climate and daily life — but all reflect the same pursuit of calm architecture, natural materiality and long-term quality.",
  projects: [
    {
      imageSrc: "https://img.soletahomes.com/sh-home-built-work-Aquarius-04-800x600-4x3.webp",
      imageAlt: "Villa Aquarius",
      title:    "Villa AQUARIUS",
      location: "Europe",
      category: "Private Residence",
      year:     2014,
      href:     "/built-projects/private-residences",
    },
    {
      imageSrc: "https://img.soletahomes.com/sh-home-built-work-Aurora-05-800x600-4x3.webp",
      imageAlt: "House Aurora",
      title:    "House Aurora",
      location: "Europe",
      category: "Private Residence",
      year:     2021,
      href:     "/built-projects/private-residences",
    },
    {
      imageSrc: "https://img.soletahomes.com/sh-home-built-work-Life-06-800x600-4x3.webp",
      imageAlt: "House Life",
      title:    "House Life",
      location: "Europe",
      category: "Holiday Home",
      year:     2024,
      href:     "/built-projects/holiday-homes",
    },
  ],
  cta: { label: "Explore Built Projects", href: "/built-projects" },
};

/* ── 7. Who We Work With ──────────────────────────────────────────────────── */
export const homeWhoWeWorkWith = {
  eyebrow: "Who We Work With",
  heading: "Designed for more than one kind of project",
  blocks: [
    {
      title: "Private Residences",
      body:  "Permanent family homes, architect-designed for a specific site and way of living.",
      href:  "/built-projects/private-residences",
    },
    {
      title: "Holiday Homes & Retreats",
      body:  "Second homes and seasonal retreats in landscapes where quiet and connection matter.",
      href:  "/built-projects/holiday-homes",
    },
    {
      title: "Hospitality & Small Resorts",
      body:  "Small lodge groups, boutique hotel extensions and eco-resort developments.",
      href:  "/built-projects/hospitality-resorts",
    },
    {
      title: "Educational & Public Buildings",
      body:  "Timber construction for schools, community spaces and public architecture.",
      href:  "/built-projects/educational-public",
    },
  ],
  cta: { label: "See Built Projects by Type", href: "/built-projects" },
};

/* ── 8. Process preview ───────────────────────────────────────────────────── */
export const homeProcess: ProcessTimelineProps = {
  eyebrow: "How We Work",
  heading: "One process. One point of responsibility.",
  body:    "From the first conversation to design, engineering, build and handover, the process stays coordinated around one architectural vision.",
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

export const homeProcessCta = {
  label: "See the Full Process",
  href:  "/process",
};

/* ── 9. Design & Construction bridge ─────────────────────────────────────── */
export const homeDesignBridge = {
  eyebrow: "Design & Construction",
  heading: "Material intelligence, comfort and long-term performance",
  body:
    "From post-and-beam structure to healthy materials and energy-aware design, every Soleta home is shaped as a complete architectural system — not a collection of add-ons.",
  links: [
    { label: "Post & Beam Construction",  href: "/architecture/post-beam" },
    { label: "Healthy Materials",         href: "/architecture/healthy-materials" },
    { label: "Energy & ZeroEnergy",       href: "/architecture/energy-zeroenergy" },
  ],
};

/* ── 10. FAQ preview ──────────────────────────────────────────────────────── */
export const homeFaq: FaqPreviewProps = {
  eyebrow:  "Questions",
  heading:  "What clients often ask first",
  theme:    "light",
  columns:  2,
  items: [
    {
      q: "Do you only build from existing models?",
      a: "No. Alongside our defined collections — Signature, Classic, Holiday & Retreat — we offer Custom Architecture for projects that begin with a unique brief, a site or a vision that does not fit a predefined path.",
    },
    {
      q: "Can Soleta adapt a home to my land and local regulations?",
      a: "Yes. All projects begin with a site visit and a review of local planning requirements. We manage permit applications on your behalf across all markets we work in.",
    },
    {
      q: "Do you offer turnkey delivery?",
      a: "Yes. Our standard process runs from design through to handover — including engineering, factory manufacturing, transport, on-site assembly and final documentation. Foundation works and utility connections are scoped separately.",
    },
    {
      q: "When should we contact you?",
      a: "As early as possible — ideally before purchasing land. Early conversations help us advise on site suitability, orientation, planning constraints and the right collection path for your project.",
    },
  ],
};

export const homeFaqCta = {
  label: "View all frequently asked questions",
  href:  "/faq",
};

/* ── 11. Final CTA band ───────────────────────────────────────────────────── */
export const homeCta: CtaBandProps = {
  heading:      "Begin your Soleta project",
  body:         "Tell us about your land, your priorities and your timeline — or start by exploring the collection and built work.",
  primaryCta:   { label: "Request a Private Offer", href: "/request-private-offer" },
  secondaryCta: { label: "Explore the Collection",  href: "/collection" },
  theme:        "dark",
};

export const homeCtaTextLink = {
  label: "Understand the process",
  href:  "/process",
};
