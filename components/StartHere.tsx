"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { menu } from "@/data/menu";
import { getMenuItemLabel } from "@/data/i18n/menuLabel";
import { startHere } from "@/data/media";
import { ImageCard } from "./ui/ImageCard";
import { Reveal } from "./ui/Reveal";
import { useLocale } from "./i18n/LocaleProvider";

const offsets = ["md:mt-0", "md:mt-10", "md:mt-2", "md:mt-12"];

const allItems = menu.flatMap((c) => c.items);

/**
 * Every card here is a menu item SAVVA named themselves (see data/media.ts for
 * the caption each one is verified against) paired with its own photograph.
 * There is deliberately no abstract "atmosphere" placeholder in this row any
 * more — the space now has a section of its own, with real interior photos.
 */
const cards = startHere
  .map((entry) => {
    const item = allItems.find((i) => i.name === entry.menuName);
    return item
      ? { item, photo: entry.photo, cardName: "cardName" in entry ? entry.cardName : undefined }
      : null;
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
      className="mx-auto max-w-content scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 md:py-24 lg:px-12"
    >
      <Reveal>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest2 text-text-secondary">
              {t.selection.eyebrow}
            </p>
            <h2 className="text-balance whitespace-pre-line font-display text-4xl font-medium leading-[1.05] tracking-tightest text-text-primary sm:text-5xl">
              {t.selection.heading}
            </h2>
          </div>
          <p className="text-pretty max-w-sm text-[0.9375rem] leading-relaxed text-text-secondary md:pb-2">
            {t.selection.body}
          </p>
        </div>
      </Reveal>

      {/* Mobile: horizontal scroll-snap. Desktop: editorial offset grid.
          py-2 + overflow-x-auto below md absorbs the hover lift's overhang on a
          hover-capable device sitting at a narrow width. */}
      <div className="-mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 py-2 pb-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-4 md:gap-7 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
        {cards.map(({ item, photo, cardName }, i) => {
          const label = getMenuItemLabel(item, locale);
          const primary = cardName ? cardName[locale] : label.primary;
          const { secondary, secondaryDir } = label;
          return (
            <div
              key={item.name}
              className={`w-[68vw] shrink-0 snap-start sm:w-[46vw] md:w-auto ${offsets[i % offsets.length]}`}
            >
              <ImageCard
                label={primary}
                labelSecondary={secondary}
                labelSecondaryDir={secondaryDir}
                meta={`${item.price} SAR`}
                aspect="aspect-[3/4]"
                src={photo.src}
                objectPosition={photo.objectPosition}
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
