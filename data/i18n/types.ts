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
    heading: string;
    body: string;
  };
  food: {
    eyebrow: string;
    heading: string;
    body: string;
    /** Labels for the three real, caption-verified items shown in this section. */
    combo: string;
    comboBody: string;
    toCar: string;
    toCarBody: string;
  };
  mood: {
    eyebrow: string;
    heading: string;
    body: string;
    captions: {
      lounge: string;
      counter: string;
      facade: string;
      tray: string;
      table: string;
      cold: string;
    };
  };
  experience: {
    eyebrow: string;
    heading: string;
    items: { title: string; body: string }[];
  };
  video: {
    eyebrow: string;
    heading: string;
    body: string;
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
