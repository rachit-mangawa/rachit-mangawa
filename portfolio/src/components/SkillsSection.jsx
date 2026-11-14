import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from '@phosphor-icons/react/ArrowUpRight';
import * as Icons from './SkillIcons';
import data from '../data.json';

export default function SkillsSection({ className = "mb-20 sm:mb-24 md:mb-28" }) {
  const categories = data.skills;

  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 ${className}`}>
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12 reveal">
        <div className="max-w-4xl">
          <h2 className="font-serif text-[32px] min-[400px]:text-[40px] sm:text-[54px] md:text-[68px] lg:text-[78px] font-normal tracking-[-0.03em] leading-[1.02] sm:leading-[0.96] text-white">
            Skills & Systems<span className="text-white/30 not-italic font-serif">.</span>
          </h2>
        </div>
      </div>

      {/* Open Skills Matrix */}
      <div className="flex flex-col gap-8 sm:gap-10 reveal reveal-delay-1">
        {categories.map((row) => {
          const CategoryIcon = Icons[row.categoryIcon] || Icons.LanguagesCategoryIcon;
          return (
            <div
              key={row.id}
              className="flex flex-col lg:flex-row lg:items-start justify-between gap-3 lg:gap-8 group"
            >
              {/* Left Column: Category Label */}
              <div className="lg:w-60 shrink-0 flex items-center gap-2.5 text-white/60">
                <CategoryIcon
                  size={16}
                  className="text-white/50 shrink-0 group-hover:text-white transition-colors"
                  aria-hidden="true"
                />
                <span className="text-xs font-mono uppercase tracking-[0.2em] font-semibold text-white/80 group-hover:text-white transition-colors whitespace-nowrap">
                  {row.category}
                </span>
              </div>

              {/* Right Column: Skill Pill Badges */}
              <div className="flex-1 flex flex-wrap items-center gap-2 sm:gap-2.5">
                {row.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/pill inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 text-white/80 hover:text-white transition-all duration-200 cursor-default shadow-sm active:scale-[0.98]"
                  >
                    <Icons.TechIcon
                      name={skill.name}
                      size={14}
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

        {/* Bottom Progressive Action */}
        <div className="pt-2">
          <Link
            to="/skills"
            className="group inline-flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-sm bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 font-mono text-xs uppercase tracking-wider text-white/80 hover:text-white transition-all duration-150 shadow-sm active:scale-[0.98] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
          >
            <span>View full stack breakdown</span>
            <ArrowUpRight size={13} weight="bold" className="shrink-0 text-white/60 group-hover:text-white transition-colors duration-150" />
          </Link>
        </div>
      </div>
    </div>
  );
}
