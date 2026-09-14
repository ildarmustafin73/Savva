"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { links } from "@/data/content";
import { Logo } from "./ui/Logo";
import { LanguageSwitch } from "./ui/LanguageSwitch";
import { useLocale } from "./i18n/LocaleProvider";

/**
 * Nav holds three destinations and nothing else. "Directions" deliberately
 * does not live here — it is the hero's secondary action and appears again in
 * Visit and the footer, so repeating it in the header just made four routes to
 * the same map. Instagram stays as an icon, because it leaves the site.
 */
type HeaderProps = {
  /** Whether the hero behind the header is dark (photo/olive) or light (cream).
   *  A cream hero needs dark chrome from the very top, or the logo and links
   *  would be cream-on-cream until the first scroll. */
  heroTone?: "dark" | "light";
};

export function Header({ heroTone = "dark" }: HeaderProps) {
  const { t } = useLocale();
  const navLinks = [
    { href: "#start", label: t.nav.menu },
    { href: "#inside", label: t.nav.inside },
    { href: "#visit", label: t.nav.visit },
  ];
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // "Light chrome" (dark text/logo on the cream page background) once
  // scrolled past the hero, whenever the mobile menu panel is open, or
  // immediately when the hero itself is a light surface.
  const light = scrolled || menuOpen || heroTone === "light";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  const linkColor = light ? "text-text-primary" : "text-on-dark";
  const rule = light ? "bg-olive" : "bg-on-dark";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-soft ${
        light
          // /90, not /92: this project's colour tokens only emit CSS for
          // Tailwind's own opacity steps, and an off-scale value silently
          // compiles to a fully transparent background.
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between gap-6 px-5 py-3.5 sm:px-8 lg:px-12">
        <Link href="#top" aria-label="SAVVA — back to top" className="shrink-0">
          <Logo variant="wordmark" tone={light ? "olive" : "cream"} className="h-11 sm:h-12" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex lg:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative py-2 text-[0.9375rem] font-medium tracking-wide transition-opacity duration-200 ${linkColor} [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:opacity-80`}
            >
              {link.label}
              {/* Hairline wipes in from the leading edge — matches the clip-path
                  reveals used across the page rather than a generic fade. */}
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 transition-transform duration-300 ease-soft group-hover:scale-x-100 ${rule}`}
              />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <LanguageSwitch tone={light ? "light" : "dark"} />
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.nav.instagram} — @savva_cafe`}
            title={t.nav.instagram}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-200 ${
              light
                ? "border-border text-text-primary [@media(hover:hover)]:hover:bg-surface-alt"
                : "border-on-dark/35 text-on-dark [@media(hover:hover)]:hover:bg-on-dark/10"
            }`}
          >
            <InstagramGlyph />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={menuOpen}
          className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`h-px w-6 transition-transform duration-300 ease-soft ${
              light ? "bg-text-primary" : "bg-on-dark"
            } ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 transition-transform duration-300 ease-soft ${
              light ? "bg-text-primary" : "bg-on-dark"
            } ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="border-t border-border bg-background px-5 pb-8 pt-3 md:hidden"
        >
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-border py-4 font-display text-2xl text-text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-7 flex items-center justify-between gap-4">
            <LanguageSwitch tone="light" />
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm text-text-primary"
            >
              <InstagramGlyph />
              @savva_cafe
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}

function InstagramGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px]" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}
