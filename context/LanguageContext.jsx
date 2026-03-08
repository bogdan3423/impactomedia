"use client";
import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { translations } from "@/data/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState("ro");

    useEffect(() => {
        const saved = localStorage.getItem("language");
        if (saved && (saved === "ro" || saved === "en")) {
            setLanguage(saved);
        }
    }, []);

    const toggleLanguage = useCallback(() => {
        setLanguage((prev) => {
            const next = prev === "ro" ? "en" : "ro";
            localStorage.setItem("language", next);
            return next;
        });
    }, []);

    const t = useCallback(
        (key) => {
            const keys = key.split(".");
            let value = translations[language];
            for (const k of keys) {
                if (value === undefined) return key;
                value = value[k];
            }
            return value ?? key;
        },
        [language]
    );

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
