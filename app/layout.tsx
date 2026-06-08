import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/site/announcement-bar";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Nurturly FoldAway™ Bedside Changing Station | Baby Essentials for Newborn Nights",
    template: "%s | Nurturly Baby Essentials",
  },
  description:
    "A space-saving bedside changing station designed to make nighttime diaper changes easier. Join the Nurturly FoldAway™ waitlist for product updates and early access.",
  keywords: [
    "bedside changing station",
    "bedside changing table",
    "foldaway changing station",
    "baby changing station",
    "newborn changing station",
    "nighttime diaper changes",
    "changing table alternative",
    "baby registry must-have",
    "small nursery ideas",
    "changing table for small spaces",
    "postpartum bedside setup",
  ],
  openGraph: {
    type: "website",
    siteName: "Nurturly Baby Essentials",
    title: "Nurturly FoldAway™ Bedside Changing Station",
    description:
      "A space-saving bedside changing station designed to make nighttime diaper changes easier. Join the waitlist for early access.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nurturly FoldAway™ Bedside Changing Station",
    description: "A space-saving bedside changing station for easier newborn nights.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${nunitoSans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-cream antialiased">
        <AnnouncementBar />
        <SiteHeader />
        <div className="flex-1 px-4 md:px-10 lg:px-[192px]">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
