import type { Metadata } from "next";
import { Hero }          from "@/components/sections/Hero";
import { SectionIntro }  from "@/components/sections/SectionIntro";
import { CardGrid }      from "@/components/sections/CardGrid";
import { BadgeRow }      from "@/components/sections/BadgeRow";
import { SpecStrip }     from "@/components/sections/SpecStrip";
import { CtaBand }       from "@/components/sections/CtaBand";
import {
  diyHero,
  diyIntro,
  diyCards,
  diyAvailability,
  diyNextSteps,
  diyCta,
} from "@/lib/content/diy-e-shop";

export const metadata: Metadata = {
  title: "DIY & E-Shop",
  description:
    "Guides, material specifications, and frame components for self-builders working with Soleta timber construction — coming soon.",
};

export default function DiyEShopPage() {
  return (
    <>
      {/* 1 ── Hero ─────────────────────────────────────────────────────────── */}
      <Hero {...diyHero} />

      {/* 2 ── Positioning intro ──────────────────────────────────────────── */}
      <SectionIntro {...diyIntro} />

      {/* 3 ── Three resource teaser cards ────────────────────────────────── */}
      <CardGrid {...diyCards} />

      {/* 4 ── Format / availability attributes ──────────────────────────── */}
      <BadgeRow {...diyAvailability} />

      {/* 5 ── How to stay informed ───────────────────────────────────────── */}
      <SpecStrip {...diyNextSteps} />

      {/* 6 ── CTA ────────────────────────────────────────────────────────── */}
      <CtaBand {...diyCta} />
    </>
  );
}
