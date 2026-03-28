import type { Metadata } from "next";
import Link from "next/link";
import { withCanonical } from "@/lib/seo";
import { postBeamContent } from "@/lib/content/architecture";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  ...withCanonical("/architecture/post-beam"),
  title: "Post & Beam Construction | Timber Frame System | Soleta",
  description:
    "Glulam post and beam timber frame — manufactured in our factory, assembled on your site in days. Full technical specifications and wall build-up.",
};

const cta = {
  eyebrow: "Next",
  heading: "Healthy materials",
  body: "What goes into a Soleta wall — and why it matters for the people inside.",
  primaryCta: { label: "Healthy Materials", href: "/architecture/healthy-materials" },
  secondaryCta: { label: "View the Collection", href: "/collection" },
  theme: "dark" as const,
};

export default function PostBeamPage() {
  return (
    <>
      <section
        className="section-lg border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <Link href="/architecture" className="eyebrow mb-6 inline-flex items-center gap-2 hover:opacity-70 transition-opacity">
            ← Architecture & Design
          </Link>
          <span className="eyebrow mb-4 block">{postBeamContent.eyebrow}</span>
          <h1 className="mb-6 max-w-2xl whitespace-pre-line">{postBeamContent.heading}</h1>
          <p className="subtitle max-w-xl">{postBeamContent.intro}</p>
        </div>
      </section>

      {/* Sections */}
      <section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-narrow">
          <div className="flex flex-col gap-16">
            {postBeamContent.sections.map((section, i) => (
              <div key={i} className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
                <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] pt-1">
                  0{i + 1}
                </span>
                <div>
                  <h2 className="mb-4 text-[1.5rem]">{section.heading}</h2>
                  <p className="leading-relaxed text-[var(--color-text-secondary)]">{section.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical specs */}
      <section
        className="section border-t border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-site">
          <span className="eyebrow mb-6 block">Technical specifications</span>
          <h2 className="mb-10 text-[2rem]">Wall & envelope performance</h2>
          <dl className="grid grid-cols-1 gap-px bg-[var(--color-border-light)] sm:grid-cols-2 lg:grid-cols-4">
            {postBeamContent.specs.map((spec) => (
              <div
                key={spec.label}
                className="flex flex-col gap-2 bg-[var(--soleta-cream)] p-8"
              >
                <dt className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                  {spec.label}
                </dt>
                <dd className="font-heading text-[1.5rem] text-[var(--color-text)]">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand {...cta} />
    </>
  );
}
