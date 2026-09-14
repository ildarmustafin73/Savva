"use client";

import { menu } from "@/data/menu";
import { photos } from "@/data/media";
import { getMenuItemLabel } from "@/data/i18n/menuLabel";
import { ImageSlot } from "../ui/ImageSlot";
import { Reveal } from "../ui/Reveal";
import { useLocale } from "../i18n/LocaleProvider";

/**
 * Food B — "At the counter".
 *
 * Same real photographs, opposite structure: instead of a picture-led spread,
 * this one is list-led. The full dessert and breakfast lists are printed with
 * their official prices next to a tall photograph, the way a counter card
 * reads, and the two service photos close the block underneath.
 *
 * Nothing is summarised or invented here — the lists are the actual Desserts
 * and Breakfast categories from the official menu data.
 */
export function FoodCounter() {
  const { t, locale } = useLocale();

  const desserts = menu.find((c) => c.id === "desserts");
  const breakfast = menu.find((c) => c.id === "breakfast");
  const categoryLabel = (c?: (typeof menu)[number]) =>
    !c ? "" : locale === "ar" ? c.labelAr : locale === "ru" ? c.labelRu : c.label;

  const renderList = (category?: (typeof menu)[number]) => {
    if (!category) return null;
    return (
      <div>
        <h3 className="border-b border-border pb-3 text-xs uppercase tracking-widest2 text-text-secondary">
          {categoryLabel(category)}
        </h3>
        <ul className="mt-1">
          {category.items.map((item) => {
            const { primary, secondary, secondaryDir } = getMenuItemLabel(item, locale);
            return (
              <li
                key={item.name}
                className="flex items-baseline justify-between gap-6 border-b border-border/60 py-3.5"
              >
                <span className="min-w-0">
                  <span className="block font-display text-lg leading-snug text-text-primary">
                    {primary}
                  </span>
                  {/* `dir` goes on the inner element only — on the block it
                      would flip this line's alignment away from the name above it. */}
                  <span
                    className={`mt-0.5 block text-sm text-text-secondary ${
                      secondaryDir === "rtl" ? "font-arabic" : ""
                    }`}
                  >
                    <span dir={secondaryDir}>{secondary}</span>
                  </span>
                </span>
                <span className="tabular-nums shrink-0 text-sm text-text-secondary">
                  {item.price} SAR
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <section className="bg-surface py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p className="mb-3 text-xs uppercase tracking-widest2 text-text-secondary">
            {t.food.eyebrow}
          </p>
          <h2 className="text-balance max-w-xl whitespace-pre-line font-display text-4xl font-medium leading-[1.05] tracking-tightest text-text-primary sm:text-5xl">
            {t.food.heading}
          </h2>
          <p className="text-pretty mt-5 max-w-lg text-[0.9375rem] leading-relaxed text-text-secondary">
            {t.food.body}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-12">
          {/* Tall photograph — Madini Cookies, a verified item */}
          <div className="md:col-span-5">
            <ImageSlot
              src={photos.cookies.src}
              alt={photos.cookies.alt}
              aspect="aspect-[4/5]"
              objectPosition={photos.cookies.objectPosition}
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>

          <div className="flex flex-col gap-10 md:col-span-7">
            {renderList(breakfast)}
            {renderList(desserts)}
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-16 md:gap-6">
          <figure>
            <ImageSlot
              src={photos.halloumi.src}
              alt={photos.halloumi.alt}
              aspect="aspect-[4/3]"
              objectPosition={photos.halloumi.objectPosition}
              sizes="(min-width: 640px) 48vw, 100vw"
            />
            <figcaption className="mt-4">
              <h3 className="font-display text-xl text-text-primary">{t.food.combo}</h3>
              <p className="text-pretty mt-1 text-sm leading-relaxed text-text-secondary">
                {t.food.comboBody}
              </p>
            </figcaption>
          </figure>
          <figure>
            <ImageSlot
              src={photos.carService.src}
              alt={photos.carService.alt}
              aspect="aspect-[4/3]"
              objectPosition={photos.carService.objectPosition}
              sizes="(min-width: 640px) 48vw, 100vw"
              delay={0.1}
            />
            <figcaption className="mt-4">
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
