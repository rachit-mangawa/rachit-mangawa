import React from 'react';
import { Link } from 'react-router-dom';
import { SectionLink } from '../components/UI';
import useReveal from '../hooks/useReveal';
import { Info, GitPullRequest } from "@phosphor-icons/react";
import aadhaarLogo from '../assets/aadhaar-logo.png';
import { PORTFOLIO_CONTENT } from '../content';

export default function Home() {
  useReveal();
  const data = PORTFOLIO_CONTENT;

  return (
    <main className="relative z-10 w-full overflow-hidden">

      {/* Stacked Hero Section */}
      <section className="relative min-h-dvh flex flex-col justify-center w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24">

        {/* 2-Column Split: Name & Bio Left, Tech Stack Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 w-full reveal">

          {/* Left Column (Name + Bio) */}
          <div className="lg:col-span-8 flex flex-col justify-start">
            <h1 className="reveal font-serif text-[14vw] md:text-[9vw] leading-[0.88] font-normal tracking-tight text-white mb-8 pb-2">
              {data.personal.name.split(' ')[0]}<br />
              <span className="italic">{data.personal.name.split(' ')[1]}</span>
              <span className="text-white/40 not-italic">.</span>
            </h1>

            <div className="reveal reveal-delay-1 text-lg md:text-xl lg:text-2xl font-light text-white/70 leading-[1.6] tracking-tight text-left">
              {data.bio.content}
            </div>
          </div>

          {/* Tech Stack Stack (Right Column) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {data.techStack.map((item, idx) => (
              <div key={idx} className="group flex items-center justify-between p-4 md:p-5 bg-white/2 border border-white/10 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all duration-300 reveal" style={{ animationDelay: `${idx * 50 + 200}ms` }}>
                <div className="flex flex-col">
                  <span className="text-white/50 text-xs uppercase tracking-[0.2em] font-bold mb-1.5">{item.label}</span>
                  <span className="text-white/90 text-sm md:text-base font-medium transition-transform duration-300 group-hover:translate-x-1">{item.tech}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* Experience Section */}
      <section id="experience" className="mt-16 mb-32 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-16 reveal">
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-white">Experience</h2>
          <SectionLink to="/experience">View All</SectionLink>
        </div>

        <div className="ml-6 md:ml-7 border-l border-white/10 flex flex-col gap-24">

          {/* UIDAI */}
          <div className="relative reveal reveal-delay-1 pl-8 md:pl-10">
            {/* Logo perfectly centered on the border line */}
            <div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 rounded-2xl overflow-hidden bg-white border-4 border-[#050505] flex items-center justify-center">
              <img src={aadhaarLogo} alt="UIDAI" className="object-contain w-full h-full p-2" />
            </div>

            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-medium text-white mb-3">{data.internships[0].company}</h3>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h4 className="text-xl text-white/70 font-medium">{data.internships[0].role}</h4>
                <span className="text-xs tracking-[0.2em] uppercase text-white/50 font-bold shrink-0 bg-white/5 px-4 py-2 rounded-full border border-white/10">{data.internships[0].date}</span>
              </div>
            </div>

            <div className="text-lg md:text-xl text-white/60 leading-[1.6] font-light max-w-4xl flex flex-col gap-4">
              {data.internships[0].shortPoints.map((point, idx) => (
                <p key={idx}>{point}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {data.internships[0].tags.slice(0, 7).map(tag => (
                <span key={tag} className="text-xs text-white/70 px-4 py-2 rounded-full bg-white/5 border border-white/10 tracking-widest font-medium">{tag}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Featured Project Section */}
      <section className="mb-32 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-16 reveal">
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-white">Featured Work</h2>
          <SectionLink to="/projects">View All</SectionLink>
        </div>

        <div className="ml-6 md:ml-7 border-l border-white/10 flex flex-col gap-8 md:gap-12">
          {[
            {
              title: "HeartFlow OS",
              description: "ML platform exporting trained Python models to optimized C++ for microcontrollers, with a real-time monitoring dashboard.",
              tech: ['Next.js', 'React', 'FastAPI', 'Python', 'WebSockets'],
              link: "/projects#heartflow"
            },
            {
              title: "Semantic Analyzer",
              description: "NLP pipeline that classifies customer feedback and support tickets using sentence embeddings and SVM.",
              tech: ['Python', 'FastAPI', 'Sentence Transformers', 'Hugging Face'],
              link: "/projects#semantic"
            }
          ].map((project, idx) => (
            <Link to={project.link} key={idx} className="group relative reveal block hover:bg-white/2 p-6 -ml-6 pl-12 md:pl-14 rounded-2xl transition-[color,background-color,transform] duration-300 active:scale-[0.99] active:duration-150">
              {/* Timeline Node */}
              <div className="absolute left-6 top-10 -translate-x-1/2 w-3 h-3 rounded-full bg-white/20 border-2 border-[#050505] group-hover:bg-white group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                <h3 className="font-serif text-xl md:text-2xl font-medium text-white transition-transform duration-300 group-hover:translate-x-1 flex items-center gap-2">
                  {project.title}
                  <svg className="opacity-30 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                </h3>
              </div>

              <p className="text-base md:text-lg text-white/60 font-light mb-6 max-w-4xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map(tag => (
                  <span key={tag} className="px-3 py-1.5 text-xs tracking-widest uppercase bg-white/5 border border-white/10 rounded-full text-white/60 group-hover:border-white/20 transition-colors duration-300 font-medium">{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="mb-32 w-full max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-16 reveal text-white">Achievements</h2>

        <div className="grid md:grid-cols-2 gap-8 reveal reveal-delay-1">
          {/* Competitive Programming */}
          <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors">
            <h3 className="font-serif text-xl font-medium text-white mb-6">Competitive Programming</h3>
            <ul className="flex flex-col gap-4 text-white/60 font-light">
              <li className="flex justify-between items-center border-b border-white/5 pb-4">
                <div>
                  <div className="text-white/90 font-medium mb-1">
                    Codeforces <span className="text-white/30 font-light mx-1">:</span> <span className="text-green-400">Pupil</span>
                  </div>
                  <a href="https://codeforces.com/profile/i_win_again" target="_blank" rel="noreferrer" className="group flex items-center gap-1 text-xs uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all duration-150 ease-out active:scale-[0.97]">
                    @i_win_again <svg className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                  </a>
                </div>
                <div className="text-right">
                  <span className="text-xs uppercase tracking-widest text-white/50 block mb-1">Max Rating</span>
                  <span className="block text-emerald-400 font-medium font-mono tabular-nums">{data.ratings.codeforces.rating}</span>
                </div>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-4">
                <div>
                  <div className="text-white/90 font-medium mb-1">
                    LeetCode <span className="text-white/30 font-light mx-1">:</span> {data.ratings.leetcode.rank}
                  </div>
                  <a href="https://leetcode.com/u/idkhowtocodefr/" target="_blank" rel="noreferrer" className="group flex items-center gap-1 text-xs uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all duration-150 ease-out active:scale-[0.97]">
                    @idkhowtocodefr <svg className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                  </a>
                </div>
                <div className="text-right">
                  <span className="text-xs uppercase tracking-widest text-white/50 block mb-1">Max Rating</span>
                  <span className="block text-emerald-400 font-medium font-mono tabular-nums">{data.ratings.leetcode.rating}</span>
                </div>
              </li>
              <li className="flex justify-between items-center">
                <div>
                  <div className="text-white/90 font-medium mb-1">
                    LeetCode {data.ratings.leetcode.contest}
                  </div>
                  <a href="https://leetcode.com/contest/biweekly-contest-190/" target="_blank" rel="noreferrer" className="group flex items-center gap-1 text-xs uppercase tracking-widest font-bold text-white/50 hover:text-white transition-all duration-150 ease-out active:scale-[0.97]">
                    Contest Page <svg className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                  </a>
                </div>
                <div className="text-right">
                  <span className="text-xs uppercase tracking-widest text-white/50 block mb-1">Global Rank</span>
                  <span className="block text-emerald-400 font-medium font-mono tabular-nums">{data.ratings.leetcode.globalRank} <span className="text-white/50 text-xs">/ {data.ratings.leetcode.totalParticipants.toLocaleString()}</span></span>
                  <span className="block text-emerald-400/80 text-xs uppercase tracking-widest mt-1 font-mono tabular-nums">Top {data.ratings.leetcode.topPercent}%</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Open Source */}
          <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors">
            <h3 className="font-serif text-xl font-medium text-white mb-6">Open Source</h3>
            <div className="flex flex-col gap-4 text-white/60 font-light">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="text-white/90 font-medium text-lg">{data.openSource.project}</span>
                  <div className="flex gap-2 mt-2 md:mt-0">
                    <a href={data.openSource.issueUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold bg-white/5 px-2 py-1 rounded-md text-white/70 hover:bg-white/20 hover:text-white transition-all duration-150 ease-out active:scale-[0.97] border border-white/10">
                      <Info weight="bold" size={12} />
                      Issue #{data.openSource.issueNumber}
                    </a>
                    <a href={data.openSource.prUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold bg-purple-500/10 px-2 py-1 rounded-md text-purple-400 hover:bg-purple-500/20 hover:text-purple-300 transition-all duration-150 ease-out active:scale-[0.97] border border-purple-500/20">
                      <GitPullRequest weight="bold" size={12} />
                      Merged PR
                    </a>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-6">
                  {data.openSource.content}
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.openSource.tags.map(tag => (
                    <span key={tag} className="text-xs text-white/70 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 tracking-widest uppercase font-bold">{tag}</span>
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
