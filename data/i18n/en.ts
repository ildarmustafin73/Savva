import type { Dictionary } from "./types";

// Base copy. "A day in SAVVA is all you need" is adapted from SAVVA's own
// Instagram bio, kept close to the original wording. Everything else here
// is original site copy — no invented history, awards, counts, or reviews.
export const en: Dictionary = {
  meta: { htmlLang: "en", dir: "ltr" },
  nav: {
    menu: "Menu",
    experience: "Experience",
    visit: "Visit",
    directions: "Directions",
    instagram: "Instagram",
  },
  hero: {
    locationTag: "Madinah · Specialty Coffee",
    tagline: "A day in SAVVA\nis all you need.",
    exploreMenu: "Explore menu",
    getDirections: "Get directions",
  },
  intro: {
    eyebrow: "SAVVA",
    heading: "Coffee.\nSpace.\nSlow moments.",
    body: "SAVVA is built around a simple idea — coffee is better when there's room to slow down. Natural materials, quiet light, and careful cups shape a space meant to be lingered in, not rushed through.",
  },
  selection: {
    eyebrow: "SAVVA Selection",
    heading: "Carries the\nSAVVA name.",
    spaceLabel: "The space",
  },
  menuSection: {
    eyebrow: "Menu",
    heading: "What we\npour and serve.",
  },
  pastry: {
    eyebrow: "Food",
    heading: "Simple pastry.\nMade in-house.",
    body: "A small, seasonal selection — built to sit alongside a slow cup of coffee.",
  },
  mood: {
    eyebrow: "Mood",
    heading: "The space,\nin quiet detail.",
  },
  experience: {
    eyebrow: "Experience",
    heading: "Three things\nwe get right.",
    items: [
      { title: "Coffee", body: "Carefully sourced, carefully brewed." },
      { title: "Food", body: "Simple, thoughtful, made in-house." },
      { title: "Space", body: "Natural light, natural materials, room to breathe." },
    ],
  },
  video: {
    eyebrow: "SAVVA in Motion",
    heading: "A closer look,\nin motion.",
    body: "A few real moments from inside SAVVA — hover to preview, tap to watch.",
    play: "Play",
    close: "Close",
  },
  visit: {
    eyebrow: "Visit",
    heading: "Find your table\nat SAVVA.",
    body: "Bir Uthman, Madinah — an easy stop for a slow cup, any time of day.",
    addressLabel: "Address",
    phoneLabel: "Phone",
    hoursLabel: "Hours",
    hoursValue: "Open daily into the early hours — see Google Maps for today's exact hours",
    ratingOnGoogle: "on Google",
    readReviews: "Read reviews",
    getDirections: "Get directions",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
  },
  footer: {
    instagram: "Instagram",
    directions: "Directions",
    tagline: "Specialty coffee, Madinah.",
  },
};
