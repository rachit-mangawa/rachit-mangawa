import React from 'react';
import { Link } from 'react-router-dom';
import { SectionLink } from './UI';
import { PORTFOLIO_CONTENT } from '../content';
import * as Icons from './SkillIcons';

export default function SkillsSection() {
  const categories = PORTFOLIO_CONTENT.skills;

  return (
    <section className="mb-32 w-full max-w-7xl mx-auto px-6 md:px-12">
      {/* Header with View All Link to /skills */}
      <div className="flex items-end justify-between mb-16 reveal">
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-white">Skills & Systems</h2>
        <SectionLink to="/skills">View All</SectionLink>
      </div>

      {/* Timeline Overview */}
      <div className="ml-6 md:ml-7 border-l border-white/10 flex flex-col gap-8 md:gap-12">
        {categories.map((cat, idx) => {
          const CategoryIcon = Icons[cat.categoryIcon] || Icons.LanguagesCategoryIcon;
          return (
            <Link
              to="/skills"
              key={cat.id}
              className="group relative reveal block hover:bg-white/2 p-6 -ml-6 pl-12 md:pl-14 rounded-2xl transition-[color,background-color] duration-200"
              style={{ animationDelay: `${idx * 50 + 100}ms` }}
            >
              {/* Clean Timeline Node */}
              <div className="absolute left-6 top-10 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white/20 border-2 border-[#050505] group-hover:bg-white transition-colors duration-200"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white/70 group-hover:text-white transition-colors">
                    <CategoryIcon size={16} />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-white transition-transform duration-200 group-hover:translate-x-1 flex items-center gap-2">
                    {cat.category}
                    <svg className="opacity-30 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </h3>
                </div>

                {cat.pipelineTabs && (
                  <div className="flex flex-wrap items-center gap-2">
                    {cat.pipelineTabs.slice(0, 2).map((tab, tIdx) => {
                      const TabIcon = Icons[tab.icon] || Icons.CppIcon;
                      return (
                        <span
                          key={tIdx}
                          className="flex items-center gap-1.5 text-[10px] md:text-[11px] font-mono uppercase tracking-widest font-bold px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/60 group-hover:border-white/20 group-hover:text-white/80 transition-colors"
                        >
                          <TabIcon size={12} className="shrink-0" />
                          <span>{tab.label}</span>
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>

              <p className="text-base md:text-lg text-white/60 font-light mb-5 max-w-4xl">
                {cat.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => {
                  const Icon = Icons[skill.iconName] || Icons.BashIcon;
                  return (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-xs tracking-wider bg-white/5 border border-white/10 rounded-full text-white/70 group-hover:border-white/20 group-hover:text-white transition-colors duration-200 font-medium"
                    >
                      <Icon size={14} className="text-white/60 group-hover:text-white shrink-0" />
                      <span>{skill.name}</span>
                    </span>
                  );
                })}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
