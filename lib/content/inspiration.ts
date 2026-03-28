import type { HeroProps }              from "@/components/sections/Hero";
import type { SectionIntroProps }      from "@/components/sections/SectionIntro";
import type { EditorialGalleryProps }  from "@/components/sections/EditorialGallery";
import type { CtaBandProps }           from "@/components/sections/CtaBand";

/* ── 1. Hero ──────────────────────────────────────────────────────────────── */
export const inspirationHero: HeroProps = {
  eyebrow: "Inspiration",
  heading: "Architecture, materials,\nand the way we live",
  subtext:
    "Images and ideas from the Soleta world — how timber ages in the landscape, how interiors hold light, how a well-made home changes how you inhabit the land.",
  size:  "large",
  align: "left",
};

/* ── 2. Intro ─────────────────────────────────────────────────────────────── */
export const inspirationIntro: SectionIntroProps = {
  eyebrow: "The Soleta Edit",
  heading: "Four ways of\nlooking at a home",
  body:
    "We think about architecture through four lenses: the building itself, the interior life it contains, the atmosphere it creates at different hours and seasons, and the particular quality of living closely with natural wood.",
  align: "center",
  theme: "warm",
  size:  "sm",
};

/* ── 3. Editorial gallery ─────────────────────────────────────────────────── */
export const inspirationGallery: EditorialGalleryProps = {
  items: [
    /* ── Featured: Architecture ─────────────────────────────────────── */
    {
      size:     "full",
      category: "Architecture",
      title:    "The form of a Soleta house",
      body:
        "Post-and-beam construction gives every Soleta home its visible skeleton — rafters expressed in the ceiling, columns that carry load honestly. The structure is the architecture. Nothing is hidden that could be shown.",
    },
    /* ── Half pair: Interiors + Atmosphere ─────────────────────────── */
    {
      size:     "half",
      category: "Interiors",
      title:    "Rooms that hold light",
      body:
        "Generous glazing oriented to the landscape. Warm-toned timber linings that absorb and reflect changing light. Interiors designed to look different at seven in the morning and seven in the evening.",
    },
    {
      size:     "half",
      category: "Atmosphere",
      title:    "The house in winter",
      body:
        "Snow on the roof, firelight through glass. A Soleta home is designed for all seasons, not only summer. Mass timber walls buffer temperature swings; the thermal envelope performs year-round.",
    },
    /* ── Featured: Living with Wood ─────────────────────────────────── */
    {
      size:     "full",
      category: "Living with Wood",
      title:    "How timber changes over time",
      body:
        "Untreated oak weathers silver. Larch darkens then lightens. Pine holds its warmth. We do not fight the natural movement of wood — we specify species and details that age with dignity. A Soleta house at twenty years looks better than at two.",
    },
    /* ── Half pair: details ─────────────────────────────────────────── */
    {
      size:     "half",
      category: "Interiors",
      title:    "Joinery as furniture",
      body:
        "Built-in bookshelves, window benches, and kitchen cabinetry fabricated from the same timber species as the structural frame. Joinery that is part of the house, not installed inside it.",
    },
    {
      size:     "half",
      category: "Architecture",
      title:    "Roof lines and landscape",
      body:
        "Every roofline is designed in relation to the specific horizon it meets. Pitched roofs that echo forested ridgelines. Low mono-pitches that defer to open moorland. The silhouette is always considered.",
    },
    /* ── Half pair: remaining categories ───────────────────────────── */
    {
      size:     "half",
      category: "Atmosphere",
      title:    "The morning quality of a Soleta terrace",
      body:
        "Where the house meets the land. Covered terraces that extend the living floor into sheltered outdoor space — usable in light rain, brilliant in morning sun.",
    },
    {
      size:     "half",
      category: "Living with Wood",
      title:    "Scent, texture, silence",
      body:
        "The qualities of a timber home that photographs cannot fully capture. The sound of a house that absorbs rather than reflects. A material warmth that is tactile before it is visual.",
    },
  ],
};

/* ── 4. CTA ───────────────────────────────────────────────────────────────── */
export const inspirationCta: CtaBandProps = {
  heading:      "See the house models",
  body:         "Each Soleta collection has its own character. Find the one that fits the life you want to live in it.",
  primaryCta:   { label: "Explore house models",   href: "/house-models" },
  secondaryCta: { label: "Request a private offer", href: "/contact" },
  theme:        "dark",
};
