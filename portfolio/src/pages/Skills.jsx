import React from 'react';
import useReveal from '../hooks/useReveal';
import { useScrollToHash } from '../hooks/useScrollToHash';
import * as Icons from '../components/SkillIcons';
import { PORTFOLIO_CONTENT } from '../content';

export default function Skills() {
  useReveal();
  useScrollToHash();
  const categories = PORTFOLIO_CONTENT.skills;

  return (
    <main id="main-content" tabIndex="-1" className="relative z-10 w-full overflow-hidden min-h-screen outline-none">
      {/* Header */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-28 sm:pt-32 md:pt-40">
        <div className="max-w-5xl flex flex-col justify-start">
          <h1 className="reveal font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] leading-[1.05] font-normal tracking-tight text-white mb-6 sm:mb-8 select-none">
            Skills<br />
            <span className="italic font-normal text-white/95">& Stack</span>
            <span className="text-white/30 not-italic font-serif">.</span>
          </h1>

          <div className="reveal reveal-delay-1 text-sm sm:text-base md:text-lg lg:text-xl font-light text-white/70 leading-[1.65] tracking-tight text-left max-w-4xl space-y-3">
            <p>
              Languages, <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">bare-metal C99 compilers</span>, <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">agentic AI frameworks</span>, and developer tooling I work with daily.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-white/50">
              Focused on hardware-constrained execution (&lt;512B stack on microcontrollers, &lt;16GB air-gapped CPU nodes) and zero dynamic memory allocations.
            </p>
          </div>
        </div>
      </div>

      {/* Section Divider Line */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 my-6 sm:my-8 md:my-10">
        <div className="border-t border-white/10" />
      </div>

      {/* Stack by Discipline Breakdown */}
      <section id="stack-by-discipline" className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-24 md:pb-40 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-16 reveal">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-3">Stack by Discipline</h2>
            <p className="text-sm sm:text-base md:text-lg text-white/60 font-light leading-relaxed">
              Full breakdown across languages, autonomous agents, machine learning runtimes, backend services, and DevOps.
            </p>
          </div>
        </div>

        {/* Sequential Sections by Discipline */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
          {categories.map((category, idx) => {
            const CategoryIcon = Icons[category.categoryIcon] || Icons.LanguagesCategoryIcon;
            return (
              <div
                key={category.id}
                id={category.id}
                className="scroll-mt-28 flex flex-col justify-between p-5 sm:p-7 md:p-10 bg-white/2 border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-300 reveal"
                style={{ animationDelay: `${idx * 60 + 100}ms` }}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 sm:gap-3.5 mb-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white/80">
                      <CategoryIcon size={18} />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white">
                      {category.category}
                    </h3>
                  </div>

                  {/* Category Description */}
                  <p className="text-xs sm:text-sm md:text-base text-white/60 font-light leading-relaxed mb-5 sm:mb-6 max-w-3xl">
                    {category.description}
                  </p>

                  {/* All Skills Tags in Flex-Wrap Layout */}
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 text-[11px] sm:text-xs font-medium rounded-xl bg-white/3 border border-white/10 hover:border-white/25 hover:bg-white/8 text-white/80 hover:text-white transition-all duration-200 shadow-sm"
                      >
                        <Icons.TechIcon name={skill.name} size={14} className="shrink-0 text-white/60" />
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
