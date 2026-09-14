"use client";

import { ImageSlot } from "./ui/ImageSlot";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { useLocale } from "./i18n/LocaleProvider";

type MoodItem = {
  alt: string;
  variant: "arch" | "grain" | "beam" | "grid" | "ring";
  aspect: string;
  span: string;
  src?: string;
  objectPosition?: string;
};

// Three real SAVVA photographs now (official Instagram, full-res originals
// — see public/images/savva/README.md). mood-cafe-table.jpg was freed up
// when Hero moved back to hero-pour.jpg — real, already-verified, and
// otherwise sitting unused, so it fills a slot here instead of staying on
// disk unused. The remaining two stay abstract placeholders: no matching
// official photo exists yet for a wide interior view or a seating/tables
// shot.
const items: MoodItem[] = [
  { alt: "SAVVA interior — wide view", variant: "arch", aspect: "aspect-[16/10]", span: "md:col-span-7" }, // TODO: replace with official SAVVA photography
  {
    alt: "SAVVA — working over coffee, a plant and window light",
    variant: "grid",
    aspect: "aspect-square",
    span: "md:col-span-5",
    src: "/images/savva/mood-cafe-table.jpg",
    objectPosition: "center 30%",
  },
  {
    alt: "SAVVA — cold drink detail on a wood table",
    variant: "grain",
    aspect: "aspect-[4/5]",
    span: "md:col-span-5",
    src: "/images/savva/mood-window-light.jpg",
    objectPosition: "65% 55%",
  },
  {
    alt: "SAVVA — three cold drinks in the afternoon light",
    variant: "beam",
    aspect: "aspect-[16/9]",
    span: "md:col-span-7",
    src: "/images/savva/drink-lineup.jpg",
    objectPosition: "center 65%",
  },
  { alt: "SAVVA — natural light", variant: "arch", aspect: "aspect-[21/9]", span: "md:col-span-12" }, // TODO: replace with official SAVVA photography
];

export function MoodGallery() {
  const { t } = useLocale();
  return (
    <section className="mx-auto max-w-content px-5 py-14 sm:px-8 sm:py-20 md:py-24 lg:px-12">
      <Reveal>
        <SectionHeader eyebrow={t.mood.eyebrow} heading={t.mood.heading} />
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-4">
        {items.map((item, i) => (
          <ImageSlot
            key={item.alt}
            alt={item.alt}
            src={item.src}
            variant={item.variant}
            aspect={item.aspect}
            objectPosition={item.objectPosition}
            delay={(i % 3) * 0.08}
            className={item.span}
          />
        ))}
      </div>
    </section>
  );
}
