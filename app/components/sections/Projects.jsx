import assets from "@/app/assets/assets"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

const Projects = () => {
  return (
    <div className="h-screen">
      <div className="overflow-y-hidden w-full text-center ">
        <h1 data-aos="fade-up" className="font-medium  text-5xl md:text-6xl">
          My Projects
        </h1>
      </div>
      <div className="grid grid-rows-3 grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-4 text-center text-white font-bold h-[calc(100vh-7rem)] mt-6">
        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 col-span-2 md:col-span-3">
          {/* Project Image */}
          <Image
            alt="Project 1"
            src={assets.hero_right}
            className="w-full h-full object-cover transition-transform group-hover:blur-[2px] duration-500 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-end items-start p-4 z-10">
            {/* Title - always visible */}
            <h1 className="text-2xl md:text-3xl font-semibold transition-transform duration-500 translate-y-18 group-hover:-translate-y-0 before:content-[''] before:absolute relative before:h-0 group-hover:before:h-1/2 before:transition-all before:w-full before:bg-[var(--primary-color)] before:bottom-0 z-10 before:-z-1 px-3 mix-blend-difference text-white">
              E-<span className="text-[var(--primary-2)] group-hover:text-white font-oswald transition-all">Commerce</span>
            </h1>

            {/* Badges - show on hover */}
            <div className="flex flex-wrap gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-xs px-2 py-1 border border-primary rounded bg-primary/20">
                MongoDB
              </span>
              <span className="text-xs px-2 py-1 border border-primary rounded bg-primary/20">
                Next.js
              </span>
              <span className="text-xs px-2 py-1 border border-primary rounded bg-primary/20">
                Node.js
              </span>
            </div>

            {/* Description - show on hover */}
            <p className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center w-full justify-between pr-4">
              <span>
                Hello, I am an E-Commerce Store
              </span>
              <ArrowUpRight size={30} className="text-[var(--primary-color)]" />
            </p>
          </div>
        </div>


        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 col-span-2 md:col-span-7">
          <Image
            alt="Project 1"
            src={assets.hero_right}
            className="w-full h-full object-cover transition-transform group-hover:blur-[2px] duration-500 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-end items-start p-4 z-10">
            {/* Title - always visible */}
            <h1 className="text-2xl md:text-3xl font-semibold transition-transform duration-500 translate-y-18 group-hover:-translate-y-0 before:content-[''] before:absolute relative before:h-0 group-hover:before:h-1/2 before:transition-all before:w-full before:bg-[var(--primary-color)] before:bottom-0 z-10 before:-z-1 px-3 mix-blend-difference text-white">
              E-<span className="text-[var(--primary-2)] group-hover:text-white font-oswald transition-all">Commerce</span>
            </h1>

            {/* Badges - show on hover */}
            <div className="flex flex-wrap gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-xs px-2 py-1 border border-primary rounded bg-primary/20">
                MongoDB
              </span>
              <span className="text-xs px-2 py-1 border border-primary rounded bg-primary/20">
                Next.js
              </span>
              <span className="text-xs px-2 py-1 border border-primary rounded bg-primary/20">
                Node.js
              </span>
            </div>

            {/* Description - show on hover */}
            <p className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center w-full justify-between pr-4">
              <span>
                Hello, I am an E-Commerce Store
              </span>
              <ArrowUpRight size={30} className="text-[var(--primary-color)]" />
            </p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 md:col-span-2">
          <Image
            alt="Project 1"
            src={assets.hero_right}
            className="w-full h-full object-cover transition-transform group-hover:blur-[2px] duration-500 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-end items-start p-4 z-10">
            {/* Title - always visible */}
            <h1 className="text-2xl md:text-3xl font-semibold transition-transform duration-500 translate-y-18 group-hover:-translate-y-0 before:content-[''] before:absolute relative before:h-0 group-hover:before:h-1/2 before:transition-all before:w-full before:bg-[var(--primary-color)] before:bottom-0 z-10 before:-z-1 px-3 mix-blend-difference text-white">
              E-<span className="text-[var(--primary-2)] group-hover:text-white font-oswald transition-all">Commerce</span>
            </h1>

            {/* Badges - show on hover */}
            <div className="flex flex-wrap gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-xs px-2 py-1 border border-primary rounded bg-primary/20">
                MongoDB
              </span>
              <span className="text-xs px-2 py-1 border border-primary rounded bg-primary/20">
                Next.js
              </span>
              <span className="text-xs px-2 py-1 border border-primary rounded bg-primary/20">
                Node.js
              </span>
            </div>

            {/* Description - show on hover */}
            <p className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center w-full justify-between pr-4">
              <span>
                Hello, I am an E-Commerce Store
              </span>
              <ArrowUpRight size={30} className="text-[var(--primary-color)]" />
            </p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 col-span-1 md:col-span-3">
          \<Image
            alt="Project 1"
            src={assets.hero_right}
            className="w-full h-full object-cover transition-transform group-hover:blur-[2px] duration-500 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-end items-start p-4 z-10">
            {/* Title - always visible */}
            <h1 className="text-2xl md:text-3xl font-semibold transition-transform duration-500 translate-y-18 group-hover:-translate-y-0 before:content-[''] before:absolute relative before:h-0 group-hover:before:h-1/2 before:transition-all before:w-full before:bg-[var(--primary-color)] before:bottom-0 z-10 before:-z-1 px-3 mix-blend-difference text-white">
              E-<span className="text-[var(--primary-2)] group-hover:text-white font-oswald transition-all">Commerce</span>
            </h1>

            {/* Badges - show on hover */}
            <div className="flex flex-wrap gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-xs px-2 py-1 border border-primary rounded bg-primary/20">
                MongoDB
              </span>
              <span className="text-xs px-2 py-1 border border-primary rounded bg-primary/20">
                Next.js
              </span>
              <span className="text-xs px-2 py-1 border border-primary rounded bg-primary/20">
                Node.js
              </span>
            </div>

            {/* Description - show on hover */}
            <p className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center w-full justify-between pr-4">
              <span>
                Hello, I am an E-Commerce Store
              </span>
              <ArrowUpRight size={30} className="text-[var(--primary-color)]" />
            </p>
          </div>
        </div>
        <div className="col-span-2 md:col-span-5 group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
          <Image
            alt="Project 1"
            src={assets.hero_right}
            className="w-full h-full object-cover transition-transform group-hover:blur-[2px] duration-500 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-end items-start p-4 z-10">
            {/* Title - always visible */}
            <h1 className="text-2xl md:text-3xl font-semibold transition-transform duration-500 translate-y-18 group-hover:-translate-y-0 before:content-[''] before:absolute relative before:h-0 group-hover:before:h-1/2 before:transition-all before:w-full before:bg-[var(--primary-color)] before:bottom-0 z-10 before:-z-1 px-3 mix-blend-difference text-white">
              E-<span className="text-[var(--primary-2)] group-hover:text-white font-oswald transition-all">Commerce</span>
            </h1>

            {/* Badges - show on hover */}
            <div className="flex flex-wrap gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-xs px-2 py-1 border border-primary rounded bg-primary/20">
                MongoDB
              </span>
              <span className="text-xs px-2 py-1 border border-primary rounded bg-primary/20">
                Next.js
              </span>
              <span className="text-xs px-2 py-1 border border-primary rounded bg-primary/20">
                Node.js
              </span>
            </div>

            {/* Description - show on hover */}
            <p className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center w-full justify-between pr-4">
              <span>
                Hello, I am an E-Commerce Store
              </span>
              <ArrowUpRight size={30} className="text-[var(--primary-color)]" />
            </p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-green-500 col-span-1 md:col-span-2">
          <Image
            alt="Project 1"
            src={assets.hero_right}
            className="w-full h-full object-cover transition-transform group-hover:blur-[2px] duration-500 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-end items-start p-4 z-10">
            {/* Title - always visible */}
            <h1 className="text-2xl md:text-3xl font-semibold transition-transform duration-500 translate-y-18 group-hover:-translate-y-0 before:content-[''] before:absolute relative before:h-0 group-hover:before:h-1/2 before:transition-all before:w-full before:bg-[var(--primary-color)] before:bottom-0 z-10 before:-z-1 px-3 mix-blend-difference text-white">
              E-<span className="text-[var(--primary-2)] group-hover:text-white font-oswald transition-all">Commerce</span>
            </h1>

            {/* Badges - show on hover */}
            <div className="flex flex-wrap gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-xs px-2 py-1 border border-primary rounded bg-primary/20">
                MongoDB
              </span>
              <span className="text-xs px-2 py-1 border border-primary rounded bg-primary/20">
                Next.js
              </span>
              <span className="text-xs px-2 py-1 border border-primary rounded bg-primary/20">
                Node.js
              </span>
            </div>

            {/* Description - show on hover */}
            <p className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center w-full justify-between pr-4">
              <span>
                Hello, I am an E-Commerce Store
              </span>
              <ArrowUpRight size={30} className="text-[var(--primary-color)]" />
            </p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 col-span-1 md:col-span-4">
          <Image
            alt="Project 1"
            src={assets.hero_right}
            className="w-full h-full object-cover transition-transform group-hover:blur-[2px] duration-500 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-end items-start p-4 z-10">
            {/* Title - always visible */}
            <h1 className="text-2xl md:text-3xl font-semibold transition-transform duration-500 translate-y-18 group-hover:-translate-y-0 before:content-[''] before:absolute relative before:h-0 group-hover:before:h-1/2 before:transition-all before:w-full before:bg-[var(--primary-color)] before:bottom-0 z-10 before:-z-1 px-3 mix-blend-difference text-white">
              E-<span className="text-[var(--primary-2)] group-hover:text-white font-oswald transition-all">Commerce</span>
            </h1>

            {/* Badges - show on hover */}
            <div className="flex flex-wrap gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-xs px-2 py-1 border border-primary rounded bg-primary/20">
                MongoDB
              </span>
              <span className="text-xs px-2 py-1 border border-primary rounded bg-primary/20">
                Next.js
              </span>
              <span className="text-xs px-2 py-1 border border-primary rounded bg-primary/20">
                Node.js
              </span>
            </div>

            {/* Description - show on hover */}
            <p className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center w-full justify-between pr-4">
              <span>
                Hello, I am an E-Commerce Store
              </span>
              <ArrowUpRight size={30} className="text-[var(--primary-color)]" />
            </p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 col-span-1 md:col-span-4">
          <Image
            alt="Project 1"
            src={assets.hero_right}
            className="w-full h-full object-cover transition-transform group-hover:blur-[2px] duration-500 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col justify-end items-start p-4 z-10">
            {/* Title - always visible */}
            <h1 className="text-2xl md:text-3xl font-semibold transition-transform duration-500 translate-y-18 group-hover:-translate-y-0 before:content-[''] before:absolute relative before:h-0 group-hover:before:h-1/2 before:transition-all before:w-full before:bg-[var(--primary-color)] before:bottom-0 z-10 before:-z-1 px-3 mix-blend-difference text-white">
              E-<span className="text-[var(--primary-2)] group-hover:text-white font-oswald transition-all">Commerce</span>
            </h1>

            {/* Badges - show on hover */}
            <div className="flex flex-wrap gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-xs px-2 py-1 border border-primary rounded bg-primary/20">
                MongoDB
              </span>
              <span className="text-xs px-2 py-1 border border-primary rounded bg-primary/20">
                Next.js
              </span>
              <span className="text-xs px-2 py-1 border border-primary rounded bg-primary/20">
                Node.js
              </span>
            </div>

            {/* Description - show on hover */}
            <p className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center w-full justify-between pr-4">
              <span>
                Hello, I am an E-Commerce Store
              </span>
              <ArrowUpRight size={30} className="text-[var(--primary-color)]" />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
