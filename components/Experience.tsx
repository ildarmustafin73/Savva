"use client";

import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { useLocale } from "./i18n/LocaleProvider";

export function Experience() {
  const { t } = useLocale();
  return (
    <section id="experience" className="bg-olive-ink py-14 sm:py-20 md:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeader eyebrow={t.experience.eyebrow} heading={t.experience.heading} tone="light" />
        </Reveal>

        <div className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-8">
          {t.experience.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <span className="tabular-nums font-display text-sm text-on-dark/45">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-3xl font-medium text-on-dark">{item.title}</h3>
              <p className="text-pretty mt-3 max-w-xs text-on-dark-soft">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
