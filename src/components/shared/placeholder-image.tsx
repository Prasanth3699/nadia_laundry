"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fallbackIcon?: React.ReactNode;
  fallbackText?: string;
}

export function PlaceholderImage({
  src,
  alt,
  width = 400,
  height = 300,
  className,
  priority = false,
  fallbackIcon,
  fallbackText,
}: PlaceholderImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const generatePlaceholderUrl = (text: string, width: number, height: number) => {
    const baseUrl = "https://via.placeholder.com";
    const colors = [
      "4F46E5-FFFFFF", // Brand blue
      "10B981-FFFFFF", // Brand green
      "F59E0B-FFFFFF", // Brand gold
      "EC4899-FFFFFF", // Brand pink
      "6B7280-FFFFFF", // Neutral
    ];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const encodedText = encodeURIComponent(text);
    
    return `${baseUrl}/${width}x${height}/${randomColor}?text=${encodedText}`;
  };

  const placeholderUrl = generatePlaceholderUrl(
    fallbackText || alt,
    width,
    height
  );

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Premium gradient overlay for failed images */}
      {hasError && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 flex items-center justify-center"
          style={{ width, height }}
        >
          <div className="text-center">
            {fallbackIcon && (
              <div className="mx-auto mb-2 text-neutral-400">
                {fallbackIcon}
              </div>
            )}
            <p className="text-neutral-600 dark:text-neutral-300 text-sm font-medium">
              {fallbackText || alt}
            </p>
          </div>
        </div>
      )}

      {/* Loading placeholder */}
      {isLoading && !hasError && (
        <div
          className="absolute inset-0 bg-neutral-200 dark:bg-neutral-700 animate-pulse"
          style={{ width, height }}
        />
      )}

      {/* Actual image */}
      <Image
        src={hasError ? placeholderUrl : src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
      />
    </div>
  );
}