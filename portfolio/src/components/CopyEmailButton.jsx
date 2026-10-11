import React, { useState } from 'react';
import { Copy, Check } from '@phosphor-icons/react';

export default function CopyEmailButton({ email, className = "", variant = "minimal" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (variant === "compact") {
    return (
      <button
        onClick={handleCopy}
        aria-label="Copy email address"
        title={copied ? "Copied email to clipboard" : "Copy email address"}
        className={`group relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/20 text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white transition-all active:scale-[0.97] ${className}`}
      >
        {copied ? (
          <>
            <Check size={13} className="text-emerald-400" weight="bold" />
            <span className="text-emerald-400 font-mono text-[11px]">COPIED</span>
          </>
        ) : (
          <>
            <Copy size={13} className="text-white/40 group-hover:text-white transition-colors" />
            <span className="text-[11px]">COPY</span>
          </>
        )}
      </button>
    );
  }

  if (variant === "button") {
    return (
      <button
        onClick={handleCopy}
        aria-label="Copy email address"
        className={`group relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-all active:scale-[0.97] ${className}`}
      >
        {copied ? (
          <>
            <Check size={14} className="text-emerald-400" />
            <span className="text-emerald-400 font-semibold">Copied to Clipboard</span>
          </>
        ) : (
          <>
            <Copy size={14} className="text-white/40 group-hover:text-white transition-colors" />
            <span>Copy Email</span>
          </>
        )}
      </button>
    );
  }

  return (
    <div className={`relative inline-flex items-center gap-3 ${className}`}>
      <a 
        href={`mailto:${email}`} 
        className="text-white/70 hover:text-white transition-colors underline decoration-white/20 underline-offset-4"
      >
        {email}
      </a>
      <button
        onClick={handleCopy}
        aria-label="Copy email to clipboard"
        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 ring-1 ring-white/10 text-white/50 hover:text-white transition-all active:scale-95"
        title="Copy to clipboard"
      >
        {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
      </button>
      {copied && (
        <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/30 text-[10px] font-mono text-emerald-300 pointer-events-none animate-fade-up">
          Copied!
        </span>
      )}
    </div>
  );
}
