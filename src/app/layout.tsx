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

export const metadata: Metadata = {
  title: "Johanna V. Arias - Asesora Certificada en Cuidado Natural de la Piel",
  description: "Transforma tu piel con asesoría experta en cuidado natural. Más de 10 años de experiencia. Consultas personalizadas, tratamientos naturales y rutinas adaptadas a tu tipo de piel.",
  keywords: ["cuidado de la piel", "skincare natural", "asesora piel", "tratamientos faciales", "rutina skincare", "piel radiante", "productos naturales"],
  authors: [{ name: "Johanna V. Arias" }],
  creator: "Johanna V. Arias",
  publisher: "Johanna V. Arias",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://johannavarias.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Johanna V. Arias - Asesora en Cuidado Natural de la Piel",
    description: "Transforma tu piel con asesoría experta. Más de 10 años de experiencia en tratamientos naturales y personalizados.",
    url: "https://johannavarias.com",
    siteName: "Johanna V. Arias",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Johanna V. Arias - Asesora en Cuidado de la Piel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Johanna V. Arias - Asesora en Cuidado Natural de la Piel",
    description: "Transforma tu piel con asesoría experta. Más de 10 años de experiencia.",
    images: ["/og-image.jpg"],
    creator: "@johannavarias",
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
  verification: {
    google: "your-google-site-verification-code",
  },
};

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
        <ServiceWorkerRegister />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
