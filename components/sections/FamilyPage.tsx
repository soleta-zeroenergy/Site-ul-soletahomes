import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { FloorPlanModal } from "@/components/ui/FloorPlanModal";
import { ImageGallery } from "@/components/ui/ImageGallery";
import type { HomeModel } from "@/lib/content/collection-models";

/* ─────────────────────────────────────────────────────────────────────────────
   FamilyPage — shared server component for Signature / Classic / Holiday & Retreat
   All sections are conditional; nothing renders empty or broken.
   ───────────────────────────────────────────────────────────────────────────── */

export function FamilyPage({ model }: { model: HomeModel }) {
  const showPrice  = model.priceDisplay === "shown";
  const hasGallery = Array.isArray(model.gallery) && model.gallery.length > 0;
  const hasFloors  = Array.isArray(model.floorPlans) && model.floorPlans.length > 0;

  const variantCols =
    model.variants.length >= 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : model.variants.length === 3
      ? "grid-cols-1 sm:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2";

  return (
    <article>

      {/* ── 1. Page header ────────────────────────────────────────────────── */}
      {/* Padding: controlled (not section-lg which adds 11rem at desktop)     */}
      <section
        className="border-b border-[var(--color-border-light)] px-0 pt-12 pb-10 lg:pt-16 lg:pb-14"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <Link
            href="/collection"
            className="eyebrow mb-8 inline-flex items-center gap-2 no-underline opacity-60 hover:opacity-100 transition-opacity"
          >
            ← The Collection
          </Link>
          <span className="eyebrow mb-4 block">{model.eyebrow}</span>
          <h1 className="mb-6 max-w-2xl whitespace-pre-line">{model.heading}</h1>
          <p className="subtitle max-w-xl mb-10">{model.subheading}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/request-private-offer" className="btn-primary">
              Request a Private Offer
            </Link>
            <Link href="/catalog" className="btn-outline">
              Download Catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Hero image ─────────────────────────────────────────────────── */}
      {/* Height capped — avoids the enormous full-width aspect-ratio band      */}
      {model.heroImageSrc && (
        <div
          className="relative w-full overflow-hidden"
          style={{ height: "clamp(260px, 38vw, 520px)" }}
        >
          <Image
            src={model.heroImageSrc}
            alt={model.heroImageAlt ?? model.eyebrow}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      )}

      {/* ── 3. About this collection + key specs sidebar ──────────────────── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-site">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_340px]">

            {/* Description */}
            <div>
              <span className="eyebrow mb-6 block">About this collection</span>
              <div className="flex flex-col gap-5">
                {model.description.map((para, i) => (
                  <p
                    key={i}
                    className="leading-relaxed text-[var(--color-text-secondary)]"
                    style={{ fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)" }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Key specs sidebar */}
            <aside>
              <div
                className="border border-[var(--color-border-light)] p-8"
                style={{ backgroundColor: "var(--soleta-cream)" }}
              >
                <span className="eyebrow mb-6 block">Key specifications</span>
                <dl className="flex flex-col gap-4">
                  {model.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex flex-col gap-1 border-b border-[var(--color-border-light)] pb-4 last:border-0 last:pb-0"
                    >
                      <dt className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                        {spec.label}
                      </dt>
                      <dd className="font-ui text-sm text-[var(--color-text)]">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ── 4. Image gallery (conditional — only renders when gallery is populated) */}
      {hasGallery && (
        <section
          className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
          style={{ backgroundColor: "var(--soleta-cream)" }}
        >
          <div className="container-narrow">
            <span className="eyebrow mb-6 block">Gallery</span>
            <ImageGallery images={model.gallery!} />
          </div>
        </section>
      )}

      {/* ── 5. Floor plans (conditional — only renders when assets exist) ──── */}
      {hasFloors && (
        <section
          className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
          style={{ backgroundColor: hasGallery ? "var(--color-bg)" : "var(--soleta-cream)" }}
        >
          <div className="container-site">
            <span className="eyebrow mb-4 block">Floor plans</span>
            <h2
              className="mb-10 max-w-lg"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.15 }}
            >
              Click any plan to enlarge
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {model.floorPlans!.map((plan) => (
                <FloorPlanModal
                  key={plan.variantName}
                  src={plan.src}
                  alt={plan.alt ?? `${model.eyebrow} — ${plan.variantName} floor plan`}
                  label={plan.label ?? plan.variantName}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 6. Who it is for (conditional) ───────────────────────────────── */}
      {model.audience && model.audience.length > 0 && (
        <section
          className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <div className="container-narrow">
            <span className="eyebrow mb-4 block">Who it is for</span>
            <h2
              className="mb-8 max-w-lg"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.15 }}
            >
              Designed for a specific way of living
            </h2>
            <ul className="flex flex-col gap-4">
              {model.audience.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 border-l-2 border-[var(--color-brand)] pl-5 leading-relaxed text-[var(--color-text-secondary)]"
                  style={{ fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── 7. Available configurations (variants) ────────────────────────── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-site">
          <span className="eyebrow mb-4 block">Available sizes</span>
          <h2
            className="mb-10 max-w-lg"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.15 }}
          >
            Choose your configuration
          </h2>

          <div className={cn("grid gap-px bg-[var(--color-border-light)] border border-[var(--color-border-light)]", variantCols)}>
            {model.variants.map((variant) => (
              <div
                key={variant.name}
                className="flex flex-col gap-3 bg-[var(--soleta-cream)] p-8"
              >
                <span
                  className="font-heading text-[1.375rem] text-[var(--color-text)]"
                  style={{ lineHeight: 1.2 }}
                >
                  {variant.name}
                </span>
                <span className="font-ui text-sm text-[var(--color-text-secondary)]">
                  {variant.area}
                </span>
                <span className="font-ui text-sm text-[var(--color-text-muted)]">
                  {variant.bedrooms}
                </span>

                {showPrice ? (
                  <span className="mt-2 font-ui text-sm font-medium text-[var(--color-text)]">
                    {variant.price}
                  </span>
                ) : (
                  <span className="mt-2 font-ui text-[0.75rem] text-[var(--color-text-muted)]">
                    Private offer on request
                  </span>
                )}

                <Link
                  href="/contact"
                  className="mt-2 inline-flex items-center gap-1 font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] transition-opacity duration-200 hover:opacity-70"
                >
                  Request offer →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Architectural idea / differentiators (conditional) ─────────── */}
      {model.differentiators && model.differentiators.length > 0 && (
        <section
          className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <div className="container-site">
            <span className="eyebrow mb-4 block">Architectural thinking</span>
            <h2
              className="mb-12 max-w-lg"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.15 }}
            >
              What defines this collection
            </h2>
            <div className="grid grid-cols-1 gap-px bg-[var(--color-border-light)] border border-[var(--color-border-light)] sm:grid-cols-2">
              {model.differentiators.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-3 bg-[var(--color-bg)] p-8"
                >
                  <h3
                    className="font-heading text-[1.125rem] text-[var(--color-text)]"
                    style={{ lineHeight: 1.3 }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed text-[var(--color-text-secondary)]"
                    style={{ fontSize: "clamp(0.875rem, 1vw, 0.9375rem)" }}
                  >
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 9. What can be adapted (customizable, conditional) ───────────── */}
      {model.customizable && model.customizable.length > 0 && (
        <section
          className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
          style={{ backgroundColor: "var(--soleta-cream)" }}
        >
          <div className="container-narrow">
            <span className="eyebrow mb-4 block">What can be adapted</span>
            <h2
              className="mb-8 max-w-lg"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.15 }}
            >
              Every project adjusts to its site and brief
            </h2>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {model.customizable.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-text-secondary)]"
                >
                  <span className="mt-[0.4rem] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--color-brand)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── 10. Includes / Not included ──────────────────────────────────── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-site">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">

            <div>
              <span className="eyebrow mb-6 block">What's included</span>
              <ul className="flex flex-col gap-3">
                {model.includes.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-text-secondary)]"
                  >
                    <span className="mt-[0.4rem] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--color-brand)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="eyebrow mb-6 block">Not included</span>
              <ul className="flex flex-col gap-3">
                {model.excludes.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-text-secondary)]"
                  >
                    <span className="mt-[0.4rem] h-[5px] w-[5px] shrink-0 rounded-full bg-[#b8b4ae]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── 11. Delivery path (conditional) ──────────────────────────────── */}
      {model.deliverySummary && model.deliverySummary.length > 0 && (
        <section
          className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
          style={{ backgroundColor: "var(--soleta-cream)" }}
        >
          <div className="container-narrow">
            <span className="eyebrow mb-4 block">How we deliver it</span>
            <h2
              className="mb-8 max-w-lg"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.15 }}
            >
              From first conversation to handover
            </h2>
            <ol className="flex flex-col gap-6">
              {model.deliverySummary.map((step, i) => (
                <li key={i} className="flex items-start gap-5">
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-ui text-[0.625rem] font-medium uppercase tracking-[0.12em] text-[var(--color-brand)] pt-[0.2rem]"
                    style={{ minWidth: "1.5rem" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-sm leading-relaxed text-[var(--color-text-secondary)]"
                    style={{ fontSize: "clamp(0.875rem, 1vw, 0.9375rem)" }}
                  >
                    {step}
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-10">
              <Link
                href="/process"
                className="inline-flex items-center gap-2 font-ui text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] transition-opacity duration-200 hover:opacity-70"
              >
                See the full process →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── 12. Related built projects (conditional) ─────────────────────── */}
      {model.relatedProjects && model.relatedProjects.length > 0 && (
        <section
          className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <div className="container-site">
            <div className="mb-12 flex items-end justify-between gap-8">
              <div>
                <span className="eyebrow mb-4 block">Built work</span>
                <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.15 }}>
                  Projects from this collection
                </h2>
              </div>
              <Link
                href="/built-projects"
                className="hidden shrink-0 items-center gap-2 font-ui text-[0.6875rem] font-medium uppercase tracking-[0.15em] text-[var(--color-brand)] transition-opacity duration-200 hover:opacity-70 md:inline-flex"
              >
                All built projects →
              </Link>
            </div>

            <div
              className={cn(
                "grid gap-px border border-[var(--color-border-light)] bg-[var(--color-border-light)]",
                model.relatedProjects.length === 1
                  ? "grid-cols-1 max-w-lg"
                  : model.relatedProjects.length === 2
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              )}
            >
              {model.relatedProjects.map((project, i) => {
                const inner = (
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {project.imageSrc ? (
                      <Image
                        src={project.imageSrc}
                        alt={project.imageAlt ?? project.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div aria-hidden="true" className="absolute inset-0 bg-[#1a1714]" />
                    )}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(26,23,20,0.85) 0%, rgba(26,23,20,0.20) 50%, transparent 75%)",
                      }}
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-1.5">
                      <p className="font-ui text-[0.5625rem] font-medium tracking-[0.18em] uppercase text-[#c8bfb8]">
                        {project.category}
                        {project.year && (
                          <span className="ml-3 text-[#9a8e87]">{project.year}</span>
                        )}
                      </p>
                      <h3
                        className="text-[#faf8f6]"
                        style={{
                          fontSize: "1.125rem", lineHeight: 1.25,
                          letterSpacing: "0.02em", fontFamily: "var(--font-heading)",
                        }}
                      >
                        {project.title}
                      </h3>
                      <p className="font-ui text-[0.6875rem] tracking-wide text-[#9a8e87]">
                        {project.location}
                      </p>
                    </div>
                  </div>
                );

                return project.href ? (
                  <Link key={i} href={project.href} className="group relative overflow-hidden bg-[#1a1714] block">
                    {inner}
                  </Link>
                ) : (
                  <div key={i} className="group relative overflow-hidden bg-[#1a1714] block">
                    {inner}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex justify-center md:hidden">
              <Link href="/built-projects" className="btn-outline py-4 px-10">
                All built projects
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── 13. FAQ ──────────────────────────────────────────────────────── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-4 block">Frequently asked</span>
          <h2
            className="mb-10"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.15 }}
          >
            Questions about this collection
          </h2>
          <FaqAccordion items={model.faq} />
        </div>
      </section>

      {/* ── 14. Final CTA ─────────────────────────────────────────────────── */}
      <section
        className="py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-forest)", color: "var(--soleta-cream)" }}
      >
        <div className="container-narrow text-center">
          <span className="eyebrow mb-4 block" style={{ color: "var(--soleta-gold)" }}>
            Next step
          </span>
          <h2
            className="mb-4"
            style={{
              color: "var(--soleta-cream)",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              lineHeight: 1.1,
            }}
          >
            Begin your {model.eyebrow} project
          </h2>
          <p
            className="subtitle mb-10 mx-auto max-w-md"
            style={{ color: "var(--soleta-cream)", opacity: 0.7 }}
          >
            Tell us about your site, your vision and your timeline. No obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/request-private-offer" className="btn-inverse">
              Request a Private Offer
            </Link>
            <Link
              href="/collection"
              className="btn-ghost"
              style={{ color: "var(--soleta-cream)", opacity: 0.7 }}
            >
              ← Back to The Collection
            </Link>
          </div>
        </div>
      </section>

      {/* ── Sticky mobile CTA ─────────────────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex gap-2 border-t border-white/10 bg-[var(--soleta-forest)] p-3 md:hidden">
        <Link href="/contact" className="btn-primary flex-1 justify-center text-center">
          Request Offer
        </Link>
        <Link
          href="/catalog"
          className="btn-outline flex-1 justify-center text-center"
          style={{ borderColor: "rgba(255,255,255,0.25)", color: "var(--soleta-cream)" }}
        >
          Catalogue
        </Link>
      </div>

    </article>
  );
}
