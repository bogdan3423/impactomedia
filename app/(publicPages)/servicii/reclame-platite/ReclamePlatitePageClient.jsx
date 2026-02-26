"use client"
import { VideoIcon } from "lucide-react";
import Link from "next/link";

export default function ReclamePlatitePageClient() {
    return (
        <>
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center text-center px-4 pb-32 bg-[url('/assets/light-hero-gradient.svg')] bg-no-repeat bg-cover">
                <h1 className="mt-46 text-6xl/16 md:text-[80px]/22 font-semibold max-w-4xl">
                    Reclame Plătite{" "}
                    <span className="bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent">Google & Meta Ads</span>
                </h1>
                <p className="text-lg max-w-xl mt-4">
                    Campanii profesionale care aduc clienți reali. Strategie personalizată, setup complet, optimizare continuă și scalare pentru ROI maxim.
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <Link href="/contact" className="bg-black hover:bg-gray-800 transition text-white rounded-md px-6 h-11 flex items-center">
                        Solicită o ofertă
                    </Link>
                    <Link href="#inclus" className="flex items-center gap-2 border border-black transition text-slate-600 rounded-md px-6 h-11">
                        <VideoIcon strokeWidth={1} />
                        <span>Vezi rezultate</span>
                    </Link>
                </div>
            </div>

            {/* Short Description Section */}
            <div className="max-w-3xl mx-auto px-6 pt-16">
                <h2 className="text-3xl font-semibold text-slate-900 mb-8">Reclame care generează vânzări</h2>
                <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                    <p>
                        Reclamele plătite sunt cea mai rapidă cale de a ajunge la clienții tăi ideali. Gestionăm campanii pe Google Ads și Meta Ads (Facebook & Instagram) cu focus pe rezultate măsurabile și return on investment pozitiv.
                    </p>
                    <p>
                        De la research și strategie până la crearea reclamelor, testare și optimizare continuă — ne ocupăm de întregul proces ca tu să te poți concentra pe livrarea produselor și serviciilor tale.
                    </p>
                    <p>
                        Monitorizăm constant performanța campaniilor și facem ajustări în timp real pentru a maximiza rezultatele și a scala ce funcționează.
                    </p>
                </div>
            </div>

            {/* What's Included Section */}
            <div className="max-w-3xl mx-auto px-6 mt-20">
                <h2 className="text-3xl font-semibold text-slate-900 mb-8">Ce este inclus</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        "Audit și strategie personalizată",
                        "Setup complet al conturilor publicitare",
                        "Creare și testare reclame",
                        "Optimizare continuă a campaniilor",
                        "Rapoarte detaliate de performanță",
                        "Scalare pentru rezultate maxime"
                    ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                            <div className="w-2 h-2 bg-slate-900 rounded-full flex-shrink-0"></div>
                            <span className="text-slate-700">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Final CTA Section */}
            <div className="flex flex-col items-center text-center justify-center mt-32 mb-20 px-6">
                <h2 className="text-3xl font-semibold mb-4">Gata să atragi mai mulți clienți?</h2>
                <p className="text-slate-600 max-w-xl mx-auto">
                    Hai să analizăm împreună oportunitățile de creștere pentru afacerea ta.
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <Link href="/contact" className="bg-black hover:bg-gray-800 transition text-white rounded-md px-6 h-11 flex items-center">
                        Programează o consultare gratuită
                    </Link>
                </div>
            </div>
        </>
    );
}
