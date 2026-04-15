"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const faqCategories = [
  {
    category: "Price & Budget",
    items: [
      { q: "What is included in the price?", a: "Architecture, engineering, factory manufacturing, delivery, structural erection, insulation, cladding, windows and doors, and project management. Foundations and local statutory fees are scoped separately." },
      { q: "Do you offer a fixed price guarantee?", a: "Yes. Once the design is finalised and the contract signed, the price is fixed. There are no surprises at handover." },
      { q: "What is the starting price for a Soleta home?", a: "Prices depend on model, size, specification and site. Contact us for a private offer tailored to your project." },
      { q: "Are foundations included?", a: "No. Foundation costs vary significantly by site, soil type and local regulations. We provide a scope and cost estimate during the Dream stage." },
    ],
  },
  {
    category: "Process & Timeline",
    items: [
      { q: "How long from first meeting to moving in?", a: "Typically 12 to 18 months from our first site visit to handover. The timeline depends primarily on planning approval in your country, which we manage on your behalf." },
      { q: "Can I visit a Soleta home before committing?", a: "Yes. We arrange private visits to completed homes with the agreement of our clients. Contact us with your location and we will propose the most relevant project." },
      { q: "Do I need an architect?", a: "No. Our in-house architects handle the full design process, from concept to planning submission and construction documents." },
      { q: "What happens after handover?", a: "We provide full documentation, a maintenance guide, and aftercare support. Our team remains available for any technical questions after you move in." },
    ],
  },
  {
    category: "Construction & Technology",
    items: [
      { q: "How long does a Soleta home last?", a: "Our homes are designed for a minimum 80-year structural lifespan. Engineered glulam timber does not degrade like masonry and can be extended without demolition." },
      { q: "What is Post & Beam construction?", a: "Vertical posts and horizontal beams made from glulam carry all structural loads. This eliminates load-bearing interior walls, giving complete freedom in the floor plan." },
      { q: "How is the home assembled on site?", a: "All elements are factory-manufactured, labelled and delivered in assembly order. The structural frame is typically erected in 3 to 5 days. The complete weatherproof envelope is achieved within 2 to 4 weeks." },
      { q: "Can the home be extended in the future?", a: "Yes. The Soleta structural system is designed with pre-planned junction points. New modules can connect without demolishing the original structure." },
    ],
  },
  {
    category: "Energy & Sustainability",
    items: [
      { q: "What does ZeroEnergy mean in practice?", a: "The home produces — through solar, heat recovery and passive design — as much energy as it consumes over a year. Most clients report energy costs 70–90% lower than a conventional home of equivalent size." },
      { q: "What materials are used?", a: "97% organic by material composition. No off-gassing adhesives, no synthetic insulation. The air inside a Soleta home is measurably cleaner than outside." },
      { q: "Is a Soleta home carbon neutral?", a: "Timber stores carbon throughout the life of the building. Combined with ZeroEnergy systems, the carbon footprint over the building's lifetime is significantly lower than any masonry alternative." },
      { q: "What heating system is used?", a: "Typically underfloor heating combined with a heat pump and MVHR (mechanical ventilation with heat recovery). The system is sized for each project based on climate and programme." },
    ],
  },
  {
    category: "Delivery & International",
    items: [
      { q: "Do you work outside Romania?", a: "Yes. We currently deliver projects across Europe, and by arrangement in North and South America, Australia, New Zealand and Asia. Contact us with your site location." },
      { q: "Do you handle planning permission?", a: "Yes. We manage planning submissions on your behalf in all markets we operate in, liaising directly with local authorities through to decision." },
      { q: "How is the home transported?", a: "Factory-manufactured elements are shipped by road freight to your site. International projects use standard container shipping. Delivery costs are scoped per project." },
      { q: "Is the home mortgageable?", a: "Yes. Soleta homes meet the structural and durability standards required by mortgage lenders across all markets we operate in." },
    ],
  },
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <main className="page-top">
      {/* Header */}
      <section className="section-sm bg-[#faf8f6]">
        <div className="container-site">
          <p className="eyebrow mb-4">Support</p>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.08 }}>
            Frequently asked questions
          </h1>
          <p className="subtitle mt-4 max-w-xl">
            Everything you need to know about Soleta homes — before you ask.
          </p>
        </div>
      </section>

      {/* FAQ body */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12 lg:gap-16">

            {/* Category nav */}
            <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {faqCategories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => { setActiveCategory(i); setOpenItem(null); }}
                  className={cn(
                    "text-left px-4 py-3 text-sm font-medium transition-colors duration-200 whitespace-nowrap lg:whitespace-normal border-l-2",
                    activeCategory === i
                      ? "border-brand-500 text-[#1a1714] bg-[#faf8f6]"
                      : "border-transparent text-[#6b5d56] hover:text-[#1a1714] hover:border-sand-400"
                  )}
                >
                  {cat.category}
                </button>
              ))}
            </nav>

            {/* Accordion */}
            <div>
              <h2
                className="mb-8 text-[#1a1714]"
                style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)", fontFamily: "var(--font-heading)", lineHeight: 1.15 }}
              >
                {faqCategories[activeCategory].category}
              </h2>
              <div className="flex flex-col divide-y divide-sand-400">
                {faqCategories[activeCategory].items.map((item, i) => {
                  const key = `${activeCategory}-${i}`;
                  const isOpen = openItem === key;
                  return (
                    <div key={key}>
                      <button
                        onClick={() => setOpenItem(isOpen ? null : key)}
                        className="flex w-full items-center justify-between gap-6 py-5 text-left"
                        aria-expanded={isOpen}
                      >
                        <span style={{ fontFamily: "var(--font-heading)", fontSize: "1.0625rem", lineHeight: 1.35, color: "#1a1714" }}>
                          {item.q}
                        </span>
                        <span
                          className={cn("shrink-0 text-brand-500 text-xl transition-transform duration-200", isOpen && "rotate-45")}
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </button>
                      {isOpen && (
                        <p className="pb-6 text-sm leading-relaxed text-[#6b5d56]" style={{ fontFamily: "var(--font-body)" }}>
                          {item.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-sm bg-[#faf8f6] border-t border-sand-400">
        <div className="container-site flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="eyebrow mb-2">Still have questions?</p>
            <p className="text-[#4a4440] text-sm">Our team responds personally within two business days.</p>
          </div>
          <a href="/contact" className="btn-primary py-4 px-9 shrink-0">
            Contact us directly
          </a>
        </div>
      </section>
    </main>
  );
}
