import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from '@phosphor-icons/react/ArrowUpRight';
import { ArrowDown } from '@phosphor-icons/react/ArrowDown';
import { DownloadSimple } from '@phosphor-icons/react/DownloadSimple';
import { scrollToElement } from '../hooks/useScrollToHash';

// Direct, unambiguous directory items linking to core systems and projects
const DIRECTORY_ITEMS = [
  {
    num: '01',
    title: 'HeartFlow OS',
    detail: 'Bare-Metal C99 Compiler',
    link: '/projects#heartflow',
  },
  {
    num: '02',
    title: 'HF Pluggable Gateway',
    detail: 'Sub-100ms Container Gateway',
    link: '/projects#hf-backend',
  },
  {
    num: '03',
    title: 'Semantic Analyzer',
    detail: 'Sub-15ms Intent Engine',
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
  return (
    <div
      className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-28 sm:pt-36 md:pt-40 lg:pt-44 pb-12 sm:pb-16 md:pb-20"
    >
      {/* Main Vertically Centered Split Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column: Name & Direct Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Name Heading */}
          <h1
            className="hero-enter font-serif text-[17vw] sm:text-[14vw] md:text-[12vw] lg:text-[7.8rem] xl:text-[8.75rem] leading-[0.88] font-normal text-white select-none"
            style={{ letterSpacing: '-0.03em' }}
          >
            Rachit<br />
            <span className="italic font-normal text-white/95">Mangawa</span>
            <span className="text-white/30 not-italic font-serif">.</span>
          </h1>

          <div className="hero-enter hero-delay-1 pt-6 sm:pt-10 md:pt-12 flex flex-wrap items-center gap-2.5 sm:gap-3.5">
            <Link
              to="/projects"
              onClick={(e) => {
                if (scrollToElement('featured')) {
                  e.preventDefault();
                  window.history.replaceState(null, '', '#featured');
                }
              }}
              className="group inline-flex items-center gap-2.5 sm:gap-3 bg-white text-black font-semibold text-xs uppercase tracking-widest pl-5 sm:pl-6 pr-2 sm:pr-2.5 py-2.5 sm:py-3 rounded-full hover:bg-white/95 origin-center hover:scale-105 active:scale-[0.96] transition-all duration-160 ease-out shadow-xl"
            >
              <span>Explore Projects</span>
              <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/10 group-hover:bg-black/15 flex items-center justify-center origin-center transition-transform duration-160 ease-out group-hover:scale-110 shrink-0">
                <ArrowDown size={12} weight="bold" className="text-black" />
              </span>
            </Link>

            <a
              href="https://github.com/rachit-mangawa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repositories"
              className="group inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/10 text-xs font-semibold uppercase tracking-widest text-white/90 hover:text-white origin-center hover:scale-105 active:scale-[0.96] transition-all duration-160 ease-out shadow-lg cursor-pointer"
            >
              <span>GitHub Repositories</span>
              <ArrowUpRight
                size={13}
                weight="bold"
                className="text-white/60 group-hover:text-white origin-center transition-transform duration-160 ease-out group-hover:scale-110 shrink-0"
              />
            </a>

            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Rachit_Mangawa_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Curriculum Vitae (PDF)"
              className="group inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-3 sm:py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/10 text-xs font-semibold uppercase tracking-widest text-white/90 hover:text-white origin-center hover:scale-105 active:scale-[0.96] transition-all duration-160 ease-out shadow-lg cursor-pointer"
            >
              <span>Download CV</span>
              <DownloadSimple
                size={13}
                weight="bold"
                className="text-white/60 group-hover:text-white origin-center transition-transform duration-160 ease-out group-hover:scale-110 shrink-0"
              />
            </a>
          </div>
        </div>

        {/* Right Column: Editorial Directory with Matching Serif Typography */}
        <div className="hero-enter hero-delay-2 lg:col-span-5 flex flex-col justify-center lg:pl-4">
          <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 mb-3 sm:mb-4 pb-2 border-b border-white/10 flex items-center justify-between">
            <span>Directory</span>
            <span>[04]</span>
          </div>

          <div className="flex flex-col divide-y divide-white/10">
            {DIRECTORY_ITEMS.map((item) => (
              <Link
                key={item.num}
                to={item.link}
                onClick={(e) => {
                  if (item.link === '/#open-source' || item.link.endsWith('#open-source')) {
                    if (scrollToElement('open-source')) {
                      e.preventDefault();
                      window.history.replaceState(null, '', '#open-source');
                    }
                  }
                }}
                className="group py-3 sm:py-3.5 flex flex-col xs:flex-row xs:items-center justify-between gap-1 xs:gap-3 transition-[border-color] duration-200 hover:border-white/30"
              >
                <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                  <span className="font-mono text-xs text-white/30 group-hover:text-emerald-400 transition-colors duration-160 tabular-nums shrink-0">
                    {item.num}
                  </span>
                  <span className="font-serif text-lg sm:text-2xl font-normal tracking-tight text-white/90 group-hover:text-emerald-400 transition-colors duration-160 truncate">
                    {item.title}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 self-end xs:self-auto pl-6 xs:pl-0">
                  <span className="text-[11px] sm:text-xs font-mono text-white/40 group-hover:text-white/70 transition-colors duration-160">
                    {item.detail}
                  </span>
                  <ArrowUpRight
                    size={13}
                    className="text-white/20 group-hover:text-emerald-400 opacity-0 group-hover:opacity-100 origin-center group-hover:scale-110 transition-all duration-160 shrink-0"
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* Proof signals line: Codeforces and LeetCode only */}
          <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[11px] font-mono text-white/40 tracking-wider">
            <a
              href="https://codeforces.com/profile/i_win_again"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 font-medium underline decoration-white/25 underline-offset-4 decoration-1 hover:decoration-white/80 transition-colors"
            >
              Codeforces Specialist (1422)
            </a>
            <span className="text-white/20">·</span>
            <a
              href="https://leetcode.com/u/rachit-mangawa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 font-medium underline decoration-white/25 underline-offset-4 decoration-1 hover:decoration-white/80 transition-colors"
            >
              LeetCode Knight (1987)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
