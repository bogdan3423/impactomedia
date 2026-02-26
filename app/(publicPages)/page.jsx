import HomePageClient from "./HomePageClient";

export const metadata = {
    title: {
        absolute: "Impacto Media | Agenție de Marketing Digital în Cluj-Napoca",
    },
    description: "Agenție de marketing digital din Cluj-Napoca. Creăm website-uri profesionale, campanii Google & Meta Ads și conținut social media cu rezultate măsurabile.",
    alternates: {
        canonical: "https://impactomedia.ro",
    },
    openGraph: {
        title: "Impacto Media | Agenție de Marketing Digital în Cluj-Napoca",
        description: "Agenție de marketing digital din Cluj-Napoca. Creăm website-uri profesionale, campanii Google & Meta Ads și conținut social media cu rezultate măsurabile.",
        url: "https://impactomedia.ro",
    },
};

export default function Page() {
    return <HomePageClient />;
}
