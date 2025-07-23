"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { LanguageToggle } from "@/components/shared/language-toggle";
import { useLanguage } from "@/components/providers/language-provider";
import {
  scrollToSection,
  createWhatsAppUrl,
  getLocalizedText,
} from "@/lib/utils";
import companyData from "@/data/company.json";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, t } = useLanguage();
  const { company, whatsappConfig } = companyData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "nav.home", href: "#hero" },
    { key: "nav.services", href: "#services" },
    { key: "nav.about", href: "#about" },
    { key: "nav.contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith("#")) {
      // Check if we're on the home page
      if (window.location.pathname === "/") {
        scrollToSection(href.substring(1));
      } else {
        // Navigate to home page with the hash
        window.location.href = `/${href}`;
      }
    }
  };

  const handleBookNow = () => {
    const message = getLocalizedText(whatsappConfig.message, language);
    const whatsappUrl = createWhatsAppUrl(whatsappConfig.phoneNumber, message);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg"
          : "bg-white dark:bg-black"
      }`}
    >
      {/* Top Bar */}
      <div
        className={`border-b border-gray-200 dark:border-gray-700 ${
          isScrolled ? "hidden" : "block"
        } bg-gray-50 dark:bg-black`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Phone className="h-4 w-4" />
                <span>{company.contact.phone}</span>
              </div>
              <div className="hidden md:flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>
                  {getLocalizedText(company.location.address, language)}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 font-medium">25% OFF</span>
              <span className="text-gray-600 dark:text-gray-300">
                First Order
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105">
              <Image
                src="/images/logo/Nadia Laundry.png"
                alt="Nadia Laundry Logo"
                width={48}
                height={48}
                className="rounded-2xl object-contain"
                style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%" }}
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                {getLocalizedText(company.name, language)}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wide">
                Premium Laundry Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-emerald-500 font-medium transition-all duration-300 relative group py-2 px-1"
              >
                {t(item.key)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <LanguageToggle />
            </div>

            <Button
              onClick={handleBookNow}
              variant="brand"
              size="sm"
              className="hidden md:flex"
            >
              {t("nav.book")}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-black backdrop-blur-md border-t border-gray-200 dark:border-gray-700 shadow-xl">
            <div className="container-custom py-6">
              <div className="flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <button
                    key={item.key}
                    onClick={() => handleNavClick(item.href)}
                    className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-emerald-500 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-black/60 transition-all duration-300 animate-slide-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {t(item.key)}
                  </button>
                ))}
                
                {/* Theme and Language Controls */}
                <div className="flex items-center justify-between py-3 px-4 bg-gray-50 dark:bg-black/80 rounded-lg animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Settings</span>
                  <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <LanguageToggle />
                  </div>
                </div>
                
                <Button
                  onClick={handleBookNow}
                  variant="brand"
                  size="lg"
                  className="w-full mt-2 animate-slide-in-up"
                  style={{ animationDelay: '0.5s' }}
                >
                  {t("nav.book")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
