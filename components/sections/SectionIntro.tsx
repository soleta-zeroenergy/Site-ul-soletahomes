import { cn } from "@/lib/cn";

type SectionIntroProps = {
  eyebrow?: string;
  heading: string;
  body?: string;
  align?: "left" | "center";
  maxWidth?: string;
};

export function SectionIntro({
  eyebrow,
  heading,
  body,
  align = "center",
  maxWidth = "max-w-2xl",
}: SectionIntroProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left"
      )}
    >
      {eyebrow && (
        <span className="eyebrow">{eyebrow}</span>
      )}
      <h2
        className={cn(
          "whitespace-pre-line",
          maxWidth
        )}
      >
        {heading}
      </h2>
      {body && (
        <p
          className={cn(
            "subtitle mt-2",
            maxWidth,
            align === "center" && "mx-auto"
          )}
        >
          {body}
        </p>
      )}
    </div>
  );
}
