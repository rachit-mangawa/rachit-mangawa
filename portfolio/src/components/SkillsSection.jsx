import React from 'react';
import { SectionLink } from './UI';
import * as Icons from './SkillIcons';
import { PORTFOLIO_CONTENT } from '../content';

export default function SkillsSection() {
  const categories = PORTFOLIO_CONTENT.skills;

  return (
    <section id="skills" className="mb-8 sm:mb-12 md:mb-14 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12 reveal">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
            Skills & Systems
          </h2>
        </div>
        <div className="self-start md:self-auto">
          <SectionLink to="/skills">View Full Stack</SectionLink>
        </div>
      </div>

      {/* Structured Category Rows */}
      <div className="divide-y divide-white/10 reveal reveal-delay-1">
        {categories.map((row) => {
          const CategoryIcon = Icons[row.categoryIcon] || Icons.LanguagesCategoryIcon;
          return (
            <div
              key={row.id}
              className="py-4 sm:py-5 flex flex-col md:flex-row md:items-center justify-between gap-3.5 md:gap-8 group hover:bg-white/1 transition-colors duration-200"
            >
              {/* Left Column: Category Label */}
              <div className="md:w-56 lg:w-64 shrink-0 flex items-center gap-2.5 text-white/50">
                <CategoryIcon
                  size={16}
                  className="text-white/40 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-xs font-mono uppercase tracking-[0.2em] font-semibold text-white/70">
                  {row.category}
                </span>
              </div>

              {/* Right Column: Icon Dock with Tooltips */}
              <div className="flex-1 flex flex-wrap items-center gap-2 sm:gap-2.5">
                {row.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="relative group/skill flex items-center justify-center cursor-default"
                  >
                    <div
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/3 border border-white/10 hover:border-white/30 hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center origin-center hover:scale-110 active:scale-95 transition-all duration-160 ease-out hover:shadow-lg"
                    >
                      <Icons.TechIcon
                        name={skill.name}
                        size={18}
                        className="shrink-0 transition-transform duration-200 group-hover/skill:scale-110"
                      />
                      <span className="sr-only">{skill.name}</span>
                    </div>

                    {/* Floating Tooltip */}
                    <div
                      role="tooltip"
                      className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#121212] border border-white/15 text-[11px] font-mono text-white whitespace-nowrap opacity-0 pointer-events-none group-hover/skill:opacity-100 group-focus-within/skill:opacity-100 transition-opacity duration-150 z-30 shadow-2xl"
                    >
                      {skill.name}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-[#121212]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
