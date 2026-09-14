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
    heading: "Четыре позиции\nдля первого раза.",
    body: "Впервые в SAVVA? С этого проще всего начать: фирменный холодный напиток, кофе дня и две позиции, которые к ним подходят.",
  },
  menuSection: {
    eyebrow: "Полное меню",
    heading: "Всё, что мы подаём.",
    body: "Горячее, холодное, десерты и завтраки — полный список с ценами в SAR.",
  },
  food: {
    eyebrow: "Завтраки и десерты",
    heading: "Есть чем\nдополнить кофе.",
    body: "Сэндвичи готовят под заказ, десертов немного — ровно столько, чтобы кофе превратился в полноценную остановку.",
    combo: "Нормальный завтрак",
    comboBody: "Сэндвич и кофе дня — сочетание, которое SAVVA собирает для утра.",
    toCar: "Опаздываете?",
    toCarBody: "Кофе и завтрак вынесут прямо к машине — не придётся терять минуты.",
  },
  mood: {
    eyebrow: "Внутри",
    heading: "Зал,\nради которого приходят.",
    body: "Арочные окна, оливковый и кремовый, живые растения и много дневного света. Так SAVVA выглядит на самом деле.",
    captions: {
      lounge: "Лаунж-зона",
      counter: "У стойки",
      facade: "Бир Усман, вечером",
      tray: "Подают на подносе",
      table: "Столик на день",
      cold: "Холодные напитки в ряд",
    },
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
    heading: "Несколько секунд\nвнутри SAVVA.",
    body: "Настоящие ролики из ленты SAVVA. Наведите для превью, нажмите для просмотра.",
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
    heading: "Ваш столик\nв SAVVA.",
    body: "Бир Усман, Медина — удобная остановка для неспешной чашки в любое время дня.",
    addressLabel: "Адрес",
    phoneLabel: "Телефон",
    hoursLabel: "Часы работы",
    hoursValue: "Открыто ежедневно до глубокой ночи — точные часы смотрите в Google Maps",
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
