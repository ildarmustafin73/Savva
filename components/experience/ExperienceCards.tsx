"use client";

import { photos } from "@/data/media";
import { ImageSlot } from "../ui/ImageSlot";
import { Reveal } from "../ui/Reveal";
import { useLocale } from "../i18n/LocaleProvider";

/**
 * Experience A — "Three panels".
 *
 * The old version was three words on an empty background. Each of the three
 * now carries a real photograph of the thing it describes, so the block says
 * something to a visitor who never reads the body copy.
 */
export function ExperienceCards() {
  const { t } = useLocale();
  // Deliberately no food photo here: Food has its own section directly above,
  // and reusing its sandwich would print the same frame twice on one page.
  const shots = [photos.hibiscusPour, photos.meloncup, photos.facadeTall];

  return (
    <section id="experience" className="scroll-mt-24 bg-surface py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p className="mb-3 text-xs uppercase tracking-widest2 text-text-secondary">
            {t.experience.eyebrow}
          </p>
          <h2 className="text-balance max-w-xl whitespace-pre-line font-display text-4xl font-medium leading-[1.05] tracking-tightest text-text-primary sm:text-5xl">
            {t.experience.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-3 md:gap-7">
          {t.experience.items.map((item, i) => (
            <article key={item.title} className={i === 1 ? "md:mt-12" : ""}>
              <ImageSlot
                src={shots[i].src}
                alt={shots[i].alt}
                aspect="aspect-[4/5]"
                objectPosition={shots[i].objectPosition}
                sizes="(min-width: 768px) 31vw, 100vw"
                delay={i * 0.08}
              />
              <p className="tabular-nums mt-5 text-xs tracking-widest2 text-text-secondary">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-2xl text-text-primary">{item.title}</h3>
              <p className="text-pretty mt-2 text-[0.9375rem] leading-relaxed text-text-secondary">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
