import React from 'react';
import { TranspilerVisual, SemanticAnalyzerVisual } from './components/ProjectVisuals';

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
    huggingface: "https://huggingface.co/IDKHowToCodeFr",
    huggingfaceHandle: "IDKHowToCodeFr",
    location: "NSUT, New Delhi, India"
  },
  bio: {
    content: (
      <>
        CS & AI student at <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">NSUT Delhi</span>. I work mostly in Python and C++, building backend services, compilers for microcontrollers, and offline ML pipelines.
        <br /><br />
        Recently interned at <span className="text-white font-medium underline decoration-white/20 underline-offset-4 decoration-1 hover:decoration-white/50 transition-colors">UIDAI (Aadhaar)</span>, where I built an air-gapped Hybrid RAG & OCR grievance pipeline and high-throughput telemetry data backends.
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
      rank: "Pupil",
      rating: 1343
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
        Fixed a numerical bug in TensorFlow's autodiff engine.
        The gradient for <code className="bg-black/40 px-1.5 py-0.5 rounded text-white/80 border border-white/10 font-mono text-xs">tf.math.bessel_i1</code> returned <code className="text-red-400 font-mono text-xs">1.0</code> at <code className="font-mono text-xs">x=0</code>, but mathematically the correct limit is <code className="text-emerald-400 font-mono text-xs">0.5</code>.
        <br /><br />
        Patched the gradient calculation in <code className="font-mono text-white/70 text-xs">math_grad.py</code> and added regression tests in <code className="font-mono text-white/70 text-xs">special_math_ops_test.py</code> to prevent silent numerical errors during model training.
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
        "Built an air-gapped <8GB RAM OCR, local Ollama, and Hybrid RAG pipeline (FAISS + BM25 + Cross-Encoder reranker) with a human-in-the-loop triage UI for scanned grievance letters across 12 languages.",
        "Engineered an async ETL pipeline ingesting 50MB/100K+ row workbooks in 5 to 15s into SQLite WAL across 4.2M+ telemetry records, secured with SQLAlchemy JWT row-level access for 1,000+ users."
      ],
      projects: [
        {
          color: "emerald-400",
          title: "Offline OCR & Hybrid RAG Grievance System",
          points: [
            <React.Fragment key="1">Built an offline <strong className="text-white/90 font-medium">FastAPI</strong> pipeline for <strong className="text-white/90 font-medium">50MB scanned PDFs across 12 languages</strong>, chaining <strong className="text-white/90 font-medium">OpenCV</strong> image cleanup (Otsu, deskew, CLAHE) and <strong className="text-white/90 font-medium">Tesseract OCR</strong> into a local <strong className="text-white/90 font-medium">Ollama</strong> model (gemma3:4b, temp=0.0) to pull 5 entity fields into strict JSON.</React.Fragment>,
            <React.Fragment key="2">Added a local <strong className="text-white/90 font-medium">Hybrid RAG pipeline (FAISS + BM25)</strong> with a <strong className="text-white/90 font-medium">Cross-Encoder reranker (MiniLM-L-6-v2)</strong> to match incoming complaints against internal policy circulars and past resolutions, generating grounded action summaries.</React.Fragment>,
            <React.Fragment key="3">Kept peak memory <strong className="text-white/90 font-medium">under 8GB RAM on CPU-only air-gapped machines</strong> by running quantized models sequentially, streaming uploads directly to disk, and splitting multi-letter bundles at 1 to 2 min/letter on degraded Hindi scans.</React.Fragment>,
            <React.Fragment key="4">Built a <strong className="text-white/90 font-medium">human-in-the-loop triage UI</strong> that pairs original scans side by side with RAG-grounded summaries, confidence scores, and urgency filters on a single screen for review operators.</React.Fragment>
          ]
        },
        {
          color: "cyan-400",
          title: "High-Throughput Telemetry ETL & Analytics Backend",
          points: [
            <React.Fragment key="1">Wrote an async ETL pipeline with vectorized <strong className="text-white/90 font-medium">NumPy/Pandas</strong> parsers and <strong className="text-white/90 font-medium">WebSocket progress tracking</strong> that ingests 50MB (100K+ row) workbooks in <strong className="text-white/90 font-medium">5 to 15s</strong> using 1,000-row batch upserts on <strong className="text-white/90 font-medium">SQLite WAL</strong> across <strong className="text-white/90 font-medium">4.2M+ call records</strong>.</React.Fragment>,
            <React.Fragment key="2">Locked down row-level data access for <strong className="text-white/90 font-medium">1,000+ users</strong> across a unified <strong className="text-white/90 font-medium">FastAPI + Plotly Dash</strong> analytics platform by injecting JWT claims into <strong className="text-white/90 font-medium">SQLAlchemy</strong> queries, paired with bcrypt rehashing and 90-day audit log pruning.</React.Fragment>,
            <React.Fragment key="3">Engineered interactive bidirectional cross-filtering across operational KPI cards, dynamic time-bucketing filters, and hourly call volume heatmaps, backed by client-side caching to prevent database contention.</React.Fragment>
          ]
        }
      ]
    }
  ],
  projects: [
    {
      id: "heartflow",
      title: "HeartFlow OS",
      description: "An ML platform that exports trained Scikit-Learn models into zero-dependency C++ for microcontrollers, paired with a real-time WebSocket dashboard.",
      tech: ["Next.js 16", "React 19", "FastAPI", "Python 3.10", "PlatformIO", "WebSockets"],
      deepDive: [
        <React.Fragment key="1">Wrote an AST exporter that transpiles Scikit-Learn soft-voting ensembles into pure, heap-free C99 headers for ESP32 chips.</React.Fragment>,
        <React.Fragment key="2">Implemented INT8 quantization to reduce memory footprint by 76% (34KB to 8KB) and achieve sub-millisecond inference on microcontrollers.</React.Fragment>,
        <React.Fragment key="3">Built a real-time web dashboard streaming sensor packets over Web Serial and WebSockets with automated model hot-swapping.</React.Fragment>
      ],
      repo: "https://github.com/rachit-mangawa/HEARTFLOW_OS",
      live: "https://rachit-mangawa.github.io/HEARTFLOW_OS/",
      hfSpace: "https://huggingface.co/spaces/IDKHowToCodeFr/tinyml-backend",
      visualContent: <TranspilerVisual />
    },
    {
      id: "semantic",
      title: "Semantic Analyzer",
      description: "An NLP pipeline that classifies customer feedback and support tickets using sentence embeddings, with word-level occlusion explainability.",
      tech: ["Python", "FastAPI", "Sentence Transformers", "Hugging Face", "Scikit-Learn"],
      deepDive: [
        <React.Fragment key="1">Used all-MiniLM embeddings with an SVM classification head, achieving low CPU latency (sub-15ms) for high-throughput ticket routing.</React.Fragment>,
        <React.Fragment key="2">Developed an occlusion explainability function that measures drops in classifier confidence to highlight influential words.</React.Fragment>,
        <React.Fragment key="3">Packaged the pipeline as a lightweight FastAPI service designed to run locally within 4GB RAM.</React.Fragment>
      ],
      repo: "https://github.com/rachit-mangawa/Semantic-Comment-Analyzer",
      live: null,
      visualContent: <SemanticAnalyzerVisual />
    }
  ],
  skills: [
    {
      id: "languages",
      category: "Languages",
      categoryIcon: "LanguagesCategoryIcon",
      pipelineTabs: [
        { label: "COMPILED & TYPED", icon: "CppIcon" },
        { label: "SHELL & SCRIPTING", icon: "BashIcon" }
      ],
      description: "Languages I write regularly for backend services, embedded firmware, and systems scripting.",
      colSpan: "lg:col-span-5",
      skills: [
        { name: "Python", detail: "3.10 - 3.13", iconName: "PythonIcon" },
        { name: "C/C++", detail: "C99 / C++17", iconName: "CppIcon" },
        { name: "TypeScript", detail: "Web & Tooling", iconName: "TypeScriptIcon" },
        { name: "SQL", detail: "Queries & Schema", iconName: "SqlIcon" },
        { name: "Bash", detail: "Shell Scripting", iconName: "BashIcon" },
      ]
    },
    {
      id: "genai-nlp",
      category: "GenAI & NLP",
      categoryIcon: "GenAiCategoryIcon",
      pipelineTabs: [
        { label: "RAG PIPELINE", icon: "RagIcon", variant: "cyan" },
        { label: "HYBRID SEARCH", icon: "VectorSearchIcon" }
      ],
      description: "Local inference with Ollama, hybrid vector search (FAISS + BM25), and transformer embeddings.",
      colSpan: "lg:col-span-7",
      skills: [
        { name: "LLMs (Ollama)", detail: "Local Inference", iconName: "OllamaIcon" },
        { name: "RAG Pipelines", detail: "Context Retrieval", iconName: "RagIcon" },
        { name: "Vector Search (FAISS, BM25)", detail: "Dense & Sparse", iconName: "VectorSearchIcon" },
        { name: "Cross-Encoder Reranking", detail: "Relevance Scoring", iconName: "RerankingIcon" },
        { name: "Hugging Face Transformers", detail: "Pipelines & Models", iconName: "HuggingFaceIcon" },
        { name: "Sentence-Transformers", detail: "MiniLM Embeddings", iconName: "SentenceTransformersIcon" },
      ]
    },
    {
      id: "ml-vision",
      category: "Machine Learning & Vision",
      categoryIcon: "MlCategoryIcon",
      pipelineTabs: [
        { label: "MODEL TRAINING", icon: "PyTorchIcon", variant: "purple" },
        { label: "EXPLAINABLE AI", icon: "ShapIcon" }
      ],
      description: "Model training, explainability with SHAP, quantization, and document image processing.",
      colSpan: "lg:col-span-6",
      skills: [
        { name: "PyTorch", detail: "Tensors & Training", iconName: "PyTorchIcon" },
        { name: "Scikit-Learn", detail: "Classifiers & Ensembles", iconName: "ScikitLearnIcon" },
        { name: "SHAP (Explainable AI)", detail: "Feature Attribution", iconName: "ShapIcon" },
        { name: "OpenCV", detail: "Image Preprocessing", iconName: "OpenCvIcon" },
        { name: "OCR (Tesseract)", detail: "Document Text Extraction", iconName: "OcrIcon" },
      ]
    },
    {
      id: "backend-web",
      category: "Backend & Web",
      categoryIcon: "BackendCategoryIcon",
      pipelineTabs: [
        { label: "ASYNC APIS", icon: "FastApiIcon", variant: "emerald" },
        { label: "WEBSOCKETS", icon: "WebSocketsIcon" }
      ],
      description: "FastAPI backends, live WebSocket feeds, Next.js, and relational databases.",
      colSpan: "lg:col-span-6",
      skills: [
        { name: "FastAPI", detail: "Async Services", iconName: "FastApiIcon" },
        { name: "Next.js", detail: "React 19 Frontend", iconName: "NextjsIcon" },
        { name: "REST APIs", detail: "HTTP Endpoints", iconName: "RestApiIcon" },
        { name: "WebSockets", detail: "Live Data Feeds", iconName: "WebSocketsIcon" },
        { name: "SQLAlchemy", detail: "ORM & Querying", iconName: "SqlAlchemyIcon" },
        { name: "SQLite", detail: "WAL Mode", iconName: "SqliteIcon" },
        { name: "JWT & Role-Based Access (RBAC)", detail: "Auth & Permissions", iconName: "JwtRbacIcon" },
      ]
    },
    {
      id: "data-infra",
      category: "Data Engineering & Tools",
      categoryIcon: "DataCategoryIcon",
      pipelineTabs: [
        { label: "ETL PIPELINES", icon: "EtlIcon", variant: "amber" },
        { label: "CI/CD & DOCKER", icon: "DockerIcon" }
      ],
      description: "Batch data pipelines, testing suites, containerized services, and Linux environments.",
      colSpan: "lg:col-span-12",
      skills: [
        { name: "ETL Pipelines", detail: "Batch Processing", iconName: "EtlIcon" },
        { name: "Pandas", detail: "DataFrames & Aggregations", iconName: "PandasIcon" },
        { name: "NumPy", detail: "Numerical Arrays", iconName: "NumpyIcon" },
        { name: "Plotly Dash", detail: "Internal Dashboards", iconName: "PlotlyDashIcon" },
        { name: "Docker", detail: "Container Workflows", iconName: "DockerIcon" },
        { name: "Git", detail: "Version Control", iconName: "GitIcon" },
        { name: "GitHub Actions", detail: "CI/CD Workflows", iconName: "GitHubActionsIcon" },
        { name: "PyTest", detail: "Unit & Regression Tests", iconName: "PyTestIcon" },
        { name: "Linux", detail: "Development & Shell", iconName: "LinuxIcon" },
      ]
    }
  ]
};
