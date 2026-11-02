import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, DownloadSimple } from '@phosphor-icons/react';
import { scrollToElement } from '../hooks/useScrollToHash';

// Direct, unambiguous directory items linking to core systems and projects
const DIRECTORY_ITEMS = [
  {
    num: '01',
    title: 'HeartFlow OS',
    detail: 'Embedded C++ Compiler',
    link: '/projects#heartflow',
  },
  {
    num: '02',
    title: 'Air-Gapped Systems',
    detail: 'Local RAG & Telemetry',
    link: '/experience#subsystems-details',
  },
  {
    num: '03',
    title: 'Semantic Analyzer',
    detail: 'Local NLP & Explainability',
    link: '/projects#semantic',
  },
  {
    num: '04',
    title: 'TensorFlow Core',
    detail: 'Upstream Autodiff Patch',
    link: '/#open-source',
  },
];

export default function Hero() {
  const heroRef = useRef(null);

  // Trigger staggered entrance on mount
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Small delay to ensure DOM is painted before animating
    const timer = requestAnimationFrame(() => {
      if (!heroRef.current) return;
      heroRef.current.querySelectorAll('.hero-enter').forEach((el) => {
        el.classList.add('is-visible');
      });
    });

    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-dvh flex flex-col justify-between w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-8 md:pb-10"
    >
      {/* Top Spacer for Viewport Balance */}
      <div className="hidden lg:block h-2" aria-hidden="true" />

      {/* Main Vertically Centered Split Grid */}
      <div className="my-auto py-6 sm:py-8 lg:py-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column: Name & Direct Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Name Heading */}
          <h1
            className="hero-enter font-serif text-[18vw] sm:text-[14vw] md:text-[12vw] lg:text-[7.8rem] xl:text-[8.75rem] leading-[0.88] font-normal text-white select-none"
            style={{ letterSpacing: '-0.03em' }}
          >
            Rachit<br />
            <span className="italic font-normal text-white/95">Mangawa</span>
            <span className="text-white/30 not-italic font-serif">.</span>
          </h1>

          <div className="hero-enter hero-delay-1 pt-8 sm:pt-12 flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 bg-white text-black font-semibold text-xs uppercase tracking-widest px-7 py-3.5 rounded-full hover:bg-white/90 active:scale-[0.96] transition-[background-color,transform] duration-200 shadow-xl"
            >
              <span>Explore Projects</span>
              <ArrowUpRight
                size={14}
                weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Rachit_Mangawa_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Curriculum Vitae (PDF)"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/10 text-xs font-semibold uppercase tracking-widest text-white/90 hover:text-white active:scale-[0.96] transition-all duration-200 shadow-lg cursor-pointer"
            >
              <span>Download CV</span>
              <DownloadSimple
                size={14}
                weight="bold"
                className="text-white/60 group-hover:text-white transition-colors duration-200 group-hover:translate-y-0.5"
              />
            </a>

            <button
              type="button"
              onClick={() => scrollToElement('experience')}
              className="px-5 py-3.5 text-xs font-mono text-white/50 hover:text-white active:scale-[0.96] transition-[color,transform] duration-200 cursor-pointer"
            >
              Scroll to Index ↓
            </button>
          </div>
        </div>

        {/* Right Column: Editorial Directory with Matching Serif Typography */}
        <div className="hero-enter hero-delay-2 lg:col-span-5 flex flex-col justify-center lg:pl-4">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4 pb-2 border-b border-white/10 flex items-center justify-between">
            <span>Directory</span>
            <span>[04]</span>
          </div>

          <div className="flex flex-col">
            {DIRECTORY_ITEMS.map((item) => (
              <Link
                key={item.num}
                to={item.link}
                onClick={(e) => {
                  if (item.link === '/#open-source') {
                    if (scrollToElement('open-source')) {
                      e.preventDefault();
                    }
                  }
                }}
                className="group py-3.5 border-b border-white/10 hover:border-white/30 flex items-center justify-between transition-[border-color] duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <span className="font-mono text-xs text-white/30 group-hover:text-emerald-400 transition-colors duration-200 tabular-nums">
                    {item.num}
                  </span>
                  <span className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-white/90 group-hover:text-emerald-400 group-hover:translate-x-1 transition-[color,transform] duration-200">
                    {item.title}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-white/40 group-hover:text-white/70 transition-colors duration-200">
                    {item.detail}
                  </span>
                  <ArrowUpRight
                    size={13}
                    className="text-white/20 group-hover:text-emerald-400 opacity-0 group-hover:opacity-100 transition-[color,opacity,transform] duration-200 -translate-x-1 group-hover:translate-x-0"
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* Proof signals line with Codeforces Specialist */}
          <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-white/35 tracking-wider">
            <span>Air-Gapped Systems</span>
            <span className="text-white/20">·</span>
            <span className="text-white/80 font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">Codeforces Specialist (1422)</span>
            <span className="text-white/20">·</span>
            <span className="text-white/80 font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">LeetCode Knight (1987)</span>
            <span className="text-white/20">·</span>
            <span>TensorFlow Contributor</span>
          </div>
        </div>
      </div>

      {/* Clean Bottom Section Boundary Line */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/40">
        <span className="font-mono text-[11px] text-white/30 tracking-wider">Scroll</span>
        <button
          type="button"
          onClick={() => scrollToElement('experience')}
          aria-label="Scroll to experience section"
          className="text-white/40 hover:text-white transition-colors cursor-pointer text-sm animate-scroll-bounce"
        >
          ↓
        </button>
      </div>
    </section>
  );
}
