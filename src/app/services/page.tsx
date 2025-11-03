import type { Metadata } from 'next';
import { Header } from '../../components/organisms/Header';

export const metadata: Metadata = {
    title: 'Mis Servicios - Johanna V. Arias',
    description: 'Descubre los servicios personalizados de Johanna V. Arias: consulta inicial, paquetes premium y seguimiento mensual para una piel radiante y saludable.',
    keywords: ['servicios skincare', 'asesoría piel personalizada', 'consultas belleza', 'rutinas a medida', 'tratamientos naturales'],
    openGraph: {
        title: 'Mis Servicios - Johanna V. Arias',
        description: 'Descubre los servicios personalizados de Johanna V. Arias: consulta inicial, paquetes premium y seguimiento mensual para una piel radiante y saludable.',
        url: 'https://johannavarias.com/services',
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Mis Servicios de Skincare',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mis Servicios - Johanna V. Arias',
        description: 'Descubre los servicios personalizados de Johanna V. Arias: consulta inicial, paquetes premium y seguimiento mensual para una piel radiante y saludable.',
        images: ['/og-image.jpg'],
        creator: '@johannavarias',
    },
    alternates: {
        canonical: 'https://johannavarias.com/services',
    },
};

export default function ServicesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ServicePage",
        "name": "Mis Servicios - Johanna V. Arias",
        "description": "Descubre los servicios personalizados de Johanna V. Arias: consulta inicial, paquetes premium y seguimiento mensual para una piel radiante y saludable.",
        "url": "https://johannavarias.com/services",
        "provider": {
            "@type": "Person",
            "name": "Johanna V. Arias"
        },
        "serviceType": [
            "Consulta Inicial de Skincare",
            "Paquete Premium de Skincare",
            "Seguimiento Mensual de Skincare"
        ]
    };

    return (
        <div className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Header />

            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-linear-to-br from-rose-50 via-pink-50 to-white">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="inline-block px-4 py-2 mb-6 text-sm font-medium text-pink-700 bg-pink-100 rounded-full">
                            Mis Servicios
                        </div>
                        <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
                            Servicios Personalizados para tu Piel
                        </h1>
                        <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
                            Cada piel es única. Descubre cómo puedo ayudarte a lograr la piel radiante que mereces con mis servicios personalizados.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16">
                <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-3">
                        {/* Consulta Inicial */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-pink-100">
                            <div className="p-8">
                                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                                    <span className="text-2xl">💬</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Consulta Inicial</h3>
                                <p className="text-gray-600 mb-6">
                                    Una sesión de 60 minutos donde nos conocemos, analizo tu piel y te doy las primeras recomendaciones personalizadas.
                                </p>
                                <div className="text-3xl font-bold text-pink-600 mb-6">$80 USD</div>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start">
                                        <span className="shrink-0 w-2 h-2 mt-3 mr-3 bg-pink-500 rounded-full"></span>
                                        <span className="text-gray-600">Análisis completo de tu piel</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="shrink-0 w-2 h-2 mt-3 mr-3 bg-pink-500 rounded-full"></span>
                                        <span className="text-gray-600">Revisión de rutina actual</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="shrink-0 w-2 h-2 mt-3 mr-3 bg-pink-500 rounded-full"></span>
                                        <span className="text-gray-600">Recomendaciones iniciales</span>
                                    </li>
                                </ul>
                                <a
                                    href="/contact"
                                    className="block w-full text-center px-6 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-colors"
                                >
                                    Agendar Consulta
                                </a>
                            </div>
                        </div>

                        {/* Paquete Premium */}
                        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl shadow-lg overflow-hidden border border-pink-200 relative">
                            <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                Más Popular
                            </div>
                            <div className="p-8">
                                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                                    <span className="text-2xl">✨</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Paquete Premium</h3>
                                <p className="text-gray-600 mb-6">
                                    Transformación completa con rutina personalizada, guía de ingredientes y sesión de seguimiento incluida.
                                </p>
                                <div className="text-3xl font-bold text-pink-600 mb-6">$250 USD</div>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start">
                                        <span className="shrink-0 w-2 h-2 mt-3 mr-3 bg-pink-500 rounded-full"></span>
                                        <span className="text-gray-600">Todo lo de Consulta Inicial</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="shrink-0 w-2 h-2 mt-3 mr-3 bg-pink-500 rounded-full"></span>
                                        <span className="text-gray-600">Rutina personalizada completa</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="shrink-0 w-2 h-2 mt-3 mr-3 bg-pink-500 rounded-full"></span>
                                        <span className="text-gray-600">Guía de ingredientes clave</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="shrink-0 w-2 h-2 mt-3 mr-3 bg-pink-500 rounded-full"></span>
                                        <span className="text-gray-600">Sesión de seguimiento (30 min)</span>
                                    </li>
                                </ul>
                                <a
                                    href="/contact"
                                    className="block w-full text-center px-6 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-colors"
                                >
                                    Elegir Paquete Premium
                                </a>
                            </div>
                        </div>

                        {/* Seguimiento Mensual */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-pink-100">
                            <div className="p-8">
                                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                                    <span className="text-2xl">🔄</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Seguimiento Mensual</h3>
                                <p className="text-gray-600 mb-6">
                                    Acompañamiento continuo para mantener y optimizar tus resultados a largo plazo.
                                </p>
                                <div className="text-3xl font-bold text-pink-600 mb-6">$50 USD/mes</div>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start">
                                        <span className="shrink-0 w-2 h-2 mt-3 mr-3 bg-pink-500 rounded-full"></span>
                                        <span className="text-gray-600">Check-in mensual (30 min)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="shrink-0 w-2 h-2 mt-3 mr-3 bg-pink-500 rounded-full"></span>
                                        <span className="text-gray-600">Soporte por email prioritario</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="shrink-0 w-2 h-2 mt-3 mr-3 bg-pink-500 rounded-full"></span>
                                        <span className="text-gray-600">Descuentos en productos</span>
                                    </li>
                                </ul>
                                <a
                                    href="/contact"
                                    className="block w-full text-center px-6 py-3 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition-colors"
                                >
                                    Suscribirme
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 text-center">
                        <div className="p-8 bg-linear-to-r from-pink-100 to-rose-100 rounded-2xl">
                            <h2 className="mb-4 text-3xl font-bold text-gray-900">¿No estás segura por dónde empezar?</h2>
                            <p className="mb-6 text-xl text-gray-600">
                                La Consulta Inicial es el punto de partida perfecto. Si después decides el Paquete Premium, el costo se descontará del precio total.
                            </p>
                            <a
                                href="/contact"
                                className="inline-block px-8 py-4 text-lg font-semibold text-white transition-colors bg-pink-500 rounded-full hover:bg-pink-600"
                            >
                                Empezar con Consulta Inicial
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}