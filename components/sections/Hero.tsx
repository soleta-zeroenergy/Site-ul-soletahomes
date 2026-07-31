import Link from "next/link";
import Image, { getImageProps } from "next/image";
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
  /* Optional dedicated mobile crop (e.g. 4:5). When set, renders a <picture>
     that art-directs desktop vs. mobile sources so only one asset downloads. */
  imageSrcMobile?: string;
  imageOverlayVariant?: "default" | "localized";
  align?:        "left" | "center" | string;
  size?:         "full" | "large" | "medium" | string;
  /* Mobile-only image framing. When set, overrides object-position below md breakpoint.
     Example: "25% center". Desktop always uses default object-position (center).
     Ignored when imageSrcMobile is set (the dedicated crop replaces this hack). */
  mobileObjectPosition?: string;
  /* Mobile-only hero height class. When set, replaces size-derived min-height on mobile.
     Example: "min-h-[78svh]". Desktop keeps the size-derived min-height. */
  mobileSizeClass?: string;
  /* Tighter heading scale + wider text column, for longer headline copy that
     still needs to resolve in two or three lines under a fixed-height hero. */
  compactHeading?: boolean;
};

/* ── Config ────────────────────────────────────────────────────────────────── */
// Hero sits below a fixed header, so viewport-relative heights must subtract
// the header height or the section overflows the first viewport by that amount.
const sizeMap = {
  full:   "min-h-[calc(100svh-var(--header-height))]",
  large:  "min-h-[calc(85svh-var(--header-height))]",
  medium: "min-h-[calc(60svh-var(--header-height))]",
};

// md-prefixed counterparts used when mobileSizeClass overrides mobile height
const mdSizeMap = {
  full:   "md:min-h-[calc(100svh-var(--header-height))]",
  large:  "md:min-h-[calc(85svh-var(--header-height))]",
  medium: "md:min-h-[calc(60svh-var(--header-height))]",
};

/** Art-directed background: desktop and mobile sources, only one fetched by the browser. */
function HeroBackgroundPicture({
  desktopSrc,
  mobileSrc,
  alt,
  mobileObjectPosition,
  mobileCropPosition,
}: {
  desktopSrc: string;
  mobileSrc:  string;
  alt:        string;
  mobileObjectPosition?: string;
  /* Internal-only crop tuning for the mobile-split layout (distinct from the
     documented mobileObjectPosition hack, which is ignored when a dedicated
     mobile crop is supplied). Applied directly as an inline style. */
  mobileCropPosition?: string;
}) {
  const { props: desktopImg } = getImageProps({
    alt, src: desktopSrc, fill: true, priority: true, quality: 70, sizes: "100vw",
  });
  const { props: mobileImg } = getImageProps({
    alt, src: mobileSrc, fill: true, priority: true, quality: 70, sizes: "100vw",
  });

  return (
    <picture className="absolute inset-0 block">
      <source media="(min-width: 768px)" srcSet={desktopImg.srcSet} sizes={desktopImg.sizes} />
      <img
        {...mobileImg}
        style={mobileCropPosition ? { objectPosition: mobileCropPosition } : undefined}
        alt={alt}
        className={cn(
          "absolute inset-0 h-full w-full object-cover",
          mobileObjectPosition && "hero-mobile-op"
        )}
      />
    </picture>
  );
}

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
  imageSrcMobile,
  imageOverlayVariant = "default",
  align = "left",
  size = "full",
  mobileObjectPosition,
  mobileSizeClass,
  compactHeading = false,
}: HeroProps) {
  const centered = align === "center";
  const sizeKey  = (size in sizeMap ? size : "full") as keyof typeof sizeMap;
  // Home's "localized" hero: on mobile, show the image cleanly first (no text
  // overlay) with a scroll cue, then the copy below on a cream background.
  // Desktop keeps the original full-bleed overlay layout untouched.
  const isMobileSplit = Boolean(imageSrc) && imageOverlayVariant === "localized";

  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[#1a1714]",
        isMobileSplit
          ? cn("md:flex md:items-end", mdSizeMap[sizeKey])
          : cn(
              "flex items-end",
              mobileSizeClass ? cn(mobileSizeClass, mdSizeMap[sizeKey]) : sizeMap[sizeKey]
            )
      )}
      aria-label={eyebrow ?? "Hero"}
    >
      {/* Mobile object-position override — applied below md breakpoint only */}
      {imageSrc && mobileObjectPosition && !imageSrcMobile && (
        <style>{`@media (max-width: 767px) { .hero-mobile-op { object-position: ${mobileObjectPosition} !important; } }`}</style>
      )}

      {/* Background image. On the mobile-split layout, this wrapper is a normal
          in-flow block sized to the image's crop ratio on mobile, and switches
          back to an absolute full-bleed layer at md+ (unchanged desktop behavior). */}
      <div
        className={cn(
          "relative w-full",
          isMobileSplit ? "h-[42svh] md:absolute md:inset-0 md:h-auto" : "absolute inset-0"
        )}
      >
        {imageSrc && imageSrcMobile ? (
          <HeroBackgroundPicture
            desktopSrc={imageSrc}
            mobileSrc={imageSrcMobile}
            alt={imageAlt}
            mobileObjectPosition={mobileObjectPosition}
            mobileCropPosition={isMobileSplit ? "center 25%" : undefined}
          />
        ) : (
          imageSrc && (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              quality={70}
              sizes="100vw"
              className={cn("object-cover", mobileObjectPosition && "hero-mobile-op")}
            />
          )
        )}

        {isMobileSplit && (
          <>
            <style>{`
              @keyframes heroScrollCue {
                0%, 100% { transform: translateY(0); opacity: 0.55; }
                50% { transform: translateY(6px); opacity: 1; }
              }
            `}</style>
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-5 z-10 flex justify-center md:hidden"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a1714]/35 backdrop-blur-sm"
                style={{ animation: "heroScrollCue 1.8s ease-in-out infinite" }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 6L8 11L13 6"
                    stroke="#faf8f6"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </>
        )}
      </div>

      {/* Overlay: gradient on image, warm radials on dark background. Not rendered for
          the "localized" variant when an image is present — that image already has
          sufficient natural contrast and needs no darkening overlay. */}
      {!(imageSrc && imageOverlayVariant === "localized") && (
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
      )}

      {imageSrc && imageOverlayVariant !== "localized" && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none md:hidden"
          style={{
            background:
              "linear-gradient(to top, rgba(26,23,20,0.82) 0%, rgba(26,23,20,0.52) 36%, rgba(26,23,20,0.18) 68%, transparent 100%)",
          }}
        />
      )}
      {/* Content */}
      <div
        className={cn(
          "container-site relative z-10",
          isMobileSplit
            ? "bg-[#faf8f6] pt-5 pb-5 md:bg-transparent md:pt-0 md:pb-24 lg:pb-32"
            : "pb-24 pt-16 sm:pt-0 lg:pb-32",
          centered && "flex flex-col items-center text-center"
        )}
      >
        {eyebrow && (
          <p
            className={cn(
              "uppercase tracking-widest",
              isMobileSplit
                ? "mb-3 md:mb-8 text-[#5c4a3d] md:text-brand-400 md:[text-shadow:-1px_-1px_2px_rgba(15,13,11,0.85),1px_-1px_2px_rgba(15,13,11,0.85),-1px_1px_2px_rgba(15,13,11,0.85),1px_1px_2px_rgba(15,13,11,0.85),0_2px_14px_rgba(15,13,11,0.55)]"
                : "mb-8 text-brand-400"
            )}
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "1.5rem",
              fontWeight: 400,
              letterSpacing: "0.14em",
              textShadow:
                !isMobileSplit && imageSrc
                  ? "-1px -1px 2px rgba(15,13,11,0.85), 1px -1px 2px rgba(15,13,11,0.85), -1px 1px 2px rgba(15,13,11,0.85), 1px 1px 2px rgba(15,13,11,0.85), 0 2px 14px rgba(15,13,11,0.55)"
                  : undefined,
            }}
          >
            {eyebrow}
          </p>
        )}

        <h1
          className={cn(
            isMobileSplit ? "mb-3 md:mb-8 text-[#1a1714] md:text-[#faf8f6]" : "mb-8 text-[#faf8f6]",
            centered
              ? "max-w-2xl"
              : compactHeading
                ? "max-w-[50rem]"
                : "max-w-3xl"
          )}
          style={
            compactHeading
              ? { fontSize: "clamp(2.25rem, 3.6vw, 4rem)", lineHeight: 1.14 }
              : undefined
          }
        >
          <HeadingLines text={heading} />
        </h1>

        {subtext && (
          <p
            className={cn(
              "leading-relaxed",
              isMobileSplit ? "mb-3 md:mb-12 text-[#4a3f38] md:text-[#e4dad1]" : "mb-12 text-[#e4dad1]",
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
              isMobileSplit ? (
                <>
                  <Link
                    href={primaryCta.href}
                    className="btn-primary py-4 px-9 transition-colors duration-200 md:hidden"
                  >
                    {primaryCta.label}
                  </Link>
                  <Link
                    href={primaryCta.href}
                    className="btn-inverse hidden py-4 px-9 transition-colors duration-200 hover:bg-[#e9e3dd] hover:border-[#e9e3dd] md:inline-flex"
                  >
                    {primaryCta.label}
                  </Link>
                </>
              ) : (
                <Link
                  href={primaryCta.href}
                  className="btn-inverse py-4 px-9 transition-colors duration-200 hover:bg-[#e9e3dd] hover:border-[#e9e3dd]"
                >
                  {primaryCta.label}
                </Link>
              )
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 border-b border-transparent pb-[2px] text-[0.6875rem] font-medium tracking-[0.15em] uppercase text-[#f0e8df] transition-colors duration-200 hover:border-[#c8bfb8] hover:text-[#faf8f6] md:text-[#c8bfb8]"
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
