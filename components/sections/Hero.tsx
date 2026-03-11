import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  imageSrc: string;
  imageAlt?: string;
  /** "split" = text left / image right (default). "overlay" = full-bleed image + text overlay. */
  variant?: "split" | "overlay";
};

export function Hero({
  eyebrow,
  heading,
  subheading,
  ctaLabel,
  ctaHref = "/contact",
  secondaryCtaLabel,
  secondaryCtaHref,
  imageSrc,
  imageAlt = "",
  variant = "split",
}: Props) {
  if (variant === "overlay") {
    return <HeroOverlay {...{ eyebrow, heading, subheading, ctaLabel, ctaHref, secondaryCtaLabel, secondaryCtaHref, imageSrc, imageAlt }} />;
  }
  return <HeroSplit {...{ eyebrow, heading, subheading, ctaLabel, ctaHref, secondaryCtaLabel, secondaryCtaHref, imageSrc, imageAlt }} />;
}

/* ─── Split variant ─────────────────────────────────────────────────────── */

function HeroSplit(props: Omit<Props, "variant">) {
  const { eyebrow, heading, subheading, ctaLabel, ctaHref = "/contact", secondaryCtaLabel, secondaryCtaHref, imageSrc, imageAlt } = props;

  return (
    <section
      aria-label="Hero"
      /* Mobile: column stack. Desktop: side-by-side. Min-height shrinks on mobile. */
      className="relative flex flex-col lg:flex-row min-h-[70dvh] lg:min-h-[calc(100dvh-5rem)]"
    >
      {/* ── Left: text panel ── */}
      <div className="relative z-10 flex flex-col justify-center lg:w-[45%] px-5 sm:px-10 lg:px-16 xl:px-20 py-14 lg:py-0 bg-stone-50">

        {/* Vertical rule on the right edge (desktop only) */}
        <span className="hidden lg:block absolute right-0 top-12 bottom-12 w-px bg-stone-200" aria-hidden />

        <div className="max-w-lg">
          {eyebrow && (
            <div
              className="flex items-center gap-4 mb-6 md:mb-8 opacity-0 animate-fade-up"
              style={{ animationDelay: "0ms" }}
            >
              <span className="eyebrow">{eyebrow}</span>
              <span className="h-px w-10 bg-timber-400" aria-hidden />
            </div>
          )}

          <h1
            className={cn(
              "font-serif text-stone-900 leading-[1.02] tracking-[-0.03em]",
              /* Responsive clamp: smaller floor on mobile */
              "text-[clamp(2rem,6vw,4.5rem)]",
              "opacity-0 animate-fade-up",
            )}
            style={{ animationDelay: "100ms" }}
          >
            {heading}
          </h1>

          {subheading && (
            <p
              className="subtitle mt-5 md:mt-6 opacity-0 animate-fade-up"
              style={{ animationDelay: "220ms" }}
            >
              {subheading}
            </p>
          )}

          {(ctaLabel || secondaryCtaLabel) && (
            <div
              className="flex flex-wrap items-center gap-3 md:gap-4 mt-8 md:mt-10 opacity-0 animate-fade-up"
              style={{ animationDelay: "340ms" }}
            >
              {ctaLabel && (
                <Link href={ctaHref} className="btn-primary">
                  {ctaLabel}
                </Link>
              )}
              {secondaryCtaLabel && secondaryCtaHref && (
                <Link href={secondaryCtaHref} className="btn-ghost">
                  {secondaryCtaLabel}
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Bottom metadata strip — hidden on mobile to avoid overlap */}
        <div
          className="hidden lg:flex absolute bottom-8 left-16 xl:left-20 items-center gap-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          <span className="eyebrow text-stone-400">Precision · Warmth · Durability</span>
        </div>
      </div>

      {/* ── Right: image panel ── */}
      {/* Mobile: fixed aspect ratio so image is visible. Desktop: fills remaining height. */}
      <div className="relative lg:w-[55%] aspect-[4/3] lg:aspect-auto lg:h-auto">
        <Image
          src={imageSrc}
          alt={imageAlt ?? ""}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-timber-900/5 pointer-events-none" aria-hidden />
      </div>
    </section>
  );
}

/* ─── Overlay variant ───────────────────────────────────────────────────── */

function HeroOverlay(props: Omit<Props, "variant">) {
  const { eyebrow, heading, subheading, ctaLabel, ctaHref = "/contact", secondaryCtaLabel, secondaryCtaHref, imageSrc, imageAlt } = props;

  return (
    <section
      aria-label="Hero"
      /* Slightly shorter on mobile — avoids massive blank space on phones */
      className="relative flex items-end min-h-[70dvh] md:min-h-[calc(100dvh-5rem)]"
    >
      {/* Background image */}
      <Image
        src={imageSrc}
        alt={imageAlt ?? ""}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent pointer-events-none"
        aria-hidden
      />

      {/* Text content — anchored bottom-left */}
      <div className="relative z-10 container-site pb-10 md:pb-16 lg:pb-24 w-full">
        <div className="max-w-xl md:max-w-2xl">
          {eyebrow && (
            <div
              className="flex items-center gap-4 mb-5 md:mb-6 opacity-0 animate-fade-up"
              style={{ animationDelay: "0ms" }}
            >
              <span className="eyebrow text-timber-300">{eyebrow}</span>
              <span className="h-px w-10 bg-timber-500" aria-hidden />
            </div>
          )}

          <h1
            className={cn(
              "font-serif text-stone-50 leading-[1.02] tracking-[-0.03em]",
              "text-[clamp(2rem,6vw,5rem)]",
              "opacity-0 animate-fade-up",
            )}
            style={{ animationDelay: "100ms" }}
          >
            {heading}
          </h1>

          {subheading && (
            <p
              className="subtitle text-stone-300 mt-4 md:mt-5 opacity-0 animate-fade-up"
              style={{ animationDelay: "220ms" }}
            >
              {subheading}
            </p>
          )}

          {(ctaLabel || secondaryCtaLabel) && (
            <div
              className="flex flex-wrap items-center gap-3 md:gap-4 mt-7 md:mt-8 opacity-0 animate-fade-up"
              style={{ animationDelay: "340ms" }}
            >
              {ctaLabel && (
                <Link href={ctaHref} className="btn-primary">
                  {ctaLabel}
                </Link>
              )}
              {secondaryCtaLabel && secondaryCtaHref && (
                <Link href={secondaryCtaHref} className="btn-outline border-stone-400 text-stone-100 hover:bg-stone-100 hover:text-stone-900">
                  {secondaryCtaLabel}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
