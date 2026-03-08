"use client"
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const { t } = useLanguage();

    const navLinks = [
        { name: t("nav.home"), href: "/" },
        { name: t("nav.services"), href: "/#servicii" },
        { name: t("nav.packages"), href: "/#pachete" },
        { name: t("nav.contact"), href: "/contact" },
    ];

    const serviceLinks = [
        { name: t("serviceLinks.websitesMagazine"), href: "/servicii/website-uri-magazine-online" },
        { name: t("serviceLinks.socialMedia"), href: "/servicii/social-media-marketing" },
        { name: t("serviceLinks.paidAds"), href: "/servicii/reclame-platite" },
        { name: t("serviceLinks.branding"), href: "/servicii/branding-creatie" },
        { name: t("serviceLinks.createWebsite"), href: "/servicii/creare-website" },
        { name: t("serviceLinks.optimizeConversion"), href: "/servicii/optimizare-conversie" },
        { name: t("serviceLinks.marketingStrategy"), href: "/servicii/strategie-marketing-digital" },
    ];

    return (
        <footer className="relative px-6 md:px-16 lg:px-24 xl:px-32 mt-40 w-full">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-200 pb-6">
                <div className="md:max-w-114">
                    <Link href="/">
                        <Image className="h-10 md:h-11 w-auto shrink-0" src="/assets/logo-dark.svg" alt="Impacto Media Logo" width={220} height={40} loading="lazy" />
                    </Link>
                    <p className="mt-6">
                        {t("footer.description")}
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-12 lg:gap-20 flex-wrap">
                    <div>
                        <p className="font-semibold mb-5">{t("footer.navigation")}</p>
                        <ul className="space-y-2">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="hover:text-gray-500 transition">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold mb-5">{t("footer.services")}</p>
                        <ul className="space-y-2">
                            {serviceLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="hover:text-gray-500 transition">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold mb-5">{t("footer.contact")}</p>
                        <div className="space-y-2">
                            <p><a href="tel:+40748030566" className="hover:text-gray-500 transition">+40 748 030 566</a></p>
                            <p><a href="mailto:hello@impactomedia.ro" className="hover:text-gray-500 transition">hello@impactomedia.ro</a></p>
                            <p className="text-sm text-slate-500">{t("footer.location")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center pb-5">
                {t("footer.copyright")}
            </p>
        </footer>
    );
};