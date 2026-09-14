import type { Dictionary } from "./types";

// Arabic translation — same facts and claims as the English base, written
// as natural Modern Standard Arabic rather than a literal word-for-word
// pass. RTL layout is driven by meta.dir, applied to <html dir>.
export const ar: Dictionary = {
  meta: { htmlLang: "ar", dir: "rtl" },
  nav: {
    menu: "القائمة",
    experience: "تجربتنا",
    visit: "زورونا",
    directions: "الاتجاهات",
    instagram: "انستقرام",
  },
  hero: {
    locationTag: "المدينة المنورة · قهوة مختصة",
    tagline: "يوم في سافا\nكل ما تحتاجه.",
    exploreMenu: "تصفح القائمة",
    getDirections: "الاتجاهات",
  },
  intro: {
    eyebrow: "سافا",
    heading: "قهوة.\nمكان.\nلحظات هادئة.",
    body: "تقوم سافا على فكرة بسيطة — القهوة ألذّ حين يكون هناك وقت للتمهّل. خامات طبيعية، إضاءة هادئة، وفناجين مُعدّة بعناية تصنع مكانًا يُدعوك للبقاء فيه، لا للعبور منه.",
  },
  selection: {
    eyebrow: "مختارات سافا",
    heading: "تحمل اسم\nسافا.",
    spaceLabel: "المكان",
  },
  menuSection: {
    eyebrow: "القائمة",
    heading: "ما نحضّره\nونقدّمه.",
  },
  pastry: {
    eyebrow: "المخبوزات",
    heading: "مخبوزات بسيطة.\nنُعدّها بأنفسنا.",
    body: "تشكيلة صغيرة وموسمية — لتكون رفيقة فنجان قهوة هادئ.",
  },
  mood: {
    eyebrow: "الأجواء",
    heading: "المكان،\nفي تفاصيله الهادئة.",
  },
  experience: {
    eyebrow: "تجربتنا",
    heading: "ثلاثة أشياء\nنحرص عليها.",
    items: [
      { title: "القهوة", body: "نختارها بعناية، ونحضّرها بدقة." },
      { title: "الطعام", body: "بسيط ومدروس، نُعدّه بأنفسنا." },
      { title: "المكان", body: "ضوء طبيعي، خامات طبيعية، ومساحة للتنفّس." },
    ],
  },
  video: {
    eyebrow: "سافا في حركة",
    heading: "لمحة أقرب،\nفي حركة.",
    body: "لحظات حقيقية من داخل سافا — مرّر للمعاينة، واضغط للمشاهدة.",
    play: "تشغيل",
    close: "إغلاق",
  },
  visit: {
    eyebrow: "زورونا",
    heading: "اعثر على طاولتك\nفي سافا.",
    body: "بئر عثمان، المدينة المنورة — محطة سهلة لفنجان هادئ في أي وقت من اليوم.",
    addressLabel: "العنوان",
    phoneLabel: "الهاتف",
    hoursLabel: "ساعات العمل",
    hoursValue: "مفتوح يوميًا حتى ساعات متأخرة — للساعات الدقيقة اليوم راجع خرائط جوجل",
    ratingOnGoogle: "في جوجل",
    readReviews: "قراءة التقييمات",
    getDirections: "الاتجاهات",
    whatsapp: "واتساب",
    instagram: "انستقرام",
  },
  footer: {
    instagram: "انستقرام",
    directions: "الاتجاهات",
    tagline: "قهوة مختصة، المدينة المنورة.",
  },
};
