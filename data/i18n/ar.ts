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
    heading: "أربعة تبدأ بها\nزيارتك.",
    body: "أول مرة في سافا؟ هذه أسهل بداية — مشروب بارد يحمل اسم سافا، قهوة اليوم، وصنفان يكملانهما.",
  },
  menuSection: {
    eyebrow: "المنيو الكامل",
    heading: "كل ما نقدّمه.",
    body: "حار وبارد وحلى وفطور — القائمة كاملة بالأسعار بالريال.",
  },
  food: {
    eyebrow: "الفطور والحلى",
    heading: "وشيء تأكله\nمع قهوتك.",
    body: "ساندوتشات تُحضَّر عند الطلب وقائمة حلى قصيرة — الجزء الذي يحوّل فنجان القهوة إلى وقفة كاملة.",
    combo: "فطور يبدأ يومك صح",
    comboBody: "ساندوتش مع قهوة اليوم — الثنائي الذي تقدّمه سافا للصباح.",
    toCar: "متأخر؟",
    toCarBody: "قهوتك وفطورك يوصلون لك بالسيارة، بدون ما تتأخر.",
  },
  mood: {
    eyebrow: "من الداخل",
    heading: "المكان\nالذي جئت من أجله.",
    body: "نوافذ مقوّسة، زيتوني وكريمي، نباتات حقيقية وضوء نهار وفير. هكذا تبدو سافا فعلاً.",
    captions: {
      lounge: "الجلسة",
      counter: "عند الباريستا",
      facade: "بئر عثمان، مساءً",
      tray: "يُقدَّم على الصينية",
      table: "طاولة لبعد الظهر",
      cold: "مشروبات باردة بالصف",
    },
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
    heading: "ثوانٍ قليلة\nداخل سافا.",
    body: "مقاطع حقيقية من حساب سافا. مرّر للمعاينة، أو اضغط للمشاهدة.",
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
    heading: "طاولتك\nفي سافا.",
    body: "بئر عثمان، المدينة المنورة — محطة سهلة لفنجان على مهل، في أي وقت من اليوم.",
    addressLabel: "العنوان",
    phoneLabel: "الهاتف",
    hoursLabel: "ساعات العمل",
    hoursValue: "مفتوح يومياً حتى ساعات متأخرة — راجع خرائط Google لمواعيد اليوم بدقة",
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
