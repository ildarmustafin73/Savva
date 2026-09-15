import type { Dictionary } from "./types";

/**
 * Russian is written as natural Russian, not a word-for-word trace of the
 * English. Same rule as en.ts: no line that only describes the layout, and no
 * claim that isn't backed by SAVVA's menu, captions or Google listing.
 */
export const ru: Dictionary = {
  meta: { htmlLang: "ru", dir: "ltr" },
  nav: {
    menu: "Меню",
    inside: "Внутри SAVVA",
    visit: "Как добраться",
    directions: "Маршрут",
    instagram: "Instagram",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
  },
  hero: {
    locationTag: "Медина · Спешелти кофе",
    tagline: "Один день в SAVVA —\nвсё, что нужно.",
    exploreMenu: "Смотреть меню",
    getDirections: "Проложить маршрут",
    scrollHint: "Листайте",
  },
  selection: {
    eyebrow: "С чего начать",
    heading: "С чего можно начать\nзнакомство с SAVVA.",
    body: "Впервые в SAVVA? С этого проще всего начать: фирменный холодный напиток, кофе дня и две позиции, которые к ним подходят.",
  },
  menuSection: {
    eyebrow: "Полное меню",
    categories: "Горячее · Холодное · Десерты · Завтраки",
    body: "Горячее, холодное, десерты и завтраки — полный список с ценами в SAR.",
  },
  food: {
    eyebrow: "Завтраки и десерты",
    heading: "Есть чем\nдополнить кофе.",
    body: "Сэндвичи готовят под заказ, десертов немного — ровно столько, чтобы кофе превратился в полноценную остановку.",
    combo: "Нормальный завтрак",
    comboBody: "Сэндвич и кофе дня — сочетание, которое SAVVA собирает для утра.",
    sweet: "Что-то сладкое к кофе",
    sweetBody: "Пекан, глазурь и слоёное тесто — из витрины с выпечкой.",
    toCar: "Опаздываете?",
    toCarBody: "Кофе и завтрак вынесут прямо к машине — не придётся терять минуты.",
    counterVideoLabel: "Завтрак на террасе",
  },
  desserts: {
    heading: "Наши десерты.",
    madiniVideoLabel: "Madini Cookies — приготовление",
    pecanVideoLabel: "Кекс с пеканом — крупным планом",
    mango: "Слоёный десерт с манго",
    mangoBody: "Хрустящая основа, крем и свежий манго — то, что видно на срезе.",
    chocBerry: "Шоколадный десерт с ягодой",
    chocBerryBody: "Тёмный бисквит, шоколадный крем и черника сверху.",
    chocBerryVideoLabel: "Шоколадный десерт — крупным планом",
    winterPudding: "Тёплый десерт с карамелью",
    winterPuddingBody: "Тёплая выпечка, карамель и миндаль — зимний десерт SAVVA.",
  },
  mood: {
    heading: "Наш интерьер.",
  },
  experience: {
    eyebrow: "Чего ожидать",
    heading: "Три причины\nвозвращаться.",
    items: [
      {
        title: "Спешелти кофе",
        body: "Эспрессо, фильтр и V60 — рядом с холодными напитками, которые SAVVA делает под своим именем.",
      },
      {
        title: "Своя холодная линейка",
        body: "Айс Каркаде SAVVA, SAVVA Дыня, Матча Берри — холодные напитки, которые в меню идут под именем SAVVA.",
      },
      {
        title: "Зал, где хочется остаться",
        body: "Дневной свет, зелень и мягкая мебель — рассчитано на долгую посадку, а не на очередь.",
      },
    ],
  },
  video: {
    eyebrow: "В движении",
    heading: "Освежающие напитки.",
    play: "Смотреть",
    close: "Закрыть",
    labels: {
      pourCups: "Разливают по стаканам",
      baristaCup: "За стойкой",
      hibiscusPour: "Готовят SAVVA Каркаде",
      summerFlavours: "Летние вкусы",
      icedMood: "Холодный напиток под заказ",
    },
  },
  visit: {
    eyebrow: "Как добраться",
    heading: "Ждём вас.",
    body: "Бир Усман, Медина — удобная остановка для неспешной чашки в любое время дня.",
    addressLabel: "Адрес",
    phoneLabel: "Телефон",
    hoursLabel: "Часы работы",
    hoursValue: "Ежедневно 06:30–02:00\nПо пятницам — с 13:00",
    ratingOnGoogle: "на Google",
    readReviews: "Читать отзывы",
    getDirections: "Проложить маршрут",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
  },
  footer: {
    instagram: "Instagram",
    directions: "Маршрут",
    tagline: "Спешелти кофе в Медине.",
  },
};
