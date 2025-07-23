"use client";

import { motion } from "framer-motion";
import { Loader2, Sparkles } from "lucide-react";

interface LoadingProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "spinner" | "dots" | "pulse" | "brand";
  text?: string;
  fullScreen?: boolean;
}

export function Loading({
  size = "md",
  variant = "spinner",
  text = "Loading...",
  fullScreen = false,
}: LoadingProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  const containerClasses = fullScreen
    ? "fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50"
    : "flex items-center justify-center p-4";

  const renderSpinner = () => (
    <Loader2 className={`${sizeClasses[size]} animate-spin text-brand-blue`} />
  );

  const renderDots = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-brand-blue rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );

  const renderPulse = () => (
    <motion.div
      className={`${sizeClasses[size]} bg-brand-blue rounded-full`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
      }}
    />
  );

  const renderBrand = () => (
    <div className="relative">
      <motion.div
        className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-green rounded-full flex items-center justify-center"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span className="text-white font-bold text-xl">N</span>
      </motion.div>

      <motion.div
        className="absolute -top-2 -right-2"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        <Sparkles className="h-6 w-6 text-brand-gold" />
      </motion.div>
    </div>
  );

  const renderLoader = () => {
    switch (variant) {
      case "dots":
        return renderDots();
      case "pulse":
        return renderPulse();
      case "brand":
        return renderBrand();
      default:
        return renderSpinner();
    }
  };

  return (
    <div className={containerClasses}>
      <div className="text-center">
        <div className="flex justify-center mb-4">{renderLoader()}</div>
        {text && (
          <motion.p
            className={`${textSizeClasses[size]} text-gray-600 dark:text-gray-300`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {text}
          </motion.p>
        )}
      </div>
    </div>
  );
}

// Skeleton Loading Components
export function ServiceCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 animate-pulse">
      <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
      <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
      <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded"></div>
    </div>
  );
}

export function TestimonialSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 animate-pulse">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded"
          ></div>
        ))}
      </div>
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        <div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 mb-1"></div>
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
        </div>
      </div>
    </div>
  );
}

// Loading Screen for full page
export function LoadingScreen() {
  return (
    <Loading
      variant="brand"
      size="xl"
      text="Loading Nadia Laundry..."
      fullScreen
    />
  );
}
