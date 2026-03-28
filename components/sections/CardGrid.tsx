import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

/* ── Types ─────────────────────────────────────────────────────────────────── */
export type CardItem = {
  imageSrc?:  string;
  imageAlt?:  string;
  eyebrow?:   string;
  title:      string;
  body?:      string;
  href?:      string;
  cta?:       string;   // link label — defaults to "Discover"
};

export type CardGridProps = {
  eyebrow?:  string;
  heading?:  string;
  body?:     string;
  cards:     CardItem[];
  columns?:  number;     // defaults to 3, or 4 if cards.length === 4
  cta?:      { label: string; href: string };
  theme?:    "light" | "warm" | "dark" | string;
};

/* ── Component ─────────────────────────────────────────────────────────────── */
export function CardGrid({
  eyebrow,
  heading,
  body,
  cards,
  columns,
  cta,
  theme = "light",
}: CardGridProps) {
  const cols      = columns ?? (cards.length === 4 ? 4 : 3);
  const isDark    = theme === "dark";
  const bgSection = theme === "warm" ? "bg-[#faf8f6]" : isDark ? "bg-[#1a1714]" : "bg-white";
  const divider   = isDark ? "border-white/10 bg-white/10" : "border-sand-400 bg-sand-400";

  const gridCols =
    cols === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";

  return (
    <section className={cn("section", bgSection)}>
      <div className="container-site">

        {/* Section header */}
        {(eyebrow || heading || body) && (
          <div className="mb-14 max-w-2xl">
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            {heading && (
              <h2
                className="text-[#1a1714] mb-4"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  lineHeight: 1.12,
                  letterSpacing: "0.02em",
                }}
              >
                {heading}
              </h2>
            )}
            {body && (
              <p
                className="text-[#4a4440] leading-relaxed"
                style={{ fontFamily: "var(--font-subtitle)", fontSize: "1.125rem" }}
              >
                {body}
              </p>
            )}
          </div>
        )}

        {/* Card grid — gap-px creates hairline dividers between cards */}
        <div className={cn("grid gap-px border", divider, gridCols)}>
          {cards.map((card, i) => (
            <article
              key={i}
              className={cn(
                "group flex flex-col overflow-hidden",
                isDark ? "bg-[#222019]" : "bg-white",
                card.href && "cursor-pointer"
              )}
            >
              {/* Image area */}
              <div className="relative aspect-[3/2] overflow-hidden bg-[#ece9e5]">
                {card.imageSrc ? (
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt ?? card.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                ) : (
                  /* Placeholder atmosphere */
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(128,103,84,0.10) 0%, transparent 100%)",
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 gap-3">
                {card.eyebrow && (
                  <p className={cn("eyebrow", isDark ? "text-brand-400" : "text-brand-500")}>
                    {card.eyebrow}
                  </p>
                )}

                <h3
                  className={isDark ? "text-[#faf8f6]" : "text-[#1a1714]"}
                  style={{
                    fontSize: "1.125rem",
                    lineHeight: 1.3,
                    letterSpacing: "0.02em",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {card.title}
                </h3>

                {card.body && (
                  <p className={cn("text-sm leading-relaxed flex-1", isDark ? "text-[#9a8e87]" : "text-[#6b5d56]")}>
                    {card.body}
                  </p>
                )}

                {card.href && (
                  <Link
                    href={card.href}
                    className={cn(
                      "mt-2 inline-flex items-center gap-1.5 text-[0.625rem] font-medium tracking-[0.14em] uppercase transition-colors duration-200",
                      isDark
                        ? "text-brand-400 hover:text-[#faf8f6]"
                        : "text-brand-500 hover:text-[#1a1714]"
                    )}
                  >
                    {card.cta ?? "Discover"}
                    <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Section-level CTA */}
        {cta && (
          <div className="mt-12 flex justify-center">
            <Link
              href={cta.href}
              className={cn(
                "py-4 px-10",
                isDark
                  ? "btn inline-flex border border-white/30 text-[#faf8f6] hover:border-white hover:bg-white/10 transition-colors duration-200"
                  : "btn-outline"
              )}
            >
              {cta.label}
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
