import type { Metadata } from 'next';
import { Header } from '../../components/organisms/Header';
import { siteConfig } from '../../config/site';

export const metadata: Metadata = {
    title: `Servicios de Autor ${siteConfig.titleSuffix}`,
    description: siteConfig.description,
    keywords: ['servicios skincare', 'asesoría piel personalizada', 'consultas belleza', 'rutinas a medida', 'tratamientos naturales', 'Método Johanna'],
    openGraph: {
        title: `Servicios de Autor ${siteConfig.titleSuffix}`,
        description: siteConfig.description,
        url: `${siteConfig.domain}/services`,
        type: 'website',
        // ...
    },
    alternates: {
        canonical: `${siteConfig.domain}/services`,
    },
};

export default function ServicesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ServicePage",
        "name": `Servicios de Autor ${siteConfig.titleSuffix}`,
        "description": siteConfig.description,
        "url": `${siteConfig.domain}/services`,
        "provider": {
            "@type": "Person",
            "name": siteConfig.name
        },
        "serviceType": [
            "Consulta Inicial de Skincare",
            "Protocolo Premium de Transformación",
            "Seguimiento Mensual de Autor"
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
            <section className="pt-32 pb-24 bg-linear-to-br from-rose-50 via-white to-amber-50 relative overflow-hidden">
                <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-pink-100/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="text-center reveal-up">
                        <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.3em] text-pink-700 bg-white/50 backdrop-blur-md border border-white/20 rounded-full uppercase shadow-sm">
                            Portafolio de Autor
                        </div>
                        <h1 className="mb-10 text-5xl font-bold leading-tight text-gray-900 md:text-8xl font-playfair tracking-tighter">
                            Protocolos que<br />Transforman Vidas
                        </h1>
                        <p className="max-w-3xl mx-auto text-xl font-light leading-relaxed text-gray-500 font-roboto">
                            Cada piel es un ecosistema único. Mis servicios están diseñados para decodificar tus necesidades y entregar resultados visibles mediante el <span className="text-gray-900 font-medium">Método Johanna</span>.
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
                    <div className="mt-32 text-center reveal-up">
                        <div className="p-16 bg-linear-to-br from-rose-50 to-amber-50 rounded-[3rem] border border-white/50 shadow-inner relative overflow-hidden">
                            <h2 className="mb-6 text-4xl font-bold text-gray-900 font-playfair tracking-tighter">¿No estás segura por dónde empezar?</h2>
                            <p className="mb-10 text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                                La <span className="text-gray-900 font-medium">Consulta Inicial</span> es el punto de partida perfecto. Si después decides el Protocolo Premium, el costo se descontará del valor total.
                            </p>
                            <a
                                href="/contact"
                                className="inline-block px-12 py-6 text-xs font-black uppercase tracking-[0.3em] text-white bg-gray-900 rounded-2xl hover:bg-black transition-all shadow-premium active:scale-95"
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