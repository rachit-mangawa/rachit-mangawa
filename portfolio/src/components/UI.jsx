import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from "@phosphor-icons/react/ArrowUpRight";

export const PremiumCard = ({ children, className = "" }) => {
  return (
    <div
      className={`relative rounded-3xl bg-white/2 border border-white/10 hover:border-white/20 transition-colors duration-200 w-full overflow-hidden p-4 sm:p-6 md:p-10 lg:p-12 ${className}`}
    >
      {children}
    </div>
  );
};

export const MagneticButton = ({ children, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 sm:gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 rounded-full pl-3.5 sm:pl-4 pr-1.5 py-1.5 text-xs origin-center hover:scale-105 active:scale-[0.96] transition-all duration-160 ease-out cursor-pointer max-w-full"
    >
      <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/90 whitespace-nowrap">{children}</span>
      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center origin-center transition-transform duration-160 ease-out group-hover:scale-110 shrink-0">
        <ArrowUpRight size={11} weight="bold" className="text-white/80 group-hover:text-white" aria-hidden="true" />
      </div>
    </a>
  );
};

export const SectionLink = ({ to, href, children = "View All", className = "" }) => {
  const target = to || href;
  const isExternal = typeof target === 'string' && target.startsWith('http');
  const content = (
    <>
      <span className="truncate">{children}</span>
      <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/10 group-hover:bg-white/20 border border-white/10 flex items-center justify-center origin-center transition-transform duration-160 ease-out group-hover:scale-110 shrink-0">
        <ArrowUpRight size={10} weight="bold" className="text-white/70 group-hover:text-white transition-colors" aria-hidden="true" />
      </span>
    </>
  );
  const classes = `group inline-flex items-center gap-2 sm:gap-2.5 pl-3 sm:pl-4 pr-1 sm:pr-1.5 py-1 sm:py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 text-[11px] sm:text-xs font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80 hover:text-white origin-center hover:scale-105 active:scale-[0.96] transition-all duration-160 ease-out cursor-pointer shrink-0 ${className}`;

  if (isExternal) {
    return (
      <a href={target} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link to={target} className={classes}>
      {content}
    </Link>
  );
};
