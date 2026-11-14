import React, { useEffect, useState, useCallback, useRef } from 'react';
import { coordinateResourceLoading } from '../utils/preloadAssets';

export default function Preloader({ onComplete, isFast = false }) {
  const [count, setCount] = useState(0);
  const [statusText, setStatusText] = useState('Initializing');
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  const targetCountRef = useRef(isFast ? 40 : 20);
  const hasFinishedRef = useRef(false);

  const handleFinished = useCallback(() => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    setIsMounted(false);
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      handleFinished();
    }
  }, [handleFinished]);

  useEffect(() => {
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

    const cancelLoader = coordinateResourceLoading(currentPath, (milestoneProgress) => {
      targetCountRef.current = Math.max(targetCountRef.current, milestoneProgress);
      if (milestoneProgress >= 90) {
        setStatusText('Ready');
      } else if (milestoneProgress >= 65) {
        setStatusText('Warming cache');
      } else if (milestoneProgress >= 40) {
        setStatusText('Loading modules');
      }
    });

    const maxHoldTimer = setTimeout(() => {
      targetCountRef.current = 100;
      setStatusText('Ready');
    }, isFast ? 500 : 1200);

    return () => {
      cancelLoader();
      clearTimeout(maxHoldTimer);
    };
  }, [isFast]);

  useEffect(() => {
    if (isExiting || !isMounted) return;

    const intervalMs = isFast ? 16 : 26;
    const timer = setInterval(() => {
      setCount((current) => {
        const target = targetCountRef.current;
        if (current >= 100) {
          clearInterval(timer);
          return 100;
        }

        const delta = target - current;
        if (delta <= 0) return current;

        const jump = delta > 35 ? 12 : delta > 15 ? 7 : delta > 4 ? 3 : 1;
        return Math.min(100, current + jump);
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isExiting, isMounted, isFast]);

  useEffect(() => {
    if (count >= 100 && !isExiting) {
      const settleTime = isFast ? 80 : 140;
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, settleTime);
      return () => clearTimeout(exitTimer);
    }
  }, [count, isExiting, isFast]);

  useEffect(() => {
    if (!isExiting) return;
    const safetyTimer = setTimeout(handleFinished, 950);
    return () => clearTimeout(safetyTimer);
  }, [isExiting, handleFinished]);

  if (!isMounted) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio assets and initializing interface"
      className={`fixed inset-0 z-99999 flex flex-col justify-between p-6 sm:p-10 md:p-14 bg-[#050505] text-[#FAFAFA] font-sans transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] will-change-transform select-none ${
        isExiting ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="flex justify-between items-center w-full text-xs font-mono tracking-widest text-white/40 uppercase">
        <span className="text-white/60">Rachit Mangawa</span>
        <span className="tabular-nums">2026</span>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col justify-center items-start my-auto">
        <div className="font-serif text-[clamp(4.5rem,14vw,13rem)] leading-[0.88] tracking-[-0.04em] font-normal text-white tabular-nums flex items-baseline">
          <span>{count}</span>
          <span className="text-white/30 text-[0.45em] ml-1 font-serif select-none">%</span>
        </div>
      </div>

      <div className="flex justify-between items-end w-full text-xs font-mono tracking-widest uppercase">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-white/70">{statusText}</span>
        </div>
        <div className="text-white/30 hidden sm:block">
          Systems &amp; Architecture
        </div>
      </div>
    </div>
  );
}
