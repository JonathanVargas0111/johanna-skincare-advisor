import React from 'react';

interface BlogCardProps {
    title: string;
    excerpt: string;
    date: string;
    slug: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, date, slug }) => {
    return (
        <article className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-lg group">
            <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-500">{date}</span>
                </div>

                <h3 className="mb-3 text-xl font-bold leading-tight text-gray-900 transition-colors duration-200 group-hover:text-pink-600">
                    {title}
                </h3>

                <p className="mb-4 leading-relaxed text-gray-600 line-clamp-3">
                    {excerpt}
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-linear-to-br from-pink-500 to-rose-500">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <span className="text-sm text-gray-500">Artículo</span>
                    </div>

                    <a
                        href={`/blog/${slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-pink-600 transition-colors duration-200 transform hover:text-pink-700 group-hover:translate-x-1"
                    >
                        Leer más
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </article>
    );
};