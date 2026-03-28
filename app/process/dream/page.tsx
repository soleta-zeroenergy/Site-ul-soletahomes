import type { Metadata } from "next";
import Link from "next/link";
import { withCanonical } from "@/lib/seo";
import { processSteps } from "@/lib/content/process-services";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  ...withCanonical("/process/dream"),
  title: "Dream — Step 1 | Process | Soleta",
  description: "The first conversation — understanding your site, your vision and your budget. No sales pitch, no obligation.",
};

const step = processSteps[0];
const nextStep = processSteps[1];

const cta = {
  eyebrow: "Ready to start",
  heading: "Begin the conversation",
  body: "Tell us about your site and your vision. The first conversation is free and carries no obligation.",
  primaryCta: { label: "Request a Private Offer", href: "/contact" },
  secondaryCta: { label: "View the Collection", href: "/collection" },
  theme: "dark",
};

export default function DreamPage() {
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
          <div className="mb-4 flex items-baseline gap-4">
            <span className="font-heading text-[3rem] leading-none text-[var(--color-brand)] opacity-20">{step.number}</span>
            <span className="eyebrow">{step.label}</span>
          </div>
          <h1 className="mb-6 max-w-2xl">{step.heading}</h1>
          <p className="subtitle max-w-xl">{step.description}</p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_340px]">
            <div className="flex flex-col gap-8">
              <div>
                <span className="eyebrow mb-4 block">What happens in this step</span>
                <div className="flex flex-col gap-4 text-[var(--color-text-secondary)]">
                  <p className="leading-relaxed">We begin with a structured conversation — typically 60 to 90 minutes, by video or in person. We ask about your site (location, size, access, orientation), your vision (the home you have imagined), how you live (family size, work from home, entertaining) and what matters most to you.</p>
                  <p className="leading-relaxed">We listen before we suggest. At the end of the conversation, we give you an honest assessment of what is feasible — which collection best fits your brief, what the budget range looks like, and what the likely timeline would be. No sales pressure, no obligation.</p>
                  <p className="leading-relaxed">If both sides want to proceed, we prepare a formal project brief and model recommendation — the starting point for the Design & Planning stage.</p>
                </div>
              </div>

              <div>
                <span className="eyebrow mb-4 block">What to prepare</span>
                <ul className="flex flex-col gap-3">
                  {["Site details — location, size, orientation, access", "A rough sense of your budget range", "Photos or sketches of homes you admire", "Your timeline — when do you want to move in?", "Any planning constraints you are aware of"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                      <span className="mt-1 h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--color-brand)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="flex flex-col gap-8">
              <div className="border border-[var(--color-border-light)] p-8" style={{ backgroundColor: "var(--soleta-cream)" }}>
                <span className="eyebrow mb-6 block">Step summary</span>
                <dl className="flex flex-col gap-5">
                  <div className="border-b border-[var(--color-border-light)] pb-5">
                    <dt className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.12em] text-[var(--color-text-muted)] mb-1">Duration</dt>
                    <dd className="font-ui text-sm text-[var(--color-text)]">{step.duration}</dd>
                  </div>
                  <div>
                    <dt className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.12em] text-[var(--color-text-muted)] mb-3">What you receive</dt>
                    <dd>
                      <ul className="flex flex-col gap-2">
                        {step.deliverable.split(" · ").map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                            <span className="mt-1 h-[4px] w-[4px] shrink-0 rounded-full bg-[var(--color-brand)]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="border border-[var(--color-border-light)] p-8" style={{ backgroundColor: "var(--soleta-cream)" }}>
                <span className="eyebrow mb-4 block">Next step</span>
                <h3 className="mb-2 text-[1.125rem]">{nextStep.label}</h3>
                <p className="mb-4 text-sm text-[var(--color-text-secondary)]">{nextStep.heading}</p>
                <Link href={nextStep.href} className="font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] hover:opacity-70 transition-opacity">
                  {nextStep.number} {nextStep.label} →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand {...cta} />
    </>
  );
}
