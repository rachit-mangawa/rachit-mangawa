import React from 'react';
import { Link } from 'react-router-dom';
import { SectionLink } from './UI';
import * as Icons from './SkillIcons';
import { PORTFOLIO_CONTENT } from '../content';

export default function SkillsSection() {
  const categories = PORTFOLIO_CONTENT.skills;

  return (
    <section id="skills" className="mb-32 w-full max-w-7xl mx-auto px-6 md:px-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 reveal">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-white">
            Skills & Systems
          </h2>
        </div>
        <SectionLink to="/skills">View Full Stack</SectionLink>
      </div>

      {/* Structured Category Rows - Clicking any row or icon jumps to that section in /skills */}
      <div className="border-t border-white/10 reveal reveal-delay-1">
        {categories.map((row) => {
          const CategoryIcon = Icons[row.categoryIcon] || Icons.LanguagesCategoryIcon;
          const targetUrl = `/skills#${row.id}`;
          return (
            <div
              key={row.id}
              className="py-4 sm:py-5 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-3.5 md:gap-8 group hover:bg-white/1 transition-colors duration-200"
            >
              {/* Left Column: Category Label linking to the specific section on /skills */}
              <Link
                to={targetUrl}
                className="md:w-56 lg:w-64 shrink-0 flex items-center gap-2.5 group/label cursor-pointer text-white/50 hover:text-white transition-colors duration-200"
                title={`Jump to ${row.category} on Skills page`}
              >
                <CategoryIcon
                  size={16}
                  className="text-white/40 group-hover/label:text-emerald-400 group-hover:text-emerald-400 transition-colors duration-200 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-xs font-mono uppercase tracking-[0.2em] font-semibold group-hover/label:text-white transition-colors duration-200">
                  {row.category}
                </span>
                <span className="text-xs text-white/20 group-hover/label:text-emerald-400 group-hover/label:translate-x-0.5 transition-all duration-200">
                  →
                </span>
              </Link>

              {/* Right Column: Icon Dock with Tooltips linking to the specific section on /skills */}
              <div className="flex-1 flex flex-wrap items-center gap-2 sm:gap-2.5">
                {row.skills.map((skill) => (
                  <Link
                    key={skill.name}
                    to={targetUrl}
                    className="relative group/skill flex items-center justify-center cursor-pointer"
                    aria-label={`Jump to ${skill.name} under ${row.category} on Skills page`}
                  >
                    <div
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/3 border border-white/10 hover:border-white/30 hover:bg-white/8 text-white/70 hover:text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
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
                      className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#121212] border border-white/15 text-[11px] font-mono text-white whitespace-nowrap opacity-0 pointer-events-none group-hover/skill:opacity-100 transition-opacity duration-150 z-30 shadow-2xl"
                    >
                      {skill.name}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-[#121212]" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
