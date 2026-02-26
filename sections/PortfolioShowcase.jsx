"use client";
import { websitePortfolio, videoPortfolio } from "@/data/portfolioData";
import { ArrowRightIcon, GlobeIcon, VideoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LighthouseScore from "@/sections/LighthouseScore";


function WebsiteCard({ item }) {
    return (
        <div className="group relative">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-all duration-500 hover:shadow-lg hover:shadow-slate-200/50">
                {/* Browser chrome mockup */}
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-50 border-b border-slate-100">
                    <span className="w-2 h-2 rounded-full bg-red-400/70" />
                    <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
                    <span className="w-2 h-2 rounded-full bg-green-400/70" />
                    <span className="ml-2 flex-1 h-5 rounded-md bg-slate-100 text-[10px] text-slate-400 flex items-center justify-center">
                        {item.title.toLowerCase().replace(/\s+/g, '')}.ro
                    </span>
                </div>
                {/* Screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-top transition-[object-position] duration-[3s] ease-in-out group-hover:object-bottom"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <span className="inline-flex items-center gap-1.5 text-white text-sm font-medium">
                            Vezi proiectul
                            <ArrowRightIcon className="w-3.5 h-3.5" />
                        </span>
                    </div>
                </div>
            </div>
            {/* Info below card */}
            <div className="mt-3 px-0.5">
                <h4 className="font-semibold text-slate-900 text-[15px]">{item.title}</h4>
                <p className="text-slate-500 text-sm mt-0.5">{item.category}</p>
            </div>
        </div>
    );
}

export default function PortfolioShowcase() {
    return (
        <section className="mt-28">
            {/* Section header */}
            <div className="text-center px-6">
                <p className="font-medium text-indigo-600 px-10 py-2 rounded-full bg-slate-50 border border-slate-300 w-max mx-auto">
                    PORTOFOLIU
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold text-center mx-auto mt-4">
                    Proiecte care vorbesc de la sine
                </h2>
                <p className="text-slate-600 text-center mt-2 max-w-xl mx-auto">
                    De la website-uri profesionale la conținut video de impact — iată o parte din munca noastră recentă.
                </p>
            </div>

            {/* Website Portfolio */}
            <div className="mt-14 px-6 md:px-16 lg:px-24 xl:px-32">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                        <GlobeIcon className="w-5 h-5 text-slate-700" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-slate-900">Website-uri Create</h3>
                        <p className="text-slate-500 text-sm">Design modern, performanță optimă</p>
                    </div>
                </div>

                {/* Responsive grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {websitePortfolio.map((item, index) => (
                        <WebsiteCard key={index} item={item} />
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <Link
                        href="/servicii/website-uri-magazine-online"
                        className="inline-flex items-center gap-2 text-sm font-medium bg-black text-white hover:bg-gray-800 rounded-full px-6 py-2.5 transition-colors duration-200"
                    >
                        Descoperă serviciul web
                        <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            <LighthouseScore />

            {/* Video Content Portfolio — split layout like the marketing page */}
            <div className="mt-20 px-6 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left — Info */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                                <VideoIcon className="w-5 h-5 text-slate-700" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-slate-900">Conținut Video Social Media</h3>
                                <p className="text-slate-500 text-sm">Filmare profesională la locația ta</p>
                            </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                            Iată doar un exemplu din conținutul video pe care îl creăm pentru clienții noștri. De la scenarii și filmare, până la editare și publicare — fiecare video este gândit strategic pentru a genera vizualizări, engagement și conversii.
                        </p>
                        <div className="flex flex-wrap gap-3 mt-6">
                            {["Instagram Reels", "TikTok", "YouTube Shorts", "Facebook"].map((tag) => (
                                <span key={tag} className="text-sm px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="mt-8">
                            <Link
                                href="/servicii/social-media-marketing"
                                className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-black border border-slate-200 hover:border-slate-300 rounded-full px-6 py-2.5 transition-colors duration-200 hover:shadow-sm"
                            >
                                Descoperă serviciul de Social Media
                                <ArrowRightIcon className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Right — Videos */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        {videoPortfolio.map((item, index) => (
                            <div key={index} className="relative w-[75%] sm:w-[240px] lg:w-[260px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[9/16] bg-black">
                                <video
                                    src={item.src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
