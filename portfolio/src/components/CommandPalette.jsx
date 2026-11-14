import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { House } from '@phosphor-icons/react/House';
import { Briefcase } from '@phosphor-icons/react/Briefcase';
import { Code } from '@phosphor-icons/react/Code';
import { FileText } from '@phosphor-icons/react/FileText';
import { Copy } from '@phosphor-icons/react/Copy';
import { Check } from '@phosphor-icons/react/Check';
import { ArrowSquareOut } from '@phosphor-icons/react/ArrowSquareOut';
import { MagnifyingGlass } from '@phosphor-icons/react/MagnifyingGlass';
import { X } from '@phosphor-icons/react/X';
import { Cpu } from '@phosphor-icons/react/Cpu';
import { GitPullRequest } from '@phosphor-icons/react/GitPullRequest';
import data from '../data.json';
import { ROUTES } from '../routes';
import { copyToClipboard } from '../utils/clipboard';

const ROUTE_ICONS = {
  '/': House,
  '/skills': Cpu,
  '/experience': Briefcase,
  '/projects': Code,
};

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);
  const dialogRef = useRef(null);
  const navigate = useNavigate();

  const actions = useMemo(() => {
    const list = [];

    ROUTES.forEach((route) => {
      list.push({
        id: `nav-${route.path}`,
        label: route.label,
        category: 'Navigation',
        keywords: route.keywords,
        icon: ROUTE_ICONS[route.path] || House,
        action: () => {
          navigate(route.path);
          onClose();
        },
      });
    });

    list.push(
      {
        id: 'action-copy-email',
        label: `Copy Email (${data.personal.email})`,
        category: 'Actions',
        keywords: ['contact', 'mail', 'reach out', 'write'],
        icon: copied ? Check : Copy,
        action: async () => {
          const ok = await copyToClipboard(data.personal.email);
          if (ok) {
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
              onClose();
            }, 1000);
          }
        },
      },
      {
        id: 'action-download-resume',
        label: 'Download CV / Resume (PDF)',
        category: 'Actions',
        keywords: ['cv', 'resume', 'pdf', 'bio', 'hire'],
        icon: FileText,
        action: () => {
          window.open(`${import.meta.env.BASE_URL}resume.pdf`, '_blank', 'noopener,noreferrer');
          onClose();
        },
      }
    );

    (data.projects || []).forEach((proj) => {
      if (proj.repo) {
        list.push({
          id: `proj-${proj.id}-repo`,
          label: `${proj.title} - Source Code (GitHub)`,
          category: 'Projects',
          keywords: [proj.id, proj.title.toLowerCase(), ...(proj.tech || []).map((t) => t.toLowerCase())],
          icon: ArrowSquareOut,
          action: () => {
            window.open(proj.repo, '_blank', 'noopener,noreferrer');
            onClose();
          },
        });
      }
      if (proj.live) {
        list.push({
          id: `proj-${proj.id}-live`,
          label: `${proj.title} - Live Demo`,
          category: 'Projects',
          keywords: [proj.id, proj.title.toLowerCase(), 'live', 'demo'],
          icon: ArrowSquareOut,
          action: () => {
            window.open(proj.live, '_blank', 'noopener,noreferrer');
            onClose();
          },
        });
      }
      if (proj.hfSpace) {
        list.push({
          id: `proj-${proj.id}-hf`,
          label: `${proj.title} - Hugging Face API Docs`,
          category: 'Projects',
          keywords: [proj.id, proj.title.toLowerCase(), 'hugging face', 'hf space', 'api', 'docs'],
          icon: ArrowSquareOut,
          action: () => {
            window.open(proj.hfSpace, '_blank', 'noopener,noreferrer');
            onClose();
          },
        });
      }
    });

    if (data.openSource) {
      list.push(
        {
          id: 'os-tf-pr',
          label: `${data.openSource.project} - Merged Pull Request #${data.openSource.prNumber}`,
          category: 'Open Source',
          keywords: ['tensorflow', 'pr', 'autodiff', 'bessel', 'calculus', 'pull request'],
          icon: GitPullRequest,
          action: () => {
            window.open(data.openSource.prUrl, '_blank', 'noopener,noreferrer');
            onClose();
          },
        },
        {
          id: 'os-tf-issue',
          label: `${data.openSource.project} - Issue #${data.openSource.issueNumber}`,
          category: 'Open Source',
          keywords: ['tensorflow', 'issue', 'bug', 'autodiff', 'math_grad'],
          icon: ArrowSquareOut,
          action: () => {
            window.open(data.openSource.issueUrl, '_blank', 'noopener,noreferrer');
            onClose();
          },
        }
      );
    }

    const externals = [
      { id: 'ext-github', label: `GitHub Profile (@${data.personal.githubHandle})`, url: data.personal.github, keywords: ['github', 'git', 'repos'] },
      { id: 'ext-linkedin', label: `LinkedIn Profile (@${data.personal.linkedinHandle})`, url: data.personal.linkedin, keywords: ['linkedin', 'jobs', 'network'] },
      { id: 'ext-leetcode', label: `LeetCode Profile (@${data.personal.leetcodeHandle})`, url: data.personal.leetcode, keywords: ['leetcode', 'dsa', 'algorithms'] },
      { id: 'ext-codeforces', label: `Codeforces Profile (@${data.personal.codeforcesHandle})`, url: data.personal.codeforces, keywords: ['codeforces', 'competitive'] },
      { id: 'ext-kaggle', label: `Kaggle Profile (@${data.personal.kaggleHandle})`, url: data.personal.kaggle, keywords: ['kaggle', 'ml', 'data'] },
    ];

    externals.forEach((ext) => {
      if (ext.url) {
        list.push({
          id: ext.id,
          label: ext.label,
          category: 'External',
          keywords: ext.keywords,
          icon: ArrowSquareOut,
          action: () => {
            window.open(ext.url, '_blank', 'noopener,noreferrer');
            onClose();
          },
        });
      }
    });

    return list;
  }, [copied, navigate, onClose]);

  const filtered = useMemo(() => {
    if (!query.trim()) return actions;
    const q = query.toLowerCase().trim();
    return actions.filter(
      (a) =>
        a.label.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.keywords.some((k) => k.includes(q))
    );
  }, [actions, query]);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
    setActiveIndex(0);
  };

  const executeAction = useCallback(
    (action) => {
      if (action) {
        action.action();
      }
    },
    []
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[activeIndex]) {
          executeAction(filtered[activeIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, activeIndex, executeAction, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const categories = useMemo(() => {
    const order = ['Navigation', 'Actions', 'Projects', 'Open Source', 'External'];
    const groups = {};
    filtered.forEach((action) => {
      if (!groups[action.category]) groups[action.category] = [];
      groups[action.category].push(action);
    });
    return order.filter((cat) => groups[cat]?.length > 0).map((cat) => ({
      name: cat,
      items: groups[cat],
    }));
  }, [filtered]);

  if (!isOpen) return null;

  let flatIndex = 0;

  return (
    <div
      className="fixed inset-0 z-99999 flex items-start justify-center pt-[12vh] px-4 font-sans select-none"
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      ref={dialogRef}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
    >
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-xl bg-[#09090b] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10 bg-white/[0.02]">
          <MagnifyingGlass size={16} weight="bold" className="text-white/40 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleQueryChange}
            placeholder="Search pages, projects, or actions..."
            className="flex-1 bg-transparent text-sm text-white placeholder-white/40 outline-none font-mono"
            aria-label="Command search query"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-sm text-white/40 hover:text-white hover:bg-white/10"
              aria-label="Clear query"
            >
              <X size={12} weight="bold" />
            </button>
          )}
          <kbd className="px-1.5 py-0.5 text-[10px] font-mono text-white/50 bg-white/5 border border-white/10 rounded-xs shrink-0">
            ESC
          </kbd>
        </div>

        <div className="max-h-[55vh] overflow-y-auto overscroll-contain p-2 space-y-4">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-white/40 text-xs font-mono">
              No matching commands or routes found for "{query}"
            </div>
          ) : (
            categories.map((category) => (
              <div key={category.name} className="space-y-1">
                <div className="px-2 text-[10px] font-mono uppercase tracking-widest text-white/40">
                  {category.name}
                </div>
                {category.items.map((item) => {
                  const currentIndex = flatIndex++;
                  const isSelected = currentIndex === activeIndex;
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.id}
                      onClick={() => executeAction(item)}
                      onMouseEnter={() => setActiveIndex(currentIndex)}
                      className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-left transition-all text-xs font-mono cursor-pointer ${
                        isSelected
                          ? 'bg-white text-black font-medium'
                          : 'text-white/70 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <Icon
                          size={15}
                          weight={isSelected ? 'bold' : 'regular'}
                          className={isSelected ? 'text-black shrink-0' : 'text-white/50 shrink-0'}
                        />
                        <span className="truncate">{item.label}</span>
                      </div>
                      <span
                        className={`text-[10px] uppercase tracking-wider shrink-0 ${
                          isSelected ? 'text-black/60' : 'text-white/30'
                        }`}
                      >
                        {item.category}
                      </span>
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        <div className="px-4 py-2 border-t border-white/10 bg-white/[0.02] flex items-center justify-between text-[11px] font-mono text-white/40">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
          </div>
          <span>⌘K to toggle</span>
        </div>
      </div>
    </div>
  );
}
