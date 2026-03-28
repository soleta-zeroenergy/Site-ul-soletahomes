import type { Metadata } from "next";
import { Hero }          from "@/components/sections/Hero";
import { FeatureSplit }  from "@/components/sections/FeatureSplit";
import { SectionIntro }  from "@/components/sections/SectionIntro";
import { ValuesGrid }    from "@/components/sections/ValuesGrid";
import { CtaBand }       from "@/components/sections/CtaBand";
import {
  discoverHero,
  discoverPhilosophy,
  discoverMaterials,
  discoverLandscape,
  discoverValues,
  discoverCta,
} from "@/lib/content/discover-soleta";
import { withCanonical }           from "@/lib/seo";
import { breadcrumb, service, faqPage, jsonLd } from "@/lib/structured-data";

/* ── Page metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  ...withCanonical("/discover-soleta"),
  title:       "Discover Soleta",
  description:
    "Soleta is a design-and-build architecture practice specialising in bespoke premium timber homes. Learn who we are, how we work, and what makes natural timber construction the right choice for a home built to last.",
};

/* ── Structured data ───────────────────────────────────────────────────────── */

const breadcrumbSchema = breadcrumb([
  { name: "Home",            path: "/" },
  { name: "Discover Soleta", path: "/discover-soleta" },
]);

const serviceSchema = service({
  name:        "Bespoke Timber Home Design and Construction",
  description:
    "Soleta provides end-to-end architectural design and construction services for premium timber homes. Working from initial brief through planning, engineering, and site construction to a complete turnkey handover, we design homes in timber, stone, and glass that are built to last many decades.",
  serviceType: "Architectural Design and Construction",
  path:        "/discover-soleta",
  areaServed:  ["Romania", "Central Europe", "Western Europe"],
});

const faqSchema = faqPage([
  {
    q: "What is Soleta Homes?",
    a: "Soleta is an architecture and construction practice based in Romania, specialising in bespoke premium timber homes. We design and build complete houses — from initial brief to turnkey handover — working primarily with timber, stone, glass, and natural lime-based materials.",
  },
  {
    q: "Is Soleta an architect or a builder?",
    a: "Both. Soleta is a design-and-build practice. Our architects and our construction team work under one roof. The same people who design your home manage its construction from groundbreaking to final handover.",
  },
  {
    q: "What materials does Soleta use to build homes?",
    a: "Soleta builds primarily in post-and-beam structural timber, combined with stone, glass, and lime-based finishes. We specify materials that are well-understood, do not off-gas, and improve in character with age. We avoid synthetic composites wherever a natural alternative is available.",
  },
  {
    q: "Where does Soleta design and build homes?",
    a: "Soleta is based in Romania and delivers projects across Central and Western Europe. International projects outside these regions are undertaken by arrangement — contact us with your site location and we will advise on what is feasible.",
  },
]);

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function DiscoverSoletaPage() {
  return (
    <>
      <script {...jsonLd(breadcrumbSchema)} />
      <script {...jsonLd(serviceSchema)} />
      <script {...jsonLd(faqSchema)} />

      {/* 1 ── Page hero ────────────────────────────────────────────────────── */}
      <Hero {...discoverHero} />

      {/* 2 ── Design philosophy ────────────────────────────────────────────── */}
      <FeatureSplit {...discoverPhilosophy} />

      {/* 3 ── Healthy materials ────────────────────────────────────────────── */}
      <FeatureSplit {...discoverMaterials} />

      {/* 4 ── Relationship with landscape ──────────────────────────────────── */}
      <SectionIntro {...discoverLandscape}>
        {/* Decorative rule — subtle architectural accent below the paragraph */}
        <div
          aria-hidden="true"
          className="w-10 h-px bg-brand-500 mt-3"
        />
      </SectionIntro>

      {/* 5 ── Why timber / Why Soleta ──────────────────────────────────────── */}
      <ValuesGrid {...discoverValues} />

      {/* 6 ── CTA ──────────────────────────────────────────────────────────── */}
      <CtaBand {...discoverCta} />
    </>
  );
}
