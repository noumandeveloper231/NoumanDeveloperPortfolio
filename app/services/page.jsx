import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaSearch, FaRocket, FaCogs, FaCheckCircle } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="min-h-screen text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute bottom-0 left-[20%] w-[30%] h-[30%] bg-[var(--primary-color)] rounded-full blur-[100px] opacity-10 animate-pulse"></div>
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold font-oswald mb-6 tracking-wide"
          data-aos="fade-down"
        >
          WHAT I <span className="font-oswald tracking-wide text-[var(--primary-color)]">OFFER</span>
        </h1>
        <p
          className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I help businesses and individuals bring their ideas to life with cutting-edge technology and pixel-perfect design.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: FaLaptopCode,
              title: "Web Development",
              desc: "Custom websites built with modern frameworks like React and Next.js. Fast, SEO-friendly, and responsive.",
              delay: 0
            },
            {
              icon: FaMobileAlt,
              title: "App Development",
              desc: "Native and cross-platform mobile applications that provide seamless user experiences on iOS and Android.",
              delay: 100
            },
            {
              icon: FaPaintBrush,
              title: "UI/UX Design",
              desc: "Intuitive and aesthetically pleasing interfaces designed with the user in mind. Wireframing to high-fidelity prototypes.",
              delay: 200
            },
            {
              icon: FaSearch,
              title: "SEO Optimization",
              desc: "Improving your website's visibility on search engines to drive organic traffic and grow your business.",
              delay: 300
            },
            {
              icon: FaCogs,
              title: "Maintenance",
              desc: "Ongoing support and updates to keep your software running smoothly and securely.",
              delay: 400
            },
            {
              icon: FaRocket,
              title: "Performance Tuning",
              desc: "Optimizing code and assets to ensure your application loads instantly and performs flawlessly.",
              delay: 500
            }
          ].map((service, index) => (
            <div
              key={index}
              className="group relative bg-[var(--secondary-color)]/50 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-[var(--primary-color)] transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={service.delay}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--primary-color)] rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>

              <service.icon className="text-5xl text-[var(--primary-color)] mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold font-oswald mb-4 relative z-10">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Workflow */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[var(--dark-from)]/30">
        <h2
          className="text-4xl md:text-5xl font-oswald font-bold text-center mb-16"
          data-aos="fade-up"
        >
          My <span className="text-[var(--primary-color)]">Workflow</span>
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Discover", desc: "Understanding your goals and requirements." },
            { step: "02", title: "Design", desc: "Creating visual prototypes and architecture." },
            { step: "03", title: "Develop", desc: "Writing clean, efficient, and scalable code." },
            { step: "04", title: "Deliver", desc: "Testing, launching, and post-launch support." }
          ].map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="w-16 h-16 rounded-full bg-[var(--secondary-color)] border-2 border-[var(--primary-color)] flex items-center justify-center text-xl font-bold mb-6 relative z-10">
                {item.step}
              </div>
              {/* Connector Line (Desktop only) */}
              {index < 3 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-gradient-to-r from-[var(--primary-color)] to-transparent -z-0"></div>
              )}

              <h3 className="text-xl font-bold font-oswald mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 text-center">
        <div
          className="max-w-4xl mx-auto bg-gradient-to-r from-[var(--primary-color)]/20 to-[var(--primary-2)]/20 p-12 rounded-3xl border border-[var(--primary-color)]/30"
          data-aos="zoom-in"
        >
          <h2 className="text-3xl md:text-5xl font-oswald font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate to build something amazing. I'm currently available for freelance projects.
          </p>
          <a
            href="/contact"
            className="inline-block py-3 px-8 bg-[var(--primary-color)] hover:bg-[#9030e0] text-white font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-[var(--primary-color)]/30"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
