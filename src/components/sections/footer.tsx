"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Star, Award, ArrowUp, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/language-provider";
import {
  getLocalizedText,
  createWhatsAppUrl,
  scrollToSection,
} from "@/lib/utils";
import companyData from "@/data/company.json";
import servicesData from "@/data/services.json";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Image from "next/image";

export function Footer() {
  const { language, t } = useLanguage();
  const { company, whatsappConfig } = companyData;

  const quickLinks = [
    { key: "nav.home", href: "#hero" },
    { key: "nav.services", href: "#services" },
    { key: "nav.about", href: "#about" },
    { key: "nav.contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: FaInstagram, href: "https://www.instagram.com/nadiya54425", label: "Instagram", gradient: "from-pink-500 to-rose-500" },
    // { icon: FaFacebookF, href: "#", label: "Facebook", gradient: "from-blue-600 to-blue-700" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      scrollToSection(href.substring(1));
    }
  };

  const handleWhatsAppClick = () => {
    const message = getLocalizedText(whatsappConfig.message, language);
    const whatsappUrl = createWhatsAppUrl(whatsappConfig.phoneNumber, message);
    window.open(whatsappUrl, "_blank");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black text-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl"
        />

        {/* Floating Sparkles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              y: [20, -60],
              x: [0, Math.random() * 50 - 25]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeOut"
            }}
            className={`absolute w-1 h-1 bg-blue-400/60 rounded-full ${
              i % 2 === 0 ? 'bottom-10 left-1/3' : 'bottom-10 right-1/3'
            }`}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-custom py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Company Info - Takes more space */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Image
                      src="/images/logo/Nadia Laundry.png"
                      alt="Nadia Laundry Logo"
                      width={64}
                      height={64}
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-heading tracking-tight">
                      {getLocalizedText(company.name, language)}
                    </h3>
                    <p className="text-blue-400 font-semibold font-heading tracking-wide">
                      Premium Laundry Services
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed font-medium mb-8 max-w-md">
                  Abu Dhabi&apos;s trusted laundry partner delivering excellence in garment care with modern technology and eco-friendly solutions.
                </p>

                {/* Contact Quick Info */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-green-400" />
                    </div>
                    <a
                      href={`tel:${company.contact.phone}`}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 font-medium"
                    >
                      {company.contact.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-blue-400" />
                    </div>
                    <a
                      href={`mailto:${company.contact.email}`}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
                    >
                      {company.contact.email}
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 bg-gradient-to-r ${social.gradient} rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6 text-white" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold mb-6 font-heading tracking-tight flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                  Quick Links
                </h4>
                <ul className="space-y-4">
                  {quickLinks.map((link, index) => (
                    <motion.li 
                      key={link.key}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2 transform font-medium group flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-blue-400 transition-colors duration-300"></span>
                        {t(link.key)}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold mb-6 font-heading tracking-tight flex items-center gap-2">
                  <Award className="h-5 w-5 text-purple-400" />
                  Our Services
                </h4>
                <ul className="space-y-4">
                  {servicesData.services.slice(0, 5).map((service, index) => (
                    <motion.li 
                      key={service.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <button
                        onClick={() => handleNavClick("#services")}
                        className="text-gray-300 hover:text-purple-400 transition-all duration-300 hover:translate-x-2 transform font-medium group flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-purple-400 transition-colors duration-300"></span>
                        {getLocalizedText(service.title, language)}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Business Hours & Location */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold mb-6 font-heading tracking-tight flex items-center gap-2">
                  <Clock className="h-5 w-5 text-emerald-400" />
                  Hours & Location
                </h4>
                
                {/* Business Hours */}
                <div className="space-y-3 mb-6">
                  <div className="text-gray-300 font-medium">
                    <div className="flex justify-between">
                      <span>Sun-Thu:</span>
                      <span className="text-emerald-400">8AM-10PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday:</span>
                      <span className="text-emerald-400">2PM-10PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="text-emerald-400">8AM-10PM</span>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-pink-500/20 rounded-full flex items-center justify-center mt-1">
                    <MapPin className="h-5 w-5 text-pink-400" />
                  </div>
                  <div className="flex-1">
                    <span className="text-gray-300 font-medium leading-relaxed">
                      {getLocalizedText(company.location.address, language)}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="border-t border-gray-700/50 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container-custom py-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <motion.div
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100/10 to-emerald-100/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles className="h-5 w-5 text-green-400" />
                  <span className="text-green-400 font-semibold font-heading tracking-wide">
                    Ready to Book?
                  </span>
                </motion.div>
                
                <h4 className="text-2xl md:text-3xl font-bold mb-3 font-heading tracking-tight">
                  Experience Premium Laundry Care
                </h4>
                <p className="text-gray-400 font-medium max-w-2xl">
                  Get instant quotes, schedule pickup, or speak with our team. Professional service guaranteed.
                </p>
              </div>

              {/* Single WhatsApp CTA */}
              <motion.button
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-lg font-heading tracking-tight transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp className="h-6 w-6" />
                Book via WhatsApp
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50">
          <div className="container-custom py-8">
            <motion.div 
              className="flex flex-col md:flex-row items-center justify-between gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-gray-400 text-center md:text-left font-medium">
                <p>&copy; {new Date().getFullYear()} Nadia Laundry. All rights reserved.</p>
                <p className="text-sm text-gray-500 mt-1">Crafted with care in Abu Dhabi, UAE</p>
              </div>

              <div className="flex items-center gap-6">
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-blue-400 font-medium transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-blue-400 font-medium transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                
                <motion.button
                  onClick={scrollToTop}
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="h-5 w-5 text-white" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
