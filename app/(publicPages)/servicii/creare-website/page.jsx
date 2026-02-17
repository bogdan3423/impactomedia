"use client"
import { CheckIcon, ChevronDown, GlobeIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const serviceData = {
    title: "Creare Website-uri",
    subtitle: "Site-uri de prezentare, magazine online și landing pages care convertesc vizitatorii în clienți",
    description: "Dezvoltăm website-uri moderne, rapide și optimizate pentru performanță. De la site-uri de prezentare elegante la magazine online complete — creăm soluții digitale care îți reprezintă afacerea și generează rezultate.",
    includes: [
        "Design personalizat și responsive",
        "Optimizare pentru motoarele de căutare (SEO)",
        "Integrare cu sisteme de plată online",
        "Panou de administrare ușor de utilizat",
        "Hosting și întreținere tehnică",
        "Certificat SSL și securitate avansată",
        "Integrare Google Analytics și tracking",
        "Formular de contact și chat live"
    ],
    process: [
        { step: "1", title: "Descoperire", description: "Analizăm nevoile afacerii tale, publicul țintă și obiectivele pentru website." },
        { step: "2", title: "Strategie & Wireframing", description: "Creăm structura site-ului și planificăm experiența utilizatorului." },
        { step: "3", title: "Design", description: "Dezvoltăm un design modern și atractiv, aliniat cu identitatea brandului tău." },
        { step: "4", title: "Dezvoltare", description: "Transformăm designul în cod, cu tehnologii moderne și performante." },
        { step: "5", title: "Testare & Lansare", description: "Testăm pe toate dispozitivele și lansăm site-ul live." },
        { step: "6", title: "Suport continuu", description: "Oferim întreținere și actualizări pentru performanță optimă." }
    ],
    benefits: [
        "Prezență online profesională care inspiră încredere",
        "Mai mulți clienți prin optimizare pentru conversii",
        "Vizibilitate crescută în Google",
        "Control total asupra conținutului",
        "Vânzări 24/7 pentru magazine online",
        "Analiză detaliată a comportamentului vizitatorilor"
    ],
    targetAudience: [
        "Afaceri noi care au nevoie de prezență online",
        "Companii care vor să își modernizeze site-ul existent",
        "Antreprenori care vor să vândă online",
        "Freelanceri și profesioniști independenți",
        "Restaurante, clinici, saloane și alte business-uri locale"
    ],
    faqs: [
        { question: "Cât durează să fie gata un website?", answer: "Un site de prezentare durează 2-4 săptămâni, iar un magazin online 4-8 săptămâni, în funcție de complexitate și funcționalități." },
        { question: "Pot să îmi actualizez singur conținutul?", answer: "Da! Toate site-urile noastre vin cu un panou de administrare intuitiv, unde poți modifica texte, imagini și produse fără cunoștințe tehnice." },
        { question: "Site-ul va fi optimizat pentru mobil?", answer: "Absolut. Toate website-urile sunt responsive și arată perfect pe telefon, tabletă și desktop." },
        { question: "Oferiți și hosting?", answer: "Da, oferim pachete complete care includ hosting rapid, certificat SSL și backup-uri automate." },
        { question: "Ce se întâmplă după lansare?", answer: "Oferim suport tehnic continuu și pachete de întreținere pentru a menține site-ul actualizat și securizat." }
    ]
};

export default function CreareWebsitePage() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-20 h-20 rounded-2xl bg-slate-900 flex items-center justify-center mx-auto mb-8">
                        <GlobeIcon className="text-white size-10" strokeWidth={1.2} />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                        {serviceData.title}
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                        {serviceData.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="bg-black hover:bg-gray-800 transition text-white rounded-md px-8 h-12 font-medium">
                            Solicită o ofertă gratuită
                        </button>
                        <Link href="/#servicii" className="border border-black transition text-slate-600 rounded-md px-8 h-12 font-medium flex items-center">
                            Vezi toate serviciile
                        </Link>
                    </div>
                </div>
            </section>

            {/* Description */}
            <section className="py-16 px-6 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-3xl mx-auto">
                    <p className="text-lg text-slate-600 leading-relaxed text-center">
                        {serviceData.description}
                    </p>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-16 px-6 md:px-16 lg:px-24 xl:px-32 bg-slate-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Ce include serviciul</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {serviceData.includes.map((item, index) => (
                            <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <CheckIcon className="w-4 h-4 text-green-600" />
                                </div>
                                <span className="text-slate-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 px-6 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Cum funcționează procesul</h2>
                    <div className="space-y-6">
                        {serviceData.process.map((item, index) => (
                            <div key={index} className="flex gap-6 items-start">
                                <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                                    {item.step}
                                </div>
                                <div className="pt-2">
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-slate-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 px-6 md:px-16 lg:px-24 xl:px-32 bg-slate-900 text-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10 text-center">Beneficii și rezultate</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {serviceData.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Target Audience */}
            <section className="py-16 px-6 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Pentru cine este acest serviciu</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {serviceData.targetAudience.map((audience, index) => (
                            <div key={index} className="p-5 rounded-xl border border-slate-200 bg-white text-center">
                                <span className="text-slate-700">{audience}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 px-6 md:px-16 lg:px-24 xl:px-32 bg-slate-50">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Întrebări frecvente</h2>
                    <div className="space-y-4">
                        {serviceData.faqs.map((faq, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-xl border border-slate-200 overflow-hidden"
                            >
                                <button 
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                                >
                                    <span className="font-medium text-slate-900">{faq.question}</span>
                                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`px-6 transition-[max-height,padding] duration-300 ${openFaq === index ? 'pb-4 max-h-40' : 'max-h-0 overflow-hidden'}`}>
                                    <p className="text-slate-600">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 px-6 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Pregătit să îți creezi website-ul?</h2>
                    <p className="text-slate-600 mb-8">
                        Hai să discutăm despre proiectul tău și să găsim soluția perfectă pentru afacerea ta.
                    </p>
                    <button className="bg-black hover:bg-gray-800 transition text-white rounded-md px-8 h-12 font-medium">
                        Programează o consultare gratuită
                    </button>
                </div>
            </section>
        </div>
    );
}
