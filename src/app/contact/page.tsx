import type { Metadata } from 'next';
import { Header } from '../../components/organisms/Header';
import { ContactForm } from '../../components/organisms/ContactForm';
import { ContactInfo } from '../../components/organisms/ContactInfo';

export const metadata: Metadata = {
    title: 'Contacto - Johanna V. Arias',
    description: 'Ponte en contacto con Johanna V. Arias para agendar tu consulta, hacer preguntas o saludar. ¡Tu piel radiante te espera!',
    keywords: ['contacto', 'asesora piel', 'preguntas skincare', 'agendar consulta', 'Johanna V. Arias'],
    openGraph: {
        title: 'Contacto - Johanna V. Arias',
        description: 'Ponte en contacto con Johanna V. Arias para agendar tu consulta, hacer preguntas o saludar. ¡Tu piel radiante te espera!',
        url: 'https://johannavarias.com/contact',
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Contacto Johanna V. Arias',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contacto - Johanna V. Arias',
        description: 'Ponte en contacto con Johanna V. Arias para agendar tu consulta, hacer preguntas o saludar. ¡Tu piel radiante te espera!',
        images: ['/og-image.jpg'],
        creator: '@johannavarias',
    },
    alternates: {
        canonical: 'https://johannavarias.com/contact',
    },
};

export default function ContactPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contacto - Johanna V. Arias",
        "description": "Ponte en contacto con Johanna V. Arias para agendar tu consulta, hacer preguntas o saludar. ¡Tu piel radiante te espera!",
        "url": "https://johannavarias.com/contact",
        "publisher": {
            "@type": "Person",
            "name": "Johanna V. Arias"
        },
        "potentialAction": {
            "@type": "CommunicateAction",
            "target": {
                "@type": "EntryPoint",
                "actionPlatform": [
                    "http://schema.org/Website",
                    "http://schema.org/MobileApplication"
                ]
            },
            "agent": {
                "@type": "Person",
                "name": "Johanna V. Arias"
            },
            "recipient": {
                "@type": "Person",
                "name": "Johanna V. Arias"
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
                        <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
                            ¿Lista para Empezar?
                        </h1>
                        <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
                            Me encantaría escucharte. Completa el formulario y me pondré en contacto contigo lo antes posible.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16">
                <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2">
                        {/* Contact Form */}
                        <div>
                            <h2 className="mb-6 text-3xl font-bold text-gray-900">Envíame un Mensaje</h2>
                            <p className="mb-8 text-lg text-gray-600">
                                Ya sea que tengas una pregunta sobre mis servicios, quieras agendar tu consulta inicial, o simplemente quieras saludar, este es el lugar para hacerlo.
                            </p>
                            <ContactForm />
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h2 className="mb-6 text-3xl font-bold text-gray-900">Información de Contacto</h2>
                            <ContactInfo />

                            {/* Additional Info */}
                            <div className="mt-8 p-6 bg-pink-50 rounded-lg">
                                <h3 className="text-lg font-semibold text-pink-800 mb-2">Tiempo de Respuesta</h3>
                                <p className="text-pink-700">
                                    Mi objetivo es responder a todos los mensajes en un plazo de 24 a 48 horas hábiles. ¡Gracias por tu paciencia!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}