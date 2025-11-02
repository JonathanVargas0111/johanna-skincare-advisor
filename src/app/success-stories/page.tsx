import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Casos de Éxito - Transformaciones Reales | Johanna V. Arias',
  description: 'Descubre las historias de éxito y las transformaciones reales de mis clientes. Inspírate con resultados auténticos en el cuidado de la piel.',
  keywords: ['casos de éxito', 'testimonios skincare', 'antes y después', 'transformación piel', 'resultados reales'],
  openGraph: {
    title: 'Casos de Éxito - Transformaciones Reales | Johanna V. Arias',
    description: 'Descubre las historias de éxito y las transformaciones reales de mis clientes. Inspírate con resultados auténticos en el cuidado de la piel.',
    url: 'https://johannavarias.com/success-stories',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Consider a specific image for success stories
        width: 1200,
        height: 630,
        alt: 'Casos de Éxito en Skincare',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casos de Éxito - Transformaciones Reales | Johanna V. Arias',
    description: 'Descubre las historias de éxito y las transformaciones reales de mis clientes. Inspírate con resultados auténticos en el cuidado de la piel.',
    images: ['/og-image.jpg'], // Consider a specific image for success stories
    creator: '@johannavarias',
  },
  alternates: {
    canonical: 'https://johannavarias.com/success-stories',
  },
};

export default function SuccessStoriesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage", // Or WebPage, will be updated to Review/AggregateRating with actual data
    "name": "Casos de Éxito - Johanna V. Arias",
    "description": "Historias de éxito y transformaciones reales de clientes de Johanna V. Arias.",
    "url": "https://johannavarias.com/success-stories",
    "publisher": {
      "@type": "Person",
      "name": "Johanna V. Arias"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">Casos de Éxito y Transformaciones Reales</h1>
          <p className="mb-8 text-xl text-gray-600">
            Aquí es donde la magia sucede. Muy pronto, esta sección estará llena de historias inspiradoras y fotos de antes y después que demuestran el poder de un cuidado de la piel personalizado.
          </p>
          <p className="mb-12 text-lg text-gray-700">
            Cada transformación es un testimonio de dedicación, ciencia y el enfoque holístico que Johanna V. Arias ofrece a sus clientes.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder for future success stories */}
            <div className="p-6 bg-rose-50 rounded-lg shadow-md">
              <h3 className="mb-2 text-xl font-semibold text-gray-800">Historia de [Nombre del Cliente]</h3>
              <p className="text-gray-600">"Antes, mi piel era un desastre. Ahora, ¡nunca me había sentido tan segura!"</p>
              <div className="mt-4 text-pink-600 font-medium">Próximamente...</div>
            </div>
            <div className="p-6 bg-amber-50 rounded-lg shadow-md">
              <h3 className="mb-2 text-xl font-semibold text-gray-800">Transformación de [Otro Cliente]</h3>
              <p className="text-gray-600">"Los consejos de Johanna cambiaron mi vida. ¡Mi piel luce radiante!"</p>
              <div className="mt-4 text-pink-600 font-medium">Próximamente...</div>
            </div>
            <div className="p-6 bg-rose-50 rounded-lg shadow-md">
              <h3 className="mb-2 text-xl font-semibold text-gray-800">Resultados de [Tercer Cliente]</h3>
              <p className="text-gray-600">"Adiós acné, hola confianza. ¡Gracias, Johanna!"</p>
              <div className="mt-4 text-pink-600 font-medium">Próximamente...</div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">¿Lista para tu Propia Transformación?</h2>
            <p className="mb-8 text-lg text-gray-700">
              Si estas historias te inspiran, imagina lo que podemos lograr juntas. Tu viaje hacia una piel sana y radiante comienza con una conversación.
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 text-lg font-semibold text-white transition-colors bg-pink-500 rounded-full hover:bg-pink-600"
            >
              Agenda tu Consulta Inicial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
