/* ─────────────────────────────────────────────────────────────────────────────
   EcosystemSplit — SoletaHomes vs SoletaHousePlans two-column module
   ───────────────────────────────────────────────────────────────────────────── */

export function EcosystemSplit() {
  return (
    <section
      className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
      style={{ backgroundColor: "var(--soleta-cream)" }}
    >
      <div className="container-narrow">
        <span
          style={{
            fontFamily:    "var(--font-ui)",
            fontSize:      "0.5625rem",
            fontWeight:    500,
            letterSpacing: "0.14em",
            textTransform: "uppercase" as const,
            color:         "var(--color-text-muted)",
            display:       "block",
            marginBottom:  "2.5rem",
          }}
        >
          Part of Soleta Group
        </span>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-0">
          {/* Left — SoletaHomes */}
          <div
            className="flex flex-col gap-4 md:pr-14"
            style={{ borderRight: "none" }}
          >
            <span
              style={{
                fontFamily:    "var(--font-heading)",
                fontSize:      "1.25rem",
                fontWeight:    400,
                letterSpacing: "0.01em",
                color:         "#1a1714",
                lineHeight:    1.2,
              }}
            >
              SoletaHomes.com
            </span>
            <p
              className="leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                fontSize:   "0.9375rem",
                color:      "var(--color-text-secondary)",
                maxWidth:   "38ch",
              }}
            >
              Premium timber homes. Private residential projects, large-scale and
              landmark architecture, direct consultation, design-to-delivery. No
              online purchase.
            </p>
          </div>

          {/* Right — SoletaHousePlans */}
          <div
            className="flex flex-col gap-4 md:pl-14 md:border-l md:border-[var(--color-border-light)]"
          >
            <span
              style={{
                fontFamily:    "var(--font-heading)",
                fontSize:      "1.25rem",
                fontWeight:    400,
                letterSpacing: "0.01em",
                color:         "#1a1714",
                lineHeight:    1.2,
              }}
            >
              SoletaHousePlans.com
            </span>
            <p
              className="leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                fontSize:   "0.9375rem",
                color:      "var(--color-text-secondary)",
                maxWidth:   "38ch",
              }}
            >
              House plans, kits, and assembly support. Public pricing and direct
              online purchase for smaller projects.
            </p>
            <a
              href="https://soletahouseplans.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily:    "var(--font-ui)",
                fontSize:      "0.6875rem",
                fontWeight:    500,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color:         "var(--color-brand)",
                textDecoration: "none",
                marginTop:     "0.25rem",
              }}
              className="hover:opacity-70 transition-opacity duration-200"
            >
              Visit SoletaHousePlans.com ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
