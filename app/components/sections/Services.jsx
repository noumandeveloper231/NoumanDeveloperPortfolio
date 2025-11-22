import React from 'react';
import { Code, Smartphone, Palette, Globe, ShoppingCart, Wrench } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description: "Building responsive, high-performance websites using modern technologies like React, Next.js, and TailwindCSS.",
    icon: <Code size={40} />,
    delay: "0"
  },
  {
    id: 2,
    title: "App Development",
    description: "Creating cross-platform mobile applications that provide seamless user experiences on both iOS and Android.",
    icon: <Smartphone size={40} />,
    delay: "100"
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Designing intuitive and visually appealing user interfaces that enhance user engagement and satisfaction.",
    icon: <Palette size={40} />,
    delay: "200"
  },
  {
    id: 4,
    title: "SEO Optimization",
    description: "Optimizing your website to rank higher on search engines, driving more organic traffic to your business.",
    icon: <Globe size={40} />,
    delay: "300"
  },
  {
    id: 5,
    title: "E-commerce Solutions",
    description: "Building robust online stores with secure payment gateways and easy-to-manage product catalogs.",
    icon: <ShoppingCart size={40} />,
    delay: "400"
  },
  {
    id: 6,
    title: "Maintenance & Support",
    description: "Providing ongoing support and updates to ensure your website or app remains secure and up-to-date.",
    icon: <Wrench size={40} />,
    delay: "500"
  }
];

const Services = () => {
  return (
    <div className="py-10 flex flex-col items-center">
      <div className="overflow-y-hidden w-full text-center ">
        <h1 data-aos="fade-up" className="font-medium  text-5xl md:text-6xl">
          My Services
        </h1>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {servicesData.map((service) => (
          <div
            key={service.id}
            data-aos="fade-up"
            data-aos-delay={service.delay}
            className="group relative p-8 rounded-2xl bg-gradient-to-br from-[var(--dark-from)] to-[var(--dark-to)] border border-[var(--accent)] hover:border-[var(--primary-color)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[rgba(173,70,255,0.1)] overflow-hidden"
          >
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col gap-4">
              <div className="w-16 h-16 rounded-xl bg-[rgba(173,70,255,0.1)] flex items-center justify-center text-[var(--primary-color)] group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-[var(--white-color)] font-oswald tracking-wide">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed group-hover:text-[var(--white-color)] transition-all">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
