import type { Metadata } from 'next';
import { Header } from '../../components/organisms/Header';
import { StatsCard } from '../../components/molecules/StatsCard';
import { PhilosophyCard } from '../../components/molecules/PhilosophyCard';

export const metadata: Metadata = {
    title: 'Sobre Johanna V. Arias - Asesora Certificada en Cuidado de la Piel',
    description: 'Conoce la historia de Johanna V. Arias, asesora certificada con más de 10 años de experiencia en cuidado natural de la piel. Filosofía, experiencia y compromiso con resultados naturales.',
    keywords: ['Johanna Arias', 'asesora piel', 'experiencia skincare', 'cuidado natural piel', 'experta dermatología natural'],
    openGraph: {
        title: 'Sobre Johanna V. Arias - Asesora en Cuidado Natural de la Piel',
        description: 'Más de 10 años transformando vidas a través del cuidado natural de la piel.',
        url: 'https://johannavarias.com/about',
        type: 'profile',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sobre Johanna V. Arias',
        description: 'Asesora certificada con más de 10 años de experiencia en cuidado natural de la piel.',
    },
};

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="flex items-center justify-center min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-white">
                <div className="max-w-4xl px-4 mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-block px-4 py-2 mb-6 text-sm font-medium text-pink-700 bg-pink-100 rounded-full">
                        Sobre Mí
                    </div>

                    {/* Main Title */}
                    <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl">
                        Johanna V. Arias
                    </h1>

                    {/* Subtitle */}
                    <p className="max-w-2xl mx-auto mb-4 text-lg text-gray-600 md:text-xl">
                        Asesora Certificada en Cuidado Natural de la Piel
                    </p>

                    {/* Description */}
                    <p className="max-w-3xl mx-auto mb-10 text-base leading-relaxed text-gray-600 md:text-lg">
                        Con más de 10 años de experiencia transformando vidas a través del cuidado natural de la piel.
                        Mi pasión es ayudar a cada persona a descubrir su mejor versión.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col justify-center gap-4 mb-16 sm:flex-row">
                        <button className="px-8 py-4 text-lg font-semibold text-white transition-colors bg-pink-500 rounded-full hover:bg-pink-600">
                            Agenda tu Consulta
                        </button>
                        <button className="px-8 py-4 text-lg font-semibold text-pink-600 transition-all border-2 border-pink-500 rounded-full hover:bg-pink-500 hover:text-white">
                            Ver Servicios
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-gray-50">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        {/* Text Content */}
                        <div>
                            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                                Mi Historia
                            </h2>
                            <div className="space-y-6 text-gray-600">
                                <p>
                                    Mi viaje en el mundo del cuidado de la piel comenzó hace más de una década,
                                    cuando descubrí la poderosa conexión entre la salud de nuestra piel y nuestro
                                    bienestar general. Lo que empezó como una curiosidad personal se convirtió
                                    en una pasión profesional.
                                </p>
                                <p>
                                    Durante años estudié y experimenté con diferentes enfoques, desde tratamientos
                                    convencionales hasta métodos naturales y holísticos. Mi experiencia me ha
                                    enseñado que cada piel es única y merece un enfoque personalizado.
                                </p>
                                <p>
                                    Hoy, tengo el privilegio de ayudar a cientos de personas a transformar su
                                    relación con su piel, logrando resultados naturales y duraderos que van
                                    más allá de la superficie.
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            <StatsCard number="10+" label="Años de Experiencia" />
                            <StatsCard number="500+" label="Clientes Satisfechos" />
                            <StatsCard number="98%" label="Tasa de Satisfacción" />
                            <StatsCard number="50+" label="Productos Naturales" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-20 bg-white">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                            Mi Filosofía
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-gray-600">
                            Creo en el poder transformador del cuidado natural y consciente
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {/* Philosophy 1 */}
                        <PhilosophyCard
                            icon={
                                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            }
                            title="Cuidado Natural"
                            description="Priorizo ingredientes naturales y tratamientos suaves que respetan la inteligencia natural de tu piel."
                        />

                        {/* Philosophy 2 */}
                        <PhilosophyCard
                            icon={
                                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            }
                            title="Enfoque Personalizado"
                            description="Cada persona es única. Mi asesoría se adapta a tu tipo de piel, estilo de vida y objetivos específicos."
                        />

                        {/* Philosophy 3 */}
                        <PhilosophyCard
                            icon={
                                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            }
                            title="Resultados Duraderos"
                            description="Mi objetivo no es solo mejorar tu apariencia, sino enseñarte a mantener una piel saludable a largo plazo."
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-linear-to-br from-pink-50 to-rose-50">
                <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                        ¿Lista para comenzar tu transformación?
                    </h2>
                    <p className="mb-8 text-lg text-gray-600">
                        Agenda tu consulta gratuita y descubre cómo puedo ayudarte a lograr la piel que siempre has deseado.
                    </p>
                    <button className="px-8 py-4 text-lg font-semibold text-white transition-colors bg-pink-500 rounded-full hover:bg-pink-600">
                        Agenda tu Consulta Gratuita
                    </button>
                </div>
            </section>
        </div>
    );
}