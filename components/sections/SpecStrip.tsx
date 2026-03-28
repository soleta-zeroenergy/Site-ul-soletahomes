import Link from "next/link";
import { cn } from "@/lib/cn";

/* ── Types ─────────────────────────────────────────────────────────────────── */
export type SpecStripItem = {
  label:        string;
  description?: string;
};

export type SpecStripProps = {
  eyebrow?:  string;
  heading?:  string;
  items:     SpecStripItem[];
  cta?:      { label: string; href: string };
  theme?:    "light" | "warm" | "dark" | string;
};

/* ── Config ────────────────────────────────────────────────────────────────── */
const bgMap = {
  light: "bg-white",
  warm:  "bg-[#faf8f6]",
  dark:  "bg-[#1a1714]",
};

const itemBg = {
  light: "bg-white",
  warm:  "bg-[#faf8f6]",
  dark:  "bg-[#1e1b18]",
};

const textMap = {
  light: { eyebrow: "text-brand-500", heading: "text-[#1a1714]", num: "text-brand-500/50", label: "text-[#1a1714]", desc: "text-[#6b5d56]", divider: "border-sand-400 bg-sand-400" },
  warm:  { eyebrow: "text-brand-500", heading: "text-[#1a1714]", num: "text-brand-500/50", label: "text-[#1a1714]", desc: "text-[#6b5d56]", divider: "border-sand-400 bg-sand-400" },
  dark:  { eyebrow: "text-brand-400", heading: "text-[#faf8f6]", num: "text-brand-400/50", label: "text-[#faf8f6]", desc: "text-[#9a8e87]",  divider: "border-white/10 bg-white/10" },
};

/* ── Component ─────────────────────────────────────────────────────────────── */
export function SpecStrip({
  eyebrow,
  heading,
  items,
  cta,
  theme = "warm",
}: SpecStripProps) {
  const bg = bgMap[theme];
  const ib = itemBg[theme];
  const t  = textMap[theme];
  const cols =
    items.length === 4 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" :
    items.length === 3 ? "grid-cols-1 sm:grid-cols-3" :
    "grid-cols-1 sm:grid-cols-2";

  return (
    <section className={cn("section-sm", bg)}>
      <div className="container-site">

        {/* Header */}
        {(eyebrow || heading) && (
          <div className="mb-12 max-w-2xl">
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

        {/* Steps grid */}
        <div className={cn("grid gap-px border", t.divider, cols)}>
          {items.map((item, i) => (
            <div key={i} className={cn("px-7 py-8 flex flex-col gap-3", ib)}>

              {/* Step number */}
              <p
                className={cn("font-medium", t.num)}
                style={{
                  fontSize: "0.625rem",
                  letterSpacing: "0.2em",
                  fontFamily: "var(--font-body)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </p>

              {/* Label */}
              <h3
                className={t.label}
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: 1.3,
                  letterSpacing: "0.02em",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {item.label}
              </h3>

              {/* Description */}
              {item.description && (
                <p
                  className={cn("text-sm leading-relaxed", t.desc)}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        {cta && (
          <div className="mt-10">
            <Link
              href={cta.href}
              className={cn(
                "inline-flex items-center gap-2 text-[0.6875rem] font-medium tracking-[0.15em] uppercase transition-colors duration-200",
                theme === "dark"
                  ? "text-[#c8bfb8] hover:text-[#faf8f6]"
                  : "text-brand-500 hover:text-[#1a1714]"
              )}
            >
              {cta.label}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
