"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { links } from "@/data/content";
import { photos } from "@/data/media";
import { BotanicalBranch } from "../ui/BotanicalBranch";
import { CTAButton } from "../ui/CTAButton";
import { Logo } from "../ui/Logo";
import { useLocale } from "../i18n/LocaleProvider";

/**
 * Hero B — "The door".
 *
 * Full-bleed photograph of SAVVA's own storefront at night: the lit wordmark
 * in both scripts, the glow through the glass, the terrace chairs. It sells
 * the place before it sells any drink, and it tells a first-time visitor what
 * to look for when they arrive.
 *
 * Two genuinely different crops are shipped rather than one image stretched to
 * fit: a landscape frame for wide viewports and a portrait frame for phones.
 * That needs real art direction, which next/image cannot express — <picture>
 * with media queries is the correct tool, so this is a deliberate, isolated
 * exception to the "always next/image" rule. Both files are pre-sized and
 * compressed at build time, and the first one is a high-priority preload.
 */
export function HeroFacade() {
  const { t } = useLocale();
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const branchY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "14%"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-olive-ink"
    >
      <picture>
        <source media="(min-width: 768px)" srcSet={photos.facadeWide.src} />
        {/* eslint-disable-next-line @next/next/no-img-element -- art-directed crops per breakpoint; see component doc */}
        <img
          src={photos.facadeTall.src}
          alt={photos.facadeWide.alt}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 42%" }}
        />
      </picture>

      {/* Scrim — inline style because this project's nested colour tokens don't
          generate Tailwind from-/via-/to- utilities. Bottom-heavy so the type
          block stays legible over the bright signage. */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(40,43,32,0.94) 0%, rgba(40,43,32,0.62) 40%, rgba(40,43,32,0.26) 100%)",
        }}
      />

      {/* Separate, short scrim under the header band only. The shop's own sign
          is the brightest thing in the frame and sits exactly where the nav is,
          so the nav needs its own contrast without darkening the whole photo. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-36 sm:h-40"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(40,43,32,0.62) 0%, rgba(40,43,32,0.28) 55%, rgba(40,43,32,0) 100%)",
        }}
      />

      <motion.div
        style={{ y: branchY }}
        className="pointer-events-none absolute -bottom-10 end-0 hidden w-[20%] md:block lg:w-[16%]"
      >
        <BotanicalBranch tone="on-dark" className="aspect-[220/420] w-full opacity-25" />
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-content flex-1 flex-col justify-end px-5 pb-14 pt-28 sm:px-8 sm:pb-16 lg:px-12"
      >
        <div className="hero-stagger max-w-2xl">
          {/* Hidden on phones: the header already carries the wordmark and the
              photograph carries SAVVA's real illuminated sign, so a third mark
              in one small viewport is clutter, not branding. */}
          <div className="hidden sm:block">
            <Logo variant="wordmark" tone="cream" className="h-16 sm:h-20" />
          </div>

          <p className="mt-5 text-xs uppercase tracking-widest2 text-on-dark-soft">
            {t.hero.locationTag}
          </p>

          <h1 className="text-balance mt-4 whitespace-pre-line font-display text-[2.75rem] font-medium leading-[1.02] tracking-tightest text-on-dark sm:text-5xl md:text-6xl">
            {t.hero.tagline}
          </h1>

          <div className="mt-9 flex flex-wrap gap-3">
            <CTAButton href="#start" variant="cream">
              {t.hero.exploreMenu}
            </CTAButton>
            <CTAButton href={links.directions} variant="light" external>
              {t.hero.getDirections}
            </CTAButton>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
