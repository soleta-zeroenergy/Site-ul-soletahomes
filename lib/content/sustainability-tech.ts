import type { HeroProps }          from "@/components/sections/Hero";
import type { FeatureSplitProps }  from "@/components/sections/FeatureSplit";
import type { ValuesGridProps }    from "@/components/sections/ValuesGrid";
import type { BadgeRowProps }      from "@/components/sections/BadgeRow";
import type { CtaBandProps }       from "@/components/sections/CtaBand";

/* ── 1. Hero ──────────────────────────────────────────────────────────────── */
export const sustainHero: HeroProps = {
  eyebrow: "Sustainability & Technology",
  heading: "Built to last.\nBuilt to breathe.",
  subtext:
    "Timber is one of the oldest and most sensible building materials on earth. We work with it honestly — choosing durability over novelty, and comfort over complexity.",
  size:  "medium",
  align: "left" as const,
};

/* ── 2. Philosophy intro ──────────────────────────────────────────────────── */
export const sustainIntro = {
  eyebrow: "Our Approach",
  heading: "No marketing claims.\nJust considered choices.",
  body:
    "We do not publish performance figures we cannot stand behind. What we can tell you is that every decision in a Soleta home — structural system, insulation strategy, material selection — follows a single logic: build it well, build it once, and make it easy to live in for the rest of your life.",
  align: "left" as const,
  theme: "warm",
};

/* ── 3. Healthy materials feature ────────────────────────────────────────── */
export const sustainMaterials: FeatureSplitProps = {
  eyebrow:       "Healthy Materials",
  heading:       "What goes into\nthe walls matters",
  body:
    "Timber, stone, glass, and lime — the materials we work with most do not off-gas, do not degrade in ways that compromise indoor air, and do not require complex chemical treatments to maintain. This is not a marketing position; it is a consequence of choosing traditional, well-understood materials over cheaper synthetic alternatives.",
  bodySecond:
    "We are selective about adhesives, finishes, and insulation products. If a material has a well-documented indoor air quality concern, we look for an alternative before specifying it. This is easier when you build in timber than in many other structural systems.",
  imagePosition: "right",
  theme:         "light",
};

/* ── 4. Values grid (remaining topics) ───────────────────────────────────── */
export const sustainValues: ValuesGridProps = {
  eyebrow:  "The Way We Build",
  heading:  "Five principles\nbehind every Soleta home",
  columns:  3,
  theme:    "warm",
  items: [
    {
      title: "Energy Efficiency",
      body:
        "A well-designed timber frame with continuous insulation and considered orientation performs well thermally without requiring complex mechanical systems. We design for the envelope first — ventilation and heating are sized to complement a tight, well-insulated shell.",
    },
    {
      title: "Low-Energy Mindset",
      body:
        "We do not equate smart-home technology with sustainability. Our approach is to reduce the energy load before adding any systems to manage it — passive before active. A house that does not waste energy in the first place is simpler and cheaper to run.",
    },
    {
      title: "Timber Construction Logic",
      body:
        "Structural timber is lightweight relative to its strength, requires comparatively low energy to process, and sequesters carbon during the life of the building. These are properties worth working with, not just citing. The structural logic of each Soleta home is derived from them.",
    },
    {
      title: "Durability",
      body:
        "A home that lasts is inherently the more sustainable choice. We detail for longevity — protected junctions, appropriate drainage, finishes that can be maintained without specialist intervention. The goal is a building that improves with care, not one that tolerates neglect.",
    },
    {
      title: "Thermal Comfort",
      body:
        "Timber has a natural warmth underfoot and to the touch that hard masonry surfaces do not. Combined with a tight envelope and well-placed glazing, a Soleta home maintains comfortable temperatures across seasons with modest heating and cooling input.",
    },
    {
      title: "Responsible Sourcing",
      body:
        "We source structural timber from certified, sustainably managed forests. Chain of custody matters to us because it matters to our clients. We can provide documentation for the timber in your home and the origins of the principal materials we specify.",
    },
  ],
};

/* ── 5. Material attribute badges ────────────────────────────────────────── */
export const sustainBadges: BadgeRowProps = {
  eyebrow: "In Plain Terms",
  theme:   "light",
  items: [
    { value: "Natural",    label: "Timber, stone, glass, and lime — no synthetic composites by default" },
    { value: "Renewable",  label: "Structural timber from certified sustainably managed forests" },
    { value: "Durable",    label: "Detailed and specified to last many decades without major intervention" },
    { value: "Healthy",    label: "Material choices made with indoor air quality in mind" },
    { value: "Low waste",  label: "Precision prefabrication reduces on-site material waste" },
    { value: "Honest",     label: "No performance claims we cannot document or explain" },
  ],
};

/* ── 6. CTA ───────────────────────────────────────────────────────────────── */
export const sustainCta: CtaBandProps = {
  heading:      "Ask us anything",
  body:         "If you have specific questions about materials, specification, or how we approach a particular performance requirement — ask. We will give you a straight answer.",
  primaryCta:   { label: "Request a private offer", href: "/contact" },
  secondaryCta: { label: "Explore house models",    href: "/house-models" },
  theme:        "dark",
};
