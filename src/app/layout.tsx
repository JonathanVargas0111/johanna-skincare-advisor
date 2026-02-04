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
        {/* Organization Schema - Priority for Sitelinks */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Johanna V. Arias | Experta en Skincare",
              "alternateName": "Johanna Skincare",
              "url": siteConfig.domain,
              "logo": `${siteConfig.domain}/og-image-premium.png`,
              "image": `${siteConfig.domain}/og-image-premium.png`,
              "description": siteConfig.description,
              "email": siteConfig.email,
              "telephone": `+57-${siteConfig.phone}`,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bogotá",
                "addressRegion": "Cundinamarca",
                "addressCountry": "CO"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Colombia"
              },
              "sameAs": [
                siteConfig.socials.instagram,
                siteConfig.socials.facebook,
                siteConfig.whatsappLink
              ].filter(Boolean),
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": `+57-${siteConfig.phone}`,
                "contactType": "customer service",
                "areaServed": "CO",
                "availableLanguage": ["Spanish"],
                "contactOption": "TollFree"
              },
              "founder": {
                "@type": "Person",
                "name": siteConfig.name,
                "jobTitle": "Experta en Transformación de Piel",
                "sameAs": [siteConfig.socials.instagram, siteConfig.whatsappLink].filter(Boolean)
              }
            })
          }}
        />

        {/* WebSite Schema - Enables SearchBox in Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Johanna Skincare | Experta en Transformación de Piel",
              "url": siteConfig.domain,
              "description": siteConfig.description,
              "publisher": {
                "@type": "Organization",
                "name": "Johanna V. Arias | Experta en Skincare",
                "logo": `${siteConfig.domain}/og-image-premium.png`
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": `${siteConfig.domain}/blog?q={search_term_string}`
                },
                "query-input": "required name=search_term_string"
              },
              "inLanguage": "es-CO"
            })
          }}
        />

        {/* Person Schema - Author/Professional */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Person", "ProfessionalService"],
              "name": siteConfig.name,
              "jobTitle": "Experta en Transformación de Piel",
              "description": siteConfig.description,
              "url": siteConfig.domain,
              "image": `${siteConfig.domain}/og-image-premium.png`,
              "serviceType": ["Consultoría Facial", "Tratamiento de Manchas", "Tratamiento de Acné", "Transformación de Piel", "Skincare Personalizado"],
              "knowsAbout": ["Skincare", "Tratamiento de Manchas", "Acné", "Consultoría Facial", "Botica Natural", "Cosmética Avanzada", "Método Johanna"],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bogotá",
                "addressCountry": "CO"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Colombia"
              },
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
