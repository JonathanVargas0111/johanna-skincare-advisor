import type { Metadata } from 'next';
import { Header } from '../../components/organisms/Header';

export const metadata: Metadata = {
    title: 'Sobre Mí - Johanna V. Arias',
    description: 'Conoce a Johanna V. Arias, asesora certificada en cuidado de la piel con más de 10 años de experiencia. Descubre su filosofía holística y su enfoque personalizado para transformar tu piel.',
    keywords: ['Johanna V. Arias', 'asesora piel', 'skincare experta', 'filosofía skincare', 'cuidado de la piel natural'],
    openGraph: {
        title: 'Sobre Mí - Johanna V. Arias',
        description: 'Conoce a Johanna V. Arias, asesora certificada en cuidado de la piel con más de 10 años de experiencia. Descubre su filosofía holística y su enfoque personalizado para transformar tu piel.',
        url: 'https://johannavarias.com/about',
        type: 'profile',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Johanna V. Arias - Asesora en Cuidado de la Piel',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sobre Mí - Johanna V. Arias',
        description: 'Conoce a Johanna V. Arias, asesora certificada en cuidado de la piel con más de 10 años de experiencia. Descubre su filosofía holística y su enfoque personalizado para transformar tu piel.',
        images: ['/og-image.jpg'],
        creator: '@johannavarias',
    },
    alternates: {
        canonical: 'https://johannavarias.com/about',
    },
};

export default function AboutPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Johanna V. Arias",
        "jobTitle": "Asesora Certificada en Cuidado de la Piel",
        "description": "Asesora certificada en cuidado natural de la piel con más de 10 años de experiencia. Especialista en soluciones personalizadas y naturales para cada tipo de piel.",
        "url": "https://johannavarias.com/about",
        "image": "/og-image.jpg",
        "sameAs": [
            "https://www.instagram.com/johannavarias",
            "https://www.facebook.com/johannavarias"
        ],
        "knowsAbout": [
            "Cuidado de la piel natural",
            "Skincare personalizado",
            "Ingredientes naturales",
            "Análisis de piel con IA"
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
                            Sobre Mí
                        </div>
                        <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
                            Mi Misión: Tu Piel, Mi Pasión
                        </h1>
                        <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
                            Hola, soy Johanna V. Arias. Mi misión es simple: ayudarte a sentirte increíble en tu propia piel.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-16">
                <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2">
                        {/* Story Section */}
                        <div>
                            <h2 className="mb-6 text-3xl font-bold text-gray-900">Mi Historia</h2>
                            <p className="mb-6 text-lg text-gray-600">
                                Como muchas de ustedes, mi viaje en el mundo del skincare comenzó con una frustración personal. Durante años, luché con mi propia piel, probando innumerables productos y siguiendo consejos contradictorios.
                            </p>
                            <p className="text-lg text-gray-600">
                                Esa frustración se transformó en una fascinación que me ha llevado a dedicar más de 10 años a entender las complejidades de la piel. Ahora, mi mayor alegría es compartir ese conocimiento contigo.
                            </p>
                        </div>

                        {/* Philosophy Section */}
                        <div>
                            <h2 className="mb-6 text-3xl font-bold text-gray-900">Mi Filosofía</h2>
                            <p className="mb-6 text-lg text-gray-600">
                                No creo en las soluciones mágicas ni en las tendencias pasajeras. Mi filosofía se basa en tres pilares fundamentales:
                            </p>
                            <ul className="space-y-4 text-lg text-gray-600">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-2 h-2 mt-3 mr-3 bg-pink-500 rounded-full"></span>
                                    <span><strong>Cuidado Basado en la Ciencia:</strong> Utilizo mi conocimiento técnico para analizar tu piel y recomendar ingredientes y rutinas que tienen un respaldo científico.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-2 h-2 mt-3 mr-3 bg-pink-500 rounded-full"></span>
                                    <span><strong>El Poder de lo Natural:</strong> Priorizo los ingredientes naturales y sostenibles que trabajan en armonía con tu piel.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-2 h-2 mt-3 mr-3 bg-pink-500 rounded-full"></span>
                                    <span><strong>Bienestar Integral:</strong> Tu piel es un reflejo de tu estilo de vida. Por eso, mis asesorías van más allá de los productos.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Credentials Section */}
                    <div className="mt-16">
                        <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">Mis Credenciales</h2>
                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="p-6 rounded-lg bg-pink-50">
                                <h3 className="mb-3 text-xl font-semibold text-pink-800">10+ Años de Experiencia</h3>
                                <p className="text-pink-700">Dedicación completa al estudio y práctica del cuidado de la piel natural.</p>
                            </div>
                            <div className="p-6 rounded-lg bg-pink-50">
                                <h3 className="mb-3 text-xl font-semibold text-pink-800">Especialista Certificada</h3>
                                <p className="text-pink-700">Formación continua en ingredientes naturales y técnicas avanzadas de skincare.</p>
                            </div>
                            <div className="p-6 rounded-lg bg-pink-50">
                                <h3 className="mb-3 text-xl font-semibold text-pink-800">Tecnología IA</h3>
                                <p className="text-pink-700">Utilizo herramientas de inteligencia artificial para diagnósticos precisos.</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 text-center">
                        <div className="p-8 bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl">
                            <h2 className="mb-4 text-3xl font-bold text-gray-900">¿Lista para Empezar tu Viaje?</h2>
                            <p className="mb-6 text-xl text-gray-600">
                                Si estás lista para dejar de adivinar y empezar a ver resultados reales y duraderos, estoy aquí para guiarte.
                            </p>
                            <a
                                href="/contact"
                                className="inline-block px-8 py-4 text-lg font-semibold text-white transition-colors bg-pink-500 rounded-full hover:bg-pink-600"
                            >
                                Agenda tu Sesión Gratuita
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}