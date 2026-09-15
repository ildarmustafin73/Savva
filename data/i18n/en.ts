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
    heading: "Where to start\ngetting to know SAVVA.",
    body: "New to SAVVA? These four are the easiest way in — a signature cold drink, the coffee of the day, and two things that go with them.",
  },
  menuSection: {
    eyebrow: "Full menu",
    categories: "Hot · Cold · Desserts · Breakfast",
    body: "Hot, cold, sweet and breakfast — the complete list, with prices in SAR.",
  },
  food: {
    eyebrow: "Breakfast & sweet",
    heading: "Something to eat\nwith it.",
    body: "Sandwiches made to order and a short dessert list — the part of the menu that turns a coffee into a proper stop.",
    combo: "Breakfast, done properly",
    comboBody: "A sandwich and the coffee of the day — the pairing SAVVA puts together for the morning.",
    sweet: "Something sweet with it",
    sweetBody: "Pecan, glaze and laminated pastry — from the bakery case.",
    toCar: "Running late?",
    toCarBody: "Coffee and breakfast brought out to your car, so you don't lose the minutes.",
    counterVideoLabel: "Breakfast on the terrace",
  },
  desserts: {
    heading: "Our desserts.",
    madiniVideoLabel: "Madini Cookies, being made",
    pecanVideoLabel: "Pecan Cake, up close",
    mango: "A layered mango dessert",
    mangoBody: "A crisp base, cream and fresh mango — the layers the slice shows off.",
    chocBerry: "A chocolate dessert with berry",
    chocBerryBody: "Dark sponge, chocolate cream and a blueberry on top.",
    chocBerryVideoLabel: "Chocolate dessert, up close",
    winterPudding: "A warm dessert with caramel",
    winterPuddingBody: "Warm pastry, caramel and almonds — a winter dessert at SAVVA.",
  },
  mood: {
    heading: "Our interior.",
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
    heading: "Refreshing drinks.",
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
    heading: "Visit us.",
    body: "Bir Uthman, Madinah — an easy stop for a slow cup, any time of day.",
    addressLabel: "Address",
    phoneLabel: "Phone",
    hoursLabel: "Hours",
    hoursValue: "Daily 06:30–02:00\nFridays from 13:00",
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
