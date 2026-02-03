
import React from 'react';
import Image from 'next/image';

const DuoPielPerfecta = () => {
  const phoneNumber = '573133747275'; // Número de WhatsApp de Johanna
  const message = 'Hola Johanna, quiero el Dúo Piel Perfecta que elimina manchas y acné';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const producto1 = {
    nombre: 'Jabón de Carbón Activado',
    precio_publico: 38000,
    beneficios_principales: 'Limpieza profunda, elimina impurezas y puntos negros de forma botánica.',
    imagen: '/logo.svg',
  };

  const producto2 = {
    nombre: 'Crema de Baba de Caracol',
    precio_publico: 62000,
    beneficios_principales: 'Regeneración celular avanzada que atenúa cicatrices y unifica el tono.',
    imagen: '/logo.svg',
  };

  const precioTotal = producto1.precio_publico + producto2.precio_publico;

  return (
    <section id="perfect-duo" className="py-24 bg-linear-to-b from-rose-50/50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal-up">
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-extrabold tracking-[0.2em] text-pink-700 bg-pink-50 rounded-full uppercase">Protocolo Estrella</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter font-playfair">
            El Dúo Piel Perfecta
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500 font-light leading-relaxed font-roboto">
            La alquimia precisa entre limpieza profunda y regeneración total para una piel sin imperfecciones.
          </p>
        </div>

        <div className="relative glass-card p-1 md:p-2 rounded-[3rem] reveal-up [animation-delay:200ms] shadow-xl ring-1 ring-gray-100/50">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 overflow-hidden rounded-[2.8rem] bg-white">
            {/* Columna de Productos */}
            <div className="lg:col-span-3 p-8 md:p-12 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Producto 1 */}
                <div className="group space-y-6 transition-all duration-300 ease-in-out hover:-translate-y-1">
                  <div className="relative w-full aspect-square bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center border border-gray-100">
                    <Image src={producto1.imagen} alt={producto1.nombre} width={120} height={120} className="transition-transform duration-500 group-hover:scale-110 opacity-40 grayscale" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/80 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-amber-800 border border-amber-100">Botanical</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 font-playfair">{producto1.nombre}</h3>
                    <p className="text-gray-500 text-sm mt-3 leading-relaxed font-light">{producto1.beneficios_principales}</p>
                    <p className="text-lg font-bold text-amber-700 mt-4">${producto1.precio_publico.toLocaleString('es-CO')}</p>
                  </div>
                </div>

                {/* Producto 2 */}
                <div className="group space-y-6 transition-all duration-300 ease-in-out hover:-translate-y-1">
                  <div className="relative w-full aspect-square bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center border border-gray-100">
                    <Image src={producto2.imagen} alt={producto2.nombre} width={120} height={120} className="transition-transform duration-500 group-hover:scale-110 opacity-40 grayscale" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/80 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-pink-700 border border-pink-100">Regenerative</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 font-playfair">{producto2.nombre}</h3>
                    <p className="text-gray-500 text-sm mt-3 leading-relaxed font-light">{producto2.beneficios_principales}</p>
                    <p className="text-lg font-bold text-pink-600 mt-4">${producto2.precio_publico.toLocaleString('es-CO')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna de CTA */}
            <div className="lg:col-span-2 bg-gray-900 p-12 md:p-16 flex flex-col justify-center items-center text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-pink-500/10 to-amber-500/10 opacity-50"></div>

              <div className="relative z-10 space-y-8">
                <p className="text-xs font-black uppercase tracking-[0.4em] text-gray-400">Inversión en tu Piel</p>
                <div>
                  <p className="text-5xl md:text-6xl font-black text-white font-playfair tracking-tighter">
                    ${precioTotal.toLocaleString('es-CO')}
                  </p>
                  <p className="mt-4 text-sm font-light text-gray-500 line-through">
                    Valor individual: ${(precioTotal * 1.15).toLocaleString('es-CO')}
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-pink-600 text-white px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 ease-in-out hover:bg-pink-700 hover:-translate-y-1 shadow-2xl hover:shadow-pink-500/20 active:scale-95 ring-1 ring-white/10"
                >
                  Adquirir Protocolo
                </a>
                <p className="text-[10px] font-medium text-gray-500 tracking-widest uppercase">Asesoría personalizada incluida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DuoPielPerfecta;
