import type { Metadata }      from "next";
import { notFound }            from "next/navigation";
import Image                   from "next/image";
import Link                    from "next/link";
import { withCanonical }       from "@/lib/seo";
import { CtaBand }             from "@/components/sections/CtaBand";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data-helpers";
import {
  journalArticles,
  getArticle,
  type JournalCategory,
} from "@/lib/content/journal";

/* ── Static params ───────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return journalArticles.map((a) => ({ slug: a.slug }));
}

/* ── Metadata ────────────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article  = getArticle(slug);
  if (!article) return {};
  return {
    ...withCanonical(`/journal/${slug}`),
    title:       `${article.title} | Soleta Journal`,
    description: article.excerpt,
  };
}

/* ── Category badge colour ───────────────────────────────────────────────── */
const categoryColour: Record<JournalCategory, string> = {
  "Planning & Land":         "#3a5a3a",
  "Design & Living":         "var(--color-brand)",
  "Process, Budget & Build": "#4a5568",
};

/* ── Related articles ────────────────────────────────────────────────────── */
function getRelated(current: ReturnType<typeof getArticle>) {
  if (!current) return [];
  return journalArticles
    .filter((a) => a.slug !== current.slug && a.category === current.category)
    .slice(0, 2);
}

/* ── Page ────────────────────────────────────────────────────────────────── */
export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article  = getArticle(slug);
  if (!article) notFound();

  const related = getRelated(article);

  const breadcrumbs = breadcrumbSchema([
    { name: "Home",         href: "/" },
    { name: "Journal",      href: "/journal" },
    { name: article.title,  href: `/journal/${slug}` },
  ]);

  const colour = categoryColour[article.category];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* ── 1. Page header ──────────────────────────────────────────────── */}
      <section
        className="border-b border-[var(--color-border-light)] px-0 pt-12 pb-10 lg:pt-16 lg:pb-14"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <Link
            href="/journal"
            className="eyebrow mb-8 inline-flex items-center gap-2 no-underline opacity-60 hover:opacity-100 transition-opacity"
          >
            ← Journal
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span
              style={{
                fontFamily:    "var(--font-ui)",
                fontSize:      "0.625rem",
                fontWeight:    600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color:         colour,
              }}
            >
              {article.category}
            </span>
          </div>
          <h1
            className="mb-6 max-w-3xl"
            style={{
              fontSize:      "clamp(1.875rem, 4vw, 3rem)",
              lineHeight:    1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {article.title}
          </h1>
          <p
            className="max-w-2xl leading-relaxed"
            style={{
              color:      "var(--color-text-secondary)",
              fontFamily: "var(--font-body)",
              fontSize:   "1.0625rem",
            }}
          >
            {article.excerpt}
          </p>
          <p
            className="mt-4"
            style={{
              fontFamily:    "var(--font-ui)",
              fontSize:      "0.75rem",
              color:         "var(--color-text-muted)",
              letterSpacing: "0.04em",
            }}
          >
            {new Date(article.publishedAt).toLocaleDateString("en-GB", {
              day: "numeric", month: "long", year: "numeric",
            })}
          </p>
        </div>
      </section>

      {/* ── 2. Hero image ───────────────────────────────────────────────── */}
      <div
        className="relative w-full border-b border-[var(--color-border-light)]"
        style={{ height: "clamp(260px, 36vw, 500px)" }}
      >
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* ── 3. Article body ─────────────────────────────────────────────── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_640px]">

            {/* Sticky sidebar — category + back nav */}
            <div className="hidden lg:block">
              <div className="sticky top-28 flex flex-col gap-6">
                <div>
                  <p
                    style={{
                      fontFamily:    "var(--font-ui)",
                      fontSize:      "0.625rem",
                      fontWeight:    600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color:         colour,
                      marginBottom:  "0.5rem",
                    }}
                  >
                    {article.category}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize:   "0.8125rem",
                      color:      "var(--color-text-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {article.intro ?? article.excerpt}
                  </p>
                </div>
                {article.body && article.body.length > 0 && (
                  <nav aria-label="Article sections">
                    <div className="flex flex-col gap-0 border-t border-[var(--color-border-light)] pt-4">
                      {article.body.map(({ heading }) => (
                        <a
                          key={heading}
                          href={`#${heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                          style={{
                            fontFamily:    "var(--font-body)",
                            fontSize:      "0.8125rem",
                            color:         "var(--color-text-muted)",
                            textDecoration: "none",
                            padding:       "0.4rem 0",
                            display:       "block",
                            borderBottom:  "1px solid var(--color-border-light)",
                            transition:    "color 150ms",
                          }}
                          className="hover:text-[var(--color-text)]"
                        >
                          {heading}
                        </a>
                      ))}
                    </div>
                  </nav>
                )}
                <Link
                  href="/journal"
                  style={{
                    fontFamily:    "var(--font-ui)",
                    fontSize:      "0.625rem",
                    fontWeight:    500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color:         "var(--color-text-muted)",
                    textDecoration: "none",
                    marginTop:     "0.5rem",
                  }}
                  className="hover:text-[var(--color-text)] transition-colors"
                >
                  ← All articles
                </Link>
              </div>
            </div>

            {/* Article prose */}
            <div className="flex flex-col gap-0">
              {article.body ? (
                article.body.map(({ heading, content }) => (
                  <div
                    key={heading}
                    id={heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                    className="border-t border-[var(--color-border-light)] py-8 first:border-t-0 first:pt-0"
                    style={{ scrollMarginTop: "6rem" }}
                  >
                    <h2
                      style={{
                        fontFamily:    "var(--font-heading)",
                        fontSize:      "1.25rem",
                        fontWeight:    400,
                        letterSpacing: "0.01em",
                        color:         "#1a1714",
                        lineHeight:    1.25,
                        marginBottom:  "1rem",
                      }}
                    >
                      {heading}
                    </h2>
                    {content.split("\n\n").map((para, i) => (
                      <p
                        key={i}
                        style={{
                          fontFamily:   "var(--font-body)",
                          fontSize:     "0.9375rem",
                          color:        "var(--color-text-secondary)",
                          lineHeight:   1.8,
                          marginBottom: "0.875rem",
                        }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                ))
              ) : (
                /* Stub intro for articles without full body */
                <div className="border-t border-[var(--color-border-light)] py-8 first:border-t-0 first:pt-0">
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize:   "0.9375rem",
                      color:      "var(--color-text-secondary)",
                      lineHeight: 1.8,
                    }}
                  >
                    {article.intro}
                  </p>
                  <p
                    className="mt-8 pt-6 border-t border-[var(--color-border-light)]"
                    style={{
                      fontFamily:    "var(--font-ui)",
                      fontSize:      "0.75rem",
                      color:         "var(--color-text-muted)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Full article coming soon.
                  </p>
                </div>
              )}

              {/* Inline CTA */}
              <div
                className="mt-10 pt-8 border-t border-[var(--color-border-light)] flex flex-col gap-5"
              >
                <p
                  style={{
                    fontFamily:    "var(--font-heading)",
                    fontSize:      "1.1875rem",
                    fontWeight:    400,
                    letterSpacing: "0.01em",
                    color:         "#1a1714",
                    lineHeight:    1.3,
                  }}
                >
                  Ready to move from reading to a real project conversation?
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/request-private-offer" className="btn-primary py-3 px-7 text-[0.75rem]">
                    Request a Private Offer
                  </Link>
                  <Link href="/journal" className="btn-outline py-3 px-7 text-[0.75rem]">
                    Back to Journal
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Related articles ─────────────────────────────────────────── */}
      {related.length > 0 && (
        <section
          className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
          style={{ backgroundColor: "var(--soleta-cream)" }}
        >
          <div className="container-narrow">
            <span className="eyebrow mb-8 block">Related articles</span>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {related.map((rel) => (
                <article key={rel.slug} className="flex flex-col gap-0 group">
                  <Link
                    href={`/journal/${rel.slug}`}
                    className="block overflow-hidden"
                    style={{ textDecoration: "none" }}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <div
                      className="relative w-full"
                      style={{ paddingBottom: "66.67%" }}
                    >
                      <Image
                        src={rel.image}
                        alt={rel.imageAlt}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </Link>
                  <div className="flex flex-col gap-3 pt-5">
                    <span
                      style={{
                        fontFamily:    "var(--font-ui)",
                        fontSize:      "0.625rem",
                        fontWeight:    500,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color:         categoryColour[rel.category],
                      }}
                    >
                      {rel.category}
                    </span>
                    <Link href={`/journal/${rel.slug}`} style={{ textDecoration: "none" }}>
                      <h3
                        className="group-hover:opacity-70 transition-opacity duration-200"
                        style={{
                          fontFamily:    "var(--font-heading)",
                          fontSize:      "1.125rem",
                          fontWeight:    400,
                          letterSpacing: "0.01em",
                          color:         "#1a1714",
                          lineHeight:    1.25,
                        }}
                      >
                        {rel.title}
                      </h3>
                    </Link>
                    <p
                      className="leading-relaxed line-clamp-2"
                      style={{
                        color:      "var(--color-text-secondary)",
                        fontFamily: "var(--font-body)",
                        fontSize:   "0.875rem",
                      }}
                    >
                      {rel.excerpt}
                    </p>
                    <Link
                      href={`/journal/${rel.slug}`}
                      style={{
                        fontFamily:    "var(--font-ui)",
                        fontSize:      "0.6875rem",
                        fontWeight:    500,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color:         "var(--color-brand)",
                        textDecoration: "none",
                      }}
                      className="hover:opacity-70 transition-opacity duration-200"
                    >
                      Read →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 5. Final CTA ────────────────────────────────────────────────── */}
      <CtaBand
        heading="Ready to move from reading to clarity?"
        body="If your project is beginning to take shape, a Private Offer request gives us the context needed to respond with more precision."
        primaryCta={{ label: "Request a Private Offer", href: "/request-private-offer" }}
        secondaryCta={{ label: "View the Collection",   href: "/collection" }}
        theme="dark"
      />
    </>
  );
}
