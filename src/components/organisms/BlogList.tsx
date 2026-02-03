import React from 'react';
import { BlogCard } from '../molecules/BlogCard';
import { getAllPosts } from '../../lib/posts';
import { siteConfig } from '../../config/site';

export const BlogList: React.FC = () => {
    const posts = getAllPosts();
    return (
        <section id="blog" className="py-24 bg-linear-to-b from-white to-rose-50/30 overflow-hidden">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-20 text-center reveal-up">
                    <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-extrabold tracking-[0.3em] text-pink-700 bg-pink-50 rounded-full uppercase">
                        Explora el Conocimiento
                    </div>

                    <h2 className="mb-8 text-4xl font-bold leading-tight text-gray-900 md:text-5xl font-playfair tracking-tighter">
                        Consejos y Tratamientos <span className="text-pink-600 italic font-serif">de Autor</span>
                    </h2>

                    <p className="max-w-2xl mx-auto text-xl leading-relaxed text-gray-500 font-light font-roboto">
                        Sumérgete en artículos expertos diseñados para elevar tu ritual de cuidado diario.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 reveal-up [animation-delay:200ms]">
                    {posts.map((post) => (
                        <BlogCard key={post.slug} {...post} />
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-24 text-center reveal-up [animation-delay:400ms]">
                    <div className="relative max-w-2xl p-1 md:p-2 mx-auto glass-card rounded-[3rem] shadow-xl ring-1 ring-gray-100">
                        <div className="bg-white rounded-[2.8rem] p-10 md:p-14">
                            <h3 className="mb-6 text-3xl font-bold text-gray-900 font-playfair tracking-tight">
                                ¿Buscas un Protocolo Único?
                            </h3>
                            <p className="mb-10 text-gray-500 font-light leading-relaxed font-roboto">
                                Johanna Arias evaluará tu piel de forma exclusiva para diseñar la sinergia perfecta.
                            </p>
                            <a
                                href="https://wa.me/573124567890?text=Hola%20Johanna,%20leí%20tu%20blog%20y%20quiero%20una%20asesoría%20personalizada"
                                className="inline-block px-10 py-5 font-bold text-[10px] uppercase tracking-[0.2em] text-white transition-all duration-300 ease-in-out bg-gray-900 rounded-2xl hover:bg-black hover:-translate-y-1 shadow-2xl active:scale-95 ring-1 ring-white/10"
                            >
                                Agendar Consulta Privada
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};