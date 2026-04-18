import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { withCanonical } from "@/lib/seo";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data-helpers";
import { faqCategories } from "@/lib/content/faq";

export const metadata: Metadata = {
  ...withCanonical("/faq"),
  title: "Frequently Asked Questions | Soleta",
  description:
    "Answers to the most common questions about Soleta homes — models and custom design, pricing, process, permits, materials, performance and aftercare.",
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", href: "/" },
  { name: "FAQ",  href: "/faq" },
]);

// Flatten all FAQ items for faqSchema
const allFaqItems = faqCategories.flatMap((cat) => cat.items);
const faq = faqSchema(allFaqItems);

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />

      {/* ── 1. Page header ── */}
      <section
        className="border-b border-[var(--color-border-light)] px-0 pt-12 pb-10 lg:pt-16 lg:pb-14"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-2 block">FAQ</span>
          <h1 className="mb-6 max-w-2xl">Frequently asked questions</h1>
          <p className="subtitle max-w-xl">
            Answers to the questions we hear most often — about models, pricing, process, permits, materials and aftercare. If your question is not here, the best starting point is a Private Consulting session.
          </p>
        </div>
      </section>

      {/* ── 2. Hero image ── */}
      <div
        className="relative w-full border-b border-[var(--color-border-light)]"
        style={{ height: "clamp(260px, 36vw, 520px)" }}
      >
        <Image
          src="/images/Classic800x533.webp"
          alt="Soleta Classic — questions answered before you commit"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* ── 3. Category anchor navigation ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-8"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <nav aria-label="FAQ categories" className="flex flex-wrap gap-x-8 gap-y-3">
            {faqCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="eyebrow no-underline opacity-60 hover:opacity-100 transition-opacity"
              >
                {cat.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ── 4. FAQ sections — one per category ── */}
      {faqCategories.map((cat, catIdx) => (
        <section
          key={cat.id}
          id={cat.id}
          className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
          style={{ backgroundColor: catIdx % 2 === 0 ? "var(--soleta-cream)" : "var(--color-bg)" }}
        >
          <div className="container-narrow">
            <div className="mb-10">
              <span className="eyebrow mb-2 block">{cat.label}</span>
              <h2 style={{ fontSize: "1.375rem", lineHeight: 1.25 }}>{cat.heading}</h2>
            </div>
            <FaqAccordion items={cat.items} />
          </div>
        </section>
      ))}

      {/* ── 5. Supporting image split ── */}
      <section
        className="border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
          <div
            className="relative w-full border-b border-[var(--color-border-light)] lg:border-b-0 lg:border-r"
            style={{ minHeight: "clamp(300px, 36vw, 520px)" }}
          >
            <Image
              src="/images/Signature800x533.webp"
              alt="Soleta Signature — clarity before commitment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 px-10 py-14 lg:px-14 lg:py-16">
            <span className="eyebrow block">Still have a question?</span>
            <p className="leading-relaxed text-[var(--color-text-secondary)]">
              The Private Consulting session exists for questions that are too specific to answer in a general FAQ. We review your site, your brief and your budget range and give you a direct, honest assessment of what is possible. The session is structured, not open-ended, and produces a written summary of our recommendations.
            </p>
            <Link
              href="/services/private-consulting"
              className="eyebrow no-underline opacity-70 hover:opacity-100 transition-opacity"
            >
              Private Consulting →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. CTA ── */}
      <CtaBand
        eyebrow="Ready to begin"
        heading="Start with a conversation"
        body="Tell us about your site and your vision. The first conversation carries no obligation."
        primaryCta={{ label: "Request a Private Offer", href: "/request-private-offer" }}
        secondaryCta={{ label: "Back to Process & Services", href: "/process" }}
        theme="dark"
      />
    </>
  );
}
