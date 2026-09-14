"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { links } from "@/data/content";
import { BotanicalBranch } from "../ui/BotanicalBranch";
import { ClipReveal } from "../ui/ClipReveal";
import { CTAButton } from "../ui/CTAButton";
import { Logo } from "../ui/Logo";

const easing = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const line = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: easing } },
};

type HeroAProps = {
  /** Which real SAVVA photo sits behind the composition. Defaults to the shipped hero-pour.jpg. */
  photoSrc?: string;
  photoAlt?: string;
  /** CSS object-position for the chosen photo — tuned per source image. */
  photoObjectPosition?: string;
};

/**
 * Hero A — "Editorial Botanical".
 *
 * The site's current, already-shipped direction: calm full-bleed
 * photography, olive scrim, the botanical line-drawing as a quiet
 * structural accent, bottom-anchored editorial type. Included in the
 * lab unchanged so it serves as the baseline the other two directions
 * are judged against — not a strawman.
 *
 * Photo is parameterized (lab-only) so /hero-lab can A/B/C-test which
 * real SAVVA source photo works best in this exact composition without
 * touching the shipped Hero.tsx.
 */
export function HeroA({
  photoSrc = "/images/savva/hero-pour.jpg",
  photoAlt = "SAVVA — pouring a cold drink into a branded cup",
  photoObjectPosition = "center 28%",
}: HeroAProps) {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const branchY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["0%", "0%"] : ["0%", "14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] flex-col overflow-hidden bg-olive-ink">
      <Image
        key={photoSrc}
        src={photoSrc}
        alt={photoAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: photoObjectPosition }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(40,43,32,0.93) 0%, rgba(40,43,32,0.55) 42%, rgba(40,43,32,0.42) 100%)",
        }}
      />

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
          <BotanicalBranch tone="on-dark" className="h-full w-full translate-x-[18%] opacity-[0.55]" />
        </ClipReveal>
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 flex flex-1 flex-col justify-end px-5 pb-12 pt-28 sm:px-8 sm:pt-32 lg:px-12"
      >
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-content lg:max-w-2xl">
          <motion.div variants={line}>
            <Logo variant="wordmark" tone="cream" className="h-16 sm:h-20" />
          </motion.div>

          <motion.p
            variants={line}
            className="text-balance mt-7 max-w-xl whitespace-pre-line font-display text-4xl font-medium leading-[1.05] tracking-tight text-on-dark sm:text-5xl md:text-6xl"
          >
            {"A day in SAVVA\nis all you need."}
          </motion.p>

          <motion.div variants={line} className="mt-9 flex flex-wrap gap-4">
            <CTAButton href="#menu" variant="light">
              Explore menu
            </CTAButton>
            <CTAButton href={links.directions} variant="light" external>
              Get directions
            </CTAButton>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
