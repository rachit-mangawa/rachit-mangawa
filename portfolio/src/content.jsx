import React from 'react';
import {
  TranspilerVisual,
  SemanticAnalyzerVisual,
  VeraEngineVisual,
  HfGatewayVisual
} from './components/ProjectVisuals';

export const PORTFOLIO_CONTENT = {
  personal: {
    name: "Rachit Mangawa",
    phone: "+91 9328692611",
    email: "rachit.mangawa.ug23@nsut.ac.in",
    linkedin: "https://www.linkedin.com/in/rachit-mangawa/",
    linkedinHandle: "rachit-mangawa",
    github: "https://github.com/rachit-mangawa",
    githubHandle: "rachit-mangawa",
    leetcode: "https://leetcode.com/u/rachit-mangawa/",
    leetcodeHandle: "rachit-mangawa",
    codeforces: "https://codeforces.com/profile/i_win_again",
    codeforcesHandle: "i_win_again",
    kaggle: "https://www.kaggle.com/rachitmangawa",
    kaggleHandle: "rachitmangawa",
    location: "NSUT, New Delhi, India"
  },
  bio: {
    content: (
      <>
        CS & AI at <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">NSUT Delhi</span>. Engineering air-gapped document intelligence systems, high-throughput telemetry data pipelines, bare-metal C99 compilers for microcontrollers, and upstream numerical engines in TensorFlow Core.
      </>
    )
  },
  techStack: [
    { label: "Backend", tech: "Python, FastAPI, C++", icons: ["PythonIcon", "FastApiIcon", "CppIcon"] },
    { label: "AI & NLP", tech: "PyTorch, Ollama, Hugging Face", icons: ["PyTorchIcon", "OllamaIcon", "HuggingFaceIcon"] },
    { label: "Data & Storage", tech: "Pandas, SQLite WAL, Vector Search", icons: ["PandasIcon", "SqliteIcon", "VectorSearchIcon"] },
    { label: "Real-time", tech: "WebSockets, Redis", icons: ["WebSocketsIcon", "RedisIcon"] },
    { label: "Tooling", tech: "Docker, Git, Linux, PyTest", icons: ["DockerIcon", "GitIcon", "LinuxIcon", "PyTestIcon"] }
  ],
  ratings: {
    codeforces: {
      rank: "Specialist",
      rating: 1422
    },
    leetcode: {
      rank: "Knight",
      rating: 1987,
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
        Fixed a <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">numerical bug</span> in TensorFlow's autodiff engine.
        The gradient for <code className="bg-black/40 px-1.5 py-0.5 rounded text-white/80 border border-white/10 font-mono text-xs">tf.math.bessel_i1</code> returned <code className="text-red-400 font-mono text-xs">1.0</code> at <code className="font-mono text-xs">x=0</code>, but mathematically the correct limit is <code className="text-emerald-400 font-mono text-xs">0.5</code>.
        <br /><br />
        Patched the gradient calculation in <code className="font-mono text-white/70 text-xs">math_grad.py</code> and added <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">regression tests</span> in <code className="font-mono text-white/70 text-xs">special_math_ops_test.py</code> to prevent silent numerical errors during model training.
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
        "Python", "FastAPI", "Ollama", "RAG Pipelines", "Vector Search (FAISS, BM25)", "Cross-Encoder Reranking", "OpenCV", "Tesseract", "Plotly Dash", "Pandas", "NumPy", "WebSockets", "SQLite WAL", "SQLAlchemy", "JWT & Role-Based Access (RBAC)"
      ],
      shortPoints: [
        <React.Fragment key="sp1">Built an <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">air-gapped &lt;8GB RAM OCR</span> and <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">Hybrid RAG pipeline</span> (FAISS, BM25, and Cross-Encoder reranking) with a <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">human-in-the-loop triage UI</span> for scanned multi-lingual document bundles across 12 languages.</React.Fragment>,
        <React.Fragment key="sp2">Engineered an <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">async ETL pipeline</span> ingesting <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">50MB/100K+ row workbooks in 5 to 15s</span> into <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">SQLite WAL</span> across <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">4.2M+ telemetry records</span>, secured with SQLAlchemy JWT row-level access for 1,000+ users.</React.Fragment>
      ],
      projects: [
        {
          color: "emerald-400",
          title: "Offline OCR & Hybrid RAG Document System",
          points: [
            <React.Fragment key="1">Engineered a <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">3-phase pipeline</span>: PDF disk-write → <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">OpenCV</span> preprocessing (Otsu threshold, deskew, CLAHE contrast) + <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">Tesseract OCR</span> → <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">Ollama</span> boundary detection → strict JSON extraction at <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">temp=0.0</span> with malformed outputs dumped to flat files for manual review.</React.Fragment>,
            <React.Fragment key="2">Used <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">Ollama (gemma3:4b)</span> to dynamically detect salutations and closings, splitting multi-page PDF bundles into distinct logical documents rather than relying on brittle regex heuristics.</React.Fragment>,
            <React.Fragment key="3">Built a <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">degradation-aware fallback</span> that monitors extracted character counts per page, routing low-confidence or degraded handwritten scans to <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">manual review before downstream LLM extraction</span>.</React.Fragment>,
            <React.Fragment key="4">Developed a custom <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">HTML/JS triage dashboard</span> with per-document analysis views, displaying extracted metadata, model summaries, and the original scan <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">side-by-side</span> with confidence scores and urgency filters.</React.Fragment>,
            <React.Fragment key="5">Deployed the pipeline on <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">CPU-only 8GB air-gapped machines</span>, sequencing quantized models and streaming uploads directly to disk at <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">1 to 2 minutes per document</span> under strict data isolation.</React.Fragment>
          ]
        },
        {
          color: "cyan-400",
          title: "High-Throughput Telemetry ETL & Analytics Backend",
          points: [
            <React.Fragment key="1">Architected <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">dual ingestion paths</span> combining manual UI uploads with an automated <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">APScheduler cron</span> that sweeps configured directories every 3 minutes for unindexed files, enforcing idempotency via composite unique constraints and <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">ON CONFLICT DO UPDATE</span> logic.</React.Fragment>,
            <React.Fragment key="2">Processed 50MB workbooks through <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">stateless domain parsers</span> using vectorized NumPy calculations, prefix-based source routing, and 1,000-row batch upserts, using <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">WebSocket streaming</span> to prevent UI blocking during heavy ingestion.</React.Fragment>,
            <React.Fragment key="3">Consolidated <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">4 disparate telemetry streams (telephony logs, IVR events, call records, and agent summaries)</span> into a single relational schema with <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">dynamic time-bucketing</span> (daily/weekly/monthly) and bidirectional cross-filtering across 4.2M+ records.</React.Fragment>,
            <React.Fragment key="4">Built <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">agent performance quadrants</span> plotting CPH × AHT × Occupancy and <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">hourly volume heatmaps</span> to surface intraday bottlenecks masked by daily averages, with client-side caching to prevent DB contention.</React.Fragment>,
            <React.Fragment key="5">Enforced <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">tenant isolation</span> by injecting JWT claims into SQLAlchemy base queries, bcrypt password rehashing, <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">X-Forwarded-For client IP capture</span> for non-repudiation audit trails, and automated <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">90-day log pruning</span>.</React.Fragment>
          ]
        }
      ]
    }
  ],
  featuredProjects: [
    {
      title: "HeartFlow OS",
      description: <>ML platform exporting trained Python models to <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">optimized C++ for microcontrollers</span>, paired with a <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">real-time monitoring dashboard</span>.</>,
      tech: ['Next.js', 'React', 'FastAPI', 'Python', 'WebSockets'],
      link: "/projects#heartflow"
    },
    {
      title: "Vera AI Engine",
      description: <>High-performance AI orchestrator with a <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">4-tier fail-fast cascade</span> (Nemotron to local Llama.cpp) and strict <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">LlamaGrammar enforcement</span>.</>,
      tech: ['FastAPI', 'llama.cpp', 'Docker', 'Python', 'Nemotron'],
      link: "/projects#vera-engine"
    },
    {
      title: "HF Pluggable Gateway",
      description: <>Aggregation API gateway and container runtime with build-time weight prefetching and <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">sub-100ms warmups</span> on Hugging Face Spaces.</>,
      tech: ['FastAPI', 'Docker', 'Python', 'PyTorch', 'uv'],
      link: "/projects#hf-backend"
    },
    {
      title: "Semantic Comment Analyzer",
      description: <>NLP pipeline that classifies customer feedback and support tickets using <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">sentence embeddings</span> and <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">SVM explainability</span>.</>,
      tech: ['Python', 'FastAPI', 'Sentence Transformers', 'Hugging Face'],
      link: "/projects#semantic"
    }
  ],
  projects: [
    {
      id: "heartflow",
      title: "HeartFlow OS",
      description: "An ML platform that exports trained Scikit-Learn models into zero-dependency C++ for microcontrollers, paired with a real-time WebSocket dashboard.",
      tech: ["Next.js 16", "React 19", "FastAPI", "Python 3.10", "PlatformIO", "WebSockets"],
      deepDive: [
        <React.Fragment key="1">Wrote an <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">AST exporter</span> that transpiles Scikit-Learn soft-voting ensembles into <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">pure, heap-free C99 headers</span> for ESP32 chips.</React.Fragment>,
        <React.Fragment key="2">Implemented <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">INT8 quantization</span> to reduce memory footprint by <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">76% (34KB to 8KB)</span> and achieve <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">sub-millisecond inference</span> on microcontrollers.</React.Fragment>,
        <React.Fragment key="3">Built a real-time web dashboard streaming sensor packets over <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">Web Serial and WebSockets</span> with automated model hot-swapping.</React.Fragment>
      ],
      repo: "https://github.com/rachit-mangawa/HEARTFLOW_OS",
      live: "https://rachit-mangawa.github.io/HEARTFLOW_OS/",
      visualContent: <TranspilerVisual />
    },
    {
      id: "vera-engine",
      title: "Vera AI Engine",
      description: "A high-performance AI orchestrator featuring a 4-tier fail-fast fallback cascade and strict grammar enforcement.",
      tech: ["FastAPI", "Python 3.10", "Docker", "llama.cpp", "Nemotron 550B", "LlamaGrammar"],
      deepDive: [
        <React.Fragment key="1">Engineered a deterministic <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">4-tier fallback cascade</span> (NVIDIA NIM Nemotron-3 550B → Groq GPT OSS 20B → Gemini 2.5 Flash → Local CPU Llama.cpp Qwen2.5) with strict timeout budgets to guarantee responses in &lt;30s on 2vCPU Hugging Face Spaces.</React.Fragment>,
        <React.Fragment key="2">Implemented the <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">Python Caveman distillation pattern</span>, compressing 500KB+ JSON raw merchant and trigger payloads into structured factual bullet points in <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">&lt;0.001s</span>, eliminating context bottlenecks and preventing metric hallucinations.</React.Fragment>,
        <React.Fragment key="3">Enforced hardware-level <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">LlamaGrammar constraints</span> at the logits level for local SLM execution, guaranteeing 100% valid JSON schema compliance, paired with an intra-tier auto-repair loop for taboo and word-count policies.</React.Fragment>
      ],
      repo: "https://github.com/rachit-mangawa/vera-engine",
      hfSpace: "https://huggingface.co/spaces/IDKHowToCodeFr/vera-engine",
      visualContent: <VeraEngineVisual />
    },
    {
      id: "hf-backend",
      title: "HF Pluggable Gateway",
      description: "An aggregation API gateway and container runtime that hot-mounts multiple independent Python packages into a single Hugging Face Spaces container with build-time model prefetching.",
      tech: ["FastAPI", "Docker", "Python 3.11", "Uvicorn", "uv", "PyTorch"],
      deepDive: [
        <React.Fragment key="1">Architected an extensible <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">pluggable service gateway</span> that dynamically mounts isolated subproject packages under dedicated route prefixes (<code className="font-mono text-white/80 text-xs">/heartflow</code>, <code className="font-mono text-white/80 text-xs">/semantic</code>) via standard entrypoint registry mappings.</React.Fragment>,
        <React.Fragment key="2">Baked model weights into container image layers via <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">build-time prefetching scripts (<code className="font-mono text-white/80 text-xs">prefetch.py</code>)</span> and executed startup memory warmups in background worker threads, driving first-request cold-start latency down <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">below 100ms</span>.</React.Fragment>,
        <React.Fragment key="3">Implemented robust edge security controls including <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">SecurityHeadersMiddleware (CSP frame-ancestors, HSTS, nosniff)</span>, unbuffered chunk stream byte metering, early Content-Length 413 rejections, and a live web developer console.</React.Fragment>
      ],
      repo: "https://github.com/rachit-mangawa/hf-backend",
      visualContent: <HfGatewayVisual />
    },
    {
      id: "semantic",
      title: "Semantic Comment Analyzer",
      description: "An NLP pipeline that classifies customer feedback and support tickets using sentence embeddings, with word-level occlusion explainability.",
      tech: ["Python", "FastAPI", "Sentence Transformers", "Hugging Face", "Scikit-Learn"],
      deepDive: [
        <React.Fragment key="1">Used <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">all-MiniLM embeddings</span> with an <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">SVM classification head</span>, achieving low CPU latency (<span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">sub-15ms</span>) for high-throughput ticket routing.</React.Fragment>,
        <React.Fragment key="2">Developed an <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">occlusion explainability function</span> that measures drops in classifier confidence to highlight influential words.</React.Fragment>,
        <React.Fragment key="3">Packaged the pipeline as a lightweight <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">FastAPI service</span> designed to run locally within <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">&lt;4GB RAM</span>.</React.Fragment>
      ],
      repo: "https://github.com/rachit-mangawa/Semantic-Comment-Analyze",
      live: "https://rachit-mangawa.github.io/Semantic-Comment-Analyze/",
      visualContent: <SemanticAnalyzerVisual />
    }
  ],
  skills: [
    {
      id: "languages",
      category: "Languages",
      categoryIcon: "LanguagesCategoryIcon",
      description: "Languages I write regularly for backend microservices, embedded firmware, algorithms, and systems scripting.",
      colSpan: "lg:col-span-12",
      skills: [
        { name: "Python", iconName: "PythonIcon" },
        { name: "C++", iconName: "CppIcon" },
        { name: "TypeScript", iconName: "TypeScriptIcon" },
        { name: "SQL", iconName: "SqlIcon" },
        { name: "Bash", iconName: "BashIcon" },
      ]
    },
    {
      id: "agentic-ai",
      category: "Agentic AI & Automation",
      categoryIcon: "GenAiCategoryIcon",
      description: "Building autonomous agents, Model Context Protocol (MCP) integrations, local LLM orchestration, and workflow automation.",
      colSpan: "lg:col-span-12",
      skills: [
        { name: "Agentic AI", iconName: "AgenticAiIcon" },
        { name: "MCP", iconName: "McpIcon" },
        { name: "AI Automation", iconName: "AiAutomationIcon" },
        { name: "LLMs (Ollama)", iconName: "OllamaIcon" },
        { name: "LangChain", iconName: "LangChainIcon" },
        { name: "RAG Pipelines", iconName: "RagIcon" },
        { name: "Vector Search", iconName: "VectorSearchIcon" },
        { name: "Hugging Face Transformers", iconName: "HuggingFaceIcon" },
      ]
    },
    {
      id: "ml-vision",
      category: "Machine Learning & Vision",
      categoryIcon: "MlCategoryIcon",
      description: "Model training, computer vision preprocessing, and numerical computing.",
      colSpan: "lg:col-span-12",
      skills: [
        { name: "PyTorch", iconName: "PyTorchIcon" },
        { name: "TensorFlow Core", iconName: "TensorFlowIcon" },
        { name: "Scikit-Learn", iconName: "ScikitLearnIcon" },
        { name: "OpenCV", iconName: "OpenCvIcon" },
        { name: "Pandas", iconName: "PandasIcon" },
        { name: "NumPy", iconName: "NumpyIcon" },
      ]
    },
    {
      id: "backend-web",
      category: "Backend & Systems",
      categoryIcon: "BackendCategoryIcon",
      description: "Asynchronous REST microservices, real-time WebSocket feeds, and concurrent database storage engines.",
      colSpan: "lg:col-span-12",
      skills: [
        { name: "FastAPI", iconName: "FastApiIcon" },
        { name: "Next.js", iconName: "NextjsIcon" },
        { name: "React", iconName: "ReactIcon" },
        { name: "Redis", iconName: "RedisIcon" },
        { name: "SQLite WAL", iconName: "SqliteIcon" },
        { name: "SQLAlchemy", iconName: "SqlAlchemyIcon" },
        { name: "WebSockets", iconName: "WebSocketsIcon" },
        { name: "PlatformIO", iconName: "PlatformIoIcon" },
      ]
    },
    {
      id: "data-infra",
      category: "Developer Tools & DevOps",
      categoryIcon: "DataCategoryIcon",
      description: "Containerized environments, continuous integration, regression test suites, and Linux workflows.",
      colSpan: "lg:col-span-12",
      skills: [
        { name: "Docker", iconName: "DockerIcon" },
        { name: "Git", iconName: "GitIcon" },
        { name: "GitHub Actions", iconName: "GitHubActionsIcon" },
        { name: "Linux", iconName: "LinuxIcon" },
        { name: "PyTest", iconName: "PyTestIcon" },
        { name: "n8n", iconName: "N8nIcon" },
      ]
    }
  ]
};
