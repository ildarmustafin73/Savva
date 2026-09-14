"use client";

import { menu } from "@/data/menu";
import { photos } from "@/data/media";
import { getMenuItemLabel } from "@/data/i18n/menuLabel";
import { ImageSlot } from "../ui/ImageSlot";
import { Reveal } from "../ui/Reveal";
import { useLocale } from "../i18n/LocaleProvider";

const allItems = menu.flatMap((c) => c.items);

/**
 * Food A — "Editorial spread".
 *
 * Four real photographs at four different sizes, so the block has a rhythm
 * instead of one big picture and a wall of text. Two of the four carry a
 * verified menu item and its official price; the other two illustrate things
 * SAVVA actually posts about — the breakfast pairing and the run-out-to-the-car
 * service — and are captioned as such rather than as menu items.
 */
export function FoodEditorial() {
  const { t, locale } = useLocale();

  const halloumi = allItems.find((i) => i.name === "Halloumi Sandwich");
  const cookies = allItems.find((i) => i.name === "Madini Cookies");

  const priceOf = (item?: (typeof allItems)[number]) => (item ? `${item.price} SAR` : undefined);
  const nameOf = (item?: (typeof allItems)[number]) =>
    item ? getMenuItemLabel(item, locale).primary : "";

  return (
    <section className="bg-surface py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="grid gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-6">
              <p className="mb-3 text-xs uppercase tracking-widest2 text-text-secondary">
                {t.food.eyebrow}
              </p>
              <h2 className="text-balance whitespace-pre-line font-display text-4xl font-medium leading-[1.05] tracking-tightest text-text-primary sm:text-5xl">
                {t.food.heading}
              </h2>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <p className="text-pretty text-[0.9375rem] leading-relaxed text-text-secondary">
                {t.food.body}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-12 md:gap-6">
          {/* Lead — the breakfast pairing SAVVA puts together */}
          <figure className="md:col-span-7">
            <ImageSlot
              src={photos.deskCombo.src}
              alt={photos.deskCombo.alt}
              aspect="aspect-[4/3]"
              objectPosition={photos.deskCombo.objectPosition}
              sizes="(min-width: 768px) 58vw, 100vw"
            />
            <figcaption className="mt-4 max-w-sm">
              <h3 className="font-display text-xl text-text-primary">{t.food.combo}</h3>
              <p className="text-pretty mt-1 text-sm leading-relaxed text-text-secondary">
                {t.food.comboBody}
              </p>
            </figcaption>
          </figure>

          {/* Madini Cookies — verified item, official price */}
          <figure className="md:col-span-5 md:mt-16">
            <ImageSlot
              src={photos.cookies.src}
              alt={photos.cookies.alt}
              aspect="aspect-[4/5]"
              objectPosition={photos.cookies.objectPosition}
              sizes="(min-width: 768px) 40vw, 100vw"
              delay={0.1}
            />
            <figcaption className="mt-4">
              <h3 className="font-display text-xl text-text-primary">{nameOf(cookies)}</h3>
              <p className="tabular-nums mt-1 text-sm text-text-secondary">{priceOf(cookies)}</p>
            </figcaption>
          </figure>

          {/* Halloumi Sandwich — verified item, official price */}
          <figure className="md:col-span-4">
            <ImageSlot
              src={photos.halloumi.src}
              alt={photos.halloumi.alt}
              aspect="aspect-[1/1]"
              objectPosition={photos.halloumi.objectPosition}
              sizes="(min-width: 768px) 32vw, 100vw"
            />
            <figcaption className="mt-4">
              <h3 className="font-display text-xl text-text-primary">{nameOf(halloumi)}</h3>
              <p className="tabular-nums mt-1 text-sm text-text-secondary">{priceOf(halloumi)}</p>
            </figcaption>
          </figure>

          {/* Car service — a real thing SAVVA offers, captioned as service */}
          <figure className="md:col-span-8">
            <ImageSlot
              src={photos.carService.src}
              alt={photos.carService.alt}
              aspect="aspect-[16/10]"
              objectPosition={photos.carService.objectPosition}
              sizes="(min-width: 768px) 66vw, 100vw"
              delay={0.1}
            />
            <figcaption className="mt-4 max-w-md">
              <h3 className="font-display text-xl text-text-primary">{t.food.toCar}</h3>
              <p className="text-pretty mt-1 text-sm leading-relaxed text-text-secondary">
                {t.food.toCarBody}
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
