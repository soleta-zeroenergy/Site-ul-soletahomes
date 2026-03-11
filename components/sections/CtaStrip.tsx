import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  /** "dark" = stone-900 bg | "warm" = timber-50 bg | "light" = stone-100 bg */
  variant?: "dark" | "warm" | "light";
  /** Text and button alignment */
  align?: "left" | "center";
};

const variantMap = {
  dark:  "bg-stone-900 text-stone-50",
  warm:  "bg-timber-50 text-stone-900",
  light: "bg-stone-100 text-stone-900",
};

const eyebrowColorMap = {
  dark:  "text-timber-300",
  warm:  "text-timber-600",
  light: "text-timber-500",
};

const subheadingColorMap = {
  dark:  "text-stone-400",
  warm:  "text-stone-600",
  light: "text-stone-500",
};

const secondaryBtnMap = {
  dark:  "btn-ghost text-stone-400 hover:text-stone-100",
  warm:  "btn-ghost text-stone-500 hover:text-stone-900",
  light: "btn-ghost text-stone-500 hover:text-stone-900",
};

export function CtaStrip({
  eyebrow,
  heading,
  subheading,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  variant = "dark",
  align = "center",
}: Props) {
  const isCenter = align === "center";

  return (
    <section className={cn("py-16 md:py-20 lg:py-24", variantMap[variant])}>
      <div
        className={cn(
          "container-site flex flex-col gap-6 md:gap-8",
          isCenter ? "items-center text-center" : "items-start text-left",
        )}
      >
        {eyebrow && (
          <span className={cn("eyebrow", eyebrowColorMap[variant])}>
            {eyebrow}
          </span>
        )}

        <h2
          className={cn(
            "font-serif leading-[1.05] tracking-[-0.02em]",
            /* Responsive heading: smaller on mobile */
            "text-3xl sm:text-4xl md:text-5xl",
            "max-w-2xl",
            isCenter && "mx-auto",
          )}
        >
          {heading}
        </h2>

        {subheading && (
          <p
            className={cn(
              "text-base md:text-lg leading-relaxed",
              "max-w-xl",
              subheadingColorMap[variant],
              isCenter && "mx-auto",
            )}
          >
            {subheading}
          </p>
        )}

        {/* Buttons — stack on mobile, row on sm+ */}
        <div
          className={cn(
            "flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mt-2",
            isCenter && "sm:justify-center",
          )}
        >
          <Link href={ctaHref} className="btn-primary w-full sm:w-auto justify-center">
            {ctaLabel}
          </Link>

          {secondaryCtaLabel && secondaryCtaHref && (
            <Link href={secondaryCtaHref} className={cn(secondaryBtnMap[variant], "w-full sm:w-auto justify-center")}>
              {secondaryCtaLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
