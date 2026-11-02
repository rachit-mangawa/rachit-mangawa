import React from 'react';
import useReveal from '../hooks/useReveal';
import { useScrollToHash } from '../hooks/useScrollToHash';
import { DownloadSimple, ArrowUpRight } from '@phosphor-icons/react';

export default function Resume() {
  useReveal();
  useScrollToHash();
  const pdfUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <main id="main-content" className="relative z-10 w-full min-h-screen overflow-hidden">

      {/* Header */}
      <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-5xl flex flex-col justify-start">
          <h1 className="reveal font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] leading-[1.05] font-normal tracking-tight text-white mb-8 select-none">
            Curriculum<br />
            <span className="italic font-normal text-white/95">Vitae</span>
            <span className="text-white/30 not-italic font-serif">.</span>
          </h1>

          <div className="reveal reveal-delay-1 text-base md:text-lg lg:text-xl font-light text-white/70 leading-[1.65] tracking-tight text-left mb-8 max-w-4xl space-y-3">
            <p>
              Engineering air-gapped document intelligence systems, high-throughput telemetry data pipelines, and bare-metal compilers for microcontrollers.
            </p>
            <p className="text-sm md:text-base text-white/50">
              Grounded in upstream numerical patches for TensorFlow Core and competitive algorithmic rankings (<span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">LeetCode Knight 1987, Codeforces Specialist 1422</span>).
            </p>
          </div>

          {/* Action Buttons: Download PDF + View in Tab */}
          <div className="reveal reveal-delay-2 flex flex-wrap items-center gap-3">
            <a
              href={pdfUrl}
              download="Rachit_Mangawa_Resume.pdf"
              className="group inline-flex items-center justify-center gap-3.5 bg-white text-black font-semibold text-xs tracking-widest uppercase px-6 py-3.5 rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Download PDF</span>
              <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <DownloadSimple weight="bold" size={13} aria-hidden="true" />
              </div>
            </a>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-white/80 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <span>Open in New Tab</span>
              <ArrowUpRight size={14} className="text-white/40" />
            </a>
          </div>
        </div>
      </section>

      {/* PDF Viewer Container */}
      <section id="document-preview" className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-32 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 reveal">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-white mb-3">Document Preview</h2>
            <p className="text-base md:text-lg text-white/60 font-light leading-relaxed">
              Official engineering curriculum vitae formatted for technical recruiters and hiring managers.
            </p>
          </div>
        </div>

        {/* PDF Viewer Container - Hidden on mobile where object tags fail */}
        <div className="hidden md:block w-full h-[75vh] md:h-[90vh] bg-white/5 ring-1 ring-white/10 rounded-4xl overflow-hidden p-2 reveal reveal-delay-2">
          <div className="w-full h-full rounded-3xl overflow-hidden bg-black/50">
            <object
              data={pdfUrl}
              type="application/pdf"
              title="Rachit Mangawa Resume (PDF)"
              aria-label="Rachit Mangawa Resume (PDF)"
              className="w-full h-full"
            >
              <div className="flex flex-col items-center justify-center gap-4 h-full w-full bg-black/50 text-white/70 p-6 text-center">
                <p>Your browser does not support embedded PDFs.</p>
                <a
                  href={pdfUrl}
                  download="Rachit_Mangawa_Resume.pdf"
                  className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-colors"
                >
                  Download Resume PDF
                </a>
              </div>
            </object>
          </div>
        </div>
      </section>

    </main>
  );
}
