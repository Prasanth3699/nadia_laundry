import type { Metadata } from "next";
import {
  Inter,
  Cairo,
  Crimson_Pro,
  Playfair_Display,
  Poppins,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LanguageProvider } from "@/components/providers/language-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson-pro",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nadiadrycleaning.com"),
  title: {
    default:
      "Nadia Laundry - Best Laundry & Dry Cleaning Services Abu Dhabi UAE",
    template: "%s | Nadia Laundry",
  },
  description:
    "Best Laundry Service in Abu Dhabi UAE. Same-day pickup & delivery, eco-friendly dry cleaning, 24/7 service, free collection, professional garment care. Call +971050483759",
  keywords: [
    // Primary UAE Laundry Keywords
    "best laundry service Abu Dhabi",
    "laundry near me Abu Dhabi",
    "dry cleaning Abu Dhabi UAE",
    "laundry pickup delivery UAE",
    "cheap laundry service Abu Dhabi",
    "professional laundry Abu Dhabi",
    "same day laundry Abu Dhabi",
    "24 hour laundry service UAE",
    "eco friendly dry cleaning UAE",
    "premium laundry Abu Dhabi",
    // Local Area Keywords
    "laundry service Musaffah",
    "dry cleaning Corniche Abu Dhabi",
    "laundry Khalifa City",
    "cleaning service Al Reem Island",
    "laundry Marina Mall area",
    "dry cleaning Yas Island",
    "laundry service Saadiyat Island",
    // Service-Specific Keywords
    "carpet cleaning Abu Dhabi",
    "curtain cleaning UAE",
    "baby stroller cleaning",
    "shoe cleaning Abu Dhabi",
    "alteration services UAE",
    "steam ironing Abu Dhabi",
    "delicate wash Abu Dhabi",
    // Commercial Keywords
    "hotel laundry service UAE",
    "restaurant laundry Abu Dhabi",
    "commercial cleaning UAE",
    "bulk laundry service",
    "office cleaning Abu Dhabi",
    // Competitor Keywords
    "better than speed wash",
    "alternative to pressto",
    "best laundry UAE 2025",
    "nadia laundry Abu Dhabi",
  ],
  authors: [{ name: "Nadia Laundry", url: "https://www.nadiadrycleaning.com" }],
  creator: "Nadia Laundry",
  publisher: "Nadia Laundry",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://www.nadiadrycleaning.com",
    siteName: "Nadia Laundry - Best Laundry Abu Dhabi",
    title: "Best Laundry Service Abu Dhabi UAE | Same Day Pickup & Delivery",
    description:
      "Top-rated laundry & dry cleaning in Abu Dhabi. FREE pickup & delivery, same-day service, eco-friendly, 4.9 star rating. Book now +971050483759",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nadia Laundry - Premium Laundry Services in UAE",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nadiya54425",
    creator: "@nadiya54425",
    title: "Best Laundry Service Abu Dhabi UAE - Nadia Laundry",
    description:
      "Same-day pickup & delivery | Eco-friendly solutions | Professional care | Abu Dhabi, UAE | Call +971050483759",
    images: [
      {
        url: "/images/og-image.jpg",
        alt: "Nadia Laundry Premium Services",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index,follow",
  },
  verification: {
    google: "your-google-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  alternates: {
    canonical: "https://www.nadiadrycleaning.com",
    languages: {
      "en-AE": "https://www.nadiadrycleaning.com",
      "ar-AE": "https://www.nadiadrycleaning.com/ar",
    },
  },
  category: "business",
  classification: "Professional Laundry Services",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Nadia Laundry",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicons and icons - favicon.ico is automatically handled by Next.js from src/app/ */}
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/logo/Nadia Laundry.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/logo/Nadia Laundry.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/images/logo/Nadia Laundry.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/logo/Nadia Laundry.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="msapplication-TileImage"
          content="/images/logo/Nadia Laundry.png"
        />
        <meta name="msapplication-TileColor" content="#3b82f6" />

        {/* Theme colors for mobile */}
        <meta
          name="theme-color"
          content="#3b82f6"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: dark)"
        />

        {/* Mobile optimization */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Nadia Laundry" />

        {/* Performance hints */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Nadia Laundry",
              description:
                "Premium laundry and dry-cleaning services in Abu Dhabi, UAE",
              image: "/images/logo/Nadia Laundry.png",
              telephone: "+9710503837591",
              email: "info@nadiadrycleaning.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Abu Dhabi musaffa 16 & Cornich road",
                addressLocality: "Abu Dhabi",
                addressCountry: "AE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 24.4539,
                longitude: 54.3773,
              },
              url: "https://www.nadiadrycleaning.com",
              priceRange: "$$",
              openingHours: [
                "Mo-Th 08:00-22:00",
                "Fr 14:00-22:00",
                "Sa-Su 08:00-22:00",
              ],
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 24.4539,
                  longitude: 54.3773,
                },
                geoRadius: 50000,
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Laundry Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Premium Laundry Service",
                      description:
                        "Professional washing and care for your garments",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Dry Cleaning Service",
                      description:
                        "Specialized dry cleaning for delicate fabrics",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${cairo.variable} ${crimsonPro.variable} ${playfairDisplay.variable} ${poppins.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
