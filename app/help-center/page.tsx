import type { Metadata }   from "next";
import Image                from "next/image";
import Link                 from "next/link";
import { withCanonical }    from "@/lib/seo";
import { FaqAccordion }     from "@/components/ui/FaqAccordion";
import { CtaBand }          from "@/components/sections/CtaBand";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data-helpers";

/* ── Metadata ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  ...withCanonical("/help-center"),
  title:       "Help Center | Soleta Homes",
  description:
    "Practical answers to the questions clients ask before a project is fully defined — budget, land, process, flexibility, timing, and what to prepare.",
};

/* ── FAQ data ────────────────────────────────────────────────────────────── */
const categories = [
  {
    id:      "budget",
    label:   "Budget & Pricing",
    items: [
      {
        question: "How much does a Soleta home cost?",
        answer:   "The answer depends on scale, level of customization, site conditions, technical scope, specification level, and location. The most useful early step is to define direction, not to reduce the discussion to a single generic number.",
      },
      {
        question: "What affects the budget most?",
        answer:   "The main factors are size, architectural complexity, degree of customization, site conditions, engineering requirements, material specification, and the scope of execution.",
      },
    ],
  },
  {
    id:    "land",
    label: "Land & Planning",
    items: [
      {
        question: "Can I contact you before securing land?",
        answer:   "Yes. In many cases, that is the right moment to ask better questions. Early clarity can help avoid a poor site decision or an unrealistic brief.",
      },
      {
        question: "What should I know about land before starting?",
        answer:   "Access, topography, utilities, planning constraints, orientation, climate exposure, and the intended use of the home all matter early.",
      },
    ],
  },
  {
    id:    "design",
    label: "Design & Customization",
    items: [
      {
        question: "Do you only work from existing models?",
        answer:   "No. Some projects begin from an existing direction, while others require a more tailored architectural response.",
      },
      {
        question: "How much can a model be adapted?",
        answer:   "That depends on the starting point and the goals of the project. Some adaptations are straightforward, while others shift the project into a more custom path.",
      },
    ],
  },
  {
    id:    "engineering",
    label: "Engineering & Performance",
    items: [
      {
        question: "Do you address technical performance early?",
        answer:   "Yes. Performance, build logic, and material behavior should not be treated as afterthoughts. They influence design decisions from the beginning.",
      },
      {
        question: "What do healthy materials mean in practice?",
        answer:   "It means making material choices with attention to durability, build logic, indoor quality, and long-term use, rather than relying on vague claims.",
      },
    ],
  },
  {
    id:    "delivery",
    label: "Delivery & Timelines",
    items: [
      {
        question: "How long does the process usually take?",
        answer:   "The timeline depends on scope, location, planning conditions, technical development, and execution strategy. A serious answer requires context.",
      },
      {
        question: "What happens after the first enquiry?",
        answer:   "We review the enquiry, assess its current stage, and determine the most useful next step — written guidance, clarification, or a more project-oriented conversation.",
      },
    ],
  },
  {
    id:    "international",
    label: "International Projects",
    items: [
      {
        question: "Do you work outside Romania?",
        answer:   "Yes. International enquiries are welcome, although the planning path, technical coordination, and execution logic vary by country.",
      },
      {
        question: "Can you support both design and execution strategy?",
        answer:   "Yes. Depending on the project, the discussion may involve architectural direction, technical development, planning logic, and implementation structure.",
      },
    ],
  },
  {
    id:    "aftercare",
    label: "Aftercare",
    items: [
      {
        question: "Do you remain involved after delivery?",
        answer:   "Aftercare depends on project scope and implementation structure, but long-term usability and continuity matter in how we think about the work.",
      },
      {
        question: "Can the house be planned for long-term performance and maintenance?",
        answer:   "Yes. That should be built into the thinking early, not added later as an afterthought.",
      },
    ],
  },
] as const;

/* ── Structured data ─────────────────────────────────────────────────────── */
const breadcrumbs = breadcrumbSchema([
  { name: "Home",        href: "/" },
  { name: "Help Center", href: "/help-center" },
]);

const allFaqs = faqSchema(
  categories.flatMap((c) =>
    c.items.map((item) => ({ question: item.question, answer: item.answer }))
  )
);

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function HelpCenterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(allFaqs) }}
      />

      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section
        className="border-b border-[var(--color-border-light)] px-0 pt-12 pb-10 lg:pt-16 lg:pb-14"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-4 block">Help Center</span>
          <h1
            className="mb-6 max-w-2xl"
            style={{
              fontSize:      "clamp(2rem, 4.5vw, 3.25rem)",
              lineHeight:    1.08,
              letterSpacing: "-0.02em",
            }}
          >
            Questions clients usually ask early
          </h1>
          <p
            className="max-w-xl leading-relaxed"
            style={{
              color:      "var(--color-text-secondary)",
              fontFamily: "var(--font-body)",
              fontSize:   "1.0625rem",
            }}
          >
            This page is intended to answer the practical questions that appear before
            a project becomes fully defined — cost, land, process, flexibility, timing,
            and what to prepare before moving forward.
          </p>
        </div>
      </section>

      {/* ── Hero image strip ────────────────────────────────────────────── */}
      <div
        className="relative w-full border-b border-[var(--color-border-light)]"
        style={{ height: "clamp(220px, 28vw, 380px)" }}
      >
        <Image
          src="/images/Classic800x533.webp"
          alt="Soleta Homes — practical answers for early-stage projects"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" aria-hidden="true" />
      </div>

      {/* ── 2. Category navigation grid ─────────────────────────────────── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-8 block">Browse by topic</span>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="group flex flex-col gap-2 border border-[var(--color-border-light)] p-5 transition-colors duration-150 hover:border-[var(--color-brand)] hover:bg-[var(--soleta-cream)]"
                style={{ textDecoration: "none" }}
              >
                <span
                  style={{
                    fontFamily:    "var(--font-heading)",
                    fontSize:      "1rem",
                    fontWeight:    400,
                    letterSpacing: "0.01em",
                    color:         "#1a1714",
                    lineHeight:    1.3,
                  }}
                >
                  {cat.label}
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    fontSize:   "0.75rem",
                    color:      "var(--color-brand)",
                    fontFamily: "var(--font-body)",
                    opacity:    0,
                    transition: "opacity 150ms",
                  }}
                  className="group-hover:opacity-100"
                >
                  ↓
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. FAQ sections ─────────────────────────────────────────────── */}
      {categories.map((cat, ci) => (
        <section
          key={cat.id}
          id={cat.id}
          className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
          style={{
            backgroundColor: ci % 2 === 0 ? "var(--soleta-cream)" : "var(--color-bg)",
            scrollMarginTop: "6rem",
          }}
        >
          <div className="container-narrow">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr]">
              {/* Category label */}
              <div className="md:pt-1">
                <span
                  style={{
                    fontFamily:    "var(--font-heading)",
                    fontSize:      "1.1875rem",
                    fontWeight:    400,
                    letterSpacing: "0.01em",
                    color:         "#1a1714",
                    lineHeight:    1.25,
                  }}
                >
                  {cat.label}
                </span>
              </div>
              {/* Accordion */}
              <FaqAccordion
                items={cat.items.map((item) => ({
                  question: item.question,
                  answer:   item.answer,
                }))}
              />
            </div>
          </div>
        </section>
      ))}

      {/* ── 4. Bottom CTA ───────────────────────────────────────────────── */}
      <CtaBand
        heading="Still need a clearer answer?"
        body="If your question is tied to a real site, budget direction, or future home, the Private Offer route gives us the context needed to respond more precisely."
        primaryCta={{ label: "Request a Private Offer", href: "/request-private-offer" }}
        secondaryCta={{ label: "Contact us", href: "/contact" }}
        theme="dark"
      />
    </>
  );
}
