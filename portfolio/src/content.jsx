import React from 'react';
import { TranspilerVisual, SemanticAnalyzerVisual } from './components/ProjectVisuals';

export const PORTFOLIO_CONTENT = {
  personal: {
    name: "Rachit Mangawa",
    phone: "+91 9328692611",
    email: "rachit.mangawa.ug23@nsut.ac.in",
    linkedin: "https://www.linkedin.com/in/rachit-mangawa/",
    linkedinHandle: "rachit-mangawa",
    github: "https://github.com/IDKHowToCodeFR",
    githubHandle: "IDKHowToCodeFR",
    kaggle: "https://www.kaggle.com/rachitmangawa",
    kaggleHandle: "rachitmangawa",
    huggingface: "https://huggingface.co/IDKHowToCodeFr",
    huggingfaceHandle: "IDKHowToCodeFr",
    location: "NSUT, New Delhi, India"
  },
  bio: {
    content: (
      <>
        Systems engineer focused on <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">high-throughput backend architecture</span>, local AI runtimes, and low-level code generation.
        <br /><br />
        Undergraduate at <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">NSUT Delhi</span>, writing C++ and Python to bridge distributed cloud services with <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">resource-constrained edge hardware</span>.
      </>
    )
  },
  techStack: [
    { label: "Backend Engineering", tech: "Python, FastAPI, C/C++" },
    { label: "Agentic AI & MCP", tech: "LangChain, Ollama, Hugging Face" },
    { label: "Machine Learning", tech: "PyTorch, TensorFlow, Scikit-Learn" },
    { label: "Data Pipelines", tech: "Pandas, SQLite WAL, Vector DBs" },
    { label: "Real-time & Infra", tech: "WebSockets, Redis, Docker" }
  ],
  ratings: {
    codeforces: {
      rank: "Pupil",
      rating: 1341
    },
    leetcode: {
      rank: "Knight",
      rating: 1982,
      contest: "Biweekly 190",
      globalRank: 316,
      totalParticipants: 38291,
      topPercent: 0.83
    }
  },
  openSource: {
    project: "TensorFlow Core",
    issueUrl: "https://github.com/tensorflow/tensorflow/issues/120578",
    issueNumber: "120578",
    prUrl: "https://github.com/tensorflow/tensorflow/pull/120944",
    prNumber: "120944",
    content: (
      <>
        Discovered and debugged a critical numerical edge case in TensorFlow's autodiff engine.
        The gradient for <code className="bg-black/40 px-1.5 py-0.5 rounded text-white/80 border border-white/10 font-mono text-xs">tf.math.bessel_i1</code> was hardcoded to return <code className="text-red-400 font-mono text-xs">1.0</code> at <code className="font-mono text-xs">x=0</code> - a removable singularity where the correct limit is mathematically <code className="text-emerald-400 font-mono text-xs">0.5</code>.
        <br /><br />
        Fixed the imputed gradient value deep inside the C++/Python <code className="font-mono text-white/70 text-xs">math_grad.py</code> layer and wrote comprehensive regression tests to prevent future silent NaN/Inf downstream errors in model training.
      </>
    ),
    tags: ["Python", "C++", "Calculus"]
  },
  internships: [
    {
      company: "Unique Identification Authority of India (UIDAI / Aadhaar)",
      role: "Software Developer Intern",
      date: "Jun 2026 - Sep 2026",
      logo: "aadhaar-logo.png",
      tags: [
        "Python", "FastAPI", "Ollama", "Plotly Dash", "Pandas", "WebSockets", "SQLite WAL", "OpenCV", "Tesseract"
      ],
      shortPoints: [
        "Built a fully air-gapped ETL pipeline now used by 1,000+ staff, replacing manual Excel-based processing.",
        "Integrated local vision and language models (Ollama/gemma3) for boundary detection and structured JSON extraction across 9 regional languages."
      ],
      projects: [
        {
          color: "emerald-400",
          title: "Offline OCR & LLM Grievance Processing System",
          points: [
            <React.Fragment key="1">Built fully <strong className="text-white/90 font-medium">offline</strong> grievance-letter pipeline for scanned PDFs in <strong className="text-white/90 font-medium">12 languages</strong>: <strong className="text-white/90 font-medium">OpenCV</strong> preprocessing (Otsu, deskew, CLAHE) → <strong className="text-white/90 font-medium">Tesseract</strong> OCR → <strong className="text-white/90 font-medium">Ollama</strong> (gemma3:4b) → schema-strict <strong className="text-white/90 font-medium">JSON</strong>.</React.Fragment>,
            <React.Fragment key="2">Optimized for <strong className="text-white/90 font-medium">8GB CPU-only</strong> hardware: disk-streamed uploads, LLM <strong className="text-white/90 font-medium">boundary detection</strong> to split multi-letter bundles, degraded-page flagging, and malformed-output fallback; <strong className="text-white/90 font-medium">1-2 min/letter</strong>.</React.Fragment>,
            <React.Fragment key="3">Shipped <strong className="text-white/90 font-medium">HTML/JS review UI</strong> with side-by-side scan and summary, <strong className="text-white/90 font-medium">confidence scores</strong>, and urgency/type filters for officer triage.</React.Fragment>
          ]
        },
        {
          color: "cyan-400",
          title: "Contact Center Operations & Analytics Platform",
          points: [
            <React.Fragment key="1">Built <strong className="text-white/90 font-medium">Dash + FastAPI + Pandas</strong> platform unifying <strong className="text-white/90 font-medium">4 data sources</strong> across <strong className="text-white/90 font-medium">2 vendors</strong>, replacing manual Excel reporting; auto-computes SL, AHT, avg hold against strict SLA targets.</React.Fragment>,
            <React.Fragment key="2">Designed <strong className="text-white/90 font-medium">async ETL</strong> with <strong className="text-white/90 font-medium">WebSocket</strong> progress and stateless parsers: ingests <strong className="text-white/90 font-medium">50MB / 100K+ row</strong> workbooks in 5-15s via 1,000-row batches and idempotent upserts; APScheduler 3-min auto-ingest on <strong className="text-white/90 font-medium">SQLite WAL</strong>.</React.Fragment>,
            <React.Fragment key="3">Secured with <strong className="text-white/90 font-medium">JWT RBAC</strong>, tenant isolation, X-Forwarded-For audit logs, bcrypt lazy rehash, and 90-day log pruning; architected for <strong className="text-white/90 font-medium">1,000+ users</strong>.</React.Fragment>
          ]
        }
      ]
    }
  ],
  projects: [
    {
      id: "heartflow",
      title: "HeartFlow OS",
      description: "ML platform exporting trained Python models to optimized C++ for microcontrollers, with a real-time monitoring dashboard.",
      tech: ["Next.js 16", "React 19", "FastAPI", "Python 3.10", "PlatformIO", "WebSockets"],
      deepDive: [
        <React.Fragment key="1">Engineered a <span className="text-white font-medium pb-px border-b border-emerald-500/40">real-time monitoring dashboard</span> for live cardiovascular signals via WebSockets.</React.Fragment>,
        <React.Fragment key="2">Built an MLOps pipeline for <span className="text-white font-medium pb-px border-b border-emerald-500/40">background retraining and model hot-swapping</span> without inference downtime.</React.Fragment>,
        <React.Fragment key="3">Wrote an exporter that transpiles Scikit-Learn soft-voting ensembles into <span className="text-white font-medium pb-px border-b border-emerald-500/40">zero-dependency C++</span> for ESP32 microcontrollers.</React.Fragment>
      ],
      repo: "https://github.com/IDKHowToCodeFR/HEARTFLOW_OS",
      live: "https://idkhowtocodefr.github.io/HEARTFLOW_OS/",
      visualContent: <TranspilerVisual />
    },
    {
      id: "semantic",
      title: "Semantic Analyzer",
      description: "NLP pipeline that classifies customer feedback and support tickets using sentence embeddings and SVM.",
      tech: ["Python", "FastAPI", "Sentence Transformers", "Hugging Face", "Scikit-Learn"],
      deepDive: [
        <React.Fragment key="1">Replaced slow zero-shot classification with <span className="text-white font-medium pb-px border-b border-blue-500/40">all-MiniLM embeddings</span> and an <span className="text-white font-medium pb-px border-b border-blue-500/40">SVM classification head</span>, handling thousands of requests per second.</React.Fragment>,
        <React.Fragment key="2">Developed a custom <span className="text-white font-medium pb-px border-b border-blue-500/40">occlusion explainability algorithm</span> to calculate exact word-level contributions for intent attribution.</React.Fragment>,
        <React.Fragment key="3">Deployed a <span className="text-white font-medium pb-px border-b border-blue-500/40">FastAPI REST endpoint</span> with scoring heuristics for production routing.</React.Fragment>
      ],
      repo: "https://github.com/IDKHowToCodeFR/Semantic-Comment-Analyze",
      live: null,
      visualContent: <SemanticAnalyzerVisual />
    }
  ]
};
