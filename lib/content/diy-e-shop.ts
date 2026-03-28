import type { HeroProps }          from "@/components/sections/Hero";
import type { CardGridProps }      from "@/components/sections/CardGrid";
import type { BadgeRowProps }      from "@/components/sections/BadgeRow";
import type { SpecStripProps }     from "@/components/sections/SpecStrip";
import type { CtaBandProps }       from "@/components/sections/CtaBand";

/* ── 1. Hero ──────────────────────────────────────────────────────────────── */
export const diyHero: HeroProps = {
  eyebrow: "DIY & E-Shop",
  heading: "Resources for those\nwho build it themselves",
  subtext:
    "Guides, materials, and components for builders who want to work with Soleta timber construction logic on their own terms. Coming soon.",
  size:  "medium",
  align: "left",
};

/* ── 2. Positioning intro ─────────────────────────────────────────────────── */
export const diyIntro = {
  eyebrow: "Coming Soon",
  heading: "Not everything needs\na full-service project",
  body:
    "Some clients are experienced builders or self-builders who want access to Soleta's material knowledge and construction approach without commissioning a full architectural project. We are building a curated resource to serve them — guides, specifications, and a small component catalogue.",
  align: "left",
  theme: "warm",
};

/* ── 3. Teaser cards ──────────────────────────────────────────────────────── */
export const diyCards: CardGridProps = {
  eyebrow:  "What's Coming",
  heading:  "Three resource areas\nin development",
  columns:  3,
  theme:    "light",
  cards: [
    {
      eyebrow: "Guides",
      title:   "DIY Build Guides",
      body:
        "Step-by-step construction documentation for self-builders working with timber post-and-beam systems. Foundation types, frame erection sequences, weatherproofing, and insulation detailing — drawn from our own construction practice.",
      cta:  "Notify me when ready",
      href: "/contact",
    },
    {
      eyebrow: "Materials",
      title:   "Curated Material Specifications",
      body:
        "The material palette we specify on full projects — structural timber grades, insulation products, cladding systems, and glazing specifications — described and sourced so self-builders can replicate our approach independently.",
      cta:  "Notify me when ready",
      href: "/contact",
    },
    {
      eyebrow: "Components",
      title:   "Frame Components & Accessories",
      body:
        "A future catalogue of structural components, connection hardware, and architectural accessories for builders who have designed their own frame and need specific elements sourced to consistent quality standards.",
      cta:  "Notify me when ready",
      href: "/contact",
    },
  ],
};

/* ── 4. Availability note ─────────────────────────────────────────────────── */
export const diyAvailability: BadgeRowProps = {
  eyebrow: "Format",
  theme:   "warm",
  items: [
    { value: "Digital",   label: "Downloadable PDF guides and specification sheets" },
    { value: "Print",     label: "Printed documentation available on request" },
    { value: "Curated",   label: "Sourced and reviewed by our own project architects" },
    { value: "Practical", label: "Based on real construction decisions, not theory" },
  ],
};

/* ── 5. How to stay informed ──────────────────────────────────────────────── */
export const diyNextSteps: SpecStripProps = {
  eyebrow: "Stay Informed",
  heading: "Be first to know\nwhen resources launch",
  items: [
    {
      label:       "Register your interest",
      description: "Send us a short note via the contact form with 'DIY Resources' in the subject. We will add you to the list.",
    },
    {
      label:       "Tell us what you need",
      description: "If there is a specific topic — foundation types, insulation detailing, glazing specification — tell us. The guides we produce first will reflect the questions we receive most.",
    },
    {
      label:       "Receive a direct notification",
      description: "When each resource is ready, we will notify you by email with a download link. No newsletter. No subscription.",
    },
    {
      label:       "Build with confidence",
      description: "Every guide will carry the same standard of care we apply to a full architectural project — because the principles are the same.",
    },
  ],
  cta:   { label: "Register your interest", href: "/contact" },
  theme: "warm",
};

/* ── 6. CTA ───────────────────────────────────────────────────────────────── */
export const diyCta: CtaBandProps = {
  heading:      "In the meantime",
  body:         "If you are planning a self-build project and want to talk through materials, systems or approach before the guides are ready — we are available.",
  primaryCta:   { label: "Get in touch",           href: "/contact" },
  secondaryCta: { label: "Explore house models",   href: "/house-models" },
  theme:        "dark",
};
