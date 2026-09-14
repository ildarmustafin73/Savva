"use client";

import { useEffect, useState, type RefObject } from "react";

/** True when the element is inside the viewport, with the same 10% inset the observer uses. */
function isOnScreen(el: Element) {
  const r = el.getBoundingClientRect();
  const inset = window.innerHeight * 0.1;
  return r.top < window.innerHeight - inset && r.bottom > inset;
}

/**
 * Scroll reveal that can never strand content.
 *
 * The entrance animations are the site's signature, but an entrance that can
 * only ever be triggered by an IntersectionObserver callback has one bad
 * failure mode: IntersectionObserver is delivered as part of the rendering
 * lifecycle, so in a throttled or backgrounded tab the callback may simply
 * never arrive — and the element stays at its hidden state. The visitor then
 * sees an empty slot or missing text, which is indistinguishable from a broken
 * page.
 *
 * So there are two independent paths to revealed:
 *   1. the observer (the normal, efficient one), and
 *   2. a plain geometry check, run once after mount and again on scroll.
 *
 * Scroll events are dispatched independently of the rendering lifecycle, so
 * path 2 still fires when path 1 is starved. Both listeners detach the moment
 * the element is revealed, so nothing accumulates.
 */
export function useScrollReveal(ref: RefObject<HTMLElement>, disabled = false) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (disabled || revealed) return;
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setRevealed(true);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal();
      },
      { threshold: 0, rootMargin: "-10% 0px" }
    );
    observer.observe(el);

    const check = () => {
      if (isOnScreen(el)) reveal();
    };
    const safety = window.setTimeout(check, 1200);
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check, { passive: true });

    return () => {
      observer.disconnect();
      window.clearTimeout(safety);
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [ref, disabled, revealed]);

  return revealed;
}
