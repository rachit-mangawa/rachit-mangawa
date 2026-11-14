import React, { useState } from 'react';
import { copyToClipboard } from '../utils/clipboard';

export default function EmailCopyBox({ email, className = '' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const ok = await copyToClipboard(email);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className={`inline-flex flex-row items-center h-10 select-none max-w-full rounded-sm overflow-hidden border border-white/10 hover:border-white/30 transition-colors duration-150 ${className}`}
      role="group"
      aria-label="Email contact box"
    >
      <div
        className="h-full px-3.5 sm:px-4 flex items-center bg-white/[0.03] font-mono text-[11px] sm:text-xs md:text-[13px] text-white/80 tracking-tight min-w-0 truncate cursor-default select-text"
        title={email}
      >
        <span className="truncate">{email}</span>
      </div>

      <button
        type="button"
        onClick={handleCopy}
        className={`h-full px-3.5 sm:px-4 shrink-0 flex items-center justify-center cursor-pointer border-l border-white/10 text-xs font-medium tracking-tight transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 ${
          copied
            ? 'bg-white text-black font-semibold border-l-white'
            : 'bg-white/5 text-white/80 hover:bg-white hover:text-black hover:border-l-white'
        }`}
        aria-label={copied ? "Email copied to clipboard" : `Click to copy ${email}`}
        title={copied ? "Copied!" : "Click to copy"}
      >
        <span className="whitespace-nowrap select-none">
          {copied ? 'Copied!' : 'Copy'}
        </span>
        <span className="sr-only" role="status" aria-live="polite">
          {copied ? "Email address copied to clipboard" : ""}
        </span>
      </button>
    </div>
  );
}
