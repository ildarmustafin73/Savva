"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { menu } from "@/data/menu";
import { getMenuItemLabel } from "@/data/i18n/menuLabel";
import { BotanicalBranch } from "./ui/BotanicalBranch";
import { CoffeeChalkArt } from "./ui/CoffeeChalkArt";
import { Reveal } from "./ui/Reveal";
import { useLocale } from "./i18n/LocaleProvider";

function getCategoryLabel(category: (typeof menu)[number], locale: "en" | "ar" | "ru") {
  if (locale === "ar") return category.labelAr;
  if (locale === "ru") return category.labelRu;
  return category.label;
}

export function MenuTabs() {
  const { t, locale } = useLocale();
  const [activeId, setActiveId] = useState(menu[0].id);
  const active = menu.find((c) => c.id === activeId) ?? menu[0];

  return (
    <section id="menu" className="relative overflow-hidden bg-olive-ink py-14 sm:py-16 md:py-20">
      <BotanicalBranch
        tone="on-dark"
        className="pointer-events-none absolute -left-8 top-6 hidden h-[88%] w-auto opacity-[0.1] lg:block"
      />
      <CoffeeChalkArt />
      <div className="relative mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        {/* No supporting paragraph here on purpose — the client asked for
            "Hot, cold, desserts and breakfast — the complete list, with
            prices in SAR." gone, and the heading now carries the section
            on its own rather than leaving a gap beside it. */}
        <Reveal>
          {/* This is the section's real heading now — the eyebrow used to be
              a small label sitting above a big "Everything we serve.", but
              that line is gone, so "Full menu" is set with real weight
              instead of 14px tracked-out grey. */}
          <p className="mb-3 flex items-center gap-3 text-lg font-semibold tracking-tight text-on-dark sm:text-xl">
            <span aria-hidden="true" className="h-px w-8 bg-on-dark/40" />
            {t.menuSection.eyebrow}
          </p>
          {/* Category list standing in for a display heading, in the same
              pale olive-green used elsewhere in the palette (accent-soft). */}
          <h2 className="text-balance max-w-2xl whitespace-pre-line font-display text-4xl font-medium leading-[1.05] tracking-tightest text-accent-soft sm:text-5xl">
            {t.menuSection.categories}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            role="tablist"
            aria-label="Menu categories"
            className="sticky top-16 z-10 mt-10 flex gap-2 overflow-x-auto bg-olive-ink py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {menu.map((category) => {
              const isActive = category.id === activeId;
              return (
                <button
                  key={category.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(category.id)}
                  className={`shrink-0 rounded-full border px-5 py-2 text-sm transition-[background-color,border-color,color,transform] duration-150 ease-out active:scale-[0.96] ${
                    isActive
                      ? "border-on-dark bg-on-dark text-olive-ink"
                      : "border-on-dark/25 text-on-dark-soft [@media(hover:hover)]:hover:border-on-dark/60 [@media(hover:hover)]:hover:text-on-dark"
                  }`}
                >
                  {getCategoryLabel(category, locale)}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-8 flex items-baseline gap-3">
          <h3 className="font-display text-2xl text-on-dark">{getCategoryLabel(active, locale)}</h3>
          {locale !== "ar" && (
            <span dir="rtl" className="font-arabic text-lg text-on-dark-soft">
              {active.labelAr}
            </span>
          )}
        </div>

        <div className="mt-6 min-h-[280px]">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-x-10 gap-y-1 sm:grid-cols-2"
          >
            {active.items.map((item) => {
              const { primary, secondary, secondaryDir } = getMenuItemLabel(item, locale);
              return (
                <div key={item.name} className="flex items-center gap-3 border-b border-on-dark/10 py-3">
                  {/* No thumbnails here on purpose: a real photo could only be
                      confirmed for 6 of the 40 rows on this menu, and a menu
                      that is part photographed, part not reads as unfinished
                      rather than as a deliberate choice — a clean, consistent
                      text list beats a partially-illustrated one. The photos
                      that WERE confirmed still appear at full size elsewhere
                      (Start here, the drinks video rail, Food). */}

                  {/* min-w-0 (not shrink-0) below sm: on very narrow phones the
                      longest names ("Coffee of the Day (Hot / Ice)") combined
                      with a price range and, on the few rows with one, a
                      thumbnail, don't fit on a single nowrap line — so this
                      block is allowed to shrink and the name wraps to a second
                      line there. From sm: up there's room, so nowrap returns. */}
                  <div className="flex min-w-0 flex-col sm:shrink-0">
                    <h4 className="text-balance font-display text-base text-on-dark sm:whitespace-nowrap sm:text-lg">
                      {primary}
                    </h4>
                    <p
                      dir={secondaryDir}
                      className={`text-xs text-on-dark-soft/80 sm:whitespace-nowrap sm:text-sm ${secondaryDir === "rtl" ? "font-arabic" : ""}`}
                    >
                      {secondary}
                    </p>
                  </div>

                  {/* Ledger leader — the classic fine-menu device between name and price. */}
                  <span
                    aria-hidden="true"
                    className="h-0 min-w-[10px] flex-1 border-b border-dotted border-on-dark/25"
                  />

                  <div className="shrink-0 text-right">
                    <span className="tabular-nums block font-display text-base text-on-dark sm:text-lg">
                      {item.price} <span className="text-sm text-on-dark-soft">SAR</span>
                    </span>
                    {item.calories !== undefined && (
                      <span className="tabular-nums block text-xs text-on-dark-soft">{item.calories} cal</span>
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
