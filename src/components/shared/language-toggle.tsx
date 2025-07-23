"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/providers/language-provider";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "ar" : "en")}
      className="h-9 px-3 font-medium"
    >
      <Languages className="h-4 w-4 mr-2" />
      {language === "en" ? "العربية" : "English"}
    </Button>
  );
}
