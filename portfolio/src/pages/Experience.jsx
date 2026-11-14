import React from 'react';
import useReveal from '../hooks/useReveal';
import { useScrollToHash } from '../hooks/useScrollToHash';
import aadhaarLogo from '../assets/aadhaar-logo.png';
import { TechTag } from '../components/SkillIcons';
import data from '../data.json';

export default function Experience() {
  useReveal();
  useScrollToHash();

  return (
    <main id="main-content" tabIndex="-1" className="relative z-10 w-full overflow-hidden min-h-screen outline-none">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-28 sm:pt-32 md:pt-40">
        <div className="max-w-5xl flex flex-col justify-start">
          <h1 className="reveal font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] leading-[1.05] font-normal tracking-tight text-white mb-6 sm:mb-8 select-none">
            <span className="block">Experience</span>
            <span className="italic font-normal text-white/95">& Impact</span>
            <span className="text-white/45 not-italic font-serif">.</span>
          </h1>

          <div className="reveal reveal-delay-1 text-sm sm:text-base md:text-lg lg:text-xl font-light text-white/70 leading-[1.65] tracking-tight text-left max-w-4xl space-y-3">
            <p className="text-pretty">
              Production engineering on <span className="text-white font-medium">air-gapped document intelligence</span> and high-volume telemetry ingestion at UIDAI (Aadhaar).
            </p>
            <p className="text-xs sm:text-sm md:text-base text-white/60 text-pretty">
              Deployed in isolated government environments using local CPU inference, strict data residency controls, and zero external network access.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 my-8 sm:my-10 md:my-12">
        <div className="border-t border-white/10" />
      </div>

      <section id="professional-experience" className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-28 md:mb-36 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-16 reveal">
          <div className="max-w-4xl">
            <h2 className="font-serif text-[32px] min-[400px]:text-[40px] sm:text-[54px] md:text-[68px] lg:text-[78px] font-normal tracking-[-0.03em] leading-[1.02] sm:leading-[0.96] text-white mb-4">
              Professional Experience<span className="text-white/30 not-italic font-serif">.</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/60 font-light leading-relaxed">
              Engineering air-gapped document intelligence systems and high-throughput telemetry data pipelines across 4.2M+ records.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-24 border-l border-white/10 ml-4 sm:ml-6 md:ml-7">
          {data.experience.map((internship, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 md:pl-12 reveal reveal-delay-1 mb-20 md:mb-24">
              <div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden bg-white border-4 border-[#050505] flex items-center justify-center">
                <img src={aadhaarLogo} alt={`${internship.company} Logo`} className="object-contain w-full h-full p-1.5 sm:p-2 md:p-3" />
              </div>

              <div className="mb-12 md:mb-16 block text-left max-w-4xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-3">
                  <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-white">
                    {internship.company}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-widest text-white/60 shrink-0 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
                    {internship.date}
                  </span>
                </div>

                <div className="text-sm md:text-base font-mono text-white/70 mb-6 font-medium">
                  {internship.role}
                </div>

                <ul className="space-y-4 mb-6">
                  {internship.shortPoints.map((point, i) => (
                    <li key={i} className="text-sm sm:text-base font-light text-white/75 leading-relaxed flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-2.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {internship.tags.map((tag) => (
                    <TechTag key={tag} name={tag} />
                  ))}
                </div>
              </div>

              <div className="space-y-12 sm:space-y-16 max-w-4xl">
                <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/55 pb-2 border-b border-white/10 flex items-center justify-between">
                  <span>Detailed Systems Architecture</span>
                  <span className="text-white/40">[02 Subsystems]</span>
                </div>
                {internship.projects.map((proj, pIdx) => (
                  <div key={pIdx} className="text-left">
                    <h4 className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-white mb-6 flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full shrink-0 bg-white/60" />
                      <span>{proj.title}</span>
                    </h4>

                    <ul className="space-y-4">
                      {proj.points.map((pt, ptIdx) => (
                        <li key={ptIdx} className="text-sm sm:text-base font-light text-white/75 leading-relaxed flex items-start gap-4">
                          <span className="text-white/40 font-mono text-xs mt-1 shrink-0 tabular-nums">0{ptIdx + 1}</span>
                          <span className="text-pretty">{pt}</span>
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
