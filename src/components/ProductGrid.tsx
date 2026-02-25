'use client';

import React, { useState } from 'react';
import ScrollReveal from './ui/ScrollReveal';
import { siteConfig } from '../config/site';

interface Producto {
  nombre: string;
  precio_publico: number;
  beneficios_principales: string;
  categoria: string;
  imagen?: string;
}

const CATEGORIES = ['Todos', 'Acné', 'Manchas', 'Hidratación', 'Cuidado Corporal'];

const CATEGORY_COLORS: Record<string, string> = {
  'Acné': 'bg-blue-50 text-blue-700 border-blue-100',
  'Manchas': 'bg-amber-50 text-amber-700 border-amber-100',
  'Hidratación': 'bg-cyan-50 text-cyan-700 border-cyan-100',
  'Cuidado Corporal': 'bg-green-50 text-green-700 border-green-100',
};

const CATEGORY_EMOJI: Record<string, string> = {
  'Acné': '🔵',
  'Manchas': '✨',
  'Hidratación': '💧',
  'Cuidado Corporal': '🌿',
};

export default function ProductGrid({ productos }: { productos: Producto[] }) {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filtered = activeCategory === 'Todos'
    ? productos
    : productos.filter(p => p.categoria === activeCategory);

  const whatsappText = (nombre: string) =>
    `Hola%20Johanna,%20me%20interesa%20el%20${encodeURIComponent(nombre)},%20¿cómo%20lo%20adquiero%3F`;

  return (
    <section id="productos" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 reveal-up">
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-extrabold tracking-[0.2em] text-pink-700 bg-pink-50 rounded-full uppercase">
            Catálogo
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter font-playfair mb-6">
            Nuestros Productos Más Vendidos
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-500 font-light leading-relaxed">
            Seleccionados por Johanna. Cada producto tiene un propósito en tu protocolo.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 reveal-up [animation-delay:200ms]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 border ${activeCategory === cat
                  ? 'bg-gray-900 text-white border-gray-900 shadow-lg scale-105'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-800'
                }`}
            >
              {cat === 'Todos' ? '🌟 Todos' : `${CATEGORY_EMOJI[cat] ?? ''} ${cat}`}
            </button>
          ))}
        </div>

        {/* Product Count */}
        <p className="text-center text-xs text-gray-400 font-light tracking-wider uppercase mb-12 reveal-up">
          {filtered.length} productos
          {activeCategory !== 'Todos' ? ` en ${activeCategory}` : ' en el catálogo'}
        </p>

        {/* Product Grid */}
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((producto, index) => (
              <div
                key={producto.nombre}
                className="group relative bg-white rounded-[2rem] shadow-lg border border-gray-100 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:border-pink-100 transition-all duration-500"
                style={{
                  animation: `reveal-3d 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) ${index * 80}ms both`
                }}
              >
                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.15em] border ${CATEGORY_COLORS[producto.categoria] ?? 'bg-gray-50 text-gray-500 border-gray-100'}`}
                    style={{ animation: 'float 3s ease-in-out infinite' }}>
                    {CATEGORY_EMOJI[producto.categoria]} {producto.categoria}
                  </span>
                </div>

                {/* Placeholder image area */}
                <div className="h-48 bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/40" />
                  <span className="text-5xl relative z-10 group-hover:scale-110 transition-transform duration-500">
                    {CATEGORY_EMOJI[producto.categoria] ?? '✨'}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 font-playfair leading-tight group-hover:text-pink-600 transition-colors duration-300">
                    {producto.nombre}
                  </h3>
                  <p className="text-gray-500 text-sm font-light leading-relaxed mb-5 line-clamp-2">
                    {producto.beneficios_principales}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-black text-gray-900 font-playfair">
                        ${producto.precio_publico.toLocaleString('es-CO')}
                      </span>
                      <span className="text-xs text-gray-400 ml-1">COP</span>
                    </div>
                    <a
                      href={`${siteConfig.whatsappLink}?text=${whatsappText(producto.nombre)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white rounded-xl text-[9px] font-black uppercase tracking-[0.15em] hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg group-hover:scale-105"
                    >
                      <span className="relative z-10">Pedir</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Bottom CTA */}
        <div className="text-center mt-20 reveal-up">
          <p className="text-gray-500 font-light mb-6 text-sm">
            ¿No sabes cuál elegir? Johanna te ayuda a escoger el correcto para tu piel.
          </p>
          <a
            href={`${siteConfig.whatsappLink}?text=Hola%20Johanna,%20vi%20el%20catálogo%20y%20quiero%20saber%20qué%20productos%20son%20para%20mí`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gray-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-black transition-all shadow-premium hover:shadow-2xl hover:-translate-y-1"
          >
            Pedirle a Johanna que me recomiende
          </a>
        </div>
      </div>
    </section>
  );
}
