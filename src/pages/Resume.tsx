import React from 'react';
import Section from '../components/Section';
import { useLanguage } from '../context/LanguageContext';

const Resume: React.FC = () => {
  const { t } = useLanguage();

  const education = [
    {
      school: 'University of Technology',
      degree: 'Bachelor of Software Engineering',
      year: '2018 - 2022',
      lines: [
        'Major: Software Engineering, Distributed Systems',
      ],
    },
  ];

  const experience = [
    {
      company: 'Tech Startup Inc.',
      role: 'Full Stack Developer',
      year: '2022 - Present',
      lines: [
        'Built scalable microservices using Go and gRPC.',
        'Migrated legacy frontend to React/TypeScript, improving load time by 40%.',
        'Implemented CI/CD pipelines with GitHub Actions.',
      ],
    },
    {
      company: 'Freelance',
      role: 'Web Developer',
      year: '2020 - 2022',
      lines: [
        'Developed custom e-commerce solutions for local businesses.',
        'Specialized in MERN stack applications.',
      ],
    },
  ];

  const skills = [
    {
      category: 'Languages',
      items: 'TypeScript, Go, Python, SQL',
    },
    {
      category: 'Frontend',
      items: 'React, Next.js, TailwindCSS',
    },
    {
      category: 'Backend',
      items:
        'Node.js, Fiber (Go), PostgreSQL, Redis',
    },
    {
      category: 'DevOps',
      items: 'Docker, AWS (EC2, S3, Lambda), Git',
    },
  ];

  return (
    <div className="pt-8 pb-20 max-w-4xl mx-auto px-4 sm:px-6 font-mono text-sm md:text-base text-stone-700 dark:text-stone-300">
      {/* Header */}
      <Section>
        <div className="mb-16">
          <h1 className="text-3xl font-bold text-ink dark:text-stone-100 mb-2">
            Quoc Anh
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-stone-500 dark:text-stone-400">
            <span>Software Engineer</span>
            <span className="hidden md:inline">
              •
            </span>
            <a
              href="mailto:contact@email.com"
              className="hover:text-cinnabar transition-colors"
            >
              contact@email.com
            </a>
            <span className="hidden md:inline">
              •
            </span>
            <a
              href="https://github.com/cyhinverse"
              className="hover:text-cinnabar transition-colors"
            >
              github.com/cyhinverse
            </a>
          </div>
        </div>
      </Section>

      {/* 01 EXPERIENCE */}
      <Section delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="text- cinnabar dark:text-cinnabar-light font-bold tracking-widest text-xs uppercase mb-4 sticky top-24">
              01 : EXPERIENCE
            </h2>
          </div>
          <div className="md:col-span-8 lg:col-span-9 space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="group">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h3 className="font-bold text-ink dark:text-stone-100 text-lg">
                    {job.company}
                  </h3>
                  <span className="text-xs text-stone-400 font-bold mt-1 sm:mt-0">
                    {job.year}
                  </span>
                </div>
                <div className="text-stone-500 dark:text-stone-400 mb-3 font-semibold text-xs uppercase tracking-wider">
                  {job.role}
                </div>
                <ul className="space-y-2">
                  {job.lines.map((line, i) => (
                    <li
                      key={i}
                      className="leading-relaxed opacity-90"
                    >
                      - {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 02 EDUCATION */}
      <Section delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="text-cinnabar dark:text-cinnabar-light font-bold tracking-widest text-xs uppercase mb-4 sticky top-24">
              02 : EDUCATION
            </h2>
          </div>
          <div className="md:col-span-8 lg:col-span-9 space-y-12">
            {education.map((edu, index) => (
              <div key={index}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h3 className="font-bold text-ink dark:text-stone-100 text-lg">
                    {edu.school}
                  </h3>
                  <span className="text-xs text-stone-400 font-bold mt-1 sm:mt-0">
                    {edu.year}
                  </span>
                </div>
                <div className="text-stone-500 dark:text-stone-400 mb-3 font-semibold text-xs uppercase tracking-wider">
                  {edu.degree}
                </div>
                <ul className="space-y-2">
                  {edu.lines.map((line, i) => (
                    <li
                      key={i}
                      className="leading-relaxed opacity-90"
                    >
                      - {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 03 SKILLS */}
      <Section delay={0.3}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="text-cinnabar dark:text-cinnabar-light font-bold tracking-widest text-xs uppercase mb-4 sticky top-24">
              03 : SKILLS
            </h2>
          </div>
          <div className="md:col-span-8 lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <h4 className="font-bold text-ink dark:text-stone-100 mb-2 text-sm uppercase">
                    {skill.category}
                  </h4>
                  <p className="leading-relaxed opacity-90">
                    {skill.items}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Resume;
