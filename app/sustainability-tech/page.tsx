import type { Metadata } from "next";
import { Hero }          from "@/components/sections/Hero";
import { SectionIntro }  from "@/components/sections/SectionIntro";
import { FeatureSplit }  from "@/components/sections/FeatureSplit";
import { ValuesGrid }    from "@/components/sections/ValuesGrid";
import { BadgeRow }      from "@/components/sections/BadgeRow";
import { CtaBand }       from "@/components/sections/CtaBand";
import {
  sustainHero,
  sustainIntro,
  sustainMaterials,
  sustainValues,
  sustainBadges,
  sustainCta,
} from "@/lib/content/sustainability-tech";
import { withCanonical }               from "@/lib/seo";
import { breadcrumb, faqPage, jsonLd } from "@/lib/structured-data";

/* ── Page metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  ...withCanonical("/sustainability-tech"),
  title:       "Sustainability & Technology",
  description:
    "How Soleta approaches building sustainably: natural materials without synthetic additives, structural timber from certified forests, passive-first energy design, and homes detailed to last many decades without major intervention.",
};

/* ── Structured data ───────────────────────────────────────────────────────── */

const breadcrumbSchema = breadcrumb([
  { name: "Home",                        path: "/" },
  { name: "Sustainability & Technology", path: "/sustainability-tech" },
]);

const faqSchema = faqPage([
  {
    q: "How sustainable are Soleta homes?",
    a: "Soleta homes use natural materials — structural timber, stone, glass, and lime-based finishes — sourced from certified suppliers. The construction approach prioritises durability and a long service life. A home that lasts many decades without major intervention is inherently the more sustainable choice, regardless of any single performance metric.",
  },
  {
    q: "Is the timber Soleta uses sustainably sourced?",
    a: "Yes. Soleta specifies structural timber from certified, sustainably managed forests. Chain of custody matters to us. We can provide documentation for the principal timber used in any project we deliver.",
  },
  {
    q: "What is Soleta's approach to energy efficiency?",
    a: "We design for the building envelope first: a well-insulated, well-oriented timber frame that reduces the energy load before any mechanical systems are specified. We call this passive before active. We do not publish energy performance figures we cannot document for a specific project.",
  },
  {
    q: "Are Soleta homes healthy to live in?",
    a: "Material selection is made with indoor air quality in mind. The structural and finishing materials Soleta specifies — timber, stone, glass, lime — are well-understood and do not off-gas under normal conditions. We review adhesives, insulation products, and finishes individually and substitute where a well-documented concern exists.",
  },
  {
    q: "How long does a Soleta home last?",
    a: "Soleta homes are designed and detailed for a service life of many decades. We specify materials and connection details that age with dignity and can be maintained without specialist intervention. The structural timber frame, properly protected, will outlast most other elements of the building.",
  },
]);

export default function SustainabilityTechPage() {
  return (
    <>
      <script {...jsonLd(breadcrumbSchema)} />
      <script {...jsonLd(faqSchema)} />

      {/* 1 ── Hero ─────────────────────────────────────────────────────────── */}
      <Hero {...sustainHero} />

      {/* 2 ── Philosophy intro ───────────────────────────────────────────── */}
      <SectionIntro {...sustainIntro} />

      {/* 3 ── Healthy materials ──────────────────────────────────────────── */}
      <FeatureSplit {...sustainMaterials} />

      {/* 4 ── Five principles ────────────────────────────────────────────── */}
      <ValuesGrid {...sustainValues} />

      {/* 5 ── Material attribute badges ──────────────────────────────────── */}
      <BadgeRow {...sustainBadges} />

      {/* 6 ── CTA ────────────────────────────────────────────────────────── */}
      <CtaBand {...sustainCta} />
    </>
  );
}
