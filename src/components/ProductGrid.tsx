import React from 'react';
import Image from 'next/image';
import ScrollReveal from './ui/ScrollReveal';

interface Producto {
  nombre: string;
  precio_publico: number;
  beneficios_principales: string;
  categoria: string;
  imagen?: string;
}

interface ProductGridProps {
  productos: Producto[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ productos }) => {
  const phoneNumber = '573133747275'; // Número de WhatsApp de Johanna

  return (
    <section id="best-sellers" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-20 scroll-reveal">
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-extrabold tracking-[0.2em] text-pink-700 bg-pink-50 rounded-full uppercase reveal-up">Favoritos de la Comunidad</span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter font-playfair mb-6 reveal-up [animation-delay:200ms]">
            Nuestros Productos Más Vendidos
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-500 font-light font-roboto leading-relaxed reveal-up [animation-delay:400ms]">
            Sinergias botánicas de alta precisión para resultados extraordinarios en tiempo récord.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {productos.slice(0, 12).map((producto, index) => {
            const message = `Hola Johanna, quiero información sobre el producto: ${producto.nombre}`;
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            return (
              <ScrollReveal
                key={index}
                threshold={0.05}
                className="scroll-reveal"
              >
                <div
                  className="group h-full bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100/50 flex flex-col overflow-hidden hover:-translate-y-2 reveal-3d"
                  style={{ animationDelay: `${600 + (index % 4) * 150}ms` }}
                >
                  <div className="relative h-64 w-full bg-gray-50 overflow-hidden">
                    <Image
                      src={producto.imagen || '/nano-banana-placeholder.png'}
                      alt={producto.nombre}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-pink-700 border border-pink-100 float">
                        {producto.categoria}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-playfair leading-tight">{producto.nombre}</h3>
                    <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed font-light">{producto.beneficios_principales}</p>

                    <div className="mt-auto pt-6 border-t border-gray-50">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Inversión</p>
                      <p className="text-3xl font-black text-pink-600 mb-6 font-playfair">
                        ${producto.precio_publico.toLocaleString('es-CO')}
                      </p>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative overflow-hidden w-full inline-flex items-center justify-center bg-green-600 text-white text-center px-6 py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-green-700 group/btn"
                      >
                        <span className="relative z-10">Pedir por WhatsApp</span>
                        <div className="absolute inset-0 shimmer opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
