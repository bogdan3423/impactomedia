import WebsitePageClient from "./WebsitePageClient";

export const metadata = {
    title: "Creare Website-uri & Magazine Online",
    description: "Creăm website-uri de prezentare și magazine online profesionale în Cluj-Napoca. Design modern, optimizare SEO, performanță maximă și rezultate măsurabile.",
    alternates: {
        canonical: "https://impactomedia.ro/servicii/website-uri-magazine-online",
    },
    openGraph: {
        title: "Creare Website-uri & Magazine Online | Impacto Media",
        description: "Creăm website-uri de prezentare și magazine online profesionale în Cluj-Napoca. Design modern, optimizare SEO, performanță maximă și rezultate măsurabile.",
        url: "https://impactomedia.ro/servicii/website-uri-magazine-online",
    },
};

function ServiceJsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Creare Website-uri & Magazine Online",
        "description": "Creăm website-uri de prezentare și magazine online profesionale. Design modern, optimizare SEO, performanță maximă și rezultate măsurabile.",
        "provider": {
            "@type": "ProfessionalService",
            "name": "Impacto Media",
            "url": "https://impactomedia.ro",
        },
        "areaServed": { "@type": "Country", "name": "Romania" },
        "serviceType": "Web Design",
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
            <WebsitePageClient />
        </>
    );
}
