import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Smoothly scroll to any element by ID without modifying window.location.hash
 * and without triggering React Router route changes.
 */
export const scrollToElement = (id) => {
  if (!id) return false;
  const targetId = id.replace(/^#/, '');
  const el = document.getElementById(targetId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

    // Next-frame retry if element hasn't finished painting
    const frameId = requestAnimationFrame(() => {
      scrollToElement(targetId);
    });

    return () => cancelAnimationFrame(frameId);
  }, [location.pathname, location.hash]);

  return { scrollToElement };
};

export default useScrollToHash;
