'use client';

import { useEffect, useState } from 'react';

interface LazySectionProps {
    children: React.ReactNode;
    className?: string;
    rootMargin?: string;
    threshold?: number;
}

export default function LazySection({
    children,
    className = '',
    rootMargin = '50px',
    threshold = 0.1,
}: LazySectionProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [ref, setRef] = useState<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!ref) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin,
                threshold,
            }
        );

        observer.observe(ref);

        return () => observer.disconnect();
    }, [ref, rootMargin, threshold]);

    return (
        <div ref={setRef} className={className}>
            {isVisible ? children : <div className="min-h-[200px]" />}
        </div>
    );
}