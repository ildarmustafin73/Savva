"use client";

import { useRef, useState } from "react";
import Image from "next/image";

type VideoCardProps = {
  src: string;
  poster: string;
  label: string;
  onOpen: () => void;
};

/**
 * Desktop: hover plays a muted, looping preview in-card; leaving pauses and
 * resets to the poster. Gated to `@media(hover:hover)` only — on touch, the
 * <video> element never even mounts, so there's no accidental autoplay or
 * data cost on mobile. Click/tap always opens the full lightbox (VideoLightbox).
 * No sound plays until the user explicitly opens the lightbox.
 */
export function VideoCard({ src, poster, label, onOpen }: VideoCardProps) {
  const [hovering, setHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    setHovering(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleLeave = () => {
    setHovering(false);
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <button
      type="button"
      onClick={onOpen}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      aria-label={`${label} — play`}
      className="group relative aspect-[9/16] w-full overflow-hidden text-left outline outline-1 -outline-offset-1 outline-black/10 shadow-depth transition-transform duration-200 [@media(hover:hover)]:hover:scale-[1.02]"
    >
      {/* Poster always mounted; video only starts loading once hovered on a
          hover-capable device, via `preload="none"` + play() above. */}
      <Image
        src={poster}
        alt={label}
        fill
        sizes="(min-width: 640px) 260px, 45vw"
        className="object-cover"
      />
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
          hovering ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(to top, rgba(40,43,32,0.55) 0%, rgba(40,43,32,0.05) 45%)",
        }}
      />

      {/* Play affordance — fades/scales rather than just toggling visibility. */}
      <span
        className={`absolute inset-0 flex items-center justify-center transition-[opacity,transform,filter] duration-300 ${
          hovering ? "opacity-0 scale-90 blur-[2px]" : "opacity-100 scale-100 blur-0"
        }`}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background/90 shadow-depth">
          <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-olive-ink" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>

      <p className="absolute bottom-4 left-4 right-4 font-display text-sm font-medium text-on-dark">
        {label}
      </p>
    </button>
  );
}
