"use client";

import { useState } from "react";
import { CtaBand } from "@/components/sections/CtaBand";
import { catalogHero, catalogContents } from "@/lib/content/catalog";

const catalogCta = {
  eyebrow: "Ready to build?",
  heading: "Begin your Soleta project",
  body: "The catalogue is the starting point. The conversation is where it becomes real.",
  primaryCta: { label: "Request a Private Offer", href: "/contact" },
  secondaryCta: { label: "View the Collection", href: "/collection" },
  theme: "dark" as const,
};

export default function CatalogPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    interest: "",
  });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <>
      {/* ── 1. Hero ── */}
      <section
        className="section-lg border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-6 block">{catalogHero.eyebrow}</span>
          <h1 className="mb-6 max-w-2xl whitespace-pre-line">{catalogHero.heading}</h1>
          <p className="subtitle max-w-xl">{catalogHero.body}</p>
        </div>
      </section>

      {/* ── 2. What's inside + form ── */}
      <section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">

            {/* Contents list */}
            <div>
              <span className="eyebrow mb-6 block">What&apos;s inside</span>
              <ul className="flex flex-col gap-4">
                {catalogContents.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] pt-1 min-w-[24px]">
                      0{i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>

              {/* Catalogue preview placeholder */}
              <div
                className="mt-10 aspect-[3/4] max-w-[280px] bg-[var(--color-surface)] flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="font-ui text-[0.625rem] uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                  Catalogue preview
                </span>
              </div>
            </div>

            {/* Form */}
            <div
              className="border border-[var(--color-border-light)] p-10"
              style={{ backgroundColor: "var(--soleta-cream)" }}
            >
              {submitted ? (
                <div className="flex flex-col gap-6 py-8">
                  <span className="eyebrow block">Thank you</span>
                  <h2 className="text-[1.75rem]">Your catalogue is on its way.</h2>
                  <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    We have sent the Soleta catalogue to {form.email}. If you do not receive it within a few minutes, please check your spam folder or contact us directly.
                  </p>
                </div>
              ) : (
                <>
                  <span className="eyebrow mb-6 block">Get the catalogue</span>
                  <h2 className="mb-2 text-[1.5rem]">Free download</h2>
                  <p className="mb-8 text-sm text-[var(--color-text-secondary)]">
                    Enter your details and we will send the catalogue to your inbox immediately.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="eyebrow" htmlFor="catalog-name">
                        Your name
                      </label>
                      <input
                        id="catalog-name"
                        type="text"
                        required
                        placeholder="First and last name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 font-ui text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-brand)] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="eyebrow" htmlFor="catalog-email">
                        Email address
                      </label>
                      <input
                        id="catalog-email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 font-ui text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-brand)] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="eyebrow" htmlFor="catalog-country">
                        Country
                      </label>
                      <input
                        id="catalog-country"
                        type="text"
                        placeholder="e.g. Romania, Germany, France"
                        value={form.country}
                        onChange={(e) => setForm({ ...form, country: e.target.value })}
                        className="border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 font-ui text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-brand)] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="eyebrow" htmlFor="catalog-interest">
                        I am interested in
                      </label>
                      <select
                        id="catalog-interest"
                        value={form.interest}
                        onChange={(e) => setForm({ ...form, interest: e.target.value })}
                        className="border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 font-ui text-sm text-[var(--color-text)] focus:border-[var(--color-brand)] focus:outline-none transition-colors"
                      >
                        <option value="">Select a collection</option>
                        <option value="classic">Classic Soleta Homes</option>
                        <option value="signature">Signature Homes</option>
                        <option value="large-family">Large Family Homes</option>
                        <option value="holiday">Holiday &amp; Retreat Homes</option>
                        <option value="custom">Custom Architecture</option>
                        <option value="all">All collections</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary mt-2 disabled:opacity-60"
                    >
                      {loading ? "Sending…" : "Send me the catalogue"}
                    </button>

                    <p className="text-[0.6875rem] text-[var(--color-text-muted)]">
                      We do not share your details with third parties.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <CtaBand {...catalogCta} />
    </>
  );
}
