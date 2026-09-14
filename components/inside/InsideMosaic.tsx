"use client";

import { photos } from "@/data/media";
import { ImageSlot } from "../ui/ImageSlot";
import { Reveal } from "../ui/Reveal";
import { useLocale } from "../i18n/LocaleProvider";

/**
 * Inside A — "Mosaic".
 *
 * Keeps the asymmetric rhythm the site already had — a run of photographs at
 * deliberately different sizes and proportions — but every slot is now a real
 * photograph of the actual room. The two drink close-ups that used to stand in
 * for "the space" have moved to the sections that are actually about drinks.
 */
export function InsideMosaic() {
  const { t } = useLocale();
  const c = t.mood.captions;

  const items = [
    { photo: photos.lounge, caption: c.lounge, span: "md:col-span-7", aspect: "aspect-[4/5]", offset: "" },
    { photo: photos.counter, caption: c.counter, span: "md:col-span-5", aspect: "aspect-[3/4]", offset: "md:mt-20" },
    { photo: photos.facadeWide, caption: c.facade, span: "md:col-span-8", aspect: "aspect-[16/9]", offset: "" },
    { photo: photos.tray, caption: c.tray, span: "md:col-span-4", aspect: "aspect-[3/4]", offset: "md:-mt-16" },
    // Closing row is two medium frames rather than one full-width band: both
    // sources are portrait, and a 12-column 16:9 slot would crop them to a strip.
    { photo: photos.coldOnWood, caption: c.table, span: "md:col-span-5", aspect: "aspect-[4/5]", offset: "" },
    { photo: photos.shelfTrio, caption: c.cold, span: "md:col-span-7", aspect: "aspect-[4/3]", offset: "md:mt-10" },
  ];

  return (
    <section id="inside" className="scroll-mt-24 bg-background py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="mb-3 text-xs uppercase tracking-widest2 text-text-secondary">
                {t.mood.eyebrow}
              </p>
              <h2 className="text-balance whitespace-pre-line font-display text-4xl font-medium leading-[1.05] tracking-tightest text-text-primary sm:text-5xl">
                {t.mood.heading}
              </h2>
            </div>
            <p className="text-pretty max-w-sm text-[0.9375rem] leading-relaxed text-text-secondary md:col-span-4 md:col-start-9">
              {t.mood.body}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-12 md:gap-6">
          {items.map(({ photo, caption, span, aspect, offset }, i) => (
            <figure key={photo.src} className={`${span} ${offset}`}>
              <ImageSlot
                src={photo.src}
                alt={photo.alt}
                aspect={aspect}
                objectPosition={photo.objectPosition}
                sizes="(min-width: 768px) 60vw, 100vw"
                delay={i % 2 === 1 ? 0.1 : 0}
              />
              <figcaption className="mt-3 text-sm text-text-secondary">{caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
