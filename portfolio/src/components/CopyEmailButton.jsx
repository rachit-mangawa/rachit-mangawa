import React, { useState } from 'react';
import { Copy, Check } from '@phosphor-icons/react';

export default function CopyEmailButton({ email, className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy email address"
      title={copied ? "Copied email to clipboard" : "Copy email address"}
      className={`group relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/20 text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white transition-all active:scale-[0.97] cursor-pointer ${className}`}
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
