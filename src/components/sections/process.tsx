"use client";

import { motion } from "framer-motion";
import {
  Truck,
  ShieldPlus,
  Home,
  ArrowRight,
  Clock,
  Package,
  Star,
} from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";

export function Process() {
  const { language } = useLanguage();

  const processSteps = [
    {
      step: 1,
      title: {
        en: "Free Pickup",
        ar: "الاستلام المجاني",
      },
      description: {
        en: "Schedule your pickup with just a call or WhatsApp. We collect your clothes from your doorstep at your convenience.",
        ar: "احجز الاستلام بمكالمة أو واتساب. نجمع ملابسك من عتبة بابك في الوقت المناسب لك.",
      },
      icon: Truck,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      bgGradient:
        "from-blue-50 via-cyan-50 to-teal-50 dark:from-blue-950/30 dark:via-cyan-950/30 dark:to-teal-950/30",
      borderColor: "border-blue-200 dark:border-blue-800/50",
      hoverBorder: "hover:border-blue-400 dark:hover:border-blue-600",
      iconBg: "bg-blue-100 dark:bg-blue-900/50",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      step: 2,
      title: {
        en: "Professional Care",
        ar: "العناية الاحترافية",
      },
      description: {
        en: "Expert inspection and sorting by fabric type. Premium detergents and modern equipment ensure perfect results.",
        ar: "فحص وفرز متخصص حسب نوع القماش. منظفات فائقة ومعدات حديثة تضمن نتائج مثالية.",
      },
      icon: ShieldPlus,
      gradient: "from-emerald-500 via-teal-500 to-green-500",
      bgGradient:
        "from-emerald-50 via-teal-50 to-green-50 dark:from-emerald-950/30 dark:via-teal-950/30 dark:to-green-950/30",
      borderColor: "border-emerald-200 dark:border-emerald-800/50",
      hoverBorder: "hover:border-emerald-400 dark:hover:border-emerald-600",
      iconBg: "bg-emerald-100 dark:bg-emerald-900/50",
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      step: 3,
      title: {
        en: "Quality Control",
        ar: "مراقبة الجودة",
      },
      description: {
        en: "Multi-point quality inspection and careful packaging. Every garment is checked to meet our premium standards.",
        ar: "فحص جودة متعدد النقاط وتغليف بعناية. كل قطعة تفحص لتلبي معاييرنا المميزة.",
      },
      icon: Package,
      gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
      bgGradient:
        "from-purple-50 via-fuchsia-50 to-pink-50 dark:from-purple-950/30 dark:via-fuchsia-950/30 dark:to-pink-950/30",
      borderColor: "border-purple-200 dark:border-purple-800/50",
      hoverBorder: "hover:border-purple-400 dark:hover:border-purple-600",
      iconBg: "bg-purple-100 dark:bg-purple-900/50",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      step: 4,
      title: {
        en: "Swift Delivery",
        ar: "التسليم السريع",
      },
      description: {
        en: "Fresh, perfectly cleaned clothes delivered within 24-48 hours. Satisfaction guaranteed or we make it right.",
        ar: "ملابس نظيفة ومثالية تسلم خلال 24-48 ساعة. رضاك مضمون أو نصحح الأمر.",
      },
      icon: Home,
      gradient: "from-amber-500 via-orange-500 to-red-500",
      bgGradient:
        "from-amber-50 via-orange-50 to-red-50 dark:from-amber-950/30 dark:via-orange-950/30 dark:to-red-950/30",
      borderColor: "border-amber-200 dark:border-amber-800/50",
      hoverBorder: "hover:border-amber-400 dark:hover:border-amber-600",
      iconBg: "bg-amber-100 dark:bg-amber-900/50",
      iconColor: "text-amber-600 dark:text-amber-400",
    },
  ];

  const getLocalizedText = (text: { en: string; ar: string }) => {
    return text[language as keyof typeof text] || text.en;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="process" className="section-padding bg-white dark:bg-black">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 dark:from-emerald-400/20 dark:to-blue-400/20 rounded-full px-6 py-3 mb-6 border border-emerald-500/20 dark:border-emerald-400/20">
            <Star className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
            <span className="text-emerald-500 dark:text-emerald-400 font-semibold text-overline">
              How It Works
            </span>
          </div>

          <h2 className="heading-secondary mb-6">
            Simple & Professional Process
          </h2>
          <p className="text-body-large text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience our streamlined 4-step process that delivers exceptional
            results with maximum convenience. From pickup to delivery, we handle
            everything with professional care.
          </p>
        </motion.div>

        {/* Modern Process Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className={`group relative bg-gradient-to-br ${step.bgGradient} rounded-3xl p-8 border-2 ${step.borderColor} ${step.hoverBorder} transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer`}
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-8">
                  <div
                    className={`w-8 h-8 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <span className="text-white text-sm font-bold">
                      {step.step}
                    </span>
                  </div>
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 ${step.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className={`h-8 w-8 ${step.iconColor}`} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {getLocalizedText(step.title)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {getLocalizedText(step.description)}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <IconComponent className="h-12 w-12 text-gray-400" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Process Flow Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="hidden lg:flex justify-center items-center mb-16"
        >
          <div className="flex items-center gap-4">
            {processSteps.map((step, index) => (
              <div key={step.step} className="flex items-center">
                <div
                  className={`w-3 h-3 bg-gradient-to-r ${step.gradient} rounded-full animate-pulse`}
                ></div>
                {index < processSteps.length - 1 && (
                  <div className="w-16 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-600 dark:to-gray-700 mx-4"></div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950/50 rounded-3xl p-10 border border-gray-100 dark:border-gray-800">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Experience Premium Care?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                Book your first pickup today and discover why thousands of
                customers trust us with their laundry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="btn-primary px-8 py-4 text-lg font-semibold focus-ring inline-flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Schedule Pickup Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="tel:+9710503837591"
                  className="btn-secondary px-8 py-4 text-lg font-semibold focus-ring inline-flex items-center"
                >
                  <Clock className="mr-2 h-5 w-5" />
                  Call: +971 552 203 340
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
