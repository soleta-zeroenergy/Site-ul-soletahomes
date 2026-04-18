import Link from "next/link";
import Image from "next/image";
import { ImageGallery } from "@/components/ui/ImageGallery";
import { CtaBand } from "@/components/sections/CtaBand";
import { breadcrumbSchema } from "@/lib/structured-data-helpers";
import {
  type BuiltProject,
  type CategoryMeta,
  findProjectBySlug,
  projectHref,
} from "@/lib/content/built-projects";

/* ─────────────────────────────────────────────────────────────────────────────
   ProjectPageTemplate — shared server component for all individual project pages.
   Category [slug]/page.tsx files are thin wrappers that supply project + meta.
   ───────────────────────────────────────────────────────────────────────────── */

export function ProjectPageTemplate({
  project,
  category,
}: {
  project: BuiltProject;
  category: CategoryMeta;
}) {
  const related = (project.relatedSlugs ?? [])
    .map(findProjectBySlug)
    .filter((p): p is BuiltProject => p !== undefined);

  const hasGallery    = Array.isArray(project.gallery)      && project.gallery.length > 0;
  const hasSiteBrief  = Array.isArray(project.siteBrief)    && project.siteBrief.length > 0;
  const hasArchResp   = Array.isArray(project.archResponse) && project.archResponse.length > 0;
  const hasMaterial   = Array.isArray(project.materialLogic) && project.materialLogic.length > 0;
  const hasOutcome    = Array.isArray(project.outcome)      && project.outcome.length > 0;
  const hasCaseStudy  = project.caseStudy !== undefined;

  const crumbs = breadcrumbSchema([
    { name: "Home",                href: "/" },
    { name: "Built Projects",      href: "/built-projects" },
    { name: category.label,        href: category.href },
    { name: project.title,         href: projectHref(project) },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />

      <article>

        {/* ── 1. Page header ──────────────────────────────────────────────── */}
        <section
          className="border-b border-[var(--color-border-light)] px-0 pt-12 pb-10 lg:pt-16 lg:pb-14"
          style={{ backgroundColor: "var(--soleta-cream)" }}
        >
          <div className="container-narrow">
            <Link
              href={category.href}
              className="eyebrow mb-8 inline-flex items-center gap-2 no-underline opacity-60 hover:opacity-100 transition-opacity"
            >
              ← {category.label}
            </Link>
            <div className="mb-4 flex flex-wrap items-center gap-4">
              <span className="eyebrow">{category.eyebrow}</span>
              <span className="font-ui text-[0.625rem] text-[var(--color-text-muted)]">
                {project.year}
              </span>
              {project.status === "in-progress" && (
                <span className="font-ui text-[0.5625rem] font-medium uppercase tracking-[0.12em] bg-[var(--color-brand)] text-white px-2 py-0.5">
                  In Progress
                </span>
              )}
            </div>
            <h1 className="mb-3 max-w-2xl">{project.title}</h1>
            <p className="font-ui text-sm text-[var(--color-text-muted)]">
              {[project.location, project.country].filter(Boolean).join(", ")}
              {project.area    && ` · ${project.area}`}
              {project.model   && ` · ${project.model}`}
              {project.setting && ` · ${project.setting}`}
            </p>
          </div>
        </section>

        {/* ── 2. Hero image ────────────────────────────────────────────────── */}
        <div
          className="relative w-full overflow-hidden border-b border-[var(--color-border-light)]"
          style={{ height: "clamp(260px, 38vw, 520px)" }}
        >
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* ── 3. Facts strip ───────────────────────────────────────────────── */}
        <section
          className="border-b border-[var(--color-border-light)] py-8"
          style={{ backgroundColor: "var(--soleta-cream)" }}
        >
          <div className="container-site">
            <dl className="flex flex-wrap gap-x-12 gap-y-4">
              {project.specs.map((spec) => (
                <div key={spec.label} className="flex flex-col gap-0.5">
                  <dt className="font-ui text-[0.5625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                    {spec.label}
                  </dt>
                  <dd className="font-ui text-sm text-[var(--color-text)]">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── 4. Introduction / description ───────────────────────────────── */}
        <section
          className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <div className="container-site">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_320px]">
              <div className="flex flex-col gap-6">
                <span className="eyebrow block">About this project</span>
                {project.description.map((para, i) => (
                  <p key={i} className="leading-relaxed text-[var(--color-text-secondary)]">
                    {para}
                  </p>
                ))}
              </div>
              {/* Summary sidebar on large screens */}
              <aside>
                <div
                  className="border border-[var(--color-border-light)] p-8"
                  style={{ backgroundColor: "var(--soleta-cream)" }}
                >
                  <p className="eyebrow mb-3 block">Summary</p>
                  <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {project.summary}
                  </p>
                  {project.setting && (
                    <p className="mt-4 font-ui text-[0.625rem] font-medium uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                      {project.setting} setting
                    </p>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── 5. Site & Brief ─────────────────────────────────────────────── */}
        {hasSiteBrief && (
          <section
            className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
            style={{ backgroundColor: "var(--soleta-cream)" }}
          >
            <div className="container-narrow">
              <span className="eyebrow mb-6 block">The Site & Brief</span>
              <div className="flex flex-col gap-5">
                {project.siteBrief!.map((para, i) => (
                  <p key={i} className="leading-relaxed text-[var(--color-text-secondary)]">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 6. Architectural Response ────────────────────────────────────── */}
        {hasArchResp && (
          <section
            className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
            style={{ backgroundColor: "var(--color-bg)" }}
          >
            <div className="container-narrow">
              <span className="eyebrow mb-6 block">Architectural Response</span>
              <div className="flex flex-col gap-5">
                {project.archResponse!.map((para, i) => (
                  <p key={i} className="leading-relaxed text-[var(--color-text-secondary)]">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 7. Material & Construction Logic ─────────────────────────────── */}
        {hasMaterial && (
          <section
            className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
            style={{ backgroundColor: "var(--soleta-cream)" }}
          >
            <div className="container-narrow">
              <span className="eyebrow mb-6 block">Material & Construction Logic</span>
              <div className="flex flex-col gap-5">
                {project.materialLogic!.map((para, i) => (
                  <p key={i} className="leading-relaxed text-[var(--color-text-secondary)]">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 8. Gallery ────────────────────────────────────────────────────── */}
        {hasGallery && (
          <section
            className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
            style={{ backgroundColor: "var(--color-bg)" }}
          >
            <div className="container-narrow">
              <span className="eyebrow mb-6 block">Gallery</span>
              <ImageGallery images={project.gallery!} />
            </div>
          </section>
        )}

        {/* ── 9. Testimonial ────────────────────────────────────────────────── */}
        {project.testimonial && (
          <section
            className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
            style={{ backgroundColor: "var(--soleta-cream)" }}
          >
            <div className="container-narrow">
              <blockquote className="border-l-2 border-[var(--color-brand)] pl-8">
                <p
                  className="font-heading italic leading-relaxed text-[var(--color-text)]"
                  style={{ fontSize: "clamp(1.25rem, 2vw, 1.625rem)" }}
                >
                  "{project.testimonial.quote}"
                </p>
                <footer className="mt-4 font-ui text-[0.6875rem] uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                  — {project.testimonial.author}
                </footer>
              </blockquote>
            </div>
          </section>
        )}

        {/* ── 10. Outcome ──────────────────────────────────────────────────── */}
        {hasOutcome && (
          <section
            className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
            style={{ backgroundColor: "var(--color-bg)" }}
          >
            <div className="container-narrow">
              <span className="eyebrow mb-6 block">Outcome</span>
              <div className="flex flex-col gap-5">
                {project.outcome!.map((para, i) => (
                  <p key={i} className="leading-relaxed text-[var(--color-text-secondary)]">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 11. Case Study Highlights (conditional) ────────────────────── */}
        {hasCaseStudy && (
          <section
            className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
            style={{ backgroundColor: "var(--soleta-cream)" }}
          >
            <div className="container-narrow">
              <span className="eyebrow mb-6 block">Case Study</span>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div>
                  <p className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-text-muted)] mb-3">
                    Challenge
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {project.caseStudy!.challenge}
                  </p>
                </div>
                <div>
                  <p className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-text-muted)] mb-3">
                    Approach
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {project.caseStudy!.approach}
                  </p>
                </div>
                <div>
                  <p className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-text-muted)] mb-3">
                    Outcome
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {project.caseStudy!.outcome}
                  </p>
                </div>
              </div>
              {project.caseStudy!.highlights && project.caseStudy!.highlights.length > 0 && (
                <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 border-t border-[var(--color-border-light)] pt-8">
                  {project.caseStudy!.highlights.map((hl, i) => (
                    <li
                      key={i}
                      className="font-ui text-[0.6875rem] text-[var(--color-text-secondary)] leading-snug"
                    >
                      <span
                        aria-hidden="true"
                        className="mr-2 text-[var(--color-brand)]"
                      >
                        —
                      </span>
                      {hl}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        )}

        {/* ── 12. Related projects ─────────────────────────────────────────── */}
        {related.length > 0 && (
          <section
            className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
            style={{ backgroundColor: "var(--color-bg)" }}
          >
            <div className="container-site">
              <span className="eyebrow mb-4 block">Related Projects</span>
              <h2
                className="mb-10"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
              >
                You may also like
              </h2>
              <div
                className={`grid grid-cols-1 gap-px border border-[var(--color-border-light)] bg-[var(--color-border-light)] ${
                  related.length === 1
                    ? "md:grid-cols-1 max-w-md"
                    : related.length === 2
                    ? "md:grid-cols-2"
                    : "md:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={projectHref(rel)}
                    className="group flex flex-col bg-[var(--color-bg)] hover:bg-[var(--soleta-cream)] transition-colors duration-200"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-surface)]">
                      <Image
                        src={rel.imageSrc}
                        alt={rel.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="p-6">
                      <span className="eyebrow mb-2 block">{rel.location}{rel.country ? `, ${rel.country}` : ""}</span>
                      <h3 className="mb-1" style={{ fontSize: "1.125rem" }}>{rel.title}</h3>
                      <p className="font-ui text-[0.75rem] text-[var(--color-text-muted)]">
                        {rel.year}{rel.area ? ` · ${rel.area}` : ""}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 13. Final CTA ────────────────────────────────────────────────── */}
        <CtaBand
          eyebrow="Start your project"
          heading="Begin your Soleta project"
          body="Tell us about your site, your vision and your timeline."
          primaryCta={{ label: "Request a Private Offer", href: "/request-private-offer" }}
          secondaryCta={{ label: "View all projects",     href: "/built-projects" }}
          theme="dark"
        />

      </article>
    </>
  );
}
