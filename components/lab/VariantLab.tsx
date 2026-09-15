"use client";

import { useEffect, useState } from "react";
import {
  SitePage,
  defaultVariants,
  type SiteVariants,
  type HeroVariant,
  type FoodVariant,
  type InsideVariant,
} from "../SitePage";

const STORAGE_KEY = "savva-lab-variants";

type Group<K extends keyof SiteVariants> = {
  key: K;
  title: string;
  options: { value: SiteVariants[K]; tag: string; name: string }[];
};

const groups: [Group<"hero">, Group<"food">, Group<"inside">] = [
  {
    key: "hero",
    title: "Hero",
    options: [
      { value: "interior" as HeroVariant, tag: "A", name: "Зал" },
      { value: "facade" as HeroVariant, tag: "B", name: "Фасад" },
      { value: "window" as HeroVariant, tag: "C", name: "Видео" },
    ],
  },
  {
    key: "food",
    title: "Еда",
    options: [
      { value: "editorial" as FoodVariant, tag: "A", name: "Разворот" },
      { value: "counter" as FoodVariant, tag: "B", name: "Со списком" },
    ],
  },
  {
    key: "inside",
    title: "Внутри",
    options: [
      { value: "mosaic" as InsideVariant, tag: "A", name: "Мозаика" },
      { value: "rail" as InsideVariant, tag: "B", name: "Лента" },
    ],
  },
];

/**
 * Side-by-side comparison harness for the four open design decisions.
 *
 * It renders the real <SitePage/>, not a mock — switching a variant swaps the
 * actual production component, so what is being judged is the finished page.
 * The chosen combination is kept in localStorage so a reload doesn't reset it.
 *
 * This route exists only to choose between directions; the live page at / is
 * unaffected by anything set here.
 */
export function VariantLab() {
  const [variants, setVariants] = useState<SiteVariants>(defaultVariants);
  const [open, setOpen] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setVariants({ ...defaultVariants, ...JSON.parse(raw) });
    } catch {
      /* private mode / blocked storage — defaults are fine */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(variants));
    } catch {
      /* ignore */
    }
  }, [variants, ready]);

  const set = <K extends keyof SiteVariants>(key: K, value: SiteVariants[K]) =>
    setVariants((v) => ({ ...v, [key]: value }));

  return (
    <>
      <SitePage variants={variants} />

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] flex justify-center p-3 sm:p-4">
        <div className="pointer-events-auto max-w-[calc(100vw-1.5rem)] rounded-2xl border border-on-dark/15 bg-olive-ink/95 text-on-dark shadow-depth backdrop-blur-md">
          <div className="flex items-center gap-3 px-4 py-2.5">
            <span className="text-xs font-medium uppercase tracking-widest2 text-on-dark-soft">
              Варианты
            </span>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="ms-auto rounded-full border border-on-dark/25 px-3 py-1 text-xs text-on-dark transition-colors [@media(hover:hover)]:hover:bg-on-dark/10"
            >
              {open ? "Свернуть" : "Развернуть"}
            </button>
          </div>

          {open && (
            <div className="flex max-h-[45svh] flex-wrap gap-x-6 gap-y-4 overflow-y-auto border-t border-on-dark/15 px-4 pb-4 pt-3.5">
              {groups.map((group) => (
                <div key={group.key}>
                  <p className="mb-1.5 text-[0.6875rem] uppercase tracking-widest2 text-on-dark-soft">
                    {group.title}
                  </p>
                  <div className="flex gap-1.5">
                    {group.options.map((opt) => {
                      const active = variants[group.key] === opt.value;
                      return (
                        <button
                          key={String(opt.value)}
                          type="button"
                          onClick={() =>
                            set(group.key, opt.value as SiteVariants[typeof group.key])
                          }
                          className={`rounded-full border px-3 py-1.5 text-xs transition-colors duration-150 active:scale-[0.96] ${
                            active
                              ? "border-on-dark bg-on-dark text-olive-ink"
                              : "border-on-dark/25 text-on-dark-soft [@media(hover:hover)]:hover:border-on-dark/60 [@media(hover:hover)]:hover:text-on-dark"
                          }`}
                        >
                          <span className="font-medium">{opt.tag}</span>
                          <span className="ms-1.5 opacity-80">{opt.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={() => setVariants(defaultVariants)}
                className="self-end rounded-full border border-on-dark/25 px-3 py-1.5 text-xs text-on-dark-soft transition-colors [@media(hover:hover)]:hover:text-on-dark"
              >
                Сбросить
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
