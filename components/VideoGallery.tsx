"use client";

import { useRef } from "react";
import { Reveal } from "./ui/Reveal";
import { SectionHeader } from "./ui/SectionHeader";
import { VideoCard } from "./ui/VideoCard";
import { VideoLightbox, type VideoLightboxHandle } from "./ui/VideoLightbox";
import { useLocale } from "./i18n/LocaleProvider";

// Both real, sourced from the official Instagram account, chosen over a
// third rejected candidate that showed a visible third-party logo. Two
// strong clips beat three uneven ones for a contest site.
const videos = [
  {
    src: "/videos/savva/pour-cups.mp4",
    poster: "/images/savva/video-poster-pour-cups.jpg",
    label: "Pouring — SAVVA",
  },
  {
    src: "/videos/savva/barista-cup.mp4",
    poster: "/images/savva/video-poster-barista-cup.jpg",
    label: "Behind the bar — SAVVA",
  },
];

export function VideoGallery() {
  const { t } = useLocale();
  const lightboxRef = useRef<VideoLightboxHandle>(null);

  return (
    <section className="mx-auto max-w-content px-5 py-14 sm:px-8 sm:py-20 md:py-24 lg:px-12">
      <Reveal>
        <SectionHeader eyebrow={t.video.eyebrow} heading={t.video.heading} />
      </Reveal>
      <Reveal delay={0.08}>
        <p className="text-pretty mt-4 max-w-md text-lg text-text-secondary">{t.video.body}</p>
      </Reveal>

      <div className="mt-10 grid max-w-md grid-cols-2 gap-5 sm:max-w-lg">
        {videos.map((v, i) => (
          <Reveal key={v.src} delay={0.1 + i * 0.08}>
            <VideoCard
              src={v.src}
              poster={v.poster}
              label={v.label}
              onOpen={() => lightboxRef.current?.open(v.src, v.poster, v.label)}
            />
          </Reveal>
        ))}
      </div>

      <VideoLightbox ref={lightboxRef} closeLabel={t.video.close} />
    </section>
  );
}
