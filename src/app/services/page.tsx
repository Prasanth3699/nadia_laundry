"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shirt,
  Sparkles,
  Zap,
  Eraser,
  Home,
  Building2,
  ArrowRight,
  Clock,
  Star,
  CheckCircle,
  Filter,
  Search,
  Heart,
  Baby,
  ShoppingBag,
  Scissors,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceholderImage } from "@/components/shared/placeholder-image";
import { Header } from "@/components/sections/header";
import { useLanguage } from "@/components/providers/language-provider";
import {
  getLocalizedText,
  formatPriceRange,
  createWhatsAppUrl,
} from "@/lib/utils";
import servicesData from "@/data/services.json";
import companyData from "@/data/company.json";

const iconMap = {
  Shirt,
  Sparkles,
  Zap,
  Eraser,
  Home,
  Building2,
  Heart,
  Baby,
  ShoppingBag,
  Scissors,
};

const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under 25 AED", min: 0, max: 25 },
  { label: "25-50 AED", min: 25, max: 50 },
  { label: "50-100 AED", min: 50, max: 100 },
  { label: "100+ AED", min: 100, max: Infinity },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const { language } = useLanguage();
  const { whatsappConfig } = companyData;

  const getLocalizedText = (text: { en: string; ar: string }) => {
    return text[language as keyof typeof text] || text.en;
  };

  const handleBookService = (serviceId: string, serviceName: string) => {
    const message = `Hello! I'm interested in booking your ${serviceName} service. Could you please provide more details about pricing and scheduling?`;
    const whatsappUrl = createWhatsAppUrl(whatsappConfig.phoneNumber, message);
    window.open(whatsappUrl, "_blank");
  };

  const categories = [
    { id: "all", name: "All Services", count: servicesData.services.length },
    { id: "regular", name: "Regular Care", count: 3 },
    { id: "premium", name: "Premium Care", count: 2 },
    { id: "commercial", name: "Commercial", count: 1 },
  ];

  const filteredServices = servicesData.services.filter((service) => {
    const matchesSearch = getLocalizedText(service.title, language)
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
      getLocalizedText(service.description, language)
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesPrice = service.priceRange.min >= selectedPriceRange.min &&
      (selectedPriceRange.max === Infinity || service.priceRange.max <= selectedPriceRange.max);

    return matchesSearch && matchesPrice;
  });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <>
      {/* Header */}
      <Header />
      
      <main className="min-h-screen bg-gray-50 dark:bg-black pt-24">
        <div className="container-custom">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-20"
        >
          <motion.div 
            className="inline-flex items-center gap-3 glass-card rounded-full px-8 py-4 mb-8 border border-blue-500/20 dark:border-blue-400/20 shadow-lg"
            style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))' }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Star className="h-6 w-6 text-blue-500 dark:text-blue-400" />
            </motion.div>
            <span className="text-blue-600 dark:text-blue-400 font-bold text-lg tracking-wide">
              Our Premium Services
            </span>
          </motion.div>

          <motion.h1 
            className="heading-primary mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Complete Laundry Solutions
          </motion.h1>
          
          <motion.p 
            className="text-body-large text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Experience premium laundry and dry cleaning services with modern technology, 
            eco-friendly solutions, and exceptional care. From everyday essentials to specialized treatments, 
            we deliver excellence in every detail.
          </motion.p>
        </motion.div>


        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="glass-card rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/50 p-6" style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))' }}>
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <motion.div 
                className="flex-1 relative"
                whileFocus={{ scale: 1.02 }}
              >
                <motion.div
                  className="absolute left-4 top-1/2 transform -translate-y-1/2"
                >
                  <Search className="text-blue-500 h-6 w-6" />
                </motion.div>
                <input
                  type="text"
                  placeholder="Search for specific services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-transparent bg-white/50 dark:bg-black/50 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-black/80 transition-all duration-300 text-base backdrop-blur-sm placeholder-gray-500 dark:placeholder-gray-400"
                />
              </motion.div>

              {/* Price Filter */}
              <motion.div 
                className="relative min-w-fit"
                whileHover={{ scale: 1.02 }}
              >
                <select
                  value={selectedPriceRange.label}
                  onChange={(e) => {
                    const range = priceRanges.find(r => r.label === e.target.value);
                    if (range) setSelectedPriceRange(range);
                  }}
                  className="appearance-none pl-4 pr-10 py-3 rounded-xl border-2 border-transparent bg-white/50 dark:bg-black/50 text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 focus:bg-white dark:focus:bg-black/80 transition-all duration-300 min-w-40 text-base backdrop-blur-sm cursor-pointer"
                >
                  {priceRanges.map((range) => (
                    <option key={range.label} value={range.label} className="bg-white dark:bg-black">
                      {range.label}
                    </option>
                  ))}
                </select>
                <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-500 h-6 w-6 pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {filteredServices.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            const isSelected = selectedService === service.id;
            const isHovered = hoveredCard === service.id;

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative"
                onHoverStart={() => setHoveredCard(service.id)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -8 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30
                }}
              >
                <motion.div
                  className={`glass-card border border-white/20 dark:border-gray-700/50 rounded-3xl overflow-hidden cursor-pointer relative ${
                    isSelected ? "ring-2 ring-blue-500/50 bg-blue-50/50 dark:bg-blue-900/20" : ""
                  }`}
                  onClick={() => setSelectedService(isSelected ? null : service.id)}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: isSelected 
                      ? "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(255, 255, 255, 0.1))"
                      : "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))"
                  }}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                  />

                  {/* Service Image */}
                  <div className="relative h-56 overflow-hidden">
                    <PlaceholderImage
                      src={service.images[0]}
                      alt={getLocalizedText(service.title, language)}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      fallbackIcon={<IconComponent className="h-12 w-12" />}
                      fallbackText={getLocalizedText(service.title, language)}
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Service Icon */}
                    <motion.div 
                      className="absolute top-4 left-4 w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg border border-white/30"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <IconComponent className="h-7 w-7 text-white" />
                    </motion.div>
                    
                    {/* Price Badge */}
                    <motion.div 
                      className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-lg backdrop-blur-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      {formatPriceRange(
                        service.priceRange.min,
                        service.priceRange.max,
                        service.priceRange.currency
                      )}
                    </motion.div>

                    {/* Duration badge */}
                    <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-xl text-sm font-medium border border-white/30">
                      <Clock className="inline h-3 w-3 mr-1" />
                      {service.duration}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 relative z-10">
                    {/* Service Title */}
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                      layout
                    >
                      {getLocalizedText(service.title, language)}
                    </motion.h3>

                    {/* Service Description */}
                    <motion.p 
                      className="text-gray-600 dark:text-gray-300 text-center mb-6 leading-relaxed text-sm"
                      layout
                    >
                      {getLocalizedText(service.description, language)}
                    </motion.p>

                    {/* Features - Always visible but compact */}
                    <div className="mb-6">
                      <div className={`grid ${
                        isSelected ? "grid-cols-1 gap-3" : "grid-cols-2 gap-2"
                      }`}>
                        {service.features.slice(0, isSelected ? service.features.length : 4).map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle className="h-3 w-3 text-emerald-500 flex-shrink-0" />
                            <span className={`text-gray-600 dark:text-gray-300 ${
                              isSelected ? "text-sm" : "text-xs"
                            }`}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <motion.div 
                      className="space-y-3"
                      layout
                    >
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBookService(
                            service.id,
                            getLocalizedText(service.title, language)
                          );
                        }}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group/btn"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Book Now</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </motion.button>

                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedService(isSelected ? null : service.id);
                        }}
                        className={`w-full font-medium py-2.5 px-6 rounded-xl transition-all duration-300 ${
                          isSelected 
                            ? "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                            : "bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-gray-700/70 border border-gray-200 dark:border-gray-600"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSelected ? "Show Less" : "View Details"}
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No services found
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Try adjusting your search terms or price range
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedPriceRange(priceRanges[0]);
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center text-white shadow-2xl mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Contact us for personalized laundry packages and commercial solutions
          </p>
          <Button
            onClick={() => handleBookService("custom", "Custom Solution")}
            variant="outline"
            className="bg-white text-blue-600 border-white hover:bg-gray-100"
          >
            Get Custom Quote
          </Button>
        </motion.div>
        </div>
      </main>
    </>
  );
}