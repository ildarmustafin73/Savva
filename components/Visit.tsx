"use client";

import { links, visit } from "@/data/content";
import { BotanicalBranch } from "./ui/BotanicalBranch";
import { ClipReveal } from "./ui/ClipReveal";
import { CTAButton } from "./ui/CTAButton";
import { Reveal } from "./ui/Reveal";
import { useLocale } from "./i18n/LocaleProvider";

/**
 * Branded location experience — not a plain embedded map. The map itself
 * (a no-API-key Google Maps query embed, so no external credential is
 * needed) sits inside the same outline+shadow "frame" language every real
 * photo on the site uses, with a floating SAVVA card and a soft olive
 * pulse-ring accent instead of Google's default pin — a quiet nod to the
 * botanical language, not a literal marker overlay (the iframe's own pin
 * position isn't something CSS can read, so this sits beside it rather
 * than pretending to replace it).
 */
export function Visit() {
  const { t } = useLocale();

  return (
    <section id="visit" className="mx-auto max-w-content px-5 py-14 sm:px-8 sm:py-16 md:py-20 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          {/* A single, bigger wayfinding heading — the section used to carry
              a small uppercase label here and a separate, more poetic
              headline below ("Find your table at SAVVA."); the client asked
              for that second line gone, so the practical label is promoted
              to do the section's one job at real display size instead of
              leaving a gap where the old headline stood. */}
          <h2 className="text-balance whitespace-pre-line font-display text-4xl font-medium leading-[1.05] tracking-tight text-text-primary sm:text-5xl md:text-6xl">
            {t.visit.heading}
          </h2>
          <p className="text-pretty mt-4 max-w-md text-xl leading-relaxed text-text-secondary">
            {t.visit.body}
          </p>

          {/* Rating — read directly from SAVVA's own Google Maps listing, not
              carried over from any third party. The star and number are the
              two things a visitor actually scans for, so they now stand at
              the same weight as the section's own headline numbers rather
              than reading like a small footnote link. */}
          <a
            href={links.reviews}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 text-text-primary transition-colors [@media(hover:hover)]:hover:text-olive"
          >
            <span className="flex items-baseline gap-2">
              <span aria-hidden="true" className="text-3xl text-olive sm:text-4xl">★</span>
              <span className="tabular-nums font-display text-3xl font-medium sm:text-4xl">
                {visit.rating.toFixed(1)}
              </span>
            </span>
            <span className="text-lg text-text-secondary sm:text-xl">
              {visit.reviewCount} {t.visit.ratingOnGoogle} · {t.visit.readReviews}
            </span>
          </a>

          <dl className="mt-9 space-y-7 text-xl">
            <div>
              <dt className="text-sm uppercase tracking-widest2 text-text-secondary">{t.visit.addressLabel}</dt>
              <dd className="mt-1.5 text-text-primary">{visit.address}</dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-widest2 text-text-secondary">{t.visit.phoneLabel}</dt>
              <dd className="mt-1.5 text-text-primary">
                <a
                  href={`tel:${visit.phone.replace(/\s+/g, "")}`}
                  className="tabular-nums transition-colors [@media(hover:hover)]:hover:text-olive"
                >
                  {visit.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-widest2 text-text-secondary">{t.visit.hoursLabel}</dt>
              <dd className="mt-1.5 whitespace-pre-line text-text-primary">{t.visit.hoursValue}</dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-4">
            <CTAButton href={links.directions} external>
              {t.visit.getDirections}
            </CTAButton>
            <CTAButton href={links.whatsapp} variant="ghost" external>
              {t.visit.whatsapp}
            </CTAButton>
            <CTAButton href={links.instagram} variant="ghost" external>
              {t.visit.instagram}
            </CTAButton>
          </div>
        </Reveal>

        <ClipReveal delay={0.1} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden outline outline-1 -outline-offset-1 outline-black/10 shadow-depth transition-transform duration-300 [@media(hover:hover)]:hover:scale-[1.015]">
            <iframe
              title="SAVVA — map"
              src={links.mapEmbed}
              loading="lazy"
              className="h-full w-full grayscale-[15%] sepia-[8%]"
              style={{ border: 0 }}
            />
            {/* Soft olive pulse — a botanical-language stand-in for a pin,
                not positioned over the map's own marker (not readable from
                CSS), placed as a quiet ambient accent instead. */}
            <span className="pointer-events-none absolute right-6 top-6 hidden h-3 w-3 sm:block">
              <span className="absolute inset-0 animate-ping rounded-full bg-olive/60" />
              <span className="absolute inset-0 rounded-full bg-olive" />
            </span>
          </div>

          {/* Floating branded card — same information as the pin would give, in our own visual language. */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 bg-background/95 px-4 py-3 shadow-depth backdrop-blur sm:left-6 sm:right-auto sm:max-w-[70%]">
            <div className="min-w-0">
              <p className="truncate font-display text-sm font-medium text-text-primary">SAVVA</p>
              <p className="truncate text-xs text-text-secondary">{visit.address}</p>
            </div>
            <BotanicalBranch tone="olive" className="h-8 w-8 shrink-0 opacity-60" />
          </div>
        </ClipReveal>
      </div>
    </section>
  );
}
