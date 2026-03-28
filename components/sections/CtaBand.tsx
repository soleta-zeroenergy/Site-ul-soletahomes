import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

/* ── Types ─────────────────────────────────────────────────────────────────── */
export type CtaBandProps = {
  eyebrow?:     string;
  heading:      string;
  body?:        string;
  primaryCta:   { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  theme?:       "dark" | "brand" | "light" | "warm" | string;
  imageSrc?:    string;
  imageAlt?:    string;
};

/* ── Config ────────────────────────────────────────────────────────────────── */
const themes = {
  dark:  { bg: "bg-[#1a1714]",  heading: "text-[#faf8f6]", body: "text-[#9a8e87]", eyebrow: "text-brand-400" },
  brand: { bg: "bg-brand-500",  heading: "text-white",      body: "text-[#dedad5]", eyebrow: "text-[#dedad5]" },
  light: { bg: "bg-white",      heading: "text-[#1a1714]",  body: "text-[#4a4440]", eyebrow: "text-brand-500" },
  warm:  { bg: "bg-[#faf8f6]",  heading: "text-[#1a1714]",  body: "text-[#4a4440]", eyebrow: "text-brand-500" },
};

/* ── Component ─────────────────────────────────────────────────────────────── */
export function CtaBand({
  eyebrow,
  heading,
  body,
  primaryCta,
  secondaryCta,
  theme = "dark",
  imageSrc,
  imageAlt = "",
}: CtaBandProps) {
  const t        = themes[theme];
  const hasImage = Boolean(imageSrc);
  const isDark   = theme === "dark" || theme === "brand" || hasImage;

  return (
    <section className={cn("section-sm relative overflow-hidden", t.bg)}>

      {/* Background image + overlay */}
      {imageSrc && (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#1a1714]/65 pointer-events-none"
          />
        </>
      )}

      {/* Content */}
      <div className="container-site relative z-10 flex flex-col items-center text-center gap-6">

        {eyebrow && (
          <p className={cn("eyebrow", hasImage ? "text-brand-400" : t.eyebrow)}>
            {eyebrow}
          </p>
        )}

        <h2
          className={cn("max-w-2xl", hasImage ? "text-[#faf8f6]" : t.heading)}
          style={{
            fontSize: "clamp(1.875rem, 3.5vw, 3.25rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
          }}
        >
          {heading}
        </h2>

        {body && (
          <p
            className={cn("max-w-xl leading-relaxed", hasImage ? "text-[#c8bfb8]" : t.body)}
            style={{ fontFamily: "var(--font-subtitle)", fontSize: "1.125rem" }}
          >
            {body}
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-4 mt-2">
          {/* Primary CTA */}
          <Link
            href={primaryCta.href}
            className={cn("py-4 px-10", isDark ? "btn-inverse" : "btn-primary")}
          >
            {primaryCta.label}
          </Link>

          {/* Secondary CTA */}
          {secondaryCta && (
            isDark ? (
              <Link
                href={secondaryCta.href}
                className="btn inline-flex py-4 px-10 border border-white/40 text-[#faf8f6] hover:border-white hover:bg-white/10 transition-colors duration-200"
              >
                {secondaryCta.label}
              </Link>
            ) : (
              <Link href={secondaryCta.href} className="btn-outline py-4 px-10">
                {secondaryCta.label}
              </Link>
            )
          )}
        </div>

      </div>
    </section>
  );
}
