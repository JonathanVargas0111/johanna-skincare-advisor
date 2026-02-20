import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts, getRelatedPosts } from '../../../lib/posts';
import type { Metadata } from 'next';
import { siteConfig } from '../../../config/site';

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

    const baseUrl = siteConfig.domain;
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
                    url: '/og-image-premium.png',
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
            images: ['/og-image-premium.png'],
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

    const baseUrl = siteConfig.domain;
    const postUrl = `${baseUrl}/blog/${slug}`;
    const relatedPosts = getRelatedPosts(slug, 3);

    return (
        <div className="min-h-screen bg-white">
            {/* BlogPosting Schema for Rich Snippets */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": post.title,
                        "description": post.excerpt || post.content.substring(0, 160).replace(/[#*`]/g, ''),
                        "articleBody": post.content.substring(0, 500).replace(/[#*`]/g, ''),
                        "author": {
                            "@type": "Person",
                            "@id": `${baseUrl}/about`,
                            "name": "Johanna V. Arias",
                            "jobTitle": "Experta en Transformación de Piel",
                            "url": `${baseUrl}/about`
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Johanna V. Arias | Experta en Skincare",
                            "url": baseUrl,
                            "logo": {
                                "@type": "ImageObject",
                                "url": `${baseUrl}/og-image-premium.png`
                            }
                        },
                        "datePublished": post.date,
                        "dateModified": post.date,
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": postUrl
                        },
                        "image": {
                            "@type": "ImageObject",
                            "url": `${baseUrl}/og-image-premium.png`,
                            "width": 1200,
                            "height": 630
                        },
                        "keywords": ["skincare", "cuidado piel", "belleza natural", "tratamientos naturales", post.title.toLowerCase()].join(", "),
                        "inLanguage": "es-CO",
                        "isAccessibleForFree": true
                    })
                }}
            />

            {/* Header / Breadcrumb - High Authority Feel */}
            <div className="sticky top-0 z-50 bg-white/60 backdrop-blur-xl border-b border-gray-100/50">
                <div className="max-w-5xl px-4 py-4 mx-auto sm:px-6 lg:px-8 flex items-center justify-between">
                    <Link
                        href="/blog"
                        className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-pink-600 transition-colors"
                    >
                        <svg className="w-3 h-3 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                        </svg>
                        Volver al Journal
                    </Link>
                    <div className="hidden md:block text-[10px] font-bold text-gray-300 tracking-widest uppercase">
                        Protocolos de Transformación Híbrida
                    </div>
                </div>
            </div>

            {/* Hero Section - Immersive Luxury */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-white">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-50/40 rounded-full blur-[120px] -mr-64 -mt-64"></div>
                <div className="relative max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-3 px-4 py-2 mb-10 bg-linear-to-r from-pink-50/50 to-rose-50/50 border border-pink-100/30 rounded-full">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">Publicado el {post.date}</span>
                        </div>

                        {/* Title */}
                        <h1 className="mb-10 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-gray-900 font-playfair tracking-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-12">
                            {/* Author Card - Luxury Styled */}
                            <div className="flex items-center gap-5 p-1 pr-6 bg-gray-50/30 rounded-full border border-gray-100/50 w-fit">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-pink-500 blur-md opacity-20 animate-pulse rounded-full"></div>
                                    <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gray-900 shadow-xl overflow-hidden ring-2 ring-white">
                                        <span className="text-sm font-bold text-white tracking-widest">JV</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-900">Johanna V. Arias</div>
                                    <div className="text-[10px] font-medium text-pink-500 uppercase tracking-widest">Skin Coach & Experta</div>
                                </div>
                            </div>

                            {/* Social Share Minimalist */}
                            <div className="flex items-center gap-4 border-l border-gray-100 pl-8">
                                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-gray-300">Compartir</span>
                                <div className="flex gap-2">
                                    <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title)}%20${postUrl}`} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-green-50 hover:border-green-200 transition-colors">
                                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 2c-5.517 0-9.969 4.451-9.969 9.969 0 1.766.463 3.42 1.272 4.881l-1.341 4.89 5.01-1.314c1.413.771 3.021 1.212 4.73 1.212 5.518 0 9.969-4.451 9.969-9.969 0-5.518-4.451-9.969-9.969-9.969zm4.903 14.188c-.213.606-1.077 1.156-1.488 1.231-.412.075-.826.138-2.613-.591-2.103-.859-3.414-2.969-3.519-3.109-.105-.14-1.127-1.491-1.127-2.844 0-1.353.705-2.016.953-2.29.248-.274.542-.343.722-.343s.361.002.518.009c.162.007.382-.062.597.457.215.519.736 1.791.801 1.921s.104.288.019.458-.124.288-.248.423-.255.302-.361.402-.124.21-.053.332c.071.121.315.519.676.84.464.412.855.54 1.05.632s.316.091.437-.052c.121-.143.518-.604.657-.811s.277-.174.464-.105.1.344.344.464c.243.121 1.554.736 1.821.85s.445.189.511.299.1.552-.113 1.158z" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <main className="relative max-w-5xl px-4 mx-auto sm:px-6 lg:px-8 pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Progress Sidebar - Desktop Only */}
                    <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit">
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-900 mb-4">Sobre esta Consulta</h4>
                                <p className="text-xs text-gray-400 leading-relaxed italic">
                                    "Cada artículo es el resumen de años de práctica clínica y botánica natural."
                                </p>
                            </div>
                            <div className="pt-8 border-t border-gray-100">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-900 mb-6">Sinergia Híbrida</h4>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 text-[10px] font-bold">01</div>
                                        <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Botica Sheló</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 text-[10px] font-bold">02</div>
                                        <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Ciencia Mary Kay</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Article Content */}
                    <div className="lg:col-span-9">
                        <article className="prose prose-lg max-w-none">
                            <div
                                className="article-content font-roboto font-light leading-relaxed text-gray-600 space-y-8 prose-h2:font-playfair prose-h2:text-3xl prose-h2:text-gray-900 prose-h2:tracking-tight prose-blockquote:border-l-pink-500 prose-blockquote:bg-pink-50/50 prose-blockquote:p-8 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic prose-blockquote:text-xl prose-blockquote:font-playfair prose-strong:text-gray-900 prose-strong:font-bold prose-a:text-pink-600 prose-a:no-underline hover:prose-a:underline"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </article>

                        {/* Final Signature */}
                        <div className="mt-24 pt-12 border-t border-gray-100 flex flex-col items-center text-center">
                            <div className="text-3xl font-playfair italic text-gray-900 mb-4 font-bold">Johanna V. Arias</div>
                            <p className="text-sm text-gray-400 font-medium uppercase tracking-[0.2em]">Tu Skin Coach de Confianza en Colombia</p>
                        </div>

                        {/* High Conversion CTA - Premium Glass */}
                        <div className="mt-20">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-linear-to-r from-pink-500 to-rose-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                                <div className="relative bg-white border border-pink-100/50 rounded-[2rem] p-10 md:p-16 overflow-hidden shadow-2xl">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-rose-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>

                                    <div className="relative z-10 text-center">
                                        <div className="inline-block px-4 py-1.5 bg-pink-50 rounded-full text-[9px] font-black text-pink-600 uppercase tracking-[0.3em] mb-8">Protocolo Exclusivo</div>
                                        <h3 className="text-3xl md:text-5xl font-bold text-gray-900 font-playfair tracking-tight mb-8 leading-tight">
                                            ¿Quieres que analice <br /><span className="italic text-pink-600">tu piel</span> personalmente?
                                        </h3>
                                        <p className="max-w-xl mx-auto mb-10 text-gray-500 text-lg font-light leading-relaxed">
                                            No sigas rutinas genéricas. Escríbeme ahora y diseñaré tu protocolo de Sinergia Híbrida 100% a medida.
                                        </p>

                                        <a
                                            href={`${siteConfig.whatsappLink}?text=${encodeURIComponent(`Hola Johanna, leí tu artículo "${post.title}" y quiero empezar mi transformación`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden font-bold transition-all duration-300 bg-gray-900 rounded-2xl hover:bg-black shadow-2xl hover:-translate-y-1 active:scale-95"
                                        >
                                            <span className="relative z-10 text-[11px] uppercase tracking-[0.3em] text-white flex items-center gap-3">
                                                Comenzar mi Consultoría Gratis
                                                <svg className="w-5 h-5 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                            </span>
                                            <div className="absolute inset-0 w-full h-full bg-linear-to-r from-pink-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Posts Section */}
                {relatedPosts.length > 0 && (
                    <div className="mt-20 pt-16 border-t border-gray-100">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-10 text-center">También te puede interesar</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map((related) => (
                                <Link
                                    key={related.slug}
                                    href={`/blog/${related.slug}`}
                                    className="group p-8 rounded-[2rem] border border-gray-100 hover:border-pink-100 hover:bg-rose-50/30 transition-all duration-300"
                                >
                                    <h4 className="text-lg font-bold text-gray-900 font-playfair tracking-tight group-hover:text-pink-600 transition-colors mb-3 line-clamp-2">
                                        {related.title}
                                    </h4>
                                    <p className="text-sm text-gray-400 font-light line-clamp-2">
                                        {related.excerpt}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}