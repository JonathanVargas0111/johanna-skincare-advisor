import type { Metadata } from 'next';
import { Header } from '../../components/organisms/Header';
import { ContactForm } from '../../components/organisms/ContactForm';
import { ContactInfo } from '../../components/organisms/ContactInfo';
import { siteConfig } from '../../config/site';

export const metadata: Metadata = {
    title: `Contacto ${siteConfig.titleSuffix}`,
    description: 'Contacta a Johanna V. Arias por WhatsApp para asesoría GRATIS de skincare. Respuesta en 24-48 horas. Envíos a toda Colombia.',
    keywords: ['contacto johanna skincare', 'asesora piel colombia', 'whatsapp skincare', 'agendar consulta gratis', siteConfig.name],
    openGraph: {
        title: `Contacto ${siteConfig.titleSuffix}`,
        description: 'Contacta a Johanna V. Arias por WhatsApp para asesoría GRATIS de skincare. Respuesta en 24-48 horas.',
        url: `${siteConfig.domain}/contact`,
        type: 'website',
        images: [{ url: `${siteConfig.domain}/og-image-premium.png`, width: 1200, height: 630, alt: 'Contacto - Johanna Skincare' }],
    },
    alternates: {
        canonical: `${siteConfig.domain}/contact`,
    },
};

export default function ContactPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": `Contacto ${siteConfig.titleSuffix}`,
        "description": siteConfig.description,
        "url": `${siteConfig.domain}/contact`,
        "publisher": {
            "@type": "Person",
            "name": siteConfig.name
        },
        "potentialAction": {
            "@type": "CommunicateAction",
            "target": {
                "@type": "EntryPoint",
                "actionPlatform": [
                    "http://schema.org/Website"
                ]
            },
            "agent": {
                "@type": "Person",
                "name": siteConfig.name
            },
            "recipient": {
                "@type": "Person",
                "name": siteConfig.name
            }
        }
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
                            Hablemos
                        </div>
                        <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-7xl font-playfair tracking-tighter">
                            ¿Lista para tu Propio<br /><span className="italic text-pink-600">Protocolo de Autor</span>?
                        </h1>
                        <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-500 font-light font-roboto">
                            Permíteme escucharte. Cada transformación comienza con una conversación honesta sobre tu piel.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24">
                <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
                    <div className="grid gap-16 lg:grid-cols-2">
                        {/* Contact Form */}
                        <div className="reveal-up">
                            <h2 className="mb-8 text-4xl font-bold text-gray-900 font-playfair tracking-tighter">Envíame un Mensaje</h2>
                            <p className="mb-10 text-lg text-gray-500 font-light leading-relaxed">
                                Ya sea que tengas una pregunta sobre el <span className="text-pink-600 font-medium">Método Johanna</span>, quieras agendar tu consulta inicial, o simplemente quieras saludar, este es el lugar para hacerlo.
                            </p>
                            <div className="glass-card p-8 md:p-12 rounded-[2.5rem] shadow-xl ring-1 ring-gray-100">
                                <ContactForm />
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="reveal-up [animation-delay:200ms]">
                            <h2 className="mb-8 text-4xl font-bold text-gray-900 font-playfair tracking-tighter">Conexión Directa</h2>
                            <div className="space-y-12">
                                <ContactInfo />

                                {/* Additional Info */}
                                <div className="p-8 bg-gray-900 rounded-[2.5rem] relative overflow-hidden shadow-premium ring-1 ring-white/10">
                                    <div className="absolute inset-0 bg-linear-to-br from-pink-500/10 to-amber-500/10 opacity-30"></div>
                                    <div className="relative z-10">
                                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-400 mb-4">Compromiso de Autor</h3>
                                        <p className="text-gray-400 font-light leading-relaxed">
                                            Analizo personalmente cada consulta detallada. Mi tiempo estimado de respuesta es de <span className="text-white font-medium">24 a 48 horas hábiles</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}