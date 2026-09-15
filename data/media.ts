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
  tray: {
    src: "/images/savva/brand-tray.jpg",
    alt: "A SAVVA tray with an iced coffee, an espresso cup and a glass of water",
    source: "maps",
    objectPosition: "center 60%",
  },
  shelfDetail: {
    src: "/images/savva/interior-shelf-detail.jpg",
    alt: "A wooden shelf inside SAVVA with bagged coffee beans, cups and plants, arched windows behind",
    source: "maps",
    objectPosition: "center 40%",
  },
  // A different corner of the same lounge, shot in daylight rather than
  // evening light — a genuinely new angle, not a repeat of `lounge`.
  loungeLatte: {
    src: "/images/savva/interior-latte-lounge.jpg",
    alt: "A latte with leaf-pattern art on a wooden table, SAVVA's wooden chairs and lounge softly out of focus behind",
    source: "maps",
    objectPosition: "center 55%",
  },
  // A lounge-table still life — a speckled ceramic vase with dried eucalyptus,
  // a SAVVA cup of cold brew on its own coaster, soft-focus sofas behind.
  // Picked out by the client directly from SAVVA's Google Maps listing
  // (photo URL shared 2026-09-15) to replace the rose-vase counter shot that
  // used to stand in for "interior" — dried greenery rather than cut flowers,
  // and reads as a quiet tabletop moment rather than a florist arrangement.
  loungeVase: {
    src: "/images/savva/interior-coffee-still-life.jpg",
    alt: "A speckled ceramic vase with dried eucalyptus and a SAVVA cold brew on the lounge table",
    source: "maps",
    objectPosition: "center 45%",
  },
  // NB: public/images/savva/mood-cafe-table.jpg is the same photograph as
  // service-desk.jpg (same Instagram post, saved twice at different sizes in an
  // earlier pass). It is deliberately not referenced here — using both would
  // print the same picture twice on one page.
  //
  // photos.coldOnWood and photos.shelfTrio (mood-window-light.jpg,
  // drink-shelf-trio.jpg) were removed from this file entirely at the client's
  // request — both the "A table for the afternoon" / "Cold drinks, lined up"
  // captions and their photos. The files stay on disk, unreferenced.
  //
  // photos.baristaPour, .verandaEvening, .loungeCorner, .counter and
  // .counterDetail (interior-barista-pour.jpg, interior-veranda-evening.jpg,
  // interior-lounge-corner.jpg, space-counter.jpg, counter-roses-detail.jpg)
  // were removed from the Inside section and from this file at the client's
  // request during the September 2026 refinement pass. `counterDetail` (the
  // rose-vase counter shot) was the last of these to go — the client asked
  // for it out of Inside too, once they found `loungeVase` above as a
  // stronger replacement. The files stay on disk, unreferenced.

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
  lineup: {
    src: "/images/savva/drink-lineup.jpg",
    alt: "Three cold SAVVA drinks lined up on a wooden beam",
    source: "ig",
    objectPosition: "center 45%",
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
  cookiesStack: {
    src: "/images/savva/dessert-cookies-stack.jpg",
    alt: "A stack of Madini Cookies held up by a gloved hand",
    source: "ig",
    verifiedItem: "Madini Cookies",
    evidence: "IG reel DdRhBK7Mhf1 caption: «تمر وهيل، ونكهة لها طابعها الخاص.. كوكيز مديني»",
    objectPosition: "center 45%",
  },
  // Real photo from the Instagram post the client asked for by URL (owner
  // confirmed @savva_cafe). The post's own caption ("تفاصيل تفرق") never names
  // the dish, and nothing is burnt into the frame either, so it is used WITHOUT
  // a specific menu-item name or price — see StartHere.tsx's "standalone" card
  // entry. Visually it reads as a cinnamon-roll-style Danish (spiral pastry,
  // pecan, glaze) — the only spiral-shaped item on the printed menu is
  // "Cinnamon Danish" — but that is a shape-based guess, not a caption-
  // confirmed depiction, so the name is deliberately not printed on the card.
  dessertPastry: {
    src: "/images/savva/dessert-pastry-pecan.jpg",
    alt: "A spiral pastry with pecans and a glaze drizzle, on a plate in daylight",
    source: "ig",
    evidence: "IG DUqTFLcjByW, owner confirmed savva_cafe; caption does not name the dish",
    objectPosition: "center 42%",
  },
  // Google Maps listing photo: espresso machine and equipment in the
  // background, two iced coffees and a layered dessert slice in the
  // foreground. Real SAVVA content, but nothing names the specific dessert.
  // NB: no longer used in the Desserts section (replaced by richer,
  // client-provided Instagram material below) — kept defined since the file
  // stays on disk.
  foodCounterDessert: {
    src: "/images/savva/food-counter-dessert.jpg",
    alt: "A slice of layered dessert on a white plate, close up",
    source: "maps",
    objectPosition: "center 78%",
  },
  // A wider view of the same table (Google Maps listing, a different frame
  // from the same visit) — the same dessert slice and two iced coffees, but
  // pulled back to show the lounge sofa and a sunlit window, so it reads as
  // an environment rather than a repeat of the tighter crop above.
  // NB: no longer used in the Desserts section (replaced by the client's own
  // Instagram links below) — kept defined since the file stays on disk.
  dessertLoungeTable: {
    src: "/images/savva/dessert-lounge-table.jpg",
    alt: "A slice of layered dessert and two iced coffees on a table in SAVVA's lounge",
    source: "maps",
    objectPosition: "center 62%",
  },
  // ---- Desserts (client-provided Instagram links, Sept 2026) -----------
  // Nine @savva_cafe post URLs the client sent directly. Each was fetched by
  // its own URL (not the profile grid), so the earlier "only 12 most recent
  // posts" ceiling doesn't apply to these — the public embed endpoint works
  // for any specific post regardless of age.
  //
  // "قطعة بيكان تكفي يومك" (a pecan slice) — same dark-cake-with-caramel-top
  // dessert as the `dessertPecanVideo` clip below (different shoot, same
  // product), and the video's own caption confirms it as Pecan Cake.
  dessertPecan: {
    src: "/images/savva/dessert-pecan-cake.webp",
    alt: "Pecan Cake — a square of dark cake with a caramel top and pecan crumble",
    source: "ig",
    verifiedItem: "Pecan Cake",
    evidence: 'IG Dbq1RIDMcbS caption "قطعة بيكان تكفي يومك"; confirmed by the paired reel DaelGo7sGGS caption "كيكة البيكان"',
    objectPosition: "center 45%",
  },
  // "دانيش سينبون تفاصيل تفرق" — names the dish directly (matches the printed
  // menu's "Cinnamon Danish" / "دانيش سينابون").
  dessertCinnamonDanish: {
    src: "/images/savva/dessert-cinnamon-danish.jpg",
    alt: "Cinnamon Danish, glazed, macro close-up",
    source: "ig",
    verifiedItem: "Cinnamon Danish",
    evidence: 'IG DYmxXXWjNQz caption "دانيش سينبون تفاصيل تفرق"',
    objectPosition: "center 55%",
  },
  // "طعم ونكهه توديك لعالم ثاني" — a dark chocolate cake wedge with a
  // ganache top, chocolate shavings and a blueberry. Real SAVVA content, but
  // the caption never names the dish and it doesn't match the printed menu's
  // "Chocolate Cake" closely enough (different shape, different topping) to
  // print that name — used as an honest, unnamed visual instead.
  dessertChocBerry: {
    src: "/images/savva/dessert-chocolate-berry-cake.jpg",
    alt: "A wedge of dark chocolate cake with chocolate shavings and a blueberry on top",
    source: "ig",
    evidence: 'IG DWvxvZWsuJd caption "طعم ونكهه توديك لعالم ثاني 🫐🍫"; no dish name given',
    objectPosition: "center 40%",
  },
  // "كل قطعة فيها طبقات تستاهل تتأمل" (every slice has layers worth
  // admiring) — a round mango-topped cheesecake. No name confirmed (the
  // printed menu's only cheesecake is "Blueberry Cheesecake", a different
  // fruit, so that name is not used here).
  dessertMangoCheesecake: {
    src: "/images/savva/dessert-mango-cheesecake.jpg",
    alt: "A round mango-topped cheesecake on a white plate in hard daylight",
    source: "ig",
    evidence: 'IG Db_kfNrs3Xg caption "كل قطعة فيها طبقات تستاهل تتأمل"; no dish name given',
    objectPosition: "center 55%",
  },
  // Both cups in this frame are named by the reel's own on-screen comparison
  // graphic ("ماتشا بيري VS شمام سافا" — Matcha Berry VS SAVVA Melon), cropped
  // to isolate each cup for a small inline menu thumbnail.
  menuMatchaBerry: {
    src: "/images/savva/menu-matcha-berry.jpg",
    alt: "Matcha Berry, a layered green matcha and berry drink in a SAVVA cup",
    source: "ig",
    verifiedItem: "Matcha Berry",
    evidence: 'reel Dbgh-ytMTn9, on-screen text "ماتشا بيري VS شمام سافا" (left cup)',
    objectPosition: "center",
  },
  menuSavvaMelon: {
    src: "/images/savva/menu-savva-melon.jpg",
    alt: "SAVVA Melon, an orange blended drink in a SAVVA cup",
    source: "ig",
    verifiedItem: "SAVVA Melon",
    evidence: 'reel Dbgh-ytMTn9, on-screen text "ماتشا بيري VS شمام سافا" (right cup)',
    objectPosition: "center",
  },
} satisfies Record<string, Photo>;

/**
 * The full-bleed hero clip: SAVVA's own illuminated sign at night, strung with
 * lights. Owner verified as @savva_cafe on the source reel.
 *
 * Note for whoever maintains this: the clip was posted for Ramadan, and a
 * crescent-and-star light hangs in frame. There is no offer text burnt into the
 * video, so nothing on the page makes a claim that can expire — but the decor
 * does date the footage, and it is worth swapping after the season.
 */
export const heroClip = {
  src: "/videos/savva/savva-sign-night.mp4",
  poster: "/images/savva/video-poster-sign-night.jpg",
  alt: "SAVVA's illuminated storefront sign at night, strung with warm lights",
  source: "ig" as const,
  evidence: "reel DVOQO2SjL9h, owner savva_cafe",
};

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
 * Real dessert video clips for the "Наши десерты" section.
 *
 * `dessertMadiniClip` was found in an earlier pass, from the public profile
 * grid. The other three came from nine specific Instagram post URLs the
 * client sent directly this pass — fetching a post by its own URL isn't
 * subject to the "only ~12 most recent posts" ceiling the profile grid has,
 * so these reach further back than the earlier grid-only search could.
 */
// Poster is a sharp, well-lit stop-frame pulled from this same clip at 8s (a
// plate of the cookies on branded paper in daylight) rather than the
// `cookiesStack` photo used elsewhere in this section — using one photo as
// both a standalone image and a video's poster in the same section would
// have shown the identical frame twice.
export const dessertMadiniClip = {
  src: "/videos/savva/dessert-cookies.mp4",
  poster: "/images/savva/video-poster-dessert-cookies.jpg",
  source: "ig" as const,
  verifiedItem: "Madini Cookies",
  evidence: "reel DdRhBK7Mhf1 caption: «تمر وهيل، ونكهة لها طابعها الخاص.. كوكيز مديني»",
};

// Same Pecan Cake as `dessertPecan` above, filmed close — the reel's own
// caption is what confirms the name. Poster is a stop-frame at 2s (a clean,
// sharp plate shot) rather than reusing the `dessertPecan` photo.
export const dessertPecanClip = {
  src: "/videos/savva/dessert-pecan-cake.mp4",
  poster: "/images/savva/video-poster-dessert-pecan.jpg",
  source: "ig" as const,
  verifiedItem: "Pecan Cake",
  evidence: 'reel DaelGo7sGGS caption "كيكة البيكان 🍯 قطعه وتعرف"',
};

// Same chocolate-and-blueberry cake as `dessertChocBerry` above, on the
// terrace table. No dish name confirmed (see that photo's own evidence).
export const dessertChocBerryClip = {
  src: "/videos/savva/dessert-chocolate-berry.mp4",
  poster: "/images/savva/video-poster-dessert-chocberry.jpg",
  source: "ig" as const,
  evidence: 'reel DWvxvZWsuJd caption "طعم ونكهه توديك لعالم ثاني 🫐🍫"; no dish name given',
};

// A warm baked pudding with caramel and almonds — oven, plating and
// someone actually eating it outdoors, all in one clip. No standalone photo
// exists for this one and no dish name is confirmed, so it's shown as a
// video only rather than paired with a guessed still.
export const dessertWinterPuddingClip = {
  src: "/videos/savva/dessert-winter-pudding.mp4",
  poster: "/images/savva/video-poster-dessert-winterpudding.jpg",
  source: "ig" as const,
  evidence: 'reel DTKxrj2jK0W caption "بودينق الشتاء الدفء… حين يتحول إلى لقمة 🌿"; no dish name given',
};

/**
 * The four cards the "start here" section shows.
 *
 * Three are tied to a real, named, printed-menu item and show its official
 * price. The third slot (the pastry) is different on purpose: it is a real
 * SAVVA photo (owner confirmed), but its own Instagram caption never names the
 * dish, so — per house rule — it is shown WITHOUT a specific item name or
 * price rather than guessed. See the `dessertPastry` photo entry above for the
 * evidence trail.
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
  {
    photo: photos.dessertPastry,
    // No confirmed name — see the photo's own comment. A plain, honest
    // description instead of a specific (and possibly wrong) menu item.
    label: { en: "From the pastry case", ar: "من واجهة المعجنات", ru: "Из витрины с выпечкой" },
  },
  { menuName: "Halloumi Sandwich", photo: photos.halloumi },
] as const;
