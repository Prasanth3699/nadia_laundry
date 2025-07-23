import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Language, BilingualText } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLocalizedText(
  text: BilingualText,
  language: Language
): string {
  return text[language] || text.en;
}

export function formatPrice(price: number, currency: string = "AED"): string {
  return `${price} ${currency}`;
}

export function formatPriceRange(
  min: number,
  max: number,
  currency: string = "AED"
): string {
  return `${min} - ${max} ${currency}`;
}

export function createWhatsAppUrl(
  phoneNumber: string,
  message: string
): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodedMessage}`;
}

export function scrollToSection(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function isValidPhoneNumber(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}

export function copyToClipboard(text: string): Promise<boolean> {
  return new Promise((resolve) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(text)
        .then(() => resolve(true))
        .catch(() => resolve(false));
    } else {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        textArea.remove();
        resolve(true);
      } catch (error) {
        textArea.remove();
        resolve(false);
      }
    }
  });
}

export function getBusinessHours(day: string): string {
  const hours: Record<string, string> = {
    sunday: "8:00 AM - 10:00 PM",
    monday: "8:00 AM - 10:00 PM",
    tuesday: "8:00 AM - 10:00 PM",
    wednesday: "8:00 AM - 10:00 PM",
    thursday: "8:00 AM - 10:00 PM",
    friday: "2:00 PM - 10:00 PM",
    saturday: "8:00 AM - 10:00 PM",
  };
  return hours[day.toLowerCase()] || "Closed";
}

export function isBusinessOpen(): boolean {
  const now = new Date();
  const day = now.toLocaleDateString("en-US", { weekday: "lowercase" });
  const currentTime = now.getHours() * 60 + now.getMinutes();

  const businessHours: Record<string, { open: number; close: number }> = {
    sunday: { open: 8 * 60, close: 22 * 60 },
    monday: { open: 8 * 60, close: 22 * 60 },
    tuesday: { open: 8 * 60, close: 22 * 60 },
    wednesday: { open: 8 * 60, close: 22 * 60 },
    thursday: { open: 8 * 60, close: 22 * 60 },
    friday: { open: 14 * 60, close: 22 * 60 },
    saturday: { open: 8 * 60, close: 22 * 60 },
  };

  const todayHours = businessHours[day];
  return (
    todayHours &&
    currentTime >= todayHours.open &&
    currentTime <= todayHours.close
  );
}

export function formatDate(date: Date, locale: Language = "en"): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const localeString = locale === "ar" ? "ar-AE" : "en-AE";
  return date.toLocaleDateString(localeString, options);
}

export function formatTime(date: Date, locale: Language = "en"): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const localeString = locale === "ar" ? "ar-AE" : "en-AE";
  return date.toLocaleTimeString(localeString, options);
}

export function getDistanceFromLatLonInKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return Math.round(d * 100) / 100;
}

function deg2rad(deg: number): number {
  return deg * (Math.PI / 180);
}
