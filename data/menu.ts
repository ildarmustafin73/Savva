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

export type MenuItem = {
  name: string;
  nameAr: string;
  price: string; // SAR, formatted as printed (one item is a range)
  calories?: number;
};

export type MenuCategory = {
  id: string;
  label: string;
  labelAr: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "hot-drinks",
    label: "Hot Drinks",
    labelAr: "المشروبات الحارة",
    items: [
      { name: "Espresso", nameAr: "إسبريسو", price: "11", calories: 2 },
      { name: "Americano", nameAr: "أمريكانو", price: "12", calories: 2 },
      { name: "Cortado", nameAr: "كورتادو", price: "14", calories: 50 },
      { name: "Macchiato", nameAr: "ميكاتو", price: "13", calories: 13 },
      // PDF prints "FLAT WAIT" — shown corrected as "Flat White".
      { name: "Flat White", nameAr: "فلات وايت", price: "15", calories: 50 },
      { name: "Latte", nameAr: "لاتيه", price: "16", calories: 75 },
      { name: "Cappuccino", nameAr: "كابتشينو", price: "16", calories: 60 },
      { name: "Spanish Latte", nameAr: "سبانش لاتيه", price: "18", calories: 178 },
      { name: "Matcha Latte", nameAr: "ماتشا لاتيه", price: "16", calories: 75 },
      // PDF prints "WAIT MOCAH" — shown corrected as "White Mocha".
      { name: "White Mocha", nameAr: "وايت موكا", price: "16", calories: 230 },
      { name: "Hot Chocolate", nameAr: "هوت شوكليت", price: "15", calories: 237 },
      { name: "English Tea", nameAr: "شاي انجليزي", price: "6", calories: 2 },
      { name: "Turkish Coffee", nameAr: "تركي سادة", price: "11", calories: 50 },
      { name: "Turkish Coffee with Milk", nameAr: "تركي حليب", price: "13", calories: 50 },
      { name: "Coffee of the Day (Hot / Ice)", nameAr: "قهوة اليوم بارد / حار", price: "10–13" },
      { name: "V60 / Ice Drip", nameAr: "قهوة المقطرة", price: "18" },
    ],
  },
  {
    id: "cold-drinks",
    label: "Cold Drinks",
    labelAr: "المشروبات الباردة",
    items: [
      { name: "Iced Americano", nameAr: "ايس أمريكانو", price: "15", calories: 2 },
      { name: "Alfredo", nameAr: "ألفريدو", price: "14", calories: 100 },
      { name: "Iced Latte", nameAr: "ايس لاتيه", price: "17", calories: 100 },
      { name: "Iced Spanish Latte", nameAr: "ايس سبانيش لاتيه", price: "19", calories: 230 },
      { name: "Iced Matcha Latte", nameAr: "ايس ماتشا لاتيه", price: "17", calories: 130 },
      { name: "Iced Matcha Spanish Latte", nameAr: "ايس ماتشا سبانيش لاتيه", price: "19", calories: 230 },
      { name: "SAVVA Matcha", nameAr: "سافا ماتشا", price: "22", calories: 2 },
      { name: "Matcha Berry", nameAr: "ماتشا بيري", price: "24", calories: 230 },
      { name: "Ice Tea SAVVA", nameAr: "ايس تي سافا", price: "17", calories: 189 },
      { name: "Ice Hibiscus SAVVA", nameAr: "ايس كركديه سافا", price: "17", calories: 180 },
      { name: "Hibiscus Slush SAVVA", nameAr: "سلاش كركديه سافا", price: "17", calories: 180 },
      { name: "Ice Shaken", nameAr: "ايس شيكن", price: "20", calories: 231 },
      // PDF prints "ICE WAIT MOCHA" — shown corrected as "Ice White Mocha".
      { name: "Ice White Mocha", nameAr: "ايس وايت موكا", price: "19", calories: 230 },
      { name: "Ice Chocolate", nameAr: "ايس شوكلت", price: "17", calories: 230 },
      { name: "SAVVA Melon", nameAr: "شمام سافا", price: "16", calories: 50 },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    labelAr: "الحلى",
    items: [
      { name: "Madini Cookies", nameAr: "مديني كوكيز", price: "12", calories: 170 },
      { name: "Cinnamon Danish", nameAr: "دانيش سينابون", price: "19", calories: 170 },
      { name: "Marble Cake", nameAr: "ماربل كيك", price: "11", calories: 170 },
      { name: "Crunchy Chocolate", nameAr: "كرانشي شوكلت", price: "8", calories: 170 },
      // PDF prints "CHEEESECAKE" — shown corrected as "Cheesecake".
      { name: "Blueberry Cheesecake", nameAr: "تشيز كيك بلوبيري", price: "27", calories: 170 },
      { name: "Pecan Cake", nameAr: "كيكة البيكان", price: "21", calories: 170 },
      { name: "Chocolate Cake", nameAr: "كيكة شوكلت", price: "18", calories: 170 },
    ],
  },
  {
    id: "breakfast",
    label: "Breakfast",
    labelAr: "الفطور",
    items: [
      { name: "Turkey Sandwich", nameAr: "ساندوتش تركي", price: "19", calories: 300 },
      { name: "Halloumi Sandwich", nameAr: "ساندوتش حلوم", price: "18", calories: 300 },
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
