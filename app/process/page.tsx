"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import {
  processHero,
  processSteps,
  serviceLevels,
  services,
  processCta,
} from "@/lib/content/process-services";
import { CtaBand } from "@/components/sections/CtaBand";

export default function ProcessPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      {/* ── 1. Hero ── */}
      <section
        className="section-lg border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-6 block">{processHero.eyebrow}</span>
          <h1 className="mb-6 max-w-2xl whitespace-pre-line">{processHero.heading}</h1>
          <p className="subtitle max-w-xl">{processHero.body}</p>
        </div>
      </section>

      {/* ── 2. Process stepper ── */}
      <section id="process-steps" className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-site">
          <span className="eyebrow mb-4 block">The process</span>
          <h2 className="mb-12 text-[2rem]">Five steps from dream to home</h2>

          {/* Step nav pills */}
          <div className="mb-12 flex flex-wrap gap-2">
            {processSteps.map((step, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveStep(i)}
                className={cn(
                  "flex items-center gap-2 border px-5 py-2 font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] transition-colors duration-200",
                  activeStep === i
                    ? "border-[var(--soleta-ink)] bg-[var(--soleta-ink)] text-[var(--soleta-cream)]"
                    : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--soleta-ink)] hover:text-[var(--soleta-ink)]"
                )}
              >
                <span className="opacity-50">{step.number}</span>
                {step.label}
              </button>
            ))}
          </div>

          {/* Active step detail */}
          {processSteps.map((step, i) => (
            <div
              key={i}
              className={cn(
                "grid grid-cols-1 gap-12 border border-[var(--color-border-light)] p-10 lg:grid-cols-[1fr_320px]",
                activeStep !== i && "hidden"
              )}
              style={{ backgroundColor: "var(--soleta-cream)" }}
            >
              <div>
                <div className="mb-6 flex items-baseline gap-4">
                  <span className="font-heading text-[3rem] leading-none text-[var(--color-brand)] opacity-30">
                    {step.number}
                  </span>
                  <h3 className="text-[1.5rem]">{step.heading}</h3>
                </div>
                <p className="mb-8 leading-relaxed text-[var(--color-text-secondary)]">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {i > 0 && (
                    <button
                      type="button"
                      onClick={() => setActiveStep(i - 1)}
                      className="btn-ghost text-[0.625rem]"
                    >
                      ← Previous
                    </button>
                  )}
                  {i < processSteps.length - 1 && (
                    <button
                      type="button"
                      onClick={() => setActiveStep(i + 1)}
                      className="btn-outline text-[0.625rem] px-6 py-3"
                    >
                      Next step →
                    </button>
                  )}
                  {i === processSteps.length - 1 && (
                    <Link href="/contact" className="btn-primary px-6 py-3 text-[0.625rem]">
                      Start your project →
                    </Link>
                  )}
                </div>
              </div>

              <aside className="flex flex-col gap-6">
                <div>
                  <span className="eyebrow mb-2 block">Duration</span>
                  <p className="font-heading text-[1.25rem]">{step.duration}</p>
                </div>
                <div>
                  <span className="eyebrow mb-3 block">What you receive</span>
                  <ul className="flex flex-col gap-2">
                    {step.deliverable.split(" · ").map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
                      >
                        <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-[var(--color-brand)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. Service levels ── */}
      <section
        id="services"
        className="section border-t border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-site">
          <span className="eyebrow mb-4 block">How much do you want us to handle?</span>
          <h2 className="mb-12 text-[2rem]">Three levels of involvement</h2>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-border-light)] md:grid-cols-3">
            {serviceLevels.map((level, i) => (
              <div
                key={i}
                className={cn(
                  "flex flex-col gap-6 p-10",
                  level.featured
                    ? "bg-[var(--soleta-forest)]"
                    : "bg-[var(--soleta-cream)]"
                )}
              >
                {level.featured && (
                  <span className="font-ui text-[0.5625rem] font-medium uppercase tracking-[0.18em] text-[var(--soleta-gold)]">
                    Most popular
                  </span>
                )}
                <div>
                  <h3
                    className="mb-1 text-[1.375rem]"
                    style={{ color: level.featured ? "var(--soleta-cream)" : undefined }}
                  >
                    {level.name}
                  </h3>
                  <p
                    className="font-ui text-[0.6875rem] uppercase tracking-[0.1em]"
                    style={{ color: level.featured ? "var(--soleta-gold)" : "var(--color-brand)" }}
                  >
                    {level.label}
                  </p>
                </div>

                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: level.featured ? "var(--soleta-cream)" : "var(--color-text-secondary)",
                    opacity: level.featured ? 0.75 : 1,
                  }}
                >
                  {level.description}
                </p>

                <ul className="flex flex-col gap-2">
                  {level.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm"
                      style={{
                        color: level.featured ? "var(--soleta-cream)" : "var(--color-text-secondary)",
                        opacity: level.featured ? 0.7 : 1,
                      }}
                    >
                      <span
                        className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full"
                        style={{
                          backgroundColor: level.featured
                            ? "var(--soleta-gold)"
                            : "var(--color-brand)",
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col gap-3 pt-4">
                  <p
                    className="font-heading text-[1.5rem]"
                    style={{ color: level.featured ? "var(--soleta-cream)" : undefined }}
                  >
                    {level.price}
                  </p>
                  <Link
                    href="/contact"
                    className={level.featured ? "btn-inverse self-start" : "btn-outline self-start"}
                  >
                    {level.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Services grid ── */}
      <section
        className="section border-t border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-site">
          <span className="eyebrow mb-4 block">Services</span>
          <h2 className="mb-12 text-[2rem]">What we offer</h2>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-border-light)] md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 bg-[var(--color-bg)] p-8"
              >
                <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)]">
                  0{i + 1}
                </span>
                <h3 className="text-[1.125rem]">{service.label}</h3>
                <p className="flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] hover:opacity-70 transition-opacity"
                >
                  Enquire →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA ── */}
      <CtaBand {...processCta} />
    </>
  );
}
