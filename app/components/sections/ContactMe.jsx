'use client';
import React, { useEffect, useState, Suspense } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

const ContactForm = () => {
    const searchParams = useSearchParams();
    const [subject, setSubject] = useState('');

    useEffect(() => {
        const subjectParam = searchParams.get('subject');
        if (subjectParam) {
            setSubject(subjectParam);
        }
    }, [searchParams]);

    return (
        <div className="py-10 flex flex-col items-center relative">
            <div className="overflow-y-hidden w-full text-center ">
                <h1 data-aos="fade-up" className="font-medium  text-5xl md:text-6xl">
                    Contact Me
                </h1>
            </div>

            <div className="mt-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                {/* Left Side - Contact Info */}
                <div
                    data-aos="fade-right"
                    className="flex flex-col gap-8"
                >
                    <div className="space-y-4">
                        <h3 className="text-3xl font-bold font-oswald text-[var(--white-color)]">
                            Let's Work <span className="text-[var(--primary-color)]">Together!</span>
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            I'm currently available for freelance work. If you have a project that needs some creative touch, feel free to contact me.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Email */}
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-[var(--dark-from)] to-[var(--dark-to)] border border-[var(--accent)] hover:border-[var(--primary-color)] transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-lg bg-[rgba(173,70,255,0.1)] flex items-center justify-center text-[var(--primary-color)] group-hover:scale-110 transition-transform">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Email</p>
                                <p className="text-[var(--white-color)] font-medium">contact@nouman.dev</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-[var(--dark-from)] to-[var(--dark-to)] border border-[var(--accent)] hover:border-[var(--primary-color)] transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-lg bg-[rgba(173,70,255,0.1)] flex items-center justify-center text-[var(--primary-color)] group-hover:scale-110 transition-transform">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Phone</p>
                                <p className="text-[var(--white-color)] font-medium">+92 300 1234567</p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-[var(--dark-from)] to-[var(--dark-to)] border border-[var(--accent)] hover:border-[var(--primary-color)] transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-lg bg-[rgba(173,70,255,0.1)] flex items-center justify-center text-[var(--primary-color)] group-hover:scale-110 transition-transform">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Location</p>
                                <p className="text-[var(--white-color)] font-medium">Lahore, Pakistan</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div
                    data-aos="fade-left"
                    className="bg-gradient-to-br from-[var(--dark-from)] to-[var(--dark-to)] p-8 rounded-2xl border border-[var(--accent)] relative overflow-hidden"
                >
                    {/* Background Gradient */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--primary-color)] opacity-10 blur-[50px] rounded-full pointer-events-none"></div>

                    <form action="#" className="flex flex-col gap-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-gradient-to-br from-[var(--dark-from)] to-[var(--dark-to)] border border-[var(--accent)] rounded-xl py-3 pl-12 pr-4 text-[var(--white-color)] focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-gradient-to-br from-[var(--dark-from)] to-[var(--dark-to)] border border-[var(--accent)] rounded-xl py-3 pl-12 pr-4 text-[var(--white-color)] focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 ml-1">Subject</label>
                            <div className="relative">
                                <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input
                                    type="text"
                                    placeholder="Project Inquiry"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    className="w-full bg-gradient-to-br from-[var(--dark-from)] to-[var(--dark-to)] border border-[var(--accent)] rounded-xl py-3 pl-12 pr-4 text-[var(--white-color)] focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 ml-1">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Tell me about your project..."
                                className="w-full bg-gradient-to-br from-[var(--dark-from)] to-[var(--dark-to)] border border-[var(--accent)] rounded-xl py-3 px-4 text-[var(--white-color)] focus:outline-none focus:border-[var(--primary-color)] focus:ring-1 focus:ring-[var(--primary-color)] transition-all resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-to)] text-white font-bold py-4 rounded-xl hover:bg-[#9630e6] transition-all flex items-center justify-center gap-2 group"
                        >
                            Send Message
                            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

const ContactMe = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ContactForm />
        </Suspense>
    );
};

export default ContactMe;