"use client";

import AboutSection from "@/components/site/AboutSection";
import ContactLinks from "@/components/site/ContactLinks";
import ExternalLink from "@/components/site/ExternalLink";
import useDocumentTitle from "@/hooks/useDocumentTitle";

export default function AboutPage() {
  useDocumentTitle("About - Santosh Pisini");
  return (
    <div className="container mt-16">
      <AboutSection />
      <div className="flex flex-col md:flex-row justify-between mt-8 gap-6">
        <ContactLinks />
        <ExternalLink
          label={"santosh_pisini@outlook.com"}
          url={"mailto:santosh_pisini@outlook.com"}
        />
      </div>
    </div>
  );
}
