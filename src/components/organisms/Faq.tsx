
"use client";
import React, { useState } from 'react';

const faqData = [
  {
    question: '¿Hacen envíos a toda Colombia?',
    answer: '¡Sí! Realizamos envíos a todos los rincones de Colombia. Queremos que disfrutes de nuestros productos sin importar dónde te encuentres. El costo y tiempo de envío pueden variar según tu ubicación.'
  },
  {
    question: '¿Cómo puedo ser distribuidora?',
    answer: '¡Nos encantaría que te unieras a nuestra familia! Para convertirte en distribuidora y empezar tu propio negocio, puedes contactarme directamente a través de WhatsApp. Te daré toda la información sobre los beneficios, la inversión inicial y los pasos a seguir.'
  },
  {
    question: '¿Los productos son naturales?',
    answer: 'Absolutamente. Creemos en el poder de la naturaleza. La mayoría de los productos de Sheló Nabel están formulados con extractos de frutas, plantas y otros ingredientes naturales. Nos enfocamos en ofrecerte soluciones efectivas y amigables con tu piel y el medio ambiente.'
  }
];

const FaqItem = ({ faq, index }: { faq: any, index: number }) => {
  const [isOpen, setIsOpen] = useState(index === 0); // Open first item by default

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 hover:text-pink-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{faq.question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
      >
        <p className="text-gray-600 leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <section id="faq" className="py-12 md:py-16 lg:py-20 bg-pink-50/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="mt-3 md:mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            ¿Tienes dudas? Aquí resolvemos las más comunes.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
          {faqData.map((faq, index) => (
            <FaqItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
