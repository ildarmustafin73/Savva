"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { menu } from "@/data/menu";
import { BotanicalBranch } from "./ui/BotanicalBranch";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

export function MenuTabs() {
  const [activeId, setActiveId] = useState(menu[0].id);
  const active = menu.find((c) => c.id === activeId) ?? menu[0];

  return (
    <section id="menu" className="relative overflow-hidden bg-olive-ink py-14 sm:py-20 md:py-24">
      <BotanicalBranch
        tone="on-dark"
        className="pointer-events-none absolute -left-8 top-6 hidden h-[88%] w-auto opacity-[0.1] lg:block"
      />
      <div className="relative mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeader eyebrow="Menu" heading={"What we\npour and serve."} tone="light" />
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
                  {category.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-8 flex items-baseline gap-3">
          <h3 className="font-display text-2xl text-on-dark">{active.label}</h3>
          <span dir="rtl" className="font-arabic text-lg text-on-dark-soft">
            {active.labelAr}
          </span>
        </div>

        <div className="mt-6 min-h-[280px]">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-x-10 gap-y-1 sm:grid-cols-2"
          >
            {active.items.map((item) => (
              <div key={item.name} className="flex items-baseline gap-2 border-b border-on-dark/10 py-3">
                <div className="flex min-w-0 shrink-0 flex-col">
                  <h4 className="whitespace-nowrap font-display text-base text-on-dark sm:text-lg">
                    {item.name}
                  </h4>
                  <p dir="rtl" className="whitespace-nowrap font-arabic text-xs text-on-dark-soft/80 sm:text-sm">
                    {item.nameAr}
                  </p>
                </div>

                {/* Ledger leader — the classic fine-menu device between name and price. */}
                <span
                  aria-hidden="true"
                  className="mb-1 h-0 min-w-[10px] flex-1 border-b border-dotted border-on-dark/25"
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
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
