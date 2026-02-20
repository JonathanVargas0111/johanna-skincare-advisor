import type { Metadata } from 'next';
import { Header } from '../../components/organisms/Header';
import { siteConfig } from '../../config/site';

export const metadata: Metadata = {
    title: `Servicios de Autor ${siteConfig.titleSuffix}`,
    description: 'Asesoría de skincare GRATIS por WhatsApp. Combos híbridos desde $50.000 COP con Sheló Nabel y Mary Kay. Envíos a toda Colombia.',
    keywords: ['servicios skincare colombia', 'asesoría piel personalizada gratis', 'consultas belleza whatsapp', 'rutinas a medida', 'tratamientos naturales colombia', 'Método Johanna'],
    openGraph: {
        title: `Servicios de Autor ${siteConfig.titleSuffix}`,
        description: 'Asesoría de skincare GRATIS por WhatsApp. Combos híbridos desde $50.000 COP. Envíos a toda Colombia.',
        url: `${siteConfig.domain}/services`,
        type: 'website',
        images: [{ url: `${siteConfig.domain}/og-image-premium.png`, width: 1200, height: 630, alt: 'Servicios de Skincare - Johanna V. Arias' }],
    },
    alternates: {
        canonical: `${siteConfig.domain}/services`,
    },
};

export default function ServicesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
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
                        {/* Asesoría GRATIS */}
                        <div className="group relative glass-card p-1 transition-all duration-300 hover:-translate-y-2 rounded-[2.5rem] shadow-2xl ring-1 ring-green-100/50 scale-105 z-10">
                            <div className="absolute top-6 right-6 bg-green-600 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg">
                                100% Gratis
                            </div>
                            <div className="p-10 bg-linear-to-br from-white to-green-50/50 rounded-[2.3rem] h-full flex flex-col border border-white">
                                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-8 text-green-700">
                                    <span className="text-2xl">💬</span>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-6 font-playfair tracking-tight">Asesoría por WhatsApp</h3>
                                <p className="text-gray-500 font-light font-roboto leading-relaxed mb-8 flex-1">
                                    Consulta personalizada sin costo. Analizo tu piel, escucho tus objetivos y diseño una rutina a tu medida usando el Método Johanna.
                                </p>
                                <div className="text-4xl font-black text-green-600 mb-8 font-playfair">GRATIS</div>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0"></span>
                                        <span className="text-sm text-gray-600 font-light">Análisis de piel con IA</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0"></span>
                                        <span className="text-sm text-gray-600 font-light">Rutina personalizada</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0"></span>
                                        <span className="text-sm text-gray-600 font-light">Sin compromiso de compra</span>
                                    </li>
                                </ul>
                                <a
                                    href={siteConfig.whatsappLink}
                                    className="block w-full text-center px-8 py-5 bg-green-600 text-white font-bold text-[10px] uppercase tracking-[0.2em] rounded-2xl hover:bg-green-700 transition-all shadow-premium"
                                >
                                    Iniciar Asesoría Gratis
                                </a>
                            </div>
                        </div>

                        {/* Combos Híbridos */}
                        <div className="group relative glass-card p-1 transition-all duration-300 hover:-translate-y-2 rounded-[2.5rem] shadow-xl ring-1 ring-gray-100">
                            <div className="p-10 bg-white rounded-[2.3rem] h-full flex flex-col">
                                <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center mb-8 text-pink-600">
                                    <span className="text-2xl">✨</span>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-6 font-playfair tracking-tight">Combos Híbridos</h3>
                                <p className="text-gray-500 font-light font-roboto leading-relaxed mb-8 flex-1">
                                    Soluciones completas que combinan la botica natural de Sheló Nabel con la alta tecnología de Mary Kay. Resultados visibles en 15 días.
                                </p>
                                <div className="text-2xl font-black text-gray-900 mb-2 font-playfair">Desde $50.000 <span className="text-xs font-light text-gray-400">COP</span></div>
                                <p className="text-sm text-gray-400 mb-8">Solo pagas los productos</p>
                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 shrink-0"></span>
                                        <span className="text-sm text-gray-600 font-light">Detox & Renovación</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 shrink-0"></span>
                                        <span className="text-sm text-gray-600 font-light">Adiós Manchas</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 shrink-0"></span>
                                        <span className="text-sm text-gray-600 font-light">Sistema Regenerativo</span>
                                    </li>
                                </ul>
                                <a
                                    href={siteConfig.whatsappLink}
                                    className="block w-full text-center px-8 py-4 bg-gray-900 text-white font-bold text-[10px] uppercase tracking-[0.2em] rounded-2xl hover:bg-black transition-all shadow-premium"
                                >
                                    Ver Combos Disponibles
                                </a>
                            </div>
                        </div>

                        {/* Beneficios */}
                        <div className="group relative glass-card p-1 transition-all duration-300 hover:-translate-y-2 rounded-[2.5rem] shadow-xl ring-1 ring-gray-100">
                            <div className="p-10 bg-white rounded-[2.3rem] h-full flex flex-col">
                                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-8 text-amber-700">
                                    <span className="text-2xl">🛡️</span>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-6 font-playfair tracking-tight">¿Por qué conmigo?</h3>
                                <p className="text-gray-500 font-light font-roboto leading-relaxed mb-8 flex-1">
                                    Más de 10 años de experiencia transformando pieles en Colombia. No vendo productos, creo soluciones personalizadas.
                                </p>
                                <ul className="space-y-4 mb-10 flex-1">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 shrink-0"></span>
                                        <span className="text-sm text-gray-600 font-light">Garantía 100% Mary Kay</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 shrink-0"></span>
                                        <span className="text-sm text-gray-600 font-light">Envíos a toda Colombia</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 shrink-0"></span>
                                        <span className="text-sm text-gray-600 font-light">Seguimiento personalizado</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 shrink-0"></span>
                                        <span className="text-sm text-gray-600 font-light">Análisis con Inteligencia Artificial</span>
                                    </li>
                                </ul>
                                <a
                                    href="/about"
                                    className="block w-full text-center px-8 py-4 bg-gray-900 text-white font-bold text-[10px] uppercase tracking-[0.2em] rounded-2xl hover:bg-black transition-all shadow-premium"
                                >
                                    Conocer Mi Historia
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-32 text-center reveal-up">
                        <div className="p-16 bg-linear-to-br from-rose-50 to-amber-50 rounded-[3rem] border border-white/50 shadow-inner relative overflow-hidden">
                            <h2 className="mb-6 text-4xl font-bold text-gray-900 font-playfair tracking-tighter">¿Lista para empezar?</h2>
                            <p className="mb-10 text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                                La asesoría es <span className="text-green-600 font-medium">100% gratis</span>. Escríbeme por WhatsApp y diseñemos juntas tu rutina ideal.
                            </p>
                            <a
                                href={siteConfig.whatsappLink}
                                className="inline-block px-12 py-6 text-xs font-black uppercase tracking-[0.3em] text-white bg-green-600 rounded-2xl hover:bg-green-700 transition-all shadow-premium active:scale-95"
                            >
                                Escribir por WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}