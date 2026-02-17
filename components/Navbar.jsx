"use client";
import { navLinks } from "@/data/navLinks";
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (openMobileMenu) {
            document.body.classList.add("max-md:overflow-hidden");
        } else {
            document.body.classList.remove("max-md:overflow-hidden");
        }
    }, [openMobileMenu]);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setOpenMobileMenu(false);
        
        // Check if it's a hash link
        if (href.includes('#')) {
            const [path, hash] = href.split('#');
            const targetPath = path || '/';
            
            if (pathname === targetPath || (pathname === '/' && targetPath === '/')) {
                // Same page, just scroll
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // Different page, navigate then scroll
                router.push(href);
            }
        } else {
            router.push(href);
        }
    };

    return (
        <nav className={`flex items-center justify-between fixed z-50 top-0 w-full px-6 md:px-16 lg:px-24 xl:px-32 py-4 transition-colors duration-300 ${openMobileMenu ? '' : scrolled ? 'bg-white/95' : 'bg-transparent'}`}>
            <Link href="/" className="flex items-center">
                <Image 
                    src="/assets/logo-dark.svg" 
                    alt="Impacto Media Logo" 
                    width={220} 
                    height={40} 
                    className="h-10 md:h-11 w-auto"
                    priority 
                />
            </Link>
            <div className="hidden items-center md:gap-8 lg:gap-9 md:flex lg:pl-20">
                {navLinks.map((link) => (
                    <a 
                        key={link.name} 
                        href={link.href} 
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="hover:text-slate-600 cursor-pointer"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
            {/* Mobile menu */}
            <div className={`fixed inset-0 flex flex-col items-center justify-center gap-6 text-lg font-medium bg-white/60 backdrop-blur-md md:hidden transition duration-300 ${openMobileMenu ? "translate-x-0" : "-translate-x-full"}`}>
                {navLinks.map((link) => (
                    <a 
                        key={link.name} 
                        href={link.href} 
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="cursor-pointer"
                    >
                        {link.name}
                    </a>
                ))}
                <a 
                    href="/contact" 
                    onClick={(e) => handleNavClick(e, '/contact')} 
                    className="hover:text-slate-600 cursor-pointer"
                >
                    Conectare
                </a>
                <button className="aspect-square size-10 p-1 items-center justify-center bg-black hover:bg-gray-800 transition text-white rounded-md flex" onClick={() => setOpenMobileMenu(false)}>
                    <XIcon />
                </button>
            </div>
            <div className="flex items-center gap-4">
                <a 
                    href="/contact" 
                    onClick={(e) => handleNavClick(e, '/contact')}
                    className="hidden md:block hover:bg-slate-100 transition px-4 py-2 border border-black rounded-md cursor-pointer"
                >
                    Contact
                </a>
                <a 
                    href="/contact" 
                    onClick={(e) => handleNavClick(e, '/contact')}
                    className="hidden md:block px-4 py-2 bg-black hover:bg-gray-800 transition text-white rounded-md cursor-pointer"
                >
                    Solicită un audit gratuit
                </a>
                <button onClick={() => setOpenMobileMenu(!openMobileMenu)} className="md:hidden">
                    <MenuIcon size={26} className="active:scale-90 transition" />
                </button>
            </div>
        </nav>
    );
}