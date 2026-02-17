import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "@/context/ThemeContext";
import LenisScroll from "@/components/Lenis";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata = {
    title: "Impacto Media | Agenție de Marketing Digital în Cluj-Napoca",
    description: "Transformăm afaceri prin strategii de marketing digital care aduc rezultate măsurabile. Servicii de reclame plătite, social media, branding și optimizare conversii. Programează o consultare gratuită!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ro">
            <body>
                <ThemeContextProvider>
                    <LenisScroll />
                    {children}
                </ThemeContextProvider>
            </body>
        </html>
    );
}