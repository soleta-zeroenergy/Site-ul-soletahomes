import Image from "next/image";
import { cn } from "@/lib/cn";

/* ── Types ─────────────────────────────────────────────────────────────────── */
export type EditorialItem = {
  size?:      "full" | "half" | string;   // default "half"
  category:   string;            // eyebrow / category label
  title:      string;
  body?:      string;
  imageSrc?:  string;
  imageAlt?:  string;
};

export type EditorialGalleryProps = {
  eyebrow?:  string;
  heading?:  string;             // \n for line breaks
  body?:     string;
  items:     EditorialItem[];
  theme?:    "light" | "warm" | string;
};

/* ── Config ─────────────────────────────────────────────────────────────────── */
/** Atmospheric warm-dark placeholders — feel like dusk light through timber */
const PLACEHOLDERS = [
  "radial-gradient(ellipse 90% 80% at 30% 60%, rgba(64,44,32,0.95) 0%, rgba(26,23,20,0.98) 55%, #1a1714 100%)",
  "radial-gradient(ellipse 75% 85% at 65% 35%, rgba(80,58,40,0.90) 0%, rgba(26,23,20,0.96) 60%, #1e1b18 100%)",
  "radial-gradient(ellipse 85% 70% at 20% 70%, rgba(56,40,28,0.92) 0%, rgba(26,23,20,0.97) 58%, #1a1714 100%)",
  "radial-gradient(ellipse 80% 90% at 75% 25%, rgba(72,52,36,0.88) 0%, rgba(26,23,20,0.95) 62%, #1e1b18 100%)",
  "radial-gradient(ellipse 95% 75% at 45% 55%, rgba(60,42,30,0.93) 0%, rgba(26,23,20,0.97) 56%, #1a1714 100%)",
  "radial-gradient(ellipse 70% 88% at 55% 40%, rgba(76,54,38,0.91) 0%, rgba(26,23,20,0.96) 60%, #1e1b18 100%)",
];

/* ── Helpers ────────────────────────────────────────────────────────────────── */
function HeadingLines({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, i) => (
        <span key={i}>{i > 0 && <br />}{line}</span>
      ))}
    </>
  );
}

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")";

function PlaceholderBg({ index }: { index: number }) {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: PLACEHOLDERS[index % PLACEHOLDERS.length] }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: GRAIN }}
      />
    </>
  );
}

/* ── Sub-components ─────────────────────────────────────────────────────────── */

/** Full-width item: image left (2/3), text panel right (1/3) */
function FullItem({ item, index }: { item: EditorialItem; index: number }) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-3 bg-white">
      {/* Image — spans 2 of 3 columns */}
      <div className="relative md:col-span-2 aspect-[4/3] md:aspect-auto min-h-[320px] overflow-hidden">
        {item.imageSrc ? (
          <>
            <Image src={item.imageSrc} alt={item.imageAlt ?? item.title} fill className="object-cover" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
          </>
        ) : (
          <PlaceholderBg index={index} />
        )}
      </div>

      {/* Text panel */}
      <div className="flex flex-col justify-center px-10 py-12 md:py-16 gap-5 border-t md:border-t-0 md:border-l border-sand-400">
        <p className="eyebrow text-brand-500">{item.category}</p>

        <h3
          className="text-[#1a1714]"
          style={{
            fontSize: "clamp(1.375rem, 2vw, 1.875rem)",
            lineHeight: 1.15,
            letterSpacing: "0.02em",
            fontFamily: "var(--font-heading)",
          }}
        >
          {item.title}
        </h3>

        {item.body && (
          <p
            className="text-[#6b5d56] leading-[1.75]"
            style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.875rem, 0.95vw, 1rem)" }}
          >
            {item.body}
          </p>
        )}
      </div>
    </article>
  );
}

/** Half-width item: image top, caption below */
function HalfItem({ item, index }: { item: EditorialItem; index: number }) {
  return (
    <article className="flex flex-col bg-white">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {item.imageSrc ? (
          <>
            <Image src={item.imageSrc} alt={item.imageAlt ?? item.title} fill className="object-cover" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </>
        ) : (
          <PlaceholderBg index={index} />
        )}

        {/* Category inside image — bottom left */}
        <div className="absolute bottom-4 left-5">
          <p className="eyebrow text-white/80">{item.category}</p>
        </div>
      </div>

      {/* Caption */}
      <div className="px-7 pt-6 pb-8 flex flex-col gap-3 border-t border-sand-400">
        <h3
          className="text-[#1a1714]"
          style={{
            fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
            lineHeight: 1.25,
            letterSpacing: "0.02em",
            fontFamily: "var(--font-heading)",
          }}
        >
          {item.title}
        </h3>

        {item.body && (
          <p className="text-[#6b5d56] text-sm leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            {item.body}
          </p>
        )}
      </div>
    </article>
  );
}

/* ── Row grouping ───────────────────────────────────────────────────────────── */
type Row =
  | { type: "full";   item: EditorialItem; index: number }
  | { type: "halves"; items: { item: EditorialItem; index: number }[] };

function buildRows(items: EditorialItem[]): Row[] {
  const rows: Row[] = [];
  let buffer: { item: EditorialItem; index: number }[] = [];

  const flush = () => {
    if (buffer.length === 0) return;
    rows.push({ type: "halves", items: [...buffer] });
    buffer = [];
  };

  items.forEach((item, i) => {
    if (item.size === "full") {
      flush();
      rows.push({ type: "full", item, index: i });
    } else {
      buffer.push({ item, index: i });
      if (buffer.length === 2) flush();
    }
  });

  flush(); // remaining half item (if odd count)
  return rows;
}

/* ── Component ──────────────────────────────────────────────────────────────── */
export function EditorialGallery({
  eyebrow,
  heading,
  body,
  items,
  theme = "light",
}: EditorialGalleryProps) {
  const bgSection = theme === "warm" ? "bg-[#faf8f6]" : "bg-white";
  const rows      = buildRows(items);

  return (
    <section className={cn("section", bgSection)}>
      <div className="container-site">

        {/* Section header */}
        {(eyebrow || heading || body) && (
          <div className="mb-14 max-w-2xl">
            {eyebrow && <p className="eyebrow mb-4 text-brand-500">{eyebrow}</p>}
            {heading && (
              <h2
                className="text-[#1a1714] mb-5"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  fontFamily: "var(--font-heading)",
                }}
              >
                <HeadingLines text={heading} />
              </h2>
            )}
            {body && (
              <p
                className="text-[#4a4440] leading-[1.75]"
                style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)" }}
              >
                {body}
              </p>
            )}
          </div>
        )}

        {/* Editorial grid — outer border, gap-px hairlines between rows */}
        <div className="border border-sand-400 flex flex-col gap-px bg-sand-400 overflow-hidden">
          {rows.map((row, ri) => {
            if (row.type === "full") {
              return <FullItem key={ri} item={row.item} index={row.index} />;
            }
            return (
              <div key={ri} className="grid grid-cols-1 md:grid-cols-2 gap-px bg-sand-400">
                {row.items.map(({ item, index }) => (
                  <HalfItem key={index} item={item} index={index} />
                ))}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
