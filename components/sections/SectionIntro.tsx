import Link from "next/link";
import { cn } from "@/lib/cn";

/* ── Types ─────────────────────────────────────────────────────────────────── */
export type SectionIntroProps = {
  eyebrow?:  string;
  heading:   string;   // use \n for intentional line breaks
  body?:     string;
  cta?:      { label: string; href: string };
  align?:    "left" | "center";
  size?:     "sm" | "md" | "lg";
  theme?:    "light" | "warm" | "dark";
  children?: React.ReactNode;
};

/* ── Config ────────────────────────────────────────────────────────────────── */
const bgMap   = { light: "bg-white",    warm: "bg-[#faf8f6]", dark: "bg-[#1a1714]" } as const;
const sizeMap = { sm: "section-sm",     md: "section",        lg: "section-lg"     } as const;

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
export function SectionIntro({
  eyebrow,
  heading,
  body,
  cta,
  align = "center",
  size = "md",
  theme = "light",
  children,
}: SectionIntroProps) {
  const isDark   = theme === "dark";
  const centered = align === "center";

  return (
    <section className={cn(sizeMap[size], bgMap[theme])}>
      <div className={centered ? "container-text" : "container-site"}>
        <div
          className={cn(
            "flex flex-col gap-5",
            centered ? "items-center text-center" : "items-start max-w-2xl"
          )}
        >
          {eyebrow && (
            <p className={cn("eyebrow", isDark ? "text-brand-400" : "text-brand-500")}>
              {eyebrow}
            </p>
          )}

          <h2
            className={isDark ? "text-[#faf8f6]" : "text-[#1a1714]"}
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
            }}
          >
            <HeadingLines text={heading} />
          </h2>

          {body && (
            <p
              className={cn("leading-relaxed", isDark ? "text-[#b09a8b]" : "text-[#4a4440]")}
              style={{
                fontFamily: "var(--font-subtitle)",
                fontSize: "clamp(1.0625rem, 1.3vw, 1.25rem)",
              }}
            >
              {body}
            </p>
          )}

          {cta && (
            <Link
              href={cta.href}
              className={cn("mt-2 py-4 px-9", isDark ? "btn-inverse" : "btn-primary")}
            >
              {cta.label}
            </Link>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
