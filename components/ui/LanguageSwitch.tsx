"use client";

import { useLocale } from "../i18n/LocaleProvider";
import type { Locale } from "@/data/i18n";

const options: { code: Locale; label: string; aria: string }[] = [
  { code: "ar", label: "عربي", aria: "العربية" },
  { code: "en", label: "EN", aria: "English" },
  { code: "ru", label: "RU", aria: "Русский" },
];

type LanguageSwitchProps = {
  /** "light" = dark text/border on a light surface (Header once scrolled, Footer's light moments, mobile panel).
   *  "dark" = cream text/border on a dark/olive surface (Header over the Hero photo). */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Three-way language pill — عربي / EN / RU, the same segmented-control
 * language as the Menu category tabs.
 *
 * The globe glyph is there to answer "what is this?" before the visitor has
 * read the labels: on a site whose header already carries an Arabic wordmark,
 * three short strings alone don't read as a language control at a glance.
 */
export function LanguageSwitch({ tone = "light", className = "" }: LanguageSwitchProps) {
  const { locale, setLocale } = useLocale();

  const shell =
    tone === "dark"
      ? "border-on-dark/35 bg-olive-ink/25 backdrop-blur-sm"
      : "border-border bg-surface-alt/70";
  const glyph = tone === "dark" ? "text-on-dark-soft" : "text-text-secondary";
  const inactive =
    tone === "dark"
      ? "text-on-dark-soft [@media(hover:hover)]:hover:text-on-dark"
      : "text-text-secondary [@media(hover:hover)]:hover:text-text-primary";
  const active = tone === "dark" ? "bg-on-dark text-olive-ink" : "bg-olive-ink text-on-dark";

  return (
    <div
      role="group"
      aria-label="Language / اللغة / Язык"
      className={`inline-flex shrink-0 items-center gap-1 rounded-full border py-1 pe-1 ps-2.5 ${shell} ${className}`}
    >
      <GlobeGlyph className={glyph} />
      {options.map((opt) => {
        const isActive = opt.code === locale;
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLocale(opt.code)}
            aria-pressed={isActive}
            lang={opt.code}
            className={`rounded-full px-2.5 py-1.5 text-[0.8125rem] font-medium leading-none transition-[background-color,color] duration-150 ease-out active:scale-[0.96] ${
              isActive ? active : inactive
            }`}
          >
            <span className="sr-only">{opt.aria}</span>
            <span aria-hidden="true">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function GlobeGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`h-4 w-4 shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="8.5" />
      <ellipse cx="12" cy="12" rx="3.6" ry="8.5" />
      <path d="M3.9 9.2h16.2M3.9 14.8h16.2" strokeLinecap="round" />
    </svg>
  );
}
