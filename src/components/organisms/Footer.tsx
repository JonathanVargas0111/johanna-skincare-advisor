"use client";

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '../../config/site';

const Footer = () => {
    return (
        <footer className="py-24 bg-gray-900 text-white relative overflow-hidden reveal-up">
            {/* Decorative background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="text-3xl font-bold text-white font-playfair tracking-tighter transition-all hover:scale-105 inline-block">
                            {siteConfig.name}
                        </div>
                        <p className="text-[9px] uppercase tracking-[0.25em] text-pink-400 font-black mb-4">
                            Experta en Transformación de Piel
                        </p>
                        <p className="max-w-xs mx-auto md:mx-0 text-gray-400 font-light leading-relaxed text-sm">
                            {siteConfig.description} Soluciones para el clima tropical colombiano con <span className="text-pink-400">envíos a todo el país</span>.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Navegación</h4>
                        <ul className="space-y-4">
                            {['Inicio', 'Sinergias', 'Concierge', 'Blog', 'Contacto'].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-all duration-300 ease-in-out text-sm font-medium">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Conéctate</h4>
                        <div className="flex justify-center md:justify-start space-x-6">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-pink-400 hover:bg-white/10 transition-all duration-300 ease-in-out shadow-xl ring-1 ring-white/10">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-pink-400 hover:bg-white/10 transition-all duration-300 ease-in-out shadow-xl ring-1 ring-white/10">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.747-1.378 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.017z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-16 mt-16 text-center text-gray-500 border-t border-white/5 space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em]">&copy; 2025 {siteConfig.name} - Todos los derechos reservados</p>
                    <p className="text-xs font-light tracking-wide text-gray-600 italic">
                        Desarrollado con pasión para una piel radiante por <a href="https://nandark.com/" target="_blank" rel="noopener noreferrer" className="text-pink-700 hover:text-pink-500 transition-all duration-300 ease-in-out underline decoration-pink-900/40 underline-offset-4">nandark.com</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
