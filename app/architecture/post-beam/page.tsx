import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { withCanonical } from "@/lib/seo";
import { postBeamContent } from "@/lib/content/architecture";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { breadcrumbSchema } from "@/lib/structured-data-helpers";

export const metadata: Metadata = {
  ...withCanonical("/architecture/post-beam"),
  title: "Post & Beam Construction | Timber Frame System | Soleta",
  description:
    "The glulam post-and-beam timber frame is manufactured in our factory and assembled on your site in just a few days. Full technical specifications and wall build-up.",
};

const schema = breadcrumbSchema([
  { name: "Home",                href: "/" },
  { name: "Architecture & Design", href: "/architecture" },
  { name: "Post & Beam",         href: "/architecture/post-beam" },
]);

export default function PostBeamPage() {
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
            href="/architecture"
            className="eyebrow mb-8 inline-flex items-center gap-2 no-underline opacity-60 hover:opacity-100 transition-opacity"
          >
            ← Architecture & Design
          </Link>
          <span className="eyebrow mb-4 block">{postBeamContent.eyebrow}</span>
          <h1 className="mb-6 max-w-2xl whitespace-pre-line">{postBeamContent.heading}</h1>
          <p className="subtitle max-w-xl">{postBeamContent.intro}</p>
        </div>
      </section>

      {/* ── 2. Hero image ── */}
      <div
        className="relative w-full border-b border-[var(--color-border-light)]"
        style={{ aspectRatio: "3000 / 975" }}
      >
        <Image
          src="https://img.soletahomes.com/hero_post_beam_construction_3000x975.webp"
          alt="Soleta glulam post-and-beam timber structure"
          fill
          priority
          className="object-contain"
          sizes="100vw"
        />
      </div>

      {/* ── 3. Numbered prose sections + per-section images ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="flex flex-col gap-16">
            {postBeamContent.sections.map((section, i) => (
              <div key={i} className="flex flex-col gap-8">
                {/* Numbered prose */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
                  <span
                    className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1"
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>
                      {section.heading}
                    </h2>
                    <p className="leading-relaxed text-[var(--color-text-secondary)]">
                      {section.body}
                    </p>
                  </div>
                </div>
                {/* Section image — 1671×941, full image, no crop */}
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: "1671 / 941" }}
                >
                  <Image
                    src={`https://img.soletahomes.com/${i + 1}-post-beam-structural-frame-1671x941.webp`}
                    alt={`Post and beam structural frame section ${i + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 768px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Technical specs ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-site">
          <span className="eyebrow mb-6 block">Technical specifications</span>
          <h2 className="mb-10" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
            Wall &amp; envelope performance
          </h2>
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

      {/* ── 6. FAQ ── */}
      {postBeamContent.faq && postBeamContent.faq.length > 0 && (
        <section
          className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
          style={{ backgroundColor: "var(--soleta-cream)" }}
        >
          <div className="container-narrow">
            <span className="eyebrow mb-4 block">Questions</span>
            <h2 className="mb-10" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
              About the structural system
            </h2>
            <FaqAccordion items={postBeamContent.faq} />
          </div>
        </section>
      )}

      {/* ── 7. CTA ── */}
      <CtaBand
        eyebrow="Next"
        heading="Healthy materials"
        body="What goes into a Soleta wall and why that matters for the people inside."
        primaryCta={{ label: "Healthy Materials",    href: "/architecture/healthy-materials" }}
        secondaryCta={{ label: "View the Collection", href: "/collection" }}
        theme="dark"
      />
    </>
  );
}
