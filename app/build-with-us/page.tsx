import type { Metadata } from "next";
import { Hero }             from "@/components/sections/Hero";
import { SectionIntro }     from "@/components/sections/SectionIntro";
import { ProcessTimeline }  from "@/components/sections/ProcessTimeline";
import { CtaBand }          from "@/components/sections/CtaBand";
import {
  processHero,
  processIntro,
  processTimeline,
  processCta,
} from "@/lib/content/process";

export const metadata: Metadata = {
  title: "Build With Us",
  description:
    "Five clear stages — from first conversation through design, engineering, construction, and turnkey delivery. A process designed to keep you informed at every step.",
};

export default function BuildWithUsPage() {
  return (
    <>
      {/* 1 ── Hero ─────────────────────────────────────────────────────────── */}
      <Hero {...processHero} />

      {/* 2 ── Process intro ──────────────────────────────────────────────── */}
      <SectionIntro {...processIntro} />

      {/* 3 ── Five-stage timeline ────────────────────────────────────────── */}
      <ProcessTimeline {...processTimeline} />

      {/* 4 ── CTA ────────────────────────────────────────────────────────── */}
      <CtaBand {...processCta} />
    </>
  );
}
