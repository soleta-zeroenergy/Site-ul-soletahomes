import type { Metadata } from "next";
import Link from "next/link";
import { withCanonical } from "@/lib/seo";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  ...withCanonical("/services/custom-design"),
  title: "Custom Design | Services | Soleta",
  description: "Full architectural design from first principles. For clients who want a home that is entirely their own — not adapted from a standard model.",
};

const cta = {
  eyebrow: "Start designing",
  heading: "Begin your custom design",
  body: "Tell us about your site and your vision. We will tell you what is possible.",
  primaryCta: { label: "Request a Private Offer", href: "/contact" },
  secondaryCta: { label: "View Custom Architecture", href: "/collection/custom-architecture" },
  theme: "dark",
};

export default function CustomDesignPage() {
  return (
    <>
      <section
        className="section-lg border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <Link href="/process" className="eyebrow mb-6 inline-flex items-center gap-2 hover:opacity-70 transition-opacity">
            ← Process & Services
          </Link>
          <span className="eyebrow mb-4 block">Custom Design</span>
          <h1 className="mb-6 max-w-2xl">Architecture from first principles</h1>
          <p className="subtitle max-w-xl">
            Full architectural design service for clients who want a home that is entirely their own. We start from your site, your brief and your way of living — not from a catalogue.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_340px]">
            <div className="flex flex-col gap-8">
              <div>
                <span className="eyebrow mb-4 block">What custom design means</span>
                <div className="flex flex-col gap-4 text-[var(--color-text-secondary)]">
                  <p className="leading-relaxed">Custom Design is for clients who arrive with a vision — or a site — rather than a model preference. Perhaps you have imagined something specific that none of our standard collections quite captures. Perhaps your site has unusual constraints that demand a bespoke solution. Perhaps you simply want a home that is entirely yours.</p>
                  <p className="leading-relaxed">We begin with an extended discovery process — studying the land, the light, the views, the local planning context and your brief in detail. We produce concept options — typically two or three distinct approaches — before committing to a direction. You choose, and we develop.</p>
                  <p className="leading-relaxed">The output is a complete architectural package: floor plans, elevations, sections, 3D visualisations and a full material specification. This package goes directly to our engineering team and then to our factory — no third parties, no translation errors.</p>
                </div>
              </div>

              <div>
                <span className="eyebrow mb-4 block">Design deliverables</span>
                <ul className="flex flex-col gap-3">
                  {[
                    "Site analysis — orientation, views, constraints, opportunities",
                    "Concept options — 2 to 3 distinct design directions",
                    "Developed design — floor plans, elevations, sections at 1:100",
                    "Detailed drawings — key junctions and details at 1:20 and 1:10",
                    "3D visualisations — exterior and key interior spaces",
                    "Material specification — complete schedule of finishes",
                    "Engineering-ready drawing package",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                      <span className="mt-1 h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--color-brand)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside>
              <div className="border border-[var(--color-border-light)] p-8" style={{ backgroundColor: "var(--soleta-cream)" }}>
                <span className="eyebrow mb-6 block">Service details</span>
                <dl className="flex flex-col gap-5">
                  {[
                    { label: "Duration", value: "8–16 weeks depending on complexity" },
                    { label: "Revision rounds", value: "Unlimited within agreed scope" },
                    { label: "Who leads", value: "Senior architect + design team" },
                    { label: "Output format", value: "PDF drawings + 3D files + material schedule" },
                    { label: "Next stage", value: "Engineering and manufacturing" },
                  ].map((spec) => (
                    <div key={spec.label} className="border-b border-[var(--color-border-light)] pb-5 last:border-0 last:pb-0">
                      <dt className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.12em] text-[var(--color-text-muted)] mb-1">{spec.label}</dt>
                      <dd className="font-ui text-sm text-[var(--color-text)]">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand {...cta} />
    </>
  );
}
