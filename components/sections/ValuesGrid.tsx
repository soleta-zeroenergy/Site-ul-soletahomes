import { cn } from "@/lib/cn";

/* ── Types ─────────────────────────────────────────────────────────────────── */
export type ValueItem = {
  title: string;
  body:  string;
};

export type ValuesGridProps = {
  eyebrow?:   string;
  heading?:   string;     // \n for intentional line breaks
  body?:      string;
  items:      ValueItem[];
  columns?:   number;      // default 3
  theme?:     "light" | "warm" | "dark" | string;
  embedded?:  boolean;     // true = no outer <section> wrapper (caller owns the section)
};

/* ── Config ────────────────────────────────────────────────────────────────── */
const bgMap = {
  light: "bg-white",
  warm:  "bg-[#faf8f6]",
  dark:  "bg-[#1a1714]",
};

/* ── Helpers ───────────────────────────────────────────────────────────────── */
function HeadingLines({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {line}
        </span>
      ))}
    </>
  );
}

/* ── Component ─────────────────────────────────────────────────────────────── */
export function ValuesGrid({
  eyebrow,
  heading,
  body,
  items,
  columns = 3,
  theme = "warm",
  embedded = false,
}: ValuesGridProps) {
  const isDark = theme === "dark";

  const gridCols =
    columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  const content = (
    <>
      {/* Section header */}
      {(eyebrow || heading || body) && (
        <div className={cn(embedded ? "mb-8 max-w-none" : "mb-16 max-w-2xl")}>
          {eyebrow && (
            <p className={cn("eyebrow mb-4", isDark ? "text-brand-400" : "text-brand-500")}>
              {eyebrow}
            </p>
          )}
          {heading && (
            <h2
              className={cn("mb-4", isDark ? "text-[#faf8f6]" : "text-[#1a1714]")}
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.1,
                letterSpacing: "0.02em",
                fontFamily: "var(--font-heading)",
              }}
            >
              <HeadingLines text={heading} />
            </h2>
          )}
          {body && (
            <p
              className={cn("leading-relaxed", isDark ? "text-[#b09a8b]" : "text-[#4a4440]")}
              style={{
                fontFamily: "var(--font-subtitle)",
                fontSize: "clamp(1rem, 1.2vw, 1.125rem)",
              }}
            >
              {body}
            </p>
          )}
        </div>
      )}

      {/* Values grid */}
      <div className={cn("grid gap-x-12 gap-y-0", gridCols)}>
        {items.map((item, i) => (
          <article
            key={i}
            className={cn(
              "flex flex-col gap-3 pt-8 pb-10",
              "border-t",
              isDark ? "border-white/10" : "border-sand-400"
            )}
          >
            {/* Thin accent rule above title */}
            <div
              aria-hidden="true"
              className={cn(
                "w-6 h-px mb-1",
                isDark ? "bg-brand-400" : "bg-brand-500"
              )}
            />

            <h3
              className={cn(isDark ? "text-[#faf8f6]" : "text-[#1a1714]")}
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.3,
                letterSpacing: "0.02em",
                fontFamily: "var(--font-heading)",
              }}
            >
              {item.title}
            </h3>

            <p
              className={cn(
                "text-sm leading-relaxed",
                isDark ? "text-[#9a8e87]" : "text-[#6b5d56]"
              )}
            >
              {item.body}
            </p>
          </article>
        ))}
      </div>
    </>
  );

  if (embedded) return content;

  return (
    <section className={cn("section", bgMap[theme])}>
      <div className="container-site">
        {content}
      </div>
    </section>
  );
}
