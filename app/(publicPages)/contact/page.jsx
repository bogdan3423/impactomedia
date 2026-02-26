import ContactPageClient from "./ContactPageClient";

export const metadata = {
    title: "Contact",
    description: "Contactează Impacto Media pentru o consultare gratuită. Telefon: +40 748 030 566 | Email: hello@impactomedia.ro | Cluj-Napoca, România.",
    alternates: {
        canonical: "https://impactomedia.ro/contact",
    },
    openGraph: {
        title: "Contact | Impacto Media",
        description: "Contactează Impacto Media pentru o consultare gratuită. Telefon: +40 748 030 566 | Email: hello@impactomedia.ro | Cluj-Napoca, România.",
        url: "https://impactomedia.ro/contact",
    },
};

export default function Page() {
    return <ContactPageClient />;
}
