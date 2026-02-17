"use client"
import { MailIcon, PhoneIcon, MapPinIcon, CheckCircleIcon, AlertCircleIcon, LoaderIcon } from "lucide-react";
import { useState } from "react";

export default function Page() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: data.message });
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });
            } else {
                setStatus({ type: 'error', message: data.error });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'A apărut o eroare. Vă rugăm încercați din nou.' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Hero Section */}
            <div className="flex flex-col items-center justify-center text-center px-4 pb-32 bg-[url('/assets/light-hero-gradient.svg')] bg-no-repeat bg-cover">
                <h1 className="mt-46 text-6xl/16 md:text-[80px]/22 font-semibold max-w-4xl">
                    Hai să{" "}
                    <span className="bg-gradient-to-r from-gray-600 to-black bg-clip-text text-transparent">discutăm!</span>
                </h1>
                <p className="text-lg max-w-xl mt-4">
                    Suntem aici să te ajutăm să crești online. Contactează-ne și hai să vedem cum putem colabora.
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <a href="tel:+40748030566" className="bg-black hover:bg-gray-800 transition text-white rounded-md px-6 h-11 flex items-center">
                        Sună-ne acum
                    </a>
                    <a href="mailto:hello@impactomedia.ro" className="flex items-center gap-2 border border-black transition text-slate-600 rounded-md px-6 h-11">
                        <MailIcon strokeWidth={1} size={20} />
                        <span>Trimite email</span>
                    </a>
                </div>
            </div>

            {/* Contact Info Section */}
            <div className="max-w-4xl mx-auto px-6 pt-16">
                <h2 className="text-3xl font-semibold text-slate-900 mb-8 text-center">Informații de contact</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 border border-slate-200">
                        <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center mb-4">
                            <PhoneIcon className="text-white size-6" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Telefon</h3>
                        <a href="tel:+40748030566" className="text-slate-600 hover:text-slate-900 transition">
                            +40 748 030 566
                        </a>
                    </div>
                    <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 border border-slate-200">
                        <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center mb-4">
                            <MailIcon className="text-white size-6" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
                        <a href="mailto:hello@impactomedia.ro" className="text-slate-600 hover:text-slate-900 transition">
                            hello@impactomedia.ro
                        </a>
                    </div>
                    <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 border border-slate-200">
                        <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center mb-4">
                            <MapPinIcon className="text-white size-6" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Locație</h3>
                        <p className="text-slate-600">
                            Cluj-Napoca, România
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="max-w-2xl mx-auto px-6 mt-20">
                <h2 className="text-3xl font-semibold text-slate-900 mb-8 text-center">Trimite-ne un mesaj</h2>
                
                {/* Status Messages */}
                {status.message && (
                    <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                        status.type === 'success' 
                            ? 'bg-green-50 border border-green-200 text-green-800' 
                            : 'bg-red-50 border border-red-200 text-red-800'
                    }`}>
                        {status.type === 'success' ? (
                            <CheckCircleIcon className="size-5 flex-shrink-0" />
                        ) : (
                            <AlertCircleIcon className="size-5 flex-shrink-0" />
                        )}
                        <p>{status.message}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                                Nume complet *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition"
                                placeholder="Ion Popescu"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition"
                                placeholder="ion@exemplu.ro"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                            Telefon
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition"
                            placeholder="+40 7XX XXX XXX"
                        />
                    </div>
                    <div>
                        <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                            Ce serviciu te interesează?
                        </label>
                        <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition"
                        >
                            <option value="">Selectează un serviciu</option>
                            <option value="website">Website-uri & Magazine Online</option>
                            <option value="social-media">Social Media Marketing & Content Creation</option>
                            <option value="ads">Reclame Plătite (Google & Meta Ads)</option>
                            <option value="all">Toate serviciile</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                            Mesaj *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition resize-none"
                            placeholder="Spune-ne mai multe despre proiectul tău..."
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition text-white rounded-xl px-6 py-4 font-medium flex items-center justify-center gap-2"
                    >
                        {isLoading ? (
                            <>
                                <LoaderIcon className="size-5 animate-spin" />
                                Se trimite...
                            </>
                        ) : (
                            'Trimite mesajul'
                        )}
                    </button>
                </form>
            </div>

            {/* Final CTA Section */}
            <div className="flex flex-col items-center text-center justify-center mt-32 mb-20 px-6">
                <h3 className="text-3xl font-semibold mb-4">Preferi să vorbim direct?</h3>
                <p className="text-slate-600 max-w-xl mx-auto">
                    Programează un apel gratuit de 15 minute și hai să discutăm despre cum putem crește afacerea ta.
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <a href="tel:+40748030566" className="bg-black hover:bg-gray-800 transition text-white rounded-md px-6 h-11 flex items-center">
                        Programează un apel
                    </a>
                </div>
            </div>
        </>
    );
}
