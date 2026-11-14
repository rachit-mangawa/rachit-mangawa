import React from 'react';
import { PremiumCard, MagneticButton } from '../components/UI';
import useReveal from '../hooks/useReveal';
import { useScrollToHash } from '../hooks/useScrollToHash';
import { TechTag } from '../components/SkillIcons';
import data from '../data.json';
import {
  TranspilerVisual,
  SemanticAnalyzerVisual,
  VeraEngineVisual,
  HfGatewayVisual
} from '../components/ProjectVisuals';

const VISUAL_COMPONENTS = {
  'heartflow': <TranspilerVisual />,
  'vera-engine': <VeraEngineVisual />,
  'hf-backend': <HfGatewayVisual />,
  'semantic': <SemanticAnalyzerVisual />,
};

export default function Projects() {
  useReveal();
  useScrollToHash();

  return (
    <main id="main-content" tabIndex="-1" className="relative z-10 w-full overflow-hidden outline-none">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-28 sm:pt-32 md:pt-40">
        <div className="max-w-5xl flex flex-col justify-start">
          <h1 className="reveal font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] leading-[1.05] font-normal tracking-tight text-white mb-6 sm:mb-8 select-none">
            <span className="block">Featured</span>
            <span className="italic font-normal text-white/95">Systems</span>
            <span className="text-white/45 not-italic font-serif">.</span>
          </h1>

          <div className="reveal reveal-delay-1 text-sm sm:text-base md:text-lg lg:text-xl font-light text-white/70 leading-[1.65] tracking-tight text-left max-w-4xl space-y-3">
            <p className="text-pretty">
              Architectural deep dives into <span className="text-white font-medium">machine learning compilers</span>, low-latency microservices, and deterministic SLM orchestration.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-white/60 text-pretty">
              Zero-malloc C99 kernels, container runtimes, fail-fast fallback cascades, and explainable neural inference engines.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 my-8 sm:my-10 md:my-12">
        <div className="border-t border-white/10" />
      </div>

      <section id="systems-directory" className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-28 md:pb-40 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-16 reveal">
          <div className="max-w-4xl">
            <h2 className="font-serif text-[32px] min-[400px]:text-[40px] sm:text-[54px] md:text-[68px] lg:text-[78px] font-normal tracking-[-0.03em] leading-[1.02] sm:leading-[0.96] text-white mb-4">
              Systems Directory<span className="text-white/30 not-italic font-serif">.</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/60 font-light leading-relaxed text-pretty">
              Selected production implementations and algorithmic architectures.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-12 sm:gap-16 md:gap-24">
          {data.projects.map((project) => (
            <div key={project.id} id={project.id} className="scroll-mt-28 reveal">
              <PremiumCard className="flex flex-col lg:grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start text-left">
                <div className="w-full lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                      <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white">
                        {project.title}
                      </h3>
                      <span className="text-xs sm:text-sm font-mono text-white/40 tracking-wider">
                        / {project.tagline}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white/2 border border-white/5 mb-6">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-white/40">{metric.label}</span>
                          <span className="text-xs sm:text-sm font-mono font-medium text-white/90">{metric.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3 mb-8">
                      {project.deepDive.map((point, i) => (
                        <div key={i} className="flex items-start gap-3 text-xs sm:text-sm font-light text-white/75 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8">
                      {project.tech.map((tag) => (
                        <TechTag key={tag} name={tag} />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
                    {project.live && (
                      <MagneticButton href={project.live}>
                        Live Deployment
                      </MagneticButton>
                    )}
                    {project.hfSpace && (
                      <MagneticButton href={project.hfSpace}>
                        Hugging Face Space
                      </MagneticButton>
                    )}
                    {project.repo && (
                      <MagneticButton href={project.repo}>
                        Source Code
                      </MagneticButton>
                    )}
                  </div>
                </div>

                <div className="w-full lg:col-span-5 flex flex-col justify-center">
                  {VISUAL_COMPONENTS[project.id]}
                </div>
              </PremiumCard>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
