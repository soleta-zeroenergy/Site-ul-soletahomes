import type { Metadata } from "next";
import { Hero }          from "@/components/sections/Hero";
import { SectionIntro }  from "@/components/sections/SectionIntro";
import { CardGrid }      from "@/components/sections/CardGrid";
import { FeatureSplit }  from "@/components/sections/FeatureSplit";
import { CtaBand }       from "@/components/sections/CtaBand";
import {
  professionalsHero,
  professionalsIntro,
  professionalsGrid,
  professionalsApproach,
  professionalsCta,
} from "@/lib/content/professionals";

export const metadata: Metadata = {
  title: "For Professionals",
  description:
    "Architects, developers, hospitality operators, and strategic partners — how Soleta collaborates with professionals to deliver exceptional timber architecture.",
};

export default function ProfessionalsPage() {
  return (
    <>
      {/* 1 ── Hero ─────────────────────────────────────────────────────────── */}
      <Hero {...professionalsHero} />

      {/* 2 ── Collaboration intro ────────────────────────────────────────── */}
      <SectionIntro {...professionalsIntro} />

      {/* 3 ── Four audience types ────────────────────────────────────────── */}
      <CardGrid {...professionalsGrid} />

      {/* 4 ── How the collaboration works ───────────────────────────────── */}
      <FeatureSplit {...professionalsApproach} />

      {/* 5 ── CTA ────────────────────────────────────────────────────────── */}
      <CtaBand {...professionalsCta} />
    </>
  );
}
