import type { HeroProps }         from "@/components/sections/Hero";
import type { FeatureSplitProps } from "@/components/sections/FeatureSplit";
import type { ValuesGridProps }   from "@/components/sections/ValuesGrid";
import type { CtaBandProps }      from "@/components/sections/CtaBand";

/* ── 1. Page hero ─────────────────────────────────────────────────────────── */
export const discoverHero: HeroProps = {
  eyebrow: "Discover Soleta",
  heading: "Architecture that\nbegins with the land",
  subtext:
    "We design timber homes that grow naturally from their setting — shaped by the landscape, the light and the people who will live within them.",
  size:  "large",
  align: "center",
};

/* ── 2. Design philosophy ─────────────────────────────────────────────────── */
export const discoverPhilosophy: FeatureSplitProps = {
  eyebrow:       "Design Philosophy",
  heading:       "Calm\nby design",
  body:
    "Every Soleta home is conceived as a quiet presence in its landscape. Not a statement, but a dialogue. We work with structural timber to create spaces that breathe: open to the seasons, generous in proportion and free of the visual noise that burdens most modern construction.",
  bodySecond:
    "The result is architecture that feels considered, not assembled. Rooms that hold light well. Proportions that do not tire you. A building that earns its place in the land.",
  imagePosition: "right",
  theme:         "warm",
};

/* ── 3. Healthy materials ─────────────────────────────────────────────────── */
export const discoverMaterials: FeatureSplitProps = {
  eyebrow:       "Materials",
  heading:       "Nothing synthetic.\nNothing unnecessary.",
  body:
    "We specify materials that age with dignity: solid timber, natural insulation, mineral renders, stone thresholds. Every material decision begins with two questions — what does this do to the air inside the home, and what does it leave behind when the building is eventually remade?",
  bodySecond:
    "We avoid synthetics and short-lived finishes not as a marketing position, but as a design conviction. The homes feel better to live in for it, and they outlast the trend.",
  imagePosition: "left",
  theme:         "light",
};

/* ── 4. Relationship with landscape ──────────────────────────────────────── */
export const discoverLandscape: SectionIntroProps = {
  eyebrow: "Site & Landscape",
  heading: "Every site tells us\nwhat to build",
  body:
    "We spend time on site before we draw a single line. The orientation of the sun, the texture of the ground, the views that deserve a window and the views that do not — all of this shapes the house before any architecture begins. The landscape is not a backdrop. It is the first material we work with.",
  align: "center",
  theme: "dark",
  size:  "md",
};

/* ── 5. Why timber / Why Soleta ──────────────────────────────────────────── */
export const discoverValues: ValuesGridProps = {
  eyebrow: "Why Timber. Why Soleta.",
  heading: "The reasons behind\nevery decision",
  items: [
    {
      title: "Structural timber",
      body:
        "Post-and-beam construction achieves spans and openings that most building systems cannot match without compromise. The structure itself becomes the architecture.",
    },
    {
      title: "Thermal performance",
      body:
        "Well-detailed timber construction naturally manages heat, cold and moisture — reaching low-energy performance without dependence on complex mechanical systems.",
    },
    {
      title: "Carbon stored",
      body:
        "Timber used in construction retains the carbon it has sequestered during growth. Every Soleta home is a long-term carbon store, not a carbon debt.",
    },
    {
      title: "Indoor environment",
      body:
        "Timber surfaces regulate humidity and respond to temperature. The measurable effect on air quality and comfort is one reason people rarely want to leave a timber home.",
    },
    {
      title: "Craft and precision",
      body:
        "Timber demands exact detailing and rewards it in full. Every joint and every threshold is an opportunity for quality that will outlast the generation that built it.",
    },
    {
      title: "Longevity",
      body:
        "The oldest timber buildings in Europe have stood for centuries. We design and build with that standard in mind — not as aspiration, but as the baseline.",
    },
  ],
  columns: 3,
  theme:   "warm",
};

/* ── 6. Final CTA ─────────────────────────────────────────────────────────── */
export const discoverCta: CtaBandProps = {
  heading:      "Start the conversation",
  body:         "Tell us about your site, your vision and your timeline. We respond personally to every enquiry.",
  primaryCta:   { label: "Contact the team",      href: "/contact" },
  secondaryCta: { label: "Explore house models",  href: "/house-models" },
  theme:        "dark",
};
