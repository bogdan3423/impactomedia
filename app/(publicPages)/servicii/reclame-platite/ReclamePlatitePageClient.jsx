"use client"
import { VideoIcon } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ReclamePlatitePageClient() {
    const { t } = useLanguage();
    return (
        <>
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center text-center px-4 pb-32 bg-[url('/assets/light-hero-gradient.svg')] bg-no-repeat bg-cover">
                <h1 className="mt-46 text-6xl/16 md:text-[80px]/22 font-semibold max-w-4xl">
                    {t("adsPage.heroTitle1")}{" "}
                    <span className="bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent">{t("adsPage.heroTitle2")}</span>
                </h1>
                <p className="text-lg max-w-xl mt-4">
                    {t("adsPage.heroDescription")}
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <Link href="/contact" className="bg-black hover:bg-gray-800 transition text-white rounded-md px-6 h-11 flex items-center">
                        {t("adsPage.requestOffer")}
                    </Link>
                    <Link href="#inclus" className="flex items-center gap-2 border border-black transition text-slate-600 rounded-md px-6 h-11">
                        <VideoIcon strokeWidth={1} />
                        <span>{t("adsPage.seeResults")}</span>
                    </Link>
                </div>
            </div>

            {/* Short Description Section */}
            <div className="max-w-3xl mx-auto px-6 pt-16">
                <h2 className="text-3xl font-semibold text-slate-900 mb-8">{t("adsPage.sectionTitle")}</h2>
                <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                    <p>{t("adsPage.desc1")}</p>
                    <p>{t("adsPage.desc2")}</p>
                    <p>{t("adsPage.desc3")}</p>
                </div>
            </div>

            {/* What's Included Section */}
            <div className="max-w-3xl mx-auto px-6 mt-20">
                <h2 className="text-3xl font-semibold text-slate-900 mb-8">{t("adsPage.whatsIncluded")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {t("adsPage.includes").map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                            <div className="w-2 h-2 bg-slate-900 rounded-full flex-shrink-0"></div>
                            <span className="text-slate-700">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Final CTA Section */}
            <div className="flex flex-col items-center text-center justify-center mt-32 mb-20 px-6">
                <h2 className="text-3xl font-semibold mb-4">{t("adsPage.ctaTitle")}</h2>
                <p className="text-slate-600 max-w-xl mx-auto">
                    {t("adsPage.ctaDesc")}
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <Link href="/contact" className="bg-black hover:bg-gray-800 transition text-white rounded-md px-6 h-11 flex items-center">
                        {t("adsPage.ctaCta")}
                    </Link>
                </div>
            </div>
        </>
    );
}
