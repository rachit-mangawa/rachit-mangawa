import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from '@phosphor-icons/react/X';
import { ArrowUpRight } from '@phosphor-icons/react/ArrowUpRight';
import { MagnifyingGlass } from '@phosphor-icons/react/MagnifyingGlass';
import { ROUTES } from '../routes';
import data from '../data.json';

export default function IndexDrawer({ isOpen, onClose, onOpenPalette }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSelectPage = (path) => {
    onClose();
    navigate(path);
  };

  const handleOpenSearch = () => {
    onClose();
    if (onOpenPalette) {
      onOpenPalette();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-99999 flex justify-end font-sans"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Index"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm cursor-pointer"
          />

          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 32, stiffness: 380 }}
            className="relative z-10 w-full sm:max-w-md h-dvh max-h-dvh bg-[#050505] border-l border-white/10 flex flex-col justify-between shadow-2xl text-white overflow-hidden select-none"
          >
            <div className="h-14 px-4 sm:px-6 border-b border-white/10 flex items-center justify-between shrink-0 bg-[#050505]">
              <div className="flex items-baseline gap-2 font-mono text-xs uppercase tracking-wider">
                <span className="font-medium text-white">Navigation</span>
                <span className="text-white/20">/</span>
                <span className="text-white/60">Index</span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 active:scale-[0.98] border border-white/10 text-white/70 hover:text-white font-mono text-xs uppercase tracking-wider transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
                aria-label="Close index"
                title="Close (ESC)"
              >
                <span>ESC</span>
                <X size={13} weight="bold" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6 space-y-6">
              <button
                type="button"
                onClick={handleOpenSearch}
                className="group w-full flex items-center justify-between gap-2 px-3 py-2 rounded-md bg-white/[0.04] hover:bg-white/[0.08] active:bg-white/[0.1] border border-white/10 hover:border-white/20 transition-all text-xs font-mono text-white/50 hover:text-white/80 cursor-pointer"
                aria-label="Search sections and projects (⌘K)"
              >
                <div className="flex items-center gap-2 truncate">
                  <MagnifyingGlass
                    size={13}
                    weight="bold"
                    className="text-white/40 group-hover:text-white/70 transition-colors shrink-0"
                  />
                  <span className="truncate text-xs">Search...</span>
                </div>
                <kbd className="px-1.5 py-0.5 text-[10px] font-mono text-white/60 bg-white/5 border border-white/10 rounded-xs shrink-0">
                  ⌘K
                </kbd>
              </button>

              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2 px-1">
                  Pages
                </div>

                <div className="border-y border-white/10 divide-y divide-white/10 font-mono">
                  {ROUTES.map((page) => {
                    const isActive = location.pathname === page.path;

                    return (
                      <button
                        key={page.path}
                        type="button"
                        onClick={() => handleSelectPage(page.path)}
                        className={`group w-full py-3.5 px-2.5 flex items-center justify-between transition-colors text-left cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 ${
                          isActive
                            ? 'bg-white/[0.06] text-white'
                            : 'text-white/60 hover:text-white hover:bg-white/[0.025]'
                        }`}
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          <span
                            className={`text-xs tabular-nums mt-0.5 shrink-0 ${
                              isActive ? 'text-white font-semibold' : 'text-white/30'
                            }`}
                          >
                            {page.index}
                          </span>

                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span
                                className={`text-sm uppercase tracking-wider ${
                                  isActive
                                    ? 'text-white font-semibold'
                                    : 'text-white/80 group-hover:text-white'
                                }`}
                              >
                                {page.label}
                              </span>
                              {isActive && (
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                              )}
                            </div>
                            <span className="block text-[11px] text-white/45 normal-case truncate mt-0.5 group-hover:text-white/60 transition-colors">
                              {page.sub}
                            </span>
                          </div>
                        </div>

                        <ArrowUpRight
                          size={13}
                          className={`shrink-0 ml-2 transition-all ${
                            isActive
                              ? 'text-white translate-x-0.5 -translate-y-0.5'
                              : 'text-white/30 group-hover:text-white'
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 border-t border-white/10 shrink-0 bg-[#050505] space-y-3 font-mono text-xs text-white/50">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-white/60">Open to software engineering roles</span>
                <span className="text-white/30 tabular-nums">2026</span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  download="Rachit_Mangawa_Resume.pdf"
                  className="flex-1 py-2 text-center rounded-md bg-white text-black font-medium hover:bg-white/90 active:scale-[0.98] transition-all"
                >
                  Resume
                </a>
                <a
                  href={data.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 active:scale-[0.98] border border-white/10 text-white/70 hover:text-white transition-all"
                >
                  GitHub ↗
                </a>
                <a
                  href={data.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 active:scale-[0.98] border border-white/10 text-white/70 hover:text-white transition-all"
                >
                  LinkedIn ↗
                </a>
              </div>

              <div className="flex items-center justify-between gap-2 pt-1 text-[11px] text-white/50">
                <a
                  href={data.personal.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LeetCode ↗
                </a>
                <span className="text-white/20">·</span>
                <a
                  href={data.personal.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Codeforces ↗
                </a>
                <span className="text-white/20">·</span>
                <a
                  href={data.personal.kaggle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Kaggle ↗
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
