import { cn } from "@/lib/cn";

/* ── Types ─────────────────────────────────────────────────────────────────── */
export type BadgeItem = {
  value:   string;   // primary large text — short word or phrase
  label:   string;   // descriptor beneath — one brief line
};

export type BadgeRowProps = {
  eyebrow?:  string;
  heading?:  string;
  items:     BadgeItem[];
  theme?:    "light" | "warm" | "dark";
};

/* ── Config ────────────────────────────────────────────────────────────────── */
const bgMap = {
  light: "bg-white",
  warm:  "bg-[#faf8f6]",
  dark:  "bg-[#1a1714]",
} as const;

const tok = {
  light: {
    eyebrow:  "text-brand-500",
    heading:  "text-[#1a1714]",
    cellBg:   "bg-white",
    value:    "text-[#1a1714]",
    label:    "text-[#6b5d56]",
    divider:  "border-sand-400 bg-sand-400",
    accent:   "bg-brand-500",
  },
  warm: {
    eyebrow:  "text-brand-500",
    heading:  "text-[#1a1714]",
    cellBg:   "bg-[#faf8f6]",
    value:    "text-[#1a1714]",
    label:    "text-[#6b5d56]",
    divider:  "border-sand-400 bg-sand-400",
    accent:   "bg-brand-500",
  },
  dark: {
    eyebrow:  "text-brand-400",
    heading:  "text-[#faf8f6]",
    cellBg:   "bg-[#1e1b18]",
    value:    "text-[#faf8f6]",
    label:    "text-[#9a8e87]",
    divider:  "border-white/10 bg-white/10",
    accent:   "bg-brand-400",
  },
} as const;

/* ── Component ─────────────────────────────────────────────────────────────── */
export function BadgeRow({
  eyebrow,
  heading,
  items,
  theme = "warm",
}: BadgeRowProps) {
  const t = tok[theme];

  /* Responsive grid: 2 cols mobile → 3 cols sm → equal auto cols desktop */
  const count  = items.length;
  const colCls =
    count <= 3 ? "grid-cols-1 sm:grid-cols-3" :
    count === 4 ? "grid-cols-2 sm:grid-cols-4" :
    count === 5 ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" :
    "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6";

  return (
    <section className={cn("section-sm", bgMap[theme])}>
      <div className="container-site">

        {/* Optional header */}
        {(eyebrow || heading) && (
          <div className="mb-12 max-w-xl">
            {eyebrow && (
              <p className={cn("eyebrow mb-3", t.eyebrow)}>{eyebrow}</p>
            )}
            {heading && (
              <h2
                className={t.heading}
                style={{
                  fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                  lineHeight: 1.12,
                  letterSpacing: "0.02em",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {heading}
              </h2>
            )}
          </div>
        )}

        {/* Badge grid — gap-px hairlines */}
        <div className={cn("grid gap-px border", t.divider, colCls)}>
          {items.map((item, i) => (
            <div
              key={i}
              className={cn("flex flex-col gap-3 px-7 py-8", t.cellBg)}
            >
              {/* Thin accent rule */}
              <div aria-hidden="true" className={cn("w-5 h-px", t.accent)} />

              {/* Value — primary large text */}
              <p
                className={cn("font-medium leading-none", t.value)}
                style={{
                  fontSize: "clamp(1.125rem, 1.6vw, 1.375rem)",
                  letterSpacing: "0.02em",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {item.value}
              </p>

              {/* Label — descriptor */}
              <p
                className={cn("text-sm leading-snug", t.label)}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
