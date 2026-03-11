import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type AspectRatio = "landscape" | "portrait" | "square";

const aspectMap: Record<AspectRatio, string> = {
  landscape: "aspect-[4/3]",
  portrait:  "aspect-[3/4]",
  square:    "aspect-square",
};

type Props = {
  image: string;
  imageAlt?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  href: string;
  aspectRatio?: AspectRatio;
  showArrow?: boolean;
  className?: string;
};

export function Card({
  image,
  imageAlt = "",
  eyebrow,
  title,
  subtitle,
  href,
  aspectRatio = "landscape",
  showArrow = false,
  className,
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col",
        "focus-visible:outline-2 focus-visible:outline-timber-500",
        className,
      )}
    >
      {/* Image container — aspect-ratio enforced at all breakpoints */}
      <div
        className={cn(
          "relative overflow-hidden bg-stone-100",
          aspectMap[aspectRatio],
        )}
      >
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={cn(
            "object-cover",
            "transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
            "group-hover:scale-[1.04]",
          )}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-stone-900/20 to-transparent pointer-events-none"
          aria-hidden
        />
      </div>

      {/* Text block */}
      <div className="flex flex-col pt-4 md:pt-5 pb-5 md:pb-6 border-b border-stone-200">
        {eyebrow && (
          <span className="eyebrow mb-2 md:mb-3">{eyebrow}</span>
        )}

        <h3
          className={cn(
            "font-serif text-stone-900 leading-[1.1] tracking-[-0.02em]",
            /* Slightly smaller on mobile to prevent overflow in tight grids */
            "text-lg md:text-xl lg:text-2xl",
            "break-words",
            "transition-colors duration-200 group-hover:text-timber-600",
          )}
        >
          {title}
        </h3>

        {subtitle && (
          <p className="subtitle text-sm mt-2 line-clamp-2 break-words">{subtitle}</p>
        )}

        {showArrow && (
          <div className="flex items-center gap-3 mt-3 md:mt-4">
            <span className="eyebrow text-stone-400 group-hover:text-timber-500 transition-colors duration-200">
              View
            </span>
            <span
              className={cn(
                "block h-px bg-stone-300 w-8",
                "transition-all duration-300 group-hover:w-12 group-hover:bg-timber-500",
              )}
              aria-hidden
            />
          </div>
        )}
      </div>
    </Link>
  );
}
