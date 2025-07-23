"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Language } from "@/types";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.book": "Book Now",

    // Hero Section
    "hero.title": "Premium Laundry Services in Abu Dhabi",
    "hero.subtitle": "Professional, Eco-friendly, and Convenient",
    "hero.description":
      "Experience the finest laundry and dry-cleaning services with same-day pickup and delivery anywhere in Abu Dhabi.",
    "hero.cta.primary": "Book Service",
    "hero.cta.secondary": "View Services",
    "hero.cta.whatsapp": "WhatsApp Us",

    // Services
    "services.title": "Our Premium Services",
    "services.subtitle": "Comprehensive laundry solutions for every need",
    "services.view.details": "View Details",
    "services.book.now": "Book Now",

    // Process
    "process.title": "How It Works",
    "process.subtitle": "Simple 4-step process for premium results",

    // About
    "about.title": "About Nadia Laundry",
    "about.subtitle": "Your trusted partner for premium laundry care",

    // Contact
    "contact.title": "Get In Touch",
    "contact.subtitle": "Ready to experience premium laundry care?",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.address": "Address",
    "contact.hours": "Business Hours",

    // Common
    "common.loading": "Loading...",
    "common.error": "Something went wrong",
    "common.success": "Success!",
    "common.call.now": "Call Now",
    "common.get.quote": "Get Quote",
    "common.learn.more": "Learn More",
    "common.read.more": "Read More",
    "common.show.less": "Show Less",

    // Footer
    "footer.description":
      "Premium laundry services with eco-friendly solutions and customer satisfaction.",
    "footer.quick.links": "Quick Links",
    "footer.services": "Services",
    "footer.contact.info": "Contact Info",
    "footer.follow.us": "Follow Us",
    "footer.copyright": "© 2025 Nadia Laundry. All rights reserved.",

    // Testimonials
    "testimonials.title": "What Our Customers Say",
    "testimonials.subtitle": "Real reviews from satisfied customers",

    // Special Offers
    "offers.title": "Special Offers",
    "offers.subtitle": "Limited time deals you don't want to miss",
    "offers.code": "Use Code",
    "offers.valid.until": "Valid Until",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.about": "عنا",
    "nav.contact": "اتصل بنا",
    "nav.book": "احجز الآن",

    // Hero Section
    "hero.title": "خدمات غسيل مميزة في أبوظبي",
    "hero.subtitle": "احترافية وصديقة للبيئة ومريحة",
    "hero.description":
      "استمتع بأفضل خدمات الغسيل والتنظيف الجاف مع الاستلام والتسليم في نفس اليوم في أي مكان في أبوظبي.",
    "hero.cta.primary": "احجز الخدمة",
    "hero.cta.secondary": "عرض الخدمات",
    "hero.cta.whatsapp": "واتساب",

    // Services
    "services.title": "خدماتنا المميزة",
    "services.subtitle": "حلول غسيل شاملة لكل احتياج",
    "services.view.details": "عرض التفاصيل",
    "services.book.now": "احجز الآن",

    // Process
    "process.title": "كيف يعمل",
    "process.subtitle": "عملية بسيطة من 4 خطوات للحصول على نتائج مميزة",

    // About
    "about.title": "عن غسيل ناديا",
    "about.subtitle": "شريكك الموثوق للعناية المميزة بالغسيل",

    // Contact
    "contact.title": "تواصل معنا",
    "contact.subtitle": "مستعد لتجربة العناية المميزة بالغسيل؟",
    "contact.phone": "الهاتف",
    "contact.email": "البريد الإلكتروني",
    "contact.address": "العنوان",
    "contact.hours": "ساعات العمل",

    // Common
    "common.loading": "جاري التحميل...",
    "common.error": "حدث خطأ ما",
    "common.success": "نجح!",
    "common.call.now": "اتصل الآن",
    "common.get.quote": "احصل على عرض",
    "common.learn.more": "اعرف المزيد",
    "common.read.more": "اقرأ المزيد",
    "common.show.less": "أظهر أقل",

    // Footer
    "footer.description": "خدمات غسيل مميزة مع حلول صديقة للبيئة ورضا العملاء.",
    "footer.quick.links": "روابط سريعة",
    "footer.services": "الخدمات",
    "footer.contact.info": "معلومات الاتصال",
    "footer.follow.us": "تابعنا",
    "footer.copyright": "© 2024 غسيل ناديا. جميع الحقوق محفوظة.",

    // Testimonials
    "testimonials.title": "ماذا يقول عملاؤنا",
    "testimonials.subtitle": "تقييمات حقيقية من عملاء راضين",

    // Special Offers
    "offers.title": "عروض خاصة",
    "offers.subtitle": "صفقات لفترة محدودة لا تريد أن تفوتها",
    "offers.code": "استخدم الكود",
    "offers.valid.until": "صالح حتى",
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div
        className={language === "ar" ? "text-arabic" : ""}
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
