"use client"
import SectionTitle from "@/components/SectionTitle";
import { companiesLogo } from "@/data/companiesLogo";
import { featuresData } from "@/data/featuresData";
import { FaqSection } from "@/sections/FaqSection";
import { VideoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Page() {
    return (
        <>
            <div className="flex flex-col items-center justify-center text-center px-4 bg-[url('/assets/light-hero-gradient.svg')] bg-no-repeat bg-cover">
                <h1 className="mt-46 text-6xl/16 md:text-[80px]/22 font-semibold max-w-3xl">
                    Ești invizibil online în{" "}
                    <span className="bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent">2026?</span>
                </h1>
                <p className="text-lg max-w-xl mt-4">
                    Clienții tăi te caută chiar acum. Întrebarea e: te găsesc pe tine sau pe concurență? Creăm website-uri profesionale și strategii de marketing digital care îți aduc vizibilitate, credibilitate și vânzări reale.
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <button className="bg-black hover:bg-gray-800 transition text-white rounded-md px-6 h-11">
                        Vreau să cresc online
                    </button>
                    
                </div>
                <h3 className="text-2xl text-center text-slate-700 mt-28 pb-14 font-semibold">
                    Te facem vizibil online în: 
                </h3>
                <div className="w-full max-w-6xl mx-auto pb-16">
                    <Marquee className="" gradient={true} speed={45} gradientColor="#fff" gradientWidth={100} pauseOnHover={true}>
                        {[...companiesLogo, ...companiesLogo].map((company, index) => (
                            <div key={index} className="flex items-center justify-center mx-10 px-6 py-4 rounded-xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm transition-[border-color,box-shadow] duration-300">
                                <Image src={company.logo} alt={company.name} width={company.width || 100} height={company.height || 100} className="object-contain h-10 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>

            <div id="servicii">
                <SectionTitle text1="SERVICII" text2="Website-uri & Marketing Digital" text3="De la site-uri de prezentare și magazine online până la campanii de marketing — tot ce ai nevoie pentru a crește online." />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 px-6 md:px-16 lg:px-24 xl:px-32">
                {/* Card 1: Website-uri & Magazine Online */}
                <Link href="/servicii/website-uri-magazine-online" className="group relative min-h-[380px] rounded-3xl overflow-hidden cursor-pointer will-change-transform">
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white"></div>
                    <div className="absolute inset-0 rounded-3xl border border-slate-200 group-hover:border-slate-300 transition-colors duration-300"></div>
                    <div className="relative z-10 h-full flex flex-col justify-between p-8">
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-slate-200 transition-colors duration-300">
                                <svg className="text-slate-900 size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Website-uri & Magazine Online</h3>
                            <p className="text-slate-600 text-base leading-relaxed mb-4">
                                Creăm website-uri de prezentare, magazine online și landing pages care convertesc vizitatorii în clienți. Design modern, performanță optimă și optimizare pentru conversii.
                            </p>
                            <ul className="text-slate-500 text-sm space-y-2">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                                    Site-uri de prezentare profesionale
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                                    Magazine online complete
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                                    Landing pages & optimizare conversii
                                </li>
                            </ul>
                        </div>
                        <div className="mt-6 pt-5 border-t border-slate-200">
                            <span className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-black text-white text-sm font-medium group-hover:bg-gray-800 transition-colors duration-300">
                                Descoperă serviciul
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </Link>

                {/* Card 2: Social Media Marketing & Content Creation */}
                <Link href="/servicii/social-media-marketing" className="group relative min-h-[380px] rounded-3xl overflow-hidden cursor-pointer will-change-transform">
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white"></div>
                    <div className="absolute inset-0 rounded-3xl border border-slate-200 group-hover:border-slate-300 transition-colors duration-300"></div>
                    <div className="relative z-10 h-full flex flex-col justify-between p-8">
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-slate-200 transition-colors duration-300">
                                <svg className="text-slate-900 size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Social Media Marketing & Content Creation</h3>
                            <p className="text-slate-600 text-base leading-relaxed mb-4">
                                Venim la locația ta cu echipa noastră de filmare, actori profesioniști și echipament complet. Creăm conținut video care atrage și convertește.
                            </p>
                            <ul className="text-slate-500 text-sm space-y-2">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                                    Filmare profesională la locația ta
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                                    Actori și echipament inclus
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                                    Postare și management conținut
                                </li>
                            </ul>
                        </div>
                        <div className="mt-6 pt-5 border-t border-slate-200">
                            <span className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-black text-white text-sm font-medium group-hover:bg-gray-800 transition-colors duration-300">
                                Descoperă serviciul
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </Link>

                {/* Card 3: Reclame Plătite (Google & Meta Ads) */}
                <Link href="/servicii/reclame-platite" className="group relative min-h-[380px] rounded-3xl overflow-hidden cursor-pointer will-change-transform">
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white"></div>
                    <div className="absolute inset-0 rounded-3xl border border-slate-200 group-hover:border-slate-300 transition-colors duration-300"></div>
                    <div className="relative z-10 h-full flex flex-col justify-between p-8">
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-slate-200 transition-colors duration-300">
                                <svg className="text-slate-900 size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Reclame Plătite (Google & Meta Ads)</h3>
                            <p className="text-slate-600 text-base leading-relaxed mb-4">
                                Campanii profesionale pe Google și Meta cu strategie personalizată, setup complet, optimizare continuă și scalare pentru rezultate maxime.
                            </p>
                            <ul className="text-slate-500 text-sm space-y-2">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                                    Strategie și setup profesional
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                                    Optimizare continuă a campaniilor
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
                                    Scalare pentru ROI maxim
                                </li>
                            </ul>
                        </div>
                        <div className="mt-6 pt-5 border-t border-slate-200">
                            <span className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-black text-white text-sm font-medium group-hover:bg-gray-800 transition-colors duration-300">
                                Descoperă serviciul
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </Link>
            </div>

            <div id="pachete" className="flex flex-col items-center text-center justify-center mt-28 px-6">
                <SectionTitle text1="PREȚURI" text2="Prețuri personalizate" text3="Fiecare afacere este unică, iar prețurile noastre reflectă asta. Contactează-ne pentru o ofertă adaptată nevoilor tale." />
                <div className="mt-10 max-w-2xl">
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Nu credem în pachete generice. Analizăm nevoile afacerii tale și construim o soluție personalizată cu un preț corect, transparent și adaptat bugetului tău.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                        <Link href="/contact" className="bg-black hover:bg-gray-800 transition text-white rounded-md px-8 py-3 font-medium">
                            Solicită o ofertă personalizată
                        </Link>
                        <Link href="/#servicii" className="border border-black hover:bg-slate-100 transition text-slate-800 rounded-md px-8 py-3 font-medium">
                            Vezi serviciile noastre
                        </Link>
                    </div>
                </div>
            </div>

            <FaqSection />

            <div id="contact" className="flex flex-col items-center text-center justify-center mt-20">
                <h3 className="text-3xl font-semibold mt-16 mb-4">Gata să creștem împreună?</h3>
                <p className="text-slate-600 max-w-xl mx-auto">
                    Alătură-te sutelor de afaceri care au ales să crească alături de noi. Hai să discutăm despre obiectivele tale.
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <button className="bg-black hover:bg-gray-800 transition text-white rounded-md px-6 h-11">
                        Programează o consultare
                    </button>
                    <button className="border border-black transition text-slate-600 rounded-md px-6 h-11">
                        Hai să creștem afacerea ta
                    </button>
                </div>
            </div>

        </>
    );
}