"use client";

import { motion } from "framer-motion";
import coverage from "@/data/coverage.json";
import companyData from "@/data/company.json";
import { createWhatsAppUrl, getLocalizedText } from "@/lib/utils";
import { FaWhatsapp } from "react-icons/fa";

export function CoverageSection() {
  const { whatsappConfig } = companyData;

  const handleAskArea = () => {
    const message =
      "Hello! I’d like to confirm if you provide pickup/delivery service in my area.";
    const url = createWhatsAppUrl(whatsappConfig.phoneNumber, message);
    window.open(url, "_blank");
  };

  return (
    <section
      id="coverage"
      className="py-16 md:py-20 bg-white dark:bg-black"
      aria-labelledby="coverage-title"
    >
      <div className="container-custom text-center">
        <motion.h2
          id="coverage-title"
          className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {coverage.title}
        </motion.h2>

        <motion.p
          className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {coverage.subtitle}
        </motion.p>

        {/* Pills grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.04 },
            },
          }}
        >
          {coverage.areas.map((area, idx) => {
            // rotate subtle border colors to add visual variety while staying mild
            const colorClasses = [
              "border-blue-200/70",
              "border-purple-200/70",
              "border-emerald-200/70",
              "border-cyan-200/70",
            ];
            const selected = colorClasses[idx % colorClasses.length];
            // map light border color to a matching dark tinted border
            const darkMap: Record<string, string> = {
              "border-blue-200/70": "dark:border-blue-400/30",
              "border-purple-200/70": "dark:border-purple-400/30",
              "border-emerald-200/70": "dark:border-emerald-400/30",
              "border-cyan-200/70": "dark:border-cyan-400/30",
            };
            const selectedDark = darkMap[selected] ?? "dark:border-white/10";

            return (
              <motion.div
                key={area}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0 },
                }}
                className={`text-sm md:text-base px-4 py-2 rounded-full bg-white/90 text-slate-800 border ${selected} shadow-sm dark:bg-white/5 dark:text-white ${selectedDark} inline-flex items-center justify-center`}
              >
                {area}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Ask about your area */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            onClick={handleAskArea}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 transition-colors shadow-md"
          >
            <FaWhatsapp className="h-4 w-4" />
            Ask about your area
          </button>
        </motion.div>
      </div>
    </section>
  );
}
