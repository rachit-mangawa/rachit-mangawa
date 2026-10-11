import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PremiumCard, MagneticButton } from '../components/UI';
import useReveal from '../hooks/useReveal';
import { PORTFOLIO_CONTENT } from '../content';

export default function Projects() {
  useReveal();
  const location = useLocation();
  const data = PORTFOLIO_CONTENT;

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const projects = data.projects;
  return (
    <main className="relative z-10 w-full overflow-hidden">
      {/* Hero Section - Centered 2-Column Split matching Dashboard */}
      <section className="relative min-h-dvh flex flex-col justify-center w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 w-full reveal">

          {/* Left Column (Headline + Architecture Overview) */}
          <div className="lg:col-span-8 flex flex-col justify-start">
            <h1 className="reveal font-serif text-[14vw] md:text-[9vw] leading-[0.96] font-normal tracking-tight text-white mb-8 pb-2">
              Architecture
              <span className="block mt-1.5 md:mt-2.5 italic">
                & Code<span className="text-white/40 not-italic">.</span>
              </span>
            </h1>

            <div className="reveal reveal-delay-1 text-lg md:text-xl lg:text-2xl font-light text-white/70 leading-[1.6] tracking-tight text-left space-y-4">
              <p>
                Bridging machine learning and hardware through <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">bare-metal compilers</span>, interpretable semantic analyzers, and upstream mathematical patches.
              </p>
              <p>
                From transpiling soft-voting ensemble trees into pure C++ for <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">microcontroller registers</span>, to debugging Bessel function singularities inside the <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">TensorFlow Core autodiff engine</span>.
              </p>
            </div>
          </div>

          {/* Right Column (Architecture & Tooling Specs) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {[
              { label: "Hardware Transpiler", value: "HeartFlow OS (C++17 / FreeRTOS)" },
              { label: "Target Microcontroller", value: "ESP32 Bare-Metal Registers" },
              { label: "Semantic Pipeline", value: "MiniLM Embeddings + SVM Head" },
              { label: "Feature Attribution", value: "Custom Occlusion Algorithm" },
              { label: "Upstream Core Patch", value: "TensorFlow Autodiff Singularity" },
            ].map((item, idx) => (
              <div key={idx} className="group flex items-center justify-between p-4 md:p-5 bg-white/2 border border-white/10 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all duration-300 reveal" style={{ animationDelay: `${idx * 50 + 200}ms` }}>
                <div className="flex flex-col">
                  <span className="text-white/50 text-xs uppercase tracking-[0.2em] font-bold mb-1.5">{item.label}</span>
                  <span className="text-white/90 text-sm md:text-base font-medium transition-transform duration-300 group-hover:translate-x-1">{item.value}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Projects Container */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-40">
        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 1; // 0-indexed, so idx 1 is the 2nd project (even)
            return (
            <div key={project.id} id={project.id} className="w-full reveal">
              <PremiumCard className="w-full">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}>
                  
                  {/* Left/Text Column */}
                  <div className="w-full lg:w-1/2 flex flex-col items-start">
                    <span className="text-emerald-400 font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Project 0{idx + 1}</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">{project.title}</h2>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map(tag => (
                        <span key={tag} className="px-3 py-1.5 text-xs tracking-widest uppercase bg-white/5 border border-white/10 rounded-full text-white/60 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="space-y-4 text-base md:text-lg text-white/60 font-light leading-relaxed mb-10">
                      {project.deepDive.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <MagneticButton href={project.repo}>View Source Code</MagneticButton>
                      {project.live && (
                        <MagneticButton href={project.live}>View Live</MagneticButton>
                      )}
                    </div>
                  </div>

                  {/* Right/Visual Column */}
                  <div className="w-full lg:w-1/2 flex items-center justify-center">
                    {project.visualContent}
                  </div>

                </div>
              </PremiumCard>
            </div>
          )})}
        </div>
      </section>
    </main>
  );
}
