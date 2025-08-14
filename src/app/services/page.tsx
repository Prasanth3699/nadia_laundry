"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Search,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  MessageCircle,
  X,
  Truck,
  Award,
  Shield,
  Sparkles,
  ChevronDown,
  ChevronUp,
  // Grid3X3,
  // List,
  SlidersHorizontal
} from "lucide-react";

import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/providers/language-provider";
// import { formatPriceRange, createWhatsAppUrl, getLocalizedText } from "@/lib/utils";
import { createWhatsAppUrl, getLocalizedText } from "@/lib/utils";

import servicesData from "@/data/services.json";
import companyData from "@/data/company.json";
import coverageData from "@/data/coverage.json";

// Icon mapping for services
import {
  Shirt,
  Heart,
  Zap,
  Home,
  Baby,
  ShoppingBag,
  Scissors,
} from "lucide-react";

const iconMap = {
  Shirt, Heart, Zap, Home, Baby, ShoppingBag, Scissors, Truck, Sparkles,
};

// Price ranges commented out - no price filtering needed
// const priceRanges = [
//   { label: "All Prices", min: 0, max: Infinity },
//   { label: "Free", min: 0, max: 0 },
//   { label: "Under 25 AED", min: 1, max: 25 },
//   { label: "25-50 AED", min: 25, max: 50 },
//   { label: "50-100 AED", min: 50, max: 100 },
//   { label: "100+ AED", min: 100, max: Infinity },
// ];

const categories = [
  { id: "all", label: "All Services" },
  { id: "washing", label: "Washing" },
  { id: "cleaning", label: "Dry Cleaning" },
  { id: "special", label: "Special Care" },
  { id: "alterations", label: "Alterations" },
];

interface Service {
  id: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  images: string[];
  icon: string;
  duration: string;
  // priceRange: { min: number; max: number; currency: string };
  features: string[];
  process?: Array<{
    step: number;
    title: { en: string; ar: string };
    description: { en: string; ar: string };
    icon: string;
  }>;
}

interface ServiceDetailModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
  onBook: (serviceId: string, serviceName: string) => void;
}

function ServiceDetailModal({ service, isOpen, onClose, onBook }: ServiceDetailModalProps) {
  const { language } = useLanguage();
  
  if (!service) return null;

  const IconComponent = iconMap[service.icon as keyof typeof iconMap] ?? Shirt;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="h-full overflow-y-auto">
              {/* Header */}
              <div className="relative h-64 md:h-80">
                <Image
                  src={service.images[0]}
                  alt={getLocalizedText(service.title, language)}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Service Icon & Title */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h1 className="text-2xl md:text-3xl font-bold text-white">
                        {getLocalizedText(service.title, language)}
                      </h1>
                      <div className="flex items-center gap-4 mt-2 text-white/90">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{service.duration}</span>
                        </div>
                        {/* Price display commented out */}
                        {/* <div className="text-lg font-bold">
                          {formatPriceRange(
                            service.priceRange.min,
                            service.priceRange.max,
                            service.priceRange.currency
                          )}
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Description */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Service Description
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {getLocalizedText(service.description, language)}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    What&apos;s Included
                  </h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {service.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process Steps */}
                {service.process && service.process.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      Our Process
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {service.process.map((step, index: number) => {
                        const StepIcon = iconMap[step.icon as keyof typeof iconMap] ?? Star;
                        return (
                          <div key={index} className="text-center">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-3">
                              <StepIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                              {getLocalizedText(step.title, language)}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              {getLocalizedText(step.description, language)}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => onBook(service.id, getLocalizedText(service.title, language))}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Book via WhatsApp
                  </Button>
                  <Button
                    onClick={() => window.open(`tel:${companyData.company.contact.phone}`, "_self")}
                    variant="outline"
                    className="flex-1 py-4 px-8 rounded-2xl border-2"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

interface ServiceCardProps {
  service: Service;
  index: number;
  onViewDetails: (service: Service) => void;
  onBook: (serviceId: string, serviceName: string) => void;
}

function ServiceCard({ service, index, onViewDetails, onBook }: ServiceCardProps) {
  const { language } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const IconComponent = iconMap[service.icon as keyof typeof iconMap] ?? Shirt;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        {!imageError ? (
          <Image
            src={service.images[0]}
            alt={`${getLocalizedText(service.title, language)} - Professional laundry service in Abu Dhabi`}
            fill
            className={`object-cover transition-all duration-700 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setImageLoaded(true);
            }}
            priority={index < 6}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
            <IconComponent className="h-16 w-16 text-blue-500/60" />
          </div>
        )}
        
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Icon Badge */}
        <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
          <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>

        {/* Price Badge commented out */}
        {/* <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
          {formatPriceRange(
            service.priceRange.min,
            service.priceRange.max,
            service.priceRange.currency
          )}
        </div> */}

        {/* Duration */}
        <div className="absolute bottom-4 left-4 bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {service.duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {getLocalizedText(service.title, language)}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">
          {getLocalizedText(service.description, language)}
        </p>

        {/* Features Preview */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 3).map((feature: string, featureIndex: number) => (
              <div key={featureIndex} className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-xs">
                <CheckCircle className="h-3 w-3 text-green-500" />
                <span className="text-gray-600 dark:text-gray-300 truncate">{feature}</span>
              </div>
            ))}
            {service.features.length > 3 && (
              <div className="text-xs text-gray-500 px-2 py-1">
                +{service.features.length - 3} more
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Button
            onClick={() => onBook(service.id, getLocalizedText(service.title, language))}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Book Now
          </Button>
          
          <Button
            onClick={() => onViewDetails(service)}
            variant="outline"
            className="w-full py-2.5 rounded-xl border-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
          >
            View Details
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  // const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
  // const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  
  const { language } = useLanguage();
  const { whatsappConfig } = companyData;

  // Enhanced filtering logic
  const filteredServices = useMemo(() => {
    return servicesData.services.filter((service) => {
      const titleMatch = getLocalizedText(service.title, language)
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      
      const descMatch = getLocalizedText(service.description, language)
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      
      const featureMatch = service.features.some((feature: string) =>
        feature.toLowerCase().includes(searchTerm.toLowerCase())
      );

      const searchMatch = titleMatch || descMatch || featureMatch;

      const categoryMatch = selectedCategory === "all" || 
        service.id.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        getLocalizedText(service.title, language).toLowerCase().includes(selectedCategory.toLowerCase());

      // Price filtering commented out
      // const priceMatch = selectedPriceRange.max === Infinity || 
      //   (service.priceRange.min >= selectedPriceRange.min && 
      //    service.priceRange.max <= selectedPriceRange.max);

      return searchMatch && categoryMatch;
    });
  }, [searchTerm, selectedCategory, language]);

  const handleBookService = (serviceId: string, serviceName: string) => {
    const message = getLocalizedText(whatsappConfig.message, language) + 
      `\n\nSpecific Service: ${serviceName}`;
    const whatsappUrl = createWhatsAppUrl(whatsappConfig.phoneNumber, message);
    window.open(whatsappUrl, "_blank");
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    // setSelectedPriceRange(priceRanges[0]);
  };

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5" />
          
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-6 py-3 rounded-full text-sm font-medium mb-6"
              >
                <Star className="h-4 w-4" />
                Premium Laundry Services
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Complete Laundry
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Professional cleaning services with modern technology, eco-friendly solutions, 
                and exceptional care for all your garments.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-gray-600 dark:text-gray-300">Services Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">24-72h</div>
                  <div className="text-gray-600 dark:text-gray-300">Delivery Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">20+</div>
                  <div className="text-gray-600 dark:text-gray-300">Areas Covered</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search & Filters */}
        <section className="py-8 sticky top-20 z-40 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search Bar */}
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder={`Search services, features...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500"
                  aria-label="Search laundry services"
                  role="searchbox"
                />
              </div>

              {/* Quick Filters */}
              <div className="flex items-center gap-3 w-full lg:w-auto">
                <Button
                  onClick={() => setShowFilters(!showFilters)}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                  {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>

                {/* Grid/List view toggle removed */}
              </div>
            </div>

            {/* Expanded Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-4 p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Category Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Category
                      </label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      >
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Price Range Filter - Commented Out */}
                    {/* <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Price Range
                      </label>
                      <select
                        value={selectedPriceRange.label}
                        onChange={(e) => {
                          const range = priceRanges.find(r => r.label === e.target.value);
                          if (range) setSelectedPriceRange(range);
                        }}
                        className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      >
                        {priceRanges.map((range) => (
                          <option key={range.label} value={range.label}>
                            {range.label}
                          </option>
                        ))}
                      </select>
                    </div> */}

                    {/* Clear Filters */}
                    <div className="flex items-end">
                      <Button
                        onClick={clearFilters}
                        variant="outline"
                        className="w-full"
                      >
                        Clear All Filters
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Service Coverage */}
        <section className="py-8 bg-gray-50 dark:bg-gray-900">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Service Coverage Areas
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  We deliver to {coverageData.areas.length} locations across Abu Dhabi
                </p>
              </div>
              <Button
                onClick={() => setShowLocations(!showLocations)}
                variant="outline"
                className="flex items-center gap-2"
              >
                <MapPin className="h-4 w-4" />
                {showLocations ? 'Hide' : 'Show'} Areas
                {showLocations ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </div>

            <AnimatePresence>
              {showLocations && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
                >
                  {coverageData.areas.map((area, index) => (
                    <motion.div
                      key={area}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 p-3 rounded-xl"
                    >
                      <MapPin className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300 truncate">
                        {area}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Available Services
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {filteredServices.length} of {servicesData.services.length} services
                </p>
              </div>
              
              {/* Premium Badges */}
              <div className="hidden md:flex items-center gap-3">
                <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm">
                  <Shield className="h-4 w-4" />
                  Insured
                </div>
                <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm">
                  <Award className="h-4 w-4" />
                  Professional
                </div>
              </div>
            </div>

            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredServices.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    index={index}
                    onViewDetails={setSelectedService}
                    onBook={handleBookService}
                  />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  No services found
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
                  Try adjusting your search terms or filters to find the perfect service for your needs.
                </p>
                <Button onClick={clearFilters} className="px-8 py-3">
                  Clear All Filters
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container-custom text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Something Special?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Contact us for custom packages, commercial solutions, or special garment care requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => handleBookService("custom", "Custom Service")}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold text-lg"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Get Custom Quote
                </Button>
                <Button
                  onClick={() => window.open(`tel:${companyData.company.contact.phone}`, "_self")}
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        onBook={handleBookService}
      />
    </>
  );
}