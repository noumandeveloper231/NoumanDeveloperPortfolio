'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Home, User, Briefcase, Mail, Wrench, Github, Linkedin, Twitter } from 'lucide-react';
import ThemeToggle from '../reusable/DarkModeToggle';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent scrolling when sidebar is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navItems = [
        { name: 'Home', href: '/', icon: <Home size={20} /> },
        { name: 'About Me', href: '/about', icon: <User size={20} /> },
        { name: 'Projects', href: '/projects', icon: <Briefcase size={20} /> },
        { name: 'Services', href: '/services', icon: <Wrench size={20} /> },
        { name: 'Contact', href: '/contact', icon: <Mail size={20} /> },
    ];

    return (
        <>
            {/* Trigger Button - Visible only on mobile */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden fixed top-1/2 left-0 -translate-y-1/2 p-2 text-[var(--white-color)] hover:text-[var(--primary-color)] transition-colors z-999"
                aria-label="Open Menu"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-60 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-[300px] bg-gradient-to-br from-[var(--dark-from)] to-[var(--dark-to)]  border-l border-[var(--accent)] z-60 transform transition-transform duration-300 ease-in-out shadow-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Decorative Background Gradient */}
                <div className="fixed top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-20 z-50">
                    <div className="absolute top-[-10%] right-[-10%] w-60 h-60 bg-[var(--primary-color)] rounded-full blur-[80px]"></div>
                </div>

                <div className="flex flex-col h-full p-6 relative z-10">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-10 border-b border-[var(--accent)] pb-6">
                        <span className="text-2xl font-bold font-oswald text-[var(--white-color)]">
                            Nouman <span className="text-[var(--primary-color)]">Dev</span>
                        </span>
                        <ThemeToggle />
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-col gap-3">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-4 p-4 rounded-xl text-[var(--white-color)] hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 group"
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                <span className="group-hover:scale-110 transition-transform text-[var(--primary-color)] group-hover:text-white">
                                    {item.icon}
                                </span>
                                <span className="font-medium text-lg tracking-wide">{item.name}</span>
                            </Link>
                        ))}

                    </nav>

                    {/* Footer / Socials */}
                    <div className="mt-auto pt-8 border-t border-[var(--accent)]">
                        <p className="text-gray-500 text-sm text-center mb-6 uppercase tracking-widest">Follow Me</p>
                        <div className="flex justify-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-[#242424] flex items-center justify-center text-gray-400 hover:bg-[var(--primary-color)] hover:text-white transition-all hover:-translate-y-1">
                                <Github size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#242424] flex items-center justify-center text-gray-400 hover:bg-[var(--primary-color)] hover:text-white transition-all hover:-translate-y-1">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#242424] flex items-center justify-center text-gray-400 hover:bg-[var(--primary-color)] hover:text-white transition-all hover:-translate-y-1">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;