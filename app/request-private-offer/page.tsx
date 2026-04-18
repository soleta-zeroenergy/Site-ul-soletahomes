import type { Metadata } from "next";
import Image from "next/image";
import { withCanonical } from "@/lib/seo";
import { PrivateOfferForm } from "@/components/sections/PrivateOfferForm";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CtaBand } from "@/components/sections/CtaBand";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data-helpers";
import {
  offerHero,
  offerFraming,
  offerReassurance,
  offerFaq,
} from "@/lib/content/offer-page";

export const metadata: Metadata = {
  ...withCanonical("/request-private-offer"),
  title: "Request a Private Offer | Soleta",
  description:
    "Submit your project brief to Soleta. Tell us about your site, your intended use, your timeline and your budget — and we will respond with a specific, written assessment of what is feasible.",
};

const schema = breadcrumbSchema([
  { name: "Home",                   href: "/" },
  { name: "Request a Private Offer", href: "/request-private-offer" },
]);

const faqJsonLd = faqSchema(offerFaq);

export default function RequestPrivateOfferPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── 1. Page header ── */}
      <section
        className="border-b border-[var(--color-border-light)] px-0 pt-12 pb-10 lg:pt-16 lg:pb-14"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-2 block">{offerHero.eyebrow}</span>
          <h1 className="mb-6 max-w-2xl">{offerHero.heading}</h1>
          <p className="subtitle max-w-xl">{offerHero.subtitle}</p>
        </div>
      </section>

      {/* ── 2. Hero image ── */}
      <div
        className="relative w-full border-b border-[var(--color-border-light)]"
        style={{ height: "clamp(260px, 36vw, 520px)" }}
      >
        <Image
          src="/images/hero.webp"
          alt="Soleta — begin your project with a private brief"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* ── 3. Framing block — why we ask these questions ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            <p className="leading-relaxed text-[var(--color-text-secondary)]">
              {offerFraming.left}
            </p>
            <p className="leading-relaxed text-[var(--color-text-secondary)] md:border-l md:border-[var(--color-border-light)] md:pl-16">
              {offerFraming.right}
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. Form section ── */}
      <section
        className="border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr]">

            {/* Left — trust / reassurance column */}
            <div
              className="flex flex-col justify-start gap-8 px-0 py-10 lg:py-14 lg:pr-14 border-b border-[var(--color-border-light)] lg:border-b-0 lg:border-r"
            >
              <div>
                <span className="eyebrow mb-4 block">Before you fill in the form</span>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  The form takes around five minutes. The more specific you are, the more useful our response will be. You do not need to have every answer — estimates and ranges are fine.
                </p>
              </div>
              <div className="flex flex-col gap-4 border-t border-[var(--color-border-light)] pt-6">
                {[
                  { label: "Response time",  value: "3 business days" },
                  { label: "Format",         value: "Written, project-specific" },
                  { label: "Cost",           value: "No charge" },
                  { label: "Obligation",     value: "None" },
                  { label: "Contact",        value: "studio@soletahomes.com" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-0.5 pb-4 border-b border-[var(--color-border-light)] last:border-0 last:pb-0">
                    <span
                      style={{
                        fontSize:      "0.625rem",
                        fontFamily:    "var(--font-body)",
                        fontWeight:    600,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase" as const,
                        color:         "#9a8e87",
                      }}
                    >
                      {label}
                    </span>
                    <span
                      className="text-[#1a1714]"
                      style={{ fontSize: "0.9375rem", fontFamily: "var(--font-body)", fontWeight: 500 }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="border-b border-[var(--color-border-light)] lg:border-b-0">
              <PrivateOfferForm />
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. Reassurance — what happens after submission ── */}
      <section
        className="border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col justify-center gap-6 px-10 py-14 lg:px-14 lg:py-16 border-b border-[var(--color-border-light)] lg:border-b-0 lg:border-r">
            <span className="eyebrow block">{offerReassurance.eyebrow}</span>
            <p className="leading-relaxed text-[var(--color-text-secondary)]">
              {offerReassurance.body}
            </p>
          </div>
          <div
            className="relative w-full"
            style={{ minHeight: "clamp(300px, 36vw, 520px)" }}
          >
            <Image
              src="/images/Signature800x533.webp"
              alt="Soleta Signature — a considered, written response to your project brief"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── 6. Pre-submit FAQ ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <div className="mb-10">
            <span className="eyebrow mb-2 block">Before you write</span>
            <h2 style={{ fontSize: "1.375rem", lineHeight: 1.25 }}>
              Common questions
            </h2>
          </div>
          <FaqAccordion items={offerFaq} />
        </div>
      </section>

      {/* ── 7. Closing CTA ── */}
      <CtaBand
        eyebrow="Not ready yet?"
        heading="Browse before you commit"
        body="Explore our completed projects or the collection before deciding on a direction."
        primaryCta={{ label: "View Built Projects",      href: "/built-projects" }}
        secondaryCta={{ label: "Explore the Collection", href: "/collection" }}
        theme="dark"
      />
    </>
  );
}
