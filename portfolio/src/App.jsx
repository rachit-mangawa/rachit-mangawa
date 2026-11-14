import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactSection from './components/ContactSection';
import SmoothScroll from './components/SmoothScroll';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import IndexDrawer from './components/IndexDrawer';
import { useLenis } from './hooks/useLenis';
import { SectionLink } from './components/UI';
import { ROUTE_MAP, ROUTE_LOADERS } from './routes';
import Home from './pages/Home';

const Skills = lazy(ROUTE_LOADERS['/skills']);
const Projects = lazy(ROUTE_LOADERS['/projects']);
const Experience = lazy(ROUTE_LOADERS['/experience']);
const CommandPalette = lazy(() => import('./components/CommandPalette'));

gsap.registerPlugin(ScrollTrigger);

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
        <div className="min-h-dvh bg-[#050505] text-white flex flex-col items-center justify-center p-6 text-center font-sans">
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
              className="px-5 py-2.5 rounded-sm bg-white text-black font-semibold text-xs tracking-widest uppercase hover:bg-white/90 active:scale-[0.98] transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
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
  const lenis = useLenis();

  useEffect(() => {
    if (!hash) {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 120);

    const currentMeta = ROUTE_MAP[pathname] || ROUTE_MAP['/'];
    document.title = currentMeta.title;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', currentMeta.description);
    }

    return () => clearTimeout(timer);
  }, [pathname, hash, lenis]);

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

function MainLayout() {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [{ showPreloader, isFastPreload }, setPreloaderState] = useState(() => {
    if (typeof window === 'undefined') return { showPreloader: false, isFastPreload: false };
    try {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return { showPreloader: false, isFastPreload: false };

      const hasVisited = sessionStorage.getItem('portfolio_visited') === 'true';
      const navEntries = performance.getEntriesByType('navigation');
      const isReload = navEntries.length > 0 && navEntries[0].type === 'reload';

      if (hasVisited) {
        const navEntry = navEntries[0];
        const isHardReload = isReload && navEntry && navEntry.transferSize > 1500;
        if (isHardReload) {
          return { showPreloader: true, isFastPreload: true };
        }
        return { showPreloader: false, isFastPreload: false };
      }

      return { showPreloader: true, isFastPreload: false };
    } catch {
      return { showPreloader: false, isFastPreload: false };
    }
  });

  const lenis = useLenis();

  useEffect(() => {
    if (showPreloader) {
      lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenis?.start();
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showPreloader, lenis]);

  const handlePreloaderComplete = () => {
    try {
      sessionStorage.setItem('portfolio_visited', 'true');
    } catch {}
    setPreloaderState({ showPreloader: false, isFastPreload: false });
  };

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
    <div className="relative selection:bg-white selection:text-black min-h-dvh text-white overflow-x-hidden font-sans">
      {showPreloader && (
        <Preloader onComplete={handlePreloaderComplete} isFast={isFastPreload} />
      )}
      <PageManager />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-6 focus:left-6 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:font-semibold focus:text-xs focus:uppercase focus:tracking-widest focus:rounded-full focus:shadow-2xl focus:ring-2 focus:ring-white focus:outline-none"
      >
        Skip to main content
      </a>
      <div className="fixed inset-0 radial-glow pointer-events-none z-0" />
      <div className="cad-grid pointer-events-none z-12" />
      <div className="noise-overlay z-50" />

      <Navbar
        onOpenPalette={() => setIsPaletteOpen(true)}
        onOpenDrawer={() => setIsDrawerOpen(true)}
      />
      <IndexDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpenPalette={() => setIsPaletteOpen(true)}
      />
      {isPaletteOpen && (
        <Suspense fallback={null}>
          <CommandPalette isOpen={isPaletteOpen} onClose={() => setIsPaletteOpen(false)} />
        </Suspense>
      )}

      <div className="relative z-10 min-h-[100dvh]">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>

      <ContactSection />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <SmoothScroll>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <MainLayout />
        </BrowserRouter>
      </SmoothScroll>
    </ErrorBoundary>
  );
}

export default App;
