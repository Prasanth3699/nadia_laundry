"use client";

import { motion } from "framer-motion";
import { Settings, Sparkles, Clock, Leaf, Zap, Star } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { getLocalizedText } from "@/lib/utils";
import companyData from "@/data/company.json";
import { easeOut } from "framer-motion";

const iconMap = {
  Settings,
  Sparkles,
  Clock,
  Leaf,
  Zap,
};

export function Speciality() {
  const { language } = useLanguage();
  const { speciality } = companyData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section className="section-padding bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-400/20 dark:to-purple-400/20 rounded-full px-6 py-3 mb-6">
            <Star className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
            <span className="text-indigo-500 dark:text-indigo-400 font-semibold text-overline">
              What Makes Us Special
            </span>
          </div>

          <h2 className="heading-secondary mb-6 text-gradient">
            {getLocalizedText(speciality.title, language)}
          </h2>

          <p className="text-body-large text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the premium features that set our laundry service apart
            from the rest
          </p>
        </motion.div>

        {/* Speciality Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {speciality.items.map((item) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className="glass-card p-6 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border hover:border-indigo-300 dark:hover:border-indigo-600">
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    {getLocalizedText(item.title, language)}
                  </h3>

                  {/* Decorative line */}
                  <div className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-body text-gray-600 dark:text-gray-300 mb-6">
            Experience the difference with our premium laundry services
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">Premium Quality</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="h-4 w-4 text-indigo-500" />
              <span className="text-sm font-medium">Fast Service</span>
            </div>
            <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2">
              <Leaf className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium">Eco-Friendly</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
