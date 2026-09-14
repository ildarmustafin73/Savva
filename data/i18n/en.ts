import type { Dictionary } from "./types";

/**
 * Copy rule for this file: every heading has to answer "why would a first-time
 * visitor read this line?". Nothing here describes the design to the designer
 * ("the space, in quiet detail"), and nothing claims a fact we could not check
 * against SAVVA's own menu, Instagram captions or Google listing.
 *
 * The hero line is SAVVA's own Instagram bio, kept verbatim.
 */
export const en: Dictionary = {
  meta: { htmlLang: "en", dir: "ltr" },
  nav: {
    menu: "Menu",
    inside: "Inside SAVVA",
    visit: "Visit",
    directions: "Directions",
    instagram: "Instagram",
    openMenu: "Open navigation",
    closeMenu: "Close navigation",
  },
  hero: {
    locationTag: "Madinah · Specialty coffee",
    tagline: "A day in SAVVA\nis all you need.",
    exploreMenu: "See the menu",
    getDirections: "Get directions",
    scrollHint: "Scroll",
  },
  selection: {
    eyebrow: "Start here",
    heading: "Four things\nto order first.",
    body: "New to SAVVA? These four are the easiest way in — a signature cold drink, the coffee of the day, and two things that go with them.",
  },
  menuSection: {
    eyebrow: "Full menu",
    heading: "Everything we serve.",
    body: "Hot, cold, sweet and breakfast — the complete list, with prices in SAR.",
  },
  food: {
    eyebrow: "Breakfast & sweet",
    heading: "Something to eat\nwith it.",
    body: "Sandwiches made to order and a short dessert list — the part of the menu that turns a coffee into a proper stop.",
    combo: "Breakfast, done properly",
    comboBody: "A sandwich and the coffee of the day — the pairing SAVVA puts together for the morning.",
    toCar: "Running late?",
    toCarBody: "Coffee and breakfast brought out to your car, so you don't lose the minutes.",
  },
  mood: {
    eyebrow: "Inside",
    heading: "The room\nyou came for.",
    body: "Arched windows, olive and cream, real plants and a lot of daylight. This is what SAVVA actually looks like.",
    captions: {
      lounge: "The lounge",
      counter: "At the counter",
      facade: "Bir Uthman, after dark",
      tray: "Served on the tray",
      table: "A table for the afternoon",
      cold: "Cold drinks, lined up",
    },
  },
  experience: {
    eyebrow: "What to expect",
    heading: "Three reasons\npeople come back.",
    items: [
      {
        title: "Specialty coffee",
        body: "Espresso, filter and V60 alongside the cold drinks SAVVA makes under its own name.",
      },
      {
        title: "A cold list of its own",
        body: "Ice Hibiscus SAVVA, SAVVA Melon, Matcha Berry — the cold drinks the menu lists under SAVVA's own name.",
      },
      {
        title: "A room to stay in",
        body: "Daylight, greenery and soft seating — built for a long sit, not a quick queue.",
      },
    ],
  },
  video: {
    eyebrow: "In motion",
    heading: "A few seconds\ninside SAVVA.",
    body: "Real clips from SAVVA's own feed. Hover to preview, tap to watch.",
    play: "Play",
    close: "Close",
    labels: {
      pourCups: "Pouring, cup by cup",
      baristaCup: "Behind the bar",
      hibiscusPour: "SAVVA Hibiscus, being made",
      summerFlavours: "Summer flavours",
      icedMood: "Cold drink, made to order",
    },
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
    tagline: "Specialty coffee in Madinah.",
  },
};
