"use client"
import { CheckIcon, ChevronDown, TargetIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function StrategieMarketingPageClient() {
    const [openFaq, setOpenFaq] = useState(null);
    const { t } = useLanguage();

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-20 h-20 rounded-2xl bg-slate-900 flex items-center justify-center mx-auto mb-8">
                        <TargetIcon className="text-white size-10" strokeWidth={1.2} />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                        {t("strategiePage.title")}
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                        {t("strategiePage.subtitle")}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact" className="bg-black hover:bg-gray-800 transition text-white rounded-md px-8 h-12 font-medium flex items-center">
                            {t("strategiePage.requestOffer")}
                        </Link>
                        <Link href="/#servicii" className="border border-black transition text-slate-600 rounded-md px-8 h-12 font-medium flex items-center">
                            {t("strategiePage.seeAllServices")}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Description */}
            <section className="py-16 px-6 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-3xl mx-auto">
                    <p className="text-lg text-slate-600 leading-relaxed text-center">
                        {t("strategiePage.description")}
                    </p>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-16 px-6 md:px-16 lg:px-24 xl:px-32 bg-slate-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">{t("strategiePage.whatsIncluded")}</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {(t("strategiePage.includes") || []).map((item, index) => (
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
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">{t("strategiePage.processTitle")}</h2>
                    <div className="space-y-6">
                        {(t("strategiePage.process") || []).map((item, index) => (
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
                    <h2 className="text-3xl font-bold mb-10 text-center">{t("strategiePage.benefitsTitle")}</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {(t("strategiePage.benefits") || []).map((benefit, index) => (
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
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">{t("strategiePage.targetTitle")}</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {(t("strategiePage.targetAudience") || []).map((audience, index) => (
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
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">{t("strategiePage.faqTitle")}</h2>
                    <div className="space-y-4">
                        {(t("strategiePage.faqs") || []).map((faq, index) => (
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
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{t("strategiePage.ctaTitle")}</h2>
                    <p className="text-slate-600 mb-8">
                        {t("strategiePage.ctaDesc")}
                    </p>
                    <Link href="/contact" className="bg-black hover:bg-gray-800 transition text-white rounded-md px-8 h-12 font-medium flex items-center">
                        {t("strategiePage.ctaCta1")}
                    </Link>
                </div>
            </section>
        </div>
    );
}
