import StrategieMarketingPageClient from "./StrategieMarketingPageClient";

export const metadata = {
    title: "Strategie de Marketing Digital",
    description: "Planuri personalizate de marketing digital în Cluj-Napoca. Audit complet, analiză competiție, definire buyer persona, stabilire KPI-uri și calendar editorial.",
    alternates: {
        canonical: "https://impactomedia.ro/servicii/strategie-marketing-digital",
    },
    openGraph: {
        title: "Strategie de Marketing Digital | Impacto Media",
        description: "Planuri personalizate de marketing digital. Audit complet, analiză competiție, definire buyer persona și calendar editorial.",
        url: "https://impactomedia.ro/servicii/strategie-marketing-digital",
    },
};

function ServiceJsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Strategie de Marketing Digital",
        "description": "Dezvoltăm strategii complete de marketing digital bazate pe analiza competiției, comportamentul audienței și obiectivele de business.",
        "provider": {
            "@type": "ProfessionalService",
            "name": "Impacto Media",
            "url": "https://impactomedia.ro",
        },
        "areaServed": { "@type": "Country", "name": "Romania" },
        "serviceType": "Digital Marketing Strategy",
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
            <StrategieMarketingPageClient />
        </>
    );
}
