import React from 'react';
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 py-32 bg-[#020202]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 reveal">
          <div>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-4">Let's build.</h2>
            <p className="text-xl text-white/40 font-light max-w-xl lg:max-w-2xl">
              Currently open for new opportunities. Let's discuss AI, systems architecture, or your next project.
            </p>
          </div>
          
          <a href="mailto:rachitmangawa@example.com" className="group flex items-center justify-between w-full md:w-auto md:min-w-[360px] border-b border-white/20 pb-4 text-white hover:border-white transition-colors">
            <span className="text-xl font-light">Get in touch</span>
            <svg className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-50 group-hover:opacity-100" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pt-8 border-t border-white/10">
          <div className="text-white/40 text-xs font-bold tracking-widest uppercase">
            © {new Date().getFullYear()} Rachit Mangawa
          </div>
          
          <div className="flex flex-wrap items-center gap-8">
            <a href="https://github.com/IDKHowToCodeFR" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white/50 hover:text-white transition-colors">
              <GithubLogo size={16} weight="fill" /> GITHUB
            </a>
            <a href="https://www.linkedin.com/in/rachitmangawa/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white/50 hover:text-white transition-colors">
              <LinkedinLogo size={16} weight="fill" /> LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
