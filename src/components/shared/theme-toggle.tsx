"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9">
        <Sun className="h-4 w-4" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-9 w-9 relative hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-4 h-4">
        <Sun 
          className={`absolute inset-0 h-4 w-4 text-gray-700 dark:text-gray-300 transition-all duration-300 ${
            isDark ? 'rotate-90 scale-0' : 'rotate-0 scale-100'
          }`} 
        />
        <Moon 
          className={`absolute inset-0 h-4 w-4 text-gray-700 dark:text-gray-300 transition-all duration-300 ${
            isDark ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
          }`} 
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
