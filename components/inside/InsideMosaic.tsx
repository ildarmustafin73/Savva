"use client";

import { photos } from "@/data/media";
import { ImageSlot } from "../ui/ImageSlot";
import { Reveal } from "../ui/Reveal";
import { useLocale } from "../i18n/LocaleProvider";

/**
 * Inside A — "Mosaic".
 *
 * A short, asymmetric visual tour of the actual room rather than a full
 * inventory of it: the lounge, the arched windows, a table detail and a wide
 * facade view, each at its own size and crop so the block reads as art
 * direction rather than a grid of equal tiles. `loungeLatte` and `loungeVase`
 * are new to this pass — a different corner of the lounge in daylight, and a
 * dried-eucalyptus table still life the client picked out directly from
 * SAVVA's Google Maps listing — replacing photos the client asked removed
 * (including an earlier rose-vase shot that stood in this same slot).
 *
 * No small captions under the photos and no section eyebrow — the client
 * asked for the photos to carry the section on their own, with just the one
 * heading standing over them.
 */
export function InsideMosaic() {
  const { t } = useLocale();

  const items = [
    { photo: photos.lounge, span: "md:col-span-7", aspect: "aspect-[4/5]", offset: "" },
    { photo: photos.loungeVase, span: "md:col-span-5", aspect: "aspect-[3/4]", offset: "md:mt-20" },
    { photo: photos.facadeWide, span: "md:col-span-8", aspect: "aspect-[16/9]", offset: "" },
    { photo: photos.tray, span: "md:col-span-4", aspect: "aspect-[3/4]", offset: "md:-mt-16" },
    { photo: photos.loungeLatte, span: "md:col-span-6", aspect: "aspect-[4/5]", offset: "" },
    { photo: photos.shelfDetail, span: "md:col-span-6", aspect: "aspect-[4/3]", offset: "md:mt-10" },
  ];

  return (
    <section id="inside" className="scroll-mt-24 bg-background py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <Reveal>
          <h2 className="text-balance max-w-2xl whitespace-pre-line font-display text-4xl font-medium leading-[1.05] tracking-tightest text-text-primary sm:text-5xl">
            {t.mood.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-12 md:gap-6">
          {items.map(({ photo, span, aspect, offset }, i) => (
            <div key={photo.src} className={`${span} ${offset}`}>
              <ImageSlot
                src={photo.src}
                alt={photo.alt}
                aspect={aspect}
                objectPosition={photo.objectPosition}
                sizes="(min-width: 768px) 60vw, 100vw"
                delay={i % 2 === 1 ? 0.1 : 0}
                hoverZoom
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
