import React from 'react';
import useReveal from '../hooks/useReveal';
import aadhaarLogo from '../assets/aadhaar-logo.png';
import { PORTFOLIO_CONTENT } from '../content';

const logos = {
  'aadhaar-logo.png': aadhaarLogo
};

const DOT_COLORS = {
  'emerald-400': 'bg-emerald-400',
  'cyan-400': 'bg-cyan-400',
};

export default function Experience() {
  useReveal();
  const data = PORTFOLIO_CONTENT;

  return (
    <main className="relative z-10 w-full overflow-hidden min-h-screen">
      {/* Hero Section - Centered 2-Column Split matching Dashboard */}
      <section className="relative min-h-dvh flex flex-col justify-center w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 w-full reveal">

          {/* Left Column (Headline + Impact Overview) */}
          <div className="lg:col-span-8 flex flex-col justify-start">
            <h1 className="reveal font-serif text-[14vw] md:text-[9vw] leading-[0.96] font-normal tracking-tight text-white mb-8 pb-2">
              Experience
              <span className="block mt-1.5 md:mt-2.5 italic">
                & Impact<span className="text-white/40 not-italic">.</span>
              </span>
            </h1>

            <div className="reveal reveal-delay-1 text-lg md:text-xl lg:text-2xl font-light text-white/70 leading-[1.6] tracking-tight text-left space-y-4">
              <p>
                Architected <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">air-gapped document intelligence</span> and national contact-center telemetry pipelines at <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">UIDAI (Aadhaar)</span>.
              </p>
              <p>
                Eliminated manual spreadsheet workflows with automated asynchronous ingest, zero-cloud OCR across <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">12 Indic languages</span>, and sub-minute LLM triage running strictly on <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">CPU-constrained hardware</span> for 1,000+ officers.
              </p>
            </div>
          </div>

          {/* Right Column (Impact & Scale Specs) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {[
              { label: "Host Organization", value: "UIDAI / Aadhaar HQ" },
              { label: "Internal Reach", value: "1,000+ Active Officers" },
              { label: "Local Model Stack", value: "CPU-Bound Gemma3 & Tesseract" },
              { label: "Ingest Cadence", value: "100K+ Rows / Idempotent WAL" },
              { label: "Indic Script Coverage", value: "12 Regional Languages" },
            ].map((item, idx) => (
              <div key={idx} className="group flex items-center justify-between p-4 md:p-5 bg-white/2 border border-white/10 rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all duration-300 reveal" style={{ animationDelay: `${idx * 50 + 200}ms` }}>
                <div className="flex flex-col">
                  <span className="text-white/50 text-xs uppercase tracking-[0.2em] font-bold mb-1.5">{item.label}</span>
                  <span className="text-white/90 text-sm md:text-base font-medium transition-transform duration-300 group-hover:translate-x-1">{item.value}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="flex flex-col gap-24 border-l border-white/10 ml-6 md:ml-7">
        
        {data.internships.map((internship, idx) => (
        <div key={idx} className="relative pl-8 md:pl-12 reveal reveal-delay-1 mb-24">
          <div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 rounded-2xl overflow-hidden bg-white border-4 border-[#050505] flex items-center justify-center">
            <img src={logos[internship.logo]} alt={internship.company} className="object-contain w-full h-full p-2 md:p-3" />
          </div>
          
          <div className="mb-6 pt-1 md:pt-2">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-white mb-3">{internship.company}</h2>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h3 className="text-xl text-white/70 font-medium">{internship.role}</h3>
              <span className="text-xs tracking-[0.2em] uppercase text-white/50 font-bold shrink-0 bg-white/5 px-4 py-2 rounded-full border border-white/10">{internship.date}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {internship.tags.map(tag => (
              <span key={tag} className="text-xs text-white/70 px-4 py-2 rounded-full bg-white/5 border border-white/10 tracking-widest font-medium">{tag}</span>
            ))}
          </div>
          
          <div className="flex flex-col gap-12">
            {internship.projects.map((proj, pIdx) => (
            <div key={pIdx} className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-medium text-white mb-6 flex items-center gap-4">
                <span className={`w-2 h-2 rounded-full ${DOT_COLORS[proj.color] || 'bg-emerald-400'}`}></span>
                {proj.title}
              </h4>
              <ul className="flex flex-col gap-4 text-white/60 font-light leading-relaxed">
                {proj.points.map((point, idx2) => (
                <li key={idx2} className="flex gap-4">
                  <span className="text-white/30 mt-1">0{idx2 + 1}</span>
                  <p>{point}</p>
                </li>
                ))}
              </ul>
            </div>
            ))}
          </div>
        </div>
        ))}

        </div>
      </section>
    </main>
  );
}
