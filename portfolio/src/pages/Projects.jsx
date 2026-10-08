import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PremiumCard, MagneticButton, useReveal, TranspilerVisual, SemanticAnalyzerVisual } from '../components/UI';

export default function Projects() {
  useReveal();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const projects = [
    {
      id: "heartflow",
      title: "HeartFlow OS",
      description: "Distributed Edge AI platform bridging high-level Python MLOps and resource-constrained embedded systems.",
      deepDive: [
        <>Engineered a <span className="text-white font-medium pb-px border-b border-emerald-500/40">fault-tolerant telemetry dashboard</span> for live cardiovascular monitoring via WebSockets.</>,
        <>Built an automated MLOps pipeline for seamless <span className="text-white font-medium pb-px border-b border-emerald-500/40">background retraining and hot-swapping</span> without interrupting active inference.</>,
        <>Implemented an exporter that transpiles Scikit-Learn soft-voting ensembles into highly optimized, <span className="text-white font-medium pb-px border-b border-emerald-500/40">zero-dependency C++ code</span> tailored for microcontrollers (ESP32).</>
      ],
      tech: ['Next.js 16', 'React 19', 'FastAPI', 'Python 3.10', 'PlatformIO', 'WebSockets'],
      repo: "https://github.com/IDKHowToCodeFR/HEARTFLOW_OS",
      live: "https://idkhowtocodefr.github.io/HEARTFLOW_OS/",
      visualContent: <TranspilerVisual />
    },
    {
      id: "semantic",
      title: "Semantic Analyzer",
      description: "High-performance NLP pipeline for the semantic analysis of customer feedback and support tickets.",
      deepDive: [
        <>Replaced slow zero-shot classification with <span className="text-white font-medium pb-px border-b border-blue-500/40">all-MiniLM embeddings</span> and an <span className="text-white font-medium pb-px border-b border-blue-500/40">SVM classification head</span>, handling thousands of requests per second.</>,
        <>Developed a custom <span className="text-white font-medium pb-px border-b border-blue-500/40">occlusion explainability algorithm</span> to calculate exact word-level contributions for intent attribution.</>,
        <>Deployed a high-performance decoupled <span className="text-white font-medium pb-px border-b border-blue-500/40">FastAPI REST interface</span> layered with business heuristic evaluation.</>
      ],
      tech: ['Python', 'FastAPI', 'Sentence Transformers', 'Hugging Face', 'Scikit-Learn'],
      repo: "https://github.com/IDKHowToCodeFR/Semantic-Comment-Analyze",
      visualContent: <SemanticAnalyzerVisual />
    }
  ];

  return (
    <main className="relative z-10 w-full overflow-hidden">
      {/* Intro section */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 w-full max-w-7xl mx-auto">
        <div className="reveal">
          <h1 className="text-5xl md:text-8xl font-medium tracking-tighter text-white mb-8">
            Architecture <br/><span className="text-white/40">& Code</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl font-light leading-relaxed">
            A deep dive into the systems, compilers, and intelligent pipelines I've built. Scroll down to explore the technical decisions and architecture behind each project.
          </p>
        </div>
      </section>

      {/* Projects Container */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-40">
        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 1; // 0-indexed, so idx 1 is the 2nd project (even)
            return (
            <div key={project.id} id={project.id} className="w-full reveal">
              <PremiumCard className="w-full">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}>
                  
                  {/* Left/Text Column */}
                  <div className="w-full lg:w-1/2 flex flex-col items-start">
                    <span className="text-emerald-400 font-mono text-sm mb-4 block tracking-wider">0{idx + 1} // {project.id.toUpperCase()}</span>
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">{project.title}</h2>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map(tag => (
                        <span key={tag} className="px-3 py-1.5 text-[10px] md:text-xs tracking-widest uppercase bg-white/5 border border-white/10 rounded-full text-white/60 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="space-y-4 text-base md:text-lg text-white/60 font-light leading-relaxed mb-10">
                      {project.deepDive.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <MagneticButton href={project.repo}>View Source Code</MagneticButton>
                      {project.live && (
                        <MagneticButton href={project.live}>View Live</MagneticButton>
                      )}
                    </div>
                  </div>

                  {/* Right/Visual Column */}
                  <div className="w-full lg:w-1/2 flex items-center justify-center">
                    {project.visualContent}
                  </div>

                </div>
              </PremiumCard>
            </div>
          )})}
        </div>
      </section>
    </main>
  );
}
