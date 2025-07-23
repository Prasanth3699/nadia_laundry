"use client";

import { motion } from "framer-motion";
import { Shirt, WashingMachine, ArrowRight, Star, Award } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";

export function Services() {
  const { language } = useLanguage();

  const getLocalizedText = (text: { en: string; ar: string }) => {
    return text[language as keyof typeof text] || text.en;
  };

  // Featured services with appealing visual presentation
  const featuredServices = [
    {
      id: "wash-fold",
      title: { en: "Wash & Fold", ar: "الغسيل والطي" },
      description: {
        en: "Perfect for everyday garments",
        ar: "مثالي للملابس اليومية",
      },
      icon: Shirt,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      bgGradient:
        "from-blue-50 via-cyan-50 to-teal-50 dark:from-blue-950/20 dark:via-cyan-950/20 dark:to-teal-950/20",
      borderColor: "border-blue-200 dark:border-blue-800/40",
      hoverBorder: "hover:border-cyan-400 dark:hover:border-cyan-500",
      iconColor: "text-blue-600 dark:text-blue-400",
      price: "From AED 15",
    },
    {
      id: "dry-cleaning",
      title: { en: "Dry Cleaning", ar: "التنظيف الجاف" },
      description: {
        en: "Expert care for delicate fabrics",
        ar: "عناية خبيرة للأقمشة الحساسة",
      },
      icon: WashingMachine,
      gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
      bgGradient:
        "from-purple-50 via-fuchsia-50 to-pink-50 dark:from-purple-950/20 dark:via-fuchsia-950/20 dark:to-pink-950/20",
      borderColor: "border-purple-200 dark:border-purple-800/40",
      hoverBorder: "hover:border-fuchsia-400 dark:hover:border-fuchsia-500",
      iconColor: "text-purple-600 dark:text-purple-400",
      price: "From AED 25",
    },
    {
      id: "premium-care",
      title: { en: "Premium Care", ar: "العناية المميزة" },
      description: {
        en: "Luxury treatment for special garments",
        ar: "معاملة فاخرة للملابس الخاصة",
      },
      icon: Star,
      gradient: "from-amber-500 via-orange-500 to-red-500",
      bgGradient:
        "from-amber-50 via-orange-50 to-red-50 dark:from-amber-950/20 dark:via-orange-950/20 dark:to-red-950/20",
      borderColor: "border-amber-200 dark:border-amber-800/40",
      hoverBorder: "hover:border-orange-400 dark:hover:border-orange-500",
      iconColor: "text-amber-600 dark:text-amber-400",
      price: "From AED 50",
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
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-black">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full px-6 py-3 mb-6 border border-blue-500/20 dark:border-blue-400/20">
            <Award className="h-5 w-5 text-blue-500 dark:text-blue-400" />
            <span className="text-blue-500 dark:text-blue-400 font-semibold text-overline">
              Premium Services
            </span>
          </div>

          <h2 className="heading-secondary mb-6">
            Professional Laundry Solutions
          </h2>
          <p className="text-body-large text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our range of premium laundry services designed to keep your
            garments looking perfect. From everyday wash & fold to specialized
            dry cleaning.
          </p>
        </motion.div>

        {/* Featured Services Preview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {featuredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`group relative bg-gradient-to-br ${service.bgGradient} rounded-3xl p-8 border-2 ${service.borderColor} ${service.hoverBorder} transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer`}
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 bg-white dark:bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent
                      className={`h-10 w-10 ${service.iconColor}`}
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {getLocalizedText(service.title)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {getLocalizedText(service.description)}
                  </p>
                  <div className="pt-2">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white bg-white/50 dark:bg-gray-800/50 px-3 py-1 rounded-full">
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* Decorative gradient overlay */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Services Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-gray-800 dark:via-blue-800 dark:to-purple-800 p-12 mb-16"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-dotted-pattern"></div>
          </div>

          <div className="relative text-center">
            <h3 className="text-4xl font-bold text-white mb-6">
              Complete Service Catalog
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Explore our full range of professional laundry services with
              detailed pricing, features, and booking options.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="/services"
                className="group bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center"
              >
                View All Services
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <div className="flex items-center gap-4 text-white/80">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">6+</div>
                  <div className="text-sm">Services</div>
                </div>
                <div className="w-px h-8 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm">Available</div>
                </div>
                <div className="w-px h-8 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Special Offer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-10 text-center text-white shadow-2xl relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

          <div className="relative max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-6 py-2 mb-6">
              <Star className="h-5 w-5 text-yellow-300" />
              <span className="font-semibold">Limited Time Offer</span>
            </div>

            <h3 className="text-4xl font-bold mb-4">25% OFF First Order!</h3>
            <p className="text-xl mb-8 opacity-90">
              Experience our premium service with an exclusive discount for new
              customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book Now & Save
              </a>
              <div className="flex items-center gap-2 text-white/90">
                <span className="text-lg">Use Code:</span>
                <span className="bg-white/20 px-4 py-2 rounded-xl font-mono font-bold text-xl">
                  WELCOME25
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
