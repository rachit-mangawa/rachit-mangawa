import React from 'react';
import { ArrowUp } from '@phosphor-icons/react/ArrowUp';
import {
  GithubIcon,
  LinkedinIcon,
  LeetCodeIcon,
  CodeforcesIcon,
  KaggleIcon,
} from './BrandIcons';
import { getLenis } from '../hooks/useLenis';
import EmailCopyBox from './EmailCopyBox';
import data from '../data.json';

const CURRENT_YEAR = new Date().getFullYear();

function ArrowSwap({ className = "" }) {
  return (
    <div
      className={`relative overflow-hidden cursor-pointer shrink-0 ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full absolute inset-0 transition-transform duration-600 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-full group-hover:-translate-y-full"
        viewBox="0 0 102 102"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 100 L100 2 M28 2 L100 2 L100 74"
          stroke="#FFFFFF"
          strokeWidth="3.2"
          strokeLinecap="square"
        />
      </svg>

      <svg
        className="w-full h-full absolute inset-0 -translate-x-full translate-y-full transition-transform duration-600 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-x-0 group-hover:translate-y-0"
        viewBox="0 0 102 102"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 100 L100 2 M28 2 L100 2 L100 74"
          stroke="#FFFFFF"
          strokeWidth="3.2"
          strokeLinecap="square"
        />
      </svg>
    </div>
  );
}

export default function ContactSection() {
  const scrollToTop = () => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="contact"
      className="relative z-10 w-full bg-[#050505] text-[#FAFAFA] border-t border-white/10 py-16 sm:py-20 md:py-24 scroll-mt-14"
      role="contentinfo"
      aria-label="Contact and Colophon"
    >
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 md:px-14 lg:px-16 flex flex-col justify-between gap-12 sm:gap-16 md:gap-20 relative z-10 font-sans">
        <div
          id="lets-talk-section"
          className="lets-talk-section w-full"
          aria-label="Contact invitation"
        >
          <div className="w-full flex flex-col gap-6 sm:gap-10 md:gap-14">
            <a
              href={`mailto:${data.personal.email}`}
              className="group flex flex-row items-center justify-between w-full gap-3 sm:gap-6 md:gap-8 text-white no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-xl"
              aria-label={`Send email to ${data.personal.email}`}
            >
              <h2 className="font-serif text-[32px] min-[400px]:text-[40px] sm:text-[54px] md:text-[68px] lg:text-[78px] font-normal tracking-[-0.03em] leading-[1.02] sm:leading-[0.96] text-white transition-colors duration-300 group-hover:text-white/85 min-w-0 flex-1">
                <span className="block">Let's build</span>
                <span className="block">
                  something useful<span className="text-white/30 not-italic font-serif">.</span>
                </span>
              </h2>

              <ArrowSwap className="w-11 h-11 min-[400px]:w-13 min-[400px]:h-13 sm:w-18 sm:h-18 md:w-22 md:h-22 lg:w-26 lg:h-26 shrink-0" />
            </a>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">
              <p className="text-sm sm:text-base md:text-lg text-white/60 font-light leading-relaxed max-w-xl">
                Open to engineering roles in machine learning, intelligent systems, and software architecture. Drop an email if you'd like to talk through a project.
              </p>

              <div className="shrink-0 max-w-full">
                <EmailCopyBox email={data.personal.email} />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pt-8 sm:pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs font-mono">
          <div className="text-white/60">
            © {CURRENT_YEAR} {data.personal.name}
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={data.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 uppercase tracking-widest text-white/60 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-sm"
              aria-label="GitHub profile (opens in a new tab)"
            >
              <GithubIcon size={14} aria-hidden="true" />
              <span>GitHub</span>
            </a>

            <a
              href={data.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 uppercase tracking-widest text-white/60 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-sm"
              aria-label="LinkedIn profile (opens in a new tab)"
            >
              <LinkedinIcon size={14} aria-hidden="true" />
              <span>LinkedIn</span>
            </a>

            <a
              href={data.personal.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 uppercase tracking-widest text-white/60 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-sm"
              aria-label="LeetCode profile (opens in a new tab)"
            >
              <LeetCodeIcon size={14} aria-hidden="true" />
              <span>LeetCode</span>
            </a>

            <a
              href={data.personal.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 uppercase tracking-widest text-white/60 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-sm"
              aria-label="Codeforces profile (opens in a new tab)"
            >
              <CodeforcesIcon size={14} aria-hidden="true" />
              <span>Codeforces</span>
            </a>

            <a
              href={data.personal.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 uppercase tracking-widest text-white/60 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-sm"
              aria-label="Kaggle profile (opens in a new tab)"
            >
              <KaggleIcon size={14} aria-hidden="true" />
              <span>Kaggle</span>
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1.5 uppercase tracking-widest text-white/60 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-sm"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp
              size={12}
              weight="bold"
              className="group-hover:-translate-y-0.5 group-hover:text-white transition-all duration-150"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
