import Link from 'next/link'
import DynamicBar from './DynamicBar'
import { ArrowUpRight } from 'lucide-react'
import Sidebar from './Sidebar'
import ThemeLogo from '../reusable/ThemeLogo'

const Header = () => {
  return (
    <header className='w-full flex justify-between py-4 md:py-8 px-4 md:px-8 items-center'>
      <ThemeLogo />
      <div className='hidden md:block'>
        <DynamicBar />
      </div>
      <div className='md:hidden'>
        <Sidebar />
      </div>
      <Link
        href="/contact"
        className="relative px-4 md:px-5 py-2 md:py-3 flex items-center gap-3 border border-[var(--accent)] rounded-2xl text-[var(--white-color)] bg-[rgba(255,255,255,0.05)] backdrop-blur-sm shadow-md transition-all hover:shadow-xl hover:scale-105 hover:bg-[var(--accent)] hover:text-black"
      >
        Contact Me <ArrowUpRight className="text-[var(--primary-color)] transition-transform group-hover:translate-x-1" />
      </Link>
    </header>
  )
}

export default Header;