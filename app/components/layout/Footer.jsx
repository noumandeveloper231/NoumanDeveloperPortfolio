import React from 'react';
import Link from 'next/link';
import { Twitter, Instagram, Linkedin, Github, Mail, ArrowRight, Heart } from 'lucide-react';
import ThemeLogo from '../reusable/ThemeLogo';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-[var(--dark-from)] to-[var(--dark-to)] pt-20 pb-8 border-t border-[var(--accent)] mt-20">
      <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        {/* Column 1: Brand Info */}
        <div className="flex flex-col gap-6">
          <ThemeLogo />
          <p className="text-gray-400 leading-relaxed">
            Transforming ideas into digital reality. I build accessible, pixel-perfect, and performant web experiences.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a href="#" className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-gray-400 hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300">
              <Github size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-gray-400 hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-gray-400 hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300">
              <Twitter size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-gray-400 hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-bold text-[var(--white-color)] font-oswald">Quick Links</h3>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/" className="text-gray-400 hover:text-[var(--primary-color)] transition-colors flex items-center gap-2 group">
                <ArrowRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-400 hover:text-[var(--primary-color)] transition-colors flex items-center gap-2 group">
                <ArrowRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                About Me
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-gray-400 hover:text-[var(--primary-color)] transition-colors flex items-center gap-2 group">
                <ArrowRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-[var(--primary-color)] transition-colors flex items-center gap-2 group">
                <ArrowRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-bold text-[var(--white-color)] font-oswald">Services</h3>
          <ul className="flex flex-col gap-4">
            <li className="text-gray-400 hover:text-[var(--primary-color)] transition-colors cursor-pointer">
              Web Development
            </li>
            <li className="text-gray-400 hover:text-[var(--primary-color)] transition-colors cursor-pointer">
              App Development
            </li>
            <li className="text-gray-400 hover:text-[var(--primary-color)] transition-colors cursor-pointer">
              UI/UX Design
            </li>
            <li className="text-gray-400 hover:text-[var(--primary-color)] transition-colors cursor-pointer">
              SEO Optimization
            </li>
            <li className="text-gray-400 hover:text-[var(--primary-color)] transition-colors cursor-pointer">
              E-commerce Solutions
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-bold text-[var(--white-color)] font-oswald">Newsletter</h3>
          <p className="text-gray-400">
            Subscribe to my newsletter to get the latest updates and news.
          </p>
          <form className="flex flex-col gap-3">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-gradient-to-br from-[var(--dark-from)] to-[var(--dark-to)] border border-[var(--accent)] rounded-xl py-3 pl-12 pr-4 text-[var(--white-color)] focus:outline-none focus:border-[var(--primary-color)] transition-all"
              />
            </div>
            <button className="w-full bg-[var(--primary-color)] text-white font-bold py-3 rounded-xl hover:bg-[#9630e6] transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-[95%] mx-auto pt-8 border-t border-[var(--accent)] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Nouman Dev. All rights reserved.
        </p>
        <p className="text-gray-400 text-sm flex items-center gap-1">
          Made by <span className="text-[var(--primary-color)]">Nouman Tariq</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
