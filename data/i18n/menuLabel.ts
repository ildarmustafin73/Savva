import type { MenuItem } from "@/data/menu";
import type { Locale } from "./index";

/**
 * Bilingual display pair for a menu item name, by locale:
 * - en/ru: primary = translated name, secondary = Arabic (the menu's own
 *   authentic bilingual character).
 * - ar: primary = Arabic, secondary = English (Arabic doesn't need a second
 *   Arabic line).
 */
export function getMenuItemLabel(item: Pick<MenuItem, "name" | "nameAr" | "nameRu">, locale: Locale) {
  if (locale === "ar") {
    return { primary: item.nameAr, secondary: item.name, secondaryDir: "ltr" as const };
  }
  const primary = locale === "ru" ? item.nameRu : item.name;
  return { primary, secondary: item.nameAr, secondaryDir: "rtl" as const };
}
