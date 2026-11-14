import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowUpRight } from '@phosphor-icons/react/ArrowUpRight';

function useMagneticPhysics(factor = 0.35) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) * factor;
      const y = (e.clientY - (rect.top + rect.height / 2)) * factor;
      gsap.to(el, { x, y, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
    };

    const handleMouseLeave = () => {
      if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) return;
      gsap.to(el, { x: 0, y: 0, duration: 0.65, ease: 'elastic.out(1.1, 0.4)', overwrite: 'auto' });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [factor]);

  return ref;
}

export const PremiumCard = ({ children, className = "" }) => {
  return (
    <div
      className={`relative rounded-3xl bg-white/2 border border-white/10 hover:border-white/20 transition-colors duration-200 w-full overflow-hidden p-6 sm:p-8 md:p-10 lg:p-12 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-linear-to-r before:from-transparent before:via-white/20 before:to-transparent before:pointer-events-none ${className}`}
    >
      {children}
    </div>
  );
};

export const MagneticButton = ({ children, href, className = "" }) => {
  const buttonRef = useMagneticPhysics(0.35);

  return (
    <a
      ref={buttonRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2 sm:gap-2.5 bg-white/4 hover:bg-white border border-white/15 hover:border-white rounded-sm px-3.5 py-1.5 text-xs text-white/80 hover:text-black origin-center cursor-pointer max-w-full transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white will-change-transform ${className}`}
    >
      <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider whitespace-nowrap">{children}</span>
      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-xs bg-white/10 group-hover:bg-black/10 flex items-center justify-center shrink-0 transition-colors duration-150">
        <ArrowUpRight size={11} weight="bold" className="text-white/80 group-hover:text-black transition-colors duration-150" aria-hidden="true" />
      </div>
    </a>
  );
};

export const SectionLink = ({ to, href, children = "View All", className = "" }) => {
  const target = to || href;
  const isExternal = typeof target === 'string' && target.startsWith('http');
  const linkRef = useMagneticPhysics(0.25);

  const content = (
    <>
      <span className="truncate">{children}</span>
      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-xs bg-white/10 group-hover:bg-black/10 flex items-center justify-center shrink-0 transition-colors duration-150">
        <ArrowUpRight size={10} weight="bold" className="text-white/70 group-hover:text-black transition-colors duration-150" aria-hidden="true" />
      </div>
    </>
  );
  const classes = `group inline-flex items-center gap-2 sm:gap-2.5 px-3.5 py-1.5 rounded-sm bg-white/4 hover:bg-white border border-white/15 hover:border-white text-[11px] sm:text-xs font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80 hover:text-black origin-center cursor-pointer shrink-0 transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white will-change-transform ${className}`;

  if (isExternal) {
    return (
      <a
        ref={linkRef}
        href={target}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      ref={linkRef}
      to={target}
      className={classes}
    >
      {content}
    </Link>
  );
};
