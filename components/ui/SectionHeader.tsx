import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  /** Draw a hairline rule below the eyebrow */
  ruled?: boolean;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  heading,
  subheading,
  ruled = false,
  align = "left",
  className,
}: Props) {
  const isCenter = align === "center";

  return (
    <div className={cn("flex flex-col", isCenter && "items-center text-center", className)}>
      {eyebrow && (
        <div className={cn("flex items-center gap-4 mb-4 md:mb-5", isCenter && "justify-center")}>
          <span className="eyebrow">{eyebrow}</span>
          {ruled && <span className="h-px flex-1 max-w-[3rem] bg-stone-200" aria-hidden />}
        </div>
      )}

      <h2
        className={cn(
          "font-serif text-stone-900 leading-[1.08] tracking-[-0.02em]",
          /* Responsive size: smaller on mobile */
          "text-3xl sm:text-4xl md:text-5xl",
        )}
      >
        {heading}
      </h2>

      {subheading && (
        <p className={cn("subtitle mt-4 md:mt-5", isCenter && "max-w-2xl")}>
          {subheading}
        </p>
      )}
    </div>
  );
}
