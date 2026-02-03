import React from 'react';

interface BlogCardProps {
    title: string;
    excerpt: string;
    date: string;
    slug: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, date, slug }) => {
    return (
        <article className="group relative bg-white/40 backdrop-blur-md rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-white/20 border border-gray-100/50 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,182,193,0.15)] hover:ring-pink-100/50 overflow-hidden">
            {/* Decorative glass accent */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-linear-to-br from-rose-100/20 to-pink-100/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 ring-1 ring-gray-100/50 shadow-xs">
                        <span className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse"></span>
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500">{date}</span>
                    </div>
                </div>

                <h3 className="mb-6 text-2xl md:text-3xl font-bold leading-[1.1] text-gray-900 font-playfair tracking-tight transition-all duration-300 group-hover:text-pink-600 group-hover:translate-x-1">
                    {title}
                </h3>

                <p className="mb-10 leading-relaxed text-gray-600 font-light text-[15px] font-roboto line-clamp-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {excerpt}
                </p>

                <div className="mt-auto pt-8 border-t border-gray-100/30 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-[8px] font-black uppercase tracking-[0.25em] text-pink-400 mb-1">Expertise</span>
                        <span className="text-[10px] font-medium text-gray-400">Protocolo de Autor</span>
                    </div>

                    <a
                        href={`/blog/${slug}`}
                        className="group/link relative inline-flex items-center gap-3 px-6 py-3 overflow-hidden rounded-full bg-gray-900 text-white transition-all duration-300 hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-200 active:scale-95"
                    >
                        <span className="relative z-10 text-[10px] font-bold uppercase tracking-widest">Ver más</span>
                        <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </article>
    );
};