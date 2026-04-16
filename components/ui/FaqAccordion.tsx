"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type FaqItem = { question: string; answer: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y divide-[var(--color-border-light)]">
      {items.map((item, i) => (
        <div key={i}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="flex w-full items-center justify-between gap-6 py-5 text-left"
          >
            <span
              className="font-heading text-[1.125rem] text-[var(--color-text)]"
              style={{ lineHeight: 1.3 }}
            >
              {item.question}
            </span>
            <span
              aria-hidden="true"
              className={cn(
                "shrink-0 text-[var(--color-brand)] transition-transform duration-200",
                open === i && "rotate-45"
              )}
            >
              +
            </span>
          </button>
          {open === i && (
            <p className="pb-6 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
