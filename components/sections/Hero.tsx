import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

/* ── Types ─────────────────────────────────────────────────────────────────── */
type Cta = { label: string; href: string };

export type HeroProps = {
  eyebrow?:      string;
  heading:       string;   // use \n for intentional line breaks
  subtext?:      string;
  primaryCta?:   Cta;
  secondaryCta?: Cta;
  imageSrc?:     string;
  imageAlt?:     string;
  align?:        "left" | "center" | string;
  size?:         "full" | "large" | "medium" | string;
};

/* ── Config ────────────────────────────────────────────────────────────────── */
const sizeMap = {
  full:   "min-h-[100svh]",
  large:  "min-h-[85svh]",
  medium: "min-h-[60svh]",
};

/* ── Helpers ───────────────────────────────────────────────────────────────── */
/** Renders a heading string with explicit \n line breaks preserved as <br />. */
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
export function Hero({
  eyebrow,
  heading,
  subtext,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt = "",
  align = "left",
  size = "full",
}: HeroProps) {
  const centered = align === "center";

  return (
    <section
      className={cn(
        "relative flex items-end overflow-hidden bg-[#1a1714]",
        sizeMap[size]
      )}
      aria-label={eyebrow ?? "Hero"}
    >
      {/* Background image */}
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
        />
      )}

      {/* Overlay: gradient on image, warm radials on dark background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={
          imageSrc
            ? {
                background:
                  "linear-gradient(to top, rgba(26,23,20,0.82) 0%, rgba(26,23,20,0.55) 18%, rgba(26,23,20,0.18) 38%, transparent 55%)",
              }
            : {
                background:
                  "radial-gradient(ellipse 75% 55% at 65% 30%, rgba(128,103,84,0.22) 0%, transparent 65%)," +
                  "radial-gradient(ellipse 45% 40% at 15% 85%, rgba(128,103,84,0.12) 0%, transparent 55%)",
              }
        }
      />

      {/* Content */}
      <div
        className={cn(
          "container-site relative z-10 pb-24 pt-16 sm:pt-0 lg:pb-32",
          centered && "flex flex-col items-center text-center"
        )}
      >
        {eyebrow && (
          <p
            className="text-brand-400 mb-8 uppercase tracking-widest"
            style={{ fontFamily: "var(--font-ui)", fontSize: "1.5rem", fontWeight: 400, letterSpacing: "0.14em" }}
          >
            {eyebrow}
          </p>
        )}

        <h1
          className={cn(
            "text-[#faf8f6] mb-8",
            centered ? "max-w-2xl" : "max-w-3xl"
          )}
        >
          <HeadingLines text={heading} />
        </h1>

        {subtext && (
          <p
            className={cn(
              "mb-12 text-[#b09a8b] leading-relaxed",
              centered ? "max-w-xl" : "max-w-lg"
            )}
            style={{
              fontFamily: "var(--font-subtitle)",
              fontSize: "clamp(1.0625rem, 1.4vw, 1.25rem)",
            }}
          >
            {subtext}
          </p>
        )}

        {(primaryCta || secondaryCta) && (
          <div className={cn("flex flex-wrap items-center gap-5", centered && "justify-center")}>
            {primaryCta && (
              <Link href={primaryCta.href} className="btn-inverse py-4 px-9">
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 text-[0.6875rem] font-medium tracking-[0.15em] uppercase text-[#c8bfb8] hover:text-[#faf8f6] transition-colors duration-200"
              >
                {secondaryCta.label}
                <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
