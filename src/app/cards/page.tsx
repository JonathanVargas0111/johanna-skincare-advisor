'use client';

import React from 'react';
import Image from 'next/image';
import { siteConfig } from '../../config/site';
import {
    MessageCircle,
    Instagram,
    Globe,
    UserPlus,
    Share2,
    CheckCircle2,
    Sparkles
} from 'lucide-react';

export default function CardsPage() {
    const downloadVCard = () => {
        const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${siteConfig.name}
ORG:${siteConfig.name} | Experta en Piel
TITLE:Experta en Transformación de Piel
TEL;TYPE=CELL,VOICE:+57${siteConfig.phone}
EMAIL;TYPE=PREF,INTERNET:${siteConfig.email}
URL:${siteConfig.domain}
NOTE:Método Johanna - Sinergia Botánica y Alta Tecnología
REV:${new Date().toISOString()}
END:VCARD`;

        const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${siteConfig.name.replace(/\s+/g, '_')}.vcf`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: siteConfig.name,
                    text: 'Conoce a Johanna V. Arias, Experta en Transformación de Piel.',
                    url: `${siteConfig.domain}/cards`,
                });
            } catch (err) {
                console.error('Error sharing', err);
            }
        }
    };

    return (
        <div className="min-h-screen bg-linear-to-b from-rose-50 via-white to-amber-50 flex items-center justify-center p-4 sm:p-6 font-roboto relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-amber-100 rounded-full blur-3xl opacity-50 animate-pulse delay-1000"></div>

            <div className="w-full max-w-md bg-white/70 backdrop-blur-2xl rounded-[3rem] shadow-2xl border border-white/50 overflow-hidden relative z-10 reveal-up">
                {/* Header/Cover Image Placeholder */}
                <div className="h-32 bg-linear-to-r from-pink-200 to-rose-300 relative">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
                    <button
                        onClick={handleShare}
                        className="absolute top-6 right-6 p-3 bg-white/30 backdrop-blur-md rounded-full text-white hover:bg-white/50 transition-all border border-white/20"
                    >
                        <Share2 size={20} />
                    </button>
                </div>

                {/* Profile Section */}
                <div className="px-8 pb-10 -mt-16 text-center">
                    <div className="relative inline-block mb-6">
                        <div className="w-32 h-32 rounded-[2.5rem] border-4 border-white shadow-xl overflow-hidden relative">
                            <Image
                                src="/johanna-avatar.png"
                                alt={siteConfig.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-pink-600 text-white p-2 rounded-2xl shadow-lg">
                            <CheckCircle2 size={16} />
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold text-gray-900 font-playfair tracking-tight mb-2">
                        {siteConfig.name}
                    </h1>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-pink-600 mb-6 flex items-center justify-center gap-2">
                        <Sparkles size={12} />
                        Experta en Transformación de Piel
                    </p>

                    <p className="text-gray-500 font-light text-sm leading-relaxed mb-10 max-w-[280px] mx-auto">
                        Creadora del <span className="font-semibold text-gray-800">Método Johanna</span>. Sinergia entre botica natural y alta tecnología para una piel radiante.
                    </p>

                    {/* Action Buttons */}
                    <div className="space-y-4">
                        <button
                            onClick={downloadVCard}
                            className="w-full py-5 bg-gray-900 text-white rounded-2xl font-bold text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-premium hover:bg-black transition-all active:scale-95"
                        >
                            <UserPlus size={18} />
                            Guardar Contacto
                        </button>

                        <a
                            href={`${siteConfig.whatsappLink}?text=Hola%20Johanna,%20vi%20tu%20tarjeta%20digital%20y%20quiero%20más%20información`}
                            className="w-full py-5 bg-[#25D366] text-white rounded-2xl font-bold text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-lg hover:opacity-90 transition-all active:scale-95"
                        >
                            <MessageCircle size={18} fill="currentColor" />
                            WhatsApp Directo
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="mt-12 flex justify-center gap-6">
                        <a
                            href={siteConfig.socials.instagram}
                            target="_blank"
                            className="p-4 bg-white rounded-2xl text-pink-600 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-50"
                        >
                            <Instagram size={24} />
                        </a>
                        <a
                            href={siteConfig.domain}
                            className="p-4 bg-white rounded-2xl text-amber-700 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-50"
                        >
                            <Globe size={24} />
                        </a>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-100">
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">
                            Bogotá, Colombia • Envíos Nacionales
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
