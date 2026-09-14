"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { links } from "@/data/content";
import { photos } from "@/data/media";
import { BotanicalBranch } from "../ui/BotanicalBranch";
import { CTAButton } from "../ui/CTAButton";
import { Logo } from "../ui/Logo";
import { useLocale } from "../i18n/LocaleProvider";

const easing = [0.22, 1, 0.36, 1] as const;

/**
 * Hero A — "The room".
 *
 * Leads with the actual interior: arched windows, cream seating, real plants.
 * The source photograph is portrait (1050×1400), so it is never stretched
 * across a wide viewport — it keeps its own proportion inside a full-height
 * panel on the right, and the type takes the left column. On phones the panel
 * moves above the type at 4:5, which is the shape the photo already is.
 */
export function HeroInterior() {
  const { t } = useLocale();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="mx-auto grid min-h-[100svh] max-w-content grid-cols-1 items-stretch gap-0 md:grid-cols-12">
        {/* Type column */}
        <div className="hero-stagger order-2 flex flex-col justify-center px-5 pb-16 pt-10 sm:px-8 md:order-1 md:col-span-6 md:py-32 lg:col-span-5 lg:px-12">
          <div>
            <Logo variant="wordmark" tone="olive" className="h-16 sm:h-[4.5rem]" />
          </div>

          <p className="mt-6 text-xs uppercase tracking-widest2 text-text-secondary">
            {t.hero.locationTag}
          </p>

          <h1 className="text-balance mt-5 max-w-md whitespace-pre-line font-display text-[2.75rem] font-medium leading-[1.02] tracking-tightest text-text-primary sm:text-5xl lg:text-6xl">
            {t.hero.tagline}
          </h1>

          <div className="mt-9 flex flex-wrap gap-3">
            <CTAButton href="#start">{t.hero.exploreMenu}</CTAButton>
            <CTAButton href={links.directions} variant="ghost" external>
              {t.hero.getDirections}
            </CTAButton>
          </div>
        </div>

        {/* Photo panel — fills the column height, photo keeps its own crop. */}
        <div className="relative order-1 min-h-[58svh] overflow-hidden md:order-2 md:col-span-6 md:min-h-0 lg:col-span-7">
          {/* Driven by `animate`, not `whileInView`: this is above the fold, so it
              must not wait on an IntersectionObserver callback to become visible. */}
          <motion.div
            className="absolute inset-0"
            initial={shouldReduceMotion ? false : { clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          >
            <Image
              src={photos.lounge.src}
              alt={photos.lounge.alt}
              fill
              priority
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover"
              style={{ objectPosition: photos.lounge.objectPosition }}
            />
          </motion.div>

          {/* Olive hairline anchors the panel to the brand rather than letting
              the photo float as a bare rectangle. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 start-0 hidden w-px bg-olive/35 md:block"
          />

          <motion.div
            aria-hidden="true"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: easing }}
            className="pointer-events-none absolute bottom-8 -start-12 hidden w-[22%] md:block"
          >
            {/* aspect matches the SVG's own 220×420 viewBox so the line art never skews */}
            <BotanicalBranch tone="olive" className="aspect-[220/420] w-full opacity-40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
