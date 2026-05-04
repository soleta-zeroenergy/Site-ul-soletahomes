import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ImagePlaceholder } from "@/components/sections/ImagePlaceholder";
import { CtaBand } from "@/components/sections/CtaBand";
import { withCanonical } from "@/lib/seo";
import { showImagePlaceholders } from "@/lib/site-flags";
import {
  collectionApproach,
  collectionFamilies,
  collectionGuidance,
  collectionWhySoleta,
  collectionExplore,
  collectionCta,
} from "@/lib/content/collection";

export const metadata: Metadata = {
  ...withCanonical("/collection"),
  title: "The Collection | Soleta Homes",
  description:
    "Explore three distinct directions - Signature, Classic, and Holiday & Retreat. Timber homes shaped around the way you want to live.",
};

const CARD_PLACEHOLDER =
  "radial-gradient(ellipse 80% 75% at 40% 55%, rgba(64,44,32,0.92) 0%, rgba(26,23,20,0.97) 60%, #1a1714 100%)";

const pathCardPlaceholders = [
  {
    ratio: "4:3" as const,
    width: 1000,
    height: 750,
    description: "Premium expressive Soleta residence",
  },
  {
    ratio: "4:3" as const,
    width: 1000,
    height: 750,
    description: "Permanent family home, calm and balanced",
  },
  {
    ratio: "4:3" as const,
    width: 1000,
    height: 750,
    description: "Compact retreat in natural setting",
  },
];

export default function CollectionPage() {
  const [signaturePath, classicPath, retreatPath] = collectionFamilies;

  return (
    <>
      <section
        className="border-b border-[var(--color-border-light)] overflow-hidden"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[680px]">
            <div className="flex flex-col justify-center py-16 lg:py-24 pr-0 lg:pr-16">
              <span className="eyebrow mb-6 block">The Collection</span>
              <h1 className="mb-6 max-w-xl">
                Architecture shaped around<br />the way you want to live
              </h1>
              <p className="subtitle max-w-lg mb-10">
                Three distinct directions - from timeless homes for everyday living to private retreats
                and expressive Signature residences for exceptional sites and briefs.
              </p>
              <div>
                <a href="#collection-paths" className="btn-primary">
                  Explore the Collection
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[680px]">
              <Image
                src="/images/WhySoleta900x1200.webp"
                alt="Interior of a Soleta timber home"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {showImagePlaceholders && (
                <div className="absolute inset-0 pointer-events-none">
                  <ImagePlaceholder
                    ratio="4:5"
                    width={1200}
                    height={1500}
                    description="Emotionally strong Soleta scene, balanced lifestyle and architecture"
                    fill
                    variant="overlay"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section border-b border-[var(--color-border-light)]" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-narrow">
          <span className="eyebrow mb-4 block">{collectionApproach.eyebrow}</span>
          <h2 className="mb-6 max-w-xl text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1]">
            {collectionApproach.heading}
          </h2>
          <p
            className="max-w-2xl leading-relaxed text-[var(--color-text-secondary)]"
            style={{ fontSize: "clamp(1rem,1.2vw,1.125rem)" }}
          >
            {collectionApproach.body}
          </p>
          <Link
            href={collectionApproach.link.href}
            className="mt-6 inline-flex items-center gap-2 font-ui text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] hover:opacity-70 transition-opacity duration-200"
          >
            {collectionApproach.link.label} -&gt;
          </Link>
        </div>
      </section>

      <section
        id="collection-paths"
        className="py-16 lg:py-20 border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-site">
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow mb-4 block">The Collection</span>
            <h2 className="mb-4">Choose your path</h2>
            <p
              className="text-[var(--color-text-secondary)] leading-relaxed"
              style={{ fontSize: "clamp(0.9375rem,1.1vw,1.0625rem)" }}
            >
              Each Soleta direction offers a different balance of permanence, expression, scale,
              and freedom - while keeping the same calm architecture, the same natural materiality,
              and the same long-term thinking.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-border-light)] lg:grid-cols-12">
            <Link
              href={signaturePath.href}
              className="group flex flex-col bg-[var(--soleta-cream)] transition-colors duration-200 hover:bg-[var(--color-bg)] lg:col-span-8"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                {signaturePath.imageSrc ? (
                  <Image
                    src={signaturePath.imageSrc}
                    alt={signaturePath.imageAlt ?? signaturePath.heading}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-80"
                    style={{ background: CARD_PLACEHOLDER }}
                  />
                )}

                {showImagePlaceholders && pathCardPlaceholders[0] && (
                  <div className="absolute inset-0 pointer-events-none">
                    <ImagePlaceholder
                      ratio={pathCardPlaceholders[0].ratio}
                      width={pathCardPlaceholders[0].width}
                      height={pathCardPlaceholders[0].height}
                      description={pathCardPlaceholders[0].description}
                      fill
                      variant="overlay"
                    />
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-5 p-8 lg:p-10">
                <span className="font-ui text-[0.5625rem] font-medium uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                  {signaturePath.eyebrow}
                </span>
                <h3 className="max-w-xl text-[clamp(1.75rem,2.4vw,2.375rem)] leading-[1.08]">
                  {signaturePath.heading}
                </h3>
                <p className="max-w-2xl flex-1 text-[0.9375rem] leading-relaxed text-[var(--color-text-secondary)]">
                  {signaturePath.body}
                </p>
                <span className="inline-flex items-center gap-1.5 font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] transition-transform duration-200 group-hover:translate-x-1">
                  {signaturePath.cta} -&gt;
                </span>
              </div>
            </Link>

            {[classicPath, retreatPath].map((family, index) => {
              const placeholder = pathCardPlaceholders[index + 1];
              const hasImage = Boolean(family.imageSrc);

              return (
                <Link
                  key={family.href}
                  href={family.href}
                  className="group flex flex-col bg-[var(--soleta-cream)] transition-colors duration-200 hover:bg-[var(--color-bg)] lg:col-span-4"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    {hasImage ? (
                      <Image
                        src={family.imageSrc!}
                        alt={family.imageAlt ?? family.heading}
                        fill
                        sizes="(max-width: 1024px) 100vw, 34vw"
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-80"
                        style={{ background: CARD_PLACEHOLDER }}
                      />
                    )}

                    {showImagePlaceholders && placeholder && (
                      <div className="absolute inset-0 pointer-events-none">
                        <ImagePlaceholder
                          ratio={placeholder.ratio}
                          width={placeholder.width}
                          height={placeholder.height}
                          description={placeholder.description}
                          fill
                          variant="overlay"
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col gap-3 p-7">
                    <span className="font-ui text-[0.5625rem] font-medium uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                      {family.eyebrow}
                    </span>
                    <h3 className="text-[1.375rem] leading-[1.15]">{family.heading}</h3>
                    <p className="flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {family.body}
                    </p>
                    <span className="inline-flex items-center gap-1.5 font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] transition-transform duration-200 group-hover:translate-x-1">
                      {family.cta} -&gt;
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="section border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="border border-[var(--color-border-light)] bg-[var(--soleta-cream)] p-8 lg:p-10">
            <span className="eyebrow mb-4 block">{collectionGuidance.eyebrow}</span>
            <div className="mb-8 grid grid-cols-1 gap-6 border-b border-[var(--color-border-light)] pb-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <h2 className="max-w-lg">{collectionGuidance.heading}</h2>
              <p
                className="text-[var(--color-text-secondary)] leading-relaxed"
                style={{ fontSize: "clamp(0.9375rem,1.1vw,1.0625rem)" }}
              >
                {collectionGuidance.intro}
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-5 lg:grid-cols-3">
              {collectionGuidance.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 border-l-2 border-[var(--color-brand)] bg-[var(--color-bg)] p-5 text-[var(--color-text-secondary)] leading-relaxed"
                  style={{ fontSize: "clamp(0.9375rem,1.1vw,1.0625rem)" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="section border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-site">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <span className="eyebrow mb-4 block">{collectionWhySoleta.eyebrow}</span>
              <h2 className="mb-8 max-w-sm">{collectionWhySoleta.heading}</h2>
              <ul className="flex flex-col gap-4">
                {collectionWhySoleta.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[var(--color-text-secondary)] leading-relaxed"
                    style={{ fontSize: "clamp(0.9375rem,1.1vw,1.0625rem)" }}
                  >
                    <span className="mt-2 h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--color-brand)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center">
              <span className="eyebrow mb-6 block">Learn more</span>
              <nav className="flex flex-col divide-y divide-[var(--color-border-light)]">
                {collectionWhySoleta.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between py-4 font-ui text-sm text-[var(--color-text)] hover:text-[var(--color-brand)] transition-colors duration-200"
                  >
                    {link.label}
                    <span aria-hidden="true" className="text-[var(--color-brand)]">-&gt;</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-site">
          <span className="eyebrow mb-10 block">{collectionExplore.eyebrow}</span>
          <div className="grid grid-cols-1 gap-px bg-[var(--color-border-light)] sm:grid-cols-2 lg:grid-cols-4">
            {collectionExplore.blocks.map((block) => (
              <Link
                key={block.href}
                href={block.href}
                className="group flex flex-col gap-4 bg-[var(--color-bg)] p-8 transition-colors duration-200 hover:bg-[var(--soleta-cream)]"
              >
                <h3 className="text-[1.125rem] leading-[1.25]">{block.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {block.body}
                </p>
                <span className="font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] transition-transform duration-200 group-hover:translate-x-1">
                  {block.cta} -&gt;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand {...collectionCta} />
    </>
  );
}


