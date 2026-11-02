import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from "@phosphor-icons/react";

export const PremiumCard = ({ children, className = "" }) => {
  return (
    <div
      className={`relative rounded-3xl bg-white/2 border border-white/10 hover:border-white/20 transition-colors duration-200 w-full overflow-hidden p-6 sm:p-8 md:p-12 ${className}`}
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
      className="group inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 rounded-full pl-4 pr-1.5 py-1.5 text-xs transition-[background-color,border-color,transform] duration-200 active:scale-[0.96] cursor-pointer"
    >
      <span className="text-xs font-semibold uppercase tracking-wider text-white/90 whitespace-nowrap">{children}</span>
      <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0">
        <ArrowUpRight size={12} weight="bold" className="text-white/80 group-hover:text-white" aria-hidden="true" />
      </div>
    </a>
  );
};

export const SectionLink = ({ to, href, children = "View All", className = "" }) => {
  const target = to || href;
  const isExternal = typeof target === 'string' && target.startsWith('http');
  const content = (
    <>
      <span>{children}</span>
      <span className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-white/20 border border-white/10 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0">
        <ArrowUpRight size={11} weight="bold" className="text-white/70 group-hover:text-white transition-colors" aria-hidden="true" />
      </span>
    </>
  );
  const classes = `group inline-flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 text-xs font-mono uppercase tracking-[0.2em] text-white/80 hover:text-white transition-[background-color,border-color,transform] duration-200 active:scale-[0.96] cursor-pointer ${className}`;

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
