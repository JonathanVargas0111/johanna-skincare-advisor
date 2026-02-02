
import React from 'react';
import Image from 'next/image';

const DuoPielPerfecta = () => {
  const phoneNumber = '573133747275'; // Número de WhatsApp de Johanna
  const message = 'Hola Johanna, quiero el Dúo Piel Perfecta que elimina manchas y acné';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const producto1 = {
    nombre: 'Jabón de Carbón Activado',
    precio_publico: 38000,
    beneficios_principales: 'Limpieza profunda, elimina impurezas y puntos negros.',
    // Idealmente, aquí tendríamos una URL de imagen
    imagen: '/logo.svg', 
  };

  const producto2 = {
    nombre: 'Crema de Baba de Caracol',
    precio_publico: 62000,
    beneficios_principales: 'Regenera la piel, atenúa cicatrices y manchas.',
    imagen: '/logo.svg',
  };

  const precioTotal = producto1.precio_publico + producto2.precio_publico;

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-pink-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
            Nuestro Dúo Piel Perfecta
          </h2>
          <p className="mt-3 md:mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Una combinación poderosa para combatir manchas y acné, dejando tu piel radiante.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            {/* Columna de Productos */}
            <div className="p-6 md:p-8">
              <div className="flex flex-col space-y-6">
                {/* Producto 1 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image src={producto1.imagen} alt={producto1.nombre} width={80} height={80} className="rounded-lg border border-gray-200" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{producto1.nombre}</h3>
                    <p className="text-gray-600 text-sm mt-1">{producto1.beneficios_principales}</p>
                    <p className="text-md font-bold text-pink-600 mt-2">${producto1.precio_publico.toLocaleString('es-CO')}</p>
                  </div>
                </div>
                
                {/* Producto 2 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image src={producto2.imagen} alt={producto2.nombre} width={80} height={80} className="rounded-lg border border-gray-200" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{producto2.nombre}</h3>
                    <p className="text-gray-600 text-sm mt-1">{producto2.beneficios_principales}</p>
                    <p className="text-md font-bold text-pink-600 mt-2">${producto2.precio_publico.toLocaleString('es-CO')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna de CTA */}
            <div className="bg-gray-50 p-6 md:p-8 flex flex-col justify-center items-center text-center">
              <p className="text-lg font-medium text-gray-600">Lleva el kit completo por</p>
              <p className="text-4xl font-extrabold text-gray-900 my-2">
                ${precioTotal.toLocaleString('es-CO')}
              </p>
              <p className="text-gray-500 line-through mb-4">
                Valor real: $${(precioTotal * 1.15).toLocaleString('es-CO')}
              </p>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 text-white px-8 py-3 rounded-full font-semibold text-lg transition-transform transform hover:scale-105 hover:bg-green-600 shadow-lg"
              >
                ¡Lo quiero!
              </a>
              <p className="text-xs text-gray-500 mt-3">Click para pedir por WhatsApp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DuoPielPerfecta;
