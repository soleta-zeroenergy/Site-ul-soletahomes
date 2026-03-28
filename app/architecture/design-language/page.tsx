import type { Metadata } from "next";
import Link from "next/link";
import { withCanonical } from "@/lib/seo";
import { designLanguageContent } from "@/lib/content/architecture";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  ...withCanonical("/architecture/design-language"),
  title: "Soleta Design Language | Timber Architecture Aesthetic",
  description:
    "The principles behind Soleta's architectural aesthetic — proportions, materials, light and the exoskeleton system that allows homes to grow.",
};

const cta = {
  eyebrow: "Next",
  heading: "See the construction system",
  body: "How post and beam glulam timber frame turns design into a built reality.",
  primaryCta: { label: "Post & Beam System", href: "/architecture/post-beam" },
  secondaryCta: { label: "View the Collection", href: "/collection" },
  theme: "dark" as const,
};

export default function DesignLanguagePage() {
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
          <span className="eyebrow mb-4 block">{designLanguageContent.eyebrow}</span>
          <h1 className="mb-6 max-w-2xl">{designLanguageContent.heading}</h1>
          <p className="subtitle max-w-xl">{designLanguageContent.intro}</p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-narrow">
          <div className="flex flex-col gap-16">
            {designLanguageContent.sections.map((section, i) => (
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

      <CtaBand {...cta} />
    </>
  );
}
