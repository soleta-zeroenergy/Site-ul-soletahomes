import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { withCanonical } from "@/lib/seo";
import {
  projects,
  categoryMeta,
  getCaseStudyProjects,
  projectHref,
} from "@/lib/content/built-projects";
import { CtaBand } from "@/components/sections/CtaBand";
import { breadcrumbSchema } from "@/lib/structured-data-helpers";

export const metadata: Metadata = {
  ...withCanonical("/built-projects"),
  title:       "Built Projects | Homes We Have Built | Soleta",
  description:
    "More than 86 Soleta homes built across Romania, France, Germany, Austria, and beyond. Explore private residences, holiday homes, hospitality projects, and case studies.",
};

export default function BuiltProjectsPage() {
  const featured     = projects.filter((p) => p.featured);
  const caseStudies  = getCaseStudyProjects().slice(0, 3);

  const schema = breadcrumbSchema([
    { name: "Home",          href: "/" },
    { name: "Built Projects", href: "/built-projects" },
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
          <span className="eyebrow mb-6 block">Built Projects</span>
          <h1 className="mb-6 max-w-2xl">Architecture shaped by place, use, and real life</h1>
          <p className="subtitle max-w-xl">
            Explore homes and timber projects developed across private, hospitality, and public contexts — each one shaped by land, climate, use, and the realities of building well.
          </p>
        </div>
      </section>

      {/* ── 2. Why built work matters ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-site">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <span className="eyebrow mb-4 block">Why Built Work Matters</span>
              <h2
                style={{ fontSize: "clamp(1.625rem, 2.5vw, 2.25rem)", lineHeight: 1.15 }}
              >
                The proof is in what has been built
              </h2>
            </div>
            <div className="flex flex-col gap-5">
              <p className="leading-relaxed text-[var(--color-text-secondary)]">
                We show beautiful homes that truly exist — lived in, weather-tested, and assessed by their owners. Every project listed here has been completed, delivered, and verified.
              </p>
              <p className="leading-relaxed text-[var(--color-text-secondary)]">
                The case studies go further: the brief, the site constraints, the design decisions, and what the owners say now. Useful and honest documentation for anyone planning a similar project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Category navigator ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-site">
          <span className="eyebrow mb-10 block">Browse by Category</span>
          <div className="grid grid-cols-1 gap-px border border-[var(--color-border-light)] bg-[var(--color-border-light)] sm:grid-cols-2">
            {categoryMeta.map((cat) => (
                <Link
                  key={cat.value}
                  href={cat.href}
                  className="group flex flex-col gap-4 bg-[var(--color-bg)] p-8 hover:bg-[var(--soleta-cream)] transition-colors duration-200"
                >
                  <div>
                    <span className="eyebrow">{cat.eyebrow}</span>
                  </div>
                  <h3
                    className="text-[var(--color-text)]"
                    style={{ fontSize: "clamp(1.0625rem, 1.5vw, 1.25rem)", lineHeight: 1.25 }}
                  >
                    {cat.h1}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {cat.subheading}
                  </p>
                  <span className="font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] group-hover:translate-x-1 transition-transform duration-200 inline-block mt-auto">
                    View projects →
                  </span>
                </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Featured projects ── */}
      {featured.length > 0 && (
        <section
          className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
          style={{ backgroundColor: "var(--soleta-cream)" }}
        >
          <div className="container-site">
            <div className="mb-10 flex items-end justify-between gap-8">
              <div>
                <span className="eyebrow mb-4 block">Featured Projects</span>
                <h2
                  style={{ fontSize: "clamp(1.625rem, 2.5vw, 2.25rem)", lineHeight: 1.15 }}
                >
                  Selected recent work
                </h2>
              </div>
            </div>
            <div
              className={`grid grid-cols-1 gap-px border border-[var(--color-border-light)] bg-[var(--color-border-light)] ${
                featured.length === 1
                  ? ""
                  : featured.length === 2
                  ? "md:grid-cols-2"
                  : "md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {featured.map((project) => {
                const cat = categoryMeta.find((c) => c.value === project.category);
                return (
                  <Link
                    key={project.slug}
                    href={projectHref(project)}
                    className="group flex flex-col bg-[var(--color-bg)] hover:bg-white transition-colors duration-200"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-surface)]">
                      <Image
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-8">
                      <div className="mb-4 flex items-center justify-between">
                        <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.12em] text-[var(--color-brand)]">
                          {cat?.label ?? project.category}
                        </span>
                        <span className="font-ui text-[0.625rem] tracking-[0.08em] text-[var(--color-text-muted)]">
                          {project.year}
                        </span>
                      </div>
                      <h3 className="mb-1" style={{ fontSize: "1.25rem" }}>{project.title}</h3>
                      <p className="mb-4 font-ui text-[0.75rem] text-[var(--color-text-muted)]">
                        {[project.location, project.country].filter(Boolean).join(", ")}
                        {project.area && ` · ${project.area}`}
                      </p>
                      <p className="flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                        {project.summary}
                      </p>
                      <span className="mt-6 inline-block font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] group-hover:translate-x-1 transition-transform duration-200">
                        View project →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── 6. What these projects show ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-site">
          <span className="eyebrow mb-10 block">What These Projects Show</span>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                heading: "Adaptability to site",
                body:     "Alpine, lakeside, forest, urban edge. The Soleta system has been configured across all types of European settings. No two sites are the same; no two builds are identical.",
              },
              {
                heading: "Material honesty",
                body:     "Every project follows the same material logic: exposed timber structure, natural cladding chosen for its context, and envelope performance that does not rely on mechanical compensation.",
              },
              {
                heading: "Speed without compromise",
                body:     "Assembly times of 4–12 weeks are common. Not because corners are cut, but because fabrication happens in parallel with site preparation — not sequentially.",
              },
            ].map((item) => (
              <div key={item.heading} className="flex flex-col gap-3 border-t border-[var(--color-border-light)] pt-6">
                <h3
                  className="text-[var(--color-text)]"
                  style={{ fontSize: "1.0625rem", lineHeight: 1.3 }}
                >
                  {item.heading}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Case studies preview ── */}
      {caseStudies.length > 0 && (
        <section
          className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
          style={{ backgroundColor: "var(--soleta-cream)" }}
        >
          <div className="container-site">
            <div className="mb-10 flex items-end justify-between gap-8">
              <div>
                <span className="eyebrow mb-4 block">Case Studies</span>
                <h2
                  style={{ fontSize: "clamp(1.625rem, 2.5vw, 2.25rem)", lineHeight: 1.15 }}
                >
                  The full story behind the build
                </h2>
              </div>
              <Link
                href="/built-projects/case-studies"
                className="hidden md:inline-flex items-center gap-2 font-ui text-[0.6875rem] font-medium uppercase tracking-[0.15em] text-[var(--color-brand)] hover:text-[var(--soleta-ink)] transition-colors duration-200 shrink-0"
              >
                All case studies <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="flex flex-col gap-px border border-[var(--color-border-light)]">
              {caseStudies.map((project) => {
                const cat = categoryMeta.find((c) => c.value === project.category);
                return (
                  <Link
                    key={project.slug}
                    href={projectHref(project)}
                    className="group flex flex-col gap-1 border-b border-[var(--color-border-light)] px-8 py-6 last:border-0 hover:bg-[var(--color-bg)] transition-colors duration-200"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 style={{ fontSize: "1.0625rem" }}>{project.title}</h3>
                      <span className="font-ui text-[0.625rem] text-[var(--color-text-muted)] shrink-0">
                        {cat?.label} · {project.year}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
                      {project.caseStudy!.challenge}
                    </p>
                    <span className="mt-1 font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] group-hover:translate-x-1 transition-transform duration-200 inline-block">
                      Read case study →
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="mt-8 md:hidden">
              <Link href="/built-projects/case-studies" className="btn-outline py-3 px-8">
                All case studies
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── 8. Final CTA ── */}
      <CtaBand
        eyebrow="Start your project"
        heading="Begin your Soleta project"
        body="Tell us about your site, your vision, and your timeline."
        primaryCta={{ label: "Request a Private Offer", href: "/request-private-offer" }}
        secondaryCta={{ label: "Discover the Process",  href: "/process" }}
        theme="dark"
      />
    </>
  );
}
