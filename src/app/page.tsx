"use client";

import dynamic from "next/dynamic";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { WhatsAppFloat } from "@/components/shared/whatsapp-float";
import { NLLoadingSimple } from "@/components/shared/nl-loading";

const Services = dynamic(
  () =>
    import("@/components/sections/services").then((mod) => ({
      default: mod.Services,
    })),
  {
    loading: () => (
      <div className="section-padding bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <NLLoadingSimple />
      </div>
    ),
  }
);

const Process = dynamic(
  () =>
    import("@/components/sections/process").then((mod) => ({
      default: mod.Process,
    })),
  {
    loading: () => (
      <div className="section-padding bg-white dark:bg-gray-900 flex items-center justify-center">
        <NLLoadingSimple />
      </div>
    ),
  }
);

const About = dynamic(
  () =>
    import("@/components/sections/about").then((mod) => ({
      default: mod.About,
    })),
  {
    loading: () => (
      <div className="section-padding bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <NLLoadingSimple />
      </div>
    ),
  }
);

const Contact = dynamic(
  () =>
    import("@/components/sections/contact").then((mod) => ({
      default: mod.Contact,
    })),
  {
    loading: () => (
      <div className="section-padding bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <NLLoadingSimple />
      </div>
    ),
  }
);

const Footer = dynamic(
  () =>
    import("@/components/sections/footer").then((mod) => ({
      default: mod.Footer,
    })),
  {
    loading: () => (
      <div className="bg-gray-900 py-16 flex items-center justify-center">
        <NLLoadingSimple />
      </div>
    ),
  }
);

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Process Section */}
      <Process />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </main>
  );
}
