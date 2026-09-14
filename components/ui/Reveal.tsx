"use client";

import { useRef, type ReactNode } from "react";
import { useScrollReveal } from "./useScrollReveal";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/**
 * Shared scroll-reveal wrapper for text: fade + rise + a soft blur-out, once.
 *
 * Driven by a plain CSS transition rather than a motion library, because the
 * resting state here has to be the *visible* one — see useScrollReveal. Text
 * that never un-hides is a broken page, not a missed flourish.
 *
 * prefers-reduced-motion is handled globally in globals.css, which collapses
 * every transition duration to ~0; the element still ends up visible.
 * Images/illustrations use ImageSlot's clip-path wipe instead — different
 * content shouldn't move identically.
 */
export function Reveal({ children, delay = 0, y = 20, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const revealed = useScrollReveal(ref);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "none" : `translateY(${y}px)`,
        filter: revealed ? "blur(0px)" : "blur(4px)",
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s, filter 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
