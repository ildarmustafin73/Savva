"use client";

import { ImageSlot } from "./ImageSlot";

type ImageCardProps = {
  label: string;
  /** Smaller secondary line under the name — usually the Arabic name, but
   *  swaps to the English name when the primary label is already Arabic. */
  labelSecondary?: string;
  labelSecondaryDir?: "rtl" | "ltr";
  meta?: string;
  aspect?: string;
  variant?: "arch" | "grain" | "beam" | "grid" | "ring";
  src?: string;
  objectPosition?: string;
  /** Responsive widths for next/image — cards are never full-bleed, so the
   *  100vw default would make the browser fetch a needlessly large file. */
  sizes?: string;
  /** Mask-wipe direction shared by the whole card (image + text). */
  revealDirection?: "up" | "left";
  /** Owned by the parent so a row of cards can reveal in sequence. Leave
   *  undefined for a card that should simply always be visible. */
  revealed?: boolean;
  revealDelay?: number;
  className?: string;
};

/**
 * The card — image, name, Arabic name, price — reveals as a single unit through
 * one clip-path mask, not the image and text separately. No competing
 * fade/blur/rise on the text: it is just inside the same box the mask opens.
 *
 * The mask is a plain CSS transition driven by a boolean from the parent. That
 * matters: a requestAnimationFrame-based animation does not advance while the
 * document is hidden, so a card whose only route to being visible is an
 * animation frame can sit as an empty rectangle. Here the clipped state is the
 * exception and `inset(0)` is one style change away.
 *
 * Hover: a small forward lift, gated to devices with a real pointer — never
 * emulated on touch. Transform-only, so it never shifts sibling layout.
 */
export function ImageCard({
  label,
  labelSecondary,
  labelSecondaryDir = "rtl",
  meta,
  aspect = "aspect-[3/4]",
  variant = "grain",
  src,
  objectPosition,
  sizes = "(min-width: 768px) 25vw, 68vw",
  revealDirection,
  revealed,
  revealDelay = 0,
  className = "",
}: ImageCardProps) {
  const hidden = revealDirection === "left" ? "inset(0 100% 0 0)" : "inset(0 0 100% 0)";
  const isRevealed = revealed !== false;

  return (
    <div
      className={`relative transition-transform duration-200 [@media(hover:hover)]:hover:z-10 [@media(hover:hover)]:hover:scale-[1.03] ${className}`}
      style={{
        clipPath: isRevealed ? "inset(0 0 0 0)" : hidden,
        transition: `clip-path 0.9s cubic-bezier(0.65, 0, 0.35, 1) ${revealDelay}s, transform 0.2s ease-out`,
      }}
    >
      <ImageSlot
        alt={label}
        aspect={aspect}
        variant={variant}
        src={src}
        objectPosition={objectPosition}
        sizes={sizes}
        disableReveal
      />
      <div className="mt-4">
        <h3 className="font-display text-xl text-text-primary">{label}</h3>
        {labelSecondary && (
          // `dir` sits on the inner span, not the paragraph. Putting it on the
          // block would flip that block's alignment too, so the Arabic name
          // would jump to the opposite edge from the name directly above it.
          // On the span it only does what it is needed for: correct bidi
          // ordering of the text itself.
          <p
            className={`mt-0.5 text-sm text-text-secondary ${
              labelSecondaryDir === "rtl" ? "font-arabic" : ""
            }`}
          >
            <span dir={labelSecondaryDir}>{labelSecondary}</span>
          </p>
        )}
        {meta && <p className="tabular-nums mt-1 text-sm text-text-secondary">{meta}</p>}
      </div>
    </div>
  );
}
