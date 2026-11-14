import React from 'react';
import useReveal from '../hooks/useReveal';
import { useScrollToHash } from '../hooks/useScrollToHash';
import * as Icons from '../components/SkillIcons';
import data from '../data.json';

export default function Skills() {
  useReveal();
  useScrollToHash();
  const categories = data.skills;

  return (
    <main id="main-content" tabIndex="-1" className="relative z-10 w-full overflow-hidden min-h-screen outline-none">
      {/* Header */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-28 sm:pt-32 md:pt-40">
        <div className="max-w-5xl flex flex-col justify-start">
          <h1 className="reveal font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] leading-[1.05] font-normal tracking-tight text-white mb-6 sm:mb-8 select-none">
            <span className="block">Skills</span>
            <span className="italic font-normal text-white/95">& Stack</span>
            <span className="text-white/30 not-italic font-serif">.</span>
          </h1>

          <div className="reveal reveal-delay-1 text-sm sm:text-base md:text-lg lg:text-xl font-light text-white/70 leading-[1.65] tracking-tight text-left max-w-4xl space-y-3">
            <p className="text-pretty">
              Core languages, runtime environments, and developer tools for <span className="text-white font-medium">systems programming</span> and machine learning.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-white/55 text-pretty">
              Focused on constrained execution: microcontroller targets with &lt;512B stack budgets, and air-gapped CPU nodes under 16GB RAM with zero dynamic heap allocations.
            </p>
          </div>
        </div>
      </div>

      {/* Section Divider Line */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 my-8 sm:my-10 md:my-12">
        <div className="border-t border-white/10" />
      </div>

      {/* Stack by Discipline Breakdown */}
      <section id="stack-by-discipline" className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-28 md:pb-40 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-16 reveal">
          <div className="max-w-4xl">
            <h2 className="font-serif text-[32px] min-[400px]:text-[40px] sm:text-[54px] md:text-[68px] lg:text-[78px] font-normal tracking-[-0.03em] leading-[1.02] sm:leading-[0.96] text-white mb-4">
              Stack by Discipline<span className="text-white/30 not-italic font-serif">.</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/60 font-light leading-relaxed text-pretty">
              Full breakdown across languages, AI tooling, machine learning, backend services, and DevOps.
            </p>
          </div>
        </div>

        {/* Straight-Line Structural Discipline Ledger */}
        <div className="border-y border-white/10 divide-y divide-white/10 reveal reveal-delay-1">
          {categories.map((category) => {
            const CategoryIcon = Icons[category.categoryIcon] || Icons.LanguagesCategoryIcon;
            return (
              <div
                key={category.id}
                id={category.id}
                className="py-8 sm:py-10 md:py-12 scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 transition-colors duration-200 hover:bg-white/1.5"
              >
                {/* Left Column: Category Identity & Discipline Description */}
                <div className="lg:col-span-5 flex flex-col justify-start">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white/80">
                      <CategoryIcon size={16} />
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-white">
                      {category.category}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-white/60 font-light leading-relaxed max-w-md text-pretty">
                    {category.description}
                  </p>
                </div>

                {/* Right Column: Pill Badges */}
                <div className="lg:col-span-7 flex flex-wrap items-center content-start gap-2 sm:gap-2.5 pt-1 lg:pt-0">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/pill inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/3 border border-white/10 hover:border-white/30 hover:bg-white/8 text-white/80 hover:text-white transition-all duration-200 cursor-default shadow-sm active:scale-[0.98]"
                    >
                      <Icons.TechIcon
                        name={skill.name}
                        size={15}
                        className="shrink-0 text-white/70 group-hover/pill:text-white transition-transform duration-200 group-hover/pill:scale-110"
                      />
                      <span className="text-xs sm:text-[13px] font-mono tracking-tight text-white/85 group-hover/pill:text-white select-none whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
