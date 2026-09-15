"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScrollReveal } from "./useScrollReveal";

type Variant = "arch" | "grain" | "beam" | "grid" | "ring";

type ImageSlotProps = {
  /** Real image path, e.g. "/images/hero.jpg". Leave undefined to render the placeholder. */
  src?: string;
  alt: string;
  aspect?: string; // Tailwind aspect-ratio class, e.g. "aspect-[4/5]"
  variant?: Variant;
  priority?: boolean;
  sizes?: string;
  /** CSS object-position, e.g. "center 30%" — which part of the source to keep in frame when cropped. */
  objectPosition?: string;
  /** Stagger delay for the reveal, when several slots enter together (e.g. a grid). */
  delay?: number;
  /** Mask-wipe direction for the entrance reveal. "up" (default, used everywhere
   *  else on the site) wipes bottom-to-top. "left" wipes right-to-left, revealing
   *  left-to-right — for sequences where card order reads left→right (e.g. a
   *  showcase row), so the wipe direction matches the reading/stagger direction. */
  revealDirection?: "up" | "left";
  /** Skip this component's own reveal entirely — for when a parent (e.g. a
   *  card wrapping image + text) owns a single reveal for the whole unit and
   *  this image must not also animate on its own. Renders a plain div. */
  disableReveal?: boolean;
  /** A gentle zoom on the photo itself when its own frame is hovered — for
   *  slots that otherwise have no hover feedback (Inside, Food). Off by
   *  default where a parent already owns a whole-card hover treatment (e.g.
   *  ImageCard's lift + scale), so the two don't compound into a double
   *  zoom. */
  hoverZoom?: boolean;
  className?: string;
};

/**
 * Single swap-point for every image on the site.
 *
 * Today: a deliberately abstract, geometric placeholder (arches, bands,
 * grid lines, rings) — never a figurative depiction of a cup, pastry, or
 * interior. Nothing here claims to show a real SAVVA object; it's a
 * neutral, finished-looking design that a real photo drops into later.
 *
 * Later: pass `src` (a real SAVVA photo in /public/images) and it renders
 * through next/image automatically — no other code changes needed.
 *
 * TODO: replace with official SAVVA photography — see /public/images/README.md
 */
export function ImageSlot({
  src,
  alt,
  aspect = "aspect-[4/5]",
  variant = "arch",
  priority = false,
  sizes = "100vw",
  objectPosition = "center",
  delay = 0,
  revealDirection = "up",
  disableReveal = false,
  hoverZoom = false,
  className = "",
}: ImageSlotProps) {
  const frame =
    "group relative overflow-hidden outline outline-1 -outline-offset-1 outline-black/10 shadow-depth";
  const ref = useRef<HTMLDivElement>(null);
  const revealed = useScrollReveal(ref, disableReveal);

  const hidden = revealDirection === "left" ? "inset(0 100% 0 0)" : "inset(0 0 100% 0)";
  const shown = "inset(0 0 0 0)";
  const style: React.CSSProperties = disableReveal
    ? {}
    : {
        clipPath: revealed ? shown : hidden,
        transition: `clip-path 0.9s cubic-bezier(0.65, 0, 0.35, 1) ${delay}s`,
      };

  return (
    <div
      ref={ref}
      className={`${frame} ${aspect} ${className}`}
      style={style}
      {...(src ? {} : { role: "img", "aria-label": alt })}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover transition-transform duration-700 ease-soft motion-reduce:transition-none ${
            hoverZoom ? "[@media(hover:hover)]:group-hover:scale-[1.04]" : ""
          }`}
          style={{ objectPosition }}
        />
      ) : (
        <PlaceholderArt variant={variant} />
      )}
    </div>
  );
}


function PlaceholderArt({ variant }: { variant: Variant }) {
  const shapes: Record<Variant, JSX.Element> = {
    arch: (
      <svg viewBox="0 0 400 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="500" fill="url(#g1)" />
        <path
          d="M110 500 V250 Q110 120 200 120 Q290 120 290 250 V500"
          fill="none"
          stroke="rgb(var(--color-olive))"
          strokeOpacity="0.4"
          strokeWidth="2"
        />
        <circle cx="200" cy="195" r="50" fill="rgb(var(--color-olive))" opacity="0.24" />
      </svg>
    ),
    grain: (
      <svg viewBox="0 0 400 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="500" fill="url(#g2)" />
        <ellipse cx="140" cy="170" rx="130" ry="95" fill="rgb(var(--color-wood))" opacity="0.22" />
        <ellipse cx="290" cy="370" rx="160" ry="115" fill="rgb(var(--color-olive))" opacity="0.26" />
      </svg>
    ),
    beam: (
      <svg viewBox="0 0 400 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="500" fill="url(#g3)" />
        <polygon points="50,0 220,0 110,500 -60,500" fill="rgb(var(--color-olive))" opacity="0.16" />
        <polygon points="260,0 350,0 250,500 160,500" fill="rgb(var(--color-wood))" opacity="0.16" />
      </svg>
    ),
    grid: (
      <svg viewBox="0 0 400 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="500" fill="url(#g1)" />
        {Array.from({ length: 5 }).map((_, i) => (
          <line
            key={i}
            x1={i * 100}
            y1="0"
            x2={i * 100}
            y2="500"
            stroke="rgb(var(--color-olive))"
            strokeOpacity="0.2"
          />
        ))}
      </svg>
    ),
    ring: (
      <svg viewBox="0 0 400 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <rect width="400" height="500" fill="url(#g2)" />
        <circle cx="220" cy="260" r="150" fill="none" stroke="rgb(var(--color-olive))" strokeOpacity="0.3" strokeWidth="2" />
        <circle cx="220" cy="260" r="95" fill="none" stroke="rgb(var(--color-wood))" strokeOpacity="0.3" strokeWidth="2" />
      </svg>
    ),
  };

  return (
    <>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgb(var(--color-surface-alt))" />
            <stop offset="100%" stopColor="rgb(var(--color-accent-soft))" />
          </linearGradient>
          <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(var(--color-surface))" />
            <stop offset="100%" stopColor="rgb(var(--color-accent-soft))" />
          </linearGradient>
          <linearGradient id="g3" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="rgb(var(--color-accent-soft))" />
            <stop offset="100%" stopColor="rgb(var(--color-surface))" />
          </linearGradient>
        </defs>
      </svg>
      {shapes[variant]}
    </>
  );
}
