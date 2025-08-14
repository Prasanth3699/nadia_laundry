"use client";

import { motion } from "framer-motion";
import {
  Truck,
  Clock,
  Shield,
  Award,
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
  Heart,
  ShoppingBag,
} from "lucide-react";
// import { useLanguage } from "@/components/providers/language-provider";
// import { scrollToSection } from "@/lib/utils";

export function Services() {
  // const { language, t } = useLanguage();

  // Modern service categories with enhanced visual design
  const services = [
    {
      id: "express-wash",
      title: "Express Washing",
      subtitle: "Same-day service",
      description:
        "Quick and efficient washing service with pickup and delivery within 24 hours",
      icon: Zap,
      features: ["Same-day pickup", "24-hour turnaround", "Premium detergents"],
      // price: "From AED 25",
      gradient: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-500/10",
      iconColor: "text-yellow-600 dark:text-yellow-400",
      borderColor: "border-yellow-200 dark:border-yellow-700/50",
      shadowColor: "shadow-yellow-500/20",
    },
    {
      id: "premium-care",
      title: "Premium Care",
      subtitle: "Luxury treatment",
      description:
        "Specialized care for delicate fabrics and high-end garments with expert handling",
      icon: Heart,
      features: ["Delicate handling", "Expert care", "Quality guarantee"],
      // price: "From AED 45",
      gradient: "from-pink-400 to-rose-500",
      bgColor: "bg-pink-500/10",
      iconColor: "text-pink-600 dark:text-pink-400",
      borderColor: "border-pink-200 dark:border-pink-700/50",
      shadowColor: "shadow-pink-500/20",
    },
    {
      id: "dry-cleaning",
      title: "Dry Cleaning",
      subtitle: "Professional grade",
      description:
        "Expert dry cleaning for suits, dresses, and specialty items requiring professional care",
      icon: Shield,
      features: ["Professional grade", "Stain removal", "Press included"],
      // price: "From AED 35",
      gradient: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-200 dark:border-blue-700/50",
      shadowColor: "shadow-blue-500/20",
    },
    {
      id: "pickup-delivery",
      title: "Free Pickup & Delivery",
      subtitle: "Convenient service",
      description:
        "Complimentary pickup and delivery service across Abu Dhabi for orders above AED 30",
      icon: Truck,
      features: ["Free service", "Wide coverage", "Flexible timing"],
      price: "Free on AED 30+",
      gradient: "from-green-400 to-emerald-500",
      bgColor: "bg-green-500/10",
      iconColor: "text-green-600 dark:text-green-400",
      borderColor: "border-green-200 dark:border-green-700/50",
      shadowColor: "shadow-green-500/20",
    },
    {
      id: "ironing-service",
      title: "Professional Ironing",
      subtitle: "Crisp & clean",
      description:
        "Expert pressing and ironing service to keep your clothes looking sharp and professional",
      icon: Award,
      features: ["Expert pressing", "Wrinkle-free", "Crease perfection"],
      // price: "From AED 15",
      gradient: "from-purple-400 to-violet-500",
      bgColor: "bg-purple-500/10",
      iconColor: "text-purple-600 dark:text-purple-400",
      borderColor: "border-purple-200 dark:border-purple-700/50",
      shadowColor: "shadow-purple-500/20",
    },
    {
      id: "specialty-items",
      title: "Specialty Items",
      subtitle: "Custom solutions",
      description:
        "Specialized cleaning for curtains, carpets, shoes, and other specialty items",
      icon: ShoppingBag,
      features: ["Custom cleaning", "Various items", "Expert handling"],
      // price: "From AED 50",
      gradient: "from-teal-400 to-cyan-500",
      bgColor: "bg-teal-500/10",
      iconColor: "text-teal-600 dark:text-teal-400",
      borderColor: "border-teal-200 dark:border-teal-700/50",
      shadowColor: "shadow-teal-500/20",
    },
  ];

  const stats = [
    { number: "10+", label: "Services Available", icon: Award },
    { number: "48hrs", label: "Max Delivery", icon: Clock },
    { number: "20+", label: "Areas Covered", icon: Truck },
    { number: "99%", label: "Satisfaction", icon: Star },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <section
      id="services"
      className="relative min-h-screen section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/20 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-green-400/20 to-teal-500/20 rounded-full blur-3xl"
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [-20, -120],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeOut",
            }}
            className={`absolute w-2 h-2 bg-blue-400/40 rounded-full ${
              i % 3 === 0
                ? "bottom-0 left-1/4"
                : i % 3 === 1
                ? "bottom-0 right-1/4"
                : "bottom-0 left-1/2"
            }`}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-blue-200 dark:border-blue-700/50 shadow-lg"
          >
            <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-800 dark:text-blue-200 font-semibold text-sm tracking-wide">
              Premium Services Collection
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-heading tracking-tight"
          >
            <span className="text-gray-900 dark:text-white font-extrabold">
              Professional{" "}
            </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent font-black">
              Laundry Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Experience premium laundry care with our comprehensive range of
            professional services. From express washing to specialty care,
            we&apos;ve got you covered.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
              >
                <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className={`group relative ${service.bgColor} backdrop-blur-sm border-2 ${service.borderColor} rounded-3xl p-8 shadow-lg ${service.shadowColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden cursor-pointer`}
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  initial={false}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <motion.div
                    className={`w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-all duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <Icon className={`h-8 w-8 ${service.iconColor}`} />
                  </motion.div>

                  {/* Title & Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors font-heading tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider font-heading">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors font-medium">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Price Badge - Only show if price exists */}
                  <div className="flex items-center justify-between">
                    {service.price && (
                      <span
                        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${service.gradient} text-white shadow-md`}
                      >
                        {service.price}
                      </span>
                    )}

                    <motion.div
                      className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        service.price ? "" : "ml-auto"
                      }`}
                      whileHover={{ scale: 1.2 }}
                    >
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                    </motion.div>
                  </div>
                </div>

                {/* Sparkle decoration */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="h-6 w-6 text-yellow-400" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-3xl p-12 text-center text-white shadow-2xl overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6"
            >
              <Star className="h-5 w-5 text-yellow-300" />
              <span className="font-semibold">Explore Full Service Range</span>
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-heading tracking-tight">
              Ready to Experience Premium Care?
            </h3>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed font-medium">
              Browse our complete service catalog with detailed pricing,
              features, and instant booking options.
            </p>

            <motion.button
              onClick={() => window.open("/services", "_self")}
              className="group bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-2xl font-bold text-lg font-heading tracking-tight transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Services
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
