
"use client";
import React, { useState } from 'react';

const faqData = [
  {
    question: '¿En qué consiste la asesoría de Johanna Skincare?',
    answer: 'Ofrezco una Consultoría de Belleza Híbrida gratuita por WhatsApp, donde analizo tu piel y tus objetivos personales. Utilizo herramientas de Inteligencia Artificial para realizar un análisis remoto y recomendarte una rutina personalizada que combine naturaleza y ciencia.'
  },
  {
    question: '¿Cuál es la diferencia entre Sheló Nabel y Mary Kay?',
    answer: 'Sheló Nabel es la "Botica Natural" que prepara y desintoxica tu piel con extractos puros a precios muy accesibles. Mary Kay aporta la "Alta Tecnología Cosmética" con activos como retinol y péptidos para corregir y revertir problemas específicos.'
  },
  {
    question: '¿En cuánto tiempo veré resultados en mi piel?',
    answer: 'Gracias a mis protocolos híbridos, puedes empezar a notar cambios visibles en un periodo de 15 días. Rutinas específicas como el Set TimeWise® prometen una piel más firme y luminosa en tan solo 2 semanas.'
  },
  {
    question: '¿Hacen envíos a toda Colombia?',
    answer: 'Sí, puedes realizar tus compras y recibir los productos directamente en la puerta de tu casa en cualquier ciudad del país. Gestionamos envíos rápidos para que inicies tu transformación sin demoras.'
  },
  {
    question: '¿Tienen garantía los productos?',
    answer: 'Sí, Mary Kay ofrece una Garantía de Satisfacción del 100%, lo que significa que el producto puede ser reemplazado o cambiado si no estás satisfecha. Tu inversión y la salud de tu piel están siempre protegidas.'
  },
  {
    question: '¿Cómo elijo mi tono de base sin probarla?',
    answer: 'Utilizamos tecnología IntelliMatch™ e Inteligencia Artificial que escanea tu rostro mediante una foto con luz natural. El sistema encuentra tu tono perfecto en segundos, sin necesidad de probar físicamente.'
  },
  {
    question: '¿Qué formas de pago aceptan?',
    answer: 'Puedes pagar en línea a través de la plataforma oficial de Mary Kay. También coordino otros medios de pago directamente vía WhatsApp para tu comodidad.'
  },
  {
    question: '¿Tienen productos para todo tipo de piel y edad?',
    answer: 'Absolutamente, cuento con portafolios para pieles jóvenes, maduras, grasas o con tendencia al acné. Diseñamos soluciones que se adaptan tanto a tu presupuesto como a las necesidades climáticas de tu ciudad en Colombia.'
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
