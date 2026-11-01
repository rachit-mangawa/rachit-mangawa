import React from 'react';
import useReveal from '../hooks/useReveal';
import * as Icons from '../components/SkillIcons';
import { PORTFOLIO_CONTENT } from '../content';

export default function Skills() {
  useReveal();
  const categories = PORTFOLIO_CONTENT.skills;

  return (
    <main id="main-content" className="relative z-10 w-full overflow-hidden min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-dvh flex flex-col justify-center w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 w-full reveal">

          {/* Left Column */}
          <div className="lg:col-span-8 flex flex-col justify-start">
            <h1 className="reveal font-serif text-[14vw] md:text-[9vw] leading-[0.96] font-normal tracking-tight text-white mb-8 pb-2">
              Skills
              <span className="block mt-1.5 md:mt-2.5 italic">
                & Systems<span className="text-white/40 not-italic">.</span>
              </span>
            </h1>

            <div className="reveal reveal-delay-1 text-lg md:text-xl lg:text-2xl font-light text-white/70 leading-[1.6] tracking-tight text-left space-y-4">
              <p>
                The languages, frameworks, and tools I use day to day. My work centers on backend systems in Python and FastAPI, C++ for microcontrollers and compilers, and offline ML pipelines with PyTorch and local models.
              </p>
              <p>
                I care about writing software that runs efficiently on constrained hardware, with clear testing and minimal dependencies.
              </p>
            </div>
          </div>

          {/* Right Column (Overview Specs) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {[
              { label: "Languages", value: "C++, Python, TypeScript, SQL" },
              { label: "Machine Learning", value: "PyTorch, Scikit-Learn, SHAP" },
              { label: "Local AI & NLP", value: "Ollama, FAISS, Sentence Transformers" },
              { label: "Backend", value: "FastAPI, WebSockets, Next.js" },
              { label: "Environment", value: "Linux, Docker, Git, PyTest" },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="group flex items-center justify-between p-4 md:p-5 bg-white/2 border border-white/10 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all duration-300 reveal" 
                style={{ animationDelay: `${idx * 50 + 200}ms` }}
              >
                <div className="flex flex-col">
                  <span className="text-white/50 text-xs uppercase tracking-[0.2em] font-bold mb-1.5">{item.label}</span>
                  <span className="text-white/90 text-sm md:text-base font-medium transition-transform duration-300 group-hover:translate-x-1">{item.value}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Stack by Discipline Breakdown */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-40">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">Stack by Discipline</h2>
            <p className="text-base md:text-lg text-white/60 font-light leading-relaxed">
              Technologies I use across production work, open-source projects, and systems experiments.
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {categories.map((category, idx) => {
            const CategoryIcon = Icons[category.categoryIcon] || Icons.LanguagesCategoryIcon;
            return (
              <div
                key={category.id}
                className={`group flex flex-col justify-between p-6 md:p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/7 hover:border-white/20 transition-all duration-300 reveal ${category.colSpan}`}
                style={{ animationDelay: `${idx * 60 + 100}ms` }}
              >
                <div>
                  {/* Category Header with SVG Icon & Pipeline Tabs */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white/80 group-hover:text-white transition-colors">
                        <CategoryIcon size={18} />
                      </div>
                      <h3 className="font-serif text-2xl md:text-3xl font-medium text-white">{category.category}</h3>
                    </div>

                    {/* Architectural Pipeline Tabs (matching Open Source ISSUE & MERGE tabs) */}
                    {category.pipelineTabs && (
                      <div className="flex flex-wrap items-center gap-2">
                        {category.pipelineTabs.map((tab, tIdx) => {
                          const TabIcon = Icons[tab.icon] || Icons.CppIcon;
                          const tabStyles = tab.variant === 'cyan'
                            ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20'
                            : tab.variant === 'purple'
                            ? 'bg-purple-500/10 text-purple-300 border-purple-500/20'
                            : tab.variant === 'emerald'
                            ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                            : tab.variant === 'amber'
                            ? 'bg-amber-500/10 text-amber-300 border-amber-500/20'
                            : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10';
                          return (
                            <span
                              key={tIdx}
                              className={`flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest font-bold px-2.5 py-1 rounded-md border transition-all ${tabStyles}`}
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
                  <p className="text-sm text-white/60 font-light leading-relaxed mb-6">
                    {category.description}
                  </p>

                  {/* Skills Items Grid */}
                  <div className={`grid gap-2.5 sm:gap-3 ${
                    category.id === 'data-infra' 
                      ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3' 
                      : 'grid-cols-1 sm:grid-cols-2'
                  }`}>
                    {category.skills.map((skill) => {
                      const Icon = Icons[skill.iconName] || Icons.BashIcon;
                      return (
                        <div
                          key={skill.name}
                          className="group/item flex items-center gap-3 p-3 rounded-2xl bg-white/2 border border-white/8 hover:bg-white/8 hover:border-white/15 transition-all duration-200"
                        >
                          <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white/70 group-hover/item:text-white transition-colors">
                            <Icon size={18} />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-xs md:text-sm font-medium text-white/90 group-hover/item:text-white truncate transition-colors">
                              {skill.name}
                            </span>
                            {skill.detail && (
                              <span className="text-[10px] md:text-[11px] font-mono text-white/40 group-hover/item:text-white/60 truncate transition-colors">
                                {skill.detail}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
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
