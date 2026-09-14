export type Dictionary = {
  meta: {
    /** BCP-47 tag for <html lang> */
    htmlLang: string;
    dir: "ltr" | "rtl";
  };
  nav: {
    menu: string;
    experience: string;
    visit: string;
    directions: string;
    instagram: string;
  };
  hero: {
    locationTag: string;
    tagline: string;
    exploreMenu: string;
    getDirections: string;
  };
  intro: {
    eyebrow: string;
    heading: string;
    body: string;
  };
  selection: {
    eyebrow: string;
    heading: string;
    spaceLabel: string;
  };
  menuSection: {
    eyebrow: string;
    heading: string;
  };
  pastry: {
    eyebrow: string;
    heading: string;
    body: string;
  };
  mood: {
    eyebrow: string;
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
    body: string;
    play: string;
    close: string;
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
