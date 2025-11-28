'use client'
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/projects.json');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);
  console.log(projects)
  return (
    <div className="h-screen">
      <div className="overflow-y-hidden w-full text-center ">
        <h1 data-aos="fade-up" className="font-medium  text-5xl md:text-6xl">
          My Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center text-white font-bold h-[calc(100vh-7rem)] mt-6">
        {
          projects.slice(0,9).map((project) => {
            return (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[16/9]`}
              >

                {/* Project Image */}
                <Image
                  alt="Project 1"
                  src={project.image}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover transition-transform group-hover:blur-[2px] duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col justify-end items-start p-4 z-10">
                  {/* Title - unchanged */}
                  <h1 className="text-2xl md:text-3xl font-semibold transition-transform duration-500 translate-y-18 group-hover:-translate-y-0 before:content-[''] before:absolute relative before:h-0 group-hover:before:h-1/2 before:transition-all before:w-full before:bg-[var(--primary-color)] before:bottom-0 z-10 before:-z-1 px-3 mix-blend-difference text-white">
                    <span className="text-[var(--primary-2)] group-hover:text-white font-oswald transition-all">
                      {project.title}
                    </span>
                  </h1>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 border border-primary rounded bg-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center w-full justify-between pr-4">
                    <span>{project.shortDescription.slice(0, 50)}</span>
                    <ArrowUpRight size={30} className="text-[var(--primary-color)]" />
                  </p>
                </div>
              </div>
            );
          })
        }

      </div>
    </div>
  )
}

export default Projects
