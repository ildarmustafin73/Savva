// Official SAVVA menu — transcribed and visually verified against the
// restaurant's own PDF menu (received via the in-café QR code), page by
// page, cross-checking every name/price/calorie against the layout image
// (not just the PDF's internal text order, which does not match reading
// order). Source of truth: /منيو سافا .pdf (provided by the client).
//
// A few English names in the printed PDF appear to contain typos. Per the
// client's decision, the site shows the corrected spelling; the original
// PDF wording is kept in a comment on that item so nothing is silently lost.
//
// Calories are shown only where the PDF prints them — two items ("Coffee of
// the Day" and "V60 / Ice Drip") have no calorie figure in the source, so
// `calories` is left undefined rather than guessed.
//
// `nameRu` is a standard transliteration/translation of the drink or dish
// name for the Russian UI — not a separate official source, since SAVVA's
// menu has no Russian edition. No price, calorie, or ingredient claim is
// ever translated or altered — only the name.

export type MenuItem = {
  name: string;
  nameAr: string;
  nameRu: string;
  price: string; // SAR, formatted as printed (one item is a range)
  calories?: number;
};

export type MenuCategory = {
  id: string;
  label: string;
  labelAr: string;
  labelRu: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "hot-drinks",
    label: "Hot Drinks",
    labelAr: "المشروبات الحارة",
    labelRu: "Горячие напитки",
    items: [
      { name: "Espresso", nameAr: "إسبريسو", nameRu: "Эспрессо", price: "11", calories: 2 },
      { name: "Americano", nameAr: "أمريكانو", nameRu: "Американо", price: "12", calories: 2 },
      { name: "Cortado", nameAr: "كورتادو", nameRu: "Кортадо", price: "14", calories: 50 },
      { name: "Macchiato", nameAr: "ميكاتو", nameRu: "Макиато", price: "13", calories: 13 },
      // PDF prints "FLAT WAIT" — shown corrected as "Flat White".
      { name: "Flat White", nameAr: "فلات وايت", nameRu: "Флэт Уайт", price: "15", calories: 50 },
      { name: "Latte", nameAr: "لاتيه", nameRu: "Латте", price: "16", calories: 75 },
      { name: "Cappuccino", nameAr: "كابتشينو", nameRu: "Капучино", price: "16", calories: 60 },
      { name: "Spanish Latte", nameAr: "سبانش لاتيه", nameRu: "Спэниш Латте", price: "18", calories: 178 },
      { name: "Matcha Latte", nameAr: "ماتشا لاتيه", nameRu: "Матча Латте", price: "16", calories: 75 },
      // PDF prints "WAIT MOCAH" — shown corrected as "White Mocha".
      { name: "White Mocha", nameAr: "وايت موكا", nameRu: "Уайт Мокка", price: "16", calories: 230 },
      { name: "Hot Chocolate", nameAr: "هوت شوكليت", nameRu: "Горячий шоколад", price: "15", calories: 237 },
      { name: "English Tea", nameAr: "شاي انجليزي", nameRu: "Английский чай", price: "6", calories: 2 },
      { name: "Turkish Coffee", nameAr: "تركي سادة", nameRu: "Турецкий кофе", price: "11", calories: 50 },
      {
        name: "Turkish Coffee with Milk",
        nameAr: "تركي حليب",
        nameRu: "Турецкий кофе с молоком",
        price: "13",
        calories: 50,
      },
      {
        name: "Coffee of the Day (Hot / Ice)",
        nameAr: "قهوة اليوم بارد / حار",
        nameRu: "Кофе дня (горячий / холодный)",
        price: "10–13",
      },
      { name: "V60 / Ice Drip", nameAr: "قهوة المقطرة", nameRu: "V60 / Айс-дрип", price: "18" },
    ],
  },
  {
    id: "cold-drinks",
    label: "Cold Drinks",
    labelAr: "المشروبات الباردة",
    labelRu: "Холодные напитки",
    items: [
      { name: "Iced Americano", nameAr: "ايس أمريكانو", nameRu: "Айс Американо", price: "15", calories: 2 },
      { name: "Alfredo", nameAr: "ألفريدو", nameRu: "Альфредо", price: "14", calories: 100 },
      { name: "Iced Latte", nameAr: "ايس لاتيه", nameRu: "Айс Латте", price: "17", calories: 100 },
      {
        name: "Iced Spanish Latte",
        nameAr: "ايس سبانيش لاتيه",
        nameRu: "Айс Спэниш Латте",
        price: "19",
        calories: 230,
      },
      {
        name: "Iced Matcha Latte",
        nameAr: "ايس ماتشا لاتيه",
        nameRu: "Айс Матча Латте",
        price: "17",
        calories: 130,
      },
      {
        name: "Iced Matcha Spanish Latte",
        nameAr: "ايس ماتشا سبانيش لاتيه",
        nameRu: "Айс Матча Спэниш Латте",
        price: "19",
        calories: 230,
      },
      { name: "SAVVA Matcha", nameAr: "سافا ماتشا", nameRu: "SAVVA Матча", price: "22", calories: 2 },
      { name: "Matcha Berry", nameAr: "ماتشا بيري", nameRu: "Матча Берри", price: "24", calories: 230 },
      { name: "Ice Tea SAVVA", nameAr: "ايس تي سافا", nameRu: "Айс Ти SAVVA", price: "17", calories: 189 },
      {
        name: "Ice Hibiscus SAVVA",
        nameAr: "ايس كركديه سافا",
        nameRu: "Айс Каркаде SAVVA",
        price: "17",
        calories: 180,
      },
      {
        name: "Hibiscus Slush SAVVA",
        nameAr: "سلاش كركديه سافا",
        nameRu: "Слаш Каркаде SAVVA",
        price: "17",
        calories: 180,
      },
      { name: "Ice Shaken", nameAr: "ايس شيكن", nameRu: "Айс Шейкен", price: "20", calories: 231 },
      // PDF prints "ICE WAIT MOCHA" — shown corrected as "Ice White Mocha".
      {
        name: "Ice White Mocha",
        nameAr: "ايس وايت موكا",
        nameRu: "Айс Уайт Мокка",
        price: "19",
        calories: 230,
      },
      { name: "Ice Chocolate", nameAr: "ايس شوكلت", nameRu: "Айс Шоколад", price: "17", calories: 230 },
      { name: "SAVVA Melon", nameAr: "شمام سافا", nameRu: "SAVVA Дыня", price: "16", calories: 50 },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    labelAr: "الحلى",
    labelRu: "Десерты",
    items: [
      { name: "Madini Cookies", nameAr: "مديني كوكيز", nameRu: "Мадини Куки", price: "12", calories: 170 },
      {
        name: "Cinnamon Danish",
        nameAr: "دانيش سينابون",
        nameRu: "Датская выпечка с корицей",
        price: "19",
        calories: 170,
      },
      { name: "Marble Cake", nameAr: "ماربل كيك", nameRu: "Мраморный кекс", price: "11", calories: 170 },
      {
        name: "Crunchy Chocolate",
        nameAr: "كرانشي شوكلت",
        nameRu: "Хрустящий шоколад",
        price: "8",
        calories: 170,
      },
      // PDF prints "CHEEESECAKE" — shown corrected as "Cheesecake".
      {
        name: "Blueberry Cheesecake",
        nameAr: "تشيز كيك بلوبيري",
        nameRu: "Чизкейк с черникой",
        price: "27",
        calories: 170,
      },
      { name: "Pecan Cake", nameAr: "كيكة البيكان", nameRu: "Кекс с пеканом", price: "21", calories: 170 },
      {
        name: "Chocolate Cake",
        nameAr: "كيكة شوكلت",
        nameRu: "Шоколадный кекс",
        price: "18",
        calories: 170,
      },
    ],
  },
  {
    id: "breakfast",
    label: "Breakfast",
    labelAr: "الفطور",
    labelRu: "Завтрак",
    items: [
      {
        name: "Turkey Sandwich",
        nameAr: "ساندوتش تركي",
        nameRu: "Сэндвич с индейкой",
        price: "19",
        calories: 300,
      },
      {
        name: "Halloumi Sandwich",
        nameAr: "ساندوتش حلوم",
        nameRu: "Сэндвич с халуми",
        price: "18",
        calories: 300,
      },
    ],
  },
];

// Items that carry the SAVVA name directly — used for the "SAVVA Selection"
// showcase. Google's own "popular" tags and star ratings are deliberately
// not used anywhere on the site (unverifiable / against house style).
export const savvaSelectionIds = [
  "SAVVA Matcha",
  "Ice Tea SAVVA",
  "Ice Hibiscus SAVVA",
  "Hibiscus Slush SAVVA",
  "SAVVA Melon",
];
