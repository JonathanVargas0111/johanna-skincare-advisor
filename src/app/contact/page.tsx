import type { Metadata } from 'next';
import { Header } from '../../components/organisms/Header';
import { ContactForm } from '../../components/organisms/ContactForm';
import { ContactInfo } from '../../components/organisms/ContactInfo';

export const metadata: Metadata = {
    title: 'Contacto - Agenda tu Consulta con Johanna V. Arias',
    description: '¿Listo para transformar tu piel? Contacta a Johanna V. Arias para agendar tu consulta gratuita. Asesoría experta en cuidado natural de la piel.',
    keywords: ['contacto Johanna Arias', 'agendar consulta', 'asesoría piel', 'consulta gratuita', 'cuidado piel natural'],
    openGraph: {
        title: 'Contacto - Agenda tu Consulta con Johanna V. Arias',
        description: 'Contacta para agendar tu consulta gratuita de asesoría en cuidado de la piel.',
        url: 'https://johannavarias.com/contact',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contacto - Johanna V. Arias',
        description: 'Agenda tu consulta gratuita de asesoría en cuidado de la piel.',
    },
};

export default function Contact() {
    return (
        <div className="min-h-screen bg-white">
            {/* JSON-LD Structured Data for ContactPage */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "name": "Contacto - Johanna V. Arias",
                        "description": "Página de contacto para agendar consultas de asesoría en cuidado natural de la piel.",
                        "url": "https://johannavarias.com/contact",
                        "mainEntity": {
                            "@type": "Person",
                            "name": "Johanna V. Arias",
                            "jobTitle": "Asesora Certificada en Cuidado de la Piel",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "contactType": "customer service",
                                "availableLanguage": "Spanish",
                                "description": "Agenda tu consulta gratuita de asesoría en cuidado de la piel"
                            }
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Johanna V. Arias",
                            "url": "https://johannavarias.com"
                        },
                        "potentialAction": {
                            "@type": "CommunicateAction",
                            "target": {
                                "@type": "EntryPoint",
                                "urlTemplate": "https://johannavarias.com/contact",
                                "inLanguage": "es"
                            }
                        }
                    })
                }}
            />

            <Header />

            {/* Hero Section */}
            <section className="flex items-center justify-center min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-white">
                <div className="max-w-4xl px-4 mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-block px-4 py-2 mb-6 text-sm font-medium text-pink-700 bg-pink-100 rounded-full">
                        Contacto
                    </div>

                    {/* Main Title */}
                    <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl">
                        Hablemos de tu Piel
                    </h1>

                    {/* Subtitle */}
                    <p className="max-w-2xl mx-auto mb-4 text-lg text-gray-600 md:text-xl">
                        Johanna V. Arias - Asesora Certificada
                    </p>

                    {/* Description */}
                    <p className="max-w-3xl mx-auto mb-10 text-base leading-relaxed text-gray-600 md:text-lg">
                        Estoy aquí para responder tus preguntas y ayudarte a comenzar tu viaje
                        hacia una piel más saludable y radiante.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-gray-50">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        <ContactForm />
                        <ContactInfo />
                    </div>
                </div>
            </section>
        </div>
    );
}