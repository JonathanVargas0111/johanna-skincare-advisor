import { BlogList } from '../components/organisms/BlogList';
import { Header } from '../components/organisms/Header';
import DuoPielPerfecta from '../components/organisms/DuoPielPerfecta';
import ProductGrid from '../components/ProductGrid';
import Faq from '../components/organisms/Faq';
import SmartRecommender from '../components/SmartRecommender';
import MasterSolutions from '../components/organisms/MasterSolutions';
import fs from 'fs/promises';
import path from 'path';
import { siteConfig } from '../config/site';

interface Producto {
  nombre: string;
  precio_publico: number;
  beneficios_principales: string;
  categoria: string;
  imagen?: string;
}

export default async function Home() {
  const filePath = path.join(process.cwd(), 'data', 'productos.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const productos: Producto[] = JSON.parse(jsonData);

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Structured Data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": `${siteConfig.name} - Asesora de Piel`,
            "url": siteConfig.domain,
            "logo": `${siteConfig.domain}/logo.png`,
            "description": siteConfig.description,
            "founder": {
              "@type": "Person",
              "name": siteConfig.name,
              "jobTitle": "Asesora Certificada en Cuidado de la Piel"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": `+57-${siteConfig.phone}`,
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
      <section id="home" className="flex items-center justify-center min-h-screen bg-linear-to-br from-rose-50 via-white to-amber-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse delay-1000"></div>

        <div className="max-w-6xl px-4 mx-auto text-center relative z-10 py-32">
          <div className="inline-block px-5 py-2 mb-10 text-[10px] font-black tracking-[0.3em] uppercase text-pink-700 bg-white/40 backdrop-blur-md border border-white/20 rounded-full shadow-premium reveal-up">
            <span className="flex items-center gap-3">
              <span className="w-2 h-2 bg-pink-500 rounded-full animate-ping"></span>
              Consultoría de Belleza Híbrida de Autor
            </span>
          </div>

          <h1 className="mb-10 text-6xl font-extrabold tracking-tighter text-gray-900 md:text-8xl lg:text-9xl font-playfair reveal-up [animation-delay:200ms]">
            La unión perfecta entre la <span className="text-gradient-gold">botica natural</span> y la <span className="text-pink-600">alta tecnología</span>
          </h1>

          <p className="max-w-3xl mx-auto mb-16 text-xl leading-relaxed text-gray-500 md:text-2xl font-light reveal-up [animation-delay:400ms]">
            Johanna V. Arias eleva tu ritual de cuidado combinando la pureza de <strong>Sheló Nabel</strong> con la ingeniería de <strong>Mary Kay</strong>.
            Protocolos exclusivos con <strong>envíos a toda Colombia</strong> para una transformación real.
          </p>

          <div className="flex flex-col justify-center gap-8 mb-24 sm:flex-row reveal-up [animation-delay:600ms]">
            <a
              href={`${siteConfig.whatsappLink}?text=Hola%20Johanna,%20quiero%20conocer%20la%20Línea%20Natural%20de%20Sheló%20Nabel`}
              className="group flex items-center justify-center gap-3 px-10 py-6 text-xs font-bold uppercase tracking-widest text-white transition-all bg-amber-800 rounded-2xl hover:bg-amber-900 shadow-premium hover:shadow-2xl hover:-translate-y-1"
            >
              <span>Línea Natural (Sheló)</span>
            </a>
            <a
              href={`${siteConfig.whatsappLink}?text=Hola%20Johanna,%20quiero%20conocer%20la%20Alta%20Tecnología%20de%20Mary%20Kay`}
              className="group flex items-center justify-center gap-3 px-10 py-6 text-xs font-bold uppercase tracking-widest text-pink-600 transition-all bg-white border border-pink-100 rounded-2xl hover:bg-rose-50 shadow-premium hover:shadow-2xl hover:-translate-y-1"
            >
              <span>Alta Cosmética (Mary Kay)</span>
            </a>
          </div>

          <div className="pt-12 border-t border-gray-100 reveal-up [animation-delay:800ms]">
            <p className="mb-6 text-[10px] font-black tracking-[0.4em] text-gray-400 uppercase">Respaldo Internacional</p>
            <div className="flex flex-wrap justify-center gap-16 opacity-30 grayscale hover:opacity-100 transition-opacity duration-500">
              <span className="text-2xl font-black text-gray-800 tracking-tighter">Sheló NABEL</span>
              <span className="text-2xl font-black text-gray-800 tracking-tighter uppercase">Mary Kay</span>
            </div>
          </div>
        </div>
      </section>

      <MasterSolutions />

      {/* Why Choose Me Section */}
      <section id="why-choose-me" className="py-32 bg-gray-50/30">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center reveal-up">
          <h2 className="mb-20 text-4xl font-bold text-gray-900 md:text-5xl font-playfair tracking-tight">¿Por Qué Confiar en Mí?</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="p-10 glass-card rounded-3xl hover-glow">
              <div className="text-4xl mb-6">🏆</div>
              <h3 className="mb-4 text-xl font-bold font-playfair">10+ Años</h3>
              <p className="text-gray-500 font-light">Experiencia transformando vidas a través de la piel.</p>
            </div>
            <div className="p-10 glass-card rounded-3xl hover-glow">
              <div className="text-4xl mb-6">🌿</div>
              <h3 className="mb-4 text-xl font-bold font-playfair">Botica Pura</h3>
              <p className="text-gray-500 font-light">Ingredientes orgánicos que respetan tu biología.</p>
            </div>
            <div className="p-10 glass-card rounded-3xl hover-glow">
              <div className="text-4xl mb-6">⚡</div>
              <h3 className="mb-4 text-xl font-bold font-playfair">Sinergia IA</h3>
              <p className="text-gray-500 font-light">Análisis de precisión para resultados garantizados.</p>
            </div>
          </div>
        </div>
      </section>

      <DuoPielPerfecta />

      <SmartRecommender />

      <ProductGrid productos={productos} />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center reveal-up">
          <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.3em] text-pink-600 uppercase bg-pink-50 rounded-full">
            Opiniones y Resultados Reales
          </div>
          <h2 className="mb-16 text-4xl font-bold text-gray-900 md:text-5xl font-playfair tracking-tight">Historias de Transformación</h2>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="group p-12 glass-card rounded-[3rem] text-left italic font-light text-xl text-gray-600 relative transition-all hover:bg-white/80">
              <span className="absolute top-10 left-10 text-6xl text-pink-100 font-serif group-hover:text-pink-200 transition-colors">&ldquo;</span>
              <p className="relative z-10 leading-relaxed">&ldquo;En solo 15 días vi una diferencia real en la textura de mi piel. El protocolo híbrido de Johanna es exactamente lo que necesitaba para mis manchas.&rdquo;</p>
              <p className="mt-8 text-sm font-bold uppercase tracking-widest text-gray-900 font-roboto not-italic">— Sonia R.</p>
            </div>
            <div className="group p-12 glass-card rounded-[3rem] text-left italic font-light text-xl text-gray-600 relative transition-all hover:bg-white/80">
              <span className="absolute top-10 left-10 text-6xl text-amber-100 font-serif group-hover:text-amber-200 transition-colors">&ldquo;</span>
              <p className="relative z-10 leading-relaxed">&ldquo;La mejor asesoría de skincare en Colombia. No importa si estás en Bogotá, Medellín o Barranquilla, su enfoque geográfico es impecable.&rdquo;</p>
              <p className="mt-8 text-sm font-bold uppercase tracking-widest text-gray-900 font-roboto not-italic">— Claudia M.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section - Luxury Layout */}
      <section id="about" className="py-32 bg-rose-50/20">
        <div className="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8 text-center reveal-up">
          <h2 className="mb-10 text-4xl font-bold text-gray-900 md:text-5xl font-playfair tracking-tight">Sobre Mí</h2>
          <p className="max-w-3xl mx-auto mb-12 text-xl text-gray-500 font-light leading-relaxed">
            Mi misión es democratizar el acceso a un cuidado de la piel profesional y natural en toda Colombia. A través de mi experiencia curada, selecciono lo mejor de la botica natural y la alta cosmética para enviarlo directamente a tu puerta, ya sea que estés en <strong>Bogotá, Medellín, Cali o Barranquilla</strong>.
          </p>
          <a
            href="/about"
            className="inline-block px-10 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-bold text-xs uppercase tracking-[0.2em] transition-all hover:bg-gray-900 hover:text-white"
          >
            Conoce mi Historia
          </a>
        </div>
      </section>

      <BlogList />
      <Faq />

      {/* Final CTA Section */}
      <section id="contact" className="py-40 bg-gray-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-pink-500/10 to-amber-500/10 opacity-30"></div>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10 reveal-up">
          <h2 className="mb-6 text-5xl font-bold text-white md:text-7xl font-playfair tracking-tighter">¿Lista para Empezar?</h2>
          <p className="mb-12 text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Tu piel merece el cuidado de un experto. Agendemos una sesión hoy mismo.
          </p>
          <a
            href={`${siteConfig.whatsappLink}?text=Hola%20Johanna,%20vi%20tu%20web%20y%20quiero%20empezar%20mi%20transformación`}
            className="inline-flex items-center justify-center px-12 py-6 text-xs font-black uppercase tracking-[0.3em] text-white bg-pink-600 rounded-2xl hover:bg-pink-700 transition-all shadow-premium hover:shadow-2xl hover:-translate-y-1"
          >
            Agenda tu Sesión
          </a>
        </div>
      </section>
    </div>
  );
}
