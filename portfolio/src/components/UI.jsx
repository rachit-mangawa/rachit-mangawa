import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const ArrowUpRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
  </svg>
);

export const PremiumCard = ({ children, className = "" }) => (
  <div className={`p-1.5 rounded-4xl bg-white/5 ring-1 ring-white/10 w-full overflow-hidden transition-transform duration-500 hover:scale-[1.01] ${className}`}>
    <div className="bg-[#0A0A0A] rounded-[1.625rem] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] w-full p-8 md:p-12 flex flex-col justify-between wrap-break-word overflow-hidden">
      {children}
    </div>
  </div>
);

export const MagneticButton = ({ children, href, isInternal }) => {
  const inner = (
    <>
      <span className="text-sm font-medium tracking-wide text-white/90 whitespace-nowrap">{children}</span>
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-px group-hover:scale-105 shrink-0">
        <ArrowUpRight />
      </div>
    </>
  );

  const classes = "group inline-flex items-center gap-4 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 rounded-full pl-6 pr-2 py-2 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]";

  if (isInternal) {
    return (
      <Link to={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={classes}>
      {inner}
    </a>
  );
};

export const useReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

export const TranspilerVisual = () => {
  const [data, setData] = useState([0.6, 0.7, 0.5, 0.8, 0.4]);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => prev.map(v => {
        const newValue = v + (Math.random() - 0.5) * 0.15;
        return Math.max(0.3, Math.min(0.95, newValue));
      }));

      setLogs(prev => {
        const hr = Math.floor(60 + Math.random()*40);
        const bp = Math.floor(110 + Math.random()*30);
        const newLog = { id: Date.now(), text: `> INGEST [EDGE]: HR=${hr} BP=${bp} | STATUS: OK` };
        return [newLog, ...prev].slice(0, 4);
      });
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const labels = ['Heart Rate', 'Blood Pressure', 'Cholesterol', 'SpO2', 'ST Depression'];

  return (
    <div className="relative w-full h-full min-h-100 flex flex-col bg-[#050505] rounded-2xl border border-white/10 overflow-hidden font-mono group">
      
      {/* Animated Liquid Background (Glassmorphism) */}
      <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-1000 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-emerald-500/20 blur-[60px] rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-cyan-500/20 blur-[60px] rounded-full animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      </div>

      {/* Top telemetry bar */}
      <div className="relative z-10 border-b border-white/5 bg-black/40 backdrop-blur-md px-4 py-3 flex justify-between items-center text-white/40 uppercase tracking-[0.2em] font-bold text-[9px] shrink-0 rounded-t-2xl">
        <span>ws://edge-inference.node</span>
        <span className="flex items-center gap-2 text-emerald-400">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)] animate-pulse"></div> LIVE
        </span>
      </div>
      
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-6 w-full h-full">
        
        {/* Glassmorphism Panel */}
        <div className="w-full max-w-sm border border-white/8 bg-white/2 backdrop-blur-2xl shadow-2xl rounded-xl p-6 relative overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-2">
          {/* Glass edge highlight */}
          <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom right, black, transparent)' }}></div>
          
          <div className="flex justify-between items-end mb-6 border-b border-white/10 pb-4">
             <div>
               <div className="text-white/30 text-[8px] tracking-[0.2em] uppercase mb-1">Pipeline</div>
               <div className="text-white text-sm font-semibold tracking-wide font-sans">INT8 Quantized SVM</div>
             </div>
             <div className="text-right">
               <div className="text-white/30 text-[8px] tracking-[0.2em] uppercase mb-1">Footprint</div>
               <div className="text-emerald-400 text-sm tracking-tighter">1.4KB Flash</div>
             </div>
          </div>

          <div className="space-y-4">
            {labels.map((label, i) => (
              <div key={label} className="w-full">
                <div className="flex justify-between text-[9px] mb-1.5">
                  <span className="text-white/60 tracking-wider uppercase font-semibold">{label}</span>
                  <span className="text-white/40">{(data[i] * 100).toFixed(0)}</span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-400/80 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]"
                    style={{ width: `${data[i] * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-white/5">
             <div className="text-white/30 text-[8px] tracking-[0.2em] uppercase mb-2">Inference Log</div>
             <div className="h-12 overflow-hidden relative flex flex-col justify-end">
               {logs.map((log, i) => (
                 <div 
                   key={log.id} 
                   className={`text-[9px] leading-loose truncate transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] starting:opacity-0 starting:-translate-y-2 translate-y-0 ${i === 0 ? 'text-white/90 opacity-100' : i === 1 ? 'text-white/50 opacity-100' : 'text-white/20 opacity-100'}`}
                 >
                   {log.text}
                 </div>
               ))}
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export const SemanticAnalyzerVisual = () => {
  const [data, setData] = useState([0.94, 0.88, 0.76, 0.91]);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => prev.map(v => {
        const newValue = v + (Math.random() - 0.5) * 0.1;
        return Math.max(0.6, Math.min(0.99, newValue));
      }));

      setLogs(prev => {
        const intents = ['SUPPORT', 'PRICING', 'REFUND', 'BUG_REPORT'];
        const intent = intents[Math.floor(Math.random() * intents.length)];
        const conf = (0.85 + Math.random() * 0.14).toFixed(3);
        const ms = (1.2 + Math.random() * 2.5).toFixed(1);
        const newLog = { id: Date.now(), text: `> PREDICT: intent=${intent} | conf=${conf} | time=${ms}ms` };
        return [newLog, ...prev].slice(0, 4);
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const labels = ['Intent Confidence', 'Embedding Norm', 'Occlusion Delta', 'Vocab Density'];

  return (
    <div className="relative w-full h-full min-h-100 flex flex-col bg-[#050505] rounded-2xl border border-white/10 overflow-hidden font-mono group">
      
      {/* Animated Liquid Background */}
      <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-1000 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-500/20 blur-[60px] rounded-full animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-500/20 blur-[60px] rounded-full animate-pulse" style={{ animationDuration: '7s', animationDelay: '1s' }} />
      </div>

      {/* Top telemetry bar */}
      <div className="relative z-10 border-b border-white/5 bg-black/40 backdrop-blur-md px-4 py-3 flex justify-between items-center text-white/40 uppercase tracking-[0.2em] font-bold text-[9px] shrink-0 rounded-t-2xl">
        <span>wss://nlp-engine.cluster</span>
        <span className="flex items-center gap-2 text-blue-400">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.6)] animate-pulse"></div> LIVE
        </span>
      </div>
      
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-6 w-full h-full">
        {/* Glassmorphism Panel */}
        <div className="w-full max-w-sm border border-white/8 bg-white/2 backdrop-blur-2xl shadow-2xl rounded-xl p-6 relative overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-2">
          {/* Glass edge highlight */}
          <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom right, black, transparent)' }}></div>
          
          <div className="flex justify-between items-end mb-6 border-b border-white/10 pb-4">
             <div>
               <div className="text-white/30 text-[8px] tracking-[0.2em] uppercase mb-1">Architecture</div>
               <div className="text-white text-sm font-semibold tracking-wide font-sans">all-MiniLM + SVM</div>
             </div>
             <div className="text-right">
               <div className="text-white/30 text-[8px] tracking-[0.2em] uppercase mb-1">P99 Latency</div>
               <div className="text-blue-400 text-sm tracking-tighter">2.4ms</div>
             </div>
          </div>

          <div className="space-y-4">
            {labels.map((label, i) => (
              <div key={label} className="w-full">
                <div className="flex justify-between text-[9px] mb-1.5">
                  <span className="text-white/60 tracking-wider uppercase font-semibold">{label}</span>
                  <span className="text-white/40">{(data[i] * 100).toFixed(1)}%</span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-400/80 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]"
                    style={{ width: `${data[i] * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-white/5">
             <div className="text-white/30 text-[8px] tracking-[0.2em] uppercase mb-2">Cluster Stream</div>
             <div className="h-12 overflow-hidden relative flex flex-col justify-end">
               {logs.map((log, i) => (
                 <div 
                   key={log.id} 
                   className={`text-[9px] leading-loose truncate transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] starting:opacity-0 starting:-translate-y-2 translate-y-0 ${i === 0 ? 'text-white/90 opacity-100' : i === 1 ? 'text-white/50 opacity-100' : 'text-white/20 opacity-100'}`}
                 >
                   {log.text}
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TypewriterText = ({ text, delay = 80 }) => {
  const [content, setContent] = useState('');
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setContent(text.substring(0, index + 1));
      index++;
      if (index >= text.length) clearInterval(interval);
    }, delay);
    return () => clearInterval(interval);
  }, [text, delay]);

  return (
    <>
      {content}
      <span className="animate-pulse ml-0.5 opacity-70 text-emerald-400">_</span>
    </>
  );
};