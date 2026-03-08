"use client";
import SectionTitle from "@/components/SectionTitle";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const { t } = useLanguage();
    const faqItems = t("faq.items");

    return (
        <div className="relative max-w-2xl mx-auto flex flex-col items-center justify-center px-4 md:px-0">
            <Image className="absolute -mb-120 -left-40 -z-10 pointer-events-none" src="/assets/color-splash-light.svg" alt="" width={1000} height={1000} loading="lazy" />
            <SectionTitle text1={t("faq.label")} text2={t("faq.title")} text3={t("faq.description")} />
            <div className="mt-8">
                {Array.isArray(faqItems) && faqItems.map((faq, index) => (
                    <div className="border-b border-slate-300 py-4 cursor-pointer w-full" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                        <div className="flex items-center justify-between">
                            <h4 className="text-base font-medium">
                                {faq.question}
                            </h4>
                            <ChevronDown size={18} className={`${openIndex === index && "rotate-180"} transition-transform duration-500 ease-in-out`} />
                        </div>
                        <p className={`text-sm text-slate-600 transition-[opacity,max-height,transform,padding] duration-500 ease-in-out max-w-xl ${openIndex === index ? "opacity-100 max-h-[500px] translate-y-0 pt-4" : "opacity-0 max-h-0 overflow-hidden -translate-y-2"}`} >
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};