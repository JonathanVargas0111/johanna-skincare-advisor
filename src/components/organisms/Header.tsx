"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
    currentPath?: string;
}

export const Header: React.FC<HeaderProps> = ({ currentPath }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const [currentHash, setCurrentHash] = useState('');

    useEffect(() => {
        // Detectar el hash actual
        const handleHashChange = () => {
            setCurrentHash(window.location.hash);
        };

        // Establecer el hash inicial
        setCurrentHash(window.location.hash);

        // Escuchar cambios en el hash
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const navigation = [
        { href: '/', label: 'Inicio' },
        { href: '/services', label: 'Servicios' },
        { href: '/blog', label: 'Blog' },
        { href: '/about', label: 'Sobre Mí' },
        { href: '/contact', label: 'Contacto' },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleLinkClick = (href: string) => {
        closeMobileMenu();
    };

    const isActiveLink = (href: string) => {
        const currentPathToCheck = currentPath || pathname;

        // Para rutas absolutas
        if (href.startsWith('/')) {
            return currentPathToCheck === href;
        }

        return false;
    };

    return (
        <>
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="text-2xl font-bold text-gray-900 transition-transform duration-200 hover:scale-105"
                            onClick={closeMobileMenu}
                        >
                            Johanna V. Arias
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => handleLinkClick(item.href)}
                                    className={`font-medium transition-colors duration-200 ${isActiveLink(item.href)
                                        ? 'text-pink-600 bg-pink-50 px-3 py-2 rounded-lg'
                                        : 'text-gray-600 hover:text-pink-600'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Button - Desktop */}
                        <div className="hidden lg:block">
                            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-semibold text-sm transition-colors duration-200 shadow-lg hover:shadow-xl">
                                Agenda tu Sesión
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="lg:hidden relative z-50 p-2 text-gray-700 rounded-lg hover:text-pink-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-600 transition-all duration-200"
                            aria-label="Toggle mobile menu"
                        >
                            <div className="w-6 h-6 flex flex-col justify-center items-center">
                                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                                    }`}></span>
                                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                                    }`}></span>
                                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                                    }`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={closeMobileMenu}
            />

            {/* Mobile Menu Panel */}
            <div
                className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-linear-to-br from-white via-rose-50 to-pink-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <Link
                            href="/"
                            className="text-xl font-bold text-gray-900"
                            onClick={closeMobileMenu}
                        >
                            Johanna V. Arias
                        </Link>
                        <button
                            onClick={closeMobileMenu}
                            className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                            aria-label="Close menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    <nav className="flex-1 px-6 py-8">
                        <ul className="space-y-6">
                            {navigation.map((item, index) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={`block text-lg font-medium transition-all duration-200 ${isActiveLink(item.href)
                                            ? 'text-pink-600 transform translate-x-2 bg-pink-50 px-4 py-2 rounded-lg'
                                            : 'text-gray-700 hover:text-pink-600 hover:translate-x-2'
                                            }`}
                                        onClick={() => handleLinkClick(item.href)}
                                    >
                                        <span className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-pink-500 rounded-full opacity-0 transition-opacity duration-200"
                                                style={{ animationDelay: `${index * 100}ms` }}></span>
                                            {item.label}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile CTA */}
                    <div className="p-6 border-t border-gray-200">
                        <button
                            className="w-full bg-pink-500 hover:bg-pink-600 text-white px-6 py-4 rounded-full font-semibold text-base transition-colors duration-200 shadow-lg hover:shadow-xl"
                            onClick={closeMobileMenu}
                        >
                            Agenda tu Sesión
                        </button>

                        {/* Contact Info */}
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600 mb-2">¿Necesitas ayuda?</p>
                            <p className="text-sm font-medium text-gray-900">contacto@johannavarias.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};