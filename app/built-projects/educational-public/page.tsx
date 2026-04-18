import type { Metadata } from "next";
import Link from "next/link";
import { withCanonical } from "@/lib/seo";
import { projects, getCategoryMeta, getCaseStudyProjects, projectHref } from "@/lib/content/built-projects";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { breadcrumbSchema } from "@/lib/structured-data-helpers";

const CATEGORY = "educational-public" as const;
const meta     = getCategoryMeta(CATEGORY);

export const metadata: Metadata = {
  ...withCanonical(meta.href),
  title:       "Educational & Public | Built Projects | Soleta",
  description: "Soleta educational and public buildings — timber architecture for schools, kindergartens, community centres and public spaces.",
};

export default function EducationalPublicPage() {
  const categoryProjects = projects.filter((p) => p.category === CATEGORY);
  const relatedStudies   = getCaseStudyProjects().filter((p) => p.category === CATEGORY);

  const gridItems = categoryProjects.map((p) => ({
    imageSrc:  p.imageSrc,
    imageAlt:  p.imageAlt,
    title:     p.title,
    location:  [p.location, p.country].filter(Boolean).join(", "),
    category:  p.model ?? meta.label,
    year:      p.year,
    href:      projectHref(p),
  }));

  const schema = breadcrumbSchema([
    { name: "Home",           href: "/" },
    { name: "Built Projects", href: "/built-projects" },
    { name: meta.label,       href: meta.href },
  ]);

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
            href="/built-projects"
            className="eyebrow mb-8 inline-flex items-center gap-2 no-underline opacity-60 hover:opacity-100 transition-opacity"
          >
            ← Built Projects
          </Link>
          <span className="eyebrow mb-4 block">{meta.eyebrow}</span>
          <h1 className="mb-6 max-w-2xl">{meta.h1}</h1>
          <p className="subtitle max-w-xl">{meta.subheading}</p>
        </div>
      </section>

      {/* ── 2. Project grid ── */}
      {categoryProjects.length > 0 ? (
        <ProjectGrid projects={gridItems} theme="dark" />
      ) : (
        <section className="py-24" style={{ backgroundColor: "var(--color-bg)" }}>
          <div className="container-site text-center">
            <p className="mb-8 text-[var(--color-text-secondary)]">
              New projects being added — check back soon.
            </p>
            <Link href="/contact" className="btn-primary">
              Start a Conversation
            </Link>
          </div>
        </section>
      )}

      {/* ── 3. Related case studies ── */}
      {relatedStudies.length > 0 && (
        <section
          className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
          style={{ backgroundColor: "var(--soleta-cream)" }}
        >
          <div className="container-site">
            <span className="eyebrow mb-4 block">In Depth</span>
            <h2
              className="mb-10"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
            >
              Case studies from this category
            </h2>
            <div className="flex flex-col gap-px border border-[var(--color-border-light)]">
              {relatedStudies.map((p) => (
                <Link
                  key={p.slug}
                  href={projectHref(p)}
                  className="group flex flex-col gap-1 border-b border-[var(--color-border-light)] px-8 py-6 last:border-0 hover:bg-[var(--color-bg)] transition-colors duration-200"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-[1.0625rem]">{p.title}</h3>
                    <span className="font-ui text-[0.625rem] text-[var(--color-text-muted)] shrink-0">{p.year}</span>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
                    {p.caseStudy!.challenge}
                  </p>
                  <span className="mt-1 font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] group-hover:translate-x-1 transition-transform duration-200 inline-block">
                    Read case study →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 4. CTA ── */}
      <CtaBand
        eyebrow={meta.cta.heading}
        heading={meta.cta.heading}
        body={meta.cta.body}
        primaryCta={{ label: meta.cta.primary,    href: "/contact" }}
        secondaryCta={{ label: meta.cta.secondary, href: "/built-projects" }}
        theme="dark"
      />
    </>
  );
}
