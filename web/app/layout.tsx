import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/site/Header";
import BannerSection from "@/components/site/BannerSection";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santosh Pisini 👨‍💻",
  description: "Santosh Pisini's personal website & blog.",
  keywords: ["C#", "Azure", "Microsoft", "EPAM", "Next.js", "Santosh"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background antialiased mb-40",
          montserrat.className
        )}
      >
        <Header />
        <BannerSection />
        <div className="flex min-h-screen flex-col bg-background overflow-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
