import { BlogList } from '../components/organisms/BlogList';
import { Header } from '../components/organisms/Header';
import DuoPielPerfecta from '../components/organisms/DuoPielPerfecta';
import HowItWorks from '../components/organisms/HowItWorks';
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
      {/* Organization schema is in layout.tsx - no duplicate needed here */}

      {/* AggregateRating schema for testimonials */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Johanna Skincare",
            "url": "https://johannaskincare.com",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "ratingCount": "47",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }}
      />

      <Header />

      {/* Hero Section - PASTOR: Pain point + GRATIS offer front and center */}
      <section id="home" className="flex items-center justify-center min-h-screen bg-linear-to-br from-rose-50 via-white to-amber-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse delay-1000"></div>

        <div className="max-w-6xl px-4 mx-auto text-center relative z-10 py-32">
          <div className="inline-block px-5 py-2 mb-10 text-[10px] font-black tracking-[0.3em] uppercase text-green-700 bg-green-50/60 backdrop-blur-md border border-green-200/30 rounded-full shadow-premium reveal-up">
            <span className="flex items-center gap-3">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
              Asesoría GRATIS por WhatsApp &middot; Envíos a toda Colombia
            </span>
          </div>

          <h1 className="mb-10 text-5xl font-extrabold tracking-tighter text-gray-900 md:text-7xl lg:text-8xl font-playfair reveal-up [animation-delay:200ms]">
            ¿Manchas, acné o <span className="text-pink-600">piel apagada</span>? Transformo tu piel en <span className="text-gradient-gold">15 días</span>
          </h1>

          <p className="max-w-3xl mx-auto mb-16 text-xl leading-relaxed text-gray-500 md:text-2xl font-light reveal-up [animation-delay:400ms]">
            Soy <strong>Johanna</strong>, asesora con 10+ años de experiencia. Te diseño una rutina personalizada <strong>GRATIS</strong> combinando lo mejor de <strong>Sheló Nabel</strong> y <strong>Mary Kay</strong>, con envíos a toda Colombia.
          </p>

          <div className="flex flex-col justify-center gap-6 mb-24 sm:flex-row reveal-up [animation-delay:600ms]">
            <a
              href={`${siteConfig.whatsappLink}?text=Hola%20Johanna,%20vi%20tu%20web%20y%20quiero%20mi%20asesoría%20GRATIS`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-12 py-6 text-xs font-black uppercase tracking-[0.2em] text-white transition-all bg-green-600 rounded-2xl hover:bg-green-700 shadow-premium hover:shadow-2xl hover:-translate-y-1"
            >
              <span>Quiero mi Asesoría GRATIS</span>
            </a>
            <a
              href="/services"
              className="group flex items-center justify-center gap-3 px-10 py-6 text-xs font-bold uppercase tracking-widest text-gray-700 transition-all bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 shadow-premium hover:shadow-2xl hover:-translate-y-1"
            >
              <span>Ver cómo funciona</span>
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

      <HowItWorks />

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
