"use client";

import { useState } from "react";
import { HeroA } from "./HeroA";
import { HeroB } from "./HeroB";
import { HeroC } from "./HeroC";

const variants = [
  { id: "a", label: "A — Editorial Botanical", Component: HeroA },
  { id: "b", label: "B — Cinematic SAVVA", Component: HeroB },
  { id: "c", label: "C — Interactive Arabic Modernism", Component: HeroC },
] as const;

// A-only photo test: three real, already-sourced SAVVA photos dropped into
// the identical Concept A composition — only src + crop change. A2/A3
// reuse Mood-section photos for this comparison only (explicitly approved
// as a temporary test); nothing here is wired into the live site.
const photoOptions = [
  {
    id: "a1",
    label: "A1 — hero-pour.jpg",
    photoSrc: "/images/savva/hero-pour.jpg",
    photoAlt: "SAVVA — pouring a cold drink into a branded cup",
    photoObjectPosition: "center 28%",
  },
  {
    id: "a2",
    label: "A2 — mood-cafe-table.jpg",
    photoSrc: "/images/savva/mood-cafe-table.jpg",
    photoAlt: "SAVVA — working over coffee, plant and window light",
    photoObjectPosition: "center 35%",
  },
  {
    id: "a3",
    label: "A3 — mood-window-light.jpg",
    photoSrc: "/images/savva/mood-window-light.jpg",
    photoAlt: "SAVVA — cold drink detail on a wood table",
    photoObjectPosition: "68% 55%",
  },
] as const;

/**
 * Comparison-only switcher for /hero-lab. Not part of the live site — a
 * throwaway tool for picking a direction. Only the active variant is
 * mounted at a time (plain conditional render, no AnimatePresence), so
 * each Hero's own scroll/interval effects don't run in the background.
 */
export function VariantSwitcher() {
  const [active, setActive] = useState<(typeof variants)[number]["id"]>("a");
  const [photo, setPhoto] = useState<(typeof photoOptions)[number]["id"]>("a1");
  const Active = variants.find((v) => v.id === active)!.Component;
  const activePhoto = photoOptions.find((p) => p.id === photo)!;

  return (
    <div>
      <div className="fixed left-1/2 top-4 z-50 flex -translate-x-1/2 flex-col items-center gap-2">
        <div className="flex gap-1 rounded-full bg-olive-ink/90 p-1 text-sm text-on-dark shadow-depth backdrop-blur">
          {variants.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setActive(v.id)}
              className={`rounded-full px-4 py-2 transition-colors ${
                active === v.id ? "bg-on-dark text-olive-ink" : "text-on-dark-soft hover:text-on-dark"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>

        {active === "a" && (
          <div className="flex gap-1 rounded-full bg-olive-ink/90 p-1 text-xs text-on-dark shadow-depth backdrop-blur">
            {photoOptions.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPhoto(p.id)}
                className={`rounded-full px-3 py-1.5 transition-colors ${
                  photo === p.id ? "bg-on-dark text-olive-ink" : "text-on-dark-soft hover:text-on-dark"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {active === "a" ? (
        <HeroA
          photoSrc={activePhoto.photoSrc}
          photoAlt={activePhoto.photoAlt}
          photoObjectPosition={activePhoto.photoObjectPosition}
        />
      ) : (
        <Active />
      )}
    </div>
  );
}
