import React from 'react'
import assets from '../../assets/assets'
import { MailIcon, PhoneIcon, MapPin, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const AboutMe = () => {
    return (
        <section className="px-8 py-10 mt-10 md:mt-15 lg:mt-20">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className='flex flex-col justify-center gap-8 md:gap-12 lg:gap-16 '>
                    <div>
                        <div className="overflow-y-hidden w-full">
                            <h1 data-aos="fade-up" className="font-medium text-center lg:text-left text-5xl md:text-6xl">
                                The Developer
                            </h1>
                        </div>
                        <div className="overflow-y-hidden w-full">
                            <h1 data-aos="fade-up" className="font-medium text-center lg:text-left text-5xl md:text-6xl">
                                Behind the Vision
                            </h1>
                        </div>
                    </div>
                    <button className='w-50 hidden md:flex items-center gap-3 justify-center'>
                        Want To know Me <ChevronRight size={15} />
                    </button>
                </div>
                <div data-aos="fade-left" className='flex justify-center'>
                    <div className='rounded-4xl shadow-lg mt-1 bg-gradient-to-br from-[var(--dark-from)] to-[var(--dark-to)] h-full border border-[var(--accent)] border-t-white border-t-4 p-8 px-14 flex flex-col items-center gap-6'>
                        <Image src={assets.hero_right} className="rounded-full w-30 h-30 border-4" width={300} height={300} alt='Hero Image' />
                        <div className='text-center'>
                            <h3 className='font-bold'>
                                Nouman Tariq
                            </h3>
                            <h4>
                                AI Website Developer
                            </h4>
                        </div>
                        <Link href='mailto:nt50616849@gmail.com' className='hover:shadow-xl hover:border-transparent hover:-translate-y-1 cursor-pointer transition-all hover:bg-whiteover:text-black hover:shadow-[#e8e4e458] bg-[var(--bg)] py-2 px-6 border border-[var(--accent)] flex items-center gap-4 rounded-xl w-full text-[var(--white-color)]'>
                            <MailIcon size={15} /> nt50616849@gmail.com
                        </Link>
                        <Link href='tel:+923286960243' className='hover:shadow-xl hover:border-transparent hover:-translate-y-1 cursor-pointer transition-all hover:bg-white hover:text-black hover:shadow-[#e8e4e458] bg-[var(--bg)] py-2 px-6 border border-[var(--accent)] flex items-center gap-4 rounded-xl w-full text-[var(--white-color)]'>
                            <PhoneIcon size={15} /> +92 (328) 6960 243
                        </Link>
                        <Link href='#' className='hover:shadow-xl hover:border-transparent hover:-translate-y-1 cursor-pointer transition-all hover:bg-white hover:text-black hover:shadow-[#e8e4e458] bg-[var(--bg)] py-2 px-6 border border-[var(--accent)] flex items-center gap-4 rounded-xl w-full text-[var(--white-color)]'>
                            <MapPin size={15} /> Lahore, Punjab, Pakistan
                        </Link>
                    </div>
                </div>
            </div>  
        </section>
    )
}

export default AboutMe