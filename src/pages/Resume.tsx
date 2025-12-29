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
      <div className="w-full rounded-xl max-w-[900px] bg-white dark:bg-zinc-950 shadow-none border border-zinc-200 dark:border-zinc-800 p-[1.4cm] font-[Times_New_Roman,Times,serif] text-black dark:text-zinc-100 leading-tight selection:bg-zinc-200 dark:selection:bg-zinc-800">
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
              className="flex items-center gap-1 leading-none hover:text-cinnabar dark:hover:text-red-400 transition-colors"
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
              className="flex items-center gap-1 leading-none hover:text-cinnabar dark:hover:text-red-400 transition-colors"
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
              className="flex items-center gap-1 leading-none hover:text-cinnabar dark:hover:text-red-400 transition-colors"
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
              className="flex items-center gap-1 leading-none hover:text-cinnabar dark:hover:text-red-400 transition-colors"
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
            className="text-[12pt] font-bold border-b border-black dark:border-zinc-500 mb-2 pb-0.5 tracking-tight"
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
            className="text-[12pt] font-bold border-b border-black dark:border-zinc-500 mb-2 pb-0.5 tracking-tight"
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
                      Accelerated product creation
                    </span>{' '}
                    workflow for multi-variant
                    items by{' '}
                    <span className="font-bold">
                      60%
                    </span>{' '}
                    by implementing a Concurrent
                    File Upload mechanism using
                    Promise-based parallel
                    processing with the Cloudinary
                    API.
                  </span>
                </li>
                <li className="flex text-[10pt] leading-snug">
                  <span className="mr-2 text-[6pt] mt-1.5">
                    •
                  </span>
                  <span>
                    <span className="font-bold">
                      Optimized retrieval latency
                    </span>{' '}
                    to{' '}
                    <span className="font-bold">
                      under 10ms
                    </span>{' '}
                    for 90% of repeated requests
                    by implementing a centralized
                    Redis Caching system with an
                    intelligent cache invalidation
                    strategy.
                  </span>
                </li>
                <li className="flex text-[10pt] leading-snug">
                  <span className="mr-2 text-[6pt] mt-1.5">
                    •
                  </span>
                  <span>
                    <span className="font-bold">
                      Decoupled high-latency tasks
                    </span>{' '}
                    (Email/Notifications) from the
                    main request flow, reducing
                    API response time by{' '}
                    <span className="font-bold">
                      40%
                    </span>{' '}
                    and ensuring{' '}
                    <span className="font-bold">
                      100% notification delivery
                    </span>{' '}
                    during peak traffic via a
                    RabbitMQ Message Queue
                    architecture.
                  </span>
                </li>
                <li className="flex text-[10pt] leading-snug">
                  <span className="mr-2 text-[6pt] mt-1.5">
                    •
                  </span>
                  <span>
                    <span className="font-bold">
                      Optimized product discovery
                      APIs
                    </span>{' '}
                    to sustain{' '}
                    <span className="font-bold">
                      5,000+ Requests Per Second
                      (RPS)
                    </span>{' '}
                    with{' '}
                    <span className="font-bold">
                      sub-10ms latency
                    </span>{' '}
                    by implementing multi-layer
                    Redis caching and Node.js
                    process clustering.
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
                      Mitigated session hijacking
                      risks
                    </span>{' '}
                    as measured by{' '}
                    <span className="font-bold">
                      automated detection and
                      immediate revocation
                    </span>{' '}
                    of compromised sessions by
                    designing a JWT Token Family
                    architecture with automated
                    rotation and family-based
                    reuse detection.
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
                    by building a Hybrid
                    Recommendation Engine using
                    Collaborative Filtering and
                    real-time trending score
                    calculations.
                  </span>
                </li>
                <li className="flex text-[10pt] leading-snug">
                  <span className="mr-2 text-[6pt] mt-1.5">
                    •
                  </span>
                  <span className="text-justify">
                    <span className="font-bold">
                      Optimized data integrity and
                      read performance
                    </span>{' '}
                    as measured by{' '}
                    <span className="font-bold">
                      eliminating expensive
                      runtime aggregations
                    </span>{' '}
                    for high-traffic feeds, by
                    implementing ACID Transactions
                    and a Denormalized counter
                    strategy for constant-time
                    data retrieval.
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
                    by{' '}
                    <span className="font-bold">
                      ~40%
                    </span>{' '}
                    and{' '}
                    <span className="font-bold">
                      improved Time to Interactive
                      (TTI)
                    </span>{' '}
                    by implementing a Granular
                    Code Splitting strategy with
                    React Lazy/Suspense,
                    optimizing delivery for 92+
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
                      Designed a backend
                    </span>{' '}
                    with FastAPI using the
                    Service-Repository pattern,
                    which{' '}
                    <span className="font-bold">
                      organized the code into
                      clear layers
                    </span>{' '}
                    and made it much easier to add
                    new features without breaking
                    existing ones.
                  </span>
                </li>
                <li className="flex text-[10pt] leading-snug">
                  <span className="mr-2 text-[6pt] mt-1.5">
                    •
                  </span>
                  <span className="text-justify">
                    <span className="font-bold">
                      Organized the project
                    </span>{' '}
                    into a modular, feature-based
                    structure, making the codebase
                    clean and easy to navigate for
                    the team while{' '}
                    <span className="font-bold">
                      significantly reducing merge
                      conflicts
                    </span>{' '}
                    during collaboration.
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
                    <span className="font-bold">
                      Designed system
                    </span>{' '}
                    using Layered Architecture
                    (3-Tier) and implemented
                    industry-standard Design
                    Patterns (Repository,
                    Singleton, Factory) to{' '}
                    <span className="font-bold">
                      enhance maintainability and
                      code reusability
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
                      Optimized data performance
                    </span>{' '}
                    through Mongoose Aggregation
                    Framework and advanced
                    Indexing strategies for large
                    datasets, ensuring{' '}
                    <span className="font-bold">
                      near-instant retrieval
                    </span>{' '}
                    of business intelligence (BI)
                    reports.
                  </span>
                </li>
                <li className="flex text-[10pt] leading-snug">
                  <span className="mr-2 text-[6pt] mt-1.5">
                    •
                  </span>
                  <span className="text-justify">
                    <span className="font-bold">
                      Engineered secure RESTful
                      APIs
                    </span>{' '}
                    featuring Dual-Token JWT
                    (Access/Refresh)
                    authentication,{' '}
                    <span className="font-bold">
                      fine-grained RBAC
                    </span>
                    , and{' '}
                    <span className="font-bold">
                      defensive layers
                    </span>{' '}
                    against Brute-force/DDoS using
                    Rate Limiting.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ----------- LEADERSHIP ----------- */}
        <section className="mb-5">
          <h2
            className="text-[12pt] font-bold border-b border-black dark:border-zinc-500 mb-2 pb-0.5 tracking-tight"
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
                  Technical Lead
                </span>
              </div>
              <span className="font-bold text-[10pt]">
                Oct 2025 – Present
              </span>
            </div>
            <ul className="list-none space-y-0.5">
              <li className="flex text-[10pt] leading-snug">
                <span className="mr-2 text-[6pt] mt-1.5">
                  •
                </span>
                <span className="text-justify">
                  <span className="font-bold">
                    Designed and implemented
                  </span>{' '}
                  an advanced RAG architecture,
                  developing a robust system that
                  significantly{' '}
                  <span className="font-bold">
                    improved domain-specific
                    response accuracy
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
                    Led the transition
                  </span>{' '}
                  from synchronous to SSE
                  Streaming architecture,
                  resulting in a{' '}
                  <span className="font-bold">
                    95% reduction in perceived
                    user latency
                  </span>{' '}
                  and ensuring smooth real-time
                  interactions.
                </span>
              </li>
              <li className="flex text-[10pt] leading-snug">
                <span className="mr-2 text-[6pt] mt-1.5">
                  •
                </span>
                <span className="text-justify">
                  <span className="font-bold">
                    Developed core infrastructure
                  </span>{' '}
                  for a SaaS business model,
                  designing a Multi-tenancy
                  architecture and integrating the
                  MCP to standardize intelligent
                  tool integrations.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* ----------- TECHNICAL SKILLS ----------- */}
        <section>
          <h2
            className="text-[12pt] font-bold border-b border-black dark:border-zinc-500 mb-2 pb-0.5 tracking-tight"
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
              Docker, Redis
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
