"use client";

import {
  Star,
  ArrowRight,
  Truck,
  Clock,
  Shield,
  Award,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/language-provider";
import {
  scrollToSection,
  createWhatsAppUrl,
  getLocalizedText,
} from "@/lib/utils";
import companyData from "@/data/company.json";

const stats = [
  { number: "1000+", label: "Happy Customers", icon: Award },
  { number: "20+", label: "Service Areas", icon: Truck },
  { number: "24/7", label: "Available", icon: Clock },
  { number: "4.9", label: "Rating", icon: Star },
];

const features = [
  {
    icon: Truck,
    title: "Free Pickup & Delivery",
    subtitle: "Same day service",
    gradient: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Clock,
    title: "Express Service",
    subtitle: "24-72 hours",
    gradient: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-600",
  },
  {
    icon: Shield,
    title: "Premium Care",
    subtitle: "Eco-friendly",
    gradient: "from-green-500 to-green-600",
    bgColor: "bg-green-500/10",
    iconColor: "text-green-600",
  },
  {
    icon: Award,
    title: "Professional Service",
    subtitle: "Expert team",
    gradient: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-600",
  },
];

export function Hero() {
  const { language } = useLanguage();
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-black dark:to-gray-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-3xl opacity-20"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-3xl opacity-20"
        />

        {/* Floating Icons */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [-20, -100],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut",
            }}
            className={`absolute w-8 h-8 ${
              i % 4 === 0
                ? "bottom-0 left-1/4"
                : i % 4 === 1
                ? "bottom-0 left-1/2"
                : i % 4 === 2
                ? "bottom-0 left-3/4"
                : "bottom-0 left-1/3"
            }`}
          >
            <Sparkles className="w-full h-full text-blue-500/40" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center pt-24 sm:pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mt-20 sm:mt-20 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 backdrop-blur-sm rounded-full px-3 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-blue-200 dark:border-blue-700/50 shadow-lg"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-current" />
            </motion.div>
            <span className="text-blue-800 dark:text-blue-200 font-semibold text-xs sm:text-sm tracking-wide text-center leading-tight">
              #1 Premium Laundry Service in Abu Dhabi
            </span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: 0.5,
              }}
            >
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-current" />
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight font-heading tracking-tight"
          >
            <span className="text-gray-900 dark:text-white font-extrabold">
              Premium{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent font-black">
              Laundry Services
            </span>
            <br className="hidden sm:block" />
            <span className="text-gray-700 dark:text-gray-300 text-xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold font-display italic">
              {" "}in Abu Dhabi
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-semibold max-w-3xl mx-auto font-heading tracking-wide"
          >
            Professional • Eco-Friendly • Convenient
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Experience the finest laundry and dry-cleaning services with
            same-day pickup and delivery anywhere in Abu Dhabi. Professional
            care for all your garments.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              onClick={handleBookService}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg font-heading tracking-tight transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Book Service Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.button>

            <motion.button
              onClick={handleWhatsAppClick}
              className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg font-heading tracking-tight transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center justify-center gap-2">
                <FaWhatsapp className="h-5 w-5" />
                WhatsApp Us
              </span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="group relative bg-white/95 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Gradient Background on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}
                    initial={false}
                  />

                  {/* Enhanced Border Glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-sm transition-opacity duration-500 -z-10`}
                    initial={false}
                  />

                  {/* Content - Better Aligned Layout */}
                  <div className="relative z-10 text-center">
                    {/* Icon at Top Center */}
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className="h-10 w-10 text-white drop-shadow-lg" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-800 dark:group-hover:text-white transition-colors font-heading tracking-tight text-xl">
                      {feature.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-base font-semibold text-gray-700 dark:text-gray-200 group-hover:text-gray-800 dark:group-hover:text-white transition-colors">
                      {feature.subtitle}
                    </p>

                    {/* Success Indicator */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                      whileHover={{ scale: 1.2 }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <CheckCircle className="h-5 w-5 text-white" />
                    </motion.div>

                    {/* Decorative Elements */}
                    {/* <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${feature.gradient} opacity-30 group-hover:opacity-80 transition-opacity duration-500 rounded-b-3xl`} /> */}

                    {/* Corner Accent */}
                    {/* <div className={`absolute top-4 left-4 w-3 h-3 bg-gradient-to-r ${feature.gradient} rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300`} /> */}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-gray-500 dark:text-gray-400"
            >
              <span className="text-sm font-semibold mb-2 font-heading tracking-wide">
                Explore Our Services
              </span>
              <motion.div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
