import { Metadata } from "next";
import servicesData from "@/data/services.json";
import companyData from "@/data/company.json";
import coverageData from "@/data/coverage.json";

export const metadata: Metadata = {
  title: "Premium Laundry Services in Abu Dhabi | Nadia Laundry",
  description: "Professional laundry and dry cleaning services in Abu Dhabi. Expert care for all garments with same-day pickup & delivery. 10+ services, 20+ locations covered.",
  keywords: [
    "laundry services Abu Dhabi",
    "dry cleaning UAE",
    "premium laundry",
    "washing pressing Dubai",
    "steam ironing service",
    "delicate wash cycle",
    "carpet cleaning Abu Dhabi",
    "curtain cleaning service",
    "baby stroller cleaning",
    "shoe cleaning Dubai",
    "alteration services UAE",
    "pickup delivery laundry",
    "professional garment care",
    "eco-friendly dry cleaning"
  ],
  openGraph: {
    title: "Premium Laundry Services in Abu Dhabi | Nadia Laundry",
    description: "Professional laundry and dry cleaning services with same-day pickup & delivery across Abu Dhabi. Expert care for all garments.",
    type: "website",
    url: "https://nadialaundry.com/services",
    images: [
      {
        url: "/images/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Nadia Laundry Premium Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Laundry Services Abu Dhabi",
    description: "Professional laundry & dry cleaning with pickup/delivery across 20+ locations in Abu Dhabi",
    images: ["/images/og-services.jpg"]
  },
  alternates: {
    canonical: "https://nadialaundry.com/services"
  }
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD Structured Data for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Nadia Laundry",
            "description": "Premium laundry and dry cleaning services in Abu Dhabi",
            "url": "https://nadialaundry.com/services",
            "telephone": companyData.company.contact.phone,
            "email": companyData.company.contact.email,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Abu Dhabi Musaffah 16 & Corniche Road",
              "addressLocality": "Abu Dhabi",
              "addressCountry": "AE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": companyData.company.location.coordinates.lat,
              "longitude": companyData.company.location.coordinates.lng
            },
            "openingHours": [
              "Mo-Su 08:00-23:30"
            ],
            "priceRange": "$$",
            "areaServed": coverageData.areas.map(area => ({
              "@type": "City",
              "name": area
            })),
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Laundry Services",
              "itemListElement": servicesData.services.map((service, index) => ({
                "@type": "Offer",
                "position": index + 1,
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title.en,
                  "description": service.description.en,
                  "provider": {
                    "@type": "LocalBusiness",
                    "name": "Nadia Laundry"
                  },
                  "areaServed": coverageData.areas,
                  "availableChannel": {
                    "@type": "ServiceChannel",
                    "serviceType": "Pickup and Delivery",
                    "availableLanguage": ["en", "ar"]
                  }
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "minPrice": service.priceRange.min,
                  "maxPrice": service.priceRange.max,
                  "priceCurrency": service.priceRange.currency
                },
                "deliveryTime": service.duration
              }))
            },
            "sameAs": [
              "https://www.facebook.com/nadialaundry",
              "https://www.instagram.com/nadialaundry",
              "https://twitter.com/nadialaundry"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "150",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }}
      />
      
      {/* Service Specific Schema for each service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Laundry Services",
            "description": "Complete list of premium laundry services offered by Nadia Laundry",
            "numberOfItems": servicesData.services.length,
            "itemListElement": servicesData.services.map((service, index) => ({
              "@type": "Service",
              "position": index + 1,
              "name": service.title.en,
              "description": service.description.en,
              "image": service.images[0],
              "provider": {
                "@type": "LocalBusiness",
                "name": "Nadia Laundry",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Abu Dhabi",
                  "addressCountry": "AE"
                }
              },
              "offers": {
                "@type": "Offer",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "minPrice": service.priceRange.min,
                  "maxPrice": service.priceRange.max,
                  "priceCurrency": service.priceRange.currency
                },
                "availability": "https://schema.org/InStock",
                "deliveryLeadTime": {
                  "@type": "QuantitativeValue",
                  "value": service.duration
                }
              },
              "areaServed": coverageData.areas.map(area => ({
                "@type": "City", 
                "name": area
              })),
              "serviceType": "Laundry and Dry Cleaning",
              "category": "Professional Services"
            }))
          })
        }}
      />

      {children}
    </>
  );
}