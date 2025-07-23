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
  metadataBase: new URL("https://nadialaundry.com"),
  title: {
    default: "Nadia Laundry - Premium Laundry & Dry Cleaning Services in UAE",
    template: "%s | Nadia Laundry",
  },
  description:
    " Premium laundry & dry-cleaning services in Abu Dhabi, UAE. Same-day pickup & delivery, eco-friendly solutions, 24/7 service. Professional garment care with modern technology. Call +9710503837591",
  keywords: [
    "laundry service Abu Dhabi",
    "dry cleaning UAE",
    "premium laundry",
    "pickup delivery laundry",
    "eco-friendly dry cleaning",
    "professional cleaning UAE",
    "same day laundry service",
    "24/7 laundry pickup",
    "garment care Abu Dhabi",
    "clothes cleaning service",
    "industrial laundry UAE",
    "hotel laundry service",
    "commercial cleaning",
    "express laundry",
    "nadia laundry",
  ],
  authors: [{ name: "Nadia Laundry", url: "https://nadialaundry.com" }],
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
    url: "https://nadialaundry.com",
    siteName: "Nadia Laundry",
    title: "Nadia Laundry - Premium Laundry Services in UAE",
    description:
      "Experience premium laundry & dry-cleaning in Abu Dhabi. Same-day pickup & delivery, eco-friendly solutions, professional garment care. Book now!",
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
    site: "@nadialaundry",
    creator: "@nadialaundry",
    title: "Nadia Laundry - Premium Laundry Services UAE",
    description:
      "Same-day pickup & delivery • Eco-friendly solutions • Professional care • Abu Dhabi, UAE",
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
    canonical: "https://nadialaundry.com",
    languages: {
      "en-AE": "https://nadialaundry.com",
      "ar-AE": "https://nadialaundry.com/ar",
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
        {/* Favicons and icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/logo/Nadia Laundry.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/logo/Nadia Laundry.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/logo/Nadia Laundry.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logo/Nadia Laundry.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileImage" content="/images/logo/Nadia Laundry.png" />
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
              email: "info@nadialaundry.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sheikh Zayed Road, Dubai Marina",
                addressLocality: "Abu Dhabi",
                addressCountry: "AE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 24.4539,
                longitude: 54.3773,
              },
              url: "https://nadialaundry.com",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
