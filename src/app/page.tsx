import { BlogList } from '../components/organisms/BlogList';
import { Header } from '../components/organisms/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Johanna V. Arias - Asesora de Piel",
            "url": "https://johannavarias.com",
            "logo": "https://johannavarias.com/logo.png",
            "description": "Asesora certificada en cuidado natural de la piel con más de 10 años de experiencia. Soluciones personalizadas y naturales para cada tipo de piel.",
            "founder": {
              "@type": "Person",
              "name": "Johanna V. Arias",
              "jobTitle": "Asesora Certificada en Cuidado de la Piel"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+57-XXX-XXX-XXXX",
              "contactType": "customer service",
              "availableLanguage": "Spanish"
            },
            "sameAs": [
              "https://www.instagram.com/johannavarias",
              "https://www.facebook.com/johannavarias"
            ],
            "serviceType": "Asesoría en Cuidado de la Piel",
            "areaServed": "Colombia"
          })
        }}
      />

      <Header />

      {/* Hero Section */}
      <section id="home" className="flex items-center justify-center min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-white">
        <div className="max-w-4xl px-4 mx-auto text-center">
          {/* Badge */}
          <div className="inline-block px-4 py-2 mb-6 text-sm font-medium text-pink-700 bg-pink-100 rounded-full">
            Experta en Cuidado Natural de la Piel
          </div>

          {/* Main Title */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl">
            Tu Piel, Tu Mejor Versión
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto mb-4 text-lg text-gray-600 md:text-xl">
            Johanna V. Arias - Asesora Certificada
          </p>

          {/* Description */}
          <p className="max-w-3xl mx-auto mb-10 text-base leading-relaxed text-gray-600 md:text-lg">
            Con más de 10 años de experiencia, transformo tu rutina de skincare en un ritual de amor propio.
            Soluciones naturales y personalizadas para cada tipo de piel.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center gap-4 mb-16 sm:flex-row">
            <a href="#contact" className="px-8 py-4 text-lg font-semibold text-white transition-colors bg-pink-500 rounded-full hover:bg-pink-600">
              Agenda tu Sesión Gratuita
            </a>
            <a href="#services" className="px-8 py-4 text-lg font-semibold text-pink-600 transition-all border-2 border-pink-500 rounded-full hover:bg-pink-500 hover:text-white">
              Ver Servicios
            </a>
          </div>

          {/* Stats */}
          <div className="grid max-w-lg grid-cols-1 gap-8 mx-auto sm:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-pink-600 md:text-4xl">10+</div>
              <div className="font-medium text-gray-600">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold md:text-4xl text-amber-600">500+</div>
              <div className="font-medium text-gray-600">Clientes Felices</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-pink-600 md:text-4xl">98%</div>
              <div className="font-medium text-gray-600">Satisfacción</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section id="why-choose-me" className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-12 text-3xl font-bold text-gray-900 md:text-4xl font-playfair">¿Por Qué Elegirme?</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-8 text-center">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900 font-roboto">10+ Años de Experiencia</h3>
              <p className="text-gray-600">He ayudado a cientos de mujeres a transformar su piel y su confianza con un enfoque probado y personalizado.</p>
            </div>
            <div className="p-8 text-center">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900 font-roboto">Enfoque en Ingredientes Naturales</h3>
              <p className="text-gray-600">Creo en el poder de la naturaleza. Mis recomendaciones se basan en ingredientes puros, efectivos y sostenibles.</p>
            </div>
            <div className="p-8 text-center">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900 font-roboto">Análisis con Tecnología IA</h3>
              <p className="text-gray-600">Utilizo herramientas de inteligencia artificial para analizar tu piel y ofrecerte las recomendaciones más precisas y efectivas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section id="services" className="py-20 bg-linear-to-br from-rose-50 via-white to-amber-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl font-playfair">Servicios Destacados</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 font-roboto">Soluciones personalizadas para cada necesidad de tu piel.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-8 text-center bg-white border border-gray-100 shadow-sm rounded-xl">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 font-roboto">Consulta Personalizada</h3>
              <p className="text-gray-600">Una inmersión profunda en tu piel y estilo de vida para crear un plan de acción único para ti.</p>
            </div>
            <div className="p-8 text-center bg-white border border-gray-100 shadow-sm rounded-xl">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 font-roboto">Rutinas de Skincare a Medida</h3>
              <p className="text-gray-600">Recibe una rutina de mañana y noche, paso a paso, con los productos ideales para tu tipo de piel.</p>
            </div>
            <div className="p-8 text-center bg-white border border-gray-100 shadow-sm rounded-xl">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 font-roboto">Recomendaciones de Productos</h3>
              <p className="text-gray-600">Ahorra tiempo y dinero con una lista curada de los mejores productos naturales para tu piel y presupuesto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-12 text-3xl font-bold text-gray-900 md:text-4xl font-playfair">Lo que Dicen Mis Clientes</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="p-8 bg-pink-50 rounded-xl">
              <p className="mb-4 text-lg text-gray-600 font-roboto">&ldquo;Johanna cambió mi piel por completo. Su enfoque personalizado y sus recomendaciones de productos naturales fueron un antes y un después. ¡Mi piel nunca ha estado tan radiante!&rdquo;</p>
              <p className="font-semibold text-gray-900">- Ana G.</p>
            </div>
            <div className="p-8 bg-pink-50 rounded-xl">
              <p className="mb-4 text-lg text-gray-600 font-roboto">&ldquo;Estaba cansada de gastar dinero en productos que no funcionaban. La asesoría de Johanna me dio claridad y una rutina que realmente funciona. ¡La recomiendo al 100%!&rdquo;</p>
              <p className="font-semibold text-gray-900">- Laura M.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-linear-to-br from-rose-50 via-white to-amber-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl font-playfair">Sobre Mí</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600 font-roboto">Hola, soy Johanna V. Arias, y mi pasión es ayudarte a descubrir la mejor versión de tu piel. Con más de 10 años de experiencia en el mundo del skincare y una profunda creencia en el poder de lo natural, he desarrollado un método que combina la sabiduría tradicional con la última tecnología para ofrecerte resultados que puedes ver y sentir.</p>
            <a href="/about" className="font-semibold text-pink-600 hover:text-pink-700 font-montserrat">Conoce más sobre mi filosofía</a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogList />

      {/* Final CTA Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl font-playfair">¿Lista para Empezar tu Transformación?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600 font-roboto">Tu viaje hacia una piel más sana y radiante comienza con un solo paso. Agenda tu sesión gratuita y descubre el plan perfecto para ti.</p>
            <a href="#contact" className="px-8 py-4 text-lg font-semibold text-white transition-colors bg-pink-500 rounded-full hover:bg-pink-600 font-montserrat">
              Agenda tu Sesión Gratuita
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
