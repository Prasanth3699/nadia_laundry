"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Star, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/providers/language-provider";
import {
  getLocalizedText,
  createWhatsAppUrl,
  scrollToSection,
} from "@/lib/utils";
import companyData from "@/data/company.json";
import servicesData from "@/data/services.json";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

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
    { icon: FaXTwitter, href: "#", label: "FaXTwitter" },
    { icon: FaInstagram, href: "#", label: "FaInstagram" },
    { icon: FaFacebookF, href: "#", label: "FaFacebookF" },
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
    <footer className="bg-gray-900 dark:bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-green-600 to-pink-600"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-green rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    {getLocalizedText(company.name, language)}
                  </h3>
                  <p className="text-gray-400 text-sm">Premium Laundry</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {t("footer.description")}
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-brand-blue hover:to-brand-green rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Star className="h-5 w-5 text-brand-gold" />
                {t("footer.quick.links")}
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.key}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-gray-300 hover:text-brand-green transition-colors duration-200 hover:translate-x-1 transform"
                    >
                      {t(link.key)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Heart className="h-5 w-5 text-brand-pink" />
                {t("footer.services")}
              </h4>
              <ul className="space-y-3">
                {servicesData.services.slice(0, 5).map((service) => (
                  <li key={service.id}>
                    <button
                      onClick={() => handleNavClick("#services")}
                      className="text-gray-300 hover:text-brand-green transition-colors duration-200 hover:translate-x-1 transform"
                    >
                      {getLocalizedText(service.title, language)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Phone className="h-5 w-5 text-brand-blue" />
                {t("footer.contact.info")}
              </h4>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <a
                      href={`tel:${company.contact.phone}`}
                      className="text-gray-300 hover:text-brand-green transition-colors duration-200"
                    >
                      {company.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                  <div>
                    <a
                      href={`mailto:${company.contact.email}`}
                      className="text-gray-300 hover:text-brand-blue transition-colors duration-200"
                    >
                      {company.contact.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-brand-pink mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-300">
                      {getLocalizedText(company.location.address, language)}
                    </span>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-gray-300 text-sm">
                      <div>Sun-Thu: 8:00 AM - 10:00 PM</div>
                      <div>Fri: 2:00 PM - 10:00 PM</div>
                      <div>Sat: 8:00 AM - 10:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <Button
                onClick={handleWhatsAppClick}
                variant="whatsapp"
                className="w-full mt-6"
              >
                <FaWhatsapp className="mr-2 h-4 w-4" />
                {t("hero.cta.whatsapp")}
              </Button>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800">
          <div className="container-custom py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h4 className="text-lg font-semibold mb-2">
                  Stay Updated with Special Offers
                </h4>
                <p className="text-gray-400">
                  Get exclusive deals and updates delivered to your WhatsApp
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleWhatsAppClick}
                  variant="brand"
                  className="whitespace-nowrap"
                >
                  <FaWhatsapp className="mr-2 h-4 w-4" />
                  Join WhatsApp Updates
                </Button>
                <Button
                  onClick={() =>
                    window.open(`tel:${company.contact.phone}`, "_self")
                  }
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 whitespace-nowrap"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  {t("common.call.now")}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container-custom py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-gray-400 text-sm text-center md:text-left">
                &copy; {new Date().getFullYear()} Nadia Laundry. All rights
                reserved.
              </div>

              <div className="flex items-center gap-6">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-brand-green text-sm transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-brand-green text-sm transition-colors duration-200"
                >
                  Terms of Service
                </Link>
                <button
                  onClick={scrollToTop}
                  className="w-8 h-8 bg-gray-800 hover:bg-gradient-to-r hover:from-brand-blue hover:to-brand-green rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
