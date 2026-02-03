import type { Metadata } from 'next';
import React from 'react';
import { BlogList } from '../../components/organisms/BlogList';
import { constructMetadata } from '../../lib/metadata';
import { siteConfig } from '../../config/site';

export const metadata = constructMetadata({
    title: 'Blog de Cuidado de la Piel',
    description: 'Descubre consejos expertos sobre cuidado natural de la piel, rutinas y tratamientos personalizados con el Método Johanna.',
    canonicalUrl: '/blog',
});

export default function BlogPage() {
    return (
        <div className="min-h-screen">
            {/* JSON-LD Structured Data for Blog */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        "name": "Blog de Cuidado de la Piel",
                        "description": "Descubre consejos expertos sobre cuidado natural de la piel. Rutinas, tratamientos, productos naturales y tips para una piel radiante.",
                        "url": `${siteConfig.domain}/blog`,
                        "publisher": {
                            "@type": "Organization",
                            "name": "Johanna V. Arias",
                            "url": siteConfig.domain
                        },
                        "author": {
                            "@type": "Person",
                            "name": "Johanna V. Arias",
                            "jobTitle": "Asesora Certificada en Cuidado de la Piel"
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": `${siteConfig.domain}/blog`
                        },
                        "about": {
                            "@type": "Thing",
                            "name": "Cuidado Natural de la Piel",
                            "description": "Consejos expertos sobre skincare natural, rutinas efectivas y productos para una piel saludable y radiante."
                        }
                    })
                }}
            />

            <BlogList />
        </div>
    );
}