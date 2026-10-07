import React from 'react';
import { Link } from 'react-router-dom';
import { PremiumCard, useReveal, TranspilerVisual, MagneticButton } from '../components/UI';
import { GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react";
import aadhaarLogo from '../assets/aadhaar-logo.png';

export default function Home() {
  useReveal();

  return (
    <main className="relative z-10 w-full overflow-hidden">

      {/* Stacked Hero Section */}
      <section className="relative min-h-dvh flex flex-col justify-center w-full max-w-350 mx-auto px-6 md:px-12 pt-32 pb-16">

        <div className="reveal w-full max-w-5xl">
          <h1 className="text-[16vw] md:text-[10vw] leading-[0.8] font-medium tracking-tighter text-white mb-12">
            Rachit Mangawa
          </h1>
        </div>

        <div className="reveal reveal-delay-1 w-full max-w-6xl mb-4">
          <p className="text-lg md:text-xl lg:text-2xl font-light text-white/60 leading-[1.6] tracking-tight w-full text-left">
            Systems engineer architecting <span className="text-white">high-concurrency distributed backends</span> and <span className="text-white">edge AI platforms</span>. Writing C++ and Python to ship complex <span className="text-white">RAG pipelines</span>, <span className="text-white">agentic LLM workflows</span>, and <span className="text-white">hardware-accelerated telemetry systems</span> that turn raw research into production.
          </p>
        </div>

        <div className="mt-10 reveal reveal-delay-2 w-full max-w-6xl">
          {/* Minimalist Tech Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full">
            {[
              { label: "Backend Architecture", tech: "Python, FastAPI, C/C++", span: 1 },
              { label: "Agentic AI", tech: "Ollama, Hugging Face, LLMs", span: 1 },
              { label: "Data Pipelines", tech: "SQLite WAL, Vector DBs, RAG", span: 1 },
              { label: "Frontend Systems", tech: "React, TypeScript, GSAP", span: 1 },
              { label: "Core Infrastructure & Security", tech: "Docker, Cloudflare, Linux, AWS, Git Actions", span: 2 },
              { label: "Real-time Machine Learning Systems", tech: "WebSockets, gRPC, Redis, TensorFlow, PyTorch", span: 2 }
            ].map((item, idx) => (
              <div key={idx} className={`flex flex-col p-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors duration-300 ${item.span === 2 ? 'col-span-2' : 'col-span-1'}`}>
                <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">{item.label}</span>
                <span className="text-white/90 text-sm font-medium">{item.tech}</span>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Experience Section */}
      <section id="experience" className="mt-16 mb-32 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">Experience</h2>
          <Link to="/experience" className="text-sm font-medium tracking-widest uppercase text-white/50 hover:text-white transition-colors pb-2">View All &rarr;</Link>
        </div>

        <div className="ml-6 md:ml-7 border-l border-white/10 flex flex-col gap-24">

          {/* UIDAI */}
          <div className="relative reveal reveal-delay-1 pl-8 md:pl-10">
            {/* Logo perfectly centered on the border line */}
            <div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 md:w-14 md:h-14 rounded-2xl overflow-hidden bg-white border-4 border-[#050505] flex items-center justify-center">
              <img src={aadhaarLogo} alt="UIDAI" className="object-contain w-full h-full p-2" />
            </div>

            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-medium text-white mb-3">Unique Identification Authority of India (UIDAI / Aadhaar)</h3>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h4 className="text-xl text-white/70 font-medium">Software Developer Intern</h4>
                <span className="text-xs tracking-[0.2em] uppercase text-white/40 font-bold shrink-0 bg-white/5 px-4 py-2 rounded-full border border-white/10">Jun 2026 — Sep 2026</span>
              </div>
            </div>

            <div className="text-lg md:text-xl text-white/60 leading-[1.6] font-light max-w-4xl flex flex-col gap-4">
              <p>
                Engineered a 100% air-gapped, high-concurrency ETL pipeline replacing legacy workflows for over 1,000 users.
              </p>
              <p>
                Integrated local vision and language models (Ollama/gemma3) for strict boundary detection and JSON extraction, eliminating hallucinations across 9 regional languages.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {['Python', 'FastAPI', 'Ollama', 'Plotly Dash', 'Pandas / NumPy', 'WebSockets', 'SQLite WAL'].map(tag => (
                <span key={tag} className="text-xs text-white/70 px-4 py-2 rounded-full bg-white/5 border border-white/10 tracking-widest font-medium">{tag}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Featured Project Section */}
      <section className="mb-32 w-full max-w-350 mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-12 reveal">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">Featured Work</h2>
          <Link to="/projects" className="text-sm font-medium tracking-widest uppercase text-white/50 hover:text-white transition-colors pb-2">View All &rarr;</Link>
        </div>

        <div className="reveal reveal-delay-1">
          <PremiumCard>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">HeartFlow OS</h3>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  AST transpiler compiling Scikit-Learn models into zero-dependency, malloc-free C headers for ESP32/Cortex-M deployment. Engineered INT8 quantization engine, cutting microcontroller flash footprint by ~75%.
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {['TypeScript', 'FastAPI', 'C/C++', 'WebSockets'].map(tag => (
                    <span key={tag} className="px-4 py-2 text-xs tracking-wider uppercase bg-white/5 border border-white/10 rounded-full text-white/60">{tag}</span>
                  ))}
                </div>
                <MagneticButton href="/projects" isInternal>View Architecture</MagneticButton>
              </div>
              <div className="flex items-center justify-center relative w-full h-full min-h-75">
                <TranspilerVisual />
              </div>
            </div>
          </PremiumCard>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="mb-32 w-full max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-16 reveal text-white">Achievements</h2>

        <div className="grid md:grid-cols-2 gap-8 reveal reveal-delay-1">
          {/* Competitive Programming */}
          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-medium text-white mb-6">Competitive Programming</h3>
            <ul className="flex flex-col gap-4 text-white/60 font-light">
              <li className="flex justify-between items-center border-b border-white/5 pb-4">
                <div>
                  <div className="text-white/90 font-medium mb-1">
                    Codeforces <span className="text-white/30 font-light mx-1">:</span> <span className="text-green-400">Pupil</span>
                  </div>
                  <a href="https://codeforces.com/profile/i_win_again" target="_blank" rel="noreferrer" className="group flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-white/40 hover:text-white transition-colors">
                    @i_win_again <svg className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                  </a>
                </div>
                <div className="text-right">
                  <span className="text-xs uppercase tracking-widest text-white/40 block mb-1">Max Rating</span>
                  <span className="block text-emerald-400 font-medium">1336</span>
                </div>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-4">
                <div>
                  <div className="text-white/90 font-medium mb-1">
                    LeetCode <span className="text-white/30 font-light mx-1">:</span> Knight
                  </div>
                  <a href="https://leetcode.com/u/idkhowtocodefr/" target="_blank" rel="noreferrer" className="group flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-white/40 hover:text-white transition-colors">
                    @idkhowtocodefr <svg className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                  </a>
                </div>
                <div className="text-right">
                  <span className="text-xs uppercase tracking-widest text-white/40 block mb-1">Max Rating</span>
                  <span className="block text-emerald-400 font-medium">1982</span>
                </div>
              </li>
              <li className="flex justify-between items-center">
                <div>
                  <div className="text-white/90 font-medium mb-1">
                    LeetCode Biweekly 190
                  </div>
                  <a href="https://leetcode.com/contest/biweekly-contest-190/" target="_blank" rel="noreferrer" className="group flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-white/40 hover:text-white transition-colors">
                    Contest Page <svg className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                  </a>
                </div>
                <div className="text-right">
                  <span className="text-xs uppercase tracking-widest text-white/40 block mb-1">Global Rank</span>
                  <span className="block text-emerald-400 font-medium">316 <span className="text-white/40 text-[10px]">/ 38,291</span></span>
                  <span className="block text-emerald-400/80 text-[10px] uppercase tracking-widest mt-1">Top 0.83%</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Open Source */}
          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-medium text-white mb-6">Open Source</h3>
            <div className="flex flex-col gap-4 text-white/60 font-light">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="text-white/90 font-medium text-lg">TensorFlow Core</span>
                  <div className="flex gap-2">
                    <a href="https://github.com/tensorflow/tensorflow/issues/120578" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-bold bg-white/5 px-2 py-1 rounded-md text-white/70 hover:bg-white/20 hover:text-white transition-colors border border-white/10">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                      Issue #120578
                    </a>
                    <a href="https://github.com/tensorflow/tensorflow/pull/120944" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest font-bold bg-purple-500/10 px-2 py-1 rounded-md text-purple-400 hover:bg-purple-500/20 hover:text-purple-300 transition-colors border border-purple-500/20">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M13 6h3a2 2 0 0 1 2 2v7" /><line x1="6" y1="9" x2="6" y2="21" /></svg>
                      Merged PR
                    </a>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-6">
                  Discovered and debugged a critical numerical edge case in TensorFlow's autodiff engine.
                  The gradient for <code className="bg-black/40 px-1.5 py-0.5 rounded text-white/80 border border-white/10 font-mono text-xs">tf.math.bessel_i1</code> was hardcoded to return <code className="text-red-400 font-mono text-xs">1.0</code> at <code className="font-mono text-xs">x=0</code> - a removable singularity where the correct limit is mathematically <code className="text-emerald-400 font-mono text-xs">0.5</code>.
                  <br /><br />
                  Fixed the imputed gradient value deep inside the C++/Python <code className="font-mono text-white/70 text-xs">math_grad.py</code> layer and wrote comprehensive regression tests to prevent future silent NaN/Inf downstream errors in model training.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] text-white/70 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 tracking-widest uppercase font-bold">Python</span>
                  <span className="text-[10px] text-white/70 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 tracking-widest uppercase font-bold">C++</span>
                  <span className="text-[10px] text-white/70 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 tracking-widest uppercase font-bold">Calculus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
