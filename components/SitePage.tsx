"use client";

import { Header } from "./Header";
import { HeroInterior } from "./hero/HeroInterior";
import { HeroFacade } from "./hero/HeroFacade";
import { HeroWindow } from "./hero/HeroWindow";
import { StartHere } from "./StartHere";
import { MenuTabs } from "./MenuTabs";
import { FoodEditorial } from "./food/FoodEditorial";
import { FoodCounter } from "./food/FoodCounter";
import { InsideMosaic } from "./inside/InsideMosaic";
import { InsideRail } from "./inside/InsideRail";
import { VideoGallery } from "./VideoGallery";
import { ExperienceCards } from "./experience/ExperienceCards";
import { ExperienceBand } from "./experience/ExperienceBand";
import { Visit } from "./Visit";
import { Footer } from "./Footer";

export type HeroVariant = "interior" | "facade" | "window";
export type FoodVariant = "editorial" | "counter";
export type InsideVariant = "mosaic" | "rail";
export type ExperienceVariant = "cards" | "band";

export type SiteVariants = {
  hero: HeroVariant;
  food: FoodVariant;
  inside: InsideVariant;
  experience: ExperienceVariant;
};

export const defaultVariants: SiteVariants = {
  hero: "facade",
  food: "editorial",
  inside: "mosaic",
  experience: "cards",
};

/** Hero A is the only one on a cream ground, so it needs dark header chrome. */
const heroTone = (v: HeroVariant) => (v === "interior" ? "light" : "dark");

/**
 * The whole page in one place, parameterised by which variant each of the four
 * open design decisions uses. The production page renders it with
 * `defaultVariants`; /lab renders the same component and lets the variants be
 * switched, so a variant is never a mock-up — it is the real page.
 *
 * The old standalone "Intro" section is gone on purpose: it was a full viewport
 * spent on three words, between a hero and a section that both already said
 * more.
 */
export function SitePage({ variants }: { variants: SiteVariants }) {
  const Hero =
    variants.hero === "interior" ? HeroInterior : variants.hero === "window" ? HeroWindow : HeroFacade;
  const Food = variants.food === "counter" ? FoodCounter : FoodEditorial;
  const Inside = variants.inside === "rail" ? InsideRail : InsideMosaic;
  const Experience = variants.experience === "band" ? ExperienceBand : ExperienceCards;

  return (
    <>
      <Header heroTone={heroTone(variants.hero)} />
      <main>
        <Hero />
        <StartHere />
        <MenuTabs />
        <Food />
        <Inside />
        <VideoGallery />
        <Experience />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
