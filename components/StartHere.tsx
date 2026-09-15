"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { menu } from "@/data/menu";
import { getMenuItemLabel } from "@/data/i18n/menuLabel";
import { startHere } from "@/data/media";
import { ImageCard } from "./ui/ImageCard";
import { Reveal } from "./ui/Reveal";
import { useLocale } from "./i18n/LocaleProvider";

const offsets = ["md:mt-0", "md:mt-6", "md:mt-1", "md:mt-8"];

const allItems = menu.flatMap((c) => c.items);

/**
 * Three of the four cards are a menu item SAVVA named themselves (see
 * data/media.ts for the caption each is verified against) paired with its own
 * photograph and official price. The fourth is a real photo with no confirmed
 * item name — see data/media.ts's `dessertPastry` entry for why — so it
 * carries a plain description instead of a guessed name and price.
 */
const cards = startHere
  .map((entry) => {
    if ("menuName" in entry) {
      const item = allItems.find((i) => i.name === entry.menuName);
      if (!item) return null;
      return {
        photo: entry.photo,
        priced: true as const,
        item,
        cardName: "cardName" in entry ? entry.cardName : undefined,
      };
    }
    // Standalone card: a real photo without a confirmed menu-item tie, so no
    // price or Arabic-name pairing is shown — just the honest label.
    return { photo: entry.photo, priced: false as const, label: entry.label };
  })
  .filter((c): c is NonNullable<typeof c> => Boolean(c));

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
 * Replays the reveal every time the section is genuinely re-entered — not on
 * every small scroll wobble inside it.
 *
 * State machine (no key/remount — DOM and scroll position are never touched):
 *   armed  -- (enters trigger zone) -->  shown
 *   shown  -- (fully exits, offscreen) --> armed
 *
 * The reset to hidden happens only once the section has completely left the
 * trigger zone, i.e. off-screen and invisible — never right before a re-entry,
 * which is what rules out a flash on the way back in.
 *
 * A timer-based fail-safe backs the observer up: the cards are clipped to
 * nothing until this flips, so if the callback never arrives while the section
 * is already on screen, they would otherwise stay four empty rectangles.
 */
function useReplayOnFullExit(ref: RefObject<HTMLElement>) {
  const [shown, setShown] = useState(false);
  const stateRef = useRef<"armed" | "shown">("armed");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => {
      if (stateRef.current === "armed") {
        stateRef.current = "shown";
        setShown(true);
      }
    };

    if (typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
        } else if (stateRef.current === "shown") {
          stateRef.current = "armed";
          setShown(false);
        }
      },
      { threshold: 0, rootMargin: "-10% 0px" }
    );
    observer.observe(el);

    // Scroll events are dispatched independently of the rendering lifecycle,
    // so this still fires in a throttled tab where the observer is starved.
    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) show();
    };
    const safety = window.setTimeout(check, 1200);
    window.addEventListener("scroll", check, { passive: true });

    return () => {
      observer.disconnect();
      window.clearTimeout(safety);
      window.removeEventListener("scroll", check);
    };
  }, [ref]);

  return shown;
}

export function StartHere() {
  const { t, locale } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const shown = useReplayOnFullExit(sectionRef);
  const step = useCardStagger();

  return (
    <section
      id="start"
      ref={sectionRef}
      className="mx-auto max-w-content scroll-mt-24 px-5 py-14 sm:px-8 sm:py-16 md:py-20 lg:px-12"
    >
      {/* No eyebrow label and no supporting paragraph here on purpose — the
          client asked (repeatedly) for the "First time at SAVVA?" body copy
          and the small "Start here" label gone, and for the heading to carry
          the section on its own rather than leaving a gap where they stood. */}
      <Reveal>
        <h2 className="text-balance whitespace-pre-line font-display text-4xl font-medium leading-[1.05] tracking-tightest text-text-primary sm:text-5xl">
          {t.selection.heading}
        </h2>
      </Reveal>

      {/* Mobile: horizontal scroll-snap. Desktop: editorial offset grid.
          py-2 + overflow-x-auto below md absorbs the hover lift's overhang on a
          hover-capable device sitting at a narrow width. */}
      <div className="-mx-5 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 py-2 pb-4 [scrollbar-width:none] md:mx-0 md:mt-10 md:grid md:grid-cols-4 md:gap-7 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
        {cards.map((card, i) => {
          const menuLabel = card.priced ? getMenuItemLabel(card.item, locale) : null;
          const primary = card.priced
            ? card.cardName
              ? card.cardName[locale]
              : menuLabel!.primary
            : card.label[locale];
          const secondary = menuLabel?.secondary;
          const secondaryDir = menuLabel?.secondaryDir;
          const key = card.priced ? card.item.name : card.photo.src;
          return (
            <div
              key={key}
              className={`w-[68vw] shrink-0 snap-start sm:w-[46vw] md:w-auto ${offsets[i % offsets.length]}`}
            >
              <ImageCard
                label={primary}
                labelSecondary={secondary}
                labelSecondaryDir={secondaryDir}
                meta={card.priced ? `${card.item.price} SAR` : undefined}
                aspect="aspect-[3/4]"
                src={card.photo.src}
                objectPosition={card.photo.objectPosition}
                revealDirection="left"
                revealed={shown}
                revealDelay={i * step}
                sizes="(min-width: 768px) 23vw, 68vw"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
