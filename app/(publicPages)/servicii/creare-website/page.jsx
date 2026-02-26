import CreareWebsitePageClient from "./CreareWebsitePageClient";

export const metadata = {
    title: "Creare Website-uri Profesionale",
    description: "Dezvoltăm website-uri moderne și rapide în Cluj-Napoca. Site-uri de prezentare, magazine online și landing pages cu design personalizat și optimizare SEO.",
    alternates: {
        canonical: "https://impactomedia.ro/servicii/creare-website",
    },
    openGraph: {
        title: "Creare Website-uri Profesionale | Impacto Media",
        description: "Dezvoltăm website-uri moderne și rapide. Site-uri de prezentare, magazine online și landing pages cu design personalizat și optimizare SEO.",
        url: "https://impactomedia.ro/servicii/creare-website",
    },
};

function ServiceJsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Creare Website-uri Profesionale",
        "description": "Dezvoltăm website-uri moderne, rapide și optimizate pentru performanță. De la site-uri de prezentare la magazine online complete.",
        "provider": {
            "@type": "ProfessionalService",
            "name": "Impacto Media",
            "url": "https://impactomedia.ro",
        },
        "areaServed": { "@type": "Country", "name": "Romania" },
        "serviceType": "Web Development",
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
            { "@type": "Question", "name": "Cât durează să fie gata un website?", "acceptedAnswer": { "@type": "Answer", "text": "Un site de prezentare durează 2-4 săptămâni, iar un magazin online 4-8 săptămâni, în funcție de complexitate și funcționalități." } },
            { "@type": "Question", "name": "Pot să îmi actualizez singur conținutul?", "acceptedAnswer": { "@type": "Answer", "text": "Da! Toate site-urile noastre vin cu un panou de administrare intuitiv, unde poți modifica texte, imagini și produse fără cunoștințe tehnice." } },
            { "@type": "Question", "name": "Site-ul va fi optimizat pentru mobil?", "acceptedAnswer": { "@type": "Answer", "text": "Absolut. Toate website-urile sunt responsive și arată perfect pe telefon, tabletă și desktop." } },
            { "@type": "Question", "name": "Oferiți și hosting?", "acceptedAnswer": { "@type": "Answer", "text": "Da, oferim pachete complete care includ hosting rapid, certificat SSL și backup-uri automate." } },
            { "@type": "Question", "name": "Ce se întâmplă după lansare?", "acceptedAnswer": { "@type": "Answer", "text": "Oferim suport tehnic continuu și pachete de întreținere pentru a menține site-ul actualizat și securizat." } },
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
            <CreareWebsitePageClient />
        </>
    );
}
