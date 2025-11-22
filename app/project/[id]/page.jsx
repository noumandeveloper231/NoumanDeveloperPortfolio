'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Calendar, User, Layers, CheckCircle } from 'lucide-react';

const ProjectDetails = () => {
    const { id } = useParams();
    const router = useRouter();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await fetch('/projects.json');
                const data = await response.json();
                const foundProject = data.find(p => p.id === parseInt(id));

                if (foundProject) {
                    setProject(foundProject);
                } else {
                    // Handle not found
                    console.error('Project not found');
                }
            } catch (error) {
                console.error('Error fetching project:', error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchProject();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen w-full flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[var(--primary-color)]"></div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen w-full flex flex-col items-center justify-center gap-4">
                <h1 className="text-4xl font-bold text-[var(--white-color)]">Project Not Found</h1>
                <button
                    onClick={() => router.back()}
                    className="px-6 py-3 bg-[var(--primary-color)] text-white rounded-xl flex items-center gap-2"
                >
                    <ArrowLeft size={20} /> Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full pt-24 pb-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="mb-8 text-gray-400 hover:text-[var(--primary-color)] flex items-center gap-2 transition-colors group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </button>

                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div data-aos="fade-right" suppressHydrationWarning>
                        <div className="inline-block px-4 py-1 rounded-full border border-[var(--primary-color)] text-[var(--primary-color)] text-sm font-medium mb-4">
                            {project.category}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold font-oswald text-[var(--white-color)] mb-6">
                            {project.title}
                        </h1>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            {project.shortDescription}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href={project.liveLink}
                                className="px-8 py-4 bg-[var(--primary-color)] text-white font-bold rounded-xl hover:bg-[#9630e6] transition-all hover:-translate-y-1 flex items-center gap-2"
                                target='_blank'
                            >
                                View Live <ExternalLink size={20} />
                            </Link>
                            <Link
                                href={`/contact?subject=Request Code for ${project.title} (ID: ${project.id})`}
                                className="px-8 py-4 bg-white text-[var(--primary-color)] font-bold rounded-xl hover:bg-[var(--primary-color)] hover:text-white transition-all hover:-translate-y-1 flex items-center gap-2"
                            >
                                Request Code <Github size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Project Info Cards */}
                    <div className="grid grid-cols-2 gap-4" data-aos="fade-left" suppressHydrationWarning>
                        <div className="bg-gradient-to-br from-[var(--bg-dark)] to-[var(--accent)] p-6 rounded-2xl border border-[var(--accent)]">
                            <Calendar className="text-[var(--primary-color)] mb-4" size={32} />
                            <h3 className="text-gray-400 text-sm mb-1">Date</h3>
                            <p className="text-[var(--white-color)] font-medium">{project.date || '2023'}</p>
                        </div>
                        <div className="bg-gradient-to-br from-[var(--bg-dark)] to-[var(--accent)] p-6 rounded-2xl border border-[var(--accent)]">
                            <User className="text-[var(--primary-color)] mb-4" size={32} />
                            <h3 className="text-gray-400 text-sm mb-1">Client</h3>
                            <p className="text-[var(--white-color)] font-medium">{project.client || 'Personal'}</p>
                        </div>
                        <div className="bg-gradient-to-br from-[var(--bg-dark)] to-[var(--accent)] p-6 rounded-2xl border border-[var(--accent)] col-span-2">
                            <Layers className="text-[var(--primary-color)] mb-4" size={32} />
                            <h3 className="text-gray-400 text-sm mb-3">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 bg-[var(--bg-dark)] text-[var(--white-color)] rounded-lg text-sm border border-[var(--accent)]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery Section */}
                <div className="mb-20" data-aos="fade-up" suppressHydrationWarning>
                    <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden mb-4 border border-[var(--accent)]">
                        <Image
                            src={project.gallery ? project.gallery[activeImage] : project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    {project.gallery && project.gallery.length > 1 && (
                        <div className="flex gap-4 overflow-x-auto pb-4">
                            {project.gallery.map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() => setActiveImage(index)}
                                    className={`relative h-24 w-36 flex-shrink-0 rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${activeImage === index ? 'border-[var(--primary-color)]' : 'border-transparent opacity-60 hover:opacity-100'
                                        }`}
                                >
                                    <Image
                                        src={img}
                                        alt={`Gallery ${index}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Description */}
                    <div className="lg:col-span-2 space-y-8" data-aos="fade-up" suppressHydrationWarning>
                        <div>
                            <h2 className="text-3xl font-bold font-oswald text-[var(--white-color)] mb-6">
                                Project Overview
                            </h2>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                {project.fullDescription}
                            </p>
                        </div>

                        {project.video && (
                            <div className="rounded-2xl overflow-hidden border border-[var(--accent)] aspect-video">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={project.video}
                                    title="Project Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
                    </div>

                    {/* Features List */}
                    <div data-aos="fade-left" suppressHydrationWarning>
                        <div className="bg-gradient-to-br from-[var(--dark-from)] to-[var(--dark-to)] p-8 rounded-3xl border border-[var(--accent)] sticky top-24">
                            <h3 className="text-2xl font-bold font-oswald text-[var(--white-color)] mb-6">
                                Key Features
                            </h3>
                            <ul className="space-y-4">
                                {project.features && project.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300">
                                        <CheckCircle className="text-[var(--primary-color)] flex-shrink-0 mt-1" size={20} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
