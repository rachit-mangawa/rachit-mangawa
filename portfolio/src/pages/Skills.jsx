import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import { useScrollToHash, scrollToElement } from '../hooks/useScrollToHash';
import * as Icons from '../components/SkillIcons';
import { PORTFOLIO_CONTENT } from '../content';

const DISCIPLINE_APPLICATIONS = {
  'languages': {
    label: 'Bare-metal C++ Compilers & UIDAI Async Backends',
    link: '/projects#heartflow'
  },
  'genai-nlp': {
    label: 'Air-Gapped Hybrid RAG & OCR Grievance Pipeline',
    link: '/experience#uidai-details'
  },
  'ml-vision': {
    label: 'TensorFlow Core Autodiff Fix & Explainable AI',
    link: '/projects#semantic'
  },
  'backend-web': {
    label: '4.2M+ Telemetry Ingestion Engine & SQLite WAL',
    link: '/experience#uidai-details'
  },
  'data-infra': {
    label: 'Async Workbooks ETL & Vectorized Batch Processing',
    link: '/experience#uidai-details'
  }
};

export default function Skills() {
  useReveal();
  useScrollToHash();
  const categories = PORTFOLIO_CONTENT.skills;

  return (
    <main id="main-content" className="relative z-10 w-full overflow-hidden min-h-screen">
      {/* Header */}
      <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-5xl flex flex-col justify-start">
          <h1 className="reveal font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] leading-[1.05] font-normal tracking-tight text-white mb-8 select-none">
            Skills<br />
            <span className="italic font-normal text-white/95">& Systems</span>
            <span className="text-white/30 not-italic font-serif">.</span>
          </h1>

          <div className="reveal reveal-delay-1 text-base md:text-lg lg:text-xl font-light text-white/70 leading-[1.65] tracking-tight text-left max-w-4xl space-y-3 mb-8">
            <p>
              Languages, execution runtimes, and storage engines used for backend services, bare-metal microcontrollers, and offline ML pipelines.
            </p>
            <p className="text-sm md:text-base text-white/50">
              Focused on hardware-constrained execution (&lt;8GB RAM CPU nodes, ESP32 registers) and minimal dependencies.
            </p>
          </div>

          {/* Direct-Jump Buttons (Matching CV Page Style) */}
          <div className="reveal reveal-delay-2 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToElement('stack-by-discipline')}
              className="group inline-flex items-center justify-center gap-3.5 bg-white text-black font-semibold text-xs tracking-widest uppercase px-6 py-3.5 rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Explore Stack</span>
              <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="text-xs font-bold leading-none">↓</span>
              </div>
            </button>

            <Link
              to="/experience#uidai-details"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <span>Production Systems</span>
              <span className="text-white/40 text-xs">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stack by Discipline Breakdown */}
      <section id="stack-by-discipline" className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-40 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 reveal">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-white mb-3">Stack by Discipline</h2>
            <p className="text-base md:text-lg text-white/60 font-light leading-relaxed">
              Detailed technical catalog across languages, runtimes, machine learning pipelines, backend services, and data tooling.
            </p>
          </div>
        </div>

        {/* Sequential Sections by Discipline */}
        <div className="flex flex-col gap-10 md:gap-14">
          {categories.map((category, idx) => {
            const CategoryIcon = Icons[category.categoryIcon] || Icons.LanguagesCategoryIcon;
            return (
              <div
                key={category.id}
                id={category.id}
                className="scroll-mt-28 flex flex-col justify-between p-7 md:p-10 bg-transparent border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-300 reveal"
                style={{ animationDelay: `${idx * 60 + 100}ms` }}
              >
                <div>
                  {/* Category Header with SVG Icon & Pipeline Tabs */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-2xl bg-transparent border border-white/10 flex items-center justify-center shrink-0 text-white/80">
                        <CategoryIcon size={20} />
                      </div>
                      <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-white">
                        {category.category}
                      </h3>
                    </div>

                    {/* Architectural Pipeline Tabs */}
                    {category.pipelineTabs && (
                      <div className="flex flex-wrap items-center gap-2">
                        {category.pipelineTabs.map((tab, tIdx) => {
                          const TabIcon = Icons[tab.icon] || Icons.CppIcon;
                          const tabStyles = tab.variant === 'cyan'
                            ? 'text-cyan-300 border-cyan-500/30'
                            : tab.variant === 'purple'
                            ? 'text-purple-300 border-purple-500/30'
                            : tab.variant === 'emerald'
                            ? 'text-emerald-300 border-emerald-500/30'
                            : tab.variant === 'amber'
                            ? 'text-amber-300 border-amber-500/30'
                            : 'text-white/70 border-white/15';
                          return (
                            <span
                              key={tIdx}
                              className={`flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-md bg-transparent border transition-all ${tabStyles}`}
                            >
                              <TabIcon size={12} className="shrink-0" />
                              <span>{tab.label}</span>
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Category Description */}
                  <p className="text-sm md:text-base text-white/60 font-light leading-relaxed mb-6 max-w-4xl">
                    {category.description}
                  </p>

                  {/* All Skills Tags in Flex-Wrap Layout with Transparent Background */}
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-full bg-transparent border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-all duration-200"
                      >
                        <Icons.TechIcon name={skill.name} size={14} className="shrink-0 text-white/60" />
                        <span>{skill.name}</span>
                        {skill.detail && (
                          <span className="text-[10px] font-mono text-white/40 pl-1.5 border-l border-white/10">
                            {skill.detail}
                          </span>
                        )}
                      </span>
                    ))}
                  </div>

                  {/* Clean Discipline-to-Work Bridge (Non-cluttered interaction pattern) */}
                  {DISCIPLINE_APPLICATIONS[category.id] && (
                    <div className="mt-8 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <span className="font-mono text-white/30 text-[11px] uppercase tracking-wider">Production Application</span>
                      <Link
                        to={DISCIPLINE_APPLICATIONS[category.id].link}
                        className="group inline-flex items-center gap-1.5 text-white/70 hover:text-emerald-400 transition-colors font-medium text-xs"
                      >
                        <span>{DISCIPLINE_APPLICATIONS[category.id].label}</span>
                        <span className="group-hover:translate-x-0.5 transition-transform text-white/40 group-hover:text-emerald-400">→</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
