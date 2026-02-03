import { Metadata } from 'next';
import { siteConfig } from '../config/site';

/**
 * Metadata Skill: A centralized helper to generate premium SEO and Geo-targeted metadata.
 * Ensures consistent branding, localized OG tags, and AI-friendly structures.
 */
export function constructMetadata({
    title = siteConfig.titleFull,
    description = siteConfig.description,
    image = '/og-image.jpg',
    icons = '/favicon.ico',
    noIndex = false,
    canonicalUrl = '/',
}: {
    title?: string;
    description?: string;
    image?: string;
    icons?: string;
    noIndex?: boolean;
    canonicalUrl?: string;
} = {}): Metadata {
    return {
        title: {
            default: title,
            template: `%s ${siteConfig.titleSuffix}`,
        },
        description,
        keywords: [
            "transformación de piel colombia",
            "tratamiento manchas colombia",
            "especialista acné",
            "consultoría facial bogotá",
            "método johanna",
            "skincare clima tropical",
            "experta en piel",
            "envíos colombia",
            "sheló nabel colombia",
            "mary kay colombia"
        ],
        authors: [{ name: siteConfig.name }],
        creator: siteConfig.name,
        publisher: siteConfig.name,
        metadataBase: new URL(siteConfig.domain),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
        alternates: {
            canonical: canonicalUrl,
            languages: {
                'es-CO': canonicalUrl,
            },
        },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            siteName: siteConfig.name,
            locale: "es_CO",
            type: "website",
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: `${siteConfig.name} - ${title}`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
            creator: "@johannavarias",
        },
        icons,
        verification: {
            google: 'mdPlF4SKwIZnzbOc5gaOGrm5zNddBmQG9_ppypi8Phk',
        },
    };
}
