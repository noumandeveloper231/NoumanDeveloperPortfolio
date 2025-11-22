'use client';
import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, ArrowUpRight, Code } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const categories = ['All', 'Web App', 'Mobile App', 'Website', 'UI/UX'];

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

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[var(--primary-color)]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full pt-24 pb-20 px-4 md:px-8">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(173,70,255,0.1)] border border-[var(--primary-color)] text-[var(--primary-color)] text-sm font-medium mb-6" data-aos="fade-down">
          <Code size={16} />
          <span>My Portfolio</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold font-oswald text-[var(--white-color)] mb-6" data-aos="fade-up">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-white">Projects</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          Explore a collection of my recent work, ranging from complex web applications to beautiful websites. Each project represents a unique challenge and a creative solution.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto mb-12 flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
        {categories.map((cat) => (
          <span
            key={cat}
            onClick={() => setFilter(cat)}
            className={`cursor-pointer px-6 py-2 rounded-full border transition-all duration-300 ${filter === cat
                ? 'bg-[var(--primary-color)] border-[var(--primary-color)] text-white shadow-[0_0_15px_rgba(173,70,255,0.4)]'
                : 'bg-transparent border-[var(--accent)] text-gray-400 hover:border-[var(--primary-color)] hover:text-white'
              }`}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            onClick={() => router.push(`/project/${project.id}`)}
            title='View Details'
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="group relative bg-[#1a1a1a] rounded-2xl border border-[var(--accent)] overflow-hidden hover:border-[var(--primary-color)] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative h-60 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent z-10 opacity-60" />
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Links */}
              <div className="absolute inset-0 bg-black/60 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                <Link
                  href={project.liveLink}
                  onClick={(e) => e.stopPropagation()}
                  className="p-3 rounded-full bg-[var(--primary-color)] text-white hover:scale-110 transition-transform shadow-lg"
                  title="View Live"
                >
                  <ExternalLink size={24} />
                </Link>
                <Link
                  href={project.githubLink}
                  onClick={(e) => e.stopPropagation()}
                  className="p-3 rounded-full bg-white text-[var(--primary-color)] hover:scale-110 transition-transform shadow-lg"
                  title="View Code"
                >
                  <Github size={24} />
                </Link>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-lg bg-black/50 backdrop-blur-md border border-[var(--accent)] text-xs font-medium text-white">
                {project.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold font-oswald text-[var(--white-color)] mb-3 group-hover:text-[var(--primary-color)] transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mt-2 mb-6 line-clamp-3">
                {project.shortDescription}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-md bg-[#242424] text-gray-300 border border-[var(--accent)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto mt-24 text-center bg-gradient-to-br from-[var(--dark-from)] to-[var(--dark-to)] p-12 rounded-3xl border border-[var(--accent)] relative overflow-hidden" data-aos="zoom-in">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary-color)] opacity-10 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--white-color)] opacity-5 blur-[80px] rounded-full pointer-events-none"></div>

        <h2 className="text-3xl md:text-4xl font-bold font-oswald text-[var(--white-color)] mb-6">
          Have a Project in Mind?
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <Link href="/contact">
          <button className="px-8 py-4 bg-[var(--primary-color)] text-white font-bold rounded-xl hover:bg-[#9630e6] transition-all hover:shadow-[0_0_20px_rgba(173,70,255,0.4)] hover:-translate-y-1 flex items-center gap-2 mx-auto">
            Start a Project <ArrowUpRight size={20} />
          </button>
        </Link>
      </div>

    </div>
  );
};

export default Projects;