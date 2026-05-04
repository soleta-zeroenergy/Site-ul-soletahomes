import type { HeroProps }          from "@/components/sections/Hero";
import type { ModelCardGridProps } from "@/components/sections/ModelCardGrid";
import type { SpecStripProps }     from "@/components/sections/SpecStrip";
import type { CtaBandProps }       from "@/components/sections/CtaBand";

/* ── 1. Hero ──────────────────────────────────────────────────────────────── */
export const modelsHero: HeroProps = {
  eyebrow: "House Models",
  heading: "Three collection\ndirections",
  subtext:
    "Each Soleta collection is defined by a character and a way of living. Find the one that fits how you want to inhabit the land.",
  size:  "medium",
  align: "left",
};

/* ── 2. Intro ─────────────────────────────────────────────────────────────── */
export const modelsIntro = {
  eyebrow: "The Collections",
  heading: "Designed around\nhow you want to live",
  body:
    "We do not categorise our homes by bedroom count or floor area. Each collection has its own character, its own relationship with the landscape and its own sense of what daily life should feel like.",
  align: "center",
  theme: "warm",
  size:  "sm",
};

/* ── 3. Model categories ──────────────────────────────────────────────────── */
export const modelsGrid: ModelCardGridProps = {
  cards: [
    {
      eyebrow: "Signature",
      title:   "Signature Homes",
      body:
        "Our most architecturally ambitious work — for exceptional sites and clients who want a home with a distinctive architectural identity.",
      href: "/house-models/signature",
      cta:  "Explore Signature",
    },
    {
      eyebrow: "Classic",
      title:   "Classic Soleta Homes",
      body:
        "Timeless post-and-beam construction with generous proportions and enduring materials. The home you live in for the rest of your life.",
      href: "/house-models/classic",
      cta:  "Explore Classic",
    },
    {
      eyebrow: "Retreat",
      title:   "Holiday & Retreat Homes",
      body:
        "Compact, considered architecture for remote and rural settings. Designed to earn its place in the landscape without imposing on it.",
      href: "/house-models/holiday-retreat",
      cta:  "Explore Retreat",
    },
  ],
};

/* ── 4. Process teaser ────────────────────────────────────────────────────── */
export const modelsProcess: SpecStripProps = {
  eyebrow: "The Soleta Process",
  heading: "From first conversation\nto handover",
  items: [
    {
      label:       "Dream",
      description: "Your site, your brief, your vision — shared with our architects.",
    },
    {
      label:       "Design",
      description: "Architecture developed with you, through every revision.",
    },
    {
      label:       "Build",
      description: "Skilled timber craftspeople, on your site, on schedule.",
    },
    {
      label:       "Deliver",
      description: "Turnkey handover of a complete, lived-in-ready home.",
    },
  ],
  cta:   { label: "Discover the full process", href: "/build-with-us" },
  theme: "warm",
};

/* ── 5. Final CTA ─────────────────────────────────────────────────────────── */
export const modelsCta: CtaBandProps = {
  heading:      "Speak with our architects",
  body:         "Every Soleta home begins with a conversation. Tell us what you have in mind and we will respond personally.",
  primaryCta:   { label: "Request a private consultation", href: "/contact" },
  secondaryCta: { label: "Discover the process",    href: "/build-with-us" },
  theme:        "dark",
};
