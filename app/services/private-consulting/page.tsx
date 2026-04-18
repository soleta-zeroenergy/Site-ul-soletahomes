import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { withCanonical } from "@/lib/seo";
import { servicesDetail } from "@/lib/content/services-detail";
import { CtaBand } from "@/components/sections/CtaBand";
import { breadcrumbSchema } from "@/lib/structured-data-helpers";

export const metadata: Metadata = {
  ...withCanonical("/services/private-consulting"),
  title: "Private Consulting | Services | Soleta",
  description:
    "A structured session with our design and technical team. We review your site, your brief and your budget — and give you an honest picture of what is feasible before any commitment.",
};

const svc = servicesDetail.find((s) => s.slug === "private-consulting")!;

const schema = breadcrumbSchema([
  { name: "Home",     href: "/" },
  { name: "Services", href: "/services" },
  { name: svc.label, href: "/services/private-consulting" },
]);

export default function PrivateConsultingPage() {
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
        style={{ height: "clamp(260px, 36vw, 520px)" }}
      >
        <Image
          src="/images/hero.webp"
          alt="Soleta — beginning with clarity, not commitment"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
          <span className="eyebrow mb-6 block">What you receive</span>
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

      {/* ── 7. Supporting image split ── */}
      <section
        className="border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
          <div
            className="relative w-full border-b border-[var(--color-border-light)] lg:border-b-0 lg:border-r"
            style={{ minHeight: "clamp(300px, 36vw, 520px)" }}
          >
            <Image
              src="/images/WhySoleta900x1200.webp"
              alt="Soleta — site, brief and the first conversation"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 px-10 py-14 lg:px-14 lg:py-16">
            <span className="eyebrow block">{svc.supportBlock.eyebrow}</span>
            <p className="leading-relaxed text-[var(--color-text-secondary)]">{svc.supportBlock.body}</p>
          </div>
        </div>
      </section>

      {/* ── 8. CTA ── */}
      <CtaBand
        eyebrow={svc.cta.eyebrow}
        heading={svc.cta.heading}
        body={svc.cta.body}
        primaryCta={{ label: "Request a Private Offer", href: "/request-private-offer" }}
        secondaryCta={{ label: "Back to Services", href: "/services" }}
        theme="dark"
      />
    </>
  );
}
