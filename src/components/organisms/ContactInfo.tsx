import { ContactCard } from '../molecules/ContactCard';
import { siteConfig } from '../../config/site';

export const ContactInfo: React.FC = () => {
    return (
        <div className="reveal-up [animation-delay:200ms]">
            <h2 className="mb-10 text-4xl font-bold text-gray-900 font-playfair tracking-tighter text-center md:text-left">
                Información de Contacto
            </h2>

            <div className="grid grid-cols-1 gap-6">
                {/* Email */}
                <div className="group transition-all duration-300 ease-in-out hover:-translate-y-1">
                    <ContactCard
                        icon={
                            <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-600 transition-colors group-hover:bg-pink-600 group-hover:text-white shadow-xl ring-1 ring-gray-100">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                        }
                        title="Canal Digital"
                        content={siteConfig.email}
                        subtitle="Respondo en 24 horas"
                    />
                </div>

                {/* Phone */}
                <a
                    href={`${siteConfig.whatsappLink}?text=Hola%20Johanna,%20quisiera%20hacerte%20una%20consulta`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group transition-all duration-300 ease-in-out hover:-translate-y-1 active:scale-95"
                >
                    <ContactCard
                        icon={
                            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-700 transition-colors group-hover:bg-amber-600 group-hover:text-white shadow-xl ring-1 ring-amber-100">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                        }
                        title="WhatsApp Directo"
                        content={`+57 ${siteConfig.phone}`}
                        subtitle="Atención inmediata y personalizada"
                    />
                </a>

                {/* Location */}
                <div className="group transition-all duration-300 ease-in-out hover:-translate-y-1">
                    <ContactCard
                        icon={
                            <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-600 transition-colors group-hover:bg-gray-900 group-hover:text-white shadow-xl ring-1 ring-gray-100">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                        }
                        title="Ubicación"
                        content="Bogotá, Colombia"
                        subtitle="Sesiones presenciales y virtuales"
                    />
                </div>
            </div>
        </div>
    );
};