"use client"
import { CheckIcon, ChevronDown, VideoIcon, GlobeIcon, ShoppingCartIcon, RocketIcon, PaletteIcon, SearchIcon, ShieldCheckIcon, ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LighthouseScore from "@/sections/LighthouseScore";
import { useLanguage } from "@/context/LanguageContext";

const portfolioItems = [
    {
        title: "MVP Design",
        category: "Papetărie, Design & Branding",
        description: "Website de prezentare pentru papetărie modernă ce oferă servicii de print, design grafic și branding, adresate atât persoanelor fizice, cât și companiilor.",
        tags: ["Papetărie", "Print Digital", "Design Grafic", "Branding", "Personalizare"],
        image: "/assets/mvpdesign_website_de_prezentare.png",
    },
    {
        title: "WebSite Renovări",
        category: "Servicii Renovări & Amenajări",
        description: "Website de prezentare pentru firmă de renovări interioare și exterioare, cu portofoliu de lucrări, listă de servicii și formulare de contact pentru cereri de ofertă.",
        tags: ["Renovări Interioare", "Amenajări", "Construcții", "Portofoliu", "Cerere Ofertă"],
        image: "/assets/renomax_website_de_prezentare.png",
    },
    {
        title: "ABT Translogic",
        category: "Transport & Logistică",
        description: "Website de prezentare pentru companie de transport și logistică, cu servicii de transport intern și internațional, consultanță logistică și formulare rapide de solicitare ofertă.",
        tags: ["Transport Marfă", "Logistică", "Transport Internațional", "Flotă Auto", "Cerere Ofertă"],
        image: "/assets/abtranslogic.png",
},
    {
        title: "Arca Seniorilor",
        category: "Centru Rezidențial Seniori",
        description: "Website de prezentare pentru centru rezidențial destinat vârstnicilor, cu informații despre cazare, îngrijire medicală, activități recreative și facilități moderne.",
        tags: ["Cămin Bătrâni", "Îngrijire Seniori", "Asistență Medicală", "Cazare", "Activități"],
        image: "/assets/arca_seniorilor_website_de_prezentare.png",
    },

    {
        title: "Dach Konstrukt GmbH",
        category: "Construcții Acoperișuri & Dulgherie",
        description: "Website de prezentare pentru companie specializată în construcția și renovarea acoperișurilor, dulgherie și lucrări structurale din lemn, cu portofoliu de proiecte și solicitare rapidă de ofertă.",
        tags: ["Acoperișuri", "Dulgherie", "Construcții Lemn", "Renovări", "Ofertă Rapidă"],
        image: "/assets/dachkonstrukt_website_de_prezentare.png",
    },
    {
        title: "UsiBlocate Cluj",
        category: "Servicii Profesionale de Lăcătușerie",
        description: "Website de prezentare pentru servicii de lăcătușerie non-stop în Cluj-Napoca, oferind deblocări uși, schimbare încuietori, deschidere auto, montaj uși și reparații mecanisme de închidere pentru locuințe, birouri și autovehicule.",
        tags: ["Deblocare Uși", "Lăcătușerie 24/7", "Schimbare Încuietori", "Deschidere Auto", "Montaj Uși"],
        image: "/assets/usiblocatecluj_website_de_prezentare.png",
    },
    {
        title: "Certum Consult",
        category: "Agenție de Detectivi Particulari",
        description: "Website de prezentare pentru agenție de investigații private din Cluj-Napoca, oferind servicii discrete de filaj, verificări de integritate, investigatii corporate și consultanță confidențială pentru clienți privați și companii.",
        tags: ["Detectivi Particulari", "Investigații Private", "Verificări Integritate", "Consultanță Confidențială", "Filaj"], 
        image: "/assets/certum_website_de_prezentare.png",
    },
    {
        title: "Luxura Invest",
        category: "Consultanță Imobiliară & Investiții",
        description: "Website de prezentare pentru firmă de consultanță imobiliară și investiții, oferind servicii de intermediere proprietăți, evaluări de piață și strategii de investiții adaptate clienților rezidențiali și corporate.",
        tags: ["Imobiliare", "Consultanță Investiții", "Intermediere Proprietăți", "Evaluări Piață", "Strategie Financiară"],
        image: "/assets/luxurainvest_website_de_prezentare.png",
    },
    {
        title: "Regii Media",
        category: "Agenție Marketing & Content",
        description: "Website de prezentare pentru agenție de marketing digital, specializată în strategii de promovare, creare de conținut, management social media și campanii publicitare eficientizate pentru afaceri.",
        tags: ["Marketing Digital", "Content Creation", "Social Media", "SEO", "Brand Awareness"],
        image: "/assets/regiimedia_website_de_prezentare.png",
    },
    {
        title: "Festival de Teatru Dramaland",
        category: "Festival Cultural & Teatral",
        description: "Website oficial al Festivalului de Teatru Dramaland, un eveniment artistic dedicat spectacolelor de teatru, performance-urilor și activităților culturale pentru toate vârstele, cu program, invitați și bilete online.",
        tags: ["Festival Teatru", "Artă & Cultură", "Spectacole Live", "Program Eveniment", "Bilete Online"],
        image: "/assets/dramaland_website_de_prezentare.png",
    },
    {
        title: "Parchet Lux",
        category: "Parchet & Pardoseli",
        description: "Website de prezentare pentru magazin de parchet și soluții de pardoseli, oferind o gamă variată de produse de calitate pentru locuințe și spații comerciale, cu detalii despre categorii, oferte și modalități de contact.",
        tags: ["Parchet", "Pardoseli", "Design Interior", "Finisaje", "Consultanță Vânzări"],
        image: "/assets/parchetlux_website_de_prezentare.png",
    },
    {
        title: "deblocariusicluj.ro",
        category: "Servicii Lăcătușerie & Deblocare",
        description: "Website de prezentare pentru servicii profesionale de lăcătușerie și deblocare uși, oferind intervenții rapide non-stop pentru locuințe, birouri și autovehicule, schimbare încuietori, montaj uși și soluții de securitate.",
        tags: ["Deblocare Uși", "Lăcătușerie 24/7", "Schimbare Încuietori", "Montaj Uși", "Securitate"], 
        image: "/assets/deblocariusicluj_website_de_prezentare.png",
    },
    {
        title: "DachKonzept",
        category: "Construcții Acoperișuri & Soluții Tehnice",
        description: "Website de prezentare pentru compania austriacă specializată în soluții complete pentru acoperișuri, inclusiv montaj de noi sisteme de acoperire, reparații, întreținere, integrare solară și consultanță tehnică pentru proiecte rezidențiale, comerciale și industriale.",
        tags: ["Acoperișuri", "Montaj & Reparații", "Întreținere", "Sisteme Solare", "Consultanță Tehnică"],
        image: "/assets/dachkonzept_website_de_prezentare.png",
    },
    {
        title: "Key Auto Iași",
        category: "Servicii Auto & Deblocare",
        description: "Website de prezentare pentru servicii auto non-stop în Iași, specializat în refacere chei auto pierdute, chei cu cip transponder și telecomandă, deblocare auto și intervenții rapide la domiciliu sau pe stradă.",
        tags: ["Chei Auto", "Transponder", "Deblocare Auto", "Non-Stop", "Iași"],
        image: "/assets/website_de_prezentare_keyautoiasi.png",
    }
];

const processSteps = [
    { step: "01", title: "Descoperire & Strategie", description: "Analizăm afacerea ta, publicul țintă și competitorii pentru a crea o strategie clară." },
    { step: "02", title: "Wireframe & Design", description: "Creăm structura site-ului și un design modern, aliniat cu identitatea brandului tău." },
    { step: "03", title: "Dezvoltare & Testare", description: "Transformăm designul în cod performant și testăm pe toate dispozitivele." },
    { step: "04", title: "Lansare & Optimizare", description: "Lansăm site-ul live și monitorizăm performanța pentru optimizări continue." },
];

const featureIcons = [PaletteIcon, SearchIcon, RocketIcon, ShoppingCartIcon, ShieldCheckIcon, GlobeIcon];

export default function WebsitePageClient() {
    const { t } = useLanguage();
    const [openFaq, setOpenFaq] = useState(null);

    const features = t("websitePage.features").map((feature, index) => ({
        icon: featureIcons[index],
        title: feature.title,
        description: feature.description,
    }));

    const faqs = t("websitePage.faqs");

    return (
        <>
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center text-center px-4 pb-20 bg-[url('/assets/light-hero-gradient.svg')] bg-no-repeat bg-cover">
                <h1 className="mt-46 text-6xl/16 md:text-[80px]/22 font-semibold max-w-4xl">
                    {t("websitePage.heroTitle1")}{" "}
                    <span className="bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent">{t("websitePage.heroTitle2")}</span>
                </h1>
                <p className="text-lg max-w-xl mt-4">
                    {t("websitePage.heroDescription")}
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <Link href="/contact" className="bg-black hover:bg-gray-800 transition text-white rounded-md px-6 h-11 flex items-center">
                        {t("websitePage.requestOffer")}
                    </Link>
                    <Link href="#portofoliu" className="flex items-center gap-2 border border-black transition text-slate-600 rounded-md px-6 h-11">
                        <VideoIcon strokeWidth={1} />
                        <span>{t("websitePage.seeExamples")}</span>
                    </Link>
                </div>
            </div>

            {/* Description Section */}
            <div className="max-w-3xl mx-auto px-6 py-20 text-center">
                <p className="text-lg text-slate-600 leading-relaxed">
                    {t("websitePage.descriptionText")}
                </p>
            </div>

            {/* Features Grid */}
            <div className="px-6 md:px-16 lg:px-24 xl:px-32 pb-20">
                <p className="text-center font-medium text-indigo-600 px-10 py-2 rounded-full bg-slate-50 border border-slate-300 w-max mx-auto">{t("websitePage.whatWeOffer")}</p>
                <h2 className="text-3xl font-semibold text-center mx-auto mt-4">{t("websitePage.whatWeOfferTitle")}</h2>
                <p className="text-slate-600 text-center mt-2 max-w-lg mx-auto">{t("websitePage.whatWeOfferDesc")}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <div key={index} className="group relative min-h-[220px] rounded-3xl overflow-hidden cursor-default">
                            <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white"></div>
                            <div className="absolute inset-0 rounded-3xl border border-slate-200 group-hover:border-slate-300 transition-colors duration-300"></div>
                            <div className="relative z-10 h-full flex flex-col p-7">
                                <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-5 group-hover:bg-slate-200 transition-colors duration-300">
                                    <feature.icon className="text-slate-900 size-7" strokeWidth={1.2} />
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Process Section */}
            

            {/* Portfolio Section */}
            <div id="portofoliu" className="px-6 md:px-16 lg:px-24 xl:px-32 py-20">
                <p className="text-center font-medium text-indigo-600 px-10 py-2 rounded-full bg-slate-50 border border-slate-300 w-max mx-auto">{t("websitePage.portfolioLabel")}</p>
                <h2 className="text-3xl font-semibold text-center mx-auto mt-4">{t("websitePage.portfolioTitle")}</h2>
                <p className="text-slate-600 text-center mt-2 max-w-lg mx-auto">{t("websitePage.portfolioDesc")}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
                    {portfolioItems.map((item, index) => (
                        <div key={index} className="group rounded-2xl overflow-hidden bg-white border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-[border-color,box-shadow] duration-500 cursor-pointer">
                            <figure className="relative h-56 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/95 text-slate-700 border border-white/20">
                                        {item.category}
                                    </span>
                                </div>
                            </figure>
                            <div className="p-6">
                                <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed mb-5">{item.description}</p>
                                <div className="flex items-center">
                                    <div className="flex flex-wrap gap-2">
                                        {item.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-slate-500 mt-12 text-lg">{t("websitePage.moreWebsites")}</p>
            </div>

            <LighthouseScore />

            {/* Benefits Section */}
           

            {/* FAQ Section */}
            <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-20 bg-slate-50">
                <p className="text-center font-medium text-indigo-600 px-10 py-2 rounded-full bg-white border border-slate-300 w-max mx-auto">{t("websitePage.faqLabel")}</p>
                <h2 className="text-3xl font-semibold text-center mx-auto mt-4">{t("websitePage.faqTitle")}</h2>
                <p className="text-slate-600 text-center mt-2 max-w-lg mx-auto">{t("websitePage.faqDesc")}</p>

                <div className="max-w-3xl mx-auto mt-12 space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 transition-colors duration-300"
                        >
                            <button
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left"
                            >
                                <span className="font-medium text-slate-900">{faq.question}</span>
                                <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 flex-shrink-0 ml-4 ${openFaq === index ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`px-6 transition-[max-height,padding] duration-300 ${openFaq === index ? 'pb-5 max-h-40' : 'max-h-0 overflow-hidden'}`}>
                                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Final CTA */}
            <div className="flex flex-col items-center text-center justify-center py-20 px-6">
                <h2 className="text-3xl font-semibold mb-4">{t("websitePage.ctaTitle")}</h2>
                <p className="text-slate-600 max-w-xl mx-auto">
                    {t("websitePage.ctaDesc")}
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <Link href="/contact" className="bg-black hover:bg-gray-800 transition text-white rounded-md px-6 h-11 flex items-center">
                        {t("websitePage.ctaCta1")}
                    </Link>
                    <Link href="/#servicii" className="border border-black transition text-slate-600 rounded-md px-6 h-11 flex items-center">
                        {t("websitePage.ctaCta2")}
                    </Link>
                </div>
            </div>
        </>
    );
}