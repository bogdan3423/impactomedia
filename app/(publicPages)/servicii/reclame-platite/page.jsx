import ReclamePlatitePageClient from "./ReclamePlatitePageClient";

export const metadata = {
    title: "Reclame Plătite Google & Meta Ads",
    description: "Campanii profesionale Google Ads și Meta Ads în Cluj-Napoca. Strategie personalizată, setup complet, optimizare continuă și scalare pentru ROI maxim.",
    alternates: {
        canonical: "https://impactomedia.ro/servicii/reclame-platite",
    },
    openGraph: {
        title: "Reclame Plătite Google & Meta Ads | Impacto Media",
        description: "Campanii profesionale Google Ads și Meta Ads. Strategie personalizată, setup complet, optimizare continuă și scalare pentru ROI maxim.",
        url: "https://impactomedia.ro/servicii/reclame-platite",
    },
};

function ServiceJsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Reclame Plătite Google & Meta Ads",
        "description": "Campanii profesionale pe Google Ads și Meta Ads cu strategie personalizată, optimizare continuă și scalare pentru ROI maxim.",
        "provider": {
            "@type": "ProfessionalService",
            "name": "Impacto Media",
            "url": "https://impactomedia.ro",
        },
        "areaServed": { "@type": "Country", "name": "Romania" },
        "serviceType": "Digital Advertising",
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
            <ReclamePlatitePageClient />
        </>
    );
}
