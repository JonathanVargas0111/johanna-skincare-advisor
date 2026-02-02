import React from 'react';
import Image from 'next/image';

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
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
            Nuestros Productos Más Vendidos
          </h2>
          <p className="mt-3 md:mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Descubre los favoritos de nuestros clientes y transforma tu piel.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productos.slice(0, 12).map((producto, index) => {
            const message = `Hola Johanna, quiero información sobre el producto: ${producto.nombre}`;
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transform transition-transform hover:-translate-y-2 flex flex-col">
                <div className="relative h-48 w-full">
                  <Image src={producto.imagen || '/logo.svg'} alt={producto.nombre} layout="fill" objectFit="cover" />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">{producto.nombre}</h3>
                  <p className="text-gray-600 text-sm mb-3 flex-grow">{producto.beneficios_principales}</p>
                  <p className="text-sm text-gray-500 mb-3">Categoría: {producto.categoria}</p>
                  <p className="text-2xl font-bold text-pink-600 mb-4">
                    ${producto.precio_publico.toLocaleString('es-CO')}
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-auto bg-green-500 text-white text-center px-4 py-2 rounded-lg font-semibold transition-colors hover:bg-green-600"
                  >
                    Pedir por WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
