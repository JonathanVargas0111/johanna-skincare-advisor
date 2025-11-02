import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Mis Servicios - Johanna V. Arias',
    description: 'Descubre los servicios personalizados de Johanna V. Arias: consulta inicial, paquetes premium y seguimiento mensual para una piel radiante y saludable.',
    keywords: ['servicios skincare', 'asesoría piel personalizada', 'consultas belleza', 'rutinas a medida', 'tratamientos naturales'],
    openGraph: {
        title: 'Mis Servicios - Johanna V. Arias',
        description: 'Descubre los servicios personalizados de Johanna V. Arias: consulta inicial, paquetes premium y seguimiento mensual para una piel radiante y saludable.',
        url: 'https://johannavarias.com/services',
        type: 'website', // or 'service' if schema.org supports it directly
        images: [
            {
                url: '/og-image.jpg', // Replace with a specific image for the services page if available
                width: 1200,
                height: 630,
                alt: 'Mis Servicios de Skincare',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Mis Servicios - Johanna V. Arias',
        description: 'Descubre los servicios personalizados de Johanna V. Arias: consulta inicial, paquetes premium y seguimiento mensual para una piel radiante y saludable.',
        images: ['/og-image.jpg'], // Replace with a specific image for the services page if available
        creator: '@johannavarias',
    },
    alternates: {
        canonical: 'https://johannavarias.com/services',
    },
};

export default function ServicesPage() {
    const content = `
    <h1>Mis Servicios</h1>

    <h2>Invierte en tu Piel, Invierte en tu Confianza</h2>

    <p>Cada piel es un mundo, y merece un plan que la entienda y la cuide de manera única. Mis servicios están diseñados para ir más allá de las soluciones genéricas, ofreciéndote una hoja de ruta clara y personalizada hacia la piel que siempre has deseado. Juntas, trabajaremos para lograr resultados reales y duraderos.</p>

    <hr />

    <h3>Consulta Inicial</h3>

    <p><strong>Ideal para:</strong> Quienes desean entender su piel por primera vez o necesitan una segunda opinión experta sobre su rutina actual.</p>

    <h4>¿Qué incluye?</h4>

    <ul>
        <li><strong>Análisis Completo de la Piel (45 min):</strong> Una sesión virtual donde evaluaremos tu tipo de piel, preocupaciones (acné, manchas, sensibilidad, etc.), y tus objetivos.</li>
        <li><strong>Revisión de Rutina Actual:</strong> Analizaremos los productos que estás usando para ver qué funciona y qué no.</li>
        <li><strong>Plan de Acción Inicial:</strong> Recibirás recomendaciones clave y los siguientes pasos a seguir.</li>
    </ul>

    <p><strong>Inversión:</strong> $40 USD</p>

    <p><a href="#contact" class="px-8 py-4 text-lg font-semibold text-white transition-colors bg-pink-500 rounded-full hover:bg-pink-600">Agendar Consulta Inicial</a></p>

    <hr />

    <h3>Paquete Premium: Transformación Total</h3>

    <p><strong>Ideal para:</strong> Quienes están listas para un cambio completo y desean un acompañamiento cercano para transformar su piel de manera integral.</p>

    <h4>¿Qué incluye?</h4>

    <ul>
        <li><strong>Todo lo de la Consulta Inicial.</strong></li>
        <li><strong>Rutina de Skincare Personalizada (Mañana y Noche):</strong> Un plan detallado con productos específicos recomendados para ti.</li>
        <li><strong>Guía de Ingredientes Clave:</strong> Aprenderás a identificar los ingredientes que tu piel ama (y los que debe evitar).</li>
        <li><strong>Recomendaciones de Productos:</strong> Una lista curada de productos (naturales y efectivos) adaptados a tu presupuesto.</li>
        <li><strong>Sesión de Seguimiento (30 min):</strong> A las 4 semanas, nos reuniremos para evaluar tu progreso y hacer los ajustes necesarios.</li>
    </ul>

    <p><strong>Inversión:</strong> $150 USD</p>

    <p><a href="#contact" class="px-8 py-4 text-lg font-semibold text-white transition-colors bg-pink-500 rounded-full hover:bg-pink-600">Quiero el Paquete Premium</a></p>

    <hr />

    <h3>Seguimiento Mensual</h3>

    <p><strong>Ideal para:</strong> Clientes existentes que desean un acompañamiento continuo para mantener y optimizar sus resultados a largo plazo.</p>

    <h4>¿Qué incluye?</h4>

    <ul>
        <li><strong>Check-in Mensual (30 min):</strong> Una sesión virtual para resolver dudas, ajustar tu rutina según la estación o nuevas necesidades, y asegurarnos de que sigues en el camino correcto.</li>
        <li><strong>Soporte por Email:</strong> Acceso prioritario por email para preguntas rápidas durante el mes.</li>
        <li><strong>Descuentos en Productos:</strong> Acceso a descuentos exclusivos en marcas de productos recomendadas.</li>
    </ul>

    <p><strong>Inversión:</strong> $50 USD/mes</p>

    <p><a href="#contact" class="px-8 py-4 text-lg font-semibold text-white transition-colors bg-pink-500 rounded-full hover:bg-pink-600">Suscribirme al Seguimiento</a></p>

    <hr />

    <h3>¿No estás segura por dónde empezar?</h3>

    <p>La <strong>Consulta Inicial</strong> es el punto de partida perfecto. Nos permitirá conocernos, entender las necesidades de tu piel y trazar un plan. Si después decides optar por el Paquete Premium, el costo de la consulta inicial se descontará del precio total.</p>

    <p><a href="#contact" class="px-8 py-4 text-lg font-semibold text-white transition-colors bg-pink-500 rounded-full hover:bg-pink-600">Empezar con una Consulta Inicial</a></p>
  `;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ServicePage", // More specific schema type for a service page
        "name": "Mis Servicios - Johanna V. Arias",
        "description": "Descubre los servicios personalizados de Johanna V. Arias: consulta inicial, paquetes premium y seguimiento mensual para una piel radiante y saludable.",
        "url": "https://johannavarias.com/services",
        "provider": {
            "@type": "Person",
            "name": "Johanna V. Arias"
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
}