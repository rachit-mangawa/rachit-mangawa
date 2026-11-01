import React from 'react';
import useReveal from '../hooks/useReveal';
import { useScrollToHash, scrollToElement } from '../hooks/useScrollToHash';
import aadhaarLogo from '../assets/aadhaar-logo.png';
import { PORTFOLIO_CONTENT } from '../content';
import { TechTag } from '../components/SkillIcons';

const logos = {
  'aadhaar-logo.png': aadhaarLogo
};

const DOT_COLORS = {
  'emerald-400': 'bg-emerald-400',
  'cyan-400': 'bg-cyan-400',
};

export default function Experience() {
  useReveal();
  useScrollToHash();
  const data = PORTFOLIO_CONTENT;

  return (
    <main id="main-content" className="relative z-10 w-full overflow-hidden min-h-screen">
      {/* Header */}
      <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-5xl flex flex-col justify-start">
          <h1 className="reveal font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] leading-[1.05] font-normal tracking-tight text-white mb-8 select-none">
            Experience<br />
            <span className="italic font-normal text-white/95">& Impact</span>
            <span className="text-white/30 not-italic font-serif">.</span>
          </h1>

          <div className="reveal reveal-delay-1 text-base md:text-lg lg:text-xl font-light text-white/70 leading-[1.65] tracking-tight text-left max-w-4xl space-y-3 mb-8">
            <p>
              Engineering air-gapped document intelligence systems and high-throughput telemetry data pipelines at <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">UIDAI (Aadhaar)</span>.
            </p>
            <p className="text-sm md:text-base text-white/50">
              Operated under air-gapped security protocols, local CPU inference, and strict data confidentiality.
            </p>
          </div>

          {/* Direct-Jump Buttons (Matching CV Page Style) */}
          <div className="reveal reveal-delay-2 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToElement('professional-experience')}
              className="group inline-flex items-center justify-center gap-3.5 bg-white text-black font-semibold text-xs tracking-widest uppercase px-6 py-3.5 rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Explore Work</span>
              <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="text-xs font-bold leading-none">↓</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => scrollToElement('uidai-details')}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              <span>UIDAI Subsystems</span>
              <span className="text-white/40 text-xs">↓</span>
            </button>
          </div>
        </div>
      </section>

      <section id="professional-experience" className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-32 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 reveal">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-white mb-3">Professional Experience</h2>
            <p className="text-base md:text-lg text-white/60 font-light leading-relaxed">
              Production systems engineering and telemetry pipelines engineered for national infrastructure.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-24 border-l border-white/10 ml-6 md:ml-7">
        
        {data.internships.map((internship, idx) => (
        <div key={idx} className="relative pl-8 md:pl-12 reveal reveal-delay-1 mb-24">
          <div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 rounded-2xl overflow-hidden bg-white border-4 border-[#050505] flex items-center justify-center">
            <img src={logos[internship.logo]} alt={`${internship.company} Logo`} className="object-contain w-full h-full p-2 md:p-3" />
          </div>
          
          {/* Clickable UIDAI Overview Entry navigating to detailed view */}
          <div
            id="uidai-entry"
            onClick={() => {
              const el = document.getElementById('uidai-details');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const el = document.getElementById('uidai-details');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            tabIndex={0}
            role="button"
            aria-label="Navigate to detailed UIDAI system breakdown"
            className="group cursor-pointer p-6 md:p-8 rounded-3xl bg-white/2 hover:bg-white/5 border border-white/10 hover:border-white/25 transition-all duration-300 mb-10 block text-left"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
              <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                {internship.company}
              </h3>
              <span className="text-xs tracking-[0.2em] uppercase text-white/50 font-bold shrink-0 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                {internship.date}
              </span>
            </div>

            <h4 className="text-lg md:text-xl text-white/70 font-medium mb-4">
              {internship.role}
            </h4>

            <div className="text-sm md:text-base text-white/60 font-light leading-relaxed max-w-4xl space-y-2 mb-6">
              {internship.shortPoints.map((point, sIdx) => (
                <p key={sIdx}>{point}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5 mb-6">
              {internship.tags.slice(0, 8).map(tag => (
                <TechTag key={tag} name={tag} />
              ))}
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 group-hover:text-emerald-300 transition-colors">
              <span>View Detailed Subsystems Implementation</span>
              <span className="group-hover:translate-y-0.5 transition-transform duration-200">↓</span>
            </div>
          </div>
          
          {/* Detailed View */}
          <div id="uidai-details" className="flex flex-col gap-12 scroll-mt-28">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 pb-2 border-b border-white/10">
              Detailed Systems Architecture
            </div>
            {internship.projects.map((proj, pIdx) => (
            <div key={pIdx} className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors">
              <h4 className="font-serif text-xl md:text-2xl font-medium tracking-tight text-white mb-6 flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full ${DOT_COLORS[proj.color] || 'bg-emerald-400'}`}></span>
                {proj.title}
              </h4>
              <ul className="flex flex-col gap-4 text-sm md:text-base text-white/60 font-light leading-relaxed">
                {proj.points.map((point, idx2) => (
                <li key={idx2} className="flex gap-4">
                  <span className="text-white/30 font-mono text-xs mt-1">0{idx2 + 1}</span>
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
