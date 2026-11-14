import React, { useEffect, useRef } from 'react';
import { scrollDraw } from 'svg-scroll-draw';

/**
 * ScrollDrawCanvas
 * Base wrapper component providing lifecycle-safe, SSR-safe,
 * and prefers-reduced-motion-aware SVG line drawing via svg-scroll-draw.
 *
 * @param {Object} props
 * @param {string} [props.className] - Optional CSS classes for the container
 * @param {Object} [props.triggerOpts] - Custom options forwarded to scrollDraw (e.g., easing, speed, trigger)
 * @param {Function} [props.onDrawComplete] - Optional callback triggered once SVG drawing completes
 * @param {React.ElementType} [props.as] - Container element tag name (default 'div')
 * @param {React.ReactNode} props.children - Child SVG or markup containing paths/strokes
 */
export const ScrollDrawCanvas = ({
  className = '',
  triggerOpts = {},
  onDrawComplete,
  children,
  as: Component = 'div',
  ...rest
}) => {
  const containerRef = useRef(null);
  const onDrawCompleteRef = useRef(onDrawComplete);

  useEffect(() => {
    onDrawCompleteRef.current = onDrawComplete;
  }, [onDrawComplete]);

  useEffect(() => {
    // 1. SSR safety guard
    if (typeof window === 'undefined' || !containerRef.current) {
      return;
    }

    // 2. Prefers-reduced-motion check
    const hasReducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasReducedMotion) {
      // In reduced-motion mode, svg-scroll-draw renders fully drawn immediately,
      // or we gracefully trigger completion callback.
      onDrawCompleteRef.current?.();
      return;
    }

    const options = {
      easing: 'ease-out',
      ...triggerOpts,
      onComplete: () => {
        triggerOpts?.onComplete?.();
        onDrawCompleteRef.current?.();
      },
    };

    let instance;
    try {
      instance = scrollDraw(containerRef.current, options);
    } catch (err) {
      console.warn('ScrollDrawCanvas failed to initialize scrollDraw:', err);
      onDrawCompleteRef.current?.();
      return;
    }

    // 4. Lifecycle cleanup
    return () => {
      if (instance && typeof instance.destroy === 'function') {
        instance.destroy();
      }
    };
  }, [triggerOpts]);

  return React.createElement(Component, { ref: containerRef, className, ...rest }, children);
};

export default ScrollDrawCanvas;
