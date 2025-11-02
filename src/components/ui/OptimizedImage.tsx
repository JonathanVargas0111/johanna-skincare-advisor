import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    priority?: boolean;
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
}

export default function OptimizedImage({
    src,
    alt,
    width,
    height,
    className = '',
    priority = false,
    placeholder = 'empty',
    blurDataURL,
}: OptimizedImageProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    if (hasError) {
        return (
            <div
                className={`bg-gray-200 flex items-center justify-center text-gray-400 text-sm ${className}`}
                style={{ width, height }}
            >
                Error al cargar imagen
            </div>
        );
    }

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {isLoading && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                priority={priority}
                placeholder={placeholder}
                blurDataURL={blurDataURL}
                className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                    setIsLoading(false);
                    setHasError(true);
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
    );
}