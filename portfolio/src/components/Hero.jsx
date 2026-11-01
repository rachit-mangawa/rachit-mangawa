import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from '@phosphor-icons/react';
import { scrollToElement } from '../hooks/useScrollToHash';

// Factual, anti-slop directory items grounded in real technical work
const DIRECTORY_ITEMS = [
  {
    num: '01',
    title: 'Systems & Compilers',
    detail: 'C++ & Bare-Metal',
    link: '/projects#heartflow',
  },
  {
    num: '02',
    title: 'Machine Learning',
    detail: 'Offline & Vision Models',
    link: '/projects#semantic',
  },
  {
    num: '03',
    title: 'Telemetry & Backends',
    detail: 'High-Throughput Pipelines',
    link: '/experience#uidai-details',
  },
  {
    num: '04',
    title: 'Open Source',
    detail: 'TensorFlow Core Upstream',
    link: '/#open-source',
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-dvh flex flex-col justify-between w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-8 md:pb-10">
      {/* Top Spacer for Viewport Balance */}
      <div className="hidden lg:block h-2" aria-hidden="true" />

      {/* Main Vertically Centered Split Grid */}
      <div className="my-auto py-6 sm:py-8 lg:py-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column: Name & Direct Actions */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h1 className="font-serif text-[18vw] sm:text-[14vw] md:text-[12vw] lg:text-[7.8rem] xl:text-[8.75rem] leading-[0.84] font-normal tracking-tight text-white select-none">
            Rachit<br />
            <span className="italic font-normal text-white/95">Mangawa</span>
            <span className="text-white/30 not-italic font-serif">.</span>
          </h1>

          <div className="pt-8 sm:pt-12 flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 bg-white text-black font-semibold text-xs uppercase tracking-widest px-7 py-3.5 rounded-full hover:bg-white/90 active:scale-[0.96] transition-all duration-200 shadow-xl"
            >
              <span>Explore Projects</span>
              <ArrowUpRight
                size={14}
                weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <button
              type="button"
              onClick={() => scrollToElement('experience')}
              className="px-5 py-3.5 text-xs font-mono text-white/50 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Scroll to Index ↓
            </button>
          </div>
        </div>

        {/* Right Column: Extended Lines with Crisp [04] Header */}
        <div className="lg:col-span-5 flex flex-col justify-center lg:pl-4">
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
                className="group py-4 border-b border-white/10 hover:border-white/30 flex items-baseline justify-between transition-all duration-200"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-white/30 group-hover:text-emerald-400 transition-colors duration-200 tabular-nums">
                    {item.num}
                  </span>
                  <span className="text-base sm:text-lg text-white/85 font-light tracking-tight group-hover:text-white group-hover:translate-x-1 transition-all duration-200">
                    {item.title}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-white/40 group-hover:text-white/70 transition-colors duration-200">
                    {item.detail}
                  </span>
                  <ArrowUpRight
                    size={12}
                    className="text-white/20 group-hover:text-white/70 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0"
                  />
                </div>
              </Link>
            ))}
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
          className="text-white/40 hover:text-white transition-colors cursor-pointer text-sm"
        >
          ↓
        </button>
      </div>
    </section>
  );
}

