import { ContactCard } from '../molecules/ContactCard';

export const ContactInfo: React.FC = () => {
    return (
        <div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Información de Contacto
            </h2>

            <div className="space-y-8">
                {/* Email */}
                <ContactCard
                    icon={
                        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    }
                    title="Correo Electrónico"
                    content="contacto@johannavarias.com"
                    subtitle="Respondo en 24 horas"
                />

                {/* Phone */}
                <ContactCard
                    icon={
                        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    }
                    title="Teléfono"
                    content="+57 300 123 4567"
                    subtitle="Lun - Vie: 9:00 AM - 6:00 PM"
                />

                {/* Location */}
                <ContactCard
                    icon={
                        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    }
                    title="Ubicación"
                    content="Bogotá, Colombia"
                    subtitle="Sesiones presenciales y virtuales"
                />

                {/* Social */}
                <ContactCard
                    icon={
                        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                    }
                    title="Redes Sociales"
                    content="@johannavarias"
                    subtitle="Sígueme para tips de skincare"
                />
            </div>
        </div>
    );
};