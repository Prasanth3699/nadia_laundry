"use client";

import Link from "next/link";
import { motion, easeInOut } from "framer-motion";
import {
  Home,
  ArrowLeft,
  Phone,
  Search,
  Sparkles,
  Star,
  MapPin,
  Clock,
  Shirt,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/components/providers/language-provider";
import { createWhatsAppUrl, getLocalizedText } from "@/lib/utils";
import companyData from "@/data/company.json";

export default function NotFound() {
  const { language } = useLanguage();
  const { company, whatsappConfig } = companyData;

  const handleWhatsAppClick = () => {
    const message =
      "Hello! I got lost on your website and need help finding what I'm looking for.";
    const whatsappUrl = createWhatsAppUrl(whatsappConfig.phoneNumber, message);
    window.open(whatsappUrl, "_blank");
  };

  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-blue-900/20 flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-3xl"
        />

        {/* Floating Laundry Icons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 0.4, 0],
              y: [-20, -100],
              x: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeOut",
            }}
            className={`absolute w-8 h-8 ${
              i % 3 === 0
                ? "bottom-0 left-1/4"
                : i % 3 === 1
                ? "bottom-0 left-1/2"
                : "bottom-0 left-3/4"
            }`}
          >
            {i % 3 === 0 ? (
              <Shirt className="w-full h-full text-blue-500/40" />
            ) : i % 3 === 1 ? (
              <Sparkles className="w-full h-full text-purple-500/40" />
            ) : (
              <Star className="w-full h-full text-green-500/40" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full text-center relative z-10"
      >
        {/* 404 Number with Animation */}
        <motion.div variants={itemVariants} className="relative mb-8">
          <motion.div
            className="text-8xl sm:text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative"
            variants={floatingVariants}
            animate="animate"
          >
            404
            {/* Glowing effect */}
            <motion.div
              className="absolute inset-0 text-8xl sm:text-9xl md:text-[12rem] font-black text-blue-500/20 blur-3xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              404
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Error Message */}
        <motion.div variants={itemVariants} className="mb-12">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            variants={floatingVariants}
            animate="animate"
          >
            Oops! Page Not Found
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Looks like this page got lost in the wash! Don&apos;t worry, our
            premium laundry services are still spotless and ready for you.
          </motion.p>

          <motion.p
            className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto"
            variants={itemVariants}
          >
            The page you&apos;re looking for might have been moved, deleted, or
            you might have entered the wrong URL.
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 max-w-lg mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1"
          >
            <Link
              href="/"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group"
            >
              <Home className="h-5 w-5 group-hover:scale-110 transition-transform" />
              Go Back Home
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1"
          >
            <Link
              href="/#services"
              className="w-full bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
            >
              <Search className="h-5 w-5 group-hover:scale-110 transition-transform" />
              View Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Quick Info Cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {/* Contact Card */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Call Us Now
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Get immediate assistance
            </p>
            <motion.button
              onClick={() =>
                window.open(`tel:${company.contact.phone}`, "_self")
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-xl font-semibold transition-colors"
            >
              {company.contact.phone}
            </motion.button>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FaWhatsapp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              WhatsApp Us
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Quick chat support
            </p>
            <motion.button
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="h-4 w-4" />
              Chat Now
            </motion.button>
          </motion.div>

          {/* Location Card */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Visit Us
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {getLocalizedText(company.location.address, language)}
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
              <Clock className="h-4 w-4" />
              <span>Open Now</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Special Offer Banner */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-4 right-4 w-16 h-16 border-4 border-white/30 rounded-full"
          />

          <div className="relative z-10">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <Star className="h-6 w-6 fill-current" />
              <span className="text-2xl font-bold">25% OFF</span>
              <Star className="h-6 w-6 fill-current" />
            </motion.div>

            <h3 className="text-xl font-bold mb-2">
              Since you&apos;re here, enjoy our welcome offer!
            </h3>
            <p className="opacity-90 mb-4">
              First-time customers get 25% off their initial order
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 inline-block">
              <span className="font-mono font-bold text-lg">WELCOME25</span>
            </div>
          </div>
        </motion.div>

        {/* Back Navigation */}
        <motion.div variants={itemVariants} className="mt-8">
          <motion.button
            onClick={() => window.history.back()}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 font-semibold flex items-center gap-2 mx-auto transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back to Previous Page
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
