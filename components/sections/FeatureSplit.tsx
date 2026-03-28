import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

/* ── Types ─────────────────────────────────────────────────────────────────── */
export type FeatureSplitProps = {
  eyebrow?:         string;
  heading:          string;          // \n for intentional line breaks
  body:             string;
  bodySecond?:      string;          // optional second paragraph
  cta?:             { label: string; href: string };
  imageSrc?:        string;
  imageAlt?:        string;
  imagePosition?:   "left" | "right";  // default "right"
  theme?:           "light" | "warm" | "dark";
  children?:        React.ReactNode;
};

/* ── Config ────────────────────────────────────────────────────────────────── */
const bgMap = {
  light: "bg-white",
  warm:  "bg-[#faf8f6]",
  dark:  "bg-[#1a1714]",
} as const;

const textMap = {
  light: { eyebrow: "text-brand-500", heading: "text-[#1a1714]", body: "text-[#4a4440]" },
  warm:  { eyebrow: "text-brand-500", heading: "text-[#1a1714]", body: "text-[#4a4440]" },
  dark:  { eyebrow: "text-brand-400", heading: "text-[#faf8f6]", body: "text-[#b09a8b]" },
} as const;

/** Warm light placeholder for light/warm themes */
const PLACEHOLDER_LIGHT =
  "radial-gradient(ellipse 85% 75% at 50% 50%, rgba(128,103,84,0.13) 0%, #e4ddd7 100%)";

/** Warm dark placeholder for dark theme */
const PLACEHOLDER_DARK =
  "radial-gradient(ellipse 75% 65% at 42% 48%, rgba(128,103,84,0.30) 0%, #1a1714 68%)";

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
export function FeatureSplit({
  eyebrow,
  heading,
  body,
  bodySecond,
  cta,
  imageSrc,
  imageAlt = "",
  imagePosition = "right",
  theme = "light",
  children,
}: FeatureSplitProps) {
  const t       = textMap[theme];
  const isDark  = theme === "dark";
  const imgLeft = imagePosition === "left";

  return (
    <section className={cn("section overflow-hidden", bgMap[theme])}>
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Image column ─────────────────────────────────────────────── */}
          <div className={cn(imgLeft ? "lg:order-1" : "lg:order-2")}>
            <div className="relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background: isDark ? PLACEHOLDER_DARK : PLACEHOLDER_LIGHT,
                  }}
                />
              )}
            </div>
          </div>

          {/* ── Content column ───────────────────────────────────────────── */}
          <div
            className={cn(
              "flex flex-col gap-6",
              imgLeft ? "lg:order-2" : "lg:order-1"
            )}
          >
            {eyebrow && (
              <p className={cn("eyebrow", t.eyebrow)}>{eyebrow}</p>
            )}

            <h2
              className={t.heading}
              style={{
                fontSize: "clamp(1.875rem, 3.5vw, 3rem)",
                lineHeight: 1.08,
                letterSpacing: "0.02em",
                fontFamily: "var(--font-heading)",
              }}
            >
              <HeadingLines text={heading} />
            </h2>

            <p
              className={cn("leading-[1.75]", t.body)}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)",
              }}
            >
              {body}
            </p>

            {bodySecond && (
              <p
                className={cn("leading-[1.75]", t.body)}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)",
                }}
              >
                {bodySecond}
              </p>
            )}

            {children}

            {cta && (
              <Link
                href={cta.href}
                className={cn(
                  "mt-2 self-start py-4 px-9",
                  isDark ? "btn-inverse" : "btn-outline"
                )}
              >
                {cta.label}
              </Link>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
