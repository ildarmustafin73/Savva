import { menu, savvaSelectionIds } from "@/data/menu";
import { ImageCard } from "./ui/ImageCard";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";

const variants = ["arch", "ring", "grain", "beam", "grid"] as const;
const offsets = ["md:mt-0", "md:mt-6", "md:mt-1", "md:mt-8", "md:mt-3"];

// Real SAVVA photography exists for exactly one of these five official
// drinks so far (a hand-held cold drink, official Instagram, full-res
// original — see public/images/savva/README.md). The colour is a
// plausible, illustrative match for a melon drink, but the photo's caption
// never named the item, so this pairing is representative, not a verified
// depiction of this exact menu item — the other four stay abstract rather
// than guess.
const photoByName: Record<string, { src: string; objectPosition?: string }> = {
  "SAVVA Melon": { src: "/images/savva/drink-hand-cold.jpg" },
};

// Items that carry the SAVVA name in the official menu — shown neutrally as
// a selection, not labelled "bestseller" / "most popular" (unverified).
const items = savvaSelectionIds
  .map((name) => menu.flatMap((c) => c.items).find((item) => item.name === name))
  .filter((item): item is NonNullable<typeof item> => Boolean(item));

export function SignatureDrinks() {
  return (
    <section className="mx-auto max-w-content px-5 py-14 sm:px-8 sm:py-20 md:py-24 lg:px-12">
      <Reveal>
        <SectionHeader eyebrow="SAVVA Selection" heading={"Carries the\nSAVVA name."} size="large" />
      </Reveal>

      {/* Mobile: horizontal scroll-snap. Desktop: editorial offset grid. */}
      <div className="mt-12 flex gap-5 overflow-x-auto pb-4 -mx-5 px-5 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-5 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
        {items.map((item, i) => {
          const photo = photoByName[item.name];
          return (
            <Reveal
              key={item.name}
              delay={i * 0.06}
              className={`w-[68vw] shrink-0 snap-start md:w-auto ${offsets[i % offsets.length]}`}
            >
              <ImageCard
                label={item.name}
                labelAr={item.nameAr}
                meta={`${item.price} SAR`}
                variant={variants[i % variants.length]}
                aspect="aspect-[3/4]"
                src={photo?.src}
                objectPosition={photo?.objectPosition}
              />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
