"use client";

import { useState } from 'react';

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        skinType: '',
        concerns: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario
        alert('¡Gracias por tu mensaje! Te contactaré pronto.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            skinType: '',
            concerns: ''
        });
    };

    return (
        <div className="reveal-up">
            <h2 className="mb-10 text-4xl font-bold text-gray-900 font-playfair tracking-tighter">
                Envía tu Consulta
            </h2>
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block mb-3 text-[10px] font-black uppercase tracking-widest text-gray-400">
                            Nombre Completo *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:bg-white focus:border-transparent transition-all duration-300 ease-in-out outline-none text-gray-800 placeholder-gray-300 font-light"
                            placeholder="Tu nombre"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-3 text-[10px] font-black uppercase tracking-widest text-gray-400">
                            Correo Electrónico *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:bg-white focus:border-transparent transition-all duration-300 ease-in-out outline-none text-gray-800 placeholder-gray-300 font-light"
                            placeholder="tu@email.com"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="phone" className="block mb-3 text-[10px] font-black uppercase tracking-widest text-gray-400">
                        Teléfono
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:bg-white focus:border-transparent transition-all duration-300 ease-in-out outline-none text-gray-800 placeholder-gray-300 font-light"
                        placeholder="+57 313 374 7275"
                    />
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                        <label htmlFor="skinType" className="block mb-3 text-[10px] font-black uppercase tracking-widest text-gray-400">
                            Tipo de Piel
                        </label>
                        <select
                            id="skinType"
                            name="skinType"
                            value={formData.skinType}
                            onChange={handleChange}
                            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:bg-white focus:border-transparent transition-all duration-300 ease-in-out outline-none text-gray-800 appearance-none font-light"
                        >
                            <option value="">Selecciona tu tipo de piel</option>
                            <option value="seca">Seca</option>
                            <option value="grasa">Grasa</option>
                            <option value="mixta">Mixta</option>
                            <option value="sensible">Sensible</option>
                            <option value="normal">Normal</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="concerns" className="block mb-3 text-[10px] font-black uppercase tracking-widest text-gray-400">
                            Preocupaciones Principales
                        </label>
                        <select
                            id="concerns"
                            name="concerns"
                            value={formData.concerns}
                            onChange={handleChange}
                            className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:bg-white focus:border-transparent transition-all duration-300 ease-in-out outline-none text-gray-800 appearance-none font-light"
                        >
                            <option value="">¿Qué te preocupa?</option>
                            <option value="acne">Acné</option>
                            <option value="arrugas">Arrugas</option>
                            <option value="manchas">Manchas</option>
                            <option value="sequedad">Sequedad</option>
                            <option value="sensibilidad">Sensibilidad</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block mb-3 text-[10px] font-black uppercase tracking-widest text-gray-400">
                        Mensaje *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:bg-white focus:border-transparent transition-all duration-300 ease-in-out outline-none text-gray-800 placeholder-gray-300 font-light resize-none"
                        placeholder="Cuéntame sobre tus preocupaciones con la piel..."
                    />
                </div>

                <button
                    type="submit"
                    className="w-full px-10 py-6 text-[11px] font-black uppercase tracking-[0.3em] text-white transition-all duration-300 ease-in-out bg-gray-900 rounded-2xl hover:bg-black hover:-translate-y-1 shadow-2xl active:scale-95 ring-1 ring-white/10"
                >
                    Enviar Consulta Privada
                </button>
            </form>
        </div>
    );
};