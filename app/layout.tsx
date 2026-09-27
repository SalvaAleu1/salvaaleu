import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Salva Aleu | Student, Youth Leader & Digital Innovator",
    template: "%s | Salva Aleu",
  },
  description: site.description,
  keywords: [
    "Salva Aleu",
    "South Sudan",
    "youth leadership",
    "sustainable development",
    "digital innovation",
    "Industrial Chemistry",
    "University of Juba",
    "YIFO",
    "Youth Opportunities",
    "East Africa",
  ],
  authors: [{ name: "Salva Aleu", url: site.url }],
  creator: "Salva Aleu",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: "Salva Aleu",
    title: "Salva Aleu | Student, Youth Leader & Digital Innovator",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Salva Aleu | Student, Youth Leader & Digital Innovator",
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
