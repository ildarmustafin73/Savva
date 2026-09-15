import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import { siteUrl, visit } from "@/data/content";

// Display face with real character — deliberately not Fraunces/Playfair/
// Cormorant/Lora/Syne/Space Grotesk etc. (the training-data default cluster
// for "premium editorial"). Bricolage Grotesque has enough personality to
// hold large headlines with authority without borrowing a stock serif mood.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

// Clean, warm sans-serif for UI and body copy.
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

// Dedicated Arabic typeface for visual accents (calligraphic, editorial feel).
const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "SAVVA Cafe",
  description:
    "SAVVA — specialty coffee in Madinah. Coffee, space, and slow moments.",
  openGraph: {
    title: "SAVVA Cafe",
    description:
      "SAVVA — specialty coffee in Madinah. Coffee, space, and slow moments.",
    url: siteUrl,
    siteName: "SAVVA Cafe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAVVA Cafe",
    description: "SAVVA — specialty coffee in Madinah.",
  },
  alternates: {
    canonical: siteUrl, // TODO: replace with official production domain
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Address/phone verified directly against SAVVA's official Google Maps
// listing (see data/content.ts). Full weekly opening hours are deliberately
// left out — Maps only ever exposed a same-day snapshot, not a real
// schedule, and that isn't reliable enough to publish as structured data.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "SAVVA Cafe",
  url: siteUrl,
  telephone: visit.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Zubairah Al Roumiah, Bir Uthman",
    addressLocality: "Madinah",
    postalCode: "42331",
    addressCountry: "SA",
  },
  // Read directly from the official Google Maps listing on 2026-09-14 —
  // not carried over from any third-party site.
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: visit.rating,
    reviewCount: visit.reviewCount,
  },
  sameAs: ["https://www.instagram.com/savva_cafe"],
};

// Runs before hydration so a stored Arabic preference doesn't paint one
// English-LTR frame first. Mirrors the storage key LocaleProvider reads.
//
// It deliberately writes only `data-locale`, never `lang`/`dir`: those two are
// rendered by React on <html>, and mutating them before hydration makes React
// report a prop mismatch it cannot be told to ignore here. Direction is applied
// from data-locale in globals.css instead, and LocaleProvider sets the real
// lang/dir attributes once hydrated — after the point React compares them.
const noFlashLocaleScript = `
(function () {
  try {
    var v = localStorage.getItem("savva-locale");
    if (v === "ar" || v === "ru" || v === "en") {
      document.documentElement.setAttribute("data-locale", v);
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // noFlashLocaleScript sets data-locale on this element before React
    // hydrates. suppressHydrationWarning covers this element's own attributes
    // (and nothing below it), which is exactly the intended scope.
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${bricolage.variable} ${manrope.variable} ${notoNaskhArabic.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script dangerouslySetInnerHTML={{ __html: noFlashLocaleScript }} />
      </head>
      <body className="font-sans antialiased">
        <LocaleProvider>
          <MotionProvider>{children}</MotionProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
