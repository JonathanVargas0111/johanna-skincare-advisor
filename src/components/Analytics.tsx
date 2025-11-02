'use client';

import { useEffect } from 'react';

export default function Analytics() {
    useEffect(() => {
        // Basic page view tracking
        const trackPageView = () => {
            // In production, you would send this to your analytics service
            console.log('Page view:', window.location.pathname);
        };

        trackPageView();

        // Simple performance monitoring
        if (typeof window !== 'undefined' && 'performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
                    if (perfData) {
                        console.log('Performance metrics:', {
                            domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                            loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
                            totalTime: perfData.loadEventEnd - perfData.fetchStart,
                        });
                    }
                }, 0);
            });
        }
    }, []);

    return null;
}