"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { links } from "@/data/content";
import { Logo } from "./ui/Logo";

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#experience", label: "Experience" },
  { href: "#visit", label: "Visit" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // "Light chrome" (dark text/logo on the cream page background) once
  // scrolled past the hero, or whenever the mobile menu panel is open.
  const light = scrolled || menuOpen;

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

  const linkColor = light
    ? "text-text-primary/80 [@media(hover:hover)]:hover:text-text-primary"
    : "text-on-dark/85 [@media(hover:hover)]:hover:text-on-dark";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-soft ${
        light ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-3 sm:px-8 lg:px-12">
        <Link href="#top" aria-label="SAVVA — back to top">
          <Logo variant="wordmark" tone={light ? "olive" : "cream"} className="h-10" />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={`text-sm transition-colors ${linkColor}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <a
            href={links.directions}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm transition-colors ${linkColor}`}
          >
            Directions
          </a>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm transition-colors ${linkColor}`}
          >
            Instagram
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 transition-transform duration-300 ease-soft ${
              light ? "bg-text-primary" : "bg-on-dark"
            } ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 transition-transform duration-300 ease-soft ${
              light ? "bg-text-primary" : "bg-on-dark"
            } ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="border-t border-border bg-background px-5 pb-8 pt-4 md:hidden"
        >
          <nav className="flex flex-col gap-1">
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
          <div className="mt-6 flex gap-8">
            <a
              href={links.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary"
            >
              Directions
            </a>
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary"
            >
              Instagram
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
