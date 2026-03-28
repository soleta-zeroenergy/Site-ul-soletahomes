import type { HeroProps }          from "@/components/sections/Hero";
import type { SectionIntroProps }  from "@/components/sections/SectionIntro";
import type { ValuesGridProps }    from "@/components/sections/ValuesGrid";
import type { FeatureSplitProps }  from "@/components/sections/FeatureSplit";
import type { CtaBandProps }       from "@/components/sections/CtaBand";

/* ── 1. Hero ──────────────────────────────────────────────────────────────── */
export const servicesHero: HeroProps = {
  eyebrow: "Services",
  heading: "What we do\nfor you",
  subtext:
    "End-to-end capability — from the first conversation about your land to long-term care of the finished home.",
  size:  "medium",
  align: "left",
};

/* ── 2. Intro ─────────────────────────────────────────────────────────────── */
export const servicesIntro: SectionIntroProps = {
  eyebrow: "Full scope",
  heading: "One team.\nEvery discipline.",
  body:
    "We keep the full range of skills in-house — architecture, engineering, construction, interiors — so nothing falls through the gap between consultants. You work with a single team from start to finish.",
  align: "center",
  theme: "warm",
  size:  "sm",
};

/* ── 3. Core services list ────────────────────────────────────────────────── */
export const servicesList: ValuesGridProps = {
  eyebrow:  "Our Services",
  heading:  "Everything\nyour project needs",
  columns:  3,
  theme:    "light",
  items: [
    {
      title: "Private Consulting",
      body:
        "A one-on-one session with a senior architect — before you commit to anything. We discuss your site, your brief, your budget, and what is realistically achievable. No obligation. No sales pitch.",
    },
    {
      title: "Custom Architectural Design",
      body:
        "Full architectural services from concept through to construction documents. Every drawing, every detail, produced in-house. Designed around you, your site, and no other project.",
    },
    {
      title: "Permits & Planning",
      body:
        "We prepare and submit planning applications on your behalf and manage the dialogue with local authorities through to a decision. You are not left to navigate the process alone.",
    },
    {
      title: "Interior Design",
      body:
        "Interiors conceived as a continuation of the architecture — not a separate layer applied on top. Material palettes, furniture selection, lighting, joinery and bespoke built-ins, all co-ordinated by the same team.",
    },
    {
      title: "Timber Frame Construction",
      body:
        "In-house fabrication and erection of the structural timber frame. We do not sub-contract this to a third party. Our carpenters built the design — they understand what it requires.",
    },
    {
      title: "Aftercare",
      body:
        "After handover, you have a named contact for the first year. Any issues that emerge in the early life of the building are addressed by the team that built it, not passed to a call centre.",
    },
  ],
};

/* ── 4. Private consulting feature ───────────────────────────────────────── */
export const servicesConsulting: FeatureSplitProps = {
  eyebrow:       "Private Consulting",
  heading:       "Begin with a\nconversation",
  body:
    "Not everyone who comes to us is ready to commission a house. Some want clarity on what is possible before they commit time and money to a full brief. We offer a single confidential session with a senior architect — on your site, in our studio, or remotely.",
  bodySecond:
    "We cover what the site can support, what your programme might cost to build, and which collection or approach makes most sense for your circumstances. The conversation is candid and the advice is independent.",
  imagePosition: "right",
  theme:         "warm",
};

/* ── 5. CTA ───────────────────────────────────────────────────────────────── */
export const servicesCta: CtaBandProps = {
  heading:      "Talk to an architect",
  body:         "Whether you are at the beginning of an idea or halfway through a project that needs a fresh pair of eyes — we are available for a private conversation.",
  primaryCta:   { label: "Request a private offer", href: "/contact" },
  secondaryCta: { label: "Discover the process",    href: "/build-with-us" },
  theme:        "dark",
};
