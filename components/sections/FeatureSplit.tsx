import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { ImagePlaceholder } from "@/components/sections/ImagePlaceholder";

export type FeatureSplitProps = {
  eyebrow?: string;
  heading: string;
  body: string;
  bodySecond?: string;
  cta?: { label: string; href: string };
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right" | string;
  theme?: "light" | "warm" | "dark" | string;
  children?: React.ReactNode;
  imagePlaceholder?: {
    ratio: "16:9" | "4:5" | "4:3" | "3:2" | "21:9" | "16:7" | "1:1";
    width: number;
    height: number;
    description: string;
    mode?: "overlay" | "replace";
  };
};

const bgMap = {
  light: "bg-white",
  warm: "bg-[#faf8f6]",
  dark: "bg-[#1a1714]",
};

const textMap = {
  light: { eyebrow: "text-brand-500", heading: "text-[#1a1714]", body: "text-[#4a4440]" },
  warm: { eyebrow: "text-brand-500", heading: "text-[#1a1714]", body: "text-[#4a4440]" },
  dark: { eyebrow: "text-brand-400", heading: "text-[#faf8f6]", body: "text-[#b09a8b]" },
};

const PLACEHOLDER_LIGHT =
  "radial-gradient(ellipse 85% 75% at 50% 50%, rgba(128,103,84,0.13) 0%, #e4ddd7 100%)";

const PLACEHOLDER_DARK =
  "radial-gradient(ellipse 75% 65% at 42% 48%, rgba(128,103,84,0.30) 0%, #1a1714 68%)";

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
  imagePlaceholder,
}: FeatureSplitProps) {
  const t = textMap[theme];
  const isDark = theme === "dark";
  const imgLeft = imagePosition === "left";
  const placeholderMode = imagePlaceholder?.mode ?? "overlay";
  const showImage = Boolean(imageSrc) && placeholderMode !== "replace";
  const showPlaceholderOnly = Boolean(imagePlaceholder) && (!imageSrc || placeholderMode === "replace");
  const showPlaceholderOverlay = Boolean(imageSrc) && Boolean(imagePlaceholder) && placeholderMode === "overlay";

  return (
    <section className={cn("section overflow-hidden", bgMap[theme])}>
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={cn(imgLeft ? "lg:order-1" : "lg:order-2")}>
            <div className="relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden">
              {showImage ? (
                <Image
                  src={imageSrc!}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                />
              ) : showPlaceholderOnly && imagePlaceholder ? (
                <ImagePlaceholder
                  ratio={imagePlaceholder.ratio}
                  width={imagePlaceholder.width}
                  height={imagePlaceholder.height}
                  description={imagePlaceholder.description}
                  fill
                  variant="solid"
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

              {showPlaceholderOverlay && imagePlaceholder && (
                <div className="absolute inset-0 pointer-events-none">
                  <ImagePlaceholder
                    ratio={imagePlaceholder.ratio}
                    width={imagePlaceholder.width}
                    height={imagePlaceholder.height}
                    description={imagePlaceholder.description}
                    fill
                    variant="overlay"
                  />
                </div>
              )}
            </div>
          </div>

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
