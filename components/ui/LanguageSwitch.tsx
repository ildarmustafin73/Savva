"use client";

import { useLocale } from "../i18n/LocaleProvider";
import type { Locale } from "@/data/i18n";

const options: { code: Locale; label: string }[] = [
  { code: "ar", label: "عربي" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

type LanguageSwitchProps = {
  /** "light" = dark text/border on a light surface (Header once scrolled, Footer's light moments, mobile panel).
   *  "dark" = cream text/border on a dark/olive surface (Header over the Hero photo). */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Compact three-way language pill — عربي / EN / RU. Same segmented-control
 * language as the Menu category tabs (rounded-full, active = filled),
 * not a borrowed pattern from any reference site.
 */
export function LanguageSwitch({ tone = "light", className = "" }: LanguageSwitchProps) {
  const { locale, setLocale } = useLocale();

  const shell =
    tone === "dark"
      ? "border-on-dark/25 bg-transparent"
      : "border-text-primary/15 bg-background/60";
  const inactive =
    tone === "dark"
      ? "text-on-dark-soft [@media(hover:hover)]:hover:text-on-dark"
      : "text-text-secondary [@media(hover:hover)]:hover:text-text-primary";
  const active = tone === "dark" ? "bg-on-dark text-olive-ink" : "bg-olive-ink text-on-dark";

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex shrink-0 items-center gap-0.5 rounded-full border p-0.5 ${shell} ${className}`}
    >
      {options.map((opt) => {
        const isActive = opt.code === locale;
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLocale(opt.code)}
            aria-pressed={isActive}
            aria-label={`Switch to ${opt.label}`}
            className={`rounded-full px-2.5 py-1 text-xs font-medium transition-[background-color,color] duration-150 ease-out active:scale-[0.96] ${
              isActive ? active : inactive
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
