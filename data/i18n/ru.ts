import type { Dictionary } from "./types";

// Russian translation of the English base copy — same facts, same claims,
// no additions. Menu item names are translated separately in data/menu.ts
// (nameRu); this file covers only the site's own marketing copy.
export const ru: Dictionary = {
  meta: { htmlLang: "ru", dir: "ltr" },
  nav: {
    menu: "Меню",
    experience: "О нас",
    visit: "Как найти",
    directions: "Маршрут",
    instagram: "Instagram",
  },
  hero: {
    locationTag: "Медина · Спешелти-кофе",
    tagline: "Один день в SAVVA —\nвсё, что нужно.",
    exploreMenu: "Смотреть меню",
    getDirections: "Проложить маршрут",
  },
  intro: {
    eyebrow: "SAVVA",
    heading: "Кофе.\nПространство.\nМедленные моменты.",
    body: "SAVVA построена вокруг простой идеи — кофе вкуснее, когда есть время не спешить. Натуральные материалы, тихий свет и аккуратные чашки создают пространство, в котором хочется задержаться, а не спешить дальше.",
  },
  selection: {
    eyebrow: "SAVVA Selection",
    heading: "Носят имя\nSAVVA.",
    spaceLabel: "Пространство",
  },
  menuSection: {
    eyebrow: "Меню",
    heading: "Что мы\nварим и подаём.",
  },
  pastry: {
    eyebrow: "Еда",
    heading: "Простая выпечка.\nСвоего производства.",
    body: "Небольшая сезонная подборка — чтобы было к чему подать неспешную чашку кофе.",
  },
  mood: {
    eyebrow: "Атмосфера",
    heading: "Пространство\nв деталях.",
  },
  experience: {
    eyebrow: "О нас",
    heading: "Три вещи,\nв которых мы уверены.",
    items: [
      { title: "Кофе", body: "Тщательно отобран, бережно приготовлен." },
      { title: "Еда", body: "Просто, вдумчиво, готовим сами." },
      { title: "Пространство", body: "Естественный свет, натуральные материалы, простор для дыхания." },
    ],
  },
  video: {
    eyebrow: "SAVVA в движении",
    heading: "Взгляд ближе,\nв движении.",
    body: "Несколько настоящих моментов из SAVVA — наведите, чтобы увидеть превью, нажмите, чтобы посмотреть.",
    play: "Смотреть",
    close: "Закрыть",
  },
  visit: {
    eyebrow: "Как найти",
    heading: "Найдите свой столик\nв SAVVA.",
    body: "Бир-Усман, Медина — удобно заглянуть на неспешную чашку в любое время дня.",
    addressLabel: "Адрес",
    phoneLabel: "Телефон",
    hoursLabel: "Часы работы",
    hoursValue: "Открыто ежедневно до поздней ночи — точные часы на сегодня смотрите в Google Картах",
    ratingOnGoogle: "в Google",
    readReviews: "Читать отзывы",
    getDirections: "Проложить маршрут",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
  },
  footer: {
    instagram: "Instagram",
    directions: "Маршрут",
    tagline: "Спешелти-кофе, Медина.",
  },
};
