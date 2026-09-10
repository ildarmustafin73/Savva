"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * The global CSS prefers-reduced-motion rule (globals.css) only reaches
 * real CSS transitions/animations — it has no effect on Framer Motion's
 * JS-driven animate/whileInView props. This wrapper makes every Motion
 * component in the tree respect the OS-level reduced-motion setting.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
