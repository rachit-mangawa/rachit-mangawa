import React from 'react';
import { Link } from 'react-router-dom';
import { SectionLink } from '../components/UI';
import useReveal from '../hooks/useReveal';
import { useScrollToHash } from '../hooks/useScrollToHash';
import { Info, GitPullRequest, ArrowUpRight } from "@phosphor-icons/react";
import aadhaarLogo from '../assets/aadhaar-logo.png';
import { PORTFOLIO_CONTENT } from '../content';
import SkillsSection from '../components/SkillsSection';
import { CodeforcesIcon, LeetCodeIcon, TensorFlowIcon, TechTag } from '../components/SkillIcons';
import Hero from '../components/Hero';

export default function Home() {
  useReveal();
  useScrollToHash();
  const data = PORTFOLIO_CONTENT;

  return (
    <main id="main-content" className="relative z-10 w-full overflow-hidden">
      {/* Permanent Editorial Hero */}
      <Hero />

      {/* Experience Section */}
      <section id="experience" className="mt-16 mb-32 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 reveal">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-white">Experience</h2>
          </div>
          <SectionLink to="/experience">View All</SectionLink>
        </div>

        <div className="ml-6 md:ml-7 border-l border-white/10 flex flex-col gap-24">

          {/* Production Experience */}
          <div className="relative reveal reveal-delay-1 pl-8 md:pl-10">
            {/* Logo perfectly centered on the border line */}
            <div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 rounded-2xl overflow-hidden bg-white border-4 border-[#050505] flex items-center justify-center">
              <img src={aadhaarLogo} alt={`${data.internships[0].company} Logo`} className="object-contain w-full h-full p-2" />
            </div>

            <div className="mb-6">
              <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-white mb-3">{data.internships[0].company}</h3>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h4 className="text-lg md:text-xl text-white/70 font-medium">{data.internships[0].role}</h4>
                <span className="text-xs tracking-[0.2em] uppercase text-white/50 font-bold shrink-0 bg-white/5 px-4 py-2 rounded-full border border-white/10">{data.internships[0].date}</span>
              </div>
            </div>

            <div className="text-base md:text-lg text-white/60 font-light leading-relaxed max-w-4xl flex flex-col gap-4">
              {data.internships[0].shortPoints.map((point, idx) => (
                <p key={idx}>{point}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5 mt-8">
              {data.internships[0].tags.slice(0, 10).map(tag => (
                <TechTag key={tag} name={tag} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Section Divider Line */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 my-12 md:my-20">
        <div className="border-t border-white/10" />
      </div>

      {/* Featured Project Section */}
      <section id="featured" className="mb-24 md:mb-32 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 reveal">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-white">Featured Work</h2>
          </div>
          <SectionLink to="/projects">View All</SectionLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
          {(data.featuredProjects || [
            {
              title: "HeartFlow OS",
              description: "ML platform exporting trained Python models to optimized C++ for microcontrollers, with a real-time monitoring dashboard.",
              tech: ['Next.js', 'React', 'FastAPI', 'Python', 'WebSockets'],
              link: "/projects#heartflow"
            },
            {
              title: "Semantic Comment Analyzer",
              description: "NLP pipeline that classifies customer feedback and support tickets using sentence embeddings and SVM.",
              tech: ['Python', 'FastAPI', 'Sentence Transformers', 'Hugging Face'],
              link: "/projects#semantic"
            }
          ]).map((project, idx) => (
            <Link
              to={project.link}
              key={idx}
              className="group relative reveal flex flex-col justify-between p-6 md:p-8 bg-white/2 border border-white/10 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all duration-300"
              style={{ animationDelay: `${idx * 100 + 150}ms` }}
            >
              <div>
                {/* Header row: Project Title on left, Arrow on right */}
                <div className="flex items-center justify-between gap-4 mb-3">
                  <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-white group-hover:text-emerald-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="text-white/40 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0"
                    aria-hidden="true"
                  />
                </div>

                {/* Description */}
                <p className="text-white/60 text-sm md:text-base font-light leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map(tag => (
                  <TechTag key={tag} name={tag} />
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Section Divider Line */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 my-12 md:my-20">
        <div className="border-t border-white/10" />
      </div>

      {/* Skills & Architecture Section */}
      <SkillsSection />

      {/* Section Divider Line */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 my-12 md:my-20">
        <div className="border-t border-white/10" />
      </div>

      {/* Achievements Section */}
      <section id="achievements" className="mb-32 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-16 reveal">
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-white">Achievements</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 reveal reveal-delay-1">
          {/* Competitive Programming */}
          <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors">
            <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-white mb-6">Competitive Programming</h3>
            <ul className="flex flex-col gap-4 text-white/60 font-light">
              <li className="flex justify-between items-center border-b border-white/5 pb-4">
                <div>
                  <div className="flex items-center gap-2 text-white/90 font-medium mb-1">
                    <CodeforcesIcon size={16} className="text-white/80 shrink-0" />
                    <span>Codeforces</span>
                    <span className="text-white/30 font-light mx-0.5">:</span>
                    <span className="text-[#01bdb2] font-medium">{data.ratings.codeforces.rank}</span>
                  </div>
                  <a href={data.personal.codeforces} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 text-xs uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all duration-150 ease-out active:scale-[0.97]">
                    @{data.personal.codeforcesHandle} <svg className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                  </a>
                </div>
                <div className="text-right">
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/50 block mb-1">Max Rating</span>
                  <span className="block text-[#01bdb2] font-medium font-mono tabular-nums">{data.ratings.codeforces.rating}</span>
                </div>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-4">
                <div>
                  <div className="flex items-center gap-2 text-white/90 font-medium mb-1">
                    <LeetCodeIcon size={16} className="text-white/80 shrink-0" />
                    <span>LeetCode</span>
                    <span className="text-white/30 font-light mx-0.5">:</span>
                    <span className="text-white/90 font-medium">{data.ratings.leetcode.rank}</span>
                  </div>
                  <a href={data.personal.leetcode} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 text-xs uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all duration-150 ease-out active:scale-[0.97]">
                    @{data.personal.leetcodeHandle} <svg className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                  </a>
                </div>
                <div className="text-right">
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/50 block mb-1">Max Rating</span>
                  <span className="block text-emerald-400 font-medium font-mono tabular-nums">{data.ratings.leetcode.rating}</span>
                </div>
              </li>
              <li className="flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2 text-white/90 font-medium mb-1">
                    <LeetCodeIcon size={16} className="text-white/80 shrink-0" />
                    <span>LeetCode {data.ratings.leetcode.contest}</span>
                  </div>
                  <a href="https://leetcode.com/contest/biweekly-contest-190/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 text-xs uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-all duration-150 ease-out active:scale-[0.97]">
                    Contest Page <svg className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                  </a>
                </div>
                <div className="text-right">
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/50 block mb-1">Global Rank</span>
                  <span className="block text-emerald-400 font-medium font-mono tabular-nums">{data.ratings.leetcode.globalRank} <span className="text-white/50 text-xs font-mono">/ {data.ratings.leetcode.totalParticipants.toLocaleString()}</span></span>
                  <span className="block text-emerald-400/80 text-xs uppercase tracking-[0.2em] mt-1 font-mono tabular-nums">Top {data.ratings.leetcode.topPercent}%</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Open Source */}
          <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors">
            <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-white mb-6">Open Source</h3>
            <div className="flex flex-col gap-4 text-white/60 font-light">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <div className="flex items-center gap-2.5">
                    <TensorFlowIcon size={22} className="text-white/80 shrink-0" />
                    <span className="text-white/90 font-medium text-lg">{data.openSource.project}</span>
                  </div>
                  <div className="flex gap-2 mt-2 md:mt-0">
                    <a href={data.openSource.issueUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold bg-white/5 px-2.5 py-1 rounded-md text-white/70 hover:bg-white/20 hover:text-white transition-all duration-150 ease-out active:scale-[0.97] border border-white/10 font-mono">
                      <Info weight="bold" size={12} />
                      Issue #{data.openSource.issueNumber}
                    </a>
                    <a href={data.openSource.prUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold bg-white/5 px-2.5 py-1 rounded-md text-white/70 hover:bg-white/20 hover:text-white transition-all duration-150 ease-out active:scale-[0.97] border border-white/10 font-mono">
                      <GitPullRequest weight="bold" size={12} />
                      Merged PR
                    </a>
                  </div>
                </div>
                <p className="text-sm md:text-base text-white/60 font-light leading-relaxed mb-6">
                  {data.openSource.content}
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.openSource.tags.map(tag => (
                    <TechTag key={tag} name={tag} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
