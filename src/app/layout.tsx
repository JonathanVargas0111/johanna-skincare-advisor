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
import { constructMetadata } from "../lib/metadata";
import Footer from "../components/organisms/Footer";

export const metadata = constructMetadata();

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
              "name": siteConfig.name,
              "jobTitle": "Experta en Transformación de Piel",
              "description": siteConfig.description,
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
              "url": siteConfig.domain,
              "image": `${siteConfig.domain}/og-image.jpg`,
              "sameAs": [
                siteConfig.whatsappLink,
                siteConfig.socials?.instagram
              ].filter(Boolean)
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
