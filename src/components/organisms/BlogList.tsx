import React from 'react';
import { BlogCard } from '../molecules/BlogCard';
import { getAllPosts } from '../../lib/posts';
import { siteConfig } from '../../config/site';

export const BlogList: React.FC = () => {
    const posts = getAllPosts();
    return (
        <section id="blog" className="relative py-32 bg-white overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-50/50 rounded-full blur-[120px] -mr-64 -mt-64"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-50/30 rounded-full blur-[120px] -ml-64 -mb-64"></div>
            </div>

            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-24 text-center reveal-up">
                    <div className="inline-flex items-center px-4 py-2 mb-8 bg-linear-to-r from-pink-50 to-rose-50 border border-pink-100/50 rounded-full shadow-xs">
                        <span className="text-[11px] font-extrabold tracking-[0.3em] text-pink-600 uppercase">
                            Journal de Belleza Híbrida
                        </span>
                    </div>

                    <h2 className="mb-8 text-5xl md:text-6xl font-bold leading-[1.05] text-gray-900 font-playfair tracking-tight">
                        Tratamientos <span className="text-pink-600/90 italic font-serif">de Autor</span>
                    </h2>

                    <p className="max-w-2xl mx-auto text-xl leading-relaxed text-gray-400 font-light font-roboto">
                        Descubre la sinergia perfecta entre botica natural y alta ingeniería cosmética para una piel sublime.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 reveal-up [animation-delay:200ms]">
                    {posts.map((post) => (
                        <BlogCard key={post.slug} {...post} />
                    ))}
                </div>

                {/* Special CTA - Glassmorphized */}
                <div className="mt-32 reveal-up [animation-delay:400ms]">
                    <div className="relative max-w-4xl mx-auto group">
                        <div className="absolute -inset-1 bg-linear-to-r from-pink-100 to-rose-100 rounded-[3.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-white/60 backdrop-blur-2xl px-8 py-16 md:px-20 md:py-20 rounded-[3rem] shadow-2xl ring-1 ring-white/30 border border-gray-100/50 text-center">
                            <span className="inline-block text-[10px] font-black tracking-[0.4em] text-pink-500 uppercase mb-6">Consulta Premium</span>
                            <h3 className="mb-8 text-4xl md:text-5xl font-bold text-gray-900 font-playfair tracking-tight leading-tight">
                                ¿Lista para tu <span className="italic text-pink-600">Transformación Real</span>?
                            </h3>
                            <p className="max-w-xl mx-auto mb-12 text-gray-500 text-lg font-light leading-relaxed font-roboto">
                                Johanna Arias evaluará tu piel de forma exclusiva para diseñar el protocolo híbrido que tu rostro merece.
                            </p>

                            <a
                                href="https://wa.me/573133747275?text=Hola%20Johanna,%20leí%20tu%20blog%20y%20quiero%20una%20asesoría%20personalizada"
                                className="group relative inline-flex items-center justify-center px-12 py-6 overflow-hidden font-bold transition-all duration-300 bg-gray-900 rounded-2xl hover:bg-black shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-1 active:scale-95"
                            >
                                <span className="relative z-10 text-[11px] uppercase tracking-[0.3em] text-white">Agendar mi Diagnóstico Gratis</span>
                                <div className="absolute inset-0 w-full h-full bg-linear-to-r from-pink-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};