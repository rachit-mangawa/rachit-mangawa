import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from "@phosphor-icons/react";

export const PremiumCard = ({ children, className = "" }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`relative p-1.5 rounded-4xl bg-white/5 ring-1 ring-white/10 w-full overflow-hidden transition-all duration-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-4xl before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:[background:radial-gradient(400px_circle_at_var(--mouse-x,-200px)_var(--mouse-y,-200px),rgba(255,255,255,0.14),transparent_70%)] ${className}`}
    >
      <div className="relative z-10 bg-[#0A0A0A] rounded-[1.625rem] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] w-full p-8 md:p-12 flex flex-col justify-between wrap-break-word overflow-hidden">
        {children}
      </div>
    </div>
  );
};


export const MagneticButton = ({ children, href, isInternal }) => {
  const inner = (
    <>
      <span className="text-sm font-medium tracking-wide text-white/90 whitespace-nowrap">{children}</span>
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-115 shrink-0">
        <ArrowUpRight aria-hidden="true" />
      </div>
    </>
  );

  const classes = "group inline-flex items-center gap-4 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 rounded-full pl-6 pr-2 py-3 md:py-2 transition-[transform,background-color] duration-300 hover:scale-[1.02] active:scale-[0.97]";

  if (isInternal) {
    return (
      <Link to={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={classes}>
      {inner}
    </a>
  );
};

export const SectionLink = ({ to, href, children = "View All", className = "" }) => {
  const target = to || href;
  const isExternal = typeof target === 'string' && target.startsWith('http');
  const content = (
    <>
      <span>{children}</span>
      <span className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-black/10 group-active:bg-black/10 border border-white/10 group-hover:border-black/10 flex items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-115 group-active:scale-110 shrink-0">
        <ArrowUpRight size={13} weight="bold" className="text-white/70 group-hover:text-black group-active:text-black transition-colors" aria-hidden="true" />
      </span>
    </>
  );
  const classes = `group inline-flex items-center gap-2.5 pl-4 pr-2 py-1.5 rounded-full bg-white/5 hover:bg-[#F5F5F5] active:bg-white border border-white/10 hover:border-white active:border-white text-xs font-bold tracking-widest uppercase text-white/70 hover:text-black active:text-black transition-[background-color,color,border-color,transform] duration-300 hover:scale-[1.02] active:scale-[0.97] ${className}`;

  if (isExternal) {
    return (
      <a href={target} target="_blank" rel="noreferrer" className={classes}>
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


