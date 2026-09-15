"use client";

import { useRef } from "react";
import { menu } from "@/data/menu";
import {
  photos,
  dessertMadiniClip,
  dessertPecanClip,
  dessertChocBerryClip,
  dessertWinterPuddingClip,
} from "@/data/media";
import { getMenuItemLabel } from "@/data/i18n/menuLabel";
import { ImageSlot } from "./ui/ImageSlot";
import { Reveal } from "./ui/Reveal";
import { VideoCard } from "./ui/VideoCard";
import { VideoLightbox, type VideoLightboxHandle } from "./ui/VideoLightbox";
import { useLocale } from "./i18n/LocaleProvider";

const allItems = menu.flatMap((c) => c.items);

/**
 * "Наши десерты" — a standalone section, not a card bolted onto Food.
 *
 * Deliberately not a clone of the drinks video rail below the menu: that one
 * is a horizontal scroll-snap strip of equal 9:16 tiles. This is a fixed
 * editorial grid at varied sizes and aspect ratios, mixing photos and videos
 * throughout rather than grouping all of one kind, so the two video-bearing
 * sections of the page still feel like different rooms rather than the same
 * layout twice. The hover/tap-to-play mechanic itself is shared with
 * VideoCard on purpose (poster → muted hover preview on desktop, tap-to-open
 * on mobile, full playback with sound only once opened) because that
 * mechanic already works well and re-testing a second implementation would
 * add risk for no benefit.
 *
 * Six real desserts, five photos and four videos — Madini Cookies (kept from
 * the previous pass) plus five more found via nine specific Instagram post
 * URLs the client sent directly. Fetching a post by its own URL isn't
 * subject to the profile grid's "~12 most recent posts" ceiling, so this
 * reaches real material the earlier grid-only search couldn't. Two names are
 * confirmed by the posts' own captions and priced straight from the menu
 * (Madini Cookies, Pecan Cake); the rest are real SAVVA desserts with no
 * confirmed dish name, so they carry an honest short description instead of
 * a guess.
 */
export function DessertShowcase() {
  const { t, locale } = useLocale();
  const lightboxRef = useRef<VideoLightboxHandle>(null);

  const cookies = allItems.find((i) => i.name === "Madini Cookies");
  const cookiesLabel = cookies ? getMenuItemLabel(cookies, locale) : null;
  const pecan = allItems.find((i) => i.name === "Pecan Cake");
  const pecanLabel = pecan ? getMenuItemLabel(pecan, locale) : null;
  const cinnamonDanish = allItems.find((i) => i.name === "Cinnamon Danish");
  const cinnamonDanishLabel = cinnamonDanish ? getMenuItemLabel(cinnamonDanish, locale) : null;

  return (
    <section id="desserts" className="scroll-mt-24 bg-surface py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8 lg:px-12">
        <Reveal>
          <h2 className="text-balance whitespace-pre-line font-display text-5xl font-medium leading-[1.02] tracking-tightest text-text-primary sm:text-6xl md:text-7xl">
            {t.desserts.heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-12 md:gap-6">
          {/* Mango cheesecake — hard daylight, dramatic shadow. The
              section's opening frame. No dish name confirmed. */}
          <figure className="md:col-span-7">
            <ImageSlot
              src={photos.dessertMangoCheesecake.src}
              alt={photos.dessertMangoCheesecake.alt}
              aspect="aspect-[4/3]"
              objectPosition={photos.dessertMangoCheesecake.objectPosition}
              sizes="(min-width: 768px) 58vw, 100vw"
              hoverZoom
            />
            <figcaption className="mt-4">
              <h3 className="font-display text-2xl text-text-primary sm:text-3xl">{t.desserts.mango}</h3>
              <p className="text-pretty mt-1.5 max-w-md text-base leading-relaxed text-text-secondary sm:text-lg">
                {t.desserts.mangoBody}
              </p>
            </figcaption>
          </figure>

          {/* Pecan Cake, filmed close — verified by the reel's own caption. */}
          <div className="md:col-span-5 md:mt-10">
            <VideoCard
              src={dessertPecanClip.src}
              poster={dessertPecanClip.poster}
              label={t.desserts.pecanVideoLabel}
              onOpen={() =>
                lightboxRef.current?.open(
                  dessertPecanClip.src,
                  dessertPecanClip.poster,
                  t.desserts.pecanVideoLabel
                )
              }
            />
          </div>

          {/* Pecan Cake — verified item, official price, a different real
              photo (a plated slice, different shoot) from the video above. */}
          <figure className="md:col-span-4">
            <ImageSlot
              src={photos.dessertPecan.src}
              alt={photos.dessertPecan.alt}
              aspect="aspect-[4/5]"
              objectPosition={photos.dessertPecan.objectPosition}
              sizes="(min-width: 768px) 32vw, 100vw"
              delay={0.05}
              hoverZoom
            />
            <figcaption className="mt-4 flex items-baseline justify-between gap-3">
              <h3 className="font-display text-xl text-text-primary sm:text-2xl">{pecanLabel?.primary}</h3>
              {pecan && (
                <p className="tabular-nums shrink-0 text-sm text-text-secondary sm:text-base">
                  {pecan.price} SAR
                </p>
              )}
            </figcaption>
          </figure>

          {/* Cinnamon Danish — verified item, official price, a macro shot
              of the glaze. */}
          <figure className="md:col-span-4 md:mt-8">
            <ImageSlot
              src={photos.dessertCinnamonDanish.src}
              alt={photos.dessertCinnamonDanish.alt}
              aspect="aspect-[4/5]"
              objectPosition={photos.dessertCinnamonDanish.objectPosition}
              sizes="(min-width: 768px) 32vw, 100vw"
              delay={0.1}
              hoverZoom
            />
            <figcaption className="mt-4 flex items-baseline justify-between gap-3">
              <h3 className="font-display text-xl text-text-primary sm:text-2xl">
                {cinnamonDanishLabel?.primary}
              </h3>
              {cinnamonDanish && (
                <p className="tabular-nums shrink-0 text-sm text-text-secondary sm:text-base">
                  {cinnamonDanish.price} SAR
                </p>
              )}
            </figcaption>
          </figure>

          {/* A second real dessert video — dark chocolate cake, no dish name
              confirmed. */}
          <div className="md:col-span-4 md:mt-3">
            <VideoCard
              src={dessertChocBerryClip.src}
              poster={dessertChocBerryClip.poster}
              label={t.desserts.chocBerryVideoLabel}
              onOpen={() =>
                lightboxRef.current?.open(
                  dessertChocBerryClip.src,
                  dessertChocBerryClip.poster,
                  t.desserts.chocBerryVideoLabel
                )
              }
            />
          </div>

          {/* Same chocolate-and-blueberry cake as the video above, from the
              terrace-table photo in the same post family. */}
          <figure className="md:col-span-5">
            <ImageSlot
              src={photos.dessertChocBerry.src}
              alt={photos.dessertChocBerry.alt}
              aspect="aspect-[4/5]"
              objectPosition={photos.dessertChocBerry.objectPosition}
              sizes="(min-width: 768px) 40vw, 100vw"
              hoverZoom
            />
            <figcaption className="mt-4">
              <h3 className="font-display text-2xl text-text-primary sm:text-3xl">
                {t.desserts.chocBerry}
              </h3>
              <p className="text-pretty mt-1.5 max-w-sm text-base leading-relaxed text-text-secondary sm:text-lg">
                {t.desserts.chocBerryBody}
              </p>
            </figcaption>
          </figure>

          {/* Madini Cookies being made — the client's favourite from the
              previous pass, kept exactly as it was. */}
          <div className="md:col-span-7 md:mt-10">
            <VideoCard
              src={dessertMadiniClip.src}
              poster={dessertMadiniClip.poster}
              label={t.desserts.madiniVideoLabel}
              onOpen={() =>
                lightboxRef.current?.open(
                  dessertMadiniClip.src,
                  dessertMadiniClip.poster,
                  t.desserts.madiniVideoLabel
                )
              }
            />
          </div>

          {/* Madini Cookies — verified item, official price, a different
              real photo (hand-held stack) from the video's own poster. */}
          <figure className="md:col-span-6">
            <ImageSlot
              src={photos.cookiesStack.src}
              alt={photos.cookiesStack.alt}
              aspect="aspect-[4/5]"
              objectPosition={photos.cookiesStack.objectPosition}
              sizes="(min-width: 768px) 48vw, 100vw"
              delay={0.1}
              hoverZoom
            />
            <figcaption className="mt-4 flex items-baseline justify-between gap-4">
              <h3 className="font-display text-2xl text-text-primary sm:text-3xl">
                {cookiesLabel?.primary}
              </h3>
              {cookies && (
                <p className="tabular-nums shrink-0 text-base text-text-secondary sm:text-lg">
                  {cookies.price} SAR
                </p>
              )}
            </figcaption>
          </figure>

          {/* A warm baked pudding with caramel and almonds — oven, plating
              and someone actually enjoying it, all in one clip. No dish name
              confirmed and no separate photo exists, so it stands alone
              rather than being paired with a guessed still. */}
          <div className="md:col-span-6 md:mt-8">
            <VideoCard
              src={dessertWinterPuddingClip.src}
              poster={dessertWinterPuddingClip.poster}
              label={t.desserts.winterPudding}
              onOpen={() =>
                lightboxRef.current?.open(
                  dessertWinterPuddingClip.src,
                  dessertWinterPuddingClip.poster,
                  t.desserts.winterPudding
                )
              }
            />
            <p className="text-pretty mt-4 max-w-sm text-base leading-relaxed text-text-secondary sm:text-lg">
              {t.desserts.winterPuddingBody}
            </p>
          </div>
        </div>
      </div>

      <VideoLightbox ref={lightboxRef} closeLabel={t.video.close} />
    </section>
  );
}
