import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegister from "../components/ServiceWorkerRegister";
import Analytics from "../components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: siteConfig.titleFull,
  description: siteConfig.description,
  keywords: ["transformación de piel colombia", "tratamiento manchas colombia", "especialista acné", "consultoría facial bogotá", "método johanna", "skincare clima tropical", "experta en piel", "envíos colombia", "sheló nabel colombia", "mary kay colombia"],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.domain),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteConfig.titleFull,
    description: siteConfig.description,
    url: siteConfig.domain,
    siteName: siteConfig.name,
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Experta en Transformación de Piel en Colombia`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.titleFull,
    description: siteConfig.description,
    images: ["/og-image.jpg"],
    creator: "@johannavarias",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
  category: 'health & beauty',
}; import Footer from "../components/organisms/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#DD5882" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Person", "ProfessionalService"],
              "name": "Johanna V. Arias",
              "jobTitle": "Experta en Transformación de Piel",
              "description": "Especialista en consultoría facial y tratamiento de manchas y acné usando el Método Johanna - sinergia entre botica natural (Sheló) y tecnología cosmética avanzada (Mary Kay)",
              "areaServed": {
                "@type": "Country",
                "name": "Colombia"
              },
              "serviceType": ["Consultoría Facial", "Tratamiento de Manchas", "Tratamiento de Acné", "Transformación de Piel", "Skincare Personalizado"],
              "knowsAbout": ["Skincare", "Tratamiento de Manchas", "Acné", "Consultoría Facial", "Botica Natural", "Cosmética Avanzada", "Método Johanna"],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bogotá",
                "addressCountry": "CO"
              },
              "url": "https://johannaskincare.com",
              "image": "https://johannaskincare.com/og-image.jpg",
              "sameAs": [
                "https://wa.me/573124567890"
              ]
            })
          }}
        />
        <ServiceWorkerRegister />
        <Analytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}
