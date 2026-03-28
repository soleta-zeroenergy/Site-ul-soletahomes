import type { Metadata } from "next";
import { Hero }          from "@/components/sections/Hero";
import { SectionIntro }  from "@/components/sections/SectionIntro";
import { ValuesGrid }    from "@/components/sections/ValuesGrid";
import { FeatureSplit }  from "@/components/sections/FeatureSplit";
import { CtaBand }       from "@/components/sections/CtaBand";
import {
  servicesHero,
  servicesIntro,
  servicesList,
  servicesConsulting,
  servicesCta,
} from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end capability — private consulting, custom architectural design, permits, interior design, timber frame construction, and long-term aftercare.",
};

export default function ServicesPage() {
  return (
    <>
      {/* 1 ── Hero ─────────────────────────────────────────────────────────── */}
      <Hero {...servicesHero} />

      {/* 2 ── Services intro ─────────────────────────────────────────────── */}
      <SectionIntro {...servicesIntro} />

      {/* 3 ── Six-service grid ───────────────────────────────────────────── */}
      <ValuesGrid {...servicesList} />

      {/* 4 ── Private consulting feature split ──────────────────────────── */}
      <FeatureSplit {...servicesConsulting} />

      {/* 5 ── CTA ────────────────────────────────────────────────────────── */}
      <CtaBand {...servicesCta} />
    </>
  );
}
