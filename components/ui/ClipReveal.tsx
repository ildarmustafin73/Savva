"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ClipRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/**
 * Signature reveal for images/illustrations: a bottom-to-top clip-path
 * wipe, distinct from the fade+rise used for text (Reveal.tsx). Content
 * of a different kind should not move identically — this is the one
 * deliberate exception to the site's default reveal.
 */
export function ClipReveal({ children, delay = 0, className }: ClipRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.65, 0, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}
