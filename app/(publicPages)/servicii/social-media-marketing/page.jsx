import SocialMediaPageClient from "./SocialMediaPageClient";

export const metadata = {
    title: "Social Media Marketing & Content Creation",
    description: "Servicii de social media marketing și creare conținut video în Cluj-Napoca. Filmare profesională, actori, editare și management complet pentru Instagram, TikTok și Facebook.",
    alternates: {
        canonical: "https://impactomedia.ro/servicii/social-media-marketing",
    },
    openGraph: {
        title: "Social Media Marketing & Content Creation | Impacto Media",
        description: "Servicii de social media marketing și creare conținut video în Cluj-Napoca. Filmare profesională, actori, editare și management complet.",
        url: "https://impactomedia.ro/servicii/social-media-marketing",
    },
};

function ServiceJsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Social Media Marketing & Content Creation",
        "description": "Servicii de social media marketing și creare conținut video profesional. Filmare la locație, actori, editare și management complet.",
        "provider": {
            "@type": "ProfessionalService",
            "name": "Impacto Media",
            "url": "https://impactomedia.ro",
        },
        "areaServed": { "@type": "Country", "name": "Romania" },
        "serviceType": "Social Media Marketing",
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
            <SocialMediaPageClient />
        </>
    );
}
