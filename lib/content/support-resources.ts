import type { HeroProps }          from "@/components/sections/Hero";
import type { SectionIntroProps }  from "@/components/sections/SectionIntro";
import type { ValuesGridProps }    from "@/components/sections/ValuesGrid";
import type { CardGridProps }      from "@/components/sections/CardGrid";
import type { SpecStripProps }     from "@/components/sections/SpecStrip";
import type { CtaBandProps }       from "@/components/sections/CtaBand";

/* ── 1. Hero ──────────────────────────────────────────────────────────────── */
export const supportHero: HeroProps = {
  eyebrow: "Support & Resources",
  heading: "Everything you need\nto take the next step",
  subtext:
    "Catalog, guidance, and answers to the questions people most often bring to their first conversation with us.",
  size:  "medium",
  align: "left",
};

/* ── 2. Intro ─────────────────────────────────────────────────────────────── */
export const supportIntro: SectionIntroProps = {
  eyebrow: "Resources",
  heading: "Information before\ncommitment",
  body:
    "We want you to arrive at a first conversation already informed — about our collections, our process, and what a typical project involves. These resources are designed to help you do that at your own pace, without any obligation.",
  align: "left",
  theme: "warm",
};

/* ── 3. Resource cards ────────────────────────────────────────────────────── */
export const supportCards: CardGridProps = {
  theme:   "light",
  columns: 3,
  cards: [
    {
      eyebrow: "Catalog",
      title:   "The Soleta Collection Catalog",
      body:
        "An overview of our five house model families — Signature, Classic, Large Family, Holiday & Retreat, and Custom — with representative plans, imagery, and specification notes. Available to download or request by post.",
      cta:  "Request the catalog",
      href: "/contact",
    },
    {
      eyebrow: "FAQ",
      title:   "Common Questions",
      body:
        "What does a Soleta home cost to build? How long does the process take? Can we change the design? Do you work outside Romania? We answer the questions that come up most in early conversations.",
      cta:  "Read the questions",
      href: "/contact",
    },
    {
      eyebrow: "Guidance",
      title:   "Choosing Your Collection",
      body:
        "Not sure which house model fits your situation? We have written a short guide that walks through the five collections, the types of site and client each is designed for, and how to think about the decision.",
      cta:  "Read the guide",
      href: "/house-models",
    },
  ],
};

/* ── 4. FAQ — static Q&A pairs ────────────────────────────────────────────── */
export const supportFaq: ValuesGridProps = {
  eyebrow:  "Frequently Asked",
  heading:  "The questions people\nbring first",
  columns:  2,
  theme:    "warm",
  items: [
    {
      title: "Do you work outside Romania?",
      body:
        "Yes. We have delivered projects in several countries and are comfortable managing international projects. Logistics and planning regulations differ by location — contact us with your site details and we will advise on what is feasible.",
    },
    {
      title: "How is a Soleta home priced?",
      body:
        "We provide project-specific pricing rather than a published price list, because cost is genuinely sensitive to site, programme, and specification. A preliminary budget framing is part of our earliest conversations — before any commitment.",
    },
    {
      title: "How long does the process take?",
      body:
        "From initial brief to handover, a typical project takes between 18 and 36 months. The planning and design phase takes as long as it needs to; the build phase is structured around a programme agreed before construction begins.",
    },
    {
      title: "Can we modify a standard collection design?",
      body:
        "The collection designs are starting points, not fixed products. Most clients adapt them to their site and brief through the design development phase. Significant departures from a collection type may be better served by our Custom Architecture service.",
    },
    {
      title: "What is included in a turnkey delivery?",
      body:
        "A complete, habitable home — structure, envelope, internal fit-out, installed services, kitchen, and bathrooms to the agreed specification. We do not define 'turnkey' as structure-only; the house is ready to move into.",
    },
    {
      title: "Do you work with architects we already have a relationship with?",
      body:
        "Yes. We collaborate with independent architects on client projects, operating as fabricator, contractor, or both. The arrangement is whatever makes sense for the project and protects the design intent.",
    },
  ],
};

/* ── 5. Next steps ────────────────────────────────────────────────────────── */
export const supportNextSteps: SpecStripProps = {
  eyebrow: "What Happens Next",
  heading: "From here\nto your first conversation",
  items: [
    {
      label:       "Browse the collections",
      description: "Read through the five house model families and identify which feels closest to what you have in mind.",
    },
    {
      label:       "Request the catalog",
      description: "Download or request the printed Soleta Collection Catalog — a fuller picture of each collection.",
    },
    {
      label:       "Prepare your brief",
      description: "Note your site location, rough programme, and any constraints or requirements that feel important.",
    },
    {
      label:       "Contact us",
      description: "Send us a message. A senior architect will respond personally — not a sales team.",
    },
  ],
  cta:   { label: "Get in touch", href: "/contact" },
  theme: "warm",
};

/* ── 6. CTA ───────────────────────────────────────────────────────────────── */
export const supportCta: CtaBandProps = {
  heading:      "Ready to talk?",
  body:         "There is no sales process here. Tell us what you have in mind and we will respond with a personal note and honest advice.",
  primaryCta:   { label: "Request a private offer", href: "/contact" },
  secondaryCta: { label: "See house models",         href: "/house-models" },
  theme:        "dark",
};
