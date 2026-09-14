"use client";

import { motion } from "framer-motion";
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
  /** Mask-wipe direction shared by the whole card (image + text) — see ImageSlot's doc comment. */
  revealDirection?: "up" | "left";
  className?: string;
};

/**
 * The card — image, name, Arabic name, price — reveals as a single unit
 * through one clip-path mask, not the image and text separately. No
 * competing fade/blur/rise on the text: it's just inside the same box the
 * mask opens. Parent drives "hidden"/"show" via variants (see
 * SignatureDrinks's useAnimation-based replay).
 *
 * Hover: a small forward lift (scale + stacking), gated to devices with a
 * real pointer — never emulated on touch. Transform-only, so it never
 * shifts sibling layout.
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
  revealDirection,
  className = "",
}: ImageCardProps) {
  const clip =
    revealDirection === "left"
      ? { hidden: "inset(0 100% 0 0)", show: "inset(0 0 0 0)" }
      : { hidden: "inset(0 0 100% 0)", show: "inset(0 0 0% 0)" };

  return (
    <motion.div
      className={`relative transition-transform duration-200 [@media(hover:hover)]:hover:scale-[1.03] [@media(hover:hover)]:hover:z-10 ${className}`}
      variants={{
        hidden: { clipPath: clip.hidden },
        show: { clipPath: clip.show, transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1] } },
      }}
    >
      <ImageSlot
        alt={label}
        aspect={aspect}
        variant={variant}
        src={src}
        objectPosition={objectPosition}
        disableReveal
      />
      <div className="mt-4">
        <h3 className="font-display text-xl text-text-primary">{label}</h3>
        {labelSecondary && (
          <p
            dir={labelSecondaryDir}
            className={`mt-0.5 text-sm text-text-secondary ${labelSecondaryDir === "rtl" ? "font-arabic" : ""}`}
          >
            {labelSecondary}
          </p>
        )}
        {meta && <p className="tabular-nums mt-1 text-sm text-text-secondary">{meta}</p>}
      </div>
    </motion.div>
  );
}
