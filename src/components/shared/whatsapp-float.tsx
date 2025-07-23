"use client";

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createWhatsAppUrl, getLocalizedText } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";
import companyData from "@/data/company.json";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppFloat() {
  const { language } = useLanguage();
  const { whatsappConfig } = companyData;

  const message = getLocalizedText(whatsappConfig.message, language);
  const whatsappUrl = createWhatsAppUrl(whatsappConfig.phoneNumber, message);

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  const handleCallClick = () => {
    window.open(`tel:${whatsappConfig.phoneNumber}`, "_self");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Call Button */}
      <Button
        onClick={handleCallClick}
        className="whatsapp-float bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-xl"
        size="icon"
        aria-label="Call Now"
      >
        <Phone className="h-6 w-6" />
      </Button>

      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsAppClick}
        className="whatsapp-float bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl"
        size="icon"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="h-6 w-6" />
      </Button>
    </div>
  );
}
