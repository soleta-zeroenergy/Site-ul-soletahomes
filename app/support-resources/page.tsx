import type { Metadata } from "next";
import { Hero }          from "@/components/sections/Hero";
import { SectionIntro }  from "@/components/sections/SectionIntro";
import { CardGrid }      from "@/components/sections/CardGrid";
import { ValuesGrid }    from "@/components/sections/ValuesGrid";
import { SpecStrip }     from "@/components/sections/SpecStrip";
import { CtaBand }       from "@/components/sections/CtaBand";
import {
  supportHero,
  supportIntro,
  supportCards,
  supportFaq,
  supportNextSteps,
  supportCta,
} from "@/lib/content/support-resources";

export const metadata: Metadata = {
  title: "Support & Resources",
  description:
    "Catalog, frequently asked questions, guidance for choosing a house model, and clear next steps — everything you need before your first conversation with Soleta.",
};

export default function SupportResourcesPage() {
  return (
    <>
      {/* 1 ── Hero ─────────────────────────────────────────────────────────── */}
      <Hero {...supportHero} />

      {/* 2 ── Intro ──────────────────────────────────────────────────────── */}
      <SectionIntro {...supportIntro} />

      {/* 3 ── Three resource cards ───────────────────────────────────────── */}
      <CardGrid {...supportCards} />

      {/* 4 ── FAQ — static Q&A pairs ─────────────────────────────────────── */}
      <ValuesGrid {...supportFaq} />

      {/* 5 ── Next steps strip ───────────────────────────────────────────── */}
      <SpecStrip {...supportNextSteps} />

      {/* 6 ── CTA ────────────────────────────────────────────────────────── */}
      <CtaBand {...supportCta} />
    </>
  );
}
