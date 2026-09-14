/**
 * Every real SAVVA photo and clip used on the site, with where it came from and
 * what it is actually allowed to claim.
 *
 * `verified` means SAVVA themselves named the subject — in the caption of the
 * post the asset comes from, in burnt-in text on the clip, or on the official
 * printed menu. Anything not verified must never be labelled with a specific
 * menu item; it can only be used as general atmosphere.
 *
 * Sources
 *  - ig   : official Instagram @savva_cafe (SAVVA's own published material)
 *  - maps : the SAVVA listing on Google Maps (photos published on the listing)
 */

export type MediaSource = "ig" | "maps";

export type Photo = {
  src: string;
  /** Descriptive alt — never claims a menu item unless `verifiedItem` is set. */
  alt: string;
  source: MediaSource;
  /** Menu item this photo provably depicts, as named by SAVVA. */
  verifiedItem?: string;
  /** How that was confirmed — kept so nobody has to re-do the research. */
  evidence?: string;
  /** Tuned per image so nothing important gets cropped out by object-cover. */
  objectPosition?: string;
};

export const photos = {
  // ---- The space (Google Maps listing) --------------------------------
  facadeWide: {
    src: "/images/savva/space-facade-wide.jpg",
    alt: "SAVVA's lit storefront on Bir Uthman at night, with terrace seating",
    source: "maps",
    objectPosition: "center 45%",
  },
  facadeTall: {
    src: "/images/savva/space-facade-tall.jpg",
    alt: "The SAVVA entrance and outdoor tables under the illuminated sign",
    source: "maps",
    objectPosition: "center 40%",
  },
  lounge: {
    src: "/images/savva/space-lounge.jpg",
    alt: "SAVVA's lounge — arched wooden windows, cream seating and large plants",
    source: "maps",
    objectPosition: "center 45%",
  },
  counter: {
    src: "/images/savva/space-counter.jpg",
    alt: "The SAVVA counter — flowers, cake under glass and the espresso machine",
    source: "maps",
    objectPosition: "center 40%",
  },
  tray: {
    src: "/images/savva/brand-tray.jpg",
    alt: "A SAVVA tray with an iced coffee, an espresso cup and a glass of water",
    source: "maps",
    objectPosition: "center 60%",
  },
  // NB: public/images/savva/mood-cafe-table.jpg is the same photograph as
  // service-desk.jpg (same Instagram post, saved twice at different sizes in an
  // earlier pass). It is deliberately not referenced here — using both would
  // print the same picture twice on one page.

  // ---- Drinks ----------------------------------------------------------
  hibiscus: {
    src: "/images/savva/drink-hibiscus.jpg",
    alt: "Ice Hibiscus SAVVA in a branded cup, on wood in afternoon light",
    source: "ig",
    verifiedItem: "Ice Hibiscus SAVVA",
    evidence: "IG DdMxDh9MvzH caption: «لذّة لها طابعها..كركديه سافا» + #كركديه",
    objectPosition: "center 55%",
  },
  hibiscusPour: {
    src: "/images/savva/drink-hibiscus-pour.jpg",
    alt: "Ice Hibiscus SAVVA being poured into a branded SAVVA cup",
    source: "ig",
    verifiedItem: "Ice Hibiscus SAVVA",
    evidence: "IG DdHV3QCsEbd, tagged #كركديه; same drink as reel DdJ6WD4sOUq",
    objectPosition: "center 55%",
  },
  heroPour: {
    src: "/images/savva/hero-pour.jpg",
    alt: "A cold hibiscus drink being poured into a SAVVA cup",
    source: "ig",
    objectPosition: "center 28%",
  },
  meloncup: {
    src: "/images/savva/drink-hand-cold.jpg",
    alt: "A cold blended SAVVA drink held up against greenery",
    source: "ig",
    objectPosition: "center 45%",
  },
  coldOnWood: {
    src: "/images/savva/mood-window-light.jpg",
    alt: "A cold SAVVA drink on a wooden table in hard afternoon light",
    source: "ig",
    objectPosition: "center 55%",
  },
  lineup: {
    src: "/images/savva/drink-lineup.jpg",
    alt: "Three cold SAVVA drinks lined up on a wooden beam",
    source: "ig",
    objectPosition: "center 45%",
  },
  shelfTrio: {
    src: "/images/savva/drink-shelf-trio.jpg",
    alt: "Three cold SAVVA drinks side by side on a marble counter",
    source: "ig",
    objectPosition: "center 50%",
  },

  // ---- Food ------------------------------------------------------------
  cookies: {
    src: "/images/savva/dessert-cookies.jpg",
    alt: "Madini Cookies with black sesame, on SAVVA paper",
    source: "ig",
    verifiedItem: "Madini Cookies",
    evidence: "IG DdPEf8uNOSa caption: «كوكيز مديني.. نكهة مستوحاة من طعم المدينة»",
    objectPosition: "center 50%",
  },
  halloumi: {
    src: "/images/savva/pastry-sandwich.jpg",
    alt: "A Halloumi Sandwich on SAVVA wrapping paper",
    source: "ig",
    verifiedItem: "Halloumi Sandwich",
    evidence: "IG Dc6pEniMBhh caption: «ساندوتش حلوم، بطعم غني»",
    objectPosition: "center 50%",
  },
  deskCombo: {
    src: "/images/savva/service-desk.jpg",
    alt: "A SAVVA iced coffee and a wrapped sandwich on a tray beside a laptop",
    source: "ig",
    verifiedItem: "Coffee of the Day (Hot / Ice)",
    evidence: "IG Dc_kJc2MzdV caption pairs this photo with «قهوة اليوم بارد او حار»",
    objectPosition: "center 55%",
  },
  carService: {
    src: "/images/savva/service-car.jpg",
    alt: "A SAVVA tray with coffee and a sandwich handed out to a car window",
    source: "ig",
    evidence: "IG Dc8_ifwsihu caption: «قهوتك وفطورك يوصلون لك بالسيارة»",
    objectPosition: "center 50%",
  },
} satisfies Record<string, Photo>;

export type Clip = {
  src: string;
  poster: string;
  source: MediaSource;
  /** Key into dictionary.video.labels */
  labelKey: "pourCups" | "baristaCup" | "hibiscusPour" | "summerFlavours" | "icedMood";
  evidence?: string;
};

/**
 * Five real clips from @savva_cafe, downloaded as progressive H.264 so they
 * play in Safari as well as Chrome. Each has its own cover frame, so nothing
 * loads until the visitor asks for it.
 */
export const clips: Clip[] = [
  {
    src: "/videos/savva/hibiscus-pour.mp4",
    poster: "/images/savva/video-poster-hibiscus.jpg",
    source: "ig",
    labelKey: "hibiscusPour",
    evidence: "reel DdJ6WD4sOUq: «من تفاصيل التحضير تبدأ نكهة كركديه سافا»",
  },
  {
    src: "/videos/savva/pour-cups.mp4",
    poster: "/images/savva/video-poster-pour-cups.jpg",
    source: "ig",
    labelKey: "pourCups",
    evidence: "reel DdCGu6UM5rV: «مزاجك يحتاج كوب من سافا / Your mood needs a cup of SAVVA»",
  },
  {
    src: "/videos/savva/summer-flavours.mp4",
    poster: "/images/savva/video-poster-summer.jpg",
    source: "ig",
    labelKey: "summerFlavours",
    evidence: "reel Dbgh-ytMTn9: «جربتوا نكهاتنا الصيفية؟», on-screen «ماتشا بيري VS شمام سافا»",
  },
  {
    src: "/videos/savva/iced-mood.mp4",
    poster: "/images/savva/video-poster-iced.jpg",
    source: "ig",
    labelKey: "icedMood",
    evidence: "reel Dc36cp2sLRS: «صيفكم أحلى مع مشروب بارد يضبط المزاج»",
  },
  {
    src: "/videos/savva/barista-cup.mp4",
    poster: "/images/savva/video-poster-barista-cup.jpg",
    source: "ig",
    labelKey: "baristaCup",
  },
];

/**
 * The four items the "start here" section shows. Every one is named by SAVVA
 * themselves and exists on the official printed menu, and every one has its own
 * real photograph — there is no card here without an image.
 */
export const startHere = [
  { menuName: "Ice Hibiscus SAVVA", photo: photos.hibiscus },
  {
    menuName: "Coffee of the Day (Hot / Ice)",
    photo: photos.deskCombo,
    // Display-only trim for the card: the parenthetical is a serving option,
    // not part of the name, and it wraps badly at card width. The full official
    // string is still printed in the menu itself.
    cardName: { en: "Coffee of the Day", ar: "قهوة اليوم", ru: "Кофе дня" },
  },
  { menuName: "Madini Cookies", photo: photos.cookies },
  { menuName: "Halloumi Sandwich", photo: photos.halloumi },
] as const;
