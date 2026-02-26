import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "@/context/ThemeContext";
import LenisScroll from "@/components/Lenis";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata = {
    metadataBase: new URL('https://impactomedia.ro'),
    title: {
        default: "Impacto Media | Agenție de Marketing Digital în Cluj-Napoca",
        template: "%s | Impacto Media",
    },
    description: "Agenție de marketing digital din Cluj-Napoca. Creăm website-uri profesionale, campanii Google & Meta Ads și conținut social media cu rezultate măsurabile.",
    keywords: ["marketing digital", "agenție marketing", "Cluj-Napoca", "creare website", "social media marketing", "Google Ads", "Meta Ads", "branding"],
    authors: [{ name: "Impacto Media" }],
    creator: "Impacto Media",
    publisher: "Impacto Media",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://impactomedia.ro',
    },
    openGraph: {
        type: 'website',
        locale: 'ro_RO',
        url: 'https://impactomedia.ro',
        siteName: 'Impacto Media',
        title: 'Impacto Media | Agenție de Marketing Digital în Cluj-Napoca',
        description: 'Agenție de marketing digital din Cluj-Napoca. Creăm website-uri profesionale, campanii Google & Meta Ads și conținut social media cu rezultate măsurabile.',
        images: [
            {
                url: '/assets/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Impacto Media - Agenție de Marketing Digital',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Impacto Media | Agenție de Marketing Digital în Cluj-Napoca',
        description: 'Agenție de marketing digital din Cluj-Napoca. Creăm website-uri profesionale, campanii Google & Meta Ads și conținut social media cu rezultate măsurabile.',
        images: ['/assets/og-image.png'],
    },
};

function LocalBusinessJsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Impacto Media",
        "description": "Agenție de marketing digital din Cluj-Napoca specializată în creare website-uri, social media marketing, Google Ads și Meta Ads.",
        "url": "https://impactomedia.ro",
        "telephone": "+40748030566",
        "email": "hello@impactomedia.ro",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cluj-Napoca",
            "addressCountry": "RO"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 46.7712,
            "longitude": 23.6236
        },
        "areaServed": {
            "@type": "Country",
            "name": "Romania"
        },
        "serviceType": [
            "Web Design",
            "Social Media Marketing",
            "Google Ads",
            "Meta Ads",
            "Branding",
            "Marketing Digital"
        ],
        "priceRange": "$$",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
        },
        "sameAs": []
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

export default function RootLayout({ children }) {
    return (
        <html lang="ro">
            <head>
                <LocalBusinessJsonLd />
            </head>
            <body>
                <ThemeContextProvider>
                    <LenisScroll />
                    {children}
                </ThemeContextProvider>
            </body>
        </html>
    );
}