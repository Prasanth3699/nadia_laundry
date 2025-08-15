"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, MapPin, Sparkles, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { LanguageToggle } from "@/components/shared/language-toggle";
import { useLanguage } from "@/components/providers/language-provider";
import {
  scrollToSection,
  createWhatsAppUrl,
  getLocalizedText,
} from "@/lib/utils";
import companyData from "@/data/company.json";
import { FaWhatsapp } from "react-icons/fa";

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
      const sectionId = href.substring(1);
      // Check if we're on the home page
      if (window.location.pathname === "/") {
        // Add a small delay to ensure mobile menu closes before scrolling
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);
      } else {
        // Navigate to home page with hash, avoiding trailing slash
        window.location.href = `${window.location.origin}${href}`;
      }
    }
  };

  const handleBookNow = () => {
    const message = getLocalizedText(whatsappConfig.message, language);
    const whatsappUrl = createWhatsAppUrl(whatsappConfig.phoneNumber, message);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl border-b border-gray-200/50 dark:border-gray-700/50"
          : "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm"
      }`}
    >
      {/* Animated Top Bar */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-b border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-blue-950/20 dark:to-purple-950/20 overflow-hidden"
          >
            <div className="container-custom">
              <div className="flex items-center justify-between py-2 sm:py-3 text-xs sm:text-sm">
                <div className="flex items-center gap-3 sm:gap-6">
                  <motion.div 
                    className="flex items-center gap-1 sm:gap-2 text-gray-700 dark:text-gray-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <a 
                      href={`tel:${company.contact.phone}`}
                      className="font-semibold hover:text-green-600 dark:hover:text-green-400 transition-colors text-xs sm:text-sm"
                    >
                      {company.contact.phone}
                    </a>
                  </motion.div>
                  
                  <div className="hidden lg:flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="font-medium">
                      {getLocalizedText(company.location.address, language)}
                    </span>
                  </div>
                </div>

                <motion.div 
                  className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 px-2 sm:px-4 py-1 sm:py-2 rounded-full border border-yellow-400/30"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-600 dark:text-yellow-400 fill-current" />
                  <span className="font-bold text-yellow-700 dark:text-yellow-400 text-xs sm:text-sm">25% OFF</span>
                  <span className="text-gray-700 dark:text-gray-300 font-semibold text-xs sm:text-sm hidden sm:inline">First Order</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navigation */}
      <nav className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Image
                  src="/images/logo/Nadia Laundry.png"
                  alt="Nadia Laundry Logo"
                  width={48}
                  height={48}
                  className="rounded-2xl object-contain transition-all duration-300 group-hover:scale-110"
                  priority
                />
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 font-heading tracking-tight">
                  {getLocalizedText(company.name, language)}
                </span>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold tracking-wider uppercase">
                  Premium Laundry
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className="relative text-gray-700 dark:text-gray-300 font-semibold font-heading tracking-tight transition-all duration-300 py-2 px-4 rounded-xl hover:bg-gray-100/80 dark:hover:bg-gray-800/50 group"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <span className="relative z-10 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {t(item.key)}
                </span>
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"
                  layoutId="navbar-indicator"
                />
              </motion.button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Desktop Controls */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-2 p-2 bg-gray-100/80 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
                <ThemeToggle />
                <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />
                <LanguageToggle />
              </div>
              
              <motion.button
                onClick={handleBookNow}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-2.5 rounded-xl font-bold font-heading tracking-tight transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="h-4 w-4" />
                Book Now
              </motion.button>
            </div>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center gap-2">
              <LanguageToggle />
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative w-10 h-10 bg-gray-100/80 dark:bg-gray-800/50 rounded-xl flex items-center justify-center backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? (
                    <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  ) : (
                    <Menu className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Modern Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:hidden overflow-hidden border-t border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-br from-white/95 to-gray-50/95 dark:from-gray-900/95 dark:to-gray-800/95 backdrop-blur-xl"
            >
              <div className="py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.key}
                    onClick={() => handleNavClick(item.href)}
                    className="w-full text-left py-4 px-6 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold font-heading tracking-tight rounded-xl hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 dark:hover:from-blue-950/20 dark:hover:to-purple-950/20 transition-all duration-300 flex items-center gap-3 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-2 h-2 bg-gray-400 rounded-full group-hover:bg-blue-500 transition-colors duration-300" />
                    {t(item.key)}
                  </motion.button>
                ))}

                {/* Mobile Controls Section */}
                <motion.div
                  className="p-6 bg-gradient-to-r from-gray-100/50 to-gray-50/50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-xl mx-2 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-700 dark:text-gray-300 font-semibold font-heading">
                      Settings
                    </span>
                    <ThemeToggle />
                  </div>

                  <motion.button
                    onClick={handleBookNow}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 rounded-xl font-bold font-heading tracking-tight transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaWhatsapp className="h-5 w-5" />
                    Book via WhatsApp
                    <Sparkles className="h-4 w-4" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
