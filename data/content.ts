// Central place for all copy + verified external links.
// Anything not confirmed by an official SAVVA source is explicitly marked TODO.
// Swap values here to update the whole site — no component edits required.

export const siteUrl = "https://savva-cafe.example.com"; // TODO: replace with official production domain

export const links = {
  instagram: "https://www.instagram.com/savva_cafe",
  directions: "https://maps.app.goo.gl/geB2uSVz2UD7soM46?g_st=ic",
};

export const brand = {
  name: "SAVVA",
  // Adapted from SAVVA's own Instagram bio: "A day in savva is what you
  // need to be savva". Kept close to the original wording — this is the
  // brand's own line, not an invented tagline.
  tagline: "A day in SAVVA\nis all you need.",
};

export const intro = {
  eyebrow: "SAVVA",
  heading: "Coffee.\nSpace.\nSlow moments.",
  // TODO: replace with official SAVVA brand story — Instagram/Maps don't
  // publish one beyond the bio line used in the hero.
  body: "SAVVA is built around a simple idea — coffee is better when there's room to slow down. Natural materials, quiet light, and careful cups shape a space meant to be lingered in, not rushed through.",
};

export const experience = [
  {
    id: "coffee",
    title: "Coffee",
    body: "Carefully sourced, carefully brewed.", // TODO: replace with official copy
  },
  {
    id: "food",
    title: "Food",
    body: "Simple, thoughtful, made in-house.", // TODO: replace with official copy
  },
  {
    id: "space",
    title: "Space",
    body: "Natural light, natural materials, room to breathe.", // TODO: replace with official copy
  },
];

export const visit = {
  heading: "Visit SAVVA",
  // Verified via the official SAVVA Google Maps listing (both the client's
  // link and the one in SAVVA's own Instagram bio resolve to this listing).
  address: "Zubairah Al Roumiah, Bir Uthman, Madinah 42331, Saudi Arabia",
  phone: "+966 56 437 0303",
  // Google Maps only ever shows a same-day snapshot ("Open · closes at
  // 02:00"), not a full weekly schedule — so a full table isn't printed
  // here rather than guessed.
  hours: "Open daily into the early hours — see Instagram or Google Maps for today's hours",
};
