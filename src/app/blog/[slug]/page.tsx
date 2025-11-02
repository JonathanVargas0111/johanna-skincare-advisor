import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '../../../lib/posts';
import type { Metadata } from 'next';

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const posts = getAllPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post no encontrado',
        };
    }

    const baseUrl = 'https://johannavarias.com';
    const postUrl = `${baseUrl}/blog/${slug}`;

    return {
        title: `${post.title} | Johanna V. Arias`,
        description: post.excerpt || post.content.substring(0, 160).replace(/[#*`]/g, ''),
        keywords: ['skincare', 'cuidado piel', 'belleza natural', 'tratamientos naturales', post.title.toLowerCase()],
        authors: [{ name: 'Johanna V. Arias' }],
        openGraph: {
            title: post.title,
            description: post.excerpt || post.content.substring(0, 160).replace(/[#*`]/g, ''),
            url: postUrl,
            type: 'article',
            publishedTime: post.date,
            authors: ['Johanna V. Arias'],
            images: [
                {
                    url: '/og-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt || post.content.substring(0, 160).replace(/[#*`]/g, ''),
            images: ['/og-image.jpg'],
        },
        alternates: {
            canonical: postUrl,
        },
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const baseUrl = 'https://johannavarias.com';

    return (
        <>
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": post.title,
                        "description": post.excerpt,
                        "author": {
                            "@type": "Person",
                            "name": "Johanna V. Arias",
                            "jobTitle": "Asesora Certificada en Cuidado de la Piel"
                        },
                        "datePublished": post.date,
                        "publisher": {
                            "@type": "Organization",
                            "name": "Johanna V. Arias",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://johannavarias.com/logo.png"
                            }
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": `${baseUrl}/blog/${slug}`
                        }
                    })
                }}
            />

            <div className="min-h-screen bg-white">
                {/* Header */}
                <header className="bg-white border-b border-gray-100 shadow-sm">
                    <div className="max-w-4xl px-4 py-6 mx-auto sm:px-6 lg:px-8">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 font-medium text-pink-600 transition-colors duration-200 hover:text-pink-700"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Volver al Blog
                        </Link>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden bg-linear-to-br from-rose-50 via-pink-50 to-purple-50">
                    <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
                    <div className="relative max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-4 mb-6">
                                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                                <span className="text-sm font-medium text-gray-500">{post.date}</span>
                                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                            </div>
                            <h1 className="mb-8 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                                {post.title}
                            </h1>
                            <div className="flex items-center justify-center gap-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br from-pink-500 to-rose-500">
                                        <span className="text-sm font-bold text-white">JV</span>
                                    </div>
                                    <div className="text-left">
                                        <div className="font-semibold text-gray-900">Johanna V. Arias</div>
                                        <div className="text-sm text-gray-600">Asesora Certificada en Cuidado de la Piel</div>
                                    </div>
                                </div>
                            </div>
                            {post.excerpt && (
                                <p className="max-w-2xl mx-auto text-xl text-gray-600">
                                    {post.excerpt}
                                </p>
                            )}
                        </div>
                    </div>
                </section>

                {/* Article */}
                <article className="max-w-4xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                    {/* Article Content */}
                    <div
                        className="prose prose-lg prose-pink max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-pink-600 prose-a:no-underline hover:prose-a:underline"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Share Section */}
                    <div className="pt-8 mt-12 border-t border-gray-200">
                        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
                            <div className="text-center sm:text-left">
                                <h3 className="mb-2 text-lg font-semibold text-gray-900">Comparte este artículo</h3>
                                <p className="text-gray-600">Ayuda a otros a descubrir consejos para el cuidado de la piel</p>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex items-center justify-center w-10 h-10 transition-colors bg-blue-600 rounded-full hover:bg-blue-700">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </button>
                                <button className="flex items-center justify-center w-10 h-10 transition-colors bg-blue-800 rounded-full hover:bg-blue-900">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                    </svg>
                                </button>
                                <button className="flex items-center justify-center w-10 h-10 transition-colors bg-green-600 rounded-full hover:bg-green-700">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="pt-12 mt-12 border-t border-gray-200">
                        <div className="p-8 text-center bg-linear-to-br from-rose-50 to-pink-50 rounded-2xl">
                            <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                ¿Listo para transformar tu piel?
                            </h3>
                            <p className="mb-6 text-lg text-gray-600">
                                Agenda tu consulta personalizada y descubre el plan perfecto para tu tipo de piel.
                            </p>
                            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 font-semibold text-white transition-colors duration-200 bg-pink-500 rounded-full hover:bg-pink-600"
                                >
                                    Agendar Consulta
                                </Link>
                                <Link
                                    href="/services"
                                    className="px-8 py-4 font-semibold text-pink-600 transition-colors duration-200 border border-pink-500 rounded-full hover:bg-pink-50"
                                >
                                    Ver Servicios
                                </Link>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
}