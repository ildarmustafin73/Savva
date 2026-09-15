export type Dictionary = {
  meta: {
    /** BCP-47 tag for <html lang> */
    htmlLang: string;
    dir: "ltr" | "rtl";
  };
  nav: {
    menu: string;
    inside: string;
    visit: string;
    directions: string;
    instagram: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    locationTag: string;
    tagline: string;
    /** One primary action + one secondary. Everything else lives in the nav. */
    exploreMenu: string;
    getDirections: string;
    scrollHint: string;
  };
  selection: {
    eyebrow: string;
    heading: string;
    body: string;
  };
  menuSection: {
    eyebrow: string;
    /** Short category list ("Hot · Cold · Desserts · Breakfast") standing in
     *  for a display heading — see MenuTabs.tsx. */
    categories: string;
    body: string;
  };
  food: {
    eyebrow: string;
    heading: string;
    body: string;
    /** Labels for the three real, caption-verified items shown in this section. */
    combo: string;
    comboBody: string;
    /** A real dessert-and-coffee moment with no confirmed dish name — an
     *  honest, non-specific caption rather than a guess. */
    sweet: string;
    sweetBody: string;
    toCar: string;
    toCarBody: string;
  };
  /** The standalone "Наши десерты" section — several real photos and
   *  videos, separate from the Food section above it. Madini Cookies (name +
   *  price) and Pecan Cake (name + price) come straight from the menu data;
   *  the rest are real but unnamed, so they get an honest short caption
   *  instead of a guessed dish name. */
  desserts: {
    heading: string;
    madiniVideoLabel: string;
    pecanVideoLabel: string;
    mango: string;
    mangoBody: string;
    chocBerry: string;
    chocBerryBody: string;
    chocBerryVideoLabel: string;
    winterPudding: string;
    winterPuddingBody: string;
  };
  mood: {
    heading: string;
  };
  experience: {
    eyebrow: string;
    heading: string;
    items: { title: string; body: string }[];
  };
  video: {
    eyebrow: string;
    heading: string;
    play: string;
    close: string;
    labels: {
      pourCups: string;
      baristaCup: string;
      hibiscusPour: string;
      summerFlavours: string;
      icedMood: string;
    };
  };
  visit: {
    eyebrow: string;
    heading: string;
    body: string;
    addressLabel: string;
    phoneLabel: string;
    hoursLabel: string;
    hoursValue: string;
    ratingOnGoogle: string;
    readReviews: string;
    getDirections: string;
    whatsapp: string;
    instagram: string;
  };
  footer: {
    instagram: string;
    directions: string;
    tagline: string;
  };
};
