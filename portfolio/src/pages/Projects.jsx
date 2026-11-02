import React from 'react';
import { PremiumCard, MagneticButton } from '../components/UI';
import useReveal from '../hooks/useReveal';
import { useScrollToHash } from '../hooks/useScrollToHash';
import { PORTFOLIO_CONTENT } from '../content';
import { TechTag } from '../components/SkillIcons';

export default function Projects() {
  useReveal();
  useScrollToHash();
  const projects = PORTFOLIO_CONTENT.projects;
  return (
    <main id="main-content" tabIndex="-1" className="relative z-10 w-full overflow-hidden outline-none">
      {/* Header */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-28 sm:pt-32 md:pt-40">
        <div className="max-w-5xl flex flex-col justify-start">
          <h1 className="reveal font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] leading-[1.05] font-normal tracking-tight text-white mb-6 sm:mb-8 select-none">
            Architecture<br />
            <span className="italic font-normal text-white/95">& Code</span>
            <span className="text-white/30 not-italic font-serif">.</span>
          </h1>

          <div className="reveal reveal-delay-1 text-sm sm:text-base md:text-lg lg:text-xl font-light text-white/70 leading-[1.65] tracking-tight text-left max-w-4xl space-y-3">
            <p>
              Engineering <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">bare-metal C99 compilers</span>, multi-tier AI orchestrators, pluggable API gateways, and explainable NLP classifiers.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-white/50">
              Focused on hardware-constrained compilation, air-gapped inference, and verifiable sub-millisecond execution.
            </p>
          </div>
        </div>
      </div>

      {/* Section Divider Line */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 my-6 sm:my-8 md:my-10">
        <div className="border-t border-white/10" />
      </div>

      {/* Projects Container */}
      <section id="featured-architectures" className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-24 md:pb-40 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-16 reveal">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-3">Featured Architectures</h2>
            <p className="text-sm sm:text-base md:text-lg text-white/60 font-light leading-relaxed">
              Engineering deep-dives into bare-metal AST exporters, 4-tier fail-fast cascades, and sub-100ms container gateways.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-28">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 1; // 0-indexed, so idx 1 is the 2nd project (even)
            return (
            <div key={project.id} id={project.id} className="w-full scroll-mt-28">
              <PremiumCard className="w-full">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-14 xl:gap-20 items-stretch lg:items-center`}>
                  
                  {/* Left/Text Column */}
                  <div className="w-full lg:w-1/2 flex flex-col items-start">
                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4 sm:mb-6">{project.title}</h3>
                    
                    <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                      {project.tech.map(tag => (
                        <TechTag key={tag} name={tag} />
                      ))}
                    </div>
                    
                    <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-white/60 font-light leading-relaxed mb-6 sm:mb-10">
                      {project.deepDive.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2.5 sm:gap-4">
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
                  <div className="w-full lg:w-1/2 flex items-center justify-center mt-4 lg:mt-0">
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
