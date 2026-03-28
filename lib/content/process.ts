import type { HeroProps }             from "@/components/sections/Hero";
import type { ProcessTimelineProps }  from "@/components/sections/ProcessTimeline";
import type { CtaBandProps }          from "@/components/sections/CtaBand";

/* ── 1. Hero ──────────────────────────────────────────────────────────────── */
export const processHero: HeroProps = {
  eyebrow: "Build With Us",
  heading: "From first conversation\nto handover",
  subtext:
    "A considered, unhurried process — designed to keep you informed and in control at every stage.",
  size:  "medium",
  align: "left",
};

/* ── 2. Intro ─────────────────────────────────────────────────────────────── */
export const processIntro = {
  eyebrow: "The Soleta Process",
  heading: "Five stages.\nOne clear path.",
  body:
    "We have refined our approach over many years and many sites. Each stage has a defined scope, a defined outcome, and a named person responsible for it. There are no surprises.",
  align: "left",
  theme: "warm",
};

/* ── 3. Timeline ──────────────────────────────────────────────────────────── */
export const processTimeline: ProcessTimelineProps = {
  theme: "warm",
  stages: [
    {
      eyebrow: "Stage 01",
      title:   "Dream",
      body:
        "Every project begins with a conversation — about your site, how you intend to live, and what the house needs to do for you. We visit the land with you before a single line is drawn. Our architects listen first.",
      details: [
        "Initial briefing session at your site or our studio",
        "Site assessment: orientation, terrain, views, access",
        "Programme definition: spaces, flows, priorities",
        "Preliminary budget framing based on programme scope",
      ],
    },
    {
      eyebrow: "Stage 02",
      title:   "Design & Planning",
      body:
        "Architecture developed with you, through successive rounds of refinement. We present options, not a single fixed direction. The design is yours by the time we submit for planning approval.",
      details: [
        "Concept design: massing, orientation, material palette",
        "Developed design: spatial layouts, elevations, sections",
        "Planning drawings prepared and submitted on your behalf",
        "Liaison with planning authorities through to decision",
      ],
    },
    {
      eyebrow: "Stage 03",
      title:   "Engineering",
      body:
        "Our structural and services engineers work directly with the architectural team so that technical requirements are resolved inside the design — not bolted on afterwards. Construction documents are complete before ground is broken.",
      details: [
        "Structural engineering for timber frame and foundations",
        "Mechanical, electrical and plumbing co-ordination",
        "Full construction drawing package",
        "Specification of all materials, fixtures and finishes",
      ],
    },
    {
      eyebrow: "Stage 04",
      title:   "Build",
      body:
        "Skilled timber craftspeople on your site. Our site manager is present throughout; you are kept informed at agreed intervals. We do not subcontract the frame — it is built by the same team that designed it.",
      details: [
        "Site preparation and foundation works",
        "Timber frame erection by our in-house team",
        "External envelope: roofing, cladding, glazing",
        "Internal fit-out: insulation, lining, joinery, services",
      ],
    },
    {
      eyebrow: "Stage 05",
      title:   "Turnkey Delivery",
      body:
        "The house is complete before we hand you the keys. Snagging is resolved by our team, not left for you to chase. You move into a finished home — not a work in progress.",
      details: [
        "Full snagging inspection and resolution",
        "Commissioning of all systems and services",
        "Handover documentation and warranties",
        "12-month aftercare period with named contact",
      ],
    },
  ],
};

/* ── 4. CTA ───────────────────────────────────────────────────────────────── */
export const processCta: CtaBandProps = {
  heading:      "Ready to begin?",
  body:         "Tell us about your site and what you have in mind. We will respond with a personal note — not a brochure.",
  primaryCta:   { label: "Request a private offer", href: "/contact" },
  secondaryCta: { label: "See our house models",    href: "/house-models" },
  theme:        "dark",
};
