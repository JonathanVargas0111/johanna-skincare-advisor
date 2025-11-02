import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-primary font-bold text-primary">Johanna V. Arias</Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-gray-700 hover:text-primary">Inicio</Link></li>
              <li><Link href="#sobre-mi" className="text-gray-700 hover:text-primary">Sobre Mí</Link></li>
              <li><Link href="#servicios" className="text-gray-700 hover:text-primary">Servicios</Link></li>
              <li><Link href="/blog" className="text-gray-700 hover:text-primary">Blog</Link></li>
              <li><Link href="#contacto" className="text-gray-700 hover:text-primary">Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-neutral px-4">
        <div className="text-center max-w-4xl">
          <Image
            src="/Generated Image October 18, 2025 - 1_01PM.png" // Asumir que copiamos las imágenes a public/
            alt="Johanna V. Arias"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-6"
          />
          <h1 className="text-5xl font-primary font-bold text-primary mb-4">
            Johanna V. Arias
          </h1>
          <p className="text-xl font-secondary text-secondary mb-6">
            Asesora de Cuidado de la Piel
          </p>
          <p className="text-lg mb-8">
            Con más de 10 años de experiencia, me dedico a transformar pieles con asesoría personalizada.
          </p>
          <a
            href="#contacto"
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent transition"
          >
            Agenda tu Sesión Gratuita
          </a>
        </div>
      </section>

      {/* Sobre Mí */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-primary font-bold text-primary mb-6">Sobre Mí</h2>
          <p className="text-lg font-secondary">
            Con más de 10 años de experiencia, me dedico a transformar pieles con asesoría personalizada. Mi pasión es empoderarte a lucir radiante.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 bg-neutral">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-primary font-bold text-primary mb-6 text-center">Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Consulta Personalizada</h3>
              <p>Evaluación completa y plan a medida.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Rutinas Diarias</h3>
              <p>Guías simples para cuidado diario.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Recomendaciones</h3>
              <p>Productos naturales y efectivos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-primary font-bold text-primary mb-6">Testimonios</h2>
          <p className="text-lg">"Johanna cambió mi piel en semanas. ¡Recomiendo!" - Cliente Satisfecha</p>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16 bg-neutral">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-primary font-bold text-primary mb-6">Contacto</h2>
          <form className="max-w-md mx-auto">
            <input type="text" placeholder="Nombre" className="w-full p-3 mb-4 border rounded" />
            <input type="email" placeholder="Email" className="w-full p-3 mb-4 border rounded" />
            <textarea placeholder="Mensaje" className="w-full p-3 mb-4 border rounded"></textarea>
            <button type="submit" className="bg-primary text-white px-6 py-3 rounded">Enviar</button>
          </form>
        </div>
      </section>
    </div>
  );
}
