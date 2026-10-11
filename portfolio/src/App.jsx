import React, { useRef, useEffect, useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';

import Resume from './pages/Resume';
import Footer from './components/Footer';

import CommandPalette from './components/CommandPalette';
import { SectionLink } from './components/UI';

const PAGE_TITLES = {
  '/': 'Rachit Mangawa | Systems & AI Engineer',
  '/experience': 'Experience & Impact | Rachit Mangawa',
  '/projects': 'Architecture & Code | Rachit Mangawa',
  '/resume': 'Curriculum Vitae | Rachit Mangawa',
};

const PAGE_DESCRIPTIONS = {
  '/': 'Systems engineer focused on high-throughput backend architecture, local AI runtimes, and low-level code generation.',
  '/experience': 'Air-gapped document intelligence and national contact-center telemetry pipelines engineered at UIDAI (Aadhaar).',
  '/projects': 'Bare-metal C++ compilers for microcontrollers, semantic analyzers, and upstream patches in TensorFlow Core.',
  '/resume': 'Academic foundation in CS & AI at NSUT Delhi, production government engineering, and LeetCode Knight standing.',
};

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/resume', label: 'Resume' },
];

function PageManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = PAGE_TITLES[pathname] || 'Rachit Mangawa';

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', PAGE_DESCRIPTIONS[pathname] || PAGE_DESCRIPTIONS['/']);
    }
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32">
      <h1 className="font-serif text-7xl md:text-9xl font-medium tracking-tighter text-white mb-4">404</h1>
      <p className="text-white/60 text-lg mb-8">Page not found.</p>
      <SectionLink to="/">Return Home</SectionLink>
    </main>
  );
}

function NavBar({ navRef, onOpenPalette }) {
  const { pathname } = useLocation();

  return (
    <nav 
      ref={navRef}
      aria-label="Primary navigation"
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#0A0A0A]/80 backdrop-blur-2xl ring-1 ring-white/10 p-1 sm:p-1.5 rounded-full flex items-center gap-0.5 sm:gap-1 md:gap-2 transition-[transform,opacity,background-color] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] opacity-100 translate-y-0 shadow-2xl max-w-[calc(100vw-1.5rem)]"
    >
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.path;
        return (
          <Link
            key={link.path}
            to={link.path}
            className={`px-2.5 sm:px-3 md:px-4 py-1.5 rounded-full text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-medium transition-all duration-300 ${
              isActive
                ? 'bg-white/15 text-white ring-1 ring-white/20 shadow-sm'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            {link.label}
          </Link>
        );
      })}

      <div className="h-4 w-px bg-white/15 mx-1 hidden sm:block"></div>

      <button
        onClick={onOpenPalette}
        className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white ring-1 ring-white/10 text-[10px] font-mono tracking-wider transition-colors active:scale-95 cursor-pointer"
        title="Open Command Palette (Cmd+K)"
        aria-label="Open Command Palette"
      >
        <span>⌘K</span>
      </button>
    </nav>
  );
}

function App() {
  const navRef = useRef(null);
  const lastScrollY = useRef(0);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (navRef.current) {
            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
              navRef.current.classList.add('opacity-0', '-translate-y-8', 'pointer-events-none');
              navRef.current.classList.remove('opacity-100', 'translate-y-0');
            } else {
              navRef.current.classList.add('opacity-100', 'translate-y-0');
              navRef.current.classList.remove('opacity-0', '-translate-y-8', 'pointer-events-none');
            }
          }
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <HashRouter>
      <PageManager />
      <div className="relative selection:bg-white/20 min-h-screen text-white overflow-x-hidden font-sans">
        <div className="fixed inset-0 radial-glow pointer-events-none z-0"></div>
        <div className="cad-grid"></div>
        <div className="noise-overlay z-50"></div>

        <NavBar navRef={navRef} onOpenPalette={() => setIsPaletteOpen(true)} />
        <CommandPalette isOpen={isPaletteOpen} onClose={() => setIsPaletteOpen(false)} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;


