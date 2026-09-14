// Central place for locale-independent facts + verified external links.
// Anything not confirmed by an official SAVVA source is explicitly marked TODO.
// User-facing copy (translated strings) lives in data/i18n/*, not here —
// this file holds only things that don't change between languages: raw
// addresses, phone numbers, coordinates, counts.

export const siteUrl = "https://savva-cafe.example.com"; // TODO: replace with official production domain

const whatsappNumber = "966564370303"; // same confirmed number as the phone below, in wa.me format

export const links = {
  instagram: "https://www.instagram.com/savva_cafe",
  directions: "https://maps.app.goo.gl/geB2uSVz2UD7soM46?g_st=ic",
  // Same official Google Business listing as `directions` — used where the
  // link's purpose is "read the reviews" rather than "get directions".
  reviews: "https://maps.app.goo.gl/geB2uSVz2UD7soM46?g_st=ic",
  whatsapp: `https://wa.me/${whatsappNumber}`,
  // No-API-key Google Maps embed (query-based iframe) — avoids requiring a
  // Maps API key/credential. Address verified against the official listing.
  mapEmbed:
    "https://www.google.com/maps?q=%D8%B3%D8%A7%D9%81%D8%A7+savva,+Zubairah+Al+Roumiah,+Bir+Uthman,+Madinah+42331&output=embed",
};

export const brand = {
  name: "SAVVA",
};

export const visit = {
  // Verified directly against the official SAVVA Google Maps listing
  // ("سافا savva", Bir Uthman, Madinah) on 2026-09-14 — same address/phone
  // the client's own link and Instagram bio resolve to.
  address: "Zubairah Al Roumiah, Bir Uthman, Madinah 42331, Saudi Arabia",
  phone: "+966 56 437 0303",
  // Rating + review count read directly from the live official listing on
  // 2026-09-14 — not copied from any third-party site. The full weekly
  // hours table could not be independently confirmed in that same check
  // (only "open, closes ~02:00" today-snapshot was available), so no
  // invented weekly schedule is printed — see data/i18n for the honest
  // phrasing actually shown.
  rating: 4.7,
  reviewCount: 729,
};
