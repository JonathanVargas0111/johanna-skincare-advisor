import type { Metadata } from 'next';

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
                url: '/og-image.jpg', // Replace with a specific image for the contact page if available
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
        images: ['/og-image.jpg'], // Replace with a specific image for the contact page if available
        creator: '@johannavarias',
    },
    alternates: {
        canonical: 'https://johannavarias.com/contact',
    },
};

export default function ContactPage() {
    const content = `
    <h1>Hablemos</h1>

    <h2>¿Lista para Empezar tu Viaje hacia una Piel Radiante?</h2>

    <p>Me encantaría escucharte. Ya sea que tengas una pregunta sobre mis servicios, quieras agendar tu consulta inicial, o simplemente quieras saludar, este es el lugar para hacerlo. Completa el formulario a continuación y me pondré en contacto contigo lo antes posible.</p>

    <hr />

    <h3>Formulario de Contacto</h3>

    <form className="space-y-4">
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" />
        </div>
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" />
        </div>
        <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Asunto</label>
            <input type="text" id="subject" name="subject" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm" />
        </div>
        <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"></textarea>
        </div>
        <button type="submit" className="px-8 py-4 text-lg font-semibold text-white transition-colors bg-pink-500 rounded-full hover:bg-pink-600">Enviar Mensaje</button>
    </form>

    <hr />

    <h3>Otras Formas de Conectar</h3>

    <p><strong>Correo Electrónico:</strong><br />Para consultas directas, puedes escribirme a: <a href="mailto:johanna.v.arias@email.com" class="text-pink-600 hover:underline">johanna.v.arias@email.com</a></p>

    <p><strong>Redes Sociales:</strong><br />Sígueme en mis redes para tips diarios, inspiración y más:</p>

    <ul>
        <li><a href="https://instagram.com/johannavarias" target="_blank" rel="noopener noreferrer" class="text-pink-600 hover:underline">Instagram</a></li>
        <li><a href="https://pinterest.com/johannavarias" target="_blank" rel="noopener noreferrer" class="text-pink-600 hover:underline">Pinterest</a></li>
        <li><a href="https://tiktok.com/@johannavarias" target="_blank" rel="noopener noreferrer" class="text-pink-600 hover:underline">TikTok</a></li>
    </ul>

    <h3>¿Qué Esperar Después de Contactarme?</h3>

    <p>Mi objetivo es responder a todos los mensajes en un plazo de 24 a 48 horas hábiles. ¡Gracias por tu paciencia!</p>
  `;

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
            <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
}