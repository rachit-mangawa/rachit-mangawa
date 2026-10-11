import React from 'react';
import useReveal from '../hooks/useReveal';
import { DownloadSimple } from '@phosphor-icons/react';

export default function Resume() {
  useReveal();
  const pdfUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <main className="relative z-10 w-full min-h-screen overflow-hidden">

      {/* Hero Section - Centered 2-Column Split matching Dashboard */}
      <section className="relative min-h-dvh flex flex-col justify-center w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 w-full reveal">

          {/* Left Column (Headline + Credentials Overview + Download) */}
          <div className="lg:col-span-8 flex flex-col justify-start">
            <h1 className="reveal font-serif text-[14vw] md:text-[9vw] leading-[0.96] font-normal tracking-tight text-white mb-8 pb-2">
              Curriculum
              <span className="block mt-1.5 md:mt-2.5 italic">
                Vitae<span className="text-white/40 not-italic">.</span>
              </span>
            </h1>

            <div className="reveal reveal-delay-1 text-lg md:text-xl lg:text-2xl font-light text-white/70 leading-[1.6] tracking-tight text-left mb-8 space-y-4">
              <p>
                Academic foundation in Computer Science & Artificial Intelligence at <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">NSUT Delhi</span>, backed by production government engineering, calculus engine debugging, and algorithmic competition.
              </p>
              <p>
                Verified curriculum covering high-concurrency backend services, embedded compiler design, and a top-0.8% <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">LeetCode Knight rating (1982)</span>.
              </p>
            </div>

            {/* Download Button */}
            <div className="reveal reveal-delay-2">
              <a
                href={pdfUrl}
                download="Rachit_Mangawa_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-4 bg-white text-black hover:bg-white/95 rounded-full px-8 py-4 transition-[transform,background-color] duration-300 hover:scale-[1.02] active:scale-[0.97]"
              >
                <span className="text-sm font-bold tracking-widest uppercase">Download PDF</span>
                <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center ml-2 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-115">
                  <DownloadSimple weight="bold" size={14} aria-hidden="true" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Column (Credentials & Profile Highlights) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {[
              { label: "Degree & Major", value: "B.Tech in CS & AI (NSUT)" },
              { label: "Govt Fellowship", value: "Software Dev Intern (UIDAI)" },
              { label: "Competitive Standing", value: "Knight (1982 / Rank 316)" },
              { label: "Open-Source Merge", value: "TensorFlow Math Autodiff" },
              { label: "Document Status", value: "Print-Ready Vector PDF" },
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

      {/* PDF Viewer Container */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-32">
        {/* PDF Viewer Container - Hidden on mobile where object tags fail */}
        <div className="hidden md:block w-full h-[75vh] md:h-[90vh] bg-white/5 ring-1 ring-white/10 rounded-4xl overflow-hidden p-2 reveal reveal-delay-2">
          <div className="w-full h-full rounded-3xl overflow-hidden bg-black/50">
            <object
              data={pdfUrl}
              type="application/pdf"
              className="w-full h-full"
            >
              <div className="flex items-center justify-center h-full w-full bg-black/50 text-white/50">
                <p>Your browser does not support embedded PDFs. Please download the file above.</p>
              </div>
            </object>
          </div>
        </div>
      </section>

    </main>
  );
}

