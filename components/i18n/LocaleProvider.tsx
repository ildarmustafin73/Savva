"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { dictionaries, defaultLocale, locales, type Locale, type Dictionary } from "@/data/i18n";

const STORAGE_KEY = "savva-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function isLocale(value: string | null): value is Locale {
  return !!value && (locales as string[]).includes(value);
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  // Matches the inline script in app/layout.tsx (reads the same storage key
  // synchronously before paint) so this initial state doesn't cause a
  // second, visible flip right after hydration.
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return defaultLocale;
    return isLocale(window.localStorage.getItem(STORAGE_KEY)) ? (window.localStorage.getItem(STORAGE_KEY) as Locale) : defaultLocale;
  });

  useEffect(() => {
    const dict = dictionaries[locale];
    document.documentElement.lang = dict.meta.htmlLang;
    document.documentElement.dir = dict.meta.dir;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage can throw in private-browsing contexts — locale still
      // works for this session, it just won't persist.
    }
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
