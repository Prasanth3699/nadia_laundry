"use client";

import { Star, ArrowRight, Truck, Clock, Shield } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/language-provider";
import {
  scrollToSection,
  createWhatsAppUrl,
  getLocalizedText,
} from "@/lib/utils";
import companyData from "@/data/company.json";

export function Hero() {
  const { language, t } = useLanguage();
  const { whatsappConfig } = companyData;

  const handleWhatsAppClick = () => {
    const message = getLocalizedText(whatsappConfig.message, language);
    const whatsappUrl = createWhatsAppUrl(whatsappConfig.phoneNumber, message);
    window.open(whatsappUrl, "_blank");
  };

  const handleBookService = () => {
    scrollToSection("contact");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero-bg.jpg"
        >
          <source src="/videos/laundry-hero.mp4" type="video/mp4" />
        </video>

        {/* Modern overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-[1px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center mt-10 gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8 border border-white/20"
          >
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-white font-medium text-sm tracking-wide">
              Premium Laundry Service
            </span>
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
          </motion.div>

          {/* Main Heading with selective word highlighting */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl mt-6 sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span>
              Professional{" "}
              <span className="text-sky-400 font-extrabold">Premium</span>{" "}
              Laundry &{" "}
              <span className="text-sky-400 font-extrabold">Dry Cleaning</span>{" "}
              Services in{" "}
              <span className="text-sky-400 font-extrabold">UAE</span>
            </span>
          </motion.h1>

          {/* Subtitle with better mobile spacing */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 font-medium max-w-3xl mx-auto"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>

          {/* CTA Buttons - iOS-inspired design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button
              onClick={handleBookService}
              className="btn-primary w-full flex text-center justify-center sm:w-auto px-8 py-4 text-lg font-semibold focus-ring"
            >
              {t("hero.cta.primary")}
              <ArrowRight className="ml-2 h-5 w-5 mt-2" />
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="btn-whatsapp w-full text-center justify-center sm:w-auto px-8 py-4 text-lg font-semibold focus-ring"
            >
              {t("hero.cta.whatsapp")}
              <FaWhatsapp className="ml-2 h-5 w-5" />
            </button>
          </motion.div>

          {/* Features with better mobile layout */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/10">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Truck className="h-5 w-5 text-blue-400" />
              </div>
              <div className="text-left">
                <span className="text-white font-semibold text-sm block">
                  Free Pickup & Delivery
                </span>
                <span className="text-white/70 text-xs">Same day service</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/10">
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Clock className="h-5 w-5 text-purple-400" />
              </div>
              <div className="text-left">
                <span className="text-white font-semibold text-sm block">
                  24/7 Service
                </span>
                <span className="text-white/70 text-xs">Always available</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/10 sm:col-span-2 md:col-span-1">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                <Shield className="h-5 w-5 text-green-400" />
              </div>
              <div className="text-left">
                <span className="text-white font-semibold text-sm block">
                  Premium Care
                </span>
                <span className="text-white/70 text-xs">Eco-friendly</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
