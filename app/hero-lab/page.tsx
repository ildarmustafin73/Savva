import { VariantSwitcher } from "@/components/hero-variants/VariantSwitcher";

export const metadata = {
  title: "Hero lab — SAVVA (internal)",
  robots: { index: false, follow: false },
};

/**
 * Internal comparison sandbox — not linked from the live site, not part
 * of the shipped experience. Lets three Hero directions be compared live
 * in one browser tab instead of reading a text description. Delete this
 * route (and components/hero-variants/) once a direction is chosen.
 */
export default function HeroLabPage() {
  return <VariantSwitcher />;
}
