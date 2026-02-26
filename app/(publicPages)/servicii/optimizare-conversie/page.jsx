import OptimizareConversiePageClient from "./OptimizareConversiePageClient";

export const metadata = {
    title: "Optimizare Rată de Conversie (CRO)",
    description: "Servicii de optimizare a ratei de conversie în Cluj-Napoca. Analiză heatmaps, testare A/B, optimizare landing pages și îmbunătățire UX pentru mai multe vânzări.",
    alternates: {
        canonical: "https://impactomedia.ro/servicii/optimizare-conversie",
    },
    openGraph: {
        title: "Optimizare Rată de Conversie (CRO) | Impacto Media",
        description: "Servicii de optimizare a ratei de conversie. Analiză heatmaps, testare A/B, optimizare landing pages și îmbunătățire UX.",
        url: "https://impactomedia.ro/servicii/optimizare-conversie",
    },
};

function ServiceJsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Optimizare Rată de Conversie (CRO)",
        "description": "Transformă mai mulți vizitatori în clienți prin analiză de date, testare A/B și optimizare UX.",
        "provider": {
            "@type": "ProfessionalService",
            "name": "Impacto Media",
            "url": "https://impactomedia.ro",
        },
        "areaServed": { "@type": "Country", "name": "Romania" },
        "serviceType": "Conversion Rate Optimization",
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
            <OptimizareConversiePageClient />
        </>
    );
}
