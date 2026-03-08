"use client"
import { CheckIcon, ChevronDown, VideoIcon, CameraIcon, UsersIcon, CalendarIcon, TrendingUpIcon, SparklesIcon, MegaphoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const videoPortfolio = [
    {
        company: "Numele Companiei",
        category: "Restaurant & HoReCa",
        description: "Campanie video pentru promovarea meniului sezonier și a ambianței restaurantului.",
        image: "/assets/placeholder-video-1.png",
        platform: "Instagram & TikTok",
        results: "150K+ vizualizări",
    },
    {
        company: "Numele Companiei",
        category: "Salon Beauty",
        description: "Serie de reels pentru promovarea serviciilor de coafură și tratamente faciale.",
        image: "/assets/placeholder-video-2.png",
        platform: "Instagram Reels",
        results: "80K+ vizualizări",
    },
    {
        company: "Numele Companiei",
        category: "Fitness & Wellness",
        description: "Conținut motivațional și prezentarea programelor de antrenament personalizat.",
        image: "/assets/placeholder-video-3.png",
        platform: "TikTok & YouTube",
        results: "200K+ vizualizări",
    },
    {
        company: "Numele Companiei",
        category: "E-commerce",
        description: "Video-uri de prezentare produse și unboxing pentru magazin online de fashion.",
        image: "/assets/placeholder-video-4.png",
        platform: "Instagram & Facebook",
        results: "120K+ vizualizări",
    },
    {
        company: "Numele Companiei",
        category: "Clinică Medicală",
        description: "Conținut educațional și de încredere pentru atragerea pacienților noi.",
        image: "/assets/placeholder-video-5.png",
        platform: "Facebook & YouTube",
        results: "95K+ vizualizări",
    },
    {
        company: "Numele Companiei",
        category: "Real Estate",
        description: "Tururi virtuale și prezentări de proprietăți pentru agenție imobiliară.",
        image: "/assets/placeholder-video-6.png",
        platform: "Instagram & TikTok",
        results: "180K+ vizualizări",
    },
];

const featureIcons = [CameraIcon, UsersIcon, SparklesIcon, CalendarIcon, TrendingUpIcon, MegaphoneIcon];



const faqs = [
    { question: "Câte video-uri primesc pe lună?", answer: "Depinde de pachetul ales — de la 8 reels/lună pentru pachetul de bază, până la 20+ video-uri pentru pachetele premium. Fiecare video este filmat profesional cu actori și echipament complet." },
    { question: "Veniți voi la filmare sau trebuie să vin eu?", answer: "Venim noi la locația ta cu tot echipamentul — cameră, lumini, microfoane, trepied. Tu trebuie doar să fii prezent dacă dorești, dar avem și actori care pot prezenta în locul tău." },
    { question: "Pe ce platforme publicați conținutul?", answer: "Acoperim Instagram (Feed, Reels, Stories), TikTok, Facebook, YouTube Shorts și LinkedIn — în funcție de unde se află audiența ta." },
    { question: "Cât durează până văd primele rezultate?", answer: "Primele rezultate vizibile (creștere engagement, followers, reach) apar de obicei în primele 30-60 de zile. Rezultatele consistente se construiesc în 3-6 luni." },
    { question: "Pot aproba conținutul înainte de postare?", answer: "Absolut! Toate materialele trec prin procesul tău de aprobare înainte de a fi publicate. Primești acces la un calendar partajat unde poți vedea și aproba fiecare postare." },
];

export default function SocialMediaPageClient() {
    const [openFaq, setOpenFaq] = useState(null);
    const { t } = useLanguage();

    const features = t("socialPage.features").map((feature, index) => ({
        ...feature,
        icon: featureIcons[index],
    }));
    const processSteps = t("socialPage.processSteps");

    return (
        <>
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center text-center px-4 pb-20 bg-[url('/assets/light-hero-gradient.svg')] bg-no-repeat bg-cover">
                <h1 className="mt-46 text-6xl/16 md:text-[80px]/22 font-semibold max-w-4xl">
                    {t("socialPage.heroTitle1")}{" "}
                    <span className="bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent">{t("socialPage.heroTitle2")}</span>
                </h1>
                <p className="text-lg max-w-xl mt-4">
                    {t("socialPage.heroDescription")}
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <Link href="/contact" className="bg-black hover:bg-gray-800 transition text-white rounded-md px-6 h-11 flex items-center">
                        {t("socialPage.requestOffer")}
                    </Link>
                    <Link href="#portofoliu-video" className="flex items-center gap-2 border border-black transition text-slate-600 rounded-md px-6 h-11">
                        <VideoIcon strokeWidth={1} />
                        <span>{t("socialPage.seePortfolio")}</span>
                    </Link>
                </div>
            </div>

            {/* Video Portfolio Section */}
            <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - Info */}
                    <div>
                        <p className="font-medium text-indigo-600 px-10 py-2 rounded-full bg-slate-50 border border-slate-300 w-max">{t("socialPage.portfolioLabel")}</p>
                        <h2 className="text-3xl font-semibold mt-4">{t("socialPage.portfolioTitle")}</h2>
                        <p className="text-slate-600 mt-4 leading-relaxed">
                            {t("socialPage.portfolioDesc")}
                        </p>
                        
                        <div className="flex flex-wrap gap-3 mt-6">
                            {["Instagram Reels", "TikTok", "YouTube Shorts", "Facebook"].map((tag) => (
                                <span key={tag} className="text-sm px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        
                    </div>

                    {/* Right - Phone Videos */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-6">
                        <div className="relative w-[75%] sm:w-[240px] lg:w-[260px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border-[6px] sm:border-[8px] border-slate-900 shadow-2xl aspect-[9/16] bg-black">
                            <video
                                src="/assets/videomarketin1ok.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <div className="relative w-[75%] sm:w-[240px] lg:w-[260px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border-[6px] sm:border-[8px] border-slate-900 shadow-2xl aspect-[9/16] bg-black">
                            <video
                                src="/assets/videomarketing2ok.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <div className="max-w-3xl mx-auto px-6 py-20 text-center">
                <p className="text-lg text-slate-600 leading-relaxed">
                    {t("socialPage.descriptionText")}
                </p>
            </div>

            {/* Features Grid */}
            <div className="px-6 md:px-16 lg:px-24 xl:px-32 pb-20">
                <p className="text-center font-medium text-indigo-600 px-10 py-2 rounded-full bg-slate-50 border border-slate-300 w-max mx-auto">{t("socialPage.whatWeOffer")}</p>
                <h2 className="text-3xl font-semibold text-center mx-auto mt-4">{t("socialPage.whatWeOfferTitle")}</h2>
                <p className="text-slate-600 text-center mt-2 max-w-lg mx-auto">{t("socialPage.whatWeOfferDesc")}</p>

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
            <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-20 bg-slate-50">
                <p className="text-center font-medium text-indigo-600 px-10 py-2 rounded-full bg-white border border-slate-300 w-max mx-auto">{t("socialPage.processLabel")}</p>
                <h2 className="text-3xl font-semibold text-center mx-auto mt-4">{t("socialPage.processTitle")}</h2>
                <p className="text-slate-600 text-center mt-2 max-w-lg mx-auto">{t("socialPage.processDesc")}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
                    {processSteps.map((item, index) => (
                        <div key={index} className="relative bg-white rounded-2xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-sm transition-[border-color,box-shadow] duration-300">
                            <span className="text-4xl font-bold text-slate-100">{item.step}</span>
                            <h4 className="text-lg font-semibold text-slate-900 mt-3 mb-2">{item.title}</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                            {index < processSteps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-slate-200"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Benefits Section */}
            

            {/* Final CTA */}
            <div className="flex flex-col items-center text-center justify-center py-20 px-6">
                <h2 className="text-3xl font-semibold mb-4">{t("socialPage.ctaTitle")}</h2>
                <p className="text-slate-600 max-w-xl mx-auto">
                    {t("socialPage.ctaDesc")}
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <Link href="/contact" className="bg-black hover:bg-gray-800 transition text-white rounded-md px-6 h-11 flex items-center">
                        {t("socialPage.ctaCta1")}
                    </Link>
                    <Link href="/#servicii" className="border border-black transition text-slate-600 rounded-md px-6 h-11 flex items-center">
                        {t("socialPage.ctaCta2")}
                    </Link>
                </div>
            </div>
        </>
    );
}
