import { redirect } from "next/navigation";

/**
 * Superseded by /lab, which compares full-page variants (hero, food, inside,
 * experience) instead of hero-only mock-ups. Kept as a redirect so any existing
 * link still lands somewhere useful.
 *
 * The old hero-only sandbox components are still on disk under
 * components/hero-variants/ but are no longer referenced or type-checked
 * (see tsconfig "exclude") and can be deleted whenever you want.
 */
export default function HeroLabPage() {
  redirect("/lab");
}
