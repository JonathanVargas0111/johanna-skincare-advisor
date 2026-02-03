import React from 'react';

const MasterSolutions = () => {
    return (
        <section id="combos" className="py-32 bg-white relative overflow-hidden">
            {/* Decorative Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-50/50 rounded-full blur-3xl -z-10"></div>

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="mb-24 text-center reveal-up">
                    <h2 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl font-playfair tracking-tighter">Soluciones Maestras</h2>
                    <p className="max-w-2xl mx-auto text-xl text-gray-500 font-light font-roboto leading-relaxed">
                        La sinergia perfecta: Protocolos de autor que fusionan la <span className="text-amber-700 font-medium tracking-tight">botica natural</span> con la <span className="text-pink-600 font-medium tracking-tight">ingeniería cosmética</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Combo 1: Dúo Detox & Renovación Total */}
                    <div className="group relative glass-card p-12 transition-all duration-300 ease-in-out hover:-translate-y-2 hover-glow rounded-[2.5rem] reveal-up [animation-delay:200ms] shadow-xl ring-1 ring-gray-100">
                        <div className="relative z-10">
                            <span className="inline-block px-4 py-1.5 mb-8 text-[10px] font-extrabold tracking-[0.2em] text-amber-700 bg-amber-50 rounded-full uppercase">Sinergia Detox</span>
                            <h3 className="mb-8 text-3xl font-bold text-gray-900 font-playfair tracking-tight leading-tight">Dúo Detox & Renovación Total</h3>
                            <ul className="mb-12 space-y-5 text-gray-600">
                                <li className="flex items-center gap-4 text-sm font-light font-roboto">
                                    <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                                    <span className="font-medium text-gray-900">Sheló:</span> Jabón de Carbón Activado
                                </li>
                                <li className="flex items-center gap-4 text-sm font-light font-roboto">
                                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                                    <span className="font-medium text-gray-900">Mary Kay:</span> Microexfoliación
                                </li>
                            </ul>
                            <a
                                href="https://wa.me/573124567890?text=Hola%20Johanna,%20me%20interesa%20el%20Dúo%20Detox%20&%20Renovación%20Total"
                                className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-amber-900 transition-all duration-300 ease-in-out hover:gap-5"
                            >
                                Solicitar Protocolo
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a>
                        </div>
                    </div>

                    {/* Combo 2: Kit Adiós Manchas Rebeldes */}
                    <div className="group relative glass-card p-12 transition-all duration-300 ease-in-out hover:-translate-y-2 hover-glow rounded-[2.5rem] reveal-up [animation-delay:400ms] shadow-xl ring-1 ring-gray-100">
                        <div className="relative z-10">
                            <span className="inline-block px-4 py-1.5 mb-8 text-[10px] font-extrabold tracking-[0.2em] text-pink-700 bg-pink-50 rounded-full uppercase">Sinergia Antimanchas</span>
                            <h3 className="mb-8 text-3xl font-bold text-gray-900 font-playfair tracking-tight leading-tight">Kit Adiós Manchas Rebeldes</h3>
                            <ul className="mb-12 space-y-5 text-gray-600">
                                <li className="flex items-center gap-4 text-sm font-light font-roboto">
                                    <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                                    <span className="font-medium text-gray-900">Sheló:</span> Crema de Concha Nácar
                                </li>
                                <li className="flex items-center gap-4 text-sm font-light font-roboto">
                                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                                    <span className="font-medium text-gray-900">Mary Kay:</span> Suero Corrector de Tono
                                </li>
                            </ul>
                            <a
                                href="https://wa.me/573124567890?text=Hola%20Johanna,%20me%20interesa%20el%20Kit%20Adiós%20Manchas%20Rebeldes"
                                className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-pink-900 transition-all duration-300 ease-in-out hover:gap-5"
                            >
                                Solicitar Protocolo
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </a>
                        </div>
                    </div>

                    {/* Smart Recommender Promo Card */}
                    <div className="lg:col-span-1 group relative overflow-hidden rounded-[2.5rem] bg-gray-900 p-12 transition-all duration-300 ease-in-out shadow-premium hover:shadow-2xl reveal-up [animation-delay:600ms] ring-1 ring-white/10">
                        <div className="absolute inset-0 bg-linear-to-br from-pink-500/20 to-amber-500/20 opacity-40 group-hover:opacity-60 transition-opacity"></div>
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <h3 className="mb-6 text-3xl font-bold text-white font-playfair tracking-tight leading-tight">Concierge<br />Personalizado</h3>
                                <p className="mb-10 text-gray-400 font-light font-roboto leading-relaxed">
                                    Permite que nuestra tecnología analice tu tipo de piel para crear una sinergia exclusiva basada en el Cerebro Johanna.
                                </p>
                            </div>
                            <a
                                href="#recommender"
                                className="inline-flex items-center justify-center gap-3 w-full py-5 text-[11px] font-bold text-white uppercase tracking-[0.2em] transition-all duration-300 ease-in-out bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:bg-white/20 active:scale-95"
                            >
                                Iniciar Consulta IA
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MasterSolutions;
