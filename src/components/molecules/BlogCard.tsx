import React from 'react';

interface BlogCardProps {
    title: string;
    excerpt: string;
    date: string;
    slug: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, date, slug }) => {
    return (
        <article className="group relative bg-white rounded-[2rem] p-8 shadow-xl ring-1 ring-gray-100 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl overflow-hidden">
            {/* Decorative background accent */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{date}</span>
                </div>

                <h3 className="mb-6 text-2xl font-bold leading-tight text-gray-900 font-playfair tracking-tighter transition-colors group-hover:text-pink-600">
                    {title}
                </h3>

                <p className="mb-8 leading-relaxed text-gray-500 font-light text-sm font-roboto line-clamp-3">
                    {excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-300">Artículo de Autor</span>

                    <a
                        href={`/blog/${slug}`}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-pink-600 transition-all duration-300 ease-in-out hover:gap-4 group-hover:text-pink-700"
                    >
                        Leer más
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </article>
    );
};