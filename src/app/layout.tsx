import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mydoubleclick.com"),
  title: {
    default: "Double Click Computing | IT Services NJ",
    template: "%s | Double Click Computing",
  },
  description:
    "New Jersey's trusted IT partner since 1987. Managed IT, cybersecurity, networking, and on-site support for businesses and homeowners across NJ.",
  keywords: [
    "IT support New Jersey",
    "managed IT services NJ",
    "computer repair NJ",
    "business IT support NJ",
    "home computer help NJ",
    "cybersecurity NJ",
    "network setup NJ",
    "IT company New Jersey",
    "on-site computer repair NJ",
    "Monmouth County IT support",
    "Ocean County IT support",
    "Middlesex County IT support",
    "small business IT NJ",
    "firewall setup NJ",
    "Bitdefender NJ",
    "remote IT support NJ",
  ],
  authors: [{ name: "Double Click Computing", url: "https://www.mydoubleclick.com" }],
  creator: "Double Click Computing",
  publisher: "Double Click Computing",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mydoubleclick.com",
    siteName: "Double Click Computing",
    title: "Double Click Computing | IT Services NJ",
    description:
      "New Jersey's trusted IT partner since 1987. Managed IT, cybersecurity, networking, and on-site support for businesses and homeowners across NJ.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Double Click Computing — IT Services NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Double Click Computing | IT Services NJ",
    description:
      "New Jersey's trusted IT partner since 1987. Managed IT, cybersecurity, networking, and on-site support for businesses and homeowners across NJ.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.mydoubleclick.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Local Business structured data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.mydoubleclick.com",
    name: "Double Click Computing",
    description:
      "New Jersey's trusted IT partner since 1987. Managed IT, cybersecurity, networking, and on-site support for businesses and homeowners across NJ.",
    url: "https://www.mydoubleclick.com",
    telephone: "+18889254259",
    foundingDate: "1987",
    areaServed: {
      "@type": "State",
      name: "New Jersey",
    },
    address: {
      "@type": "PostalAddress",
      addressState: "NJ",
      addressCountry: "US",
    },
    priceRange: "$$",
    image: "https://www.mydoubleclick.com/images/logo.png",
    logo: "https://www.mydoubleclick.com/images/logo.png",
    sameAs: ["https://www.facebook.com/mydoubleclick"],
    serviceArea: {
      "@type": "State",
      name: "New Jersey",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Managed IT Services" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cybersecurity" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Network Setup & Firewall" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "On-Site Computer Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Remote IT Support" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Backup" } },
      ],
    },
  };

  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
