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
  title: "Distribuidora Autorizada Sheló Nabel en Colombia - Johanna Skincare",
  description: "Distribuidora Autorizada Sheló Nabel en Colombia. Asesoría experta en cuidado natural de la piel con productos Sheló Nabel. Catálogo 2025. Johanna Skincare.",
  keywords: ["cuidado de la piel", "skincare natural", "asesora piel", "tratamientos faciales", "rutina skincare", "piel radiante", "productos naturales", "sheló nabel", "distribuidora autorizada", "colombia"],
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
    title: "Distribuidora Autorizada Sheló Nabel en Colombia - Johanna Skincare",
    description: "Distribuidora Autorizada Sheló Nabel en Colombia. Asesoría experta en cuidado natural de la piel con productos Sheló Nabel. Catálogo 2025. Johanna Skincare.",
    url: "https://johannavarias.com",
    siteName: "Johanna V. Arias",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Distribuidora Autorizada Sheló Nabel en Colombia - Johanna Skincare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Distribuidora Autorizada Sheló Nabel en Colombia - Johanna Skincare",
    description: "Distribuidora Autorizada Sheló Nabel en Colombia. Asesoría experta en cuidado natural de la piel con productos Sheló Nabel. Catálogo 2025. Johanna Skincare.",
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
}; export default function RootLayout({
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
        <footer className="py-12 text-white bg-gray-900">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-4 text-2xl font-bold text-white font-playfair">
                Johanna V. Arias
              </div>
              <p className="max-w-md mx-auto mb-6 text-gray-400 font-roboto">
                Tu piel, nuestra pasión. Resultados naturales, confianza eterna.
              </p>
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-gray-400 transition-colors hover:text-pink-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 transition-colors hover:text-pink-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.747-1.378 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.017z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 transition-colors hover:text-pink-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.747-1.378 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.017z" />
                  </svg>
                </a>
              </div>
              <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
                <p>&copy; 2025 Johanna V. Arias - <a href="https://nandark.com/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 transition-colors">nandark.com</a>. Todos los derechos reservados.</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
