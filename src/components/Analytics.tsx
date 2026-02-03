'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { siteConfig } from '../config/site';

/**
 * Analytics Skill: Implements Google Analytics GA4 with automated page view tracking.
 */
export default function Analytics() {
    const pathname = usePathname();

    useEffect(() => {
        if (!siteConfig.googleAnalyticsId || siteConfig.googleAnalyticsId === "G-XXXXXXXXXX") {
            return;
        }

        // Initialize GTAG
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAnalyticsId}`;
        script.async = true;
        document.head.appendChild(script);

        const inlineScript = document.createElement('script');
        inlineScript.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteConfig.googleAnalyticsId}', {
                page_path: window.location.pathname,
            });
        `;
        document.head.appendChild(inlineScript);

        return () => {
            // Optional: cleanup scripts if needed
        };
    }, []);

    useEffect(() => {
        if (typeof window.gtag === 'function' && siteConfig.googleAnalyticsId !== "G-XXXXXXXXXX") {
            window.gtag('config', siteConfig.googleAnalyticsId, {
                page_path: pathname,
            });
        }
    }, [pathname]);

    return null;
}

// Add gtag to window object for TypeScript
declare global {
    interface Window {
        gtag: (command: string, id: string, config?: any) => void;
        dataLayer: any[];
    }
}