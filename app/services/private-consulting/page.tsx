import type { Metadata } from "next";
import Link from "next/link";
import { withCanonical } from "@/lib/seo";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  ...withCanonical("/services/private-consulting"),
  title: "Private Consulting | Services | Soleta",
  description: "A structured 2-hour session with our design and technical team. We review your site, your brief and your budget — and give you an honest assessment. No obligation.",
};

const cta = {
  eyebrow: "Book a session",
  heading: "Request a Private Consulting session",
  body: "Tell us about your project and we will arrange a session with the right members of our team.",
  primaryCta: { label: "Request a Session", href: "/contact" },
  secondaryCta: { label: "Explore the Process", href: "/process" },
  theme: "dark",
};

export default function PrivateConsultingPage() {
  return (
    <>
      <section
        className="section-lg border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <Link href="/process" className="eyebrow mb-6 inline-flex items-center gap-2 hover:opacity-70 transition-opacity">
            ← Process & Services
          </Link>
          <span className="eyebrow mb-4 block">Private Consulting</span>
          <h1 className="mb-6 max-w-2xl">An honest assessment before you commit</h1>
          <p className="subtitle max-w-xl">
            A structured 2-hour session with our design and technical team. We review your site, your brief and your budget — and tell you exactly what is possible.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_340px]">
            <div className="flex flex-col gap-8">
              <div>
                <span className="eyebrow mb-4 block">What the session covers</span>
                <div className="flex flex-col gap-4 text-[var(--color-text-secondary)]">
                  <p className="leading-relaxed">The Private Consulting session is designed for people who are serious about building but not yet ready to commit to a full project. You may have a site but no design direction. You may have a design but want a second opinion. You may have a budget and want to know what it will actually buy.</p>
                  <p className="leading-relaxed">We review everything you bring — site survey or photos, any drawings or sketches, planning documents, budget range. We give you our honest assessment of feasibility, and a clear recommendation on which collection or service level fits your situation.</p>
                  <p className="leading-relaxed">The session is structured, not open-ended. We cover site analysis, model fit, budget alignment and next steps — in that order. You leave with a written summary of what was discussed and our recommendations.</p>
                </div>
              </div>

              <div>
                <span className="eyebrow mb-4 block">What you receive</span>
                <ul className="flex flex-col gap-3">
                  {[
                    "2-hour session with our design and technical team",
                    "Site analysis — orientation, access, planning constraints",
                    "Model recommendation — which collection fits your brief",
                    "Budget alignment — honest assessment of cost range",
                    "Written summary of recommendations",
                    "No obligation to proceed",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                      <span className="mt-1 h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--color-brand)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside>
              <div className="border border-[var(--color-border-light)] p-8" style={{ backgroundColor: "var(--soleta-cream)" }}>
                <span className="eyebrow mb-6 block">Session details</span>
                <dl className="flex flex-col gap-5">
                  {[
                    { label: "Duration", value: "2 hours" },
                    { label: "Format", value: "Video call or in-person (Bucharest)" },
                    { label: "Who attends", value: "Design lead + technical consultant" },
                    { label: "What to bring", value: "Site details, budget range, any sketches or references" },
                    { label: "Obligation", value: "None" },
                  ].map((spec) => (
                    <div key={spec.label} className="border-b border-[var(--color-border-light)] pb-5 last:border-0 last:pb-0">
                      <dt className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.12em] text-[var(--color-text-muted)] mb-1">{spec.label}</dt>
                      <dd className="font-ui text-sm text-[var(--color-text)]">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand {...cta} />
    </>
  );
}
