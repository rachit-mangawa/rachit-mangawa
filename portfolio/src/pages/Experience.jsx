import React from 'react';
import useReveal from '../hooks/useReveal';
import { useScrollToHash, scrollToElement } from '../hooks/useScrollToHash';
import aadhaarLogo from '../assets/aadhaar-logo.png';
import { PORTFOLIO_CONTENT } from '../content';
import { TechTag } from '../components/SkillIcons';

export default function Experience() {
  useReveal();
  useScrollToHash();
  const data = PORTFOLIO_CONTENT;

  return (
    <main id="main-content" tabIndex="-1" className="relative z-10 w-full overflow-hidden min-h-screen outline-none">
      {/* Header */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-28 sm:pt-32 md:pt-40">
        <div className="max-w-5xl flex flex-col justify-start">
          <h1 className="reveal font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] leading-[1.05] font-normal tracking-tight text-white mb-6 sm:mb-8 select-none">
            Experience<br />
            <span className="italic font-normal text-white/95">& Impact</span>
            <span className="text-white/30 not-italic font-serif">.</span>
          </h1>

          <div className="reveal reveal-delay-1 text-sm sm:text-base md:text-lg lg:text-xl font-light text-white/70 leading-[1.65] tracking-tight text-left max-w-4xl space-y-3">
            <p>
              Engineering <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">air-gapped document intelligence systems</span> and high-throughput telemetry data pipelines.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-white/50">
              Operated under air-gapped security protocols, local CPU inference, and strict data confidentiality.
            </p>
          </div>
        </div>
      </div>

      {/* Section Divider Line */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 my-6 sm:my-8 md:my-10">
        <div className="border-t border-white/10" />
      </div>

      <section id="professional-experience" className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-24 md:mb-32 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-16 reveal">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-3">Professional Experience</h2>
            <p className="text-sm sm:text-base md:text-lg text-white/60 font-light leading-relaxed">
              Engineering air-gapped document intelligence systems and high-throughput telemetry data pipelines across 4.2M+ records.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-24 border-l border-white/10 ml-4 sm:ml-6 md:ml-7">
        
        {data.internships.map((internship, idx) => (
        <div key={idx} className="relative pl-6 sm:pl-8 md:pl-12 reveal reveal-delay-1 mb-20 md:mb-24">
          <div className="absolute left-0 top-0 -translate-x-1/2 w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden bg-white border-4 border-[#050505] flex items-center justify-center">
            <img src={aadhaarLogo} alt={`${internship.company} Logo`} className="object-contain w-full h-full p-1.5 sm:p-2 md:p-3" />
          </div>
          
          <div className="p-5 sm:p-6 md:p-8 rounded-3xl bg-white/2 border border-white/10 mb-8 sm:mb-10 block text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-3">
              <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-white">
                {internship.company}
              </h3>
              <span className="text-[11px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white/50 font-bold shrink-0 self-start sm:self-auto bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10">
                {internship.date}
              </span>
            </div>

            <h4 className="text-base sm:text-lg md:text-xl text-white/70 font-medium mb-4">
              {internship.role}
            </h4>

            <div className="text-sm md:text-base text-white/60 font-light leading-relaxed max-w-4xl space-y-2 mb-6">
              {internship.shortPoints.map((point, sIdx) => (
                <p key={sIdx}>{point}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-6">
              {internship.tags.slice(0, 8).map(tag => (
                <TechTag key={tag} name={tag} />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollToElement('subsystems-details')}
              className="group inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
            >
              <span>View Detailed Subsystems Implementation</span>
              <span className="origin-center group-hover:scale-110 inline-block transition-transform duration-160 ease-out">↓</span>
            </button>
          </div>
          
          {/* Detailed View */}
          <div id="subsystems-details" className="flex flex-col gap-8 sm:gap-12 scroll-mt-28">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 pb-2 border-b border-white/10">
              Detailed Systems Architecture
            </div>
            {internship.projects.map((proj, pIdx) => (
            <div key={pIdx} className="bg-white/5 border border-white/10 rounded-3xl p-5 sm:p-6 md:p-8 hover:bg-white/10 transition-colors">
              <h4 className="font-serif text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-white mb-4 sm:mb-6 flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full shrink-0 ${proj.color === 'cyan-400' ? 'bg-cyan-400' : 'bg-emerald-400'}`}></span>
                <span>{proj.title}</span>
              </h4>
              <ul className="flex flex-col gap-3 sm:gap-4 text-sm md:text-base text-white/60 font-light leading-relaxed">
                {proj.points.map((point, idx2) => (
                <li key={idx2} className="flex gap-3 sm:gap-4">
                  <span className="text-white/30 font-mono text-xs mt-1 shrink-0">0{idx2 + 1}</span>
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
