import React from 'react';
import { PremiumCard, MagneticButton } from '../components/UI';
import useReveal from '../hooks/useReveal';
import { useScrollToHash, scrollToElement } from '../hooks/useScrollToHash';
import { PORTFOLIO_CONTENT } from '../content';
import { TechTag } from '../components/SkillIcons';

export default function Projects() {
  useReveal();
  useScrollToHash();
  const data = PORTFOLIO_CONTENT;

  const projects = data.projects;
  return (
    <main id="main-content" className="relative z-10 w-full overflow-hidden">
      {/* Header */}
      <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-5xl flex flex-col justify-start">
          <h1 className="reveal font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] leading-[1.05] font-normal tracking-tight text-white mb-8 select-none">
            Architecture<br />
            <span className="italic font-normal text-white/95">& Code</span>
            <span className="text-white/30 not-italic font-serif">.</span>
          </h1>

          <div className="reveal reveal-delay-1 text-base md:text-lg lg:text-xl font-light text-white/70 leading-[1.65] tracking-tight text-left max-w-4xl space-y-3 mb-8">
            <p>
              Selected engineering projects across microcontroller compilers, offline NLP analyzers, and upstream core runtimes.
            </p>
            <p className="text-sm md:text-base text-white/50">
              Focused on hardware-efficient compilation, low-overhead execution, and verifiable benchmarks.
            </p>
          </div>

          {/* Direct-Jump Buttons (Matching CV Page Style) */}
          <div className="reveal reveal-delay-2 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToElement('featured-architectures')}
              className="group inline-flex items-center justify-center gap-3.5 bg-white text-black font-semibold text-xs tracking-widest uppercase px-6 py-3.5 rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Explore Projects</span>
              <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="text-xs font-bold leading-none">↓</span>
              </div>
            </button>

            <a
              href={data.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <span>GitHub Repositories</span>
              <span className="text-white/40 text-xs">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Projects Container */}
      <section id="featured-architectures" className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-40 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 reveal">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-white mb-3">Featured Architectures</h2>
            <p className="text-base md:text-lg text-white/60 font-light leading-relaxed">
              Deep-dive breakdowns of bare-metal compilers, explainable NLP classifiers, and real-time dashboards.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 1; // 0-indexed, so idx 1 is the 2nd project (even)
            return (
            <div key={project.id} id={project.id} className="w-full reveal">
              <PremiumCard className="w-full">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}>
                  
                  {/* Left/Text Column */}
                  <div className="w-full lg:w-1/2 flex flex-col items-start">
                    <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6">{project.title}</h3>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map(tag => (
                        <TechTag key={tag} name={tag} />
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
                      {project.hfSpace && (
                        <MagneticButton href={project.hfSpace}>Hugging Face</MagneticButton>
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
