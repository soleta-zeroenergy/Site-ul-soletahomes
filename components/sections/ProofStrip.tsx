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
  const rule  = theme === "warm" ? "var(--color-brand)"  : "var(--color-brand-400, #c9a97a)";
  const value = theme === "warm" ? "#1a1714"             : "#faf8f6";
  const label = theme === "warm" ? "var(--color-text-muted)" : "rgba(250,248,246,0.45)";

  return (
    <div
      className="border-b border-[var(--color-border-light)]"
      style={{ backgroundColor: bg }}
    >
      <div className="container-site">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 py-6 pr-6"
              style={{
                borderRight: i < items.length - 1 ? "1px solid rgba(255,255,255,0.08)" : undefined,
              }}
            >
              {/* Accent rule */}
              <div
                aria-hidden="true"
                style={{
                  width:           "2rem",
                  height:          "2px",
                  backgroundColor: rule,
                  marginBottom:    "0.25rem",
                }}
              />
              {/* Value */}
              <span
                style={{
                  fontFamily:    "var(--font-heading)",
                  fontSize:      "clamp(1rem, 1.5vw, 1.3125rem)",
                  fontWeight:    400,
                  color:         value,
                  lineHeight:    1.2,
                  letterSpacing: "0",
                }}
              >
                {item.value}
              </span>
              {/* Label */}
              <span
                style={{
                  fontFamily:    "var(--font-ui)",
                  fontSize:      "0.5625rem",
                  fontWeight:    500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase" as const,
                  color:         label,
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
