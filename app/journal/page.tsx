import type { Metadata } from "next";
import Image             from "next/image";
import Link              from "next/link";
import { withCanonical } from "@/lib/seo";
import { CtaBand }       from "@/components/sections/CtaBand";
import { breadcrumbSchema } from "@/lib/structured-data-helpers";
import {
  journalArticles,
  featuredArticle,
  JOURNAL_CATEGORIES,
  type JournalCategory,
} from "@/lib/content/journal";

/* ── Metadata ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  ...withCanonical("/journal"),
  title:       "Journal | Soleta Homes",
  description:
    "Practical articles for clients evaluating land, design direction, budget logic, and the early decisions that shape a timber home project.",
};

/* ── Structured data ─────────────────────────────────────────────────────── */
const schema = breadcrumbSchema([
  { name: "Home",    href: "/" },
  { name: "Journal", href: "/journal" },
]);

/* ── Category colour mapping ─────────────────────────────────────────────── */
const categoryBadge: Record<JournalCategory, string> = {
  "Planning & Land":         "text-[#3a5a3a]",
  "Design & Living":         "text-[var(--color-brand)]",
  "Process, Budget & Build": "text-[#4a5568]",
};

/* ── Start Here articles ─────────────────────────────────────────────────── */
const startHereSlugs = [
  "evaluate-land-before-planning-a-timber-home",
  "what-shapes-the-budget-of-a-premium-timber-house",
  "starting-from-a-model-or-building-a-custom-direction",
];
const startHereArticles = startHereSlugs
  .map((s) => journalArticles.find((a) => a.slug === s))
  .filter(Boolean) as (typeof journalArticles)[0][];

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function JournalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section
        className="border-b border-[var(--color-border-light)] px-0 pt-12 pb-0 lg:pt-16"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow pb-10 lg:pb-14">
          <span className="eyebrow mb-4 block">Journal</span>
          <h1
            className="mb-5"
            style={{
              fontSize:      "clamp(2.25rem, 5vw, 4rem)",
              lineHeight:    1.06,
              letterSpacing: "-0.02em",
              maxWidth:      "16ch",
            }}
          >
            Journal
          </h1>
          <p
            className="max-w-xl leading-relaxed"
            style={{
              color:      "var(--color-text-secondary)",
              fontFamily: "var(--font-body)",
              fontSize:   "1.0625rem",
            }}
          >
            A curated set of practical articles for clients who want to understand
            land, design direction, budget logic, and the early decisions that shape
            a timber home project.
          </p>
        </div>

        {/* Category strip */}
        <div
          className="border-t border-[var(--color-border-light)]"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <div className="container-narrow">
            <div className="flex flex-wrap items-center gap-0">
              {JOURNAL_CATEGORIES.map((cat) => (
                <a
                  key={cat}
                  href={`#${cat.toLowerCase().replace(/[\s,&]+/g, "-")}`}
                  style={{
                    fontFamily:    "var(--font-ui)",
                    fontSize:      "0.6875rem",
                    fontWeight:    500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color:         "var(--color-text-muted)",
                    textDecoration: "none",
                    padding:       "1.25rem 1.5rem 1.25rem 0",
                    marginRight:   "1.5rem",
                    borderBottom:  "2px solid transparent",
                    transition:    "color 150ms, border-color 150ms",
                    display:       "inline-block",
                  }}
                  className="hover:text-[var(--color-text)] hover:border-[var(--color-brand)]"
                >
                  {cat}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Featured article ──────────────────────────────────────────── */}
      <section
        className="border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow py-14 lg:py-20">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr_1fr]">
            {/* Image */}
            <div
              className="relative w-full border-b border-[var(--color-border-light)] lg:border-b-0 lg:border-r lg:border-[var(--color-border-light)]"
              style={{ minHeight: "clamp(300px, 36vw, 480px)" }}
            >
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.imageAlt}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col justify-center gap-6 pl-0 pt-10 lg:pl-14 lg:pt-0">
              <div className="flex items-center gap-3">
                <span
                  style={{
                    fontFamily:    "var(--font-ui)",
                    fontSize:      "0.625rem",
                    fontWeight:    600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color:         "var(--color-brand)",
                  }}
                >
                  Featured
                </span>
                <span
                  style={{
                    width:           "1px",
                    height:          "12px",
                    backgroundColor: "var(--color-border)",
                    display:         "block",
                  }}
                  aria-hidden="true"
                />
                <span
                  className={categoryBadge[featuredArticle.category]}
                  style={{
                    fontFamily:    "var(--font-ui)",
                    fontSize:      "0.625rem",
                    fontWeight:    500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {featuredArticle.category}
                </span>
              </div>
              <Link
                href={`/journal/${featuredArticle.slug}`}
                style={{ textDecoration: "none" }}
                className="group"
              >
                <h2
                  className="group-hover:opacity-70 transition-opacity duration-200"
                  style={{
                    fontFamily:    "var(--font-heading)",
                    fontSize:      "clamp(1.5rem, 2.5vw, 2rem)",
                    fontWeight:    400,
                    letterSpacing: "0",
                    color:         "#1a1714",
                    lineHeight:    1.15,
                  }}
                >
                  {featuredArticle.title}
                </h2>
              </Link>
              <p
                className="leading-relaxed"
                style={{
                  color:      "var(--color-text-secondary)",
                  fontFamily: "var(--font-body)",
                  fontSize:   "0.9375rem",
                  maxWidth:   "42ch",
                }}
              >
                {featuredArticle.excerpt}
              </p>
              <Link
                href={`/journal/${featuredArticle.slug}`}
                className="btn-outline py-3 px-7 text-[0.75rem] self-start mt-2"
              >
                Read article
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Start here ───────────────────────────────────────────────── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[200px_1fr]">
            <div>
              <span className="eyebrow mb-3 block">Start here</span>
              <p
                className="leading-relaxed text-sm"
                style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}
              >
                Three recommended starting points for new visitors.
              </p>
            </div>
            <div className="flex flex-col gap-0">
              {startHereArticles.map((article, i) => (
                <Link
                  key={article.slug}
                  href={`/journal/${article.slug}`}
                  className="group flex items-start gap-6 border-t border-[var(--color-border-light)] py-6 last:border-b last:border-[var(--color-border-light)]"
                  style={{ textDecoration: "none" }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      fontFamily:    "var(--font-ui)",
                      fontSize:      "0.625rem",
                      fontWeight:    600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color:         "var(--color-brand)",
                      paddingTop:    "0.2rem",
                      flexShrink:    0,
                      minWidth:      "2rem",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <span
                      className="group-hover:opacity-70 transition-opacity duration-200"
                      style={{
                        fontFamily:    "var(--font-heading)",
                        fontSize:      "1.0625rem",
                        fontWeight:    400,
                        letterSpacing: "0.01em",
                        color:         "#1a1714",
                        lineHeight:    1.3,
                      }}
                    >
                      {article.title}
                    </span>
                    <span
                      className={categoryBadge[article.category]}
                      style={{
                        fontFamily:    "var(--font-ui)",
                        fontSize:      "0.625rem",
                        fontWeight:    500,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                      }}
                    >
                      {article.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Latest insights grid ─────────────────────────────────────── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-10 block">Latest insights</span>

          {/* Per-category grouping */}
          {JOURNAL_CATEGORIES.map((cat) => {
            const articles = journalArticles.filter((a) => a.category === cat);
            if (!articles.length) return null;
            const catId = cat.toLowerCase().replace(/[\s,&]+/g, "-");
            return (
              <div
                key={cat}
                id={catId}
                className="mb-14 last:mb-0"
                style={{ scrollMarginTop: "6rem" }}
              >
                <div
                  className="flex items-center gap-4 mb-8 pb-4 border-b border-[var(--color-border-light)]"
                >
                  <span
                    className={categoryBadge[cat]}
                    style={{
                      fontFamily:    "var(--font-ui)",
                      fontSize:      "0.625rem",
                      fontWeight:    600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                    }}
                  >
                    {cat}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {articles.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 5. Final CTA ────────────────────────────────────────────────── */}
      <CtaBand
        heading="Ready to move from reading to clarity?"
        body="If your project is beginning to take shape, a Private Offer request gives us the context needed to respond with more precision."
        primaryCta={{ label: "Request a Private Offer", href: "/request-private-offer" }}
        secondaryCta={{ label: "Request the Catalog",   href: "/catalog" }}
        theme="dark"
      />
    </>
  );
}

/* ── Article card ────────────────────────────────────────────────────────── */
function ArticleCard({ article }: { article: typeof journalArticles[0] }) {
  const badge = categoryBadge[article.category];
  return (
    <article className="flex flex-col gap-0 group">
      {/* Image */}
      <Link
        href={`/journal/${article.slug}`}
        className="block overflow-hidden"
        style={{ textDecoration: "none" }}
        tabIndex={-1}
        aria-hidden="true"
      >
        <div
          className="relative w-full overflow-hidden"
          style={{ paddingBottom: "66.67%" /* 3:2 */ }}
        >
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </Link>

      {/* Meta */}
      <div className="flex flex-col gap-3 pt-5">
        <span
          className={badge}
          style={{
            fontFamily:    "var(--font-ui)",
            fontSize:      "0.625rem",
            fontWeight:    500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {article.category}
        </span>
        <Link
          href={`/journal/${article.slug}`}
          style={{ textDecoration: "none" }}
        >
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
            {article.title}
          </h3>
        </Link>
        <p
          className="leading-relaxed line-clamp-3"
          style={{
            color:      "var(--color-text-secondary)",
            fontFamily: "var(--font-body)",
            fontSize:   "0.875rem",
          }}
        >
          {article.excerpt}
        </p>
        <Link
          href={`/journal/${article.slug}`}
          style={{
            fontFamily:    "var(--font-ui)",
            fontSize:      "0.6875rem",
            fontWeight:    500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color:         "var(--color-brand)",
            textDecoration: "none",
            marginTop:     "0.25rem",
          }}
          className="hover:opacity-70 transition-opacity duration-200"
        >
          Read →
        </Link>
      </div>
    </article>
  );
}
