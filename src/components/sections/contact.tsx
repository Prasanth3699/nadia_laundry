"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { getLocalizedText, createWhatsAppUrl } from "@/lib/utils";
import companyData from "@/data/company.json";
import { FaWhatsapp } from "react-icons/fa";

export function Contact() {
  const { language, t } = useLanguage();
  const { company, whatsappConfig } = companyData;

  const formatOperatingHours = () => {
    if (!company.hours) return "Daily: 8:00 AM - 10:00 PM";

    const weekdays = "Mon-Thu: 8:00 AM - 10:00 PM";
    const friday = "Fri: 2:00 PM - 10:00 PM";
    const weekend = "Sat-Sun: 8:00 AM - 10:00 PM";

    return `${weekdays}, ${friday}, ${weekend}`;
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t("contact.phone"),
      value: company?.contact?.phone || "+9710503837591",
      action: `tel:${company?.contact?.phone || "+9710503837591"}`,
      color: "bg-blue-50 dark:bg-blue-950/30",
      iconColor: "text-blue-500",
      borderColor: "border-blue-100 dark:border-blue-800/50",
    },
    {
      icon: Mail,
      title: t("contact.email"),
      value: company?.contact?.email || "info@nadialaundry.com",
      action: `mailto:${company?.contact?.email || "info@nadialaundry.com"}`,
      color: "bg-emerald-50 dark:bg-emerald-950/30",
      iconColor: "text-emerald-500",
      borderColor: "border-emerald-100 dark:border-emerald-800/50",
    },
    {
      icon: MapPin,
      title: t("contact.address"),
      value:
        getLocalizedText(company?.location?.address, language) ||
        "Abu Dhabi, UAE",
      action: `https://maps.google.com/?q=${encodeURIComponent(
        getLocalizedText(company?.location?.address, language) ||
          "Abu Dhabi, UAE"
      )}`,
      color: "bg-purple-50 dark:bg-purple-950/30",
      iconColor: "text-purple-500",
      borderColor: "border-purple-100 dark:border-purple-800/50",
    },
    {
      icon: Clock,
      title: t("contact.hours"),
      value: formatOperatingHours(),
      action: null,
      color: "bg-amber-50 dark:bg-amber-950/30",
      iconColor: "text-amber-500",
      borderColor: "border-amber-100 dark:border-amber-800/50",
    },
  ];

  const handleQuickContact = (action: string) => {
    if (action.startsWith("tel:") || action.startsWith("mailto:")) {
      window.open(action, "_self");
    } else {
      window.open(action, "_blank");
    }
  };

  const handleWhatsAppClick = () => {
    const message =
      getLocalizedText(whatsappConfig?.message, language) ||
      "Hello! I'm interested in your laundry services.";
    const phoneNumber =
      whatsappConfig?.phoneNumber ||
      company?.contact?.whatsapp ||
      "+9710503837591";
    const whatsappUrl = createWhatsAppUrl(phoneNumber, message);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-black">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-6">{t("contact.title")}</h2>
          <p className="text-body-large text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </motion.div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true }}
            >
              <div
                className={`glass-card ${info.borderColor} border-2 rounded-2xl p-6 h-full hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-2xl group relative overflow-hidden`}
                style={{
                  background: `linear-gradient(135deg, ${
                    info.color.includes("blue")
                      ? "rgba(59, 130, 246, 0.1)"
                      : info.color.includes("emerald")
                      ? "rgba(16, 185, 129, 0.1)"
                      : info.color.includes("purple")
                      ? "rgba(168, 85, 247, 0.1)"
                      : "rgba(245, 158, 11, 0.1)"
                  }, rgba(255, 255, 255, 0.1))`,
                }}
              >
                {/* Background glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-white to-transparent rounded-2xl"></div>

                <div className="flex flex-col items-center text-center h-full relative z-10">
                  <motion.div
                    className={`w-14 h-14 rounded-2xl ${info.color} ${info.borderColor} border flex items-center justify-center mb-4 shadow-lg`}
                    whileHover={{
                      scale: 1.15,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <info.icon className={`h-7 w-7 ${info.iconColor}`} />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 dark:group-hover:from-white dark:group-hover:to-gray-200 transition-all duration-300">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {info.value}
                  </p>
                  {info.action && (
                    <motion.button
                      onClick={() => handleQuickContact(info.action)}
                      className={`mt-4 px-6 py-3 rounded-xl text-sm font-semibold ${info.iconColor} glass-card border-2 ${info.borderColor} hover:shadow-lg transition-all duration-300 relative overflow-hidden group/btn`}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Button glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                      <span className="relative z-10">Contact</span>
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="glass-card border-2 border-green-100 dark:border-green-800/50 rounded-2xl p-8 max-w-md mx-auto shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(255, 255, 255, 0.1))",
            }}
          >
            {/* Background glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl"></div>

            <div className="relative z-10">
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 border border-green-100 dark:border-green-800/50 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                whileHover={{
                  scale: 1.15,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 },
                }}
                initial={{ scale: 1, rotate: 0 }}
                animate={{
                  scale: 1,
                  rotate: 0,
                  transition: { duration: 0.3 },
                }}
              >
                <FaWhatsapp className="h-8 w-8 text-white" />
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 transition-all duration-300">
                Quick Contact
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                Get instant support via WhatsApp
              </p>

              <motion.button
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-green-950 relative overflow-hidden group/btn"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Button shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>

                <motion.div
                  className="mr-2"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <FaWhatsapp className="h-5 w-5" />
                </motion.div>
                <span className="relative z-10">Chat on WhatsApp</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
