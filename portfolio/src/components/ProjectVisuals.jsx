import React, { useEffect, useState } from 'react';

const TelemetryVisualizer = ({
  wsEndpoint,
  statusColor,
  statusBg,
  glowColor1,
  glowColor2,
  glow1Duration = '4s',
  glow2Duration = '6s',
  architectureTitle = "Architecture",
  architectureValue,
  metricTitle,
  metricValue,
  labels,
  initialData,
  dataValueFormatter,
  logTitle,
  updateInterval,
  dataUpdater,
  logGenerator
}) => {
  const [data, setData] = useState(initialData);
  const [logs, setLogs] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const [statusOverride, setStatusOverride] = useState(null);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setData(prev => prev.map(dataUpdater));
      setLogs(prev => [logGenerator(), ...prev].slice(0, 4));
    }, updateInterval);
    return () => clearInterval(interval);
  }, [dataUpdater, logGenerator, updateInterval, isPaused]);

  const triggerBenchmark = () => {
    setStatusOverride('TESTING');
    setData(prev => prev.map(() => Math.min(0.96, 0.82 + Math.random() * 0.15)));
    setLogs(prev => [
      { id: Date.now(), text: `> BENCHMARK: INT8 batch 64 -> latency 1.12ms (converged)` },
      ...prev
    ].slice(0, 4));
    setTimeout(() => setStatusOverride(null), 1200);
  };

  const triggerFault = () => {
    setStatusOverride('FAULT_SIM');
    setData(prev => prev.map(() => 0.25 + Math.random() * 0.2));
    setLogs(prev => [
      { id: Date.now(), text: `> WARN [RECOVERY]: Ingest jitter spike -> fallback handler OK` },
      ...prev
    ].slice(0, 4));
    setTimeout(() => setStatusOverride(null), 1400);
  };

  return (
    <div className="relative w-full h-full min-h-100 flex flex-col bg-[#050505] rounded-2xl border border-white/10 overflow-hidden font-mono group">
      {/* Animated Liquid Background */}
      <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-1000 overflow-hidden pointer-events-none">
        <div className={`absolute top-[-20%] left-[-10%] w-[70%] h-[70%] ${glowColor1} blur-[60px] rounded-full animate-pulse`} style={{ animationDuration: glow1Duration }} />
        <div className={`absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] ${glowColor2} blur-[60px] rounded-full animate-pulse`} style={{ animationDuration: glow2Duration, animationDelay: '1s' }} />
      </div>

      {/* Top telemetry bar */}
      <div className="relative z-10 border-b border-white/5 bg-black/50 backdrop-blur-md px-4 py-3 flex flex-wrap gap-2 justify-between items-center text-white/70 uppercase tracking-[0.2em] font-semibold text-[11px] shrink-0 rounded-t-2xl">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] md:text-[11px]">{wsEndpoint}</span>
          <span className={`flex items-center gap-1.5 ${statusOverride ? 'text-amber-400' : statusColor}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${statusOverride ? 'bg-amber-400' : statusBg} shadow-[0_0_8px_currentColor] animate-pulse`}></span>
            {statusOverride || 'LIVE'}
          </span>
        </div>

        {/* Interactive Operator Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsPaused(p => !p)}
            className="px-2 py-0.5 rounded text-[9px] font-mono border border-white/10 hover:border-white/30 text-white/60 hover:text-white transition-all active:scale-95 cursor-pointer"
            title={isPaused ? "Resume stream" : "Pause stream"}
          >
            {isPaused ? "▶ RESUME" : "⏸ PAUSE"}
          </button>
          <button
            onClick={triggerBenchmark}
            className="px-2 py-0.5 rounded text-[9px] font-mono bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 text-white/80 hover:text-white transition-all active:scale-95 cursor-pointer"
            title="Inject test benchmark"
          >
            ⚡ INFER
          </button>
          <button
            onClick={triggerFault}
            className="px-2 py-0.5 rounded text-[9px] font-mono bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 text-amber-300 transition-all active:scale-95 cursor-pointer"
            title="Inject edge fault simulation"
          >
            ⚠ FAULT
          </button>
        </div>
      </div>
      
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-6 w-full h-full">
        {/* Glassmorphism Panel */}
        <div className="w-full max-w-sm border border-white/8 bg-white/2 backdrop-blur-2xl shadow-2xl rounded-xl p-6 relative overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-2">
          <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom right, black, transparent)' }}></div>
          
          <div className="flex justify-between items-end mb-6 border-b border-white/10 pb-4">
             <div>
               <div className="text-white/60 text-[10px] tracking-[0.2em] uppercase mb-1 font-mono">{architectureTitle}</div>
               <div className="text-white text-sm font-semibold tracking-wide font-sans">{architectureValue}</div>
             </div>
             <div className="text-right">
               <div className="text-white/60 text-[10px] tracking-[0.2em] uppercase mb-1 font-mono">{metricTitle}</div>
               <div className={`${statusColor} text-sm font-semibold tracking-tighter tabular-nums font-mono`}>{metricValue}</div>
             </div>
          </div>

          <div className="space-y-4">
            {labels.map((label, i) => (
              <div key={label} className="w-full">
                <div className="flex justify-between text-[11px] mb-1.5">
                  <span className="text-white/80 tracking-wider uppercase font-semibold">{label}</span>
                  <span className="text-white/60 font-mono tabular-nums">{dataValueFormatter(data[i])}</span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${statusBg}/80 transition-[width,background-color] duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]`}
                    style={{ width: `${data[i] * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-white/5">
             <div className="text-white/60 text-[10px] tracking-[0.2em] uppercase mb-2 font-mono">{logTitle}</div>
             <div className="h-12 overflow-hidden relative flex flex-col justify-end">
               {logs.map((log, i) => (
                 <div 
                   key={log.id} 
                   className={`text-[11px] leading-loose truncate transition-[opacity,transform,color] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] starting:opacity-0 starting:-translate-y-2 translate-y-0 ${i === 0 ? 'text-white/90 opacity-100 font-medium' : i === 1 ? 'text-white/60 opacity-100' : 'text-white/40 opacity-100'}`}
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

export const TranspilerVisual = () => {
  return (
    <TelemetryVisualizer
      wsEndpoint="ws://edge-inference.node"
      statusColor="text-emerald-400"
      statusBg="bg-emerald-400"
      glowColor1="bg-emerald-500/20"
      glowColor2="bg-cyan-500/20"
      architectureTitle="Pipeline"
      architectureValue="INT8 Quantized SVM"
      metricTitle="Footprint"
      metricValue="1.4KB Flash"
      labels={['Heart Rate', 'Blood Pressure', 'Cholesterol', 'SpO2', 'ST Depression']}
      initialData={[0.6, 0.7, 0.5, 0.8, 0.4]}
      dataValueFormatter={(v) => (v * 100).toFixed(0)}
      logTitle="Inference Log"
      updateInterval={1200}
      dataUpdater={(v) => Math.max(0.3, Math.min(0.95, v + (Math.random() - 0.5) * 0.15))}
      logGenerator={() => {
        const hr = Math.floor(60 + Math.random() * 40);
        const bp = Math.floor(110 + Math.random() * 30);
        return { id: Date.now(), text: `> INGEST [EDGE]: HR=${hr} BP=${bp} | STATUS: OK` };
      }}
    />
  );
};

export const SemanticAnalyzerVisual = () => {
  return (
    <TelemetryVisualizer
      wsEndpoint="wss://nlp-engine.cluster"
      statusColor="text-blue-400"
      statusBg="bg-blue-400"
      glowColor1="bg-blue-500/20"
      glowColor2="bg-purple-500/20"
      glow1Duration="5s"
      glow2Duration="7s"
      architectureValue="all-MiniLM + SVM"
      metricTitle="P99 Latency"
      metricValue="2.4ms"
      labels={['Intent Confidence', 'Embedding Norm', 'Occlusion Delta', 'Vocab Density']}
      initialData={[0.94, 0.88, 0.76, 0.91]}
      dataValueFormatter={(v) => `${(v * 100).toFixed(1)}%`}
      logTitle="Cluster Stream"
      updateInterval={1500}
      dataUpdater={(v) => Math.max(0.6, Math.min(0.99, v + (Math.random() - 0.5) * 0.1))}
      logGenerator={() => {
        const intents = ['SUPPORT', 'PRICING', 'REFUND', 'BUG_REPORT'];
        const intent = intents[Math.floor(Math.random() * intents.length)];
        const conf = (0.85 + Math.random() * 0.14).toFixed(3);
        const ms = (1.2 + Math.random() * 2.5).toFixed(1);
        return { id: Date.now(), text: `> PREDICT: intent=${intent} | conf=${conf} | time=${ms}ms` };
      }}
    />
  );
};
