import type { Metadata }  from "next";
import Image               from "next/image";
import { withCanonical }   from "@/lib/seo";
import { ContactPanel }    from "@/components/sections/ContactPanel";
import { CtaBand }         from "@/components/sections/CtaBand";
import { breadcrumb, jsonLd } from "@/lib/structured-data";

/* ── Metadata ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  ...withCanonical("/contact"),
  title:       "Contact | Soleta Homes",
  description:
    "Call, WhatsApp, email, or send a general inquiry. Monday–Friday, 09:00–20:00 EET/EEST. We normally reply within 24 hours.",
};

/* ── Structured data ─────────────────────────────────────────────────────── */
const breadcrumbSchema = breadcrumb([
  { name: "Home",    path: "/" },
  { name: "Contact", path: "/contact" },
]);

const PHONE_DISPLAY = "+40 723 300 301";
const PHONE_TEL     = "tel:+40723300301";
const WHATSAPP_HREF = "https://wa.me/40723300301";
const EMAIL_ADDRESS = "office@soletahomes.com";
const EMAIL_HREF    = "mailto:office@soletahomes.com";
const HOURS_NOTE    = "Monday–Friday, 09:00–20:00 EET/EEST (UTC+2 winter / UTC+3 summer)";

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <>
      <script {...jsonLd(breadcrumbSchema)} />

      {/* ── 1. Hero (compact) ──────────────────────────────────────────── */}
      <section
        className="relative border-b border-[var(--color-border-light)]"
        style={{ minHeight: "clamp(320px, 30vw, 400px)" }}
      >
        <Image
          src="/images/hero.webp"
          alt="Soleta Homes — start the conversation with clarity"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(24,20,16,0.72) 0%, rgba(24,20,16,0.38) 55%, rgba(24,20,16,0.10) 100%)",
          }}
        />
        <div className="relative z-10 flex h-full items-end">
          <div className="container-narrow pb-12 pt-16" style={{ maxWidth: "52rem" }}>
            <span className="eyebrow mb-5 block" style={{ color: "rgba(247,244,238,0.65)" }}>
              Contact
            </span>
            <h1
              className="text-[#faf8f6]"
              style={{
                fontSize:      "clamp(2rem, 4.2vw, 3.25rem)",
                lineHeight:    1.08,
                letterSpacing: "-0.02em",
                maxWidth:      "16ch",
              }}
            >
              Start the conversation with clarity
            </h1>
          </div>
        </div>
      </section>

      {/* ── 2. Reach us directly ─────────────────────────────────────────── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-16"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-3 block">Reach us directly</span>
          <p
            className="mb-10 max-w-xl leading-relaxed"
            style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)", fontSize: "0.9375rem" }}
          >
            {HOURS_NOTE}. Calls can be taken directly or scheduled in advance.
          </p>

          <div className="grid grid-cols-1 gap-0 md:grid-cols-3 md:divide-x md:divide-[var(--color-border-light)]">

            {/* Call / WhatsApp */}
            <div className="flex flex-col gap-4 pb-8 md:pb-0 md:pr-10 border-b border-[var(--color-border-light)] md:border-b-0">
              <p
                style={{ fontFamily: "var(--font-heading)", fontSize: "1.0625rem", color: "#1a1714", letterSpacing: "0.01em" }}
              >
                Call or WhatsApp
              </p>
              <a
                href={PHONE_TEL}
                className="leading-snug hover:opacity-70 transition-opacity"
                style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--color-brand)", fontWeight: 500 }}
              >
                {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline self-start py-2.5 px-5 text-[0.8125rem] mt-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
              >
                Message on WhatsApp
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-4 py-8 md:py-0 md:px-10 border-b border-[var(--color-border-light)] md:border-b-0">
              <p
                style={{ fontFamily: "var(--font-heading)", fontSize: "1.0625rem", color: "#1a1714", letterSpacing: "0.01em" }}
              >
                Email
              </p>
              <a
                href={EMAIL_HREF}
                className="leading-snug hover:opacity-70 transition-opacity"
                style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "var(--color-brand)", fontWeight: 500 }}
              >
                {EMAIL_ADDRESS}
              </a>
              <p
                className="leading-relaxed text-sm"
                style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}
              >
                We normally reply within 24 hours.
              </p>
            </div>

            {/* Send an inquiry */}
            <div className="flex flex-col gap-4 pt-8 md:pt-0 md:pl-10">
              <p
                style={{ fontFamily: "var(--font-heading)", fontSize: "1.0625rem", color: "#1a1714", letterSpacing: "0.01em" }}
              >
                Send an inquiry
              </p>
              <p
                className="leading-relaxed text-sm"
                style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
              >
                Use the form below for project questions, press, or partnerships.
              </p>
              <a
                href="#inquiry-form"
                className="btn-primary self-start py-2.5 px-5 text-[0.8125rem] mt-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
              >
                Go to form
              </a>
            </div>

          </div>

          <p className="mt-10 text-sm" style={{ fontFamily: "var(--font-body)" }}>
            <span style={{ color: "var(--color-text-muted)" }}>Looking for EasyKit plans or pricing?</span>{" "}
            <a
              href="https://soletahouseplans.com/contact"
              className="underline underline-offset-2 hover:opacity-70 transition-opacity"
              style={{ color: "var(--color-brand)" }}
            >
              Visit SoletaHousePlans ↗
            </a>
          </p>
        </div>
      </section>

      {/* ── 3. General inquiry form ─────────────────────────────────────── */}
      <ContactPanel
        eyebrow="Send an inquiry"
        heading="Tell us about your project"
        body="Share a few details and we'll route your message to the right person."
        theme="light"
      />

      {/* ── 4. What happens next (compact) ─────────────────────────────── */}
      <section
        className="border-t border-[var(--color-border-light)] py-14 lg:py-16"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-8 block">What happens next</span>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { step: "Review",    body: "We read your inquiry and assess its stage." },
              { step: "Direction", body: "We decide the most useful next step for you." },
              { step: "Response",  body: "We reply within 24 hours with a clear answer." },
            ].map(({ step, body }, i) => (
              <div key={step} className="flex flex-col gap-1.5">
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily:    "var(--font-ui)",
                    fontSize:      "0.625rem",
                    fontWeight:    600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color:         "var(--color-brand)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  style={{ fontFamily: "var(--font-heading)", fontSize: "1.0625rem", color: "#1a1714", lineHeight: 1.2 }}
                >
                  {step}
                </p>
                <p
                  className="leading-relaxed text-sm"
                  style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Final CTA ─────────────────────────────────────────────────── */}
      <CtaBand
        heading="Have a defined project in mind?"
        body="A private consultation gives us the context needed to respond with more precision."
        primaryCta={{ label: "Request a Private Consultation", href: "/request-private-offer" }}
        theme="dark"
      />
    </>
  );
}
