import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getLenis } from './useLenis';

/**
 * Smoothly scroll to any element by ID without modifying window.location.hash
 * and without triggering React Router route changes.
 * Uses Lenis if available with an offset for the floating navigation bar.
 */
export const scrollToElement = (id, offset = -80) => {
  if (!id) return false;
  const targetId = id.replace(/^#/, '');
  const el = document.getElementById(targetId);
  if (el) {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(el, { offset, duration: 1.2 });
    } else {
      const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY + offset);
      window.scrollTo({ top, behavior: 'smooth' });
    }
    return true;
  }
  return false;
};

/**
 * Hook to automatically handle hash scrolling on page load and location changes.
 */
export const useScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const targetId = location.hash.replace(/^#/, '');

    // Immediate attempt
    if (scrollToElement(targetId)) return;

    // Delayed retry if element hasn't finished painting/mounting
    const timer = setTimeout(() => {
      scrollToElement(targetId);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return { scrollToElement };
};

export default useScrollToHash;
