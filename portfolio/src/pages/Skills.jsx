import React from 'react';
import useReveal from '../hooks/useReveal';
import { useScrollToHash, scrollToElement } from '../hooks/useScrollToHash';
import * as Icons from '../components/SkillIcons';
import { PORTFOLIO_CONTENT } from '../content';

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
            <span className="italic font-normal text-white/95">& Stack</span>
            <span className="text-white/30 not-italic font-serif">.</span>
          </h1>

          <div className="reveal reveal-delay-1 text-base md:text-lg lg:text-xl font-light text-white/70 leading-[1.65] tracking-tight text-left max-w-3xl space-y-3 mb-8">
            <p>
              Languages, agentic AI frameworks, machine learning models, and developer tooling I work with daily.
            </p>
          </div>

          {/* Quick-Jump Button */}
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
          </div>
        </div>

        {/* Section Boundary Line */}
        <div className="mt-14 md:mt-20 border-t border-white/10" />
      </section>

      {/* Stack by Discipline Breakdown */}
      <section id="stack-by-discipline" className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-40 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 reveal">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-white mb-3">Stack by Discipline</h2>
            <p className="text-base md:text-lg text-white/60 font-light leading-relaxed">
              Full breakdown across languages, autonomous agents, machine learning runtimes, backend services, and DevOps.
            </p>
          </div>
        </div>

        {/* Sequential Sections by Discipline */}
        <div className="flex flex-col gap-8 md:gap-10">
          {categories.map((category, idx) => {
            const CategoryIcon = Icons[category.categoryIcon] || Icons.LanguagesCategoryIcon;
            return (
              <div
                key={category.id}
                id={category.id}
                className="scroll-mt-28 flex flex-col justify-between p-6 sm:p-8 md:p-10 bg-white/2 border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-300 reveal"
                style={{ animationDelay: `${idx * 60 + 100}ms` }}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white/80">
                      <CategoryIcon size={20} />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-white">
                      {category.category}
                    </h3>
                  </div>

                  {/* Category Description */}
                  <p className="text-sm md:text-base text-white/60 font-light leading-relaxed mb-6 max-w-3xl">
                    {category.description}
                  </p>

                  {/* All Skills Tags in Flex-Wrap Layout */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-xl bg-white/3 border border-white/10 hover:border-white/25 hover:bg-white/8 text-white/80 hover:text-white transition-all duration-200 shadow-sm"
                      >
                        <Icons.TechIcon name={skill.name} size={15} className="shrink-0 text-white/60" />
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
