export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
}

// Posts hardcodeados por ahora - en producción se leerían de archivos
const postsData: BlogPost[] = [
    {
        slug: 'asesora-piel-consulta-personalizada',
        title: 'Asesora Piel: Consulta Personalizada para tu Belleza',
        excerpt: 'Descubre cómo una consulta personalizada puede transformar tu rutina de cuidado de la piel. Johanna V. Arias te guía paso a paso.',
        date: '2025-11-01',
        content: `
      <p>En el mundo del cuidado de la piel, cada persona es única. Lo que funciona para una piel no necesariamente funciona para otra. Es por eso que una consulta personalizada con Johanna V. Arias puede marcar la diferencia en tu rutina de belleza.</p>

      <h2>¿Qué incluye una consulta personalizada?</h2>
      <ul>
        <li>Análisis completo de tu tipo de piel</li>
        <li>Evaluación de problemas específicos</li>
        <li>Plan de acción personalizado</li>
        <li>Recomendaciones de productos naturales</li>
      </ul>

      <h2>Beneficios de trabajar con una experta</h2>
      <p>Con más de 10 años de experiencia, Johanna V. Arias ha ayudado a cientos de personas a transformar su piel y confianza. Su enfoque natural y personalizado asegura resultados duraderos y saludables.</p>
    `
    },
    {
        slug: 'productos-piel-naturales',
        title: 'Productos para el Cuidado Natural de la Piel',
        excerpt: 'Los mejores productos naturales para mantener tu piel radiante y saludable. Recomendaciones expertas de Johanna V. Arias.',
        date: '2025-11-01',
        content: `
      <p>El cuidado natural de la piel no se trata solo de evitar químicos agresivos, sino de nutrir la piel con ingredientes que realmente funcionan. Johanna V. Arias comparte sus recomendaciones expertas.</p>

      <h2>Ingredientes clave para piel saludable</h2>
      <ul>
        <li><strong>Aloe Vera:</strong> Hidratante natural y calmante</li>
        <li><strong>Ácido Hialurónico:</strong> Retiene la humedad</li>
        <li><strong>Vitamina C:</strong> Ilumina y protege</li>
        <li><strong>Retinol Natural:</strong> Estimula la renovación celular</li>
      </ul>
    `
    },
    {
        slug: 'rutina-skincare-piel-seca',
        title: 'Rutina de Skincare para Piel Seca',
        excerpt: 'Aprende a crear la rutina perfecta para piel seca con ingredientes naturales y consejos profesionales.',
        date: '2025-11-01',
        content: `
      <p>La piel seca necesita cuidados específicos para mantener su hidratación y salud. Una rutina bien diseñada puede marcar la diferencia significativa en la apariencia y sensación de tu piel.</p>

      <h2>Pasos esenciales para piel seca</h2>
      <ol>
        <li><strong>Limpieza suave:</strong> Usa limpiadores cremosos sin sulfatos</li>
        <li><strong>Hidratación intensiva:</strong> Aplica sérum con ácido hialurónico</li>
        <li><strong>Protección:</strong> Cremas ricas con ceramidas</li>
        <li><strong>Mascarillas semanales:</strong> Tratamientos profundos de hidratación</li>
      </ol>
    `
    },
    {
        slug: 'skincare-natural-piel-radiante',
        title: 'Skincare Natural para una Piel Radiante',
        excerpt: 'Secretos naturales para lograr una piel radiante y saludable. Tratamientos caseros efectivos.',
        date: '2025-11-01',
        content: `
      <p>¿Cansada de productos con químicos que irritan? El skincare natural es la respuesta para lograr una piel verdaderamente radiante y saludable.</p>

      <h2>El poder de los ingredientes naturales</h2>
      <p>Los ingredientes naturales no solo son gentiles con la piel, sino que ofrecen beneficios reales respaldados por la ciencia y la tradición.</p>

      <h2>Rutina básica natural</h2>
      <ul>
        <li>Miel para exfoliación enzimática</li>
        <li>Aloe vera para hidratación profunda</li>
        <li>Té verde para antioxidantes</li>
        <li>Arcilla para detoxificación</li>
      </ul>
    `
    },
    {
        slug: 'tratamientos-faciales-casa',
        title: 'Tratamientos Faciales que Puedes Hacer en Casa',
        excerpt: 'Tratamientos faciales caseros efectivos y seguros. Consejos de una experta en cuidado de la piel.',
        date: '2025-11-01',
        content: `
      <p>No necesitas ir a un spa costoso para tener tratamientos faciales efectivos. Con los ingredientes correctos y técnicas apropiadas, puedes crear tratamientos profesionales en casa.</p>

      <h2>Mascarilla de miel y avena</h2>
      <p>Perfecta para piel seca y sensible. La miel hidrata profundamente mientras la avena calma irritaciones.</p>

      <h2>Exfoliación enzimática con piña</h2>
      <p>La bromelina natural de la piña disuelve células muertas sin irritar la piel.</p>

      <h2>Consejos importantes</h2>
      <ul>
        <li>Siempre haz una prueba de parche</li>
        <li>Limpia tu piel antes del tratamiento</li>
        <li>No combines tratamientos agresivos</li>
        <li>Hidrata después de cada tratamiento</li>
      </ul>
    `
    }
];

export function getAllPosts(): BlogPost[] {
    return postsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
    return postsData.find(post => post.slug === slug) || null;
}