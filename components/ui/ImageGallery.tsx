"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type GalleryImage = { src: string; alt?: string };

/**
 * Editorial image gallery: full-width lead image + horizontal thumbnail strip.
 * Clicking any image opens a restrained full-screen lightbox with prev/next.
 * Returns null if no images are provided — safe to always render.
 */
export function ImageGallery({ images }: { images: GalleryImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape")      setLightboxIndex(null);
      if (e.key === "ArrowRight")  setLightboxIndex((i) => i !== null ? (i + 1) % images.length : null);
      if (e.key === "ArrowLeft")   setLightboxIndex((i) => i !== null ? (i - 1 + images.length) % images.length : null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, images.length]);

  if (!images || images.length === 0) return null;

  const lead   = images[0];
  const thumbs = images.slice(1);

  return (
    <>
      <div className="flex flex-col gap-2">

        {/* Lead image */}
        <button
          type="button"
          onClick={() => setLightboxIndex(0)}
          aria-label={`View image at full size${lead.alt ? `: ${lead.alt}` : ""}`}
          className="group relative w-full overflow-hidden border border-[var(--color-border-light)] focus-visible:outline-2 focus-visible:outline-[var(--color-brand)]"
        >
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={lead.src}
              alt={lead.alt ?? ""}
              fill
              sizes="(max-width: 1024px) 100vw, 72rem"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
            />
          </div>
          <span
            aria-hidden="true"
            className="absolute bottom-3 right-3 rounded bg-black/50 px-2 py-1 font-ui text-[0.5625rem] font-medium uppercase tracking-[0.1em] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          >
            Enlarge
          </span>
        </button>

        {/* Thumbnail strip — horizontal scroll */}
        {thumbs.length > 0 && (
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {thumbs.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLightboxIndex(i + 1)}
                aria-label={`View image ${i + 2} at full size${img.alt ? `: ${img.alt}` : ""}`}
                className="group relative shrink-0 overflow-hidden border border-[var(--color-border-light)] focus-visible:outline-2 focus-visible:outline-[var(--color-brand)]"
              >
                <div className="relative h-[90px] w-[135px]">
                  <Image
                    src={img.src}
                    alt={img.alt ?? ""}
                    fill
                    sizes="135px"
                    className="object-cover transition-opacity duration-200 group-hover:opacity-75"
                  />
                </div>
              </button>
            ))}
          </div>
        )}

      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/88 p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-10 right-0 font-ui text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-white/70 transition-colors duration-200 hover:text-white"
            >
              Close ✕
            </button>

            <div className="relative aspect-[3/2] w-full border border-white/10">
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt ?? ""}
                fill
                className="object-contain"
              />
            </div>

            {images.length > 1 && (
              <div className="mt-4 flex items-center justify-center gap-8">
                <button
                  type="button"
                  onClick={() => setLightboxIndex((lightboxIndex - 1 + images.length) % images.length)}
                  className="font-ui text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-white/60 transition-colors duration-200 hover:text-white"
                >
                  ← Prev
                </button>
                <span className="font-ui text-[0.625rem] text-white/40">
                  {lightboxIndex + 1} / {images.length}
                </span>
                <button
                  type="button"
                  onClick={() => setLightboxIndex((lightboxIndex + 1) % images.length)}
                  className="font-ui text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-white/60 transition-colors duration-200 hover:text-white"
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
