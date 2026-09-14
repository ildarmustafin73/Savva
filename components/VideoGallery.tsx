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
    <section className="overflow-hidden bg-background py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="mb-3 text-xs uppercase tracking-widest2 text-text-secondary">
                {t.video.eyebrow}
              </p>
              <h2 className="text-balance whitespace-pre-line font-display text-4xl font-medium leading-[1.05] tracking-tightest text-text-primary sm:text-5xl">
                {t.video.heading}
              </h2>
            </div>
            <p className="text-pretty max-w-sm text-[0.9375rem] leading-relaxed text-text-secondary md:col-span-4 md:col-start-9">
              {t.video.body}
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-10 md:mt-14">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 py-2 pb-6 sm:gap-5 sm:px-8 lg:px-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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
