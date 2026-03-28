import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

/* ── Types ─────────────────────────────────────────────────────────────────── */
export type ModelCard = {
  imageSrc?:  string;
  imageAlt?:  string;
  eyebrow?:   string;
  title:      string;
  body?:      string;
  href?:      string;
  cta?:       string;   // link label, defaults to "Explore collection"
};

export type ModelCardGridProps = {
  eyebrow?:  string;
  heading?:  string;
  body?:     string;
  cards:     ModelCard[];   // 5 items for standard 2+3 layout
  theme?:    "light" | "warm";
};

/* ── Config ────────────────────────────────────────────────────────────────── */
/** Warm placeholders — one per card, varied focal points */
const PLACEHOLDERS = [
  "radial-gradient(ellipse 80% 70% at 32% 42%, rgba(128,103,84,0.16) 0%, #e4ddd7 100%)",
  "radial-gradient(ellipse 80% 70% at 68% 55%, rgba(128,103,84,0.13) 0%, #ece9e5 100%)",
  "radial-gradient(ellipse 80% 70% at 50% 28%, rgba(128,103,84,0.18) 0%, #dedad5 100%)",
  "radial-gradient(ellipse 80% 70% at 22% 62%, rgba(128,103,84,0.14) 0%, #e8e3de 100%)",
  "radial-gradient(ellipse 80% 70% at 72% 40%, rgba(128,103,84,0.15) 0%, #ece9e5 100%)",
];

/* ── Sub-component ─────────────────────────────────────────────────────────── */
function ModelCardItem({
  card,
  index,
  imageAspect,
  cardBg,
}: {
  card: ModelCard;
  index: number;
  imageAspect: string;
  cardBg: string;
}) {
  const innerContent = (
    <>
      {/* Image */}
      <div className={cn("relative overflow-hidden", imageAspect)}>
        {card.imageSrc ? (
          <Image
            src={card.imageSrc}
            alt={card.imageAlt ?? card.title}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: PLACEHOLDERS[index % PLACEHOLDERS.length] }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-7 pt-6 pb-8 gap-3">
        {card.eyebrow && (
          <p className="eyebrow text-brand-500">{card.eyebrow}</p>
        )}

        <h3
          style={{
            fontSize: "1.1875rem",
            lineHeight: 1.25,
            letterSpacing: "0.02em",
            fontFamily: "var(--font-heading)",
            color: "#1a1714",
          }}
        >
          {card.title}
        </h3>

        {card.body && (
          <p
            className="text-[0.875rem] leading-relaxed flex-1"
            style={{ color: "#6b5d56" }}
          >
            {card.body}
          </p>
        )}

        {card.href && (
          <span className="mt-2 inline-flex items-center gap-1.5 text-[0.625rem] font-medium tracking-[0.14em] uppercase text-brand-500">
            {card.cta ?? "Explore collection"}
            <span aria-hidden="true">→</span>
          </span>
        )}
      </div>
    </>
  );

  if (card.href) {
    return (
      <Link
        href={card.href}
        className={cn("group flex flex-col overflow-hidden cursor-pointer", cardBg)}
      >
        {innerContent}
      </Link>
    );
  }

  return (
    <article className={cn("group flex flex-col overflow-hidden", cardBg)}>
      {innerContent}
    </article>
  );
}

/* ── Component ─────────────────────────────────────────────────────────────── */
export function ModelCardGrid({
  eyebrow,
  heading,
  body,
  cards,
  theme = "light",
}: ModelCardGridProps) {
  const bgSection = theme === "warm" ? "bg-[#faf8f6]" : "bg-white";
  const cardBg    = theme === "warm" ? "bg-white" : "bg-white";   // cards always white
  const divider   = "border-sand-400 bg-sand-400";

  const topRow    = cards.slice(0, 2);
  const bottomRow = cards.slice(2, 5);

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
                  fontFamily: "var(--font-heading)",
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

        {/* Two-row grid: 2 on top, 3 on bottom */}
        <div className={cn("border", divider)}>

          {/* Row 1 — two wider cards */}
          <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-px", divider)}>
            {topRow.map((card, i) => (
              <ModelCardItem
                key={i}
                card={card}
                index={i}
                imageAspect="aspect-[4/3]"
                cardBg={cardBg}
              />
            ))}
          </div>

          {/* Hairline row separator */}
          <div className="h-px bg-sand-400" aria-hidden="true" />

          {/* Row 2 — three narrower cards */}
          <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-px", divider)}>
            {bottomRow.map((card, i) => (
              <ModelCardItem
                key={i}
                card={card}
                index={i + 2}
                imageAspect="aspect-[3/2]"
                cardBg={cardBg}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
