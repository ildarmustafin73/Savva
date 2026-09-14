"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { links } from "@/data/content";
import { photos } from "@/data/media";
import { BotanicalBranch } from "../ui/BotanicalBranch";
import { CTAButton } from "../ui/CTAButton";
import { Logo } from "../ui/Logo";
import { useLocale } from "../i18n/LocaleProvider";

const CLIP = "/videos/savva/pour-cups.mp4";
const POSTER = "/images/savva/video-poster-pour-cups.jpg";

/**
 * Hero C — "The window".
 *
 * A real SAVVA clip (iced tea poured across a tray of branded cups) as the
 * first thing on the page. The source is 9:16, so instead of stretching it
 * across a 16:9 viewport it sits in an arch-topped frame — the same arch that
 * appears in SAVVA's own windows and interior niches, so the shape is taken
 * from the place rather than invented as decoration.
 *
 * The clip is muted, loops, plays inline, and carries its own poster, so the
 * first paint is an image and the video arrives after. Under
 * prefers-reduced-motion no video is mounted at all — the poster stands alone.
 */
export function HeroWindow() {
  const { t } = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Some browsers ignore the autoplay attribute until a play() call is made.
  useEffect(() => {
    if (shouldReduceMotion) return;
    videoRef.current?.play().catch(() => {});
  }, [shouldReduceMotion]);

  return (
    <section id="top" className="relative overflow-hidden bg-olive-ink">
      <div className="mx-auto grid min-h-[100svh] max-w-content grid-cols-1 items-center gap-10 px-5 pb-16 pt-28 sm:px-8 md:grid-cols-12 md:gap-12 md:py-28 lg:px-12">
        <div className="hero-stagger order-2 md:order-1 md:col-span-6 lg:col-span-5">
          <div>
            <Logo variant="wordmark" tone="cream" className="h-16 sm:h-[4.5rem]" />
          </div>

          <p className="mt-6 text-xs uppercase tracking-widest2 text-on-dark-soft">
            {t.hero.locationTag}
          </p>

          <h1 className="text-balance mt-5 max-w-md whitespace-pre-line font-display text-[2.75rem] font-medium leading-[1.02] tracking-tightest text-on-dark sm:text-5xl lg:text-6xl">
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

        <div className="relative order-1 md:order-2 md:col-span-6 lg:col-span-7">
          <motion.div
            initial={shouldReduceMotion ? false : { clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            className="relative mx-auto aspect-[9/13] w-full max-w-[22rem] overflow-hidden rounded-t-full bg-olive-deep outline outline-1 -outline-offset-1 outline-on-dark/15 sm:max-w-[24rem] md:max-w-none lg:aspect-[9/12]"
          >
            <Image
              src={POSTER}
              alt={t.video.labels.pourCups}
              fill
              priority
              sizes="(min-width: 768px) 46vw, 90vw"
              className="object-cover"
            />
            {!shouldReduceMotion && (
              <video
                ref={videoRef}
                src={CLIP}
                poster={POSTER}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
          </motion.div>

          {/* Arch springline — a hairline where the real windows have their
              stone impost, so the frame reads as architecture, not a sticker. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-[48%] mx-auto hidden h-px max-w-[24rem] bg-on-dark/15 md:block md:max-w-none"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-8 -end-6 hidden w-[18%] md:block"
          >
            <BotanicalBranch tone="on-dark" className="aspect-[220/420] w-full opacity-25" />
          </div>
        </div>
      </div>
    </section>
  );
}
