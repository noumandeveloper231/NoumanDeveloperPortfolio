import React from 'react';
import { FaCode, FaLaptopCode, FaServer, FaMobileAlt, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center min-h-[60vh]">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--primary-color)] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[var(--primary-2)] rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold font-oswald mb-6 tracking-wide"
          data-aos="fade-down"
        >
          ABOUT <span className="font-oswald tracking-wide text-[var(--primary-color)]">ME</span>
        </h1>
        <p
          className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I'm a passionate developer who bridges the gap between functional code and beautiful design.
          My journey is fueled by coffee, curiosity, and a drive to build things that matter.
        </p>
      </section>

      {/* Personal Story & Bio */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-[var(--dark-from)]/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-oswald font-bold mb-6 border-l-4 border-[var(--primary-color)] pl-4">
              My Story
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              It all started with a simple "Hello World" and evolved into a full-blown obsession with creating digital experiences.
              I specialize in building scalable web applications that not only work perfectly but also look stunning.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new tech trends, contributing to open source, or gaming.
              I believe in continuous learning and pushing the boundaries of what's possible on the web.
            </p>
          </div>
          <div className="relative" data-aos="fade-left">
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-[var(--primary-color)]/30 relative group">
              {/* Placeholder for user image - using a gradient/pattern for now if no image provided */}
              <div className="w-full h-full bg-gradient-to-br from-[var(--primary-color)] to-black opacity-80 group-hover:scale-105 transition-transform duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <FaLaptopCode className="text-9xl text-white/20" />
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[var(--primary-color)] rounded-full blur-xl opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <h2
          className="text-4xl md:text-5xl font-oswald font-bold text-center mb-16"
          data-aos="fade-up"
        >
          Technical <span className="font-oswald text-[var(--primary-color)]">Arsenal</span>
        </h2>

        <div className="flex flex-wrap w-full gap-8 max-w-7xl mx-auto">
          {[
            { icon: FaCode, title: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"] },
            { icon: FaServer, title: "Backend", skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
            // { icon: FaMobileAlt, title: "Mobile", skills: ["React Native", "Expo", "Android", "iOS"] },
            { icon: FaLaptopCode, title: "Tools", skills: ["Git", "SMTP", "VS Code", "Figma"] }
          ].map((category, index) => (
            <div
              key={index}
              className="whitespace-nowrap flex-1 bg-[var(--secondary-color)] p-8 rounded-xl border border-white/5 hover:border-[var(--primary-color)]/50 transition-all duration-300 hover:-translate-y-2 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <category.icon className="text-4xl text-[var(--primary-color)] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold font-oswald mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center text-gray-400">
                    <span className="w-2 h-2 bg-[var(--primary-color)] rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience & Education Timeline */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[var(--dark-from)]/30">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-oswald font-bold text-center mb-16"
            data-aos="fade-up"
          >
            My <span className="font-oswald text-[var(--primary-color)]">Journey</span>
          </h2>

          <div className="relative border-l-2 border-[var(--primary-color)]/30 ml-4 md:ml-0 space-y-12">
            {[
              {
                year: "2023 - Present",
                title: "Senior Full Stack Developer",
                company: "Tech Solutions Inc.",
                desc: "Leading a team of developers to build scalable web applications using Next.js and AWS.",
                icon: FaBriefcase
              },
              {
                year: "2021 - 2023",
                title: "Frontend Developer",
                company: "Creative Agency",
                desc: "Developed award-winning websites with heavy focus on animations and user interaction.",
                icon: FaBriefcase
              },
              {
                year: "2017 - 2021",
                title: "Computer Science Degree",
                company: "University of Technology",
                desc: "Graduated with honors, specializing in Software Engineering and AI.",
                icon: FaGraduationCap
              }
            ].map((item, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-0"
                data-aos="fade-up"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] top-0 w-5 h-5 rounded-full bg-[var(--primary-color)] border-4 border-[#1f1f1f]"></div>

                <div className={`md:flex items-start justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                  <div className="md:w-[45%] mb-2 md:mb-0"></div> {/* Spacer */}
                  <div className="md:w-[45%] bg-[var(--secondary-color)] p-6 rounded-xl border border-white/5 hover:border-[var(--primary-color)]/50 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[var(--primary-color)] font-bold text-sm tracking-widest">{item.year}</span>
                      <item.icon className="text-gray-500" />
                    </div>
                    <h3 className="text-xl font-bold font-oswald mb-1 group-hover:text-[var(--primary-color)] transition-colors">{item.title}</h3>
                    <h4 className="text-gray-400 text-sm mb-4">{item.company}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
