'use client';

import React, { useState } from 'react';
import { Sparkles, Send, MessageSquare, ShieldCheck } from 'lucide-react';

const SmartRecommender = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        // Simulating AI response based on Cerebro Johanna strategy
        setTimeout(() => {
            let response = "";
            const lowerQuery = query.toLowerCase();

            if (lowerQuery.includes('mancha') || lowerQuery.includes('aclarar')) {
                response = "Como especialista en tratamiento de manchas, te recomiendo iniciar una evaluación personalizada para determinar el tipo de hiperpigmentación. El Método Johanna combina aclarado botánico con Concha Nácar (Sheló) y corrección científica con Suero C+E (Mary Kay) para resultados visibles en 15 días. Contáctame vía WhatsApp para diseñar tu protocolo exclusivo.";
            } else if (lowerQuery.includes('limpieza') || lowerQuery.includes('grasa') || lowerQuery.includes('poros')) {
                response = "Para piel grasa o poros dilatados, mi recomendación experta es el Protocolo Detox: purificación con Carbón Activado (Sheló) + refinamiento con Microexfoliación (Mary Kay). Ideal para el clima tropical colombiano. Te guío paso a paso vía WhatsApp para maximizar resultados.";
            } else {
                response = "Como experta en transformación de piel, cada caso requiere un análisis personalizado. El Método Johanna combina ingredientes botánicos con tecnología avanzada para crear protocolos exclusivos adaptados a tu piel y al clima colombiano. Iniciemos tu consulta vía WhatsApp para diseñar tu solución sinérgica.";
            }

            setResult(response);
            setLoading(false);
        }, 1500);
    };

    return (
        <section id="recommender" className="py-32 bg-linear-to-b from-white to-rose-50/50 overflow-hidden">
            <div className="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
                <div className="relative p-16 rounded-[4rem] glass-card reveal-up shadow-xl ring-1 ring-gray-100/50">
                    {/* Abstract Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100/30 rounded-full blur-[100px] -z-10 animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-50/30 rounded-full blur-[100px] -z-10 animate-pulse delay-700"></div>

                    <div className="relative z-10 text-center mb-16">
                        <div className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-gray-900 rounded-3xl text-white shadow-premium ring-1 ring-white/10">
                            <ShieldCheck size={36} strokeWidth={1.5} />
                        </div>
                        <h2 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl font-playfair tracking-tighter">Concierge Inteligente</h2>
                        <p className="max-w-2xl mx-auto text-xl text-gray-500 font-light font-roboto leading-relaxed">
                            Accede al conocimiento del <strong>Cerebro Johanna</strong>. Describe tus necesidades y encuentra la sinergia perfecta entre botica y tecnología.
                        </p>
                    </div>

                    <form onSubmit={handleSearch} className="relative z-10 mb-12 overflow-hidden rounded-[2rem] border border-gray-100 focus-within:border-pink-200 focus-within:ring-1 focus-within:ring-pink-200 transition-all duration-300 ease-in-out shadow-premium bg-white">
                        <div className="flex flex-col sm:flex-row items-center">
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Describe tu necesidad (ej: líneas de expresión, piel sensible...)"
                                className="w-full h-20 px-10 bg-transparent outline-none text-lg text-gray-800 placeholder-gray-400 font-light"
                            />
                            <div className="p-2 w-full sm:w-auto">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full sm:w-auto h-16 px-10 bg-gray-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-black transition-all duration-300 ease-in-out disabled:opacity-50 tracking-[0.2em] text-[10px] uppercase shadow-xl ring-1 ring-white/10"
                                >
                                    {loading ? <Sparkles className="animate-spin text-pink-400" size={18} /> : <Send size={18} />}
                                    <span>{loading ? 'Consultando...' : 'Obtener Protocolo'}</span>
                                </button>
                            </div>
                        </div>
                    </form>

                    {result && (
                        <div className="relative z-10 p-10 rounded-[2.5rem] bg-white border border-gray-50 shadow-premium animate-reveal-up ring-1 ring-gray-100">
                            <div className="flex flex-col md:flex-row items-start gap-8">
                                <div className="flex-shrink-0 w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-500">
                                    <Sparkles size={28} />
                                </div>
                                <div className="flex-grow">
                                    <h4 className="mb-4 font-black text-gray-900 font-roboto uppercase tracking-[0.2em] text-[10px]">Recomendación de Autor</h4>
                                    <p className="text-xl text-gray-700 leading-relaxed font-light mb-8 italic">&ldquo;{result}&rdquo;</p>
                                    <div className="flex flex-wrap gap-4">
                                        <a
                                            href="https://wa.me/573124567890?text=Hola%20Johanna,%20vengo%20del%20Concierge%20Inteligente.%20Protocolo:%20"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 px-8 py-4 bg-pink-50 text-pink-700 rounded-xl font-bold text-xs uppercase tracking-widest transition-all hover:bg-pink-100"
                                        >
                                            <MessageSquare size={16} />
                                            Hablar con Johanna
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SmartRecommender;
