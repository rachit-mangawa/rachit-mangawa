import React from 'react';
import { useReveal, PremiumCard } from '../components/UI';
import aadhaarLogo from '../assets/aadhaar-logo.png';

export default function Experience() {
  useReveal();

  return (
    <main className="relative z-10 w-full min-h-screen pt-32 pb-32 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="reveal mb-20">
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">Experience</h1>
        <p className="text-xl text-white/60 leading-relaxed max-w-2xl font-light">
          A deeper look into the systems I've built, the impact they've had, and the engineering challenges overcome.
        </p>
      </div>

      <div className="flex flex-col gap-24 border-l border-white/10 ml-[24px] md:ml-[28px]">
        
        {/* UIDAI */}
        <div className="relative pl-8 md:pl-12 reveal reveal-delay-1">
          {/* Logo perfectly centered on the border line */}
          <div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 md:w-16 md:h-16 rounded-2xl overflow-hidden bg-white border-4 border-[#050505] flex items-center justify-center">
            <img src={aadhaarLogo} alt="UIDAI" className="object-contain w-full h-full p-2 md:p-3" />
          </div>
          
          <div className="mb-8 pt-1 md:pt-2">
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-3">Unique Identification Authority of India (UIDAI / Aadhaar)</h2>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h3 className="text-xl text-white/70 font-medium">Software Developer Intern</h3>
              <span className="text-xs tracking-[0.2em] uppercase text-white/40 font-bold flex-shrink-0 bg-white/5 px-4 py-2 rounded-full border border-white/10">Jun 2026 — Sep 2026</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-12">
            
            {/* Project 1 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-medium text-white mb-6 flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Offline OCR & LLM Grievance Processing System
              </h4>
              <ul className="flex flex-col gap-4 text-white/60 font-light leading-relaxed">
                <li className="flex gap-4">
                  <span className="text-white/30 mt-1">01</span>
                  <p>Built fully <strong className="text-white/90 font-medium">offline</strong> grievance-letter pipeline for scanned PDFs in <strong className="text-white/90 font-medium">12 languages</strong>: <strong className="text-white/90 font-medium">OpenCV</strong> preprocessing (Otsu, deskew, CLAHE) → <strong className="text-white/90 font-medium">Tesseract</strong> OCR → <strong className="text-white/90 font-medium">Ollama</strong> (gemma3:4b) → schema-strict <strong className="text-white/90 font-medium">JSON</strong>.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-white/30 mt-1">02</span>
                  <p>Optimized for <strong className="text-white/90 font-medium">8GB CPU-only</strong> hardware: disk-streamed uploads, LLM <strong className="text-white/90 font-medium">boundary detection</strong> to split multi-letter bundles, degraded-page flagging, and malformed-output fallback; <strong className="text-white/90 font-medium">1–2 min/letter</strong>.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-white/30 mt-1">03</span>
                  <p>Shipped <strong className="text-white/90 font-medium">HTML/JS review UI</strong> with side-by-side scan and summary, <strong className="text-white/90 font-medium">confidence scores</strong>, and urgency/type filters for officer triage.</p>
                </li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors">
              <h4 className="text-lg font-medium text-white mb-6 flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Contact Center Operations & Analytics Platform
              </h4>
              <ul className="flex flex-col gap-4 text-white/60 font-light leading-relaxed">
                <li className="flex gap-4">
                  <span className="text-white/30 mt-1">01</span>
                  <p>Built <strong className="text-white/90 font-medium">Dash + FastAPI + Pandas</strong> platform unifying <strong className="text-white/90 font-medium">4 data sources</strong> across <strong className="text-white/90 font-medium">2 vendors</strong>, replacing manual Excel reporting; auto-computes SL, AHT, avg hold against strict SLA targets.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-white/30 mt-1">02</span>
                  <p>Designed <strong className="text-white/90 font-medium">async ETL</strong> with <strong className="text-white/90 font-medium">WebSocket</strong> progress and stateless parsers: ingests <strong className="text-white/90 font-medium">50MB / 100K+ row</strong> workbooks in 5–15s via 1,000-row batches and idempotent upserts; APScheduler 3-min auto-ingest on <strong className="text-white/90 font-medium">SQLite WAL</strong>.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-white/30 mt-1">03</span>
                  <p>Secured with <strong className="text-white/90 font-medium">JWT RBAC</strong>, tenant isolation, X-Forwarded-For audit logs, bcrypt lazy rehash, and 90-day log pruning; architected for <strong className="text-white/90 font-medium">1,000+ users</strong>.</p>
                </li>
              </ul>
            </div>

          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            {['Python', 'FastAPI', 'Ollama', 'Plotly Dash', 'Pandas', 'WebSockets', 'SQLite WAL', 'OpenCV', 'Tesseract'].map(tag => (
              <span key={tag} className="text-xs text-white/70 px-4 py-2 rounded-full bg-white/5 border border-white/10 tracking-[0.1em] font-medium">{tag}</span>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
