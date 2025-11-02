import type { Metadata } from 'next';
import { Header } from '../../components/organisms/Header';
import { ServiceCard } from '../../components/molecules/ServiceCard';

export const metadata: Metadata = {
    title: 'Servicios de Asesoría en Cuidado de la Piel | Johanna V. Arias',
    description: 'Descubre todos los servicios de asesoría en cuidado natural de la piel. Consultas personalizadas, planes de tratamiento y seguimiento experto. Más de 10 años de experiencia.',
    keywords: ['servicios skincare', 'asesoría piel', 'consulta dermatológica natural', 'tratamientos faciales', 'rutina piel personalizada'],
    openGraph: {
        title: 'Servicios de Asesoría en Cuidado de la Piel',
        description: 'Consultas personalizadas, planes de tratamiento y seguimiento experto para tu piel.',
        url: 'https://johannavarias.com/services',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Servicios de Asesoría en Cuidado de la Piel',
        description: 'Consultas personalizadas y tratamientos naturales para tu piel.',
    },
};

export default function Services() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="flex items-center justify-center min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-white">
                <div className="max-w-4xl px-4 mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-block px-4 py-2 mb-6 text-sm font-medium text-pink-700 bg-pink-100 rounded-full">
                        Servicios Personalizados
                    </div>

                    {/* Main Title */}
                    <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl">
                        Servicios de Asesoría
                    </h1>

                    {/* Subtitle */}
                    <p className="max-w-2xl mx-auto mb-4 text-lg text-gray-600 md:text-xl">
                        Johanna V. Arias - Asesora Certificada en Cuidado Natural de la Piel
                    </p>

                    {/* Description */}
                    <p className="max-w-3xl mx-auto mb-10 text-base leading-relaxed text-gray-600 md:text-lg">
                        Transforma tu rutina de skincare con asesoría experta y personalizada.
                        Descubre todos los servicios que tengo para ofrecerte.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col justify-center gap-4 mb-16 sm:flex-row">
                        <button className="px-8 py-4 text-lg font-semibold text-white transition-colors bg-pink-500 rounded-full hover:bg-pink-600">
                            Agenda tu Sesión Gratuita
                        </button>
                        <button className="px-8 py-4 text-lg font-semibold text-pink-600 transition-all border-2 border-pink-500 rounded-full hover:bg-pink-500 hover:text-white">
                            Ver Todos los Servicios
                        </button>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-gray-50">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                            Servicios Personalizados
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-gray-600">
                            Transforma tu piel con asesoría experta adaptada a tus necesidades únicas
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {/* Service 1 */}
                        <ServiceCard
                            icon={
                                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            }
                            title="Consulta Personalizada"
                            description="Análisis completo de tu tipo de piel y necesidades específicas para crear una rutina personalizada."
                            price="$50"
                            priceLabel="/ sesión"
                        />

                        {/* Service 2 */}
                        <ServiceCard
                            icon={
                                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            }
                            title="Plan de Tratamiento"
                            description="Desarrollo de un plan completo de tratamiento para problemas específicos de la piel."
                            price="$80"
                            priceLabel="/ plan"
                        />

                        {/* Service 3 */}
                        <ServiceCard
                            icon={
                                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            }
                            title="Seguimiento y Ajustes"
                            description="Sesiones de seguimiento para ajustar tu rutina según los resultados obtenidos."
                            price="$35"
                            priceLabel="/ sesión"
                        />
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 text-center">
                        <div className="max-w-2xl mx-auto">
                            <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                ¿Lista para transformar tu piel?
                            </h3>
                            <p className="mb-8 text-gray-600">
                                Agenda tu consulta gratuita y comienza tu viaje hacia una piel radiante y saludable.
                            </p>
                            <button className="px-8 py-4 text-lg font-semibold text-white transition-colors bg-pink-500 rounded-full hover:bg-pink-600">
                                Agenda tu Sesión Gratuita
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}