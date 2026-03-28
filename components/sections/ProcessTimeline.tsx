import { cn } from "@/lib/cn";

/* ── Types ─────────────────────────────────────────────────────────────────── */
export type ProcessStage = {
  eyebrow?:  string;         // e.g. "Stage 01"
  title:     string;
  body:      string;
  details?:  string[];       // optional bullet list of fine detail
};

export type ProcessTimelineProps = {
  eyebrow?:  string;
  heading?:  string;         // \n for intentional line breaks
  body?:     string;
  stages:    ProcessStage[];
  theme?:    "light" | "warm" | "dark";
};

/* ── Config ────────────────────────────────────────────────────────────────── */
const bgMap = {
  light: "bg-white",
  warm:  "bg-[#faf8f6]",
  dark:  "bg-[#1a1714]",
} as const;

const t = {
  light: {
    eyebrow:    "text-brand-500",
    heading:    "text-[#1a1714]",
    intro:      "text-[#4a4440]",
    stageNum:   "text-brand-500 border-brand-500/30 bg-white",
    stageLine:  "bg-sand-400",
    stageTitle: "text-[#1a1714]",
    stageBody:  "text-[#6b5d56]",
    stageEye:   "text-brand-500",
    detail:     "text-[#6b5d56]",
    bullet:     "bg-brand-500/40",
  },
  warm: {
    eyebrow:    "text-brand-500",
    heading:    "text-[#1a1714]",
    intro:      "text-[#4a4440]",
    stageNum:   "text-brand-500 border-brand-500/30 bg-[#faf8f6]",
    stageLine:  "bg-sand-400",
    stageTitle: "text-[#1a1714]",
    stageBody:  "text-[#6b5d56]",
    stageEye:   "text-brand-500",
    detail:     "text-[#6b5d56]",
    bullet:     "bg-brand-500/40",
  },
  dark: {
    eyebrow:    "text-brand-400",
    heading:    "text-[#faf8f6]",
    intro:      "text-[#b09a8b]",
    stageNum:   "text-brand-400 border-brand-400/30 bg-[#1e1b18]",
    stageLine:  "bg-white/10",
    stageTitle: "text-[#faf8f6]",
    stageBody:  "text-[#9a8e87]",
    stageEye:   "text-brand-400",
    detail:     "text-[#9a8e87]",
    bullet:     "bg-brand-400/50",
  },
} as const;

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
export function ProcessTimeline({
  eyebrow,
  heading,
  body,
  stages,
  theme = "warm",
}: ProcessTimelineProps) {
  const tok = t[theme];

  return (
    <section className={cn("section", bgMap[theme])}>
      <div className="container-narrow">

        {/* Section header */}
        {(eyebrow || heading || body) && (
          <div className="mb-16 max-w-2xl">
            {eyebrow && (
              <p className={cn("eyebrow mb-4", tok.eyebrow)}>{eyebrow}</p>
            )}
            {heading && (
              <h2
                className={cn("mb-5", tok.heading)}
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  lineHeight: 1.1,
                  letterSpacing: "0.02em",
                  fontFamily: "var(--font-heading)",
                }}
              >
                <HeadingLines text={heading} />
              </h2>
            )}
            {body && (
              <p
                className={cn("leading-[1.75]", tok.intro)}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)",
                }}
              >
                {body}
              </p>
            )}
          </div>
        )}

        {/* Timeline */}
        <ol className="relative">
          {stages.map((stage, i) => {
            const isLast = i === stages.length - 1;
            return (
              <li key={i} className="relative flex gap-8 pb-0">

                {/* ── Left column: number + connector ─────────────────────── */}
                <div className="flex flex-col items-center flex-none w-10">
                  {/* Circle */}
                  <div
                    className={cn(
                      "relative z-10 flex items-center justify-center w-10 h-10 rounded-full border flex-none",
                      tok.stageNum
                    )}
                    style={{
                      fontSize: "0.625rem",
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Connector line — hidden on last item */}
                  {!isLast && (
                    <div
                      aria-hidden="true"
                      className={cn("flex-1 w-px mt-2 mb-0", tok.stageLine)}
                      style={{ minHeight: "2.5rem" }}
                    />
                  )}
                </div>

                {/* ── Right column: content ────────────────────────────────── */}
                <div className={cn("flex-1 pb-14", isLast && "pb-0")}>
                  {stage.eyebrow && (
                    <p
                      className={cn("eyebrow mb-2", tok.stageEye)}
                    >
                      {stage.eyebrow}
                    </p>
                  )}

                  <h3
                    className={cn("mb-3", tok.stageTitle)}
                    style={{
                      fontSize: "clamp(1.1875rem, 1.8vw, 1.5rem)",
                      lineHeight: 1.2,
                      letterSpacing: "0.02em",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {stage.title}
                  </h3>

                  <p
                    className={cn("leading-[1.75]", tok.stageBody)}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "clamp(0.875rem, 1vw, 1rem)",
                    }}
                  >
                    {stage.body}
                  </p>

                  {stage.details && stage.details.length > 0 && (
                    <ul className="mt-5 flex flex-col gap-2.5">
                      {stage.details.map((d, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span
                            aria-hidden="true"
                            className={cn("mt-[0.45em] w-1 h-1 rounded-full flex-none", tok.bullet)}
                          />
                          <span
                            className={cn("text-sm leading-relaxed", tok.detail)}
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {d}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

              </li>
            );
          })}
        </ol>

      </div>
    </section>
  );
}
