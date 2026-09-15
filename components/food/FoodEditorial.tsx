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
 * The vase of red roses that used to stand in for "something sweet" is gone
 * — flowers aren't a dessert, and the client asked for it out of this
 * section for good (it isn't reused anywhere in Food or Desserts either).
 * Its slot now carries a real SAVVA dessert photo instead: the same spiral
 * pecan pastry used at the top of the page, still without a guessed name
 * since its own caption never names the dish. A dedicated "Наши десерты"
 * section right after this one covers desserts properly (several real
 * photos and a real video) — see DessertShowcase.tsx — so this section
 * stays a tight three: Halloumi (priced, named), the pastry, and the car
 * service moment, rather than padding to four with a repeat.
 */
export function FoodEditorial() {
  const { t, locale } = useLocale();

  const halloumi = allItems.find((i) => i.name === "Halloumi Sandwich");

  const priceOf = (item?: (typeof allItems)[number]) => (item ? `${item.price} SAR` : undefined);
  const nameOf = (item?: (typeof allItems)[number]) =>
    item ? getMenuItemLabel(item, locale).primary : "";

  return (
    <section className="bg-surface py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <Reveal>
          {/* A full section on its own, so the heading carries real weight —
              matching the scale used for the section above it, not a small
              eyebrow-and-caption treatment. */}
          <h2 className="text-balance whitespace-pre-line font-display text-5xl font-medium leading-[1.02] tracking-tightest text-text-primary sm:text-6xl md:text-7xl">
            {t.food.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-12 md:gap-6">
          {/* Halloumi Sandwich — verified item, official price. The name now
              sits close under the photo at real display size, rather than a
              small line trailing a lot of empty space beside it. */}
          <figure className="md:col-span-7">
            <ImageSlot
              src={halloumi ? photos.halloumi.src : undefined}
              alt={photos.halloumi.alt}
              aspect="aspect-[4/3]"
              objectPosition={photos.halloumi.objectPosition}
              sizes="(min-width: 768px) 58vw, 100vw"
              hoverZoom
            />
            <figcaption className="mt-4 flex items-baseline justify-between gap-4">
              <h3 className="font-display text-2xl text-text-primary sm:text-3xl">{nameOf(halloumi)}</h3>
              <p className="tabular-nums shrink-0 text-base text-text-secondary">{priceOf(halloumi)}</p>
            </figcaption>
          </figure>

          {/* A real SAVVA pastry (owner-confirmed Instagram post) — replaces
              the flower photo that used to stand here. Its own caption never
              names the dish, so it's captioned honestly rather than guessed. */}
          <figure className="md:col-span-5 md:mt-16">
            <ImageSlot
              src={photos.dessertPastry.src}
              alt={photos.dessertPastry.alt}
              aspect="aspect-[4/5]"
              objectPosition={photos.dessertPastry.objectPosition}
              sizes="(min-width: 768px) 40vw, 100vw"
              delay={0.1}
              hoverZoom
            />
            <figcaption className="mt-4">
              <h3 className="font-display text-xl text-text-primary sm:text-2xl">{t.food.sweet}</h3>
              <p className="text-pretty mt-1.5 max-w-xs text-base leading-relaxed text-text-secondary">
                {t.food.sweetBody}
              </p>
            </figcaption>
          </figure>

          {/* Breakfast handed out to a car window — real SAVVA service, and
              real food (a wrapped sandwich), framed here around the food
              rather than the delivery logistics. */}
          <figure className="md:col-span-12">
            <ImageSlot
              src={photos.carService.src}
              alt={photos.carService.alt}
              aspect="aspect-[21/9]"
              objectPosition={photos.carService.objectPosition}
              sizes="100vw"
              hoverZoom
            />
            <figcaption className="mt-4 max-w-sm">
              <h3 className="font-display text-xl text-text-primary sm:text-2xl">{t.food.toCar}</h3>
              <p className="text-pretty mt-1.5 text-base leading-relaxed text-text-secondary">
                {t.food.toCarBody}
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
