import Image from "next/image";

export default function LighthouseScore() {
    return (
        <div className="mt-28 px-6 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-3xl md:text-4xl font-semibold">
                    Așa lucrăm la {" "}
                    <span className="bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent">Impactomedia</span>
                </h3>
                <p className="text-slate-600 mt-3 max-w-lg mx-auto">
                    
                </p>

                <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <Image
                        src="/assets/agentie_de_marketing_lighthousetestok.png"
                        alt="Google Lighthouse Test - 100 Performance, 93 Accessibility, 96 Best Practices, 100 SEO"
                        width={800}
                        height={450}
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
}
