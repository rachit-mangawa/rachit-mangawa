import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  House, 
  Briefcase, 
  Code, 
  FileText, 
  Copy, 
  Check, 
  ArrowSquareOut, 
  MagnifyingGlass, 
  X 
} from '@phosphor-icons/react';
import { PORTFOLIO_CONTENT } from '../content';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const data = PORTFOLIO_CONTENT;

  const actions = [
    {
      id: 'nav-home',
      label: 'Home',
      category: 'Navigation',
      icon: House,
      action: () => { navigate('/'); onClose(); }
    },
    {
      id: 'nav-experience',
      label: 'Experience & Impact',
      category: 'Navigation',
      icon: Briefcase,
      action: () => { navigate('/experience'); onClose(); }
    },
    {
      id: 'nav-projects',
      label: 'Projects & Systems',
      category: 'Navigation',
      icon: Code,
      action: () => { navigate('/projects'); onClose(); }
    },
    {
      id: 'nav-resume',
      label: 'Interactive Resume',
      category: 'Navigation',
      icon: FileText,
      action: () => { navigate('/resume'); onClose(); }
    },
    {
      id: 'action-copy-email',
      label: `Copy Email (${data.personal.email})`,
      category: 'Actions',
      icon: copied ? Check : Copy,
      action: () => {
        navigator.clipboard.writeText(data.personal.email);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          onClose();
        }, 1000);
      }
    },
    {
      id: 'action-download-resume',
      label: 'Download Resume (PDF)',
      category: 'Actions',
      icon: FileText,
      action: () => {
        window.open(`${import.meta.env.BASE_URL}resume.pdf`, '_blank');
        onClose();
      }
    },
    {
      id: 'ext-github',
      label: 'GitHub Profile',
      category: 'External',
      icon: ArrowSquareOut,
      action: () => { window.open(data.personal.github, '_blank'); onClose(); }
    },
    {
      id: 'ext-leetcode',
      label: 'LeetCode Profile',
      category: 'External',
      icon: ArrowSquareOut,
      action: () => { window.open('https://leetcode.com/u/idkhowtocodefr/', '_blank'); onClose(); }
    },
    {
      id: 'ext-codeforces',
      label: 'Codeforces Profile',
      category: 'External',
      icon: ArrowSquareOut,
      action: () => { window.open('https://codeforces.com/profile/i_win_again', '_blank'); onClose(); }
    },
    {
      id: 'ext-linkedin',
      label: 'LinkedIn Profile',
      category: 'External',
      icon: ArrowSquareOut,
      action: () => { window.open(data.personal.linkedin, '_blank'); onClose(); }
    }
  ];

  const filtered = actions.filter(item => 
    item.label.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const safeIndex = filtered.length > 0 ? Math.min(activeIndex, filtered.length - 1) : 0;

  const handleClose = useCallback(() => {
    setQuery('');
    setActiveIndex(0);
    setCopied(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex(prev => (prev + 1) % (filtered.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex(prev => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[safeIndex]) {
          filtered[safeIndex].action();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, safeIndex, handleClose]);



  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-500 flex items-start justify-center pt-24 md:pt-36 px-4 bg-black/60 backdrop-blur-md animate-fade-up"
      onClick={handleClose}
    >
      <div 
        className="w-full max-w-xl bg-[#0A0A0A] border border-white/15 rounded-2xl shadow-2xl overflow-hidden font-sans text-white ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10">
          <MagnifyingGlass size={18} className="text-white/40 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
            placeholder="Type a command or jump to page..."
            className="w-full bg-transparent text-sm text-white placeholder-white/40 outline-none"
          />
          <button 
            onClick={handleClose}
            className="text-white/40 hover:text-white p-1 rounded-md transition-colors"
            aria-label="Close command palette"
          >
            <X size={16} />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-sm text-white/40">
              No matching commands.
            </div>
          ) : (
            filtered.map((item, index) => {
              const Icon = item.icon;
              const isSelected = index === activeIndex;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm transition-colors ${
                    isSelected ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={16} className={isSelected ? 'text-white' : 'text-white/50'} />
                    <span>{item.label}</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/30">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        <div className="flex items-center justify-between px-4 py-2.5 border-t border-white/5 bg-white/2 text-[10px] font-mono text-white/40">
          <span>Navigate with <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/70">↑</kbd> <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/70">↓</kbd></span>
          <span>Select <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/70">↵</kbd></span>
          <span>Exit <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/70">esc</kbd></span>
        </div>
      </div>
    </div>
  );
}
