import type { HeroProps } from "@/components/sections/Hero";
import type { CardGridProps } from "@/components/sections/CardGrid";
import type { ProjectGridProps } from "@/components/sections/ProjectGrid";
import type { CtaBandProps } from "@/components/sections/CtaBand";

/* ── 1. Hero ──────────────────────────────────────────────────────────────── */
export const homeHero: HeroProps = {
  eyebrow:     "Nordic Timber Architecture",
  heading:     "Living Architecture\nfor a Human Future",
  subtext:
    "Soleta creates premium timber homes with calm architecture, healthy materials and enduring design.",
  primaryCta:   { label: "Request a Private Offer", href: "/contact" },
  secondaryCta: { label: "Explore House Models",    href: "/house-models" },
};

/* ── 2. Collection preview ────────────────────────────────────────────────── */
export const homeCollection: CardGridProps = {
  heading: "Architectural families",
  cards: [
    {
      eyebrow: "Signature",
      title:   "Signature Homes",
      body:    "Statement architecture for landmark sites and clients who want something genuinely distinctive.",
      href:    "/house-models",
      cta:     "View collection",
    },
    {
      eyebrow: "Classic",
      title:   "Classic Soleta Homes",
      body:    "Timeless proportions, generous living spaces and enduring materials for the permanent family home.",
      href:    "/house-models",
      cta:     "View collection",
    },
    {
      eyebrow: "Retreat",
      title:   "Holiday & Retreat Homes",
      body:    "Compact, calm architecture designed for rest and honest connection to the natural landscape.",
      href:    "/house-models",
      cta:     "View collection",
    },
  ],
  cta:   { label: "All house models", href: "/house-models" },
  theme: "warm",
};

/* ── 3. Built projects preview ────────────────────────────────────────────── */
export const homeProjects: ProjectGridProps = {
  eyebrow:  "Selected Work",
  heading:  "Homes we have built",
  projects: [
    {
      imageSrc: "",
      title:    "Villa Falaise",
      location: "Chamonix, France",
      category: "Private Residence",
      year:     2023,
      href:     "/build-with-us",
    },
    {
      imageSrc: "",
      title:    "Haus Tegernsee",
      location: "Bavaria, Germany",
      category: "Private Residence",
      year:     2022,
      href:     "/build-with-us",
    },
    {
      imageSrc: "",
      title:    "Wörthersee Lodge",
      location: "Carinthia, Austria",
      category: "Holiday Home",
      year:     2024,
      href:     "/build-with-us",
    },
  ],
  cta: { label: "View all projects", href: "/build-with-us" },
};

/* ── 4. Proof band ────────────────────────────────────────────────────────── */
export const homeBadges: string[] = [
  "Low-Energy",
  "Healthy Materials",
  "Local Craft",
  "CO₂-wise",
];

/* ── 5. Final CTA band ────────────────────────────────────────────────────── */
export const homeCta: CtaBandProps = {
  heading:      "Begin your Soleta project",
  body:         "Tell us about your site, your vision and your timeline.",
  primaryCta:   { label: "Request a Private Offer",  href: "/contact" },
  secondaryCta: { label: "Discover the process",     href: "/build-with-us" },
  theme:        "dark",
};
