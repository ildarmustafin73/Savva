"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { links } from "@/data/content";
import { BotanicalBranch } from "./ui/BotanicalBranch";
import { ClipReveal } from "./ui/ClipReveal";
import { CTAButton } from "./ui/CTAButton";
import { Logo } from "./ui/Logo";
import { useLocale } from "./i18n/LocaleProvider";

const easing = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const line = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: easing } },
};

/**
 * First-viewport thesis: a real SAVVA photograph (pouring shot, sourced
 * from their official Instagram at full 3072×4096 resolution — see
 * public/images/savva/README) sits behind the same graphic composition
 * as before — the extracted wordmark, the botanical branch developed from
 * their own menu artwork, and a large "قهوة" (coffee, a real word — not an
 * invented slogan). Olive still owns the viewport via the scrim; the photo
 * adds life without replacing the committed colour strategy.
 */
export function Hero() {
  const { t } = useLocale();
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const branchY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-olive-ink"
    >
      {/* Real SAVVA photo — pouring shot, official Instagram, full-res original.
          object-position biased toward the upper third: on wide desktop crops
          object-cover matches width and crops top/bottom, and the cup + logo
          sit around 25–35% down the source image, not dead centre. */}
      <Image
        src="/images/savva/hero-pour.jpg"
        alt="SAVVA — pouring a cold drink into a branded cup"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "center 28%" }}
      />

      {/* Scrim — plain inline style; Tailwind's from-/via-/to- utilities don't
          get generated for this project's nested custom color tokens. Bottom-
          heavy for the text block, with an overall wash so the branch/Arabic
          texture keep reading against a busier photo background. */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(40,43,32,0.93) 0%, rgba(40,43,32,0.55) 42%, rgba(40,43,32,0.42) 100%)",
        }}
      />

      {/* Large decorative Arabic word — real word ("coffee"), pure texture. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-10 select-none font-arabic text-[13rem] leading-none text-on-dark/[0.06] sm:text-[18rem] md:-top-16 md:text-[24rem]"
      >
        قهوة
      </span>

      <motion.div
        style={{ y: branchY }}
        className="pointer-events-none absolute inset-y-0 right-0 w-[46%] sm:w-[38%] md:w-[32%] lg:w-[26%]"
      >
        <ClipReveal delay={0.3} className="h-full w-full">
          <BotanicalBranch
            tone="on-dark"
            className="h-full w-full translate-x-[18%] opacity-[0.55]"
          />
        </ClipReveal>
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 flex flex-1 flex-col justify-end px-5 pb-12 pt-28 sm:px-8 sm:pt-32 lg:px-12"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-content lg:max-w-2xl"
        >
          <motion.div variants={line}>
            <Logo variant="wordmark" tone="cream" className="h-16 sm:h-20" />
          </motion.div>

          <motion.p
            variants={line}
            className="mt-5 text-xs uppercase tracking-widest2 text-on-dark-soft"
          >
            {t.hero.locationTag}
          </motion.p>

          <motion.p
            variants={line}
            className="text-balance mt-4 max-w-xl whitespace-pre-line font-display text-4xl font-medium leading-[1.05] tracking-tight text-on-dark sm:text-5xl md:text-6xl"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.div variants={line} className="mt-9 flex flex-wrap gap-4">
            <CTAButton href="#menu" variant="light">
              {t.hero.exploreMenu}
            </CTAButton>
            <CTAButton href={links.directions} variant="light" external>
              {t.hero.getDirections}
            </CTAButton>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
