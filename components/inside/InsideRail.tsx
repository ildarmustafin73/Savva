"use client";

import { photos } from "@/data/media";
import { ImageSlot } from "../ui/ImageSlot";
import { Reveal } from "../ui/Reveal";
import { useLocale } from "../i18n/LocaleProvider";

/**
 * Inside B — "Rail".
 *
 * The same real photographs read as one continuous horizontal strip that the
 * visitor drags through, rather than a grid they scan. Each frame keeps its own
 * proportion and its own height, so the strip has a skyline instead of a ruler
 * edge — a contact sheet, not a carousel of identical tiles.
 *
 * On phones it is a native scroll-snap rail; on desktop it stays a rail too
 * (that is the point of this variant), with the section heading sitting beside
 * it rather than above.
 */
export function InsideRail() {
  const { t } = useLocale();
  const c = t.mood.captions;

  const frames = [
    { photo: photos.lounge, caption: c.lounge, w: "w-[78vw] sm:w-[30rem]", aspect: "aspect-[4/5]", drop: "" },
    { photo: photos.counter, caption: c.counter, w: "w-[62vw] sm:w-[20rem]", aspect: "aspect-[3/4]", drop: "sm:mt-14" },
    { photo: photos.facadeWide, caption: c.facade, w: "w-[86vw] sm:w-[34rem]", aspect: "aspect-[16/9]", drop: "sm:mt-6" },
    { photo: photos.tray, caption: c.tray, w: "w-[62vw] sm:w-[19rem]", aspect: "aspect-[3/4]", drop: "" },
    { photo: photos.coldOnWood, caption: c.table, w: "w-[62vw] sm:w-[20rem]", aspect: "aspect-[4/5]", drop: "sm:mt-16" },
    { photo: photos.shelfTrio, caption: c.cold, w: "w-[78vw] sm:w-[26rem]", aspect: "aspect-[4/3]", drop: "sm:mt-4" },
  ];

  return (
    <section id="inside" className="scroll-mt-24 overflow-hidden bg-background py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="max-w-xl">
            <p className="mb-3 text-xs uppercase tracking-widest2 text-text-secondary">
              {t.mood.eyebrow}
            </p>
            <h2 className="text-balance whitespace-pre-line font-display text-4xl font-medium leading-[1.05] tracking-tightest text-text-primary sm:text-5xl">
              {t.mood.heading}
            </h2>
            <p className="text-pretty mt-5 text-[0.9375rem] leading-relaxed text-text-secondary">
              {t.mood.body}
            </p>
          </div>
        </Reveal>
      </div>

      {/* Full-bleed rail: starts at the page gutter, runs off the right edge so
          it reads as continuing rather than ending. */}
      <div className="mt-12 md:mt-16">
        <div className="flex snap-x snap-mandatory items-start gap-5 overflow-x-auto px-5 pb-6 sm:gap-7 sm:px-8 lg:px-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {frames.map(({ photo, caption, w, aspect, drop }, i) => (
            <figure key={photo.src} className={`${w} ${drop} shrink-0 snap-start`}>
              <ImageSlot
                src={photo.src}
                alt={photo.alt}
                aspect={aspect}
                objectPosition={photo.objectPosition}
                sizes="(min-width: 640px) 34rem, 86vw"
                delay={i * 0.05}
              />
              <figcaption className="mt-3 text-sm text-text-secondary">{caption}</figcaption>
            </figure>
          ))}
          {/* Trailing gutter so the last frame can reach the left edge when scrolled. */}
          <span aria-hidden="true" className="w-1 shrink-0 sm:w-4" />
        </div>
      </div>
    </section>
  );
}
