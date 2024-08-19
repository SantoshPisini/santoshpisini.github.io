"use client";

import AboutSection from "@/components/site/AboutSection";
import HeroSection from "@/components/site/HeroSection";

export default function HomePage() {
  return (
    <>
      <div className="container space-x-4">
        <HeroSection />
        <AboutSection />
        <div className="mt-80 text-center">🚧 Under construction 🚧</div>
      </div>
    </>
  );
}
