import React, { useRef, useEffect, useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import { SectionLink } from './components/UI';

const PAGE_TITLES = {
  '/': 'Rachit Mangawa',
  '/skills': 'Skills & Systems | Rachit Mangawa',
  '/experience': 'Experience & Impact | Rachit Mangawa',
  '/projects': 'Architecture & Code | Rachit Mangawa',
};

const PAGE_DESCRIPTIONS = {
  '/': 'Engineering air-gapped document intelligence systems, bare-metal C99 compilers, and high-throughput telemetry pipelines.',
  '/skills': 'Architecting low-level execution runtimes, air-gapped RAG pipelines, and concurrent database storage engines.',
  '/experience': 'Engineering air-gapped document intelligence systems and high-throughput telemetry data pipelines.',
  '/projects': 'Building zero-dependency microcontroller compilers, multi-tier AI orchestrators, and upstream TensorFlow Core engines.',
};

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/experience', label: 'Experience' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
];

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    if (import.meta.env.DEV) {
      console.error('Unhandled UI exception:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 text-center font-sans">
          <div className="max-w-md p-8 rounded-3xl bg-white/5 border border-white/10 ring-1 ring-white/10 shadow-2xl">
            <h1 className="font-serif text-3xl font-medium text-white mb-3">Something went wrong</h1>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              An unexpected error occurred while rendering this view.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.reload();
              }}
              className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-widest uppercase hover:bg-white/90 transition-all cursor-pointer"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function PageManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
    document.title = PAGE_TITLES[pathname] || 'Rachit Mangawa';

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', PAGE_DESCRIPTIONS[pathname] || PAGE_DESCRIPTIONS['/']);
    }
  }, [pathname, hash]);
  return null;
}

function NotFound() {
  return (
    <main id="main-content" className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32">
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
      className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 bg-[#0A0A0A]/85 backdrop-blur-2xl ring-1 ring-white/10 p-1 sm:p-1.5 rounded-full flex items-center gap-0.5 sm:gap-1 md:gap-2 transition-[transform,opacity,background-color] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] opacity-100 translate-y-0 shadow-2xl max-w-[calc(100vw-1rem)] sm:max-w-[calc(100vw-1.5rem)]"
    >
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.path;
        return (
          <Link
            key={link.path}
            to={link.path}
            className={`px-2.5 sm:px-3 md:px-4 py-1.5 rounded-full text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-medium whitespace-nowrap shrink-0 transition-all duration-300 ${
              isActive
                ? 'bg-white/15 text-white ring-1 ring-white/20 shadow-sm'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            {link.label}
          </Link>
        );
      })}

      <div className="h-4 w-px bg-white/15 mx-0.5 sm:mx-1 shrink-0"></div>

      <button
        onClick={onOpenPalette}
        className="inline-flex items-center justify-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white ring-1 ring-white/10 text-[10px] font-mono tracking-wider transition-colors active:scale-95 cursor-pointer shrink-0"
        title="Open Command Palette (⌘K)"
        aria-label="⌘K Open Command Palette"
        aria-keyshortcuts="Control+K Meta+K"
      >
        <span className="hidden sm:inline">⌘K</span>
        <span className="sm:hidden font-mono text-[10px]">⌘</span>
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
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ErrorBoundary>
      <HashRouter>
        <PageManager />
        <button
          type="button"
          onClick={() => {
            const el = document.getElementById('main-content');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
              el.focus();
            }
          }}
          className="sr-only focus:not-sr-only focus:fixed focus:top-6 focus:left-6 focus:z-100 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:font-semibold focus:text-xs focus:uppercase focus:tracking-widest focus:rounded-full focus:shadow-2xl focus:ring-2 focus:ring-white focus:outline-none"
        >
          Skip to main content
        </button>
        <div className="relative selection:bg-white/20 min-h-screen text-white overflow-x-hidden font-sans">
          <div className="fixed inset-0 radial-glow pointer-events-none z-0"></div>
          <div className="cad-grid"></div>
          <div className="noise-overlay z-50"></div>

          <NavBar navRef={navRef} onOpenPalette={() => setIsPaletteOpen(true)} />
          <CommandPalette isOpen={isPaletteOpen} onClose={() => setIsPaletteOpen(false)} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </div>
      </HashRouter>
    </ErrorBoundary>
  );
}

export default App;
