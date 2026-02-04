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
                    <div className="grid gap-12 md:grid-cols-3">
                        {/* Diagnóstico de Autor */}
                        <div className="group relative glass-card p-1 transition-all duration-300 hover:-translate-y-2 rounded-[2.5rem] shadow-xl ring-1 ring-gray-100">
                            <div className="p-10 bg-white rounded-[2.3rem] h-full flex flex-col">
                                <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center mb-8 text-pink-600">
                                    <span className="text-2xl">✨</span>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-6 font-playfair tracking-tight">Diagnóstico de Autor</h3>
                                <p className="text-gray-500 font-light font-roboto leading-relaxed mb-8 flex-1">
                                    Sesión exclusiva de 60 minutos (presencial u online) para decodificar tu biotipo cutáneo y diseñar tu primer mapa de ruta hacia la piel ideal.
                                </p>
                                <div className="text-4xl font-black text-gray-900 mb-8 font-playfair">$120.000 <span className="text-xs font-light text-gray-400">COP</span></div>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 shrink-0"></span>
                                        <span className="text-sm text-gray-600 font-light">Análisis de poros, manchas y textura</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 shrink-0"></span>
                                        <span className="text-sm text-gray-600 font-light">Depuración de rutina actual</span>
                                    </li>
                                </ul>
                                <a
                                    href="/contact"
                                    className="block w-full text-center px-8 py-4 bg-gray-900 text-white font-bold text-[10px] uppercase tracking-[0.2em] rounded-2xl hover:bg-black transition-all shadow-premium"
                                >
                                    Agendar Mapa de Ruta
                                </a>
                            </div>
                        </div>

                        {/* Protocolo de Transformación Híbrida */}
                        <div className="group relative glass-card p-1 transition-all duration-300 hover:-translate-y-2 rounded-[2.5rem] shadow-2xl ring-1 ring-pink-100/50 scale-105 z-10">
                            <div className="absolute top-6 right-6 bg-pink-600 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg">
                                Elite Choice
                            </div>
                            <div className="p-10 bg-linear-to-br from-white to-rose-50/50 rounded-[2.3rem] h-full flex flex-col border border-white">
                                <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-8 text-pink-700">
                                    <span className="text-2xl">💎</span>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-6 font-playfair tracking-tight leading-tight">Protocolo Híbrido Integral</h3>
                                <p className="text-gray-500 font-light font-roboto leading-relaxed mb-8 flex-1">
                                    Transformación total en 90 días. Diseño estratégico de sinergias botánicas y tecnológicas con seguimiento bi semanal de autor.
                                </p>
                                <div className="text-4xl font-black text-pink-600 mb-8 font-playfair">$450.000 <span className="text-xs font-light text-gray-400">COP</span></div>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-pink-600 rounded-full mt-2 shrink-0"></span>
                                        <span className="text-sm text-gray-900 font-medium italic">Todo lo del Diagnóstico</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-pink-600 rounded-full mt-2 shrink-0"></span>
                                        <span className="text-sm text-gray-600 font-light">Guía de Insumos & Sinergias (v2025)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-pink-600 rounded-full mt-2 shrink-0"></span>
                                        <span className="text-sm text-gray-600 font-light">2 Sesiones de Ajuste (45 min)</span>
                                    </li>
                                </ul>
                                <a
                                    href="/contact"
                                    className="block w-full text-center px-8 py-5 bg-pink-600 text-white font-bold text-[10px] uppercase tracking-[0.2em] rounded-2xl hover:bg-pink-700 transition-all shadow-premium"
                                >
                                    Elegir Protocolo Integral
                                </a>
                            </div>
                        </div>

                        {/* Concierge de Mantenimiento */}
                        <div className="group relative glass-card p-1 transition-all duration-300 hover:-translate-y-2 rounded-[2.5rem] shadow-xl ring-1 ring-gray-100">
                            <div className="p-10 bg-white rounded-[2.3rem] h-full flex flex-col">
                                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-8 text-amber-700">
                                    <span className="text-2xl">⚜️</span>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-6 font-playfair tracking-tight">Concierge Mensual</h3>
                                <p className="text-gray-500 font-light font-roboto leading-relaxed mb-8 flex-1">
                                    Acompañamiento vitalicio para asegurar que tu piel mantenga los resultados obtenidos. Optimización constante según el clima.
                                </p>
                                <div className="text-4xl font-black text-gray-900 mb-8 font-playfair">$180.000 <span className="text-xs font-light text-gray-400">COP</span></div>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 shrink-0"></span>
                                        <span className="text-sm text-gray-600 font-light">Check-in mensual de 40 min</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 shrink-0"></span>
                                        <span className="text-sm text-gray-600 font-light">Prioridad en lanzamientos</span>
                                    </li>
                                </ul>
                                <a
                                    href="/contact"
                                    className="block w-full text-center px-8 py-4 bg-gray-900 text-white font-bold text-[10px] uppercase tracking-[0.2em] rounded-2xl hover:bg-black transition-all shadow-premium"
                                >
                                    Suscribirme al Concierge
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