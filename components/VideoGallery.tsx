"use client";

import { useRef } from "react";
import { clips } from "@/data/media";
import { Reveal } from "./ui/Reveal";
import { VideoCard } from "./ui/VideoCard";
import { VideoLightbox, type VideoLightboxHandle } from "./ui/VideoLightbox";
import { useLocale } from "./i18n/LocaleProvider";

/**
 * Five real clips from @savva_cafe (see data/media.ts for what each one is and
 * how it was verified), laid out as a scroll-snap rail rather than a grid, so
 * the section can hold five 9:16 clips without turning into a wall of tiles.
 *
 * Performance: nothing but the poster images is fetched up front. Each card
 * carries `preload="none"` and only calls play() on hover, on devices that
 * actually have a pointer — see VideoCard. The full clip with sound is only
 * ever loaded when someone opens the lightbox.
 */
export function VideoGallery() {
  const { t } = useLocale();
  const lightboxRef = useRef<VideoLightboxHandle>(null);

  return (
    <section className="overflow-hidden bg-background py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <Reveal>
          <h2 className="text-balance whitespace-pre-line font-display text-4xl font-medium leading-[1.05] tracking-tightest text-text-primary sm:text-5xl">
            {t.video.heading}
          </h2>
        </Reveal>
      </div>

      {/* mx-auto max-w-content here matches the heading's own container above —
          without it, this rail's own padding was measured from the raw
          viewport instead of the centered content column, so on any screen
          wider than max-w-content + 2×padding (~1536px) the whole rail sat
          well left of where the heading above it starts. */}
      <div className="mx-auto mt-8 max-w-content md:mt-10">
        {/* scroll-pl-* (scroll-padding, not just padding) is required here:
            a scroll-snap-x container whose children snap-start otherwise
            initializes scrollLeft equal to the leading padding — as if
            already scrolled past it — so the padding never actually shows
            and the first card sits flush at the true edge. scroll-padding
            tells the snap algorithm to treat the padded position as the
            valid snap point instead of scrolling past it. */}
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 py-2 pb-6 scroll-pl-5 sm:gap-5 sm:px-8 sm:scroll-pl-8 lg:px-12 lg:scroll-pl-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {clips.map((clip, i) => {
            const label = t.video.labels[clip.labelKey];
            return (
              <div
                key={clip.src}
                className={`w-[58vw] shrink-0 snap-start sm:w-[15rem] md:w-[17rem] ${
                  i % 2 === 1 ? "sm:mt-10" : ""
                }`}
              >
                <Reveal delay={i * 0.06}>
                  <VideoCard
                    src={clip.src}
                    poster={clip.poster}
                    label={label}
                    onOpen={() => lightboxRef.current?.open(clip.src, clip.poster, label)}
                  />
                </Reveal>
              </div>
            );
          })}
          <span aria-hidden="true" className="w-1 shrink-0 sm:w-4" />
        </div>
      </div>

      <VideoLightbox ref={lightboxRef} closeLabel={t.video.close} />
    </section>
  );
}
