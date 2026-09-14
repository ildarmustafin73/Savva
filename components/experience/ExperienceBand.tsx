"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { photos } from "@/data/media";
import { BotanicalBranch } from "../ui/BotanicalBranch";
import { Reveal } from "../ui/Reveal";
import { useLocale } from "../i18n/LocaleProvider";

/**
 * Experience B — "Band".
 *
 * A single full-bleed photograph of the room with the three points set over
 * it, instead of three separate cards. It reads as one statement rather than a
 * list of tiles, it gives the page a dark beat between two cream sections, and
 * it spends one photograph where variant A spends three — so no frame has to
 * be borrowed from another section to fill a slot.
 */
export function ExperienceBand() {
  const { t } = useLocale();

  return (
    <section id="experience" className="relative scroll-mt-24 overflow-hidden bg-olive-ink">
      <Image
        src={photos.lounge.src}
        alt={photos.lounge.alt}
        fill
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "center 40%" }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(40,43,32,0.95) 0%, rgba(40,43,32,0.86) 45%, rgba(40,43,32,0.55) 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 end-6 hidden w-[16%] md:block"
      >
        <BotanicalBranch tone="on-dark" className="aspect-[220/420] w-full opacity-20" />
      </div>

      <div className="relative z-10 mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-24 md:py-32 lg:px-12">
        <Reveal>
          <p className="mb-3 text-xs uppercase tracking-widest2 text-on-dark-soft">
            {t.experience.eyebrow}
          </p>
          <h2 className="text-balance max-w-xl whitespace-pre-line font-display text-4xl font-medium leading-[1.05] tracking-tightest text-on-dark sm:text-5xl">
            {t.experience.heading}
          </h2>
        </Reveal>

        <dl className="mt-12 grid max-w-3xl gap-px overflow-hidden border-y border-on-dark/15 md:mt-16 md:grid-cols-3 md:gap-0">
          {t.experience.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`py-7 md:px-7 md:py-9 ${
                i > 0 ? "border-t border-on-dark/15 md:border-s md:border-t-0" : "md:ps-0"
              }`}
            >
              <dt>
                <span className="tabular-nums block text-xs tracking-widest2 text-on-dark-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 block font-display text-2xl text-on-dark">{item.title}</span>
              </dt>
              <dd className="text-pretty mt-2 text-[0.9375rem] leading-relaxed text-on-dark-soft">
                {item.body}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
