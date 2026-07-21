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
    "End-to-end capability — private consulting, custom architectural design, permits, interior design, post&beam construction, and long-term aftercare.",
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

      {/* 4b ── SoletaHousePlans contextual link ─────────────────────────── */}
      <div className="border-t border-sand-400 bg-white px-5 py-6 sm:px-8 lg:px-12">
        <p className="font-ui text-[0.8125rem] text-[#6b5d56] max-w-2xl mx-auto text-center">
          For a model-based EasyKit route, with a plans-only option, visit{" "}
          <a
            href="https://soletahouseplans.com/easykit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-500 underline underline-offset-2 hover:opacity-70 transition-opacity"
          >
            SoletaHousePlans ↗
          </a>
          .
        </p>
      </div>

      {/* 5 ── CTA ────────────────────────────────────────────────────────── */}
      <CtaBand {...servicesCta} />
    </>
  );
}
