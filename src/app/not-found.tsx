"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search, ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Animation */}
          <div className="relative mb-8">
            <motion.div
              className="text-8xl md:text-9xl font-bold text-gray-200 dark:text-gray-800"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              404
            </motion.div>

            {/* Floating Laundry Icons */}
            <motion.div
              className="absolute top-4 left-1/4"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-green rounded-full flex items-center justify-center">
                <span className="text-white text-lg">👕</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-8 right-1/4"
              animate={{
                y: [0, -8, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-brand-pink to-brand-gold rounded-full flex items-center justify-center">
                <span className="text-white text-sm">🧽</span>
              </div>
            </motion.div>
          </div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Page Not Found
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              Oops! The page you&apos;re looking for seems to have been washed
              away.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Don&apos;t worry, our premium services are still available!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button asChild variant="brand" size="lg">
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                Go Back Home
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href="/#services" className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                View Services
              </Link>
            </Button>
          </motion.div>

          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Need Help? Contact Us Directly
            </h3>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={() => window.open("tel:+9710503837591", "_self")}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </Button>

              <Button
                onClick={() =>
                  window.open(
                    "https://wa.me/971552203340?text=Hello! I need help finding the right page on your website.",
                    "_blank"
                  )
                }
                variant="whatsapp"
                className="flex items-center gap-2"
              >
                <FaWhatsapp className="h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </motion.div>

          {/* Back Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8"
          >
            <Button
              variant="ghost"
              onClick={() => window.history.back()}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
          </motion.div>

          {/* Special Offer Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 bg-gradient-to-r from-brand-gold to-yellow-500 rounded-lg p-4 text-white"
          >
            <p className="font-medium">
              Since you&apos;re here, enjoy 25% off your first order!
            </p>
            <p className="text-sm opacity-90">
              Use code: <span className="font-mono font-bold">WELCOME25</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
