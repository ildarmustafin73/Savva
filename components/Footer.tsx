"use client";

import { links, visit } from "@/data/content";
import { Logo } from "./ui/Logo";
import { LanguageSwitch } from "./ui/LanguageSwitch";
import { useLocale } from "./i18n/LocaleProvider";

export function Footer() {
  const { t } = useLocale();
  return (
    <footer className="bg-olive-ink">
      <div className="mx-auto flex max-w-content flex-col gap-8 px-5 py-14 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <Logo variant="lockup" tone="cream" className="h-24" />

          <div className="flex flex-col items-start gap-4 sm:items-end">
            <div className="flex items-center gap-6 text-sm text-on-dark/80">
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-on-dark transition-colors [@media(hover:hover)]:hover:text-olive"
              >
                {t.footer.instagram} — @savva_cafe
              </a>
              <a
                href={links.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors [@media(hover:hover)]:hover:text-on-dark"
              >
                {t.footer.directions}
              </a>
            </div>
            <LanguageSwitch tone="dark" />
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-on-dark/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-on-dark-soft">{t.footer.tagline}</p>
          <p className="text-xs text-on-dark-soft">
            <span aria-hidden="true" className="text-olive">★</span>{" "}
            <span className="tabular-nums">{visit.rating.toFixed(1)}</span> · {visit.reviewCount}{" "}
            {t.visit.ratingOnGoogle} · © {new Date().getFullYear()} SAVVA
          </p>
        </div>
      </div>
    </footer>
  );
}
