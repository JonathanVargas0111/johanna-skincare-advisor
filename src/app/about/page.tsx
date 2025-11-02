import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sobre Mí - Johanna V. Arias',
    description: 'Conoce a Johanna V. Arias, asesora certificada en cuidado de la piel con más de 10 años de experiencia. Descubre su filosofía holística y su enfoque personalizado para transformar tu piel.',
    keywords: ['Johanna V. Arias', 'asesora piel', 'skincare experta', 'filosofía skincare', 'cuidado de la piel natural'],
    openGraph: {
        title: 'Sobre Mí - Johanna V. Arias',
        description: 'Conoce a Johanna V. Arias, asesora certificada en cuidado de la piel con más de 10 años de experiencia. Descubre su filosofía holística y su enfoque personalizado para transformar tu piel.',
        url: 'https://johannavarias.com/about',
        type: 'profile',
        images: [
            {
                url: '/og-image.jpg', // Replace with a specific image for the about page if available
                width: 1200,
                height: 630,
                alt: 'Johanna V. Arias - Asesora en Cuidado de la Piel',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sobre Mí - Johanna V. Arias',
        description: 'Conoce a Johanna V. Arias, asesora certificada en cuidado de la piel con más de 10 años de experiencia. Descubre su filosofía holística y su enfoque personalizado para transformar tu piel.',
        images: ['/og-image.jpg'], // Replace with a specific image for the about page if available
        creator: '@johannavarias',
    },
    alternates: {
        canonical: 'https://johannavarias.com/about',
    },
};

export default function AboutPage() {
    const content = `
    <h1>Sobre Mí</h1>

    <h2>Mi Misión: Tu Piel, Mi Pasión</h2>

    <p>Hola, soy Johanna V. Arias. Mi misión es simple: ayudarte a sentirte increíble en tu propia piel. No se trata de perseguir un ideal de belleza inalcanzable, sino de descubrir la salud y la vitalidad que tu piel ya posee. Creo en un cuidado de la piel que es a la vez un acto de amor propio y una ciencia.</p>

    <h2>Mi Historia: De la Frustración a la Fascinación</h2>

    <p>Como muchas de ustedes, mi viaje en el mundo del skincare comenzó con una frustración personal. Durante años, luché con mi propia piel, probando innumerables productos y siguiendo consejos contradictorios que solo me dejaban más confundida. Fue entonces cuando decidí tomar el control y sumergirme en el estudio de la piel: su biología, su química y, lo más importante, su conexión con nuestro bienestar general.</p>

    <p>Esa frustración se transformó en una fascinación que me ha llevado a dedicar más de 10 años a entender las complejidades de la piel. Ahora, mi mayor alegría es compartir ese conocimiento contigo.</p>

    <h2>Mi Filosofía: Un Enfoque Holístico y Personalizado</h2>

    <p>No creo en las soluciones mágicas ni en las tendencias pasajeras. Mi filosofía se basa en tres pilares fundamentales:</p>

    <ol>
        <li><strong>Cuidado Basado en la Ciencia:</strong> Utilizo mi conocimiento técnico para analizar tu piel y recomendar ingredientes y rutinas que tienen un respaldo científico.</li>
        <li><strong>El Poder de lo Natural:</strong> Priorizo los ingredientes naturales y sostenibles que trabajan en armonía con tu piel, no en su contra.</li>
        <li><strong>Bienestar Integral:</strong> Tu piel es un reflejo de tu estilo de vida. Por eso, mis asesorías van más allá de los productos, abarcando la nutrición, el manejo del estrés y los hábitos diarios.</li>
    </ol>

    <h2>Mis Credenciales: 10+ Años de Experiencia</h2>

    <ul>
        <li><strong>Asesora Certificada en Cuidado de la Piel:</strong> Con una década de experiencia práctica y cientos de clientas satisfechas.</li>
        <li><strong>Especialista en Ingredientes Naturales:</strong> Formación continua en la aplicación de extractos botánicos y aceites esenciales para el cuidado de la piel.</li>
        <li><strong>Experta en Análisis de Piel con Tecnología IA:</strong> Utilizo herramientas de inteligencia artificial para un diagnóstico más preciso y recomendaciones efectivas.</li>
    </ul>

    <h2>¿Lista para Empezar tu Viaje?</h2>

    <p>Si estás lista para dejar de adivinar y empezar a ver resultados reales y duraderos, estoy aquí para guiarte. Juntas, crearemos un plan que no solo transforme tu piel, sino también tu confianza.</p>

    <p><a href="#contact" class="px-8 py-4 text-lg font-semibold text-white transition-colors bg-pink-500 rounded-full hover:bg-pink-600">Agenda tu Sesión Gratuita</a></p>
  `;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Sobre Mí - Johanna V. Arias",
        "description": "Conoce a Johanna V. Arias, asesora certificada en cuidado de la piel con más de 10 años de experiencia. Descubre su filosofía holística y su enfoque personalizado para transformar tu piel.",
        "url": "https://johannavarias.com/about",
        "publisher": {
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