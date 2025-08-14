"use client";

import { useState } from "react";
import { Phone, MessageCircle, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createWhatsAppUrl, getLocalizedText } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";
import companyData from "@/data/company.json";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppFloat() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { language } = useLanguage();
  const { whatsappConfig } = companyData;

  const message = getLocalizedText(whatsappConfig.message, language);
  const whatsappUrl = createWhatsAppUrl(whatsappConfig.phoneNumber, message);

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, "_blank");
    setIsExpanded(false);
  };

  const handleCallClick = () => {
    window.open(`tel:${whatsappConfig.phoneNumber}`, "_self");
    setIsExpanded(false);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Action Buttons - Only show when expanded */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut", staggerChildren: 0.1 }}
            className="flex flex-col gap-3"
          >
            {/* Call Button with Label */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="relative flex items-center justify-end group"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute right-20 bg-white dark:bg-gray-800 px-4 py-2 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-2"
              >
                <span className="text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                  Call Now
                </span>
              </motion.div>
              <motion.button
                onClick={handleCallClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group"
                aria-label="Call Now"
              >
                <Phone className="h-6 w-6" />
                <motion.div
                  className="absolute inset-0 bg-blue-500 rounded-full opacity-30"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>
            </motion.div>

            {/* WhatsApp Button with Label */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="relative flex items-center justify-end group"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute right-20 bg-white dark:bg-gray-800 px-4 py-2 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-2"
              >
                <span className="text-sm font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                  Chat on WhatsApp
                </span>
              </motion.div>
              <motion.button
                onClick={handleWhatsAppClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp className="h-6 w-6" />
                <motion.div
                  className="absolute inset-0 bg-green-500 rounded-full opacity-30"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.div className="relative">
        <motion.button
          onClick={toggleExpanded}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 flex items-center justify-center overflow-hidden group"
          aria-label={isExpanded ? "Close contact menu" : "Open contact menu"}
        >
          {/* Background Animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Sparkle Background */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Sparkles className="absolute top-2 right-2 h-3 w-3 text-white/50" />
            <Sparkles className="absolute bottom-2 left-2 h-2 w-2 text-white/30" />
          </motion.div>

          {/* Main Icon */}
          <motion.div
            className="relative z-10"
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {isExpanded ? (
              <X className="h-7 w-7" />
            ) : (
              <MessageCircle className="h-7 w-7" />
            )}
          </motion.div>

          {/* Pulse Animation */}
          <motion.div
            className="absolute inset-0 border-2 border-white/30 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>

        {/* Notification Dot */}
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-2 h-2 bg-white rounded-full"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Backdrop for mobile */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10 lg:hidden"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}