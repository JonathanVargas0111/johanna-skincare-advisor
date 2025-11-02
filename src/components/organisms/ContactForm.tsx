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
        <div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Envía tu Consulta
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                            Nombre Completo *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                            placeholder="Tu nombre"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                            Correo Electrónico *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                            placeholder="tu@email.com"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                        Teléfono
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="+57 300 123 4567"
                    />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="skinType" className="block mb-2 text-sm font-medium text-gray-700">
                            Tipo de Piel
                        </label>
                        <select
                            id="skinType"
                            name="skinType"
                            value={formData.skinType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
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
                        <label htmlFor="concerns" className="block mb-2 text-sm font-medium text-gray-700">
                            Preocupaciones Principales
                        </label>
                        <select
                            id="concerns"
                            name="concerns"
                            value={formData.concerns}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
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
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                        Mensaje *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="Cuéntame sobre tus preocupaciones con la piel..."
                    />
                </div>

                <button
                    type="submit"
                    className="w-full px-8 py-4 text-lg font-semibold text-white transition-colors bg-pink-500 rounded-full hover:bg-pink-600"
                >
                    Enviar Consulta
                </button>
            </form>
        </div>
    );
};