import React from 'react';
import { useReveal } from '../components/UI';

export default function Resume() {
  useReveal();

  return (
    <main className="relative z-10 w-full min-h-screen pt-40 pb-32 overflow-hidden flex flex-col items-center">
      
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 mb-12 text-center reveal">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-4">Interactive Resume</h1>
        <p className="text-white/50 text-lg">A detailed view of my professional experience and background.</p>
      </div>

      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 reveal reveal-delay-1 flex flex-col items-center">
        
        {/* PDF Viewer Container - Hidden on mobile where object tags fail */}
        <div className="hidden md:block w-full h-[70vh] md:h-[85vh] bg-white/5 ring-1 ring-white/10 rounded-4xl overflow-hidden p-2 mb-12">
          <div className="w-full h-full rounded-3xl overflow-hidden bg-black/50">
            <object 
              data="./resume.pdf" 
              type="application/pdf" 
              className="w-full h-full"
            >
              <div className="flex items-center justify-center h-full w-full bg-black/50 text-white/50">
                <p>Your browser does not support embedded PDFs. Please download the file below.</p>
              </div>
            </object>
          </div>
        </div>

        {/* Download Button */}
        <div className="reveal reveal-delay-2">
          <a href="./resume.pdf" download target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-4 bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]">
            <span className="text-sm font-bold tracking-widest uppercase">Download PDF</span>
            <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center ml-2 group-hover:translate-y-1 transition-transform duration-700">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
            </div>
          </a>
        </div>

      </div>

    </main>
  );
}
