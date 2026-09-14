"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { links } from "@/data/content";
import { CTAButton } from "../ui/CTAButton";
import { Logo } from "../ui/Logo";

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
 * Hero B — "Cinematic SAVVA".
 *
 * Same real photo and same real copy as Hero A, deliberately treated
 * differently: a tighter, slow push-in crop read as a single still from
 * a film rather than a poster. Centred type, a heavier vignette instead
 * of a flat scrim, and a slow one-time scale (skipped entirely under
 * prefers-reduced-motion — no looping/parallax substitute, just static).
 */
export function HeroB() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-olive-ink">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: shouldReduceMotion ? 1.04 : 1 }}
        animate={{ scale: shouldReduceMotion ? 1.04 : 1.08 }}
        transition={{ duration: 14, ease: "easeOut" }}
      >
        <Image
          src="/images/savva/hero-pour.jpg"
          alt="SAVVA — pouring a cold drink into a branded cup"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 22%" }}
        />
      </motion.div>

      {/* Heavier, more filmic vignette: radial darkening at the edges plus an
          overall wash, instead of Hero A's flat bottom-up scrim. */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(120% 90% at 50% 45%, rgba(40,43,32,0.35) 0%, rgba(40,43,32,0.86) 100%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex max-w-2xl flex-col items-center px-5 text-center sm:px-8"
      >
        <motion.div variants={line}>
          <Logo variant="wordmark" tone="cream" className="h-14 sm:h-16" />
        </motion.div>

        <motion.p
          variants={line}
          className="mt-3 text-xs uppercase tracking-widest2 text-on-dark-soft"
        >
          Madinah, Saudi Arabia
        </motion.p>

        <motion.p
          variants={line}
          className="text-balance mt-8 whitespace-pre-line font-display text-4xl font-medium leading-[1.05] tracking-tight text-on-dark sm:text-5xl md:text-[3.75rem]"
        >
          {"A day in SAVVA\nis all you need."}
        </motion.p>

        <motion.div variants={line} className="mt-10 flex flex-wrap justify-center gap-4">
          <CTAButton href="#menu" variant="light">
            Explore menu
          </CTAButton>
          <CTAButton href={links.directions} variant="light" external>
            Get directions
          </CTAButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
