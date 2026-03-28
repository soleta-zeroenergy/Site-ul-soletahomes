import type { Metadata } from "next";
import { Hero }           from "@/components/sections/Hero";
import { SectionIntro }   from "@/components/sections/SectionIntro";
import { ModelCardGrid }  from "@/components/sections/ModelCardGrid";
import { SpecStrip }      from "@/components/sections/SpecStrip";
import { CtaBand }        from "@/components/sections/CtaBand";
import {
  modelsHero,
  modelsIntro,
  modelsGrid,
  modelsProcess,
  modelsCta,
} from "@/lib/content/house-models";
import { withCanonical }              from "@/lib/seo";
import { breadcrumb, faqPage, jsonLd } from "@/lib/structured-data";

/* ── Page metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  ...withCanonical("/house-models"),
  title:       "House Models",
  description:
    "Five architectural families — Signature, Classic, Large Family, Holiday & Retreat, and Custom Architecture — each defined by a way of living, not a bedroom count. Bespoke timber homes designed and built by Soleta.",
};

/* ── Structured data ───────────────────────────────────────────────────────── */

const breadcrumbSchema = breadcrumb([
  { name: "Home",         path: "/" },
  { name: "House Models", path: "/house-models" },
]);

const faqSchema = faqPage([
  {
    q: "What types of homes does Soleta offer?",
    a: "Soleta offers five architectural collections. Signature: the most architecturally ambitious work, designed for exceptional sites and clients who want a home that will never be repeated. Classic: timeless post-and-beam construction with generous proportions and enduring materials. Large Family: homes designed for households that need space to spread, with planning that keeps large homes feeling intimate. Holiday & Retreat: compact architecture for remote and rural settings. Custom Architecture: a blank-page design service for clients whose brief falls outside the standard collections.",
  },
  {
    q: "How does Soleta categorise its houses?",
    a: "Soleta does not categorise homes by number of bedrooms or floor area. Each collection is defined by its character, its relationship with the landscape, and the way of daily life it is designed to support.",
  },
  {
    q: "Can a Soleta house model be customised?",
    a: "Yes. Each collection design is a starting point, not a fixed product. Most clients adapt their chosen collection to their site and brief through the design development phase. Clients with significantly different requirements are typically better served by the Custom Architecture service.",
  },
  {
    q: "What is the process for building a Soleta home?",
    a: "A Soleta project follows five stages: Dream (initial briefing and site visit), Design & Planning (architectural design developed with the client, through to planning approval), Engineering (full construction documentation), Build (on-site construction by Soleta's in-house team), and Turnkey Delivery (complete, habitable handover with a 12-month aftercare period).",
  },
  {
    q: "What is a Signature Soleta home?",
    a: "A Signature home is Soleta's most architecturally ambitious offering. It is designed for an exceptional site or a client who wants a completely individual home — one that will never be repeated. The design is developed from a blank page around the specific brief and landscape.",
  },
]);

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function HouseModelsPage() {
  return (
    <>
      <script {...jsonLd(breadcrumbSchema)} />
      <script {...jsonLd(faqSchema)} />

      {/* 1 ── Hero ─────────────────────────────────────────────────────────── */}
      <Hero {...modelsHero} />

      {/* 2 ── Collection intro ─────────────────────────────────────────────── */}
      <SectionIntro {...modelsIntro} />

      {/* 3 ── Five model categories ────────────────────────────────────────── */}
      <ModelCardGrid {...modelsGrid} />

      {/* 4 ── Process teaser ───────────────────────────────────────────────── */}
      <SpecStrip {...modelsProcess} />

      {/* 5 ── CTA ──────────────────────────────────────────────────────────── */}
      <CtaBand {...modelsCta} />
    </>
  );
}
