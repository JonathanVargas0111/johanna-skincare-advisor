import React from 'react';
import { siteConfig } from '../../config/site';

const steps = [
    {
        number: '01',
        emoji: '💬',
        title: 'Escríbeme por WhatsApp',
        description: 'Cuéntame tu mayor problema de piel. Manchas, acné, piel apagada — sin juicios ni compromiso. La asesoría es siempre GRATIS.',
        color: 'bg-green-50 text-green-700 border-green-100',
        dotColor: 'bg-green-500',
    },
    {
        number: '02',
        emoji: '🔬',
        title: 'Tu protocolo personalizado',
        description: 'Analizo tu piel, tu ciudad y tu presupuesto. En 24-48 horas tienes un protocolo híbrido diseñado solo para ti con Sheló Nabel + Mary Kay.',
        color: 'bg-pink-50 text-pink-700 border-pink-100',
        dotColor: 'bg-pink-500',
    },
    {
        number: '03',
        emoji: '✨',
        title: 'Resultados visibles en 15 días',
        description: 'Recibes los productos en tu casa (envíos a toda Colombia) y te acompaño durante el proceso. Sin sorpresas. Solo pagas los productos.',
        color: 'bg-amber-50 text-amber-700 border-amber-100',
        dotColor: 'bg-amber-500',
    },
];

const HowItWorks = () => {
    return (
        <section id="como-funciona" className="py-32 bg-gray-50/30 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 reveal-up">
                    <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-extrabold tracking-[0.2em] text-pink-700 bg-pink-50 rounded-full uppercase">
                        Sin complicaciones
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter font-playfair mb-6">
                        Cómo Funciona
                    </h2>
                    <p className="max-w-2xl mx-auto text-xl text-gray-500 font-light leading-relaxed">
                        De tu problema de piel a resultados reales en 3 pasos simples.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting line (desktop only) */}
                    <div className="hidden md:block absolute top-16 left-[calc(16.6%+2rem)] right-[calc(16.6%+2rem)] h-px bg-gradient-to-r from-green-200 via-pink-200 to-amber-200 z-0" />

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative z-10 flex flex-col items-center text-center reveal-up"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            {/* Step number circle */}
                            <div className={`w-16 h-16 rounded-2xl ${step.color} border flex items-center justify-center text-2xl mb-8 shadow-lg`}>
                                {step.emoji}
                            </div>

                            <div className="bg-white rounded-[2rem] p-10 shadow-xl border border-gray-100/50 hover:-translate-y-2 transition-all duration-500 h-full">
                                <span className="inline-block text-[10px] font-black tracking-[0.3em] text-gray-300 uppercase mb-4">
                                    Paso {step.number}
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-playfair leading-tight">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 font-light leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16 reveal-up">
                    <a
                        href={`${siteConfig.whatsappLink}?text=Hola%20Johanna,%20quiero%20empezar%20mi%20asesoría%20de%20piel%20GRATIS`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-12 py-6 bg-green-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-green-700 transition-all shadow-premium hover:shadow-2xl hover:-translate-y-1"
                    >
                        <span className="w-2 h-2 bg-white rounded-full animate-ping" />
                        Empezar mi Transformación — Es GRATIS
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
