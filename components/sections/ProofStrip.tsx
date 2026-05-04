/* ─────────────────────────────────────────────────────────────────────────────
   ProofStrip — 4-column dark proof band with label + value pairs
   ───────────────────────────────────────────────────────────────────────────── */

type ProofItem = { label: string; value: string };

type ProofStripProps = {
  items: ProofItem[];
  theme?: "dark" | "warm";
};

export function ProofStrip({ items, theme = "dark" }: ProofStripProps) {
  const bg    = theme === "warm" ? "var(--soleta-cream)" : "#1a1714";
  const rule  = theme === "warm" ? "var(--color-brand)"  : "var(--soleta-gold, #c9a97a)";
  const value = theme === "warm" ? "#1a1714"             : "#faf8f6";
  const label = theme === "warm" ? "var(--color-text-muted)" : "rgba(250,248,246,0.52)";
  const border = theme === "warm" ? "var(--color-border-light)" : "rgba(250,248,246,0.10)";

  return (
    <div
      className="border-b"
      style={{ backgroundColor: bg }}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex min-h-[150px] flex-col justify-between gap-6 py-8 pr-8 lg:py-10"
              style={{
                borderRight: i < items.length - 1 ? `1px solid ${border}` : undefined,
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  aria-hidden="true"
                  style={{
                    width:           "2.5rem",
                    height:          "1px",
                    backgroundColor: rule,
                  }}
                />
                <span
                  style={{
                    fontFamily:    "var(--font-ui)",
                    fontSize:      "0.5625rem",
                    fontWeight:    600,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase" as const,
                    color:         label,
                  }}
                >
                  {item.label}
                </span>
              </div>
              <span
                style={{
                  fontFamily:    "var(--font-heading)",
                  fontSize:      "clamp(1.45rem, 2.45vw, 2.2rem)",
                  fontWeight:    400,
                  color:         value,
                  lineHeight:    1.08,
                  letterSpacing: "0",
                }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
