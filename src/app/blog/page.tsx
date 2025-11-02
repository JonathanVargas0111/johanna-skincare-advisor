import type { Metadata } from 'next';
import React from 'react';
import { BlogList } from '../../components/organisms/BlogList';

export const metadata: Metadata = {
    title: 'Blog de Cuidado de la Piel | Johanna V. Arias',
    description: 'Descubre consejos expertos sobre cuidado natural de la piel. Rutinas, tratamientos, productos naturales y tips para una piel radiante. Blog por Johanna V. Arias.',
    keywords: ['blog skincare', 'consejos piel', 'rutina piel', 'productos naturales', 'cuidado piel radiante', 'tips belleza natural'],
    openGraph: {
        title: 'Blog de Cuidado de la Piel | Johanna V. Arias',
        description: 'Consejos expertos sobre cuidado natural de la piel y rutinas para una piel radiante.',
        url: 'https://johannavarias.com/blog',
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
            <BlogList />
        </div>
    );
}