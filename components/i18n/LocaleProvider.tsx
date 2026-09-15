"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
  type ReactNode,
} from "react";
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

/**
 * Layout effects run after hydration but *before* the browser paints, so the
 * stored locale is already applied on the first frame anyone sees. React warns
 * if useLayoutEffect is called while server-rendering, hence the swap.
 */
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function LocaleProvider({ children }: { children: ReactNode }) {
  // The first client render has to produce exactly what the server sent, so it
  // must start from the default locale. Reading localStorage here instead would
  // make every translated string a hydration mismatch ("Server: Menu, Client:
  // Меню") — the stored locale is applied immediately below.
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useIsomorphicLayoutEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(STORAGE_KEY);
    } catch {
      // Blocked storage (private browsing) — stay on the default locale.
      return;
    }
    if (isLocale(stored)) setLocaleState((current) => (current === stored ? current : stored));
  }, []);

  useEffect(() => {
    const dict = dictionaries[locale];
    const root = document.documentElement;
    root.lang = dict.meta.htmlLang;
    root.dir = dict.meta.dir;
    // Keep the pre-hydration hook in sync, so the CSS fallback in globals.css
    // agrees with the attributes after a runtime language switch.
    root.setAttribute("data-locale", locale);
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
