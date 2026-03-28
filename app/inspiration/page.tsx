import type { Metadata } from "next";
import { Hero }              from "@/components/sections/Hero";
import { SectionIntro }      from "@/components/sections/SectionIntro";
import { EditorialGallery }  from "@/components/sections/EditorialGallery";
import { CtaBand }           from "@/components/sections/CtaBand";
import {
  inspirationHero,
  inspirationIntro,
  inspirationGallery,
  inspirationCta,
} from "@/lib/content/inspiration";

export const metadata: Metadata = {
  title: "Inspiration",
  description:
    "Architecture, interiors, atmosphere, and living with wood — ideas and images from the Soleta world.",
};

export default function InspirationPage() {
  return (
    <>
      {/* 1 ── Hero ─────────────────────────────────────────────────────────── */}
      <Hero {...inspirationHero} />

      {/* 2 ── Editorial intro ────────────────────────────────────────────── */}
      <SectionIntro {...inspirationIntro} />

      {/* 3 ── Editorial image gallery ────────────────────────────────────── */}
      <EditorialGallery {...inspirationGallery} />

      {/* 4 ── CTA ────────────────────────────────────────────────────────── */}
      <CtaBand {...inspirationCta} />
    </>
  );
}
