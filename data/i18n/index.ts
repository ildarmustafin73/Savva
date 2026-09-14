import { en } from "./en";
import { ar } from "./ar";
import { ru } from "./ru";
import type { Dictionary } from "./types";

export type Locale = "en" | "ar" | "ru";
export const locales: Locale[] = ["en", "ar", "ru"];
export const defaultLocale: Locale = "en";

export const dictionaries: Record<Locale, Dictionary> = { en, ar, ru };

export type { Dictionary };
