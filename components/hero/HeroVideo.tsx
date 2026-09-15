"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { links } from "@/data/content";
import { heroClip } from "@/data/media";
import { BotanicalBranch } from "../ui/BotanicalBranch";
import { CTAButton } from "../ui/CTAButton";
import { Logo } from "../ui/Logo";
import { useLocale } from "../i18n/LocaleProvider";

/**
 * Hero C — full-bleed video.
 *
 * SAVVA's own storefront sign at night, running edge to edge behind the type.
 * The source is 9:16, so on a wide desktop viewport object-cover keeps only a
 * horizontal band of it — object-position is biased to 45% so the band that
 * survives is the one holding the sign, not the ceiling above it.
 *
 * First paint is the poster image (priority), and the video is layered over it
 * once it can play, so there is never an empty black rectangle while the file
 * loads. Under prefers-reduced-motion no video element is mounted at all and
 * the poster simply stands on its own.
 */
export function HeroVideo() {
  const { t } = useLocale();
  const dir = t.meta.dir;
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Safari and some mobile browsers ignore the autoplay attribute until play()
  // is called explicitly; muted + playsInline keeps that call allowed.
  //
  // One attempt on mount is not enough: if the page is opened in a background
  // tab the browser refuses (or immediately pauses) playback, and the hero
  // would sit on a frozen first frame once the visitor switches to it. So the
  // attempt is repeated when the video becomes playable and whenever the tab
  // becomes visible again.
  useEffect(() => {
    if (shouldReduceMotion) return;
    const video = videoRef.current;
    if (!video) return;

    const attempt = () => {
      if (document.visibilityState !== "visible") return;
      video.play().catch(() => {
        /* Blocked by autoplay policy — the poster stays, which is fine. */
      });
    };

    attempt();
    video.addEventListener("canplay", attempt);
    document.addEventListener("visibilitychange", attempt);

    return () => {
      video.removeEventListener("canplay", attempt);
      document.removeEventListener("visibilitychange", attempt);
    };
  }, [shouldReduceMotion]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-olive-ink"
    >
      {/* Backdrop, wide screens only: the same frame blurred out to fill the
          space either side of the clip, so the section still reads as one
          full-bleed image instead of a video floating on a flat colour.
          The source frame carries warm, bright tones (lit signage, pale
          gift packaging) that a blur doesn't dim — left at low opacity this
          washed out into a visible pale/grey cloud against the otherwise
          deep olive section, which read as an accident rather than a
          deliberate surface. Desaturating it and covering it with a much
          heavier olive-ink veil keeps the same soft depth without the
          brightness bleeding through. */}
      <div aria-hidden="true" className="absolute inset-0 hidden md:block">
        <Image
          src={heroClip.poster}
          alt=""
          fill
          sizes="100vw"
          className="scale-110 object-cover blur-2xl saturate-[0.3] brightness-75"
          style={{ objectPosition: "center 45%" }}
        />
        <div className="absolute inset-0 bg-olive-ink/85" />
      </div>

      {/* Media stage.
          Phones: the clip is portrait and so is the viewport, so object-cover
          barely crops and 720px of source covers a ~390px slot — it downscales,
          which is sharp.
          Wide screens: the box is a fixed share of the section's own width
          (not the clip's own aspect ratio), anchored to the end edge and
          running the full height, so it reaches from the right edge in toward
          roughly where the text column ends. object-cover still preserves the
          footage's real proportions inside that box — cropping more of the
          frame vertically buys width without stretching a single pixel. */}
      <div className="absolute inset-0 flex items-center justify-center md:start-auto md:w-[60%] lg:w-[56%]">
        <div className="relative h-full w-full md:shadow-depth">
          <Image
            src={heroClip.poster}
            alt={heroClip.alt}
            fill
            priority
            sizes="(min-width: 768px) 60vh, 100vw"
            className="object-cover"
            style={{ objectPosition: "center 45%" }}
          />

          {!shouldReduceMotion && (
            <video
              ref={videoRef}
              src={heroClip.src}
              poster={heroClip.poster}
              muted
              loop
              playsInline
              autoPlay
              preload="auto"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: "center 45%" }}
            />
          )}
        </div>
      </div>

      {/* Scrims — inline styles because this project's nested colour tokens
          don't generate Tailwind's from-/via-/to- utilities.

          Phones: the type sits directly on the clip, so it needs a heavy
          bottom-up scrim. Wide screens: the type has its own darkened column
          beside the clip, so the same strength here would only dull the
          picture — it gets a light wash instead. */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(40,43,32,0.92) 0%, rgba(40,43,32,0.55) 42%, rgba(40,43,32,0.28) 100%)",
        }}
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(40,43,32,0.45) 0%, rgba(40,43,32,0.10) 45%, rgba(40,43,32,0) 100%)",
        }}
      />

      {/* Side scrim, scoped to the text column's own width (not the whole
          section) so its fade-to-transparent edge lines up with where the
          now-wider video box begins, rather than darkening the video itself.
          The footage contains SAVVA's own illuminated sign, so without this
          the cream wordmark would land on top of a giant lit "SAVVA" and the
          two collide. Mirrored for RTL so it always sits under the text. */}
      <div
        className="pointer-events-none absolute inset-y-0 start-0 hidden md:block md:w-[42%] lg:w-[46%]"
        style={{
          backgroundImage: `linear-gradient(to ${dir === "rtl" ? "left" : "right"}, rgba(40,43,32,0.92) 0%, rgba(40,43,32,0.72) 55%, rgba(40,43,32,0) 100%)`,
        }}
      />

      {/* Separate short scrim under the header band: the nav sits over the
          brightest part of the frame and needs its own contrast without
          darkening the whole video. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-36 sm:h-40"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(40,43,32,0.62) 0%, rgba(40,43,32,0.28) 55%, rgba(40,43,32,0) 100%)",
        }}
      />

      {/* Anchored under the text column (start side), not the end side — the
          video now occupies the end side and this would otherwise sit on top
          of the footage. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 start-0 hidden w-[16%] md:block lg:w-[12%]"
      >
        <BotanicalBranch tone="on-dark" className="aspect-[220/420] w-full opacity-20" />
      </div>

      <motion.div
        style={{ opacity: contentOpacity }}
        // Phones: type sits at the bottom of the clip. Wide screens: it has its
        // own column beside the clip, so it centres against the video instead
        // of leaving a tall empty gap above it.
        className="relative z-10 mx-auto flex w-full max-w-content flex-1 flex-col justify-end px-5 pb-14 pt-28 sm:px-8 sm:pb-16 md:justify-center md:py-28 lg:px-12"
      >
        <div className="hero-stagger max-w-3xl">
          <div>
            <Logo
              variant="wordmark"
              tone="cream"
              className="h-24 sm:h-32 md:h-40 lg:h-44"
            />
          </div>

          <p className="mt-6 text-xs uppercase tracking-widest2 text-on-dark-soft sm:text-sm">
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
