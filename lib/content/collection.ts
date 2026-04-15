import type { CtaBandProps } from "@/components/sections/CtaBand";

/* ── Hero ───────────────────────────────────────────────────────────────────── */
export const collectionHero = {
  eyebrow: "The Collection",
  heading: "Architecture shaped around\nthe way you want to live",
  subheading:
    "Explore four distinct paths — from timeless everyday homes to private retreats, expressive signature residences and fully bespoke architecture.",
  ctaPrimary: { label: "Explore the Collection", href: "#collection-paths" },
  imageSrc: "/images/collection/collection-hero.jpg",
  imageAlt: "Soleta timber home exterior in natural landscape",
};

/* ── Approach ───────────────────────────────────────────────────────────────── */
export const collectionApproach = {
  eyebrow: "Our Approach",
  heading: "Architecture-first. Always.",
  body: "Every Soleta home begins with place — land, light, climate and the rhythm of everyday life. Rather than forcing people into a fixed model, we shape each direction around how the home will truly be used, and how it should belong in its setting over time.",
  link: { label: "See how we design", href: "/architecture/design-language" },
};

/* ── Collection families (4 paths — Large Family removed) ────────────────── */
export const collectionFamilies = [
  {
    eyebrow: "Architectural · Distinctive",
    heading: "Signature Homes",
    body: "For exceptional sites and clients who want a home with a stronger architectural identity. Signature is for projects where expression, proportion and presence matter as much as comfort.",
    href: "/collection/signature",
    cta: "View Signature Homes",
    imageSrc: "/images/Signature800x533.webp",
    imageAlt: "Soleta Signature home exterior",
  },
  {
    eyebrow: "Timeless · Everyday Living",
    heading: "Classic Soleta Homes",
    body: "Balanced, warm and enduring homes designed for daily life. This is the most natural starting point for permanent living, family life and long-term comfort, with the calm architectural language that defines Soleta.",
    href: "/collection/classic",
    cta: "View Classic Homes",
    imageSrc: "/images/Classic800x533.webp",
    imageAlt: "Soleta Classic home exterior",
  },
  {
    eyebrow: "Quiet · Restorative",
    heading: "Holiday & Retreat Homes",
    body: "Homes designed for slower living, privacy and a closer relationship with nature. Ideal for second homes, weekend escapes and landscapes where stillness matters.",
    href: "/collection/holiday-retreat",
    cta: "View Retreat Homes",
    imageSrc: "/images/Retreat800x533.webp",
    imageAlt: "Soleta Holiday home in nature",
  },
  {
    eyebrow: "Bespoke · Site-Specific",
    heading: "Custom Architecture",
    body: "For projects that begin with a unique brief, a special piece of land or a vision that does not belong inside a predefined path. We design the architecture around the site, the lifestyle and the ambition of the project.",
    href: "/collection/custom-architecture",
    cta: "Start a Custom Project",
    imageSrc: "/images/rezerva800x533.webp",
    imageAlt: "Custom Soleta architectural project",
  },
];

/* ── Guidance ────────────────────────────────────────────────────────────────── */
export const collectionGuidance = {
  eyebrow: "Need Guidance?",
  heading: "Not sure where to begin?",
  intro: "A simple way to think about the collection:",
  items: [
    "Choose Classic if you want the strongest balance of permanence, comfort and everyday living.",
    "Choose Holiday & Retreat if the home is mainly about rest, landscape and a second-home rhythm.",
    "Choose Signature if the project calls for stronger architectural expression or a more exceptional site response.",
    "Choose Custom if your brief does not fit a predefined path.",
  ],
};

/* ── Why Soleta ──────────────────────────────────────────────────────────────── */
export const collectionWhySoleta = {
  eyebrow: "Why Soleta",
  heading: "A clearer way to build in timber",
  items: [
    "Designed around site, light and long-term living",
    "Natural materials chosen for healthier spaces",
    "A calm but distinct architectural language",
    "Technical thinking for comfort, performance and durability",
    "One integrated path from design to delivery",
  ],
  links: [
    { label: "Soleta Design Language", href: "/architecture/design-language" },
    { label: "Post & Beam Construction", href: "/architecture/post-beam" },
    { label: "Healthy Materials", href: "/architecture/healthy-materials" },
    { label: "Energy & ZeroEnergy", href: "/architecture/energy-zeroenergy" },
    { label: "Process & Services", href: "/process" },
  ],
};

/* ── Explore Further ─────────────────────────────────────────────────────────── */
export const collectionExplore = {
  eyebrow: "Explore Further",
  blocks: [
    {
      title: "Built Projects",
      body: "See how Soleta homes take shape in real settings.",
      href: "/built-projects",
      cta: "View Projects",
    },
    {
      title: "Our Process",
      body: "Understand the path from first conversation to delivery.",
      href: "/process",
      cta: "View Process",
    },
    {
      title: "Design & Construction",
      body: "Learn more about structure, materials and performance.",
      href: "/architecture",
      cta: "View Architecture",
    },
    {
      title: "Request a Private Offer",
      body: "Tell us about your land, timeline and project direction.",
      href: "/contact",
      cta: "Get in Touch",
    },
  ],
};

/* ── Final CTA ───────────────────────────────────────────────────────────────── */
export const collectionCta: CtaBandProps = {
  heading: "Begin your Soleta project",
  body: "Whether you already know your direction or are still choosing between them, the next step is simple: tell us about your land, your timeline and the kind of home you want to create.",
  primaryCta: { label: "Request a Private Offer", href: "/contact" },
  secondaryCta: { label: "Explore Built Projects", href: "/built-projects" },
  theme: "dark",
};
