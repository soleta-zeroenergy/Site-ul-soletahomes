import type { Metadata }  from "next";
import Image               from "next/image";
import Link                from "next/link";
import { withCanonical }   from "@/lib/seo";
import { FaqPreview }      from "@/components/sections/FaqPreview";
import { CtaBand }         from "@/components/sections/CtaBand";
import { breadcrumb, faqPage, jsonLd } from "@/lib/structured-data";

/* ── Metadata ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  ...withCanonical("/contact"),
  title:       "Contact | Soleta Homes",
  description:
    "Start the conversation with clarity. For project-specific enquiries, submit a Private Offer request. For general questions and press, contact us directly.",
};

/* ── Structured data ─────────────────────────────────────────────────────── */
const breadcrumbSchema = breadcrumb([
  { name: "Home",    path: "/" },
  { name: "Contact", path: "/contact" },
]);

const faqSchema = faqPage([
  {
    q: "Do you work internationally?",
    a: "Yes. Project location, planning conditions, and execution scope vary by country, but international enquiries are welcome.",
  },
  {
    q: "Can I contact you before securing land?",
    a: "Yes. In many cases, an early conversation helps clarify what kind of site, budget range, and house direction make sense before a purchase decision is made.",
  },
  {
    q: "Do you only work from existing models?",
    a: "No. Some projects begin from an existing direction, while others require a more tailored architectural response.",
  },
  {
    q: "Do you offer both design and execution guidance?",
    a: "Yes. Depending on the project, the discussion may involve design direction, technical development, planning logic, and execution strategy.",
  },
  {
    q: "What should I prepare before requesting an offer?",
    a: "The most useful starting points are location, intended use, land status, approximate budget, and timing.",
  },
]);

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <>
      <script {...jsonLd(breadcrumbSchema)} />
      <script {...jsonLd(faqSchema)} />

      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative border-b border-[var(--color-border-light)]"
        style={{ minHeight: "clamp(480px, 52vw, 680px)" }}
      >
        {/* Full-bleed image */}
        <Image
          src="/images/hero.webp"
          alt="Soleta Homes — start the conversation with clarity"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay — stronger at bottom-left for text legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(24,20,16,0.72) 0%, rgba(24,20,16,0.38) 55%, rgba(24,20,16,0.10) 100%)",
          }}
        />

        {/* Text content */}
        <div className="relative z-10 flex h-full items-end">
          <div
            className="container-narrow pb-14 pt-20 lg:pb-20"
            style={{ maxWidth: "52rem" }}
          >
            <span
              className="eyebrow mb-5 block"
              style={{ color: "rgba(247,244,238,0.65)" }}
            >
              Contact
            </span>
            <h1
              className="mb-6 text-[#faf8f6]"
              style={{
                fontSize:      "clamp(2.25rem, 5vw, 3.75rem)",
                lineHeight:    1.06,
                letterSpacing: "-0.02em",
                maxWidth:      "16ch",
              }}
            >
              Start the conversation with clarity
            </h1>
            <p
              className="mb-10 leading-relaxed"
              style={{
                color:      "rgba(247,244,238,0.80)",
                fontSize:   "1.0625rem",
                maxWidth:   "46ch",
                fontFamily: "var(--font-body)",
              }}
            >
              Whether you are evaluating a site, comparing directions, or preparing to
              move forward with a defined project, this is the right place to begin. For
              project-specific discussions, we recommend submitting a private offer
              request. For general questions, press enquiries, or partnerships, you can
              contact us directly.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/request-private-offer"
                className="btn-inverse py-3.5 px-8 text-[0.875rem]"
              >
                Request a Private Offer
              </Link>
              <a
                href="mailto:office@soletahomes.com"
                className="btn inline-flex items-center py-3.5 px-8 border border-white/40 text-[#faf8f6] text-[0.875rem] hover:border-white hover:bg-white/10 transition-colors duration-200"
              >
                Email us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Choose the right path ─────────────────────────────────────── */}
      <section
        className="border-b border-[var(--color-border-light)] py-16 lg:py-24"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-8 block">Choose the right way to reach us</span>
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:divide-x md:divide-[var(--color-border-light)]">

            {/* Card A — Private Offer */}
            <div className="flex flex-col gap-6 pr-0 pb-10 md:pr-12 md:pb-0 border-b border-[var(--color-border-light)] md:border-b-0">
              <div>
                <p
                  className="mb-1"
                  style={{
                    fontFamily:    "var(--font-heading)",
                    fontSize:      "1.375rem",
                    fontWeight:    400,
                    letterSpacing: "0.01em",
                    color:         "#1a1714",
                  }}
                >
                  Request a Private Offer
                </p>
                <div
                  className="mt-3 h-[2px] w-8"
                  style={{ backgroundColor: "var(--color-brand)" }}
                  aria-hidden="true"
                />
              </div>
              <p
                className="leading-relaxed"
                style={{
                  color:      "var(--color-text-secondary)",
                  fontFamily: "var(--font-body)",
                  fontSize:   "0.9375rem",
                }}
              >
                For residential projects that require direction, feasibility input,
                budget orientation, or a clearer next step. This is the best route if
                you already have land, are evaluating land, or want to move from
                inspiration to a serious project discussion.
              </p>
              <div className="mt-auto pt-2">
                <Link
                  href="/request-private-offer"
                  className="btn-primary py-3 px-7 text-[0.875rem] inline-flex"
                >
                  Go to Private Offer
                </Link>
              </div>
            </div>

            {/* Card B — General Enquiries */}
            <div className="flex flex-col gap-6 pl-0 pt-10 md:pl-12 md:pt-0">
              <div>
                <p
                  className="mb-1"
                  style={{
                    fontFamily:    "var(--font-heading)",
                    fontSize:      "1.375rem",
                    fontWeight:    400,
                    letterSpacing: "0.01em",
                    color:         "#1a1714",
                  }}
                >
                  General Enquiries
                </p>
                <div
                  className="mt-3 h-[2px] w-8"
                  style={{ backgroundColor: "var(--color-border)" }}
                  aria-hidden="true"
                />
              </div>
              <p
                className="leading-relaxed"
                style={{
                  color:      "var(--color-text-secondary)",
                  fontFamily: "var(--font-body)",
                  fontSize:   "0.9375rem",
                }}
              >
                For press requests, partnerships, supplier introductions,
                collaborations, or general questions about Soleta Homes. If your
                enquiry is not tied to a defined residential brief, contact us directly
                by email.
              </p>
              <div className="mt-auto pt-2">
                <a
                  href="mailto:office@soletahomes.com"
                  className="btn-outline py-3 px-7 text-[0.875rem] inline-flex"
                >
                  Email office@soletahomes.com
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. Direct contact — image split ─────────────────────────────── */}
      <section
        className="border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">

          {/* Text side */}
          <div className="flex flex-col justify-center gap-8 px-8 py-16 lg:px-14 lg:py-20 xl:px-20 border-b border-[var(--color-border-light)] lg:border-b-0 lg:border-r lg:border-[var(--color-border-light)]">
            <span className="eyebrow block">Direct contact</span>
            <div className="flex flex-col gap-5">
              <p
                className="leading-relaxed"
                style={{
                  color:      "var(--color-text-secondary)",
                  fontFamily: "var(--font-body)",
                  fontSize:   "0.9375rem",
                }}
              >
                If your enquiry does not require a project brief, you can reach us
                directly.
              </p>
              <a
                href="mailto:office@soletahomes.com"
                style={{
                  fontFamily:    "var(--font-heading)",
                  fontSize:      "1.25rem",
                  color:         "var(--color-brand)",
                  letterSpacing: "0.01em",
                  fontWeight:    400,
                  textDecoration: "none",
                }}
                className="hover:opacity-70 transition-opacity duration-200"
              >
                office@soletahomes.com
              </a>
            </div>
            <div
              className="flex flex-col gap-5 pt-4 border-t border-[var(--color-border-light)]"
            >
              <p
                className="leading-relaxed text-sm"
                style={{
                  color:      "var(--color-text-muted)",
                  fontFamily: "var(--font-body)",
                }}
              >
                <span
                  style={{
                    display:    "block",
                    fontWeight: 600,
                    color:      "var(--color-text-secondary)",
                    marginBottom: "0.25rem",
                    fontSize:   "0.8125rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontFamily: "var(--font-ui)",
                  }}
                >
                  Project enquiries
                </span>
                Please use the Private Offer form whenever your enquiry relates to a
                future home, a site, a budget direction, or an active planning
                discussion.
              </p>
              <p
                className="leading-relaxed text-sm"
                style={{
                  color:      "var(--color-text-muted)",
                  fontFamily: "var(--font-body)",
                }}
              >
                <span
                  style={{
                    display:    "block",
                    fontWeight: 600,
                    color:      "var(--color-text-secondary)",
                    marginBottom: "0.25rem",
                    fontSize:   "0.8125rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontFamily: "var(--font-ui)",
                  }}
                >
                  Response rhythm
                </span>
                We reply personally and selectively. For project-related enquiries, a
                more complete brief usually leads to a more useful response.
              </p>
            </div>
          </div>

          {/* Image side */}
          <div
            className="relative w-full"
            style={{ minHeight: "clamp(340px, 40vw, 580px)" }}
          >
            <Image
              src="/images/WhySoleta900x1200.webp"
              alt="Soleta Homes — considered enquiries, considered responses"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </section>

      {/* ── 4. What to include ───────────────────────────────────────────── */}
      <section
        className="border-b border-[var(--color-border-light)] py-16 lg:py-24"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.6fr]">
            <div>
              <span className="eyebrow mb-4 block">What to include</span>
              <p
                className="leading-relaxed"
                style={{
                  color:      "var(--color-text-secondary)",
                  fontFamily: "var(--font-body)",
                  fontSize:   "0.9375rem",
                }}
              >
                A concise message is enough, as long as it includes the essentials.
              </p>
            </div>
            <ul className="flex flex-col gap-0">
              {[
                "Project location or intended region",
                "Whether the home is a primary residence or retreat",
                "Land status — owned, under evaluation, or not yet identified",
                "Budget range",
                "Preferred timeline",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-5 border-b border-[var(--color-border-light)] py-5 last:border-b-0"
                >
                  <span
                    aria-hidden="true"
                    style={{
                      fontFamily:    "var(--font-ui)",
                      fontSize:      "0.625rem",
                      fontWeight:    600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color:         "var(--color-brand)",
                      paddingTop:    "0.2rem",
                      flexShrink:    0,
                      minWidth:      "2rem",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    className="leading-relaxed"
                    style={{
                      color:      "var(--color-text-secondary)",
                      fontFamily: "var(--font-body)",
                      fontSize:   "0.9375rem",
                    }}
                  >
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 5. What happens next ─────────────────────────────────────────── */}
      <section
        className="border-b border-[var(--color-border-light)] py-16 lg:py-24"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.6fr]">
            <div>
              <span className="eyebrow mb-4 block">What happens next</span>
              <p
                className="leading-relaxed"
                style={{
                  color:      "var(--color-text-secondary)",
                  fontFamily: "var(--font-body)",
                  fontSize:   "0.9375rem",
                }}
              >
                We review each enquiry in context and respond according to what is most
                useful at that stage.
              </p>
            </div>
            <div className="flex flex-col gap-0">
              {[
                {
                  step:  "Review",
                  body:  "We read your enquiry and assess its current stage.",
                },
                {
                  step:  "Direction",
                  body:  "We determine whether the right next step is a written reply, a request for clarification, or a project-oriented conversation.",
                },
                {
                  step:  "Response",
                  body:  "We come back with the clearest useful next step rather than a generic sales reply.",
                },
              ].map(({ step, body }, i) => (
                <div
                  key={step}
                  className="grid grid-cols-[120px_1fr] gap-6 border-t border-[var(--color-border-light)] py-8 last:border-b last:border-[var(--color-border-light)]"
                >
                  <div className="flex flex-col gap-1.5">
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
                      style={{
                        fontFamily:    "var(--font-heading)",
                        fontSize:      "1.125rem",
                        fontWeight:    400,
                        letterSpacing: "0.01em",
                        color:         "#1a1714",
                        lineHeight:    1.2,
                      }}
                    >
                      {step}
                    </p>
                  </div>
                  <p
                    className="leading-relaxed self-center"
                    style={{
                      color:      "var(--color-text-secondary)",
                      fontFamily: "var(--font-body)",
                      fontSize:   "0.9375rem",
                    }}
                  >
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Common questions ──────────────────────────────────────────── */}
      <FaqPreview
        eyebrow="Common questions"
        items={[
          {
            q: "Do you work internationally?",
            a: "Yes. Project location, planning conditions, and execution scope vary by country, but international enquiries are welcome.",
          },
          {
            q: "Can I contact you before securing land?",
            a: "Yes. In many cases, an early conversation helps clarify what kind of site, budget range, and house direction make sense before a purchase decision is made.",
          },
          {
            q: "Do you only work from existing models?",
            a: "No. Some projects begin from an existing direction, while others require a more tailored architectural response.",
          },
          {
            q: "Do you offer both design and execution guidance?",
            a: "Yes. Depending on the project, the discussion may involve design direction, technical development, planning logic, and execution strategy.",
          },
          {
            q: "What should I prepare before requesting an offer?",
            a: "The most useful starting points are location, intended use, land status, approximate budget, and timing.",
          },
        ]}
        columns={2}
        theme="light"
      />

      {/* ── 7. Final CTA ─────────────────────────────────────────────────── */}
      <CtaBand
        heading="Ready to discuss your project properly?"
        body="If your enquiry is tied to a future home, the Private Offer route gives us the context needed to respond with more precision."
        primaryCta={{ label: "Request a Private Offer", href: "/request-private-offer" }}
        theme="dark"
      />
    </>
  );
}
