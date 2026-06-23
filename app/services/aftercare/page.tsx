import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { withCanonical } from "@/lib/seo";
import { servicesDetail } from "@/lib/content/services-detail";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data-helpers";

export const metadata: Metadata = {
  ...withCanonical("/services/aftercare"),
  title: "Aftercare | Services | Soleta",
  description:
    "Annual inspections, maintenance guidance, warranty coordination and technical support. A separately booked programme for Soleta homes — available from handover.",
};

const svc = servicesDetail.find((s) => s.slug === "aftercare")!;

const breadcrumb = breadcrumbSchema([
  { name: "Home",     href: "/" },
  { name: "Services", href: "/services" },
  { name: svc.label, href: "/services/aftercare" },
]);

const faq = faqSchema(svc.faq!);

export default function AftercarePage() {
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
          <Link
            href="/services"
            className="eyebrow mb-8 inline-flex items-center gap-2 no-underline opacity-60 hover:opacity-100 transition-opacity"
          >
            ← Services
          </Link>
          <span className="eyebrow mb-2 block">{svc.label}</span>
          <h1 className="mb-6 max-w-2xl">{svc.heading}</h1>
          <p className="subtitle max-w-xl">{svc.intro}</p>
        </div>
      </section>

      {/* ── 2. Hero image ── */}
      <div
        className="relative w-full border-b border-[var(--color-border-light)]"
        style={{ aspectRatio: "3000 / 975" }}
      >
        <Image
          src="https://img.soletahomes.com/hero_aftercare_3000x975.webp"
          alt="Soleta — the relationship continues after handover"
          fill
          priority
          className="object-contain"
          sizes="100vw"
        />
      </div>

      {/* ── 3. Editorial framing ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            <p className="leading-relaxed text-[var(--color-text-secondary)]">{svc.framing.left}</p>
            <p className="leading-relaxed text-[var(--color-text-secondary)] md:border-l md:border-[var(--color-border-light)] md:pl-16">{svc.framing.right}</p>
          </div>
        </div>
      </section>

      {/* ── 4. What this service covers ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <div className="flex flex-col gap-14">
            {svc.sections.map((section, i) => (
              <div key={section.heading} className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
                <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>{section.heading}</h2>
                  <p className="leading-relaxed text-[var(--color-text-secondary)]">{section.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. What the client receives ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-6 block">What the programme includes</span>
          <ul className="flex flex-col gap-4">
            {svc.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-4 border-b border-[var(--color-border-light)] pb-4 last:border-0 last:pb-0">
                <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-[var(--color-brand)]" />
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 6. Caveat ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
            <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">Note</span>
            <div>
              <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>{svc.caveat.heading}</h2>
              <p className="leading-relaxed text-[var(--color-text-secondary)]">{svc.caveat.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Support block ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
            <span className="eyebrow md:pt-1">{svc.supportBlock.eyebrow}</span>
            <p className="leading-relaxed text-[var(--color-text-secondary)]">{svc.supportBlock.body}</p>
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-4 block">Frequently asked</span>
          <h2 className="mb-10" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
            Questions about aftercare
          </h2>
          <FaqAccordion items={svc.faq!} />
        </div>
      </section>

      {/* ── 9. CTA ── */}
      <CtaBand
        eyebrow={svc.cta.eyebrow}
        heading={svc.cta.heading}
        body={svc.cta.body}
        primaryCta={{ label: "Request a Private Consultation", href: "/request-private-offer" }}
        secondaryCta={{ label: "Back to Services", href: "/services" }}
        theme="dark"
      />
    </>
  );
}
