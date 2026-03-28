import { cn } from "@/lib/cn";

/* ── Types ─────────────────────────────────────────────────────────────────── */
export type FaqItem = {
  q: string;   // question
  a: string;   // answer
};

export type FaqPreviewProps = {
  eyebrow?:  string;
  heading?:  string;
  items:     FaqItem[];
  columns?:  number;
  theme?:    "light" | "warm" | "dark" | string;
};

/* ── Config ─────────────────────────────────────────────────────────────────── */
const bgMap = {
  light: "bg-white",
  warm:  "bg-[#faf8f6]",
  dark:  "bg-[#1a1714]",
};

/* ── Component ──────────────────────────────────────────────────────────────── */
export function FaqPreview({
  eyebrow,
  heading,
  items,
  columns = 2,
  theme = "light",
}: FaqPreviewProps) {
  const isDark   = theme === "dark";
  const gridCols = columns === 3
    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    : "grid-cols-1 md:grid-cols-2";

  return (
    <section className={cn("section-sm", bgMap[theme])}>
      <div className="container-site">

        {/* Header */}
        {(eyebrow || heading) && (
          <div className="mb-12 max-w-xl">
            {eyebrow && (
              <p className={cn("eyebrow mb-3", isDark ? "text-brand-400" : "text-brand-500")}>
                {eyebrow}
              </p>
            )}
            {heading && (
              <h2
                className={isDark ? "text-[#faf8f6]" : "text-[#1a1714]"}
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

        {/* Q&A grid — static, no accordion */}
        <div className={cn("grid gap-x-12 gap-y-0", gridCols)}>
          {items.map((item, i) => (
            <div
              key={i}
              className={cn(
                "py-7 border-t",
                isDark ? "border-white/10" : "border-sand-400"
              )}
            >
              {/* Question */}
              <p
                className={cn("mb-3", isDark ? "text-[#faf8f6]" : "text-[#1a1714]")}
                style={{
                  fontSize: "0.9375rem",
                  fontFamily: "var(--font-heading)",
                  lineHeight: 1.35,
                  letterSpacing: "0.02em",
                  fontWeight: 400,
                }}
              >
                {item.q}
              </p>

              {/* Answer */}
              <p
                className={cn("text-sm leading-relaxed", isDark ? "text-[#9a8e87]" : "text-[#6b5d56]")}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {item.a}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
