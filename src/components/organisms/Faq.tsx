
"use client";
import React, { useState } from 'react';

const faqData = [
  {
    question: '¿Hacen envíos a toda Colombia?',
    answer: '¡Sí! Realizamos envíos a todos los rincones de Colombia. Queremos que disfrutes de nuestros productos sin importar dónde te encuentres. El costo y tiempo de envío pueden variar según tu ubicación.'
  },
  {
    question: '¿Qué es el Método Johanna?',
    answer: 'El Método Johanna es mi consultoría híbrida exclusiva que combina lo mejor de dos mundos: la botica natural de Sheló para preparar y detoxificar tu piel, y la alta tecnología de Mary Kay para corregir y revertir signos específicos. Diseño protocolos personalizados para manchas, acné y rejuvenecimiento, maximizando tu presupuesto con resultados visibles en 15 días. No vendo productos aislados, creo soluciones sinérgicas adaptadas al clima tropical colombiano.'
  },
  {
    question: '¿Los productos son naturales?',
    answer: 'Absolutamente. Creemos en el poder de la naturaleza. La mayoría de los productos de Sheló Nabel están formulados con extractos de frutas, plantas y otros ingredientes naturales. Nos enfocamos en ofrecerte soluciones efectivas y amigables con tu piel y el medio ambiente.'
  }
];

const FaqItem = ({ faq, index }: { faq: any, index: number }) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div className={`py-6 border-b border-gray-100 last:border-0 transition-all duration-300 ease-in-out`}>
      <button
        className="w-full flex justify-between items-center text-left transition-all duration-300 ease-in-out group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-xl font-bold font-playfair tracking-tight ${isOpen ? 'text-pink-600' : 'text-gray-900 group-hover:text-pink-600'}`}>
          {faq.question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-pink-600 text-white rotate-180' : 'bg-gray-50 text-gray-400 group-hover:bg-pink-50'}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-500 font-light leading-relaxed font-roboto">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <section id="faq" className="py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal-up">
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-extrabold tracking-[0.2em] text-pink-700 bg-pink-50 rounded-full uppercase">Claridad y Confianza</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter font-playfair">
            Preguntas Frecuentes
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500 font-light leading-relaxed font-roboto">
            Todo lo que necesitas saber sobre tu camino hacia una piel radiante y natural.
          </p>
        </div>

        <div className="relative glass-card p-1 md:p-2 rounded-[3rem] reveal-up [animation-delay:200ms] shadow-xl ring-1 ring-gray-100">
          <div className="bg-white rounded-[2.8rem] p-8 md:p-12">
            {faqData.map((faq, index) => (
              <FaqItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
