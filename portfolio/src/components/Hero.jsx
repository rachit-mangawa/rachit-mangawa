import React from 'react';
import HeroArtwork from './art/HeroArtwork';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[82vh] lg:min-h-[88vh] w-full flex-col items-center justify-center px-4 py-28 sm:py-36 md:py-40 text-white"
    >
      <div className="relative flex w-full max-w-4xl flex-col items-center justify-center gap-6 text-center mx-auto z-10">
        <h1
          className="relative z-10 font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] font-normal tracking-[-0.03em] leading-[0.92] text-white select-none"
        >
          <span className="block">RACHIT</span>
          <span className="italic font-normal inline-block">Mangawa</span>
          <span className="text-white/30 not-italic font-serif inline-block">.</span>
        </h1>

        <p className="relative z-10 max-w-2xl font-mono text-xs sm:text-sm md:text-base text-white/70 tracking-[0.2em] uppercase font-medium">
          Machine Learning Systems &amp; Software Architecture
        </p>

        <HeroArtwork className="mt-8 sm:mt-10 max-w-md sm:max-w-xl md:max-w-2xl mx-auto w-full" />
      </div>

      <div
        className="absolute bottom-6 sm:bottom-8 inset-x-0 flex flex-col items-center justify-center gap-1.5 text-white/30 font-mono text-[10px] tracking-[0.25em] uppercase select-none pointer-events-none"
        aria-hidden="true"
      >
        <span>Scroll to explore</span>
        <span className="w-1 h-3 rounded-full bg-white/20 animate-pulse" />
      </div>
    </section>
  );
}
