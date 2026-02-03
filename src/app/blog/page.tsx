import type { Metadata } from 'next';
import React from 'react';
import { BlogList } from '../../components/organisms/BlogList';
import { siteConfig } from '../../config/site';

export const metadata: Metadata = {
    title: 'Blog de Cuidado de la Piel | Johanna V. Arias',
    description: 'Descubre consejos expertos sobre cuidado natural de la piel. Rutinas, tratamientos, productos naturales y tips para una piel radiante. Blog por Johanna V. Arias.',
    keywords: ['blog skincare', 'consejos piel', 'rutina piel', 'productos naturales', 'cuidado piel radiante', 'tips belleza natural'],
    openGraph: {
        title: 'Blog de Cuidado de la Piel | Johanna V. Arias',
        description: 'Consejos expertos sobre cuidado natural de la piel y rutinas para una piel radiante.',
        url: `${siteConfig.domain}/blog`,
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blog de Cuidado de la Piel',
        description: 'Consejos expertos sobre cuidado natural de la piel.',
    },
};

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
                        "url": "https://johannavarias.com/blog",
                        "publisher": {
                            "@type": "Organization",
                            "name": "Johanna V. Arias",
                            "url": "https://johannavarias.com"
                        },
                        "author": {
                            "@type": "Person",
                            "name": "Johanna V. Arias",
                            "jobTitle": "Asesora Certificada en Cuidado de la Piel"
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://johannavarias.com/blog"
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