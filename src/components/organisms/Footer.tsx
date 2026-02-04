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
                            <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-pink-400 hover:bg-white/10 transition-all duration-300 ease-in-out shadow-xl ring-1 ring-white/10">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-pink-400 hover:bg-white/10 transition-all duration-300 ease-in-out shadow-xl ring-1 ring-white/10">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
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
