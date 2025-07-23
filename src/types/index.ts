export interface BilingualText {
  en: string;
  ar: string;
}

export interface Service {
  id: string;
  title: BilingualText;
  description: BilingualText;
  priceRange: {
    min: number;
    max: number;
    currency: string;
  };
  duration: string;
  icon: string;
  images: string[];
  features: string[];
  process: ProcessStep[];
}

export interface ProcessStep {
  step: number;
  title: BilingualText;
  description: BilingualText;
  icon: string;
}

export interface WhatsAppConfig {
  phoneNumber: string;
  message: BilingualText;
  position: "bottom-right";
  themeColor: string;
}

export interface CompanyInfo {
  name: BilingualText;
  mission: BilingualText;
  vision: BilingualText;
  description: BilingualText;
  location: {
    address: BilingualText;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  contact: {
    phone: string;
    email: string;
    whatsapp: string;
  };
  hours: {
    [key: string]: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  review: BilingualText;
  location: string;
  avatar?: string;
}

export type Language = "en" | "ar";
