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
  imageOverlayVariant?: "default" | "localized";
  align?:        "left" | "center" | string;
  size?:         "full" | "large" | "medium" | string;
  /* Mobile-only image framing. When set, overrides object-position below md breakpoint.
     Example: "25% center". Desktop always uses default object-position (center). */
  mobileObjectPosition?: string;
  /* Mobile-only hero height class. When set, replaces size-derived min-height on mobile.
     Example: "min-h-[78svh]". Desktop keeps the size-derived min-height. */
  mobileSizeClass?: string;
};

/* ── Config ────────────────────────────────────────────────────────────────── */
const sizeMap = {
  full:   "min-h-[100svh]",
  large:  "min-h-[85svh]",
  medium: "min-h-[60svh]",
};

// md-prefixed counterparts used when mobileSizeClass overrides mobile height
const mdSizeMap = {
  full:   "md:min-h-[100svh]",
  large:  "md:min-h-[85svh]",
  medium: "md:min-h-[60svh]",
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
  imageOverlayVariant = "default",
  align = "left",
  size = "full",
  mobileObjectPosition,
  mobileSizeClass,
}: HeroProps) {
  const centered = align === "center";
  const sizeKey  = (size in sizeMap ? size : "full") as keyof typeof sizeMap;

  return (
    <section
      className={cn(
        "relative flex items-end overflow-hidden bg-[#1a1714]",
        mobileSizeClass
          ? cn(mobileSizeClass, mdSizeMap[sizeKey])
          : sizeMap[sizeKey]
      )}
      aria-label={eyebrow ?? "Hero"}
    >
      {/* Mobile object-position override — applied below md breakpoint only */}
      {imageSrc && mobileObjectPosition && (
        <style>{`@media (max-width: 767px) { .hero-mobile-op { object-position: ${mobileObjectPosition} !important; } }`}</style>
      )}

      {/* Background image */}
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          quality={70}
          sizes="100vw"
          className={cn("object-cover", mobileObjectPosition && "hero-mobile-op")}
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
                  imageOverlayVariant === "localized"
                    ? "linear-gradient(to top, rgba(26,23,20,0.32) 0%, rgba(26,23,20,0.12) 26%, rgba(26,23,20,0.02) 52%, transparent 72%), radial-gradient(95% 88% at 24% 76%, rgba(26,23,20,0.58) 0%, rgba(26,23,20,0.38) 33%, rgba(26,23,20,0.16) 56%, rgba(26,23,20,0.04) 74%, transparent 86%)"
                    : "linear-gradient(to top, rgba(26,23,20,0.82) 0%, rgba(26,23,20,0.55) 18%, rgba(26,23,20,0.18) 38%, transparent 55%)",
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
              <Link
                href={primaryCta.href}
                className="btn-inverse py-4 px-9 transition-colors duration-200 hover:bg-[#e9e3dd] hover:border-[#e9e3dd]"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 border-b border-transparent pb-[2px] text-[0.6875rem] font-medium tracking-[0.15em] uppercase text-[#c8bfb8] transition-colors duration-200 hover:border-[#c8bfb8] hover:text-[#faf8f6]"
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
