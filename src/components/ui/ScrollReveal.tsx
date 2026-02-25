'use client';

import { useEffect, useState, useRef } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    once?: boolean;
    threshold?: number;
    rootMargin?: string;
}

export default function ScrollReveal({
    children,
    className = '',
    once = true,
    threshold = 0.1,
    rootMargin = '0px',
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) observer.unobserve(element);
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [once, threshold, rootMargin]);

    return (
        <div
            ref={ref}
            className={`${className} ${isVisible ? 'is-visible' : 'is-hidden'}`}
        >
            {children}
        </div>
    );
}
