"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { brand, links } from "@/data/content";
import { CTAButton } from "../ui/CTAButton";
import { ImageSlot } from "../ui/ImageSlot";

const easing = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const line = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: easing } },
};

/**
 * Signature mechanic for this direction: a slow crossfade between the two
 * real logo assets — the compact "wordmark" (Arabic + SAVVA) and the fuller
 * "lockup" (Arabic + SAVVA + COFFEE). Both are genuine SAVVA artwork; there
 * is no separate English-only or Arabic-only logo file to morph between, so
 * this is an honest adaptation of the "EN↔AR wordmark morph" idea proposed
 * earlier — a real two-state crossfade using only assets that exist, not a
 * script-split that would require inventing or altering the artwork.
 *
 * Both images stay mounted and only their opacity animates (no
 * AnimatePresence / unmount-based crossfade) — this project hit real
 * exit-animation bugs with AnimatePresence earlier, so plain opacity
 * animation on permanently-mounted elements is the established pattern.
 */
function LogoMorph() {
  const shouldReduceMotion = useReducedMotion();
  const [showLockup, setShowLockup] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const id = setInterval(() => setShowLockup((v) => !v), 3800);
    return () => clearInterval(id);
  }, [shouldReduceMotion]);

  return (
    <div className="relative h-16 w-40 sm:h-20 sm:w-48">
      <motion.span
        className="absolute inset-0"
        animate={{ opacity: showLockup ? 0 : 1 }}
        transition={{ duration: 0.6, ease: easing }}
      >
        <Image
          src="/images/brand/savva-wordmark-olive.png"
          alt="SAVVA"
          fill
          className="object-contain object-left"
          sizes="200px"
        />
      </motion.span>
      <motion.span
        className="absolute inset-0"
        animate={{ opacity: showLockup ? 1 : 0 }}
        transition={{ duration: 0.6, ease: easing }}
      >
        <Image
          src="/images/brand/savva-logo-lockup-olive.png"
          alt="SAVVA — coffee"
          fill
          className="object-contain object-left"
          sizes="200px"
        />
      </motion.span>
    </div>
  );
}

/**
 * Hero C — "Interactive Arabic Modernism".
 *
 * The one genuinely structural departure: Arabic type as the composition's
 * main graphic element (not a faint decorative watermark), an asymmetric
 * grid instead of a full-bleed photo, and the real photo demoted to a
 * framed panel rather than the whole background. Cream ground, olive type
 * — inverts Hero A/B's dark-photo-dominant read.
 */
export function HeroC() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-surface">
      <div className="mx-auto grid min-h-[100svh] max-w-content grid-cols-1 items-center gap-10 px-5 py-24 sm:px-8 md:grid-cols-12 md:gap-8 lg:px-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="md:col-span-7"
        >
          <motion.p variants={line} className="text-xs uppercase tracking-widest2 text-text-secondary">
            SAVVA — Madinah
          </motion.p>

          <motion.span
            variants={line}
            aria-hidden="true"
            className="mt-2 block select-none font-arabic text-[6rem] leading-[0.95] text-olive-ink sm:text-[8rem] md:text-[9rem]"
          >
            قهوة
          </motion.span>

          <motion.div variants={line} className="mt-6">
            <LogoMorph />
          </motion.div>

          <motion.p
            variants={line}
            className="text-pretty mt-6 max-w-md whitespace-pre-line font-display text-2xl font-medium leading-snug tracking-tight text-text-primary sm:text-3xl"
          >
            {brand.tagline}
          </motion.p>

          <motion.div variants={line} className="mt-9 flex flex-wrap gap-4">
            <CTAButton href="#menu" variant="ghost">
              Explore menu
            </CTAButton>
            <CTAButton href={links.directions} variant="ghost" external>
              Get directions
            </CTAButton>
          </motion.div>
        </motion.div>

        <div className="md:col-span-5">
          <ImageSlot
            alt="SAVVA — pouring a cold drink into a branded cup"
            src="/images/savva/hero-pour.jpg"
            aspect="aspect-[3/4]"
            objectPosition="center 30%"
            priority
            className="mx-auto max-w-sm md:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
