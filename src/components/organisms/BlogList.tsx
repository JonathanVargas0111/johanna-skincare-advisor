import React from 'react';
import { BlogCard } from '../molecules/BlogCard';
import { getAllPosts } from '../../lib/posts';

export const BlogList: React.FC = () => {
    const posts = getAllPosts();
    return (
        <section className="py-24 bg-linear-to-br from-rose-50 via-white to-amber-50">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16 text-center">
                    <div className="inline-block px-4 py-2 mb-6 text-sm font-medium text-pink-700 bg-pink-100 rounded-full">
                        Blog de Belleza
                    </div>

                    <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                        Consejos y Tratamientos
                        <span className="block text-pink-600">para tu Piel</span>
                    </h2>

                    <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600 md:text-xl">
                        Descubre los secretos del cuidado natural de la piel con Johanna V. Arias.
                        Artículos expertos sobre tratamientos, rutinas y productos naturales.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <BlogCard key={post.slug} {...post} />
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="max-w-md p-8 mx-auto bg-white border border-gray-100 shadow-sm rounded-2xl">
                        <h3 className="mb-4 text-xl font-bold text-gray-900">
                            ¿Necesitas Asesoría Personalizada?
                        </h3>
                        <p className="mb-6 text-gray-600">
                            Reserva tu consulta con Johanna V. Arias y transforma tu rutina de skincare.
                        </p>
                        <button className="px-6 py-3 font-semibold text-white transition-colors duration-200 bg-pink-500 rounded-full hover:bg-pink-600">
                            Agendar Consulta
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};