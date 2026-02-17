"use client"
import SectionTitle from "@/components/SectionTitle";
import { pricingData } from "@/data/pricingData";
import { SparklesIcon } from "lucide-react";
import Image from "next/image";

export default function Pricing() {
    return (
        <div id="pachete" className="relative">
            <Image className="absolute -mt-20 md:-mt-100 md:left-20 pointer-events-none" src="/assets/color-splash-light.svg" alt="" width={1000} height={1000} loading="lazy" />
            <SectionTitle text1="PACHETE" text2="Investește în creștere" text3="Pachete flexibile adaptate nevoilor tale — fie că ești la început de drum sau gata să scalezi." />

            <div className="flex flex-wrap items-center justify-center gap-6 mt-16">
                {pricingData.map((plan, index) => (
                    <div key={index} className={`p-6 rounded-2xl max-w-75 w-full shadow-[0px_4px_26px] shadow-black/6 ${plan.mostPopular ? "relative pt-12 bg-gradient-to-b from-gray-800 to-black" : "bg-white/50 border border-slate-200"}`}>
                        {plan.mostPopular && (
                            <div className="flex items-center text-xs gap-1 py-1.5 px-2 text-black absolute top-4 right-4 rounded bg-white font-medium">
                                <SparklesIcon size={14} />
                                <p>Cel mai popular</p>
                            </div>
                        )}
                        <p className={plan.mostPopular && "text-white"}>{plan.title}</p>
                        <h4 className={`text-3xl font-semibold mt-1 ${plan.mostPopular && "text-white"}`}>{plan.price}€<span className={`font-normal text-sm ${plan.mostPopular ? "text-white" : "text-slate-300"}`}>/lună</span></h4>
                        <hr className={`my-8 ${plan.mostPopular ? "border-gray-300" : "border-slate-300"}`} />
                        <div className={`space-y-2 ${plan.mostPopular ? "text-white" : "text-slate-600"}`}>
                            {plan.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-1.5">
                                    <feature.icon size={18} className={`${plan.mostPopular ? "text-white" : "text-black"}`} />
                                    <span>{feature.name}</span>
                                </div>
                            ))}
                        </div>
                        <button className={`transition w-full py-3 rounded-lg font-medium mt-8 ${plan.mostPopular ? "bg-white hover:bg-slate-100 text-slate-800" : "bg-black hover:bg-gray-800 text-white"}`}>
                            <span>{plan.buttonText}</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}