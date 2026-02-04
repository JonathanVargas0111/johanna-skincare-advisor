import type { Metadata } from 'next';
import { Header } from '../../components/organisms/Header';
import { siteConfig } from '../../config/site';

export const metadata: Metadata = {
    title: `Sobre Mí ${siteConfig.titleSuffix}`,
    description: siteConfig.description,
    keywords: [siteConfig.name, 'asesora piel', 'skincare experta', 'filosofía skincare', 'cuidado de la piel natural', 'Método Johanna'],
    openGraph: {
        title: `Sobre Mí ${siteConfig.titleSuffix}`,
        description: siteConfig.description,
        url: `${siteConfig.domain}/about`,
        type: 'profile',
        // ...
    },
    alternates: {
        canonical: `${siteConfig.domain}/about`,
    },
};

export default function AboutPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": siteConfig.name,
        "jobTitle": "Asesora Certificada en Cuidado de la Piel",
        "description": siteConfig.description,
        "url": `${siteConfig.domain}/about`,
        "image": `${siteConfig.domain}/og-image.jpg`,
        "sameAs": [
            siteConfig.socials.instagram,
            siteConfig.socials.facebook
        ],
        "knowsAbout": [
            "Cuidado de la piel natural",
            "Skincare personalizado",
            "Ingredientes naturales",
            "Análisis de piel con IA",
            "Método Johanna"
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
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-100/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="text-center reveal-up">
                        <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.3em] text-pink-700 bg-white/50 backdrop-blur-md border border-white/20 rounded-full uppercase shadow-sm">
                            Identidad de Marca
                        </div>
                        <h1 className="mb-10 text-5xl font-bold leading-tight text-gray-900 md:text-8xl font-playfair tracking-tighter">
                            Mi Misión: Tu Piel,<br />Mi Obra Maestra
                        </h1>
                        <p className="max-w-3xl mx-auto text-xl font-light leading-relaxed text-gray-500 font-roboto">
                            Hola, soy <span className="text-gray-900 font-medium">{siteConfig.name}</span>. Mi propósito es elevar tu ritual diario a través de la ciencia botánica y la consultoría de autor.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-24">
                <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid gap-16 lg:grid-cols-2">
                        {/* Story Section */}
                        <div className="reveal-up">
                            <h2 className="mb-8 text-4xl font-bold text-gray-900 font-playfair tracking-tight">Mi Trayectoria</h2>
                            <p className="mb-6 text-lg text-gray-500 font-light leading-relaxed">
                                Mi viaje en la cosmética comenzó con una búsqueda personal de soluciones reales. Lo que inició como una fascinación técnica se transformó en una trayectoria de más de 10 años descodificando las necesidades de la piel latina.
                            </p>
                            <p className="text-lg text-gray-500 font-light leading-relaxed">
                                Hoy, como experta en el <span className="text-pink-600 font-medium">Método Johanna</span>, mi mayor orgullo es ver la transformación de confianza que ocurre cuando una piel recupera su salud y luminosidad natural.
                            </p>
                        </div>

                        {/* Philosophy Section */}
                        <div className="reveal-up [animation-delay:200ms] glass-card p-10 md:p-12 rounded-[2.5rem] shadow-xl ring-1 ring-gray-100">
                            <h2 className="mb-8 text-4xl font-bold text-gray-900 font-playfair tracking-tight">Filosofía de Autor</h2>
                            <ul className="space-y-8">
                                <li className="flex items-start gap-5">
                                    <div className="w-10 h-10 rounded-2xl bg-pink-50 flex items-center justify-center shrink-0 text-pink-600 font-bold">01</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Cuidado Científico</h3>
                                        <p className="text-gray-500 font-light text-sm">Protocolos basados en química cosmética avanzada y resultados clínicos.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-5">
                                    <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0 text-amber-700 font-bold">02</div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Sinergia Botánica</h3>
                                        <p className="text-gray-500 font-light text-sm">Seleccionamos los extractos naturales más puros de Sheló Nabel para preparar el terreno.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Credentials Section */}
                    <div className="mt-32 reveal-up">
                        <h2 className="mb-16 text-4xl font-bold text-center text-gray-900 font-playfair tracking-tight">Autoridad Certificada</h2>
                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="p-10 rounded-[2.5rem] bg-gray-900 text-white shadow-premium ring-1 ring-white/10 hover-glow transition-all">
                                <h3 className="mb-4 text-2xl font-bold font-playfair">10+ Años</h3>
                                <p className="text-gray-400 font-light text-sm">Dedicación a la consultoría en cuidado de la piel en Colombia.</p>
                            </div>
                            <div className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-xl hover:-translate-y-2 transition-all">
                                <h3 className="mb-4 text-2xl font-bold font-playfair text-gray-900">Estratega Híbrida</h3>
                                <p className="text-gray-500 font-light text-sm">Expertiz en combinar botica natural y tecnología de alta gama.</p>
                            </div>
                            <div className="p-10 rounded-[2.5rem] bg-pink-50 border border-pink-100 shadow-xl hover:-translate-y-2 transition-all">
                                <h3 className="mb-4 text-2xl font-bold font-playfair text-pink-900">IA Skincare</h3>
                                <p className="text-pink-800 font-light text-sm">Integración de análisis predictivo para diagnósticos de precisión.</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-32 text-center reveal-up">
                        <div className="p-16 bg-linear-to-br from-rose-50 to-amber-50 rounded-[3rem] border border-white/50 shadow-inner relative overflow-hidden">
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-pink-100/50 rounded-full blur-3xl"></div>
                            <h2 className="mb-6 text-4xl font-bold text-gray-900 font-playfair tracking-tighter">¿Lista para tu Transformación?</h2>
                            <p className="mb-10 text-xl text-gray-500 font-light max-w-2xl mx-auto">
                                Permite que una experta diseñe el camino hacia tu mejor versión.
                            </p>
                            <a
                                href="/contact"
                                className="inline-block px-12 py-6 text-xs font-black uppercase tracking-[0.3em] text-white bg-gray-900 rounded-2xl hover:bg-black transition-all shadow-premium active:scale-95"
                            >
                                Inicia tu Consulta de Autor
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}