import type { Dictionary } from "./types";

/**
 * Written as natural MSA, not a transliteration of the English. Where SAVVA
 * has published its own Arabic wording (menu item names, Instagram captions),
 * that wording is used rather than a new translation.
 */
export const ar: Dictionary = {
  meta: { htmlLang: "ar", dir: "rtl" },
  nav: {
    menu: "المنيو",
    inside: "داخل سافا",
    visit: "الموقع",
    directions: "الاتجاهات",
    instagram: "إنستغرام",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
  },
  hero: {
    locationTag: "المدينة المنورة · قهوة مختصة",
    tagline: "يوم في سافا\nكل ما تحتاجه.",
    exploreMenu: "تصفّح المنيو",
    getDirections: "الاتجاهات",
    scrollHint: "مرّر",
  },
  selection: {
    eyebrow: "ابدأ من هنا",
    heading: "من هنا يمكنك\nالتعرف على سافا.",
    body: "أول مرة في سافا؟ هذه أسهل بداية — مشروب بارد يحمل اسم سافا، قهوة اليوم، وصنفان يكملانهما.",
  },
  menuSection: {
    eyebrow: "المنيو الكامل",
    categories: "حار · بارد · حلى · فطور",
    body: "حار وبارد وحلى وفطور — القائمة كاملة بالأسعار بالريال.",
  },
  food: {
    eyebrow: "الفطور والحلى",
    heading: "وشيء تأكله\nمع قهوتك.",
    body: "ساندوتشات تُحضَّر عند الطلب وقائمة حلى قصيرة — الجزء الذي يحوّل فنجان القهوة إلى وقفة كاملة.",
    combo: "فطور يبدأ يومك صح",
    comboBody: "ساندوتش مع قهوة اليوم — الثنائي الذي تقدّمه سافا للصباح.",
    sweet: "شيء حلو مع قهوتك",
    sweetBody: "بيكان وغلاصة وعجين مورّق — من واجهة المعجنات.",
    toCar: "متأخر؟",
    toCarBody: "قهوتك وفطورك يوصلون لك بالسيارة، بدون ما تتأخر.",
  },
  desserts: {
    heading: "حلوياتنا.",
    madiniVideoLabel: "كوكيز مديني — التحضير",
    pecanVideoLabel: "كيكة البيكان — عن قرب",
    mango: "حلى طبقات بالمانجو",
    mangoBody: "قاعدة مقرمشة وكريمة ومانجو طازج — الطبقات التي يظهرها القطع.",
    chocBerry: "حلى شوكولاتة بالتوت",
    chocBerryBody: "بسكويت داكن وكريمة شوكولاتة وحبة توت أزرق فوقها.",
    chocBerryVideoLabel: "حلى الشوكولاتة — عن قرب",
    winterPudding: "حلى دافئ بالكراميل",
    winterPuddingBody: "معجنات دافئة وكراميل ولوز — حلى شتوي من سافا.",
  },
  mood: {
    heading: "من الداخل.",
  },
  experience: {
    eyebrow: "ما الذي ينتظرك",
    heading: "ثلاثة أسباب\nللعودة.",
    items: [
      {
        title: "قهوة مختصة",
        body: "إسبريسو وفلتر وV60، إلى جانب المشروبات الباردة التي تحمل اسم سافا.",
      },
      {
        title: "قائمة باردة خاصة",
        body: "ايس كركديه سافا، شمام سافا، ماتشا بيري — مشروبات باردة تحمل اسم سافا في المنيو.",
      },
      {
        title: "مكان تبقى فيه",
        body: "ضوء نهار وخضرة وجلسات مريحة — مصمّم لجلسة طويلة، لا لوقوف سريع.",
      },
    ],
  },
  video: {
    eyebrow: "بالفيديو",
    heading: "مشروبات منعشة.",
    play: "تشغيل",
    close: "إغلاق",
    labels: {
      pourCups: "الصبّ، كوباً كوباً",
      baristaCup: "خلف الطاولة",
      hibiscusPour: "تحضير كركديه سافا",
      summerFlavours: "نكهات الصيف",
      icedMood: "مشروب بارد عند الطلب",
    },
  },
  visit: {
    eyebrow: "الموقع",
    heading: "بانتظاركم.",
    body: "بئر عثمان، المدينة المنورة — محطة سهلة لفنجان على مهل، في أي وقت من اليوم.",
    addressLabel: "العنوان",
    phoneLabel: "الهاتف",
    hoursLabel: "ساعات العمل",
    hoursValue: "يومياً 06:30–02:00\nالجمعة من الساعة 13:00",
    ratingOnGoogle: "على Google",
    readReviews: "اقرأ التقييمات",
    getDirections: "الاتجاهات",
    whatsapp: "واتساب",
    instagram: "إنستغرام",
  },
  footer: {
    instagram: "إنستغرام",
    directions: "الاتجاهات",
    tagline: "قهوة مختصة في المدينة المنورة.",
  },
};
