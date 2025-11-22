'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Dice1 } from 'lucide-react';
import ThemeToggle from '../reusable/DarkModeToggle';

const DynamicBar = () => {
    const pathname = usePathname();

    const NavLinks = [
        { name: "Home", link: "/" },
        { name: "Projects", link: "/projects" },
        { name: "Contact", link: "/contact" },
        { name: "About", link: "/about" },
        { name: "Services", link: "/services" },
    ];

    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setExpanded(true);
        }, 300);
    }, []);


    const [pop, setPop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 100) setPop(true);
            else {
                setPop(false)
                setExpanded(false)
            };
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div data-aos="fade-up" className='fixed left-1/2 top-5 -translate-x-1/2 z-50'>
            <nav
                className={`
                flex justify-center items-center
                text-[--white-color] px-8 py-4
                bg-[var(--accent)]/60 backdrop-blur-lg
                shadow-[0_8px_30px_rgba(0,0,0,0.3)]
                transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                ${expanded ? "w-160 rounded-4xl" : "md:w-0 w-160 rounded-full hover:w-160 hover:scale-[1.02]"}
                ${!pop && "md:w-160"}
                overflow-hidden
                `}
            >
                <ul className={`flex gap-6 duration-800 ${pop && "md:opacity-0 hover:opacity-100"}`}>
                    {NavLinks.map((item, index) => (
                        <li key={index} className="group transition-all">
                            <Link
                                href={item.link}
                                className="flex items-center gap-4"
                            >
                                <div
                                    className={`group relative px-2 py-1 font-medium transition-all duration-300 ease-in-out flex items-center gap-4 ${pathname === item.link
                                        ? "text-[var(--primary-color)] font-semibold"
                                        : "text-[var(--white-color)]"
                                        }`}
                                >
                                    {item.name}
                                    <span
                                        className={`absolute left-0 bottom-0 h-0.5 bg-[var(--primary-color)] transition-all duration-300 ease-in-out ${pathname === item.link ? "w-full" : "w-0 group-hover:w-full"
                                            }`}
                                    />
                                </div>
                            </Link>
                        </li>
                    ))}
                    <li className='flex items-center gap-2'>
                        <ThemeToggle />
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default DynamicBar
