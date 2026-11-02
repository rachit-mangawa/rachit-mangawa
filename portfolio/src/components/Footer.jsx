import React from 'react';
import { GithubLogo, LinkedinLogo, ArrowUpRight } from "@phosphor-icons/react";
import CopyEmailButton from './CopyEmailButton';
import { PORTFOLIO_CONTENT } from '../content';

const CURRENT_YEAR = new Date().getFullYear();

function KaggleLogo({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.246l-5.178-6.589-1.444 1.383v5.187c0 .164-.047.281-.141.351-.094.07-.234.105-.422.105H5.215c-.188 0-.328-.035-.422-.105-.094-.07-.141-.188-.141-.351V.352c0-.164.047-.281.141-.352C4.887 0 5.027 0 5.215 0h2.711c.188 0 .328 0 .422.07.094.071.141.188.141.352v14.473l6.234-6.199c.141-.14.305-.211.492-.211h3.28c.141 0 .235.047.282.141.047.094.023.187-.07.281l-6.726 6.518 6.984 8.152c.07.094.094.188.07.282z"/>
    </svg>
  );
}

export default function Footer() {
  const data = PORTFOLIO_CONTENT;
  return (
    <footer className="w-full border-t border-white/5 py-12 md:py-16 bg-[#020202]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-10 md:gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-10 reveal">
          <div className="max-w-xl lg:max-w-2xl">
            <h2 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-white mb-3">Let's build.</h2>
            <p className="text-base md:text-lg text-white/60 font-light leading-relaxed">
              Open to new engineering challenges and systems collaboration.
            </p>
          </div>

          <div className="flex items-center justify-between w-full md:w-auto md:min-w-96 border-b border-white/20 pb-3 gap-6 group hover:border-white transition-colors">
            <a 
              href={`mailto:${data.personal.email}`} 
              className="flex items-center gap-3 text-white transition-colors"
            >
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase">GET IN TOUCH</span>
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-50 group-hover:opacity-100" weight="bold" size={16} />
            </a>

            <CopyEmailButton email={data.personal.email} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-6 border-t border-white/10">
          <div className="text-white/50 text-xs font-bold tracking-[0.2em] uppercase">
            © {CURRENT_YEAR} {data.personal.name}
          </div>

          <div className="flex flex-wrap items-center gap-5 md:gap-7">
            <a href={data.personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-colors">
              <GithubLogo size={15} weight="fill" /> GITHUB
            </a>
            <a href={data.personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-colors">
              <LinkedinLogo size={15} weight="fill" /> LINKEDIN
            </a>
            <a href={data.personal.kaggle} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-white/50 hover:text-white transition-colors">
              <KaggleLogo size={15} /> KAGGLE
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
