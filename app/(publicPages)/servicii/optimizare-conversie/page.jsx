"use client"
import { CheckIcon, ChevronDown, RocketIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const serviceData = {
    title: "Optimizare Rată de Conversie",
    subtitle: "Transformă mai mulți vizitatori în clienți prin îmbunătățiri bazate pe date și testare A/B",
    description: "Ai trafic dar nu ai vânzări? Analizăm comportamentul utilizatorilor și optimizăm fiecare element al funnel-ului pentru a maximiza conversiile. Fiecare îmbunătățire este testată și validată cu date reale.",
    includes: [
        "Audit complet al site-ului și funnel-ului",
        "Analiză heatmaps și comportament utilizatori",
        "Identificarea punctelor de abandon",
        "Testare A/B pe elemente cheie",
        "Optimizare landing pages",
        "Îmbunătățire UX/UI pentru conversii",
        "Optimizare formulare și checkout",
        "Raportare lunară cu rezultate"
    ],
    process: [
        { step: "1", title: "Analiză Date", description: "Studiem Google Analytics, heatmaps și înregistrări de sesiuni." },
        { step: "2", title: "Identificare Probleme", description: "Detectăm unde pierzi vizitatori și de ce nu convertesc." },
        { step: "3", title: "Ipoteze", description: "Formulăm ipoteze bazate pe date despre ce va îmbunătăți conversiile." },
        { step: "4", title: "Testare A/B", description: "Testăm variante pentru a valida ipotezele." },
        { step: "5", title: "Implementare", description: "Implementăm variantele câștigătoare permanent." },
        { step: "6", title: "Iterare", description: "Continuăm ciclul pentru îmbunătățiri constante." }
    ],
    benefits: [
        "Mai multe conversii din traficul existent",
        "ROI crescut pe campaniile de ads",
        "Cost per achiziție redus",
        "Experiență mai bună pentru utilizatori",
        "Decizii bazate pe date, nu pe opinii",
        "Creștere continuă și predictibilă"
    ],
    targetAudience: [
        "E-commerce cu trafic dar conversii mici",
        "SaaS și servicii cu trial/demo",
        "Afaceri care investesc în ads dar nu văd ROI",
        "Site-uri cu formulare de lead generation",
        "Oricine vrea să maximizeze traficul existent"
    ],
    faqs: [
        { question: "Cât de rapid văd rezultate?", answer: "Primele îmbunătățiri pot fi implementate în 2-4 săptămâni. Rezultatele statistice valide necesită suficient trafic pentru testare (de obicei 4-8 săptămâni)." },
        { question: "Ce tool-uri folosiți pentru analiză?", answer: "Google Analytics, Hotjar sau Microsoft Clarity pentru heatmaps, Google Optimize sau VWO pentru teste A/B." },
        { question: "Funcționează și pentru site-uri cu trafic mic?", answer: "Pentru teste A/B statistice avem nevoie de minim 1000-2000 vizitatori/lună pe paginile testate. Pentru site-uri mici, facem optimizări bazate pe best practices și analiză calitativă." },
        { question: "Ce îmbunătățiri tipice faceți?", answer: "CTA-uri mai clare, simplificarea formularelor, îmbunătățirea vitezei, optimizare mobile, copy mai persuasiv, reducerea fricțiunilor în checkout." },
        { question: "Modificați voi site-ul sau doar dați recomandări?", answer: "Depinde de preferințele tale. Putem implementa modificările sau livra recomandări detaliate pentru echipa ta tehnică." }
    ]
};

export default function OptimizareConversiePage() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-20 h-20 rounded-2xl bg-slate-900 flex items-center justify-center mx-auto mb-8">
                        <RocketIcon className="text-white size-10" strokeWidth={1.2} />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                        {serviceData.title}
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                        {serviceData.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="bg-black hover:bg-gray-800 transition text-white rounded-md px-8 h-12 font-medium">
                            Solicită un audit CRO gratuit
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
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Pregătit să convertești mai mulți vizitatori?</h2>
                    <p className="text-slate-600 mb-8">
                        Solicită un audit CRO gratuit și descoperă unde pierzi conversii și cum poți îmbunătăți.
                    </p>
                    <button className="bg-black hover:bg-gray-800 transition text-white rounded-md px-8 h-12 font-medium">
                        Solicită audit CRO gratuit
                    </button>
                </div>
            </section>
        </div>
    );
}
