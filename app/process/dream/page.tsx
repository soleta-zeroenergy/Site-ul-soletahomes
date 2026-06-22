import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { withCanonical } from "@/lib/seo";
import { processSteps } from "@/lib/content/process-services";
import { CtaBand } from "@/components/sections/CtaBand";
import { breadcrumbSchema } from "@/lib/structured-data-helpers";

export const metadata: Metadata = {
  ...withCanonical("/process/dream"),
  title: "Dream — Stage 1 | Process & Services | Soleta",
  description:
    "The first conversation — understanding your site, your vision, and your brief. No sales pitch. An honest assessment of what is feasible before any commitment.",
};

const step     = processSteps[0];
const nextStep = processSteps[1];

const schema = breadcrumbSchema([
  { name: "Home",               href: "/" },
  { name: "Process & Services", href: "/process" },
  { name: step.label,           href: step.href },
]);

export default function DreamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── 1. Page header ── */}
      <section
        className="border-b border-[var(--color-border-light)] px-0 pt-12 pb-10 lg:pt-16 lg:pb-14"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <Link
            href="/process"
            className="eyebrow mb-8 inline-flex items-center gap-2 no-underline opacity-60 hover:opacity-100 transition-opacity"
          >
            ← Process & Services
          </Link>
          <span className="eyebrow mb-2 block">{step.number} — {step.label}</span>
          <h1 className="mb-6 max-w-2xl">{step.heading}</h1>
          <p className="subtitle max-w-xl">{step.description}</p>
        </div>
      </section>

      {/* ── 2. Hero image ── */}
      <div
        className="relative w-full border-b border-[var(--color-border-light)]"
        style={{ aspectRatio: "3000 / 975" }}
      >
        <Image
          src="https://img.soletahomes.com/hero_dream_3000x975.webp"
          alt="Soleta — beginning with the site and the conversation"
          fill
          priority
          className="object-contain"
          sizes="100vw"
        />
      </div>

      {/* ── 3. What happens ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="flex flex-col gap-14">

            <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
              <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">01</span>
              <div>
                <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>Site first, brief second</h2>
                <p className="leading-relaxed text-[var(--color-text-secondary)]">
                  We begin by understanding your site — its location, orientation, topography, access, planning context, and any known constraints. The site is not background information; it is the starting point of design. A brief developed without a clear site tends to produce a home that is adapted later, not designed correctly from the beginning.
                </p>
              </div>
            </div>

            {/* Image A — 1537×939, after "Site first, brief second" */}
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "1537 / 939" }}
            >
              <Image
                src="https://img.soletahomes.com/dream-site-first-brief-second-1537x939.webp"
                alt="Soleta site analysis before the first design brief"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 768px"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
              <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">02</span>
              <div>
                <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>Understanding how you live</h2>
                <p className="leading-relaxed text-[var(--color-text-secondary)]">
                  We ask about your household: who lives there now, who might live there in five or ten years, how you use space, whether you work from home, how you host guests, and what privacy means to you. These questions shape the brief more than any reference image. A home that fits the way you actually live is more valuable than one that fits a catalogue.
                </p>
              </div>
            </div>

            {/* Image B — 1536×1024, after "Understanding how you live" */}
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "1536 / 1024" }}
            >
              <Image
                src="https://img.soletahomes.com/dream-first-conversation-brief-1536x1024.webp"
                alt="Soleta first conversation and project brief"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 768px"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
              <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">03</span>
              <div>
                <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>An honest assessment, not a pitch</h2>
                <p className="leading-relaxed text-[var(--color-text-secondary)]">
                  At the end of the Dream stage, we tell you which path fits your brief — a collection model, an adapted design, or a fully custom home — and what the budget range looks like for each. If the numbers do not work, we say so. If the timeline is tighter than you expect, we say that too. The Dream stage exists to give you clarity, not to lock you into anything.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. What you receive ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-6 block">What you receive</span>
          <ul className="flex flex-col gap-4">
            {step.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-4 border-b border-[var(--color-border-light)] pb-4 last:border-0 last:pb-0">
                <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-[var(--color-brand)]" />
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 5. What this stage depends on ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
            <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">Note</span>
            <div>
              <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>What helps you get the most from this stage</h2>
              <p className="leading-relaxed text-[var(--color-text-secondary)]">
                The more clearly you can describe your site — ideally with a cadastral plan, photos, and a rough sense of orientation — the more useful the Dream conversation will be. Budget clarity, even approximate, helps us recommend the right path honestly. If your site has known planning constraints or is in a sensitive area, bring that information too. We cannot tell you what the authority will decide, but we can tell you what questions to ask.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Indicative timing ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
            <span className="eyebrow md:pt-1">Indicative timing</span>
            <p className="leading-relaxed text-[var(--color-text-secondary)]">
              The Dream stage typically takes one to two weeks from the first conversation to the signing of the project brief — longer if you need time to gather site information or align with your partner or family. There is no pressure to move quickly. The project moves into Design &amp; Planning only when you are ready to proceed.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. Navigation + CTA ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-10 lg:py-12"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow flex flex-wrap items-center justify-between gap-6">
          <Link
            href="/process"
            className="eyebrow opacity-60 hover:opacity-100 transition-opacity no-underline"
          >
            ← Back to Process overview
          </Link>
          <Link
            href={nextStep.href}
            className="font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] hover:opacity-70 transition-opacity"
          >
            Next: {nextStep.number} {nextStep.label} →
          </Link>
        </div>
      </section>

      <CtaBand
        eyebrow="Start here"
        heading="Begin the conversation"
        body="Tell us about your site and your vision. The first conversation carries no obligation."
        primaryCta={{ label: "Request a Private Consultation", href: "/request-private-offer" }}
        secondaryCta={{ label: "Back to Process overview", href: "/process" }}
        theme="dark"
      />
    </>
  );
}
