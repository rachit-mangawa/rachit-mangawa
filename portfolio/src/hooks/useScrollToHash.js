import { useEffect, useCallback } from 'react';
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
 * Hook to automatically handle hash scrolling on page load and location changes,
 * with polling fallbacks for lazily rendered or animating elements.
 */
export const useScrollToHash = () => {
  const location = useLocation();

  const performScroll = useCallback((targetId) => {
    if (!targetId) return;
    
    // Immediate attempt
    if (scrollToElement(targetId)) return;

    // Retry at 100ms
    const t1 = setTimeout(() => {
      if (scrollToElement(targetId)) return;
      
      // Final retry at 300ms for lazily laid out or delayed components
      const t2 = setTimeout(() => {
        scrollToElement(targetId);
      }, 200);
      return () => clearTimeout(t2);
    }, 100);

    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace(/^#/, '');
      performScroll(targetId);
    }
  }, [location.pathname, location.hash, performScroll]);

  return { scrollToElement };
};

export default useScrollToHash;

