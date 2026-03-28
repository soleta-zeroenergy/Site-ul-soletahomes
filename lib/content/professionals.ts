import type { HeroProps }          from "@/components/sections/Hero";
import type { CardGridProps }      from "@/components/sections/CardGrid";
import type { FeatureSplitProps }  from "@/components/sections/FeatureSplit";
import type { CtaBandProps }       from "@/components/sections/CtaBand";

/* ── 1. Hero ──────────────────────────────────────────────────────────────── */
export const professionalsHero: HeroProps = {
  eyebrow: "For Professionals",
  heading: "We work best\nwith the best",
  subtext:
    "Architects, developers, and hospitality operators trust us to deliver exceptional timber architecture — reliably, on time, and to a level their clients expect.",
  size:  "medium",
  align: "left",
};

/* ── 2. Intro ─────────────────────────────────────────────────────────────── */
export const professionalsIntro = {
  eyebrow: "Collaboration",
  heading: "A partner, not\na subcontractor",
  body:
    "We collaborate with professionals at every level — from independent architects seeking a trusted fabrication and build partner, to developers specifying premium residential product, to hospitality operators creating destination retreats. In every case, the relationship is direct, candid, and long-term.",
  align: "left",
  theme: "warm",
};

/* ── 3. Audience cards ────────────────────────────────────────────────────── */
export const professionalsGrid: CardGridProps = {
  eyebrow:  "Who We Work With",
  heading:  "Four types of professional\ncollaboration",
  columns:  4,
  theme:    "dark",
  cards: [
    {
      eyebrow: "Architects",
      title:   "Independent Architects",
      body:
        "You hold the client relationship and the design intent. We bring fabrication capability, site management, and delivery certainty. We work under your lead and protect your authorship of the project.",
      cta: "Discuss a project",
      href: "/contact",
    },
    {
      eyebrow: "Developers",
      title:   "Property Developers",
      body:
        "Specify Soleta for luxury residential schemes, resort enclaves, or individual plot developments. We support projects from single dwellings to multi-unit sites and provide full construction documentation.",
      cta: "Explore development",
      href: "/contact",
    },
    {
      eyebrow: "Hospitality",
      title:   "Hospitality & Tourism",
      body:
        "Bespoke lodges, retreat cabins, and resort residences designed for operation — durable, low-maintenance, and architecturally distinctive. We have experience across both remote and accessible sites.",
      cta: "Explore hospitality",
      href: "/contact",
    },
    {
      eyebrow: "Partners",
      title:   "Strategic Partners",
      body:
        "Territory representation, referral partnerships, or joint ventures in markets where we are expanding. If you see an opportunity to bring Soleta to a new region or audience, we would like to hear from you.",
      cta: "Talk to us",
      href: "/contact",
    },
  ],
};

/* ── 4. Collaboration approach ────────────────────────────────────────────── */
export const professionalsApproach: FeatureSplitProps = {
  eyebrow:       "How It Works",
  heading:       "Direct. Reliable.\nNo intermediaries.",
  body:
    "When you bring us into a project, you work with the same architect and site manager from brief to handover. We do not pass projects through account managers or hand off to third-party crews. The people you meet at the outset are the people who build the house.",
  bodySecond:
    "We share information openly — programme, budget exposure, material lead times, and any risks as they emerge. Professional clients tell us this directness is what keeps them coming back.",
  imagePosition: "left",
  theme:         "light",
  cta:           { label: "Start a conversation", href: "/contact" },
};

/* ── 5. CTA ───────────────────────────────────────────────────────────────── */
export const professionalsCta: CtaBandProps = {
  heading:      "Let's talk about your project",
  body:         "Whether you have a brief in hand or an early-stage opportunity — a short conversation is all it takes to establish whether we are the right fit.",
  primaryCta:   { label: "Request a private offer", href: "/contact" },
  secondaryCta: { label: "Discover the process",    href: "/build-with-us" },
  theme:        "dark",
};
