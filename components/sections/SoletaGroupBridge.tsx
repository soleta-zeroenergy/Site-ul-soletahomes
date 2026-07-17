export function SoletaGroupBridge() {
  return (
    <section
      className="border-t border-b border-[var(--color-border-light)] py-14 lg:py-16"
      style={{ backgroundColor: "var(--soleta-cream)" }}
    >
      <div className="container-site">
        <p className="eyebrow mb-8 text-[var(--color-text-muted)]">PART OF SOLETA GROUP</p>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="max-w-xl">
            <h2
              className="text-[#1a1714]"
              style={{
                fontSize: "clamp(1.375rem, 2.2vw, 1.75rem)",
                lineHeight: 1.2,
                letterSpacing: "0.01em",
              }}
            >
              SoletaHomes.com
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              Architecture, built work, materials, engineering and complete Soleta services.
            </p>
          </div>

          <div className="max-w-xl lg:border-l lg:border-[var(--color-border-light)] lg:pl-12">
            <h2
              className="text-[#1a1714]"
              style={{
                fontSize: "clamp(1.375rem, 2.2vw, 1.75rem)",
                lineHeight: 1.2,
                letterSpacing: "0.01em",
              }}
            >
              SoletaHousePlans.com
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              EasyKit options, plan packages and assembly support, with package guidance and project enquiries.
            </p>
            <a
              href="https://soletahouseplans.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex font-ui text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] transition-opacity duration-200 hover:opacity-70"
            >
              VISIT SOLETAHOUSEPLANS.COM <span aria-hidden="true">&#8599;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

