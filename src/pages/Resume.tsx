import React from 'react';
import {
  Mail,
  Github,
  Linkedin,
  Globe,
  Phone,
  Briefcase,
} from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <div className="py-12 flex justify-center bg-transparent">
      {/* The main paper-like container */}
      <div className="w-full rounded-xl max-w-[900px] bg-white dark:bg-stone-900 shadow-none border border-stone-200 dark:border-white/10 p-[1.4cm] font-[Times_New_Roman,Times,serif] text-black dark:text-stone-300 leading-tight selection:bg-stone-200">
        {/* ---------- HEADING ---------- */}
        <section className="text-center mb-6">
          <h1
            className="text-[22pt] mb-2"
            style={{ fontVariant: 'small-caps' }}
          >
            Tran Phan Quoc Anh
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-[9pt]">
            <div className="flex items-center gap-1 leading-none">
              <Phone
                size={10}
                className="mb-0.5"
              />
              <span className="underline underline-offset-2">
                (+84) 397-335-819
              </span>
            </div>

            <a
              href="mailto:cyhincdr@gmail.com"
              className="flex items-center gap-1 leading-none hover:text-cinnabar transition-colors"
            >
              <Mail
                size={10}
                className="mb-0.5"
              />
              <span className="underline underline-offset-2">
                cyhincdr@gmail.com
              </span>
            </a>

            <a
              href="https://linkedin.com/in/tranphanquocanh"
              className="flex items-center gap-1 leading-none hover:text-cinnabar transition-colors"
            >
              <Linkedin
                size={10}
                className="mb-0.5"
              />
              <span className="underline underline-offset-2">
                linkedin.com/in/tranphanquocanh
              </span>
            </a>

            <a
              href="https://github.com/cyhinverse"
              className="flex items-center gap-1 leading-none hover:text-cinnabar transition-colors"
            >
              <Github
                size={10}
                className="mb-0.5"
              />
              <span className="underline underline-offset-2">
                github.com/cyhinverse
              </span>
            </a>

            <a
              href="https://cyhin.engineer"
              className="flex items-center gap-1 leading-none hover:text-cinnabar transition-colors"
            >
              <Briefcase
                size={10}
                className="mb-0.5"
              />
              <span className="underline underline-offset-2">
                {' '}
                cyhin.engineer
              </span>
            </a>
          </div>
        </section>

        {/* ----------- EDUCATION ----------- */}
        <section className="mb-5">
          <h2
            className="text-[12pt] font-bold border-b border-black dark:border-white mb-2 pb-0.5 tracking-tight"
            style={{ fontVariant: 'small-caps' }}
          >
            Education
          </h2>
          <div className="mb-2">
            <div className="flex justify-between items-baseline mb-0">
              <span className="font-bold text-[11pt]">
                University
              </span>
              <span className="font-bold text-[10pt]">
                Expected Graduation: May 2026
              </span>
            </div>
            <div className="flex justify-between items-baseline italic text-[10pt] mb-1">
              <span>
                Bachelor of Information Technology
                (Software Engineering) - HUTECH
                University
              </span>
              <span>Ho Chi Minh City</span>
            </div>
            <ul className="list-none space-y-1">
              <li className="flex text-[10pt] leading-snug">
                <span className="mr-2 text-[6pt] mt-1.5">
                  •
                </span>
                <span>
                  <span className="font-bold text-[10pt]">
                    Courses:
                  </span>{' '}
                  Data Structures Algorithms,
                  Database Systems, Computer
                  Networks, Operating Systems,
                  Software Engineering, Web
                  Development, Object-Oriented
                  Programming, Applied Machine
                  Learning
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-5">
          <h2
            className="text-[12pt] font-bold border-b border-black dark:border-white mb-2 pb-0.5 tracking-tight"
            style={{ fontVariant: 'small-caps' }}
          >
            Engineering Experience
          </h2>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <div className="text-[10pt]">
                  <span className="font-bold">
                    E-commerce Core API
                  </span>
                  <span className="mx-1">|</span>
                  <span className="italic">
                    Website | Source Code
                  </span>
                </div>
                <span className="font-bold text-[10pt]">
                  NextJs | NodeJs | MongoDB |
                  Redis | RabbitMQ
                </span>
              </div>
              <ul className="list-none space-y-0.5">
                <li className="flex text-[10pt] leading-snug">
                  <span className="mr-2 text-[6pt] mt-1.5">
                    •
                  </span>
                  <span>
                    <span className="font-bold">
                      Accelerated
                    </span>{' '}
                    <span>
                      product creation workflow
                      for multi-variant items by
                      60% by implementing a
                    </span>{' '}
                    <span className="font-bold">
                      Concurrent File Upload
                    </span>{' '}
                    <span>
                      mechanism using
                      Promise-based parallel
                      processing with the
                      Cloudinary API.
                    </span>
                  </span>
                </li>
                <li className="flex text-[10pt] leading-snug">
                  <span className="mr-2 text-[6pt] mt-1.5">
                    •
                  </span>
                  <span>
                    <span className="font-bold">
                      Optimized
                    </span>{' '}
                    <span>
                      data retrieval latency to
                    </span>{' '}
                    <span className="font-bold">
                      under 10ms
                    </span>{' '}
                    <span>
                      for 90% of repeated requests
                      by implementing a
                      centralized
                    </span>{' '}
                    <span className="font-bold">
                      Redis Caching
                    </span>
                    <span>
                      {' '}
                      system with an intelligent
                      cache invalidation strategy.
                    </span>
                  </span>
                </li>
                <li className="flex text-[10pt] leading-snug">
                  <span className="mr-2 text-[6pt] mt-1.5">
                    •
                  </span>
                  <span>
                    <span className="font-bold">
                      Reduced
                    </span>{' '}
                    <span>
                      {' '}
                      API response time by
                    </span>{' '}
                    <span className="font-bold">
                      40%
                    </span>{' '}
                    <span>
                      and minimized main server
                      load by decoupling heavy
                      tasks (Email/Notifications)
                      into an asynchronous
                    </span>{' '}
                    <span className="font-bold">
                      RabbitMQ Message Queue
                    </span>{' '}
                    <span> architecture.</span>
                  </span>
                </li>
                <li className="flex text-[10pt] leading-snug">
                  <span className="mr-2 text-[6pt] mt-1.5">
                    •
                  </span>
                  <span>
                    <span className="font-bold">
                      Optimized
                    </span>{' '}
                    <span>
                      core product discovery APIs
                      to sustain peak loads of
                    </span>{' '}
                    <span className="font-bold">
                      {' '}
                      8,000+ Requests Per Second
                      (RPS)
                    </span>{' '}
                    <span>with</span>{' '}
                    <span className="font-bold">
                      sub-10ms response times
                    </span>{' '}
                    <span>
                      by implementing a strategic
                    </span>{' '}
                    <span className="font-bold">
                      multi-layer Redis Caching
                    </span>{' '}
                    <span>and</span>{' '}
                    <span className="font-bold">
                      Node.js Cluster Mode
                    </span>
                    <span>
                      {' '}
                      across all CPU cores.
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <div className="text-[10pt]">
                  <span className="font-bold">
                    YIBU – Visual Discovery &
                    Social Stream
                  </span>
                  <span className="mx-1">|</span>
                  <span className="italic">
                    Website
                  </span>
                </div>
                <span className="font-bold text-[10pt]">
                  Vite | NodeJs | Redis | Mongodb
                </span>
              </div>
              <ul className="list-none space-y-0.5">
                <li className="flex text-[10pt] leading-snug">
                  <span className="mr-2 text-[6pt] mt-1.5">
                    •
                  </span>
                  <span className="text-justify">
                    <span className="font-bold">
                      Prevented advanced session
                      hijacking
                    </span>{' '}
                    as measured by{' '}
                    <span className="font-bold">
                      100% detection and
                      revocation
                    </span>{' '}
                    of compromised sessions by
                    designing a{' '}
                    <span className="font-bold">
                      JWT Token Family
                    </span>{' '}
                    architecture with{' '}
                    <span className="font-bold">
                      automated rotation
                    </span>{' '}
                    and{' '}
                    <span className="font-bold">
                      family-based reuse detection
                    </span>
                    .
                  </span>
                </li>
                <li className="flex text-[10pt] leading-snug">
                  <span className="mr-2 text-[6pt] mt-1.5">
                    •
                  </span>
                  <span className="text-justify">
                    <span className="font-bold">
                      Increased user engagement
                    </span>{' '}
                    through personalized content
                    discovery,{' '}
                    <span className="font-bold">
                      optimizing content relevance
                    </span>{' '}
                    via multi-dimensional ranking,
                    by building a{' '}
                    <span className="font-bold">
                      Hybrid Recommendation Engine
                    </span>{' '}
                    using{' '}
                    <span className="font-bold">
                      Collaborative Filtering
                    </span>{' '}
                    and real-time{' '}
                    <span className="font-bold">
                      Trending Score
                    </span>{' '}
                    calculations.
                  </span>
                </li>
                <li className="flex text-[10pt] leading-snug">
                  <span className="mr-2 text-[6pt] mt-1.5">
                    •
                  </span>
                  <span className="text-justify">
                    <span className="font-bold">
                      Optimized backend read
                      performance
                    </span>{' '}
                    for high-traffic engagement
                    metrics, achieving{' '}
                    <span className="font-bold">
                      O(1) time complexity
                    </span>{' '}
                    for real-time interaction
                    counters, by architecting a{' '}
                    <span className="font-bold">
                      Denormalization strategy
                    </span>{' '}
                    and{' '}
                    <span className="font-bold">
                      atomic update operations
                    </span>
                    .
                  </span>
                </li>
                <li className="flex text-[10pt] leading-snug">
                  <span className="mr-2 text-[6pt] mt-1.5">
                    •
                  </span>
                  <span className="text-justify">
                    <span className="font-bold">
                      Reduced initial bundle size
                    </span>{' '}
                    by ~40% and{' '}
                    <span className="font-bold">
                      improved Time to Interactive
                      (TTI)
                    </span>{' '}
                    by implementing a{' '}
                    <span className="font-bold">
                      Granular Code Splitting
                      strategy
                    </span>{' '}
                    with{' '}
                    <span className="font-bold">
                      React Lazy/Suspense
                    </span>
                    , optimizing delivery for 92+
                    unique components.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <div className="text-[10pt]">
                  <span className="font-bold">
                    AI Interview Platform
                  </span>
                  <span className="mx-1">|</span>
                  <span className="italic">
                    Website | Source Code
                  </span>
                </div>
                <span className="font-bold text-[10pt]">
                  NextJs | FastAPI | PostgreSQL |
                  Pipecat | S3
                </span>
              </div>
              <ul className="list-none space-y-0.5">
                <li className="flex text-[10pt] leading-snug">
                  <span className="mr-2 text-[6pt] mt-1.5">
                    •
                  </span>
                  <span className="text-justify">
                    <span className="font-bold">
                      Architected
                    </span>{' '}
                    a scalable backend for the AI
                    Interview Platform using{' '}
                    <span className="font-bold">
                      FastAPI
                    </span>{' '}
                    and the{' '}
                    <span className="font-bold">
                      Service-Repository pattern
                    </span>
                    , decoupling business logic
                    from data access to improve
                    system maintainability and
                    reduce new feature development
                    time by{' '}
                    <span className="font-bold">
                      40%
                    </span>
                    .
                  </span>
                </li>
                <li className="flex text-[10pt] leading-snug">
                  <span className="mr-2 text-[6pt] mt-1.5">
                    •
                  </span>
                  <span className="text-justify">
                    <span className="font-bold">
                      Implemented
                    </span>{' '}
                    a{' '}
                    <span className="font-bold">
                      feature-based modular
                      structure
                    </span>{' '}
                    to encapsulate routing,
                    business logic, and schemas
                    into independent modules,
                    enabling seamless parallel
                    development for a 5-10 person
                    team and minimizing code
                    conflicts.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-1">
                <div className="text-[10pt]">
                  <span className="font-bold">
                    Scalable E-commerce API
                    Infrastructure
                  </span>
                  <span className="mx-1">|</span>
                  <span className="italic">
                    Website | Source Code
                  </span>
                </div>
                <span className="font-bold text-[10pt]">
                  NodeJs | MongoDB | Cloudinary
                </span>
              </div>
              <ul className="list-none space-y-0.5">
                <li className="flex text-[10pt] leading-snug">
                  <span className="mr-2 text-[6pt] mt-1.5">
                    •
                  </span>
                  <span className="text-justify">
                    Designed system using{' '}
                    <span className="font-bold">
                      Layered Architecture
                      (3-Tier)
                    </span>{' '}
                    and implemented
                    industry-standard{' '}
                    <span className="font-bold">
                      Design Patterns
                    </span>{' '}
                    (Repository, Singleton,
                    Factory) to enhance
                    maintainability and code
                    reusability.
                  </span>
                </li>
                <li className="flex text-[10pt] leading-snug">
                  <span className="mr-2 text-[6pt] mt-1.5">
                    •
                  </span>
                  <span className="text-justify">
                    Optimized data performance
                    through{' '}
                    <span className="font-bold">
                      Mongoose Aggregation
                      Framework
                    </span>{' '}
                    and advanced{' '}
                    <span className="font-bold">
                      Indexing strategies
                    </span>{' '}
                    for large datasets, ensuring
                    near-instant retrieval of
                    business intelligence (BI)
                    reports.
                  </span>
                </li>
                <li className="flex text-[10pt] leading-snug">
                  <span className="mr-2 text-[6pt] mt-1.5">
                    •
                  </span>
                  <span className="text-justify">
                    Engineered secure{' '}
                    <span className="font-bold">
                      RESTful APIs
                    </span>{' '}
                    featuring{' '}
                    <span className="font-bold">
                      Dual-Token JWT
                    </span>{' '}
                    (Access/Refresh)
                    authentication, fine-grained{' '}
                    <span className="font-bold">
                      RBAC
                    </span>
                    , and defensive layers against
                    Brute-force/DDoS using{' '}
                    <span className="font-bold">
                      Rate Limiting
                    </span>
                    .
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ----------- LEADERSHIP ----------- */}
        <section className="mb-5">
          <h2
            className="text-[12pt] font-bold border-b border-black dark:border-white mb-2 pb-0.5 tracking-tight"
            style={{ fontVariant: 'small-caps' }}
          >
            Leadership
          </h2>
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <div className="text-[10pt]">
                <span className="font-bold">
                  Luxe Wear AI
                </span>
                <span className="mx-1">|</span>
                <span className="italic">
                  Founder & Technical Lead
                </span>
              </div>
              <span className="font-bold text-[10pt]">
                Jun 2023 – Present
              </span>
            </div>
            <ul className="list-none space-y-0.5">
              <li className="flex text-[10pt] leading-snug">
                <span className="mr-2 text-[6pt] mt-1.5">
                  •
                </span>
                <span className="text-justify">
                  <span className="font-bold">
                    Spearheaded the technical
                    vision
                  </span>{' '}
                  for an advanced{' '}
                  <span className="font-bold">
                    RAG
                  </span>{' '}
                  architecture, transforming a
                  standard chatbot into an
                  enterprise-grade system
                  achieving{' '}
                  <span className="font-bold">
                    100% domain-specific knowledge
                    accuracy
                  </span>
                  .
                </span>
              </li>
              <li className="flex text-[10pt] leading-snug">
                <span className="mr-2 text-[6pt] mt-1.5">
                  •
                </span>
                <span className="text-justify">
                  <span className="font-bold">
                    Led the full-scale system
                    refactoring
                  </span>{' '}
                  from synchronous to{' '}
                  <span className="font-bold">
                    SSE Streaming architecture
                  </span>
                  , resulting in a{' '}
                  <span className="font-bold">
                    95% reduction in perceived
                    user latency
                  </span>{' '}
                  and eliminating timeout
                  failures.
                </span>
              </li>
              <li className="flex text-[10pt] leading-snug">
                <span className="mr-2 text-[6pt] mt-1.5">
                  •
                </span>
                <span className="text-justify">
                  <span className="font-bold">
                    Established system standards
                  </span>{' '}
                  for a SaaS business model,
                  designing a{' '}
                  <span className="font-bold">
                    Multi-tenancy architecture
                  </span>{' '}
                  and{' '}
                  <span className="font-bold">
                    pioneering
                  </span>{' '}
                  the adoption of{' '}
                  <span className="font-bold">
                    MCP
                  </span>{' '}
                  to standardize intelligent tool
                  integrations.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* ----------- TECHNICAL SKILLS ----------- */}
        <section>
          <h2
            className="text-[12pt] font-bold border-b border-black dark:border-white mb-2 pb-0.5 tracking-tight"
            style={{ fontVariant: 'small-caps' }}
          >
            Technical Skills
          </h2>
          <div className="text-[10pt] space-y-1 pl-2">
            <p>
              <span className="font-bold">
                Languages:
              </span>{' '}
              Python, SQL, NOSQL, JavaScript,
              TypeScript
            </p>
            <p>
              <span className="font-bold">
                Developer Tools:
              </span>{' '}
              AWS(S3 | EC2 | Lambda | API
              Gateway), Postman, Git, GitHub,
              Docker
            </p>
            <p>
              <span className="font-bold">
                Libraries/Frameworks:
              </span>{' '}
              FastAPI, ReactJS, NextJS, Vite,
              PostgreSQL, Supabase, Pinecone,
              Google Gemini, MongoDB
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
