import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { withCanonical } from "@/lib/seo";
import { servicesDetail } from "@/lib/content/services-detail";
import { CtaBand } from "@/components/sections/CtaBand";
import { breadcrumbSchema } from "@/lib/structured-data-helpers";

export const metadata: Metadata = {
  ...withCanonical("/services/custom-design"),
  title: "Custom Design | Services | Soleta",
  description:
    "Full architectural design from first principles — for clients whose brief, site or vision cannot be resolved by adapting a standard model. System-led, not system-limited.",
};

const svc = servicesDetail.find((s) => s.slug === "custom-design")!;

const schema = breadcrumbSchema([
  { name: "Home",     href: "/" },
  { name: "Services", href: "/services" },
  { name: svc.label, href: "/services/custom-design" },
]);

export default function CustomDesignPage() {
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
          src="https://img.soletahomes.com/hero_custom_design_3000x975.webp"
          alt="Soleta Signature — architecture shaped by site and brief"
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

            {/* Section 01 — How the design process works (concept directions) */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
              <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">01</span>
              <div>
                <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>{svc.sections[0].heading}</h2>
                <p className="leading-relaxed text-[var(--color-text-secondary)]">{svc.sections[0].body}</p>
              </div>
            </div>

            {/* Image — 1536×1024, after "How the design process works" */}
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "1536 / 1024" }}
            >
              <Image
                src="https://img.soletahomes.com/custom-design-concept-directions-1536x1024.webp"
                alt="Three Soleta custom design concept directions for the same site"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 768px"
              />
            </div>

            {/* Section 02 */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
              <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">02</span>
              <div>
                <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>{svc.sections[1].heading}</h2>
                <p className="leading-relaxed text-[var(--color-text-secondary)]">{svc.sections[1].body}</p>
              </div>
            </div>

            {/* Section 03 */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
              <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">03</span>
              <div>
                <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>{svc.sections[2].heading}</h2>
                <p className="leading-relaxed text-[var(--color-text-secondary)]">{svc.sections[2].body}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. What the client receives ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-6 block">Design deliverables</span>
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

      {/* ── 6. What depends on scope ── */}
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

      {/* ── 8. CTA ── */}
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
