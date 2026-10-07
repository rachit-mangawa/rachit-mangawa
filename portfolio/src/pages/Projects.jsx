import React, { useRef, useEffect } from 'react';
import { PremiumCard, MagneticButton, useReveal, TranspilerVisual } from '../components/UI';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const wrap = useRef(null);
  const track = useRef(null);

  useEffect(() => {
    if (!wrap.current || !track.current) return;
    
    let mm = gsap.matchMedia();

    // Only run GSAP horizontal scroll on desktop screens with no reduced motion preference
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const distance = track.current.scrollWidth - window.innerWidth;
      gsap.to(track.current, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () => `+=${distance}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <main className="relative z-10 w-full min-h-[100dvh] bg-[#020202]">
      {/* Intro section that scrolls normally before we pin */}
      <section className="h-screen flex flex-col justify-center px-4 md:px-12 w-full max-w-[1400px] mx-auto overflow-hidden">
        <h1 className="text-[15vw] leading-[0.8] font-semibold tracking-tighter text-white whitespace-nowrap -ml-[1vw]">
          SELECTED<br/><span className="opacity-40">WORK</span>
        </h1>
        <p className="mt-8 text-xl text-white/50 max-w-md">
          Scroll down to explore the architecture.
        </p>
      </section>

      {/* The horizontal scroll section (native CSS scroll on mobile, pinned GSAP on desktop) */}
      <section ref={wrap} className="relative overflow-x-auto md:overflow-hidden snap-x snap-mandatory bg-[#020202]">
        <div ref={track} className="flex min-h-[100dvh] items-center px-6 md:px-32 py-16 md:py-0 gap-8 md:gap-32 w-max">
          
          {/* Project 1 */}
          <div className="w-[85vw] md:w-[65vw] max-w-5xl shrink-0 snap-center">
            <PremiumCard>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">HeartFlow OS</h3>
                  <p className="text-white/70 text-xl leading-relaxed mb-8">
                    AST transpiler compiling Scikit-Learn models into zero-dependency, malloc-free C headers for ESP32/Cortex-M deployment. Engineered INT8 quantization engine, cutting microcontroller flash footprint by ~75%.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-12">
                    {['TypeScript', 'FastAPI', 'C/C++', 'WebSockets', 'PyTest'].map(tag => (
                      <span key={tag} className="px-4 py-2 text-sm tracking-wider uppercase bg-white/5 border border-white/10 rounded-full text-white/60">{tag}</span>
                    ))}
                  </div>
                  <MagneticButton href="https://github.com/IDKHowToCodeFR/HEARTFLOW_OS">View Source Code</MagneticButton>
                </div>
                <div className="flex items-center justify-center relative w-full h-full min-h-[300px]">
                  <TranspilerVisual />
                </div>
              </div>
            </PremiumCard>
          </div>

          {/* Project 2 */}
          <div className="w-[85vw] md:w-[65vw] max-w-5xl shrink-0 snap-center">
            <PremiumCard>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="bg-[#050505] rounded-2xl aspect-square flex items-center justify-center border border-white/10 p-8 overflow-hidden relative group order-2 lg:order-1">
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="grid grid-cols-4 gap-4 opacity-50 group-hover:opacity-100 transition-opacity duration-700">
                    {Array.from({length: 16}).map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-white/20 rounded-sm animate-pulse" style={{ animationDelay: `${i * 100}ms` }}></div>
                    ))}
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">Semantic Analyzer</h3>
                  <p className="text-white/70 text-xl leading-relaxed mb-8">
                    Intent-driven NLP platform. Replaced slow zero-shot classification with all-MiniLM embeddings + SVM head serving thousands of requests/sec. Built occlusion explainability for word-level intent attribution.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-12">
                    {['Python 3.13', 'FastAPI', 'Transformers', 'RoBERTa'].map(tag => (
                      <span key={tag} className="px-4 py-2 text-sm tracking-wider uppercase bg-white/5 border border-white/10 rounded-full text-white/60">{tag}</span>
                    ))}
                  </div>
                  <MagneticButton href="https://github.com/IDKHowToCodeFR/Semantic-Comment-Analyze">View Source Code</MagneticButton>
                </div>
              </div>
            </PremiumCard>
          </div>
          
          {/* End cap */}
          <div className="w-[80vw] md:w-[40vw] shrink-0 snap-center flex flex-col items-center justify-center h-full">
            <h2 className="text-[12vw] leading-none font-semibold tracking-tighter text-white/10">FIN.</h2>
          </div>
        </div>
      </section>
    </main>
  );
}
