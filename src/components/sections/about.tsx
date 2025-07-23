"use client";

import { motion } from "framer-motion";
import {
  Award,
  Users,
  Clock,
  Leaf,
  Heart,
  Target,
  Star,
  Zap,
} from "lucide-react";
import { MdOutlineDryCleaning } from "react-icons/md";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { useLanguage } from "@/components/providers/language-provider";
import { getLocalizedText } from "@/lib/utils";
import companyData from "@/data/company.json";
import { easeInOut } from "framer-motion";

export function About() {
  const { language, t } = useLanguage();
  const { company } = companyData;

  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: { en: "Happy Customers", ar: "عميل سعيد" },
      gradient: "from-blue-500 to-purple-600",
      bgGradient:
        "from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20",
      glowColor: "shadow-blue-500/20",
    },
    {
      icon: Award,
      number: "5",
      label: { en: "Years Experience", ar: "سنوات خبرة" },
      gradient: "from-emerald-500 to-teal-600",
      bgGradient:
        "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
      glowColor: "shadow-emerald-500/20",
    },
    {
      icon: Clock,
      number: "24/7",
      label: { en: "Customer Support", ar: "دعم العملاء" },
      gradient: "from-orange-500 to-red-600",
      bgGradient:
        "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
      glowColor: "shadow-orange-500/20",
    },
    {
      icon: Leaf,
      number: "100%",
      label: { en: "Eco-Friendly", ar: "صديق للبيئة" },
      gradient: "from-green-500 to-lime-600",
      bgGradient:
        "from-green-50 to-lime-50 dark:from-green-900/20 dark:to-lime-900/20",
      glowColor: "shadow-green-500/20",
    },
  ];

  const specialities = [
    {
      icon: MdOutlineLocalLaundryService,
      title: { en: "Advanced Laundry tools", ar: "أدوات غسيل متطورة" },
      description: {
        en: "State-of-the-art laundry equipment for superior cleaning results",
        ar: "معدات غسيل حديثة للحصول على نتائج تنظيف فائقة",
      },
      gradient: "from-blue-500 to-cyan-600",
      bgGradient:
        "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
      glowColor: "shadow-blue-500/25",
    },
    {
      icon: MdOutlineDryCleaning,
      title: { en: "Specialized cleaning", ar: "تنظيف متخصص" },
      description: {
        en: "Expert techniques tailored for different fabric types and stains",
        ar: "تقنيات خبراء مصممة لأنواع مختلفة من الأقمشة والبقع",
      },
      gradient: "from-purple-500 to-pink-600",
      bgGradient:
        "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
      glowColor: "shadow-purple-500/25",
    },
    {
      icon: Clock,
      title: { en: "Timely Service", ar: "خدمة سريعة" },
      description: {
        en: "Fast and reliable service with guaranteed delivery times",
        ar: "خدمة سريعة وموثوقة مع أوقات تسليم مضمونة",
      },
      gradient: "from-emerald-500 to-teal-600",
      bgGradient:
        "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
      glowColor: "shadow-emerald-500/25",
    },
    {
      icon: Leaf,
      title: { en: "Eco Friendly Detergent", ar: "منظفات صديقة للبيئة" },
      description: {
        en: "Environment-friendly cleaning products safe for you and nature",
        ar: "منتجات تنظيف صديقة للبيئة آمنة لك وللطبيعة",
      },
      gradient: "from-green-500 to-lime-600",
      bgGradient:
        "from-green-50 to-lime-50 dark:from-green-900/20 dark:to-lime-900/20",
      glowColor: "shadow-green-500/25",
    },
    {
      icon: Zap,
      title: { en: "Streamlined service", ar: "خدمة سلسة" },
      description: {
        en: "Efficient processes ensuring smooth and hassle-free experience",
        ar: "عمليات فعالة تضمن تجربة سلسة وخالية من المتاعب",
      },
      gradient: "from-orange-500 to-red-600",
      bgGradient:
        "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
      glowColor: "shadow-orange-500/25",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeInOut,
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-black">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-pink-100 dark:bg-pink-900/20 rounded-full px-4 py-2 mb-4">
            <Heart className="h-4 w-4 text-pink-600 dark:text-pink-400" />
            <span className="text-pink-600 dark:text-pink-400 font-medium">
              About Us
            </span>
          </div>

          <h2 className="heading-secondary mb-4">{t("about.title")}</h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="heading-tertiary text-gradient">Our Story</h3>

              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {getLocalizedText(company.description, language)}
              </p>

              {/* Mission */}
              <div className="glass-card rounded-xl p-6 shadow-lg border border-white/30 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Our Mission
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {getLocalizedText(company.mission, language)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="glass-card rounded-xl p-6 shadow-lg border border-white/30 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Our Vision
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {getLocalizedText(company.vision, language)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`glass-card rounded-xl p-6 text-center shadow-lg hover:shadow-2xl hover:${stat.glowColor} transition-all duration-500 border border-white/30 dark:border-gray-700/50 hover:-translate-y-2 group relative overflow-hidden bg-gradient-to-br ${stat.bgGradient}`}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5 bg-dotted-pattern"></div>

                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`}
                  ></div>

                  <div
                    className={`relative w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="relative text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="relative text-gray-700 dark:text-gray-300 font-medium">
                    {getLocalizedText(stat.label, language)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Our Speciality Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="heading-tertiary mb-4">Our Speciality</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              What makes us unique in the laundry industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {specialities.map((speciality, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`glass-card rounded-xl p-6 text-center shadow-lg hover:shadow-2xl hover:${speciality.glowColor} transition-all duration-500 hover:-translate-y-3 border border-white/30 dark:border-gray-700/50 group relative overflow-hidden bg-gradient-to-br ${speciality.bgGradient}`}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5 bg-dotted-pattern"></div>

                {/* Animated glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${speciality.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`}
                ></div>

                {/* Floating animation for icon */}
                <motion.div
                  className={`relative w-16 h-16 bg-gradient-to-br ${speciality.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  initial={{ scale: 1, rotate: 0 }}
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, -10, 10, 0],
                    transition: {
                      duration: 0.5,
                      ease: "easeInOut",
                    },
                  }}
                  animate={{
                    scale: 1,
                    rotate: 0,
                    transition: {
                      duration: 0.3,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <speciality.icon className="h-8 w-8 text-white" />
                </motion.div>

                <h4 className="relative text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 dark:group-hover:from-white dark:group-hover:to-gray-200 transition-all duration-300">
                  {getLocalizedText(speciality.title, language)}
                </h4>

                <p className="relative text-gray-600 dark:text-gray-300 text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {getLocalizedText(speciality.description, language)}
                </p>

                {/* Decorative element */}
                <div
                  className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-br ${speciality.gradient} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
