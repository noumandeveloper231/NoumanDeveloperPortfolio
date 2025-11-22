import React from 'react';
import assets from '../../assets/assets';
import { Mail, Phone, MapPin, ArrowUpRight, Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const AboutMe = () => {
    return (
        <section className="relative py-20 mt-10 md:mt-15 lg:mt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-[var(--primary-color)] opacity-5 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] bg-[var(--accent)] opacity-5 blur-[100px] rounded-full"></div>
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left Side: Text Content */}
                <div className='flex flex-col gap-8'>
                    <div>
                        <div className="flex items-center gap-3 mb-4" data-aos="fade-right">
                            <div className="w-10 h-[2px] bg-[var(--primary-color)]"></div>
                            <span className="text-[var(--primary-color)] font-medium tracking-wider uppercase text-sm">About Me</span>
                        </div>

                        <div className="overflow-y-hidden w-full ">
                            <h1 data-aos="fade-up" className="font-medium  text-5xl md:text-6xl">
                                The Developer
                            </h1>
                        </div>
                        <div className="overflow-y-hidden w-full ">
                            <h1 data-aos="fade-up" className="font-medium  text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-[var(--white-color)]">
                                Behind the Vision
                            </h1>
                        </div>
                    </div>

                    <p data-aos="fade-up" data-aos-delay="100" className="text-gray-400 text-lg leading-relaxed max-w-xl">
                        I'm Nouman Tariq, a passionate AI Website Developer based in Lahore, Pakistan.
                        I specialize in building modern, responsive, and user-friendly web applications
                        that solve real-world problems. With a keen eye for design and a strong technical
                        foundation, I turn complex ideas into elegant digital solutions.
                    </p>

                    <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col md:flex-row flex-wrap gap-4">
                        <Link href="/about" className="">
                            <button className="w-full md:w-auto flex items-center gap-2 justify-center md:justify-start">
                                More About Me <ArrowUpRight className="text-[var(--white-color)] transition-transform group-hover:translate-x-1" />
                            </button>
                        </Link>

                        <button className="w-full md:w-auto btn-secondary flex items-center gap-2 justify-center md:justify-start">
                            <Download size={20} /> Download CV
                        </button>
                    </div>
                </div>

                {/* Right Side: Profile Card */}
                <div data-aos="fade-left" className='flex justify-center lg:justify-end'>
                    <div className='relative w-full max-w-md'>
                        {/* Decorative border glow */}
                        <div className="absolute -inset-[1px] bg-gradient-to-br from-[var(--primary-color)] to-transparent rounded-[2rem] opacity-50 blur-sm"></div>

                        <div className='relative rounded-[2rem] bg-gradient-to-br from-[var(--dark-from)] to-[var(--dark-to)]  backdrop-blur-xl border border-[var(--accent)] p-8 md:p-10 flex flex-col items-center gap-6 shadow-2xl'>
                            <div className="relative">
                                <div className="absolute inset-0 bg-[var(--primary-color)] rounded-full blur-md opacity-40 animate-pulse"></div>
                                <Image
                                    src={assets.hero_right}
                                    className="relative rounded-full w-32 h-32 object-cover border-4 border-[#2a2a2a] shadow-lg"
                                    width={300}
                                    height={300}
                                    alt='Nouman Tariq'
                                />
                                <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-[var(--white-color)] rounded-full" title="Available for work"></div>
                            </div>

                            <div className='text-center space-y-1'>
                                <h3 className='font-oswald font-bold text-2xl text-[var(--white-color)] tracking-wide'>
                                    Nouman Tariq
                                </h3>
                                <p className='text-[var(--primary-color)] font-medium'>
                                    Full Stack Web Developer                                    
                                </p>
                            </div>

                            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent my-2"></div>

                            <div className="w-full space-y-4">
                                <Link href='mailto:contact@nouman.dev' className='group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-[var(--dark-from)] to-[var(--dark-to)] border border-[var(--accent)] hover:border-[var(--primary-color)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1'>
                                    <div className="w-10 h-10 rounded-lg bg-[rgba(173,70,255,0.1)] flex items-center justify-center text-[var(--primary-color)] group-hover:scale-110 transition-transform">
                                        <Mail size={18} />
                                    </div>
                                    <span className="text-[var(--white-color)] text-sm group-hover:text-[var(--primary-color)] transition-colors">contact@nouman.dev</span>
                                </Link>

                                <Link href='tel:+923001234567' className='group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-[var(--dark-from)] to-[var(--dark-to)] border border-[var(--accent)] hover:border-[var(--primary-color)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1'>
                                    <div className="w-10 h-10 rounded-lg bg-[rgba(173,70,255,0.1)] flex items-center justify-center text-[var(--primary-color)] group-hover:scale-110 transition-transform">
                                        <Phone size={18} />
                                    </div>
                                    <span className="text-[var(--white-color)] text-sm group-hover:text-[var(--primary-color)] transition-colors">+92 300 1234567</span>
                                </Link>

                                <div className='group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-[var(--dark-from)] to-[var(--dark-to)] border border-[var(--accent)] hover:border-[var(--primary-color)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1'>
                                    <div className="w-10 h-10 rounded-lg bg-[rgba(173,70,255,0.1)] flex items-center justify-center text-[var(--primary-color)] group-hover:scale-110 transition-transform">
                                        <MapPin size={18} />
                                    </div>
                                    <span className="text-[var(--white-color)] text-sm group-hover:text-[var(--primary-color)] transition-colors">Lahore, Pakistan</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;