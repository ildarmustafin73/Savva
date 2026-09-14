"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { motion, useAnimation } from "framer-motion";
import { menu, savvaSelectionIds } from "@/data/menu";
import { ImageCard } from "./ui/ImageCard";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

const variants = ["ring", "grain", "beam", "grid"] as const;
const offsets = ["md:mt-6", "md:mt-1", "md:mt-8", "md:mt-3"];

// Real SAVVA photography exists for exactly one of these official drinks so
// far (a hand-held cold drink, official Instagram, full-res original — see
// public/images/savva/README.md). The colour is a plausible, illustrative
// match for a melon drink, but the photo's caption never named the item, so
// this pairing is representative, not a verified depiction of this exact
// menu item — the others stay abstract rather than guess.
const photoByName: Record<string, { src: string; objectPosition?: string }> = {
  "SAVVA Melon": { src: "/images/savva/drink-hand-cold.jpg" },
};

// The showcase row shows exactly 5 cards: 1 atmosphere slot (below) + 4 of
// the 5 SAVVA-named drinks. All 5 stay listed in data/menu.ts and the full
// menu — "Hibiscus Slush SAVVA" is just not repeated here, to avoid two
// near-identical hibiscus drinks sitting back-to-back with "Ice Hibiscus
// SAVVA".
const displayedDrinkNames = savvaSelectionIds.filter((name) => name !== "Hibiscus Slush SAVVA");

const drinkItems = displayedDrinkNames
  .map((name) => menu.flatMap((c) => c.items).find((item) => item.name === name))
  .filter((item): item is NonNullable<typeof item> => Boolean(item));

/** Mobile gets a snappier reveal so the sequence doesn't make people wait. */
function useCardStagger() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isDesktop ? 0.08 : 0.05;
}

/**
 * Replays the 1→2→3→4→5 reveal every time the section is genuinely re-
 * entered — not on every small scroll wobble inside it.
 *
 * State machine (no key/remount — DOM and scroll position are never
 * touched):
 *   armed  -- (enters trigger zone) -->  shown   [controls.start("show")]
 *   shown  -- (fully exits, offscreen) --> armed  [controls.set("hidden")]
 *
 * The reset to "hidden" happens only once the section has completely left
 * the trigger zone (isIntersecting === false) — i.e. off-screen, invisible
 * to the user — never right before a re-entry. So a re-entry only ever
 * calls .start("show"), which is what rules out the flash the user flagged.
 */
function useReplayOnFullExit(
  ref: RefObject<HTMLElement>,
  controls: ReturnType<typeof useAnimation>,
  step: number
) {
  const stateRef = useRef<"armed" | "shown">("armed");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (stateRef.current === "armed") {
            stateRef.current = "shown";
            controls.start("show");
          }
        } else if (stateRef.current === "shown") {
          controls.set("hidden");
          stateRef.current = "armed";
        }
      },
      { threshold: 0, rootMargin: "-10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, controls, step]);
}

export function SignatureDrinks() {
  const sectionRef = useRef<HTMLElement>(null);
  const controls = useAnimation();
  const step = useCardStagger();
  useReplayOnFullExit(sectionRef, controls, step);

  // Recreated each render so "show"'s stagger always reflects the current
  // mobile/desktop step — controls.start("show") reads whatever variants
  // are currently attached, so this stays in sync without passing a
  // transitionOverride (not supported for orchestration keys in this
  // framer-motion version's types).
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: step, delayChildren: 0 } },
  };

  return (
    <section ref={sectionRef} className="mx-auto max-w-content px-5 py-14 sm:px-8 sm:py-20 md:py-24 lg:px-12">
      <Reveal>
        <SectionHeader eyebrow="SAVVA Selection" heading={"Carries the\nSAVVA name."} size="large" />
      </Reveal>

      {/* Mobile: horizontal scroll-snap. Desktop: editorial offset grid.
          py-2: a small vertical cushion. Below md, overflow-x-auto forces
          overflow-y to also clip (CSS spec — can't be "fixed" by declaring
          overflow-y separately); this absorbs the hover scale's overhang on
          a hover-capable device sitting at a mobile width (e.g. a resized
          desktop window), without changing the visual spacing of the row. */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={controls}
        className="mt-12 flex gap-5 overflow-x-auto py-2 pb-4 -mx-5 px-5 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-5 md:gap-6 md:overflow-visible md:px-0 md:pb-0"
      >
        {/* Slot 1 — reserved for a real SAVVA atmosphere shot (interior /
            counter / seating / a wide view of the space). No matching
            official photo exists yet in the accessible Instagram feed —
            checked directly, nothing suitable found — so this stays an
            honest placeholder rather than a drink or invented imagery.
            TODO: replace with official SAVVA interior/counter/seating photography. */}
        <div className="w-[68vw] shrink-0 snap-start md:w-auto">
          <ImageCard label="The space" variant="arch" aspect="aspect-[3/4]" revealDirection="left" />
        </div>

        {drinkItems.map((item, i) => {
          const photo = photoByName[item.name];
          return (
            <div
              key={item.name}
              className={`w-[68vw] shrink-0 snap-start md:w-auto ${offsets[i % offsets.length]}`}
            >
              <ImageCard
                label={item.name}
                labelAr={item.nameAr}
                meta={`${item.price} SAR`}
                variant={variants[i % variants.length]}
                aspect="aspect-[3/4]"
                src={photo?.src}
                objectPosition={photo?.objectPosition}
                revealDirection="left"
              />
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
