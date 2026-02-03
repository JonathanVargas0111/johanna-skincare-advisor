import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '../../components/organisms/Header';
import { siteConfig } from '../../config/site';

export const metadata: Metadata = {
  title: `Casos de Éxito ${siteConfig.titleSuffix}`,
  description: siteConfig.description,
  keywords: ['casos de éxito', 'testimonios skincare', 'antes y después', 'transformación piel', 'resultados reales', 'Método Johanna'],
  openGraph: {
    title: `Casos de Éxito ${siteConfig.titleSuffix}`,
    description: siteConfig.description,
    url: `${siteConfig.domain}/success-stories`,
    type: 'website',
    // ...
  },
  alternates: {
    canonical: `${siteConfig.domain}/success-stories`,
  },
};

export default function SuccessStoriesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `Casos de Éxito ${siteConfig.titleSuffix}`,
    "description": siteConfig.description,
    "url": `${siteConfig.domain}/success-stories`,
    "publisher": {
      "@type": "Person",
      "name": siteConfig.name
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <section className="pt-32 pb-24 bg-linear-to-br from-rose-50 via-white to-amber-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03] -z-10"></div>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center reveal-up">
            <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.3em] text-pink-700 bg-white/50 backdrop-blur-md border border-white/20 rounded-full uppercase shadow-sm">
              Evidencia Clínica
            </div>
            <h1 className="mb-10 text-5xl font-bold leading-tight text-gray-900 md:text-8xl font-playfair tracking-tighter">
              Transformaciones<br />con Propósito
            </h1>
            <p className="max-w-3xl mx-auto text-xl font-light leading-relaxed text-gray-500 font-roboto">
              Aquí la ciencia se encuentra con la satisfacción. Descubre cómo el <span className="text-gray-900 font-medium">Método Johanna</span> ha restaurado la confianza de cientos de mujeres en Colombia.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Story 1 */}
            <div className="reveal-up glass-card p-10 rounded-[2.5rem] shadow-xl border border-gray-100 transition-all hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold">ER</div>
                <div>
                  <h3 className="font-bold text-gray-900">Elena R.</h3>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400">Protocolo Luminosidad</p>
                </div>
              </div>
              <p className="text-gray-600 font-light italic text-lg leading-relaxed mb-8">
                "Johanna cambió mi piel por completo en solo 3 semanas. La combinación de productos botánicos y tecnología es mágica."
              </p>
              <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                <span className="text-[10px] font-black text-pink-600 uppercase tracking-widest">Resultado Real</span>
                <span className="text-amber-500">★★★★★</span>
              </div>
            </div>

            {/* Story 2 */}
            <div className="reveal-up [animation-delay:200ms] glass-card p-10 rounded-[2.5rem] shadow-xl border border-gray-100 transition-all hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold">CM</div>
                <div>
                  <h3 className="font-bold text-gray-900">Claudia M.</h3>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400">Protocolo Antimanchas</p>
                </div>
              </div>
              <p className="text-gray-600 font-light italic text-lg leading-relaxed mb-8">
                "Sufría de melasma hace años. Con la asesoría de Johanna encontré por fin lo que mi piel necesitaba."
              </p>
              <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                <span className="text-[10px] font-black text-pink-600 uppercase tracking-widest">Resultado Real</span>
                <span className="text-amber-500">★★★★★</span>
              </div>
            </div>

            {/* Story 3 */}
            <div className="reveal-up [animation-delay:400ms] glass-card p-10 rounded-[2.5rem] shadow-xl border border-gray-100 transition-all hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 font-bold">AP</div>
                <div>
                  <h3 className="font-bold text-gray-900">Ana P.</h3>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400">Control Acné Adulto</p>
                </div>
              </div>
              <p className="text-gray-600 font-light italic text-lg leading-relaxed mb-8">
                "Pensé que a mi edad el acné no tenía solución. El Método Johanna equilibró mi piel sin resecarla."
              </p>
              <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                <span className="text-[10px] font-black text-pink-600 uppercase tracking-widest">Resultado Real</span>
                <span className="text-amber-500">★★★★★</span>
              </div>
            </div>
          </div>

          <div className="mt-32 text-center reveal-up">
            <div className="p-16 bg-gray-900 rounded-[3rem] shadow-premium relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-pink-500/10 to-amber-500/10 opacity-30"></div>
              <h2 className="mb-8 text-5xl font-bold text-white font-playfair tracking-tighter">¿Lista para tu Propia Transformación?</h2>
              <p className="mb-12 text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
                Si estas historias te inspiran, imagina lo que podemos lograr juntas. Tu viaje hacia una piel sana y radiante comienza con una conversación de autor.
              </p>
              <Link
                href="/contact"
                className="inline-block px-12 py-6 text-xs font-black uppercase tracking-[0.3em] text-white bg-pink-600 rounded-2xl hover:bg-pink-700 transition-all shadow-xl active:scale-95"
              >
                Agenda tu Consulta Inicial
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
