import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MagnifyingGlass } from '@phosphor-icons/react/MagnifyingGlass';
import { List } from '@phosphor-icons/react/List';
import { FilePdf } from '@phosphor-icons/react/FilePdf';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { useLenis } from '../hooks/useLenis';
import { ROUTES } from '../routes';
import data from '../data.json';

export default function Navbar({ onOpenPalette, onOpenDrawer }) {
  const location = useLocation();
  const lenis = useLenis();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = (currentScroll) => {
      const scrollY = typeof currentScroll === 'number' ? currentScroll : window.scrollY;

      if (scrollY < 50) {
        setIsVisible(true);
        lastScrollY.current = scrollY;
        return;
      }

      const diff = scrollY - lastScrollY.current;

      if (diff > 8) {
        setIsVisible(false);
      } else if (diff < -8) {
        setIsVisible(true);
      }

      lastScrollY.current = scrollY;
    };

    if (lenis) {
      const lenisHandler = (e) => handleScroll(e.scroll);
      lenis.on('scroll', lenisHandler);
      return () => lenis.off('scroll', lenisHandler);
    } else {
      const nativeHandler = () => handleScroll(window.scrollY);
      window.addEventListener('scroll', nativeHandler, { passive: true });
      return () => window.removeEventListener('scroll', nativeHandler);
    }
  }, [lenis]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 h-14 bg-[#050505]/90 backdrop-blur-md border-b border-white/10 px-3 sm:px-6 md:px-8 flex items-center justify-between font-sans text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform focus-within:opacity-100 focus-within:translate-y-0 focus-within:pointer-events-auto ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-3 sm:gap-4 shrink-0">
        <nav
          aria-label="Page navigation"
          className="hidden md:flex items-center gap-2.5 lg:gap-4 xl:gap-5 font-mono text-xs uppercase tracking-wider select-none"
        >
          {ROUTES.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors duration-150 cursor-pointer py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-white/50 hover:text-white'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={onOpenDrawer}
          className="md:hidden flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-white/80 hover:text-white hover:bg-white/5 border border-white/10 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 shrink-0"
          aria-label="Open Navigation Index"
        >
          <List size={14} weight="bold" className="text-white/70" />
          <span className="text-white font-medium">Index</span>
        </button>
      </div>

      <div className="flex-1 max-w-[130px] sm:max-w-xs md:max-w-sm mx-1.5 sm:mx-4 lg:mx-6">
        <button
          type="button"
          onClick={onOpenPalette}
          className="group w-full flex items-center justify-between gap-1.5 px-2 sm:px-3 py-1.5 rounded-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 transition-all text-xs font-mono text-white/50 hover:text-white/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 cursor-pointer"
          title="Search sections, architecture, or press ⌘K"
          aria-label="Open command palette search"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 truncate">
            <MagnifyingGlass
              size={13}
              weight="bold"
              className="text-white/40 group-hover:text-white/70 transition-colors shrink-0"
              aria-hidden="true"
            />
            <span className="truncate text-[11px] sm:text-xs">Search...</span>
          </div>

          <kbd className="inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-white/60 bg-white/5 border border-white/10 rounded-xs shrink-0 select-none">
            ⌘K
          </kbd>
        </button>
      </div>

      <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 shrink-0">
        <a
          href={data.personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2 py-1.5 md:px-2.5 md:py-1.5 rounded-md text-xs font-mono text-white/70 hover:text-white hover:bg-white/5 border border-white/10 md:border-transparent md:hover:border-white/10 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 shrink-0"
          aria-label="LinkedIn Profile (opens in new tab)"
        >
          <LinkedinIcon size={14} className="text-white/80 shrink-0" />
          <span className="hidden md:inline">LinkedIn</span>
        </a>

        <a
          href={data.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2 py-1.5 md:px-2.5 md:py-1.5 rounded-md text-xs font-mono text-white/70 hover:text-white hover:bg-white/5 border border-white/10 md:border-transparent md:hover:border-white/10 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 shrink-0"
          aria-label="GitHub Profile (opens in new tab)"
        >
          <GithubIcon size={14} className="text-white/80 shrink-0" />
          <span className="hidden md:inline">GitHub</span>
        </a>

        <a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          download="Rachit_Mangawa_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 md:px-3 md:py-1.5 rounded-md text-xs font-mono font-medium text-black bg-white hover:bg-white/90 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white shrink-0"
          aria-label="Download CV / Resume PDF"
        >
          <FilePdf size={14} weight="bold" className="shrink-0" />
          <span className="hidden md:inline">Resume</span>
        </a>
      </div>
    </header>
  );
}
