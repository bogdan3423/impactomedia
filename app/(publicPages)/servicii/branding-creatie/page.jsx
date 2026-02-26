import BrandingPageClient from "./BrandingPageClient";

export const metadata = {
    title: "Branding & Creație",
    description: "Servicii de branding și identitate vizuală în Cluj-Napoca. Design logo, brand book, materiale creative și ghid de utilizare brand pentru afacerea ta.",
    alternates: {
        canonical: "https://impactomedia.ro/servicii/branding-creatie",
    },
    openGraph: {
        title: "Branding & Creație | Impacto Media",
        description: "Servicii de branding și identitate vizuală. Design logo, brand book, materiale creative și ghid de utilizare brand.",
        url: "https://impactomedia.ro/servicii/branding-creatie",
    },
};

function ServiceJsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Branding & Creație",
        "description": "Servicii de branding și identitate vizuală. Design logo, brand book, materiale creative și ghid de utilizare brand.",
        "provider": {
            "@type": "ProfessionalService",
            "name": "Impacto Media",
            "url": "https://impactomedia.ro",
        },
        "areaServed": { "@type": "Country", "name": "Romania" },
        "serviceType": "Branding",
    };
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

function FaqJsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            { "@type": "Question", "name": "Ce primesc la final?", "acceptedAnswer": { "@type": "Answer", "text": "Primești toate fișierele în formate vector (AI, SVG, EPS) și raster (PNG, JPG), plus un brand book cu ghidul de utilizare." } },
            { "@type": "Question", "name": "Câte revizii sunt incluse?", "acceptedAnswer": { "@type": "Answer", "text": "Includem 2-3 runde de revizii pentru fiecare concept. Vrem să fim siguri că ești 100% mulțumit de rezultat." } },
            { "@type": "Question", "name": "Cât durează un proiect de branding?", "acceptedAnswer": { "@type": "Answer", "text": "Un logo simplu durează 1-2 săptămâni. O identitate completă cu brand book durează 4-6 săptămâni." } },
            { "@type": "Question", "name": "Pot să folosesc logo-ul oriunde?", "acceptedAnswer": { "@type": "Answer", "text": "Da, primești drepturi complete de utilizare. Logo-ul și identitatea sunt ale tale pentru utilizare nelimitată." } },
            { "@type": "Question", "name": "Faceți și ambalaje pentru produse?", "acceptedAnswer": { "@type": "Answer", "text": "Da! Creăm design pentru etichete, cutii, pungi și orice tip de ambalaj de care ai nevoie." } },
        ],
    };
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

export default function Page() {
    return (
        <>
            <ServiceJsonLd />
            <FaqJsonLd />
            <BrandingPageClient />
        </>
    );
}
