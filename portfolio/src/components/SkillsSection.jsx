import React from 'react';
import { Link } from 'react-router-dom';
import { SectionLink } from './UI';
import { ArrowUpRight, Cpu, Brain, HardDrives, ArrowsMerge } from '@phosphor-icons/react';
import { TechTag } from './SkillIcons';

const ARCHITECTURAL_PILLARS = [
  {
    id: "systems-edge",
    title: "Low-Level & Edge Runtimes",
    domain: "COMPILERS & EMBEDDED",
    categoryIcon: Cpu,
    description: "Compiling trained ML models into zero-dependency C99 headers for microcontrollers with INT8 quantization and AST analysis.",
    skills: ["C/C++", "Python", "PlatformIO", "ESP32"],
    link: "/skills#languages"
  },
  {
    id: "airgapped-ai",
    title: "Air-Gapped AI & Hybrid RAG",
    domain: "LOCAL INFERENCE & RETRIEVAL",
    categoryIcon: Brain,
    description: "Offline multi-lingual OCR and document retrieval pipelines combining local Ollama models with dual dense-sparse vector search.",
    skills: ["PyTorch", "Ollama", "Hugging Face", "OpenCV"],
    link: "/skills#genai-nlp"
  },
  {
    id: "backend-streaming",
    title: "High-Throughput Backend & Streaming",
    domain: "DISTRIBUTED & CONCURRENT APIS",
    categoryIcon: HardDrives,
    description: "Async API engines built for high-write concurrency, real-time bi-directional telemetry streaming, and row-level JWT claim security.",
    skills: ["FastAPI", "WebSockets", "SQLite WAL", "Redis"],
    link: "/skills#backend-web"
  },
  {
    id: "data-verification",
    title: "Data Engineering & Verification",
    domain: "ETL, CI/CD & NUMERICAL CORE",
    categoryIcon: ArrowsMerge,
    description: "Vectorized batch processing of 100K+ row workbooks, reproducible container workflows, and upstream autodiff numerical patches.",
    skills: ["Docker", "Linux", "PyTest", "Pandas"],
    link: "/skills#data-infra"
  }
];

export default function SkillsSection() {
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

      {/* Overview Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {ARCHITECTURAL_PILLARS.map((pillar, idx) => {
          const CategoryIcon = pillar.categoryIcon;
          return (
            <Link
              to={pillar.link}
              key={pillar.id}
              className="group relative flex flex-col justify-between p-6 md:p-7 bg-white/2 border border-white/10 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-[background-color,border-color,transform] duration-200 active:scale-[0.99] reveal"
              style={{ animationDelay: `${idx * 80 + 100}ms` }}
            >
              <div>
                {/* Header Row: Domain Overline + Arrow */}
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <CategoryIcon size={15} className="text-white/50 group-hover:text-white transition-colors" />
                    <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/50">
                      {pillar.domain}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-white/40 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0"
                    aria-hidden="true"
                  />
                </div>

                {/* Pillar Title */}
                <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-white group-hover:text-emerald-400 transition-colors duration-200 mb-3">
                  {pillar.title}
                </h3>

                {/* Concise 1-sentence description */}
                <p className="text-white/60 text-sm md:text-base font-light leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Row: Inline Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {pillar.skills.map((skill) => (
                  <TechTag key={skill} name={skill} />
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
