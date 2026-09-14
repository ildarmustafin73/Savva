"use client";

import { Reveal } from "./ui/Reveal";
import { useLocale } from "./i18n/LocaleProvider";

export function Intro() {
  const { t } = useLocale();
  return (
    <section className="mx-auto max-w-content px-5 py-14 sm:px-8 sm:py-20 md:py-24 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <Reveal>
          <h2 className="text-balance whitespace-pre-line font-display text-5xl font-medium leading-[1.02] tracking-tight text-text-primary sm:text-6xl md:text-7xl">
            {t.intro.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-pretty max-w-md text-lg leading-relaxed text-text-secondary lg:mt-4">
            {t.intro.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
