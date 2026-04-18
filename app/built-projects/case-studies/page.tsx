import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { withCanonical } from "@/lib/seo";
import { getCaseStudyProjects, categoryMeta, projectHref } from "@/lib/content/built-projects";
import { CtaBand } from "@/components/sections/CtaBand";
import { breadcrumbSchema } from "@/lib/structured-data-helpers";

export const metadata: Metadata = {
  ...withCanonical("/built-projects/case-studies"),
  title:       "Case Studies | Built Projects | Soleta",
  description: "In-depth case studies of Soleta homes — the site, the challenge, the design decisions and the outcome.",
};

export default function CaseStudiesPage() {
  const caseStudies = getCaseStudyProjects();

  const schema = breadcrumbSchema([
    { name: "Home",          href: "/" },
    { name: "Built Projects", href: "/built-projects" },
    { name: "Case Studies",  href: "/built-projects/case-studies" },
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
          <span className="eyebrow mb-4 block">Case Studies</span>
          <h1 className="mb-6 max-w-2xl">The full story behind the build</h1>
          <p className="subtitle max-w-xl">
            Each case study documents the site, the challenge, the design decisions and the outcome — in enough detail to be genuinely useful to someone planning a similar project.
          </p>
        </div>
      </section>

      {/* ── 2. What a case study includes ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-site">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "The Site & Brief",              body: "What made the plot unusual. What the client actually needed." },
              { label: "Architectural Response",        body: "How the design solved the site. Which decisions were non-obvious." },
              { label: "Material & Construction Logic", body: "Why those materials. How the system was assembled." },
              { label: "Outcome",                       body: "Performance, cost, timeline. What happened after handover." },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-3">
                <p className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)]">
                  {item.label}
                </p>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Case study grid ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-site">
          {caseStudies.length > 0 ? (
            <div className="flex flex-col gap-px border border-[var(--color-border-light)]">
              {caseStudies.map((project) => {
                const cat = categoryMeta.find((c) => c.value === project.category);
                return (
                  <Link
                    key={project.slug}
                    href={projectHref(project)}
                    className="group grid grid-cols-1 gap-0 border-b border-[var(--color-border-light)] last:border-0 md:grid-cols-[280px_1fr] hover:bg-[var(--color-bg)] transition-colors duration-200"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-surface)] md:aspect-auto md:h-full md:min-h-[200px]">
                      <Image
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-between gap-6 p-8">
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-wrap items-center gap-4">
                          {cat && (
                            <span className="font-ui text-[0.5625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)]">
                              {cat.label}
                            </span>
                          )}
                          <span className="font-ui text-[0.5625rem] text-[var(--color-text-muted)]">
                            {project.year}
                            {project.area && ` · ${project.area}`}
                          </span>
                        </div>
                        <h2
                          className="text-[var(--color-text)]"
                          style={{ fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)", lineHeight: 1.2 }}
                        >
                          {project.title}
                        </h2>
                        <p className="font-ui text-[0.75rem] text-[var(--color-text-muted)]">
                          {[project.location, project.country].filter(Boolean).join(", ")}
                        </p>
                      </div>

                      {/* Challenge snippet */}
                      <div className="flex flex-col gap-2">
                        <p className="font-ui text-[0.5625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                          Challenge
                        </p>
                        <p className="text-sm leading-relaxed text-[var(--color-text-secondary)] max-w-2xl">
                          {project.caseStudy!.challenge}
                        </p>
                      </div>

                      <span className="font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] group-hover:translate-x-1 transition-transform duration-200 inline-block">
                        Read full case study →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="text-[var(--color-text-secondary)]">
                Case studies being prepared — check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── 4. CTA ── */}
      <CtaBand
        eyebrow="Start your project"
        heading="Begin your Soleta project"
        body="Tell us about your site, your vision and your timeline."
        primaryCta={{ label: "Request a Private Offer", href: "/request-private-offer" }}
        secondaryCta={{ label: "View all projects",     href: "/built-projects" }}
        theme="dark"
      />
    </>
  );
}
