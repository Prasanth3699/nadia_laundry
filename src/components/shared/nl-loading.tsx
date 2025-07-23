"use client";

import { motion, easeInOut } from "framer-motion";

interface NLLoadingProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function NLLoading({ size = "md", className = "" }: NLLoadingProps) {
  const sizeClasses = {
    sm: "text-4xl h-16 w-16",
    md: "text-6xl h-24 w-24",
    lg: "text-8xl h-32 w-32",
  };

  const letterVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.8,
      rotateY: 0,
    },
    animate: {
      opacity: [0, 1, 1, 0],
      y: [20, 0, 0, -20],
      scale: [0.8, 1, 1, 1.2],
      rotateY: [0, 0, 360, 360],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const shimmerVariants = {
    initial: { x: "-100%" },
    animate: {
      x: "100%",
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: easeInOut,
        delay: 1,
      },
    },
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`relative ${sizeClasses[size]} flex items-center justify-center`}
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {/* Background glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 rounded-2xl blur-xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main container */}
        <div className="relative flex items-center gap-1 font-display font-bold">
          {/* Letter N */}
          <motion.span
            variants={letterVariants}
            className="relative text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-600 to-emerald-500"
            style={{ fontFamily: "var(--font-display)" }}
          >
            N{/* Shimmer effect for N */}
            <motion.div
              variants={shimmerVariants}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              style={{ mixBlendMode: "overlay" }}
            />
          </motion.span>

          {/* Letter L */}
          <motion.span
            variants={letterVariants}
            className="relative text-transparent bg-clip-text bg-gradient-to-br from-emerald-500 via-blue-600 to-purple-500"
            style={{
              fontFamily: "var(--font-display)",
              animationDelay: "0.3s",
            }}
          >
            L{/* Shimmer effect for L */}
            <motion.div
              variants={shimmerVariants}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              style={{
                mixBlendMode: "overlay",
                animationDelay: "0.3s",
              }}
            />
          </motion.span>
        </div>

        {/* Floating dots around the letters */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            animate={{
              x: [0, Math.cos((i * 60 * Math.PI) / 180) * 40],
              y: [0, Math.sin((i * 60 * Math.PI) / 180) * 40],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Spinning ring */}
        <motion.div
          className="absolute inset-0 border-2 border-transparent border-t-blue-500 border-r-purple-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Loading text */}
      <motion.div
        className="ml-4 text-gray-600 dark:text-gray-400 font-medium"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="text-sm">Loading...</span>
        <motion.div
          className="flex gap-1 mt-1"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 bg-blue-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

// Simplified version for smaller spaces
export function NLLoadingSimple({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div className="relative flex items-center font-display font-bold text-2xl">
        <motion.span
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
          animate={{
            scale: [1, 1.2, 1],
            rotateY: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          N
        </motion.span>
        <motion.span
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-emerald-500"
          animate={{
            scale: [1, 1.2, 1],
            rotateY: [0, -180, -360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        >
          L
        </motion.span>
      </motion.div>
    </div>
  );
}
