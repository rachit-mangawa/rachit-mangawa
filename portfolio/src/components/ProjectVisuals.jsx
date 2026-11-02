import React, { useState } from 'react';
import { Check, Copy } from '@phosphor-icons/react';

const CodeArtifactCard = ({
  filename,
  tag,
  tagColor = "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  code,
  benchmarks = []
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-[#080809] border border-white/10 overflow-hidden font-mono text-xs shadow-2xl flex flex-col justify-between">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/3 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>
          <span className="text-white/60 text-[11px] font-mono tracking-tight">{filename}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono border uppercase tracking-wider ${tagColor}`}>
            {tag}
          </span>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-white/10 text-white/40 hover:text-white transition-colors cursor-pointer"
            title="Copy snippet"
            aria-label="Copy snippet"
          >
            {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
          </button>
        </div>
      </div>

      {/* Code / Content Area */}
      <div className="p-4 sm:p-5 overflow-x-auto text-white/80 leading-relaxed font-mono text-[11px] sm:text-[12px] bg-black/40">
        <pre className="selection:bg-white/20 selection:text-white">
          <code>{code}</code>
        </pre>
      </div>

      {/* Footer Metrics / Benchmarks Bar */}
      {benchmarks.length > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-white/3 border-t border-white/5 text-[11px] font-mono text-white/50">
          {benchmarks.map((b, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span className="text-white/30 font-light">{b.label}:</span>
              <span className="text-white/85 font-medium">{b.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const TranspilerVisual = () => {
  const code = `// Target: ESP32-WROOM | Scikit-Learn Soft-Voting -> C99
#ifndef HEARTFLOW_MODEL_H
#define HEARTFLOW_MODEL_H

#include <stdint.h>

#define NUM_TREES 24
#define ARENA_BYTES 8192 // Zero dynamic allocation

// Soft-voting quantized ensemble weights
static const int8_t MODEL_WEIGHTS[24][5] = {
  { -14,  52, -91, 104,  18 },
  {  36, -68,  82, -31,  63 },
  /* ... 22 additional tree branches omitted ... */
};

inline uint8_t heartflow_predict(const int8_t* feats) {
  int32_t accumulator = 0;
  for (uint8_t t = 0; t < NUM_TREES; t++) {
    accumulator += (feats[0] * MODEL_WEIGHTS[t][0]) >> 7;
  }
  return accumulator > 0 ? 1 : 0; // Sub-millisecond return
}
#endif // HEARTFLOW_MODEL_H`;

  return (
    <CodeArtifactCard
      filename="heartflow_model.h"
      tag="C99 AST Header"
      tagColor="text-emerald-400 bg-emerald-400/10 border-emerald-400/20"
      code={code}
      benchmarks={[
        { label: 'RAM Footprint', value: '8KB (-76%)' },
        { label: 'Latency', value: '0.84ms' },
        { label: 'Heap Allocation', value: '0 bytes (Static)' }
      ]}
    />
  );
};

export const VeraEngineVisual = () => {
  const code = `# 4-Tier Orchestration Cascade (Hugging Face 2vCPU)
orchestrator:
  time_budget_seconds: 13.0
  context_distiller:
    raw_payload_max: 520KB
    distill_engine: "Python Caveman (< 0.001s)"

  cascade_tiers:
    - tier: 1
      provider: "nvidia-nim"
      model: "nemotron-3-ultra-550b"
      timeout_seconds: 5.0
    - tier: 2
      provider: "groq"
      model: "openai/gpt-oss-20b"
      timeout_seconds: 4.0
    - tier: 3
      provider: "gemini"
      model: "gemini-2.5-flash"
      timeout_seconds: 4.0
    - tier: 4 # Airgapped CPU safety net
      provider: "llama-cpp-python"
      model: "qwen2.5-7b-instruct-q4_k_m.gguf"
      grammar: "LlamaGrammar(strict_json_schema)"`;

  return (
    <CodeArtifactCard
      filename="vera_orchestrator.yaml"
      tag="Fail-Fast Cascade"
      tagColor="text-purple-400 bg-purple-400/10 border-purple-400/20"
      code={code}
      benchmarks={[
        { label: 'Worst-Case Budget', value: '< 13.0s' },
        { label: 'Distill Latency', value: '< 0.001s' },
        { label: 'Grammar Compliance', value: '100% JSON' }
      ]}
    />
  );
};

export const HfGatewayVisual = () => {
  const code = `# Pluggable Subproject Registry (Hugging Face Spaces)
from fastapi import FastAPI
from hf_gateway.middleware import SecurityHeadersMiddleware

PROJECT_REGISTRY = {
    "/heartflow": "heartflow.router:router",
    "/semantic":  "semantic.router:router",
}

# Build-time layer baking (prefetch.py)
def bake_container_cache():
    for prefix, entrypoint in PROJECT_REGISTRY.items():
        module = importlib.import_module(entrypoint.split(':')[0])
        if hasattr(module, "warmup"):
            module.warmup() # Bakes weights into /home/user/hf-cache

# Runtime startup: warmups execute in worker thread pool
# Stream metering: early Content-Length 413 validation`;

  return (
    <CodeArtifactCard
      filename="hf_gateway/registry.py"
      tag="Pluggable Gateway"
      tagColor="text-amber-400 bg-amber-400/10 border-amber-400/20"
      code={code}
      benchmarks={[
        { label: 'Cold-Start Latency', value: '< 95ms Warm' },
        { label: 'Edge Security', value: 'HSTS + Strict CSP' },
        { label: 'Mounted Routers', value: '2 Active' }
      ]}
    />
  );
};

export const SemanticAnalyzerVisual = () => {
  const code = `{
  "predicted_intent": "BILLING_DISPUTE",
  "confidence": 0.942,
  "cpu_latency_ms": 11.4,
  "occlusion_attributions": [
    { "token": "overcharged", "delta": +0.482, "impact": "CRITICAL" },
    { "token": "invoice",     "delta": +0.315, "impact": "HIGH" },
    { "token": "account",     "delta": +0.094, "impact": "LOW" },
    { "token": "hello",       "delta": -0.008, "impact": "NEUTRAL" }
  ],
  "routing_decision": {
    "action": "ROUTE_TIER_1_ESCALATION",
    "verified_without_cloud": true
  }
}`;

  return (
    <CodeArtifactCard
      filename="eval_inference_result.json"
      tag="Word Occlusion"
      tagColor="text-blue-400 bg-blue-400/10 border-blue-400/20"
      code={code}
      benchmarks={[
        { label: 'CPU Latency', value: '11.4ms' },
        { label: 'RAM Footprint', value: '< 4GB Local' },
        { label: 'Embedding Head', value: 'all-MiniLM + SVM' }
      ]}
    />
  );
};
