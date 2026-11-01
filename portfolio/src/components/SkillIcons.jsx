import React from 'react';
import {
  siPython,
  siCplusplus,
  siTypescript,
  siGnubash,
  siOllama,
  siHuggingface,
  siPytorch,
  siScikitlearn,
  siOpencv,
  siFastapi,
  siNextdotjs,
  siReact,
  siSqlalchemy,
  siSqlite,
  siJsonwebtokens,
  siPandas,
  siNumpy,
  siPlotly,
  siDocker,
  siGit,
  siGithubactions,
  siPytest,
  siLinux,
  siCodeforces,
  siLeetcode,
  siTensorflow,
  siPlatformio,
  siRedis
} from 'simple-icons';

// Helper to render official Simple Icons SVG path
function SimpleIcon({ icon, size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}

// 1. Languages
export const PythonIcon = (props) => <SimpleIcon icon={siPython} {...props} />;
export const CppIcon = (props) => <SimpleIcon icon={siCplusplus} {...props} />;
export const TypeScriptIcon = (props) => <SimpleIcon icon={siTypescript} {...props} />;
export const BashIcon = (props) => <SimpleIcon icon={siGnubash} {...props} />;
export function SqlIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
      <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6"/>
    </svg>
  );
}

// 2. GenAI & NLP
export const OllamaIcon = (props) => <SimpleIcon icon={siOllama} {...props} />;
export const HuggingFaceIcon = (props) => <SimpleIcon icon={siHuggingface} {...props} />;

export function RagIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <circle cx="17" cy="18" r="3" fill="#050505" stroke="currentColor"/>
      <line x1="19.5" y1="20.5" x2="22" y2="23"/>
    </svg>
  );
}

export function VectorSearchIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="5" cy="5" r="2.5" fill="currentColor"/>
      <circle cx="19" cy="7" r="2.5" fill="currentColor"/>
      <circle cx="14" cy="18" r="2.5" fill="currentColor"/>
      <circle cx="7" cy="16" r="2.5" fill="currentColor"/>
      <line x1="5" y1="5" x2="19" y2="7" strokeDasharray="2 2"/>
      <line x1="5" y1="5" x2="7" y2="16"/>
      <line x1="7" y1="16" x2="14" y2="18"/>
      <line x1="19" y1="7" x2="14" y2="18"/>
    </svg>
  );
}

export function RerankingIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 6h10"/>
      <path d="M3 12h14"/>
      <path d="M3 18h7"/>
      <path d="M18 4l3 3-3 3"/>
      <path d="M21 7h-4"/>
      <path d="M15 20l-3-3 3-3"/>
      <path d="M12 17h4"/>
    </svg>
  );
}

export function SentenceTransformersIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="4" width="20" height="5" rx="1"/>
      <rect x="2" y="15" width="20" height="5" rx="1"/>
      <path d="M6 9v6"/>
      <path d="M12 9v6"/>
      <path d="M18 9v6"/>
    </svg>
  );
}

// 3. Machine Learning & Vision
export const PyTorchIcon = (props) => <SimpleIcon icon={siPytorch} {...props} />;
export const ScikitLearnIcon = (props) => <SimpleIcon icon={siScikitlearn} {...props} />;
export const OpenCvIcon = (props) => <SimpleIcon icon={siOpencv} {...props} />;

export function ShapIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <line x1="12" y1="3" x2="12" y2="21" strokeDasharray="2 2"/>
      <rect x="12" y="5" width="8" height="3" rx="1" fill="currentColor" opacity="0.3"/>
      <rect x="6" y="10" width="6" height="3" rx="1" fill="currentColor" opacity="0.8"/>
      <rect x="12" y="15" width="5" height="3" rx="1" fill="currentColor" opacity="0.3"/>
    </svg>
  );
}

export function OcrIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 7V4h3"/>
      <path d="M20 7V4h-3"/>
      <path d="M4 17v3h3"/>
      <path d="M20 17v3h-3"/>
      <path d="M9 16l3-8 3 8"/>
      <line x1="10" y1="13" x2="14" y2="13"/>
    </svg>
  );
}

// 4. Backend & Web
export const FastApiIcon = (props) => <SimpleIcon icon={siFastapi} {...props} />;
export const NextjsIcon = (props) => <SimpleIcon icon={siNextdotjs} {...props} />;
export const ReactIcon = (props) => <SimpleIcon icon={siReact} {...props} />;
export const PlatformIoIcon = (props) => <SimpleIcon icon={siPlatformio} {...props} />;
export const RedisIcon = (props) => <SimpleIcon icon={siRedis} {...props} />;
export const SqlAlchemyIcon = (props) => <SimpleIcon icon={siSqlalchemy} {...props} />;
export const SqliteIcon = (props) => <SimpleIcon icon={siSqlite} {...props} />;
export const JwtRbacIcon = (props) => <SimpleIcon icon={siJsonwebtokens} {...props} />;

export function RestApiIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="6" width="20" height="12" rx="3"/>
      <path d="M6 12h2"/>
      <path d="M11 12h2"/>
      <path d="M16 12h2"/>
      <path d="M8 9l-2 3 2 3"/>
      <path d="M16 9l2 3-2 3"/>
    </svg>
  );
}

export function WebSocketsIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
      <path d="M4.93 4.93a10 10 0 0114.14 0"/>
      <path d="M7.76 7.76a6 6 0 018.48 0"/>
      <path d="M4.93 19.07a10 10 0 0014.14 0"/>
      <path d="M7.76 16.24a6 6 0 008.48 0"/>
    </svg>
  );
}

// 5. Data Engineering & Tools
export const PandasIcon = (props) => <SimpleIcon icon={siPandas} {...props} />;
export const NumpyIcon = (props) => <SimpleIcon icon={siNumpy} {...props} />;
export const PlotlyDashIcon = (props) => <SimpleIcon icon={siPlotly} {...props} />;
export const DockerIcon = (props) => <SimpleIcon icon={siDocker} {...props} />;
export const GitIcon = (props) => <SimpleIcon icon={siGit} {...props} />;
export const GitHubActionsIcon = (props) => <SimpleIcon icon={siGithubactions} {...props} />;
export const PyTestIcon = (props) => <SimpleIcon icon={siPytest} {...props} />;
export const LinuxIcon = (props) => <SimpleIcon icon={siLinux} {...props} />;

export function EtlIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 6h6l3 4h9"/>
      <path d="M3 18h6l3-4h9"/>
      <polyline points="18 4 21 6 18 8"/>
      <polyline points="18 16 21 18 18 20"/>
      <circle cx="3" cy="6" r="1.5" fill="currentColor"/>
      <circle cx="3" cy="18" r="1.5" fill="currentColor"/>
    </svg>
  );
}

// 6. External Ecosystem / Achievements
export const CodeforcesIcon = (props) => <SimpleIcon icon={siCodeforces} {...props} />;
export const LeetCodeIcon = (props) => <SimpleIcon icon={siLeetcode} {...props} />;
export const TensorFlowIcon = (props) => <SimpleIcon icon={siTensorflow} {...props} />;

// 7. Category Discipline Icons
export function LanguagesCategoryIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  );
}

export function GenAiCategoryIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );
}

export function MlCategoryIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2"/>
      <rect x="9" y="9" width="6" height="6"/>
      <line x1="9" y1="1" x2="9" y2="4"/>
      <line x1="15" y1="1" x2="15" y2="4"/>
      <line x1="9" y1="20" x2="9" y2="23"/>
      <line x1="15" y1="20" x2="15" y2="23"/>
      <line x1="20" y1="9" x2="23" y2="9"/>
      <line x1="20" y1="15" x2="23" y2="15"/>
      <line x1="1" y1="9" x2="4" y2="9"/>
      <line x1="1" y1="15" x2="4" y2="15"/>
    </svg>
  );
}

export function BackendCategoryIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="8" rx="2"/>
      <rect x="2" y="14" width="20" height="8" rx="2"/>
      <line x1="6" y1="6" x2="6.01" y2="6"/>
      <line x1="6" y1="18" x2="6.01" y2="18"/>
    </svg>
  );
}

export function DataCategoryIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>
  );
}

// 8. Dynamic Tech Icon Component & Tag
export function TechIcon({ name, size = 14, className = "" }) {
  if (!name) return null;
  const key = String(name).trim().toLowerCase();
  switch (key) {
    case 'python':
    case 'python 3.10':
      return <PythonIcon size={size} className={className} />;
    case 'c++':
    case 'c/c++':
    case 'c99':
      return <CppIcon size={size} className={className} />;
    case 'typescript':
      return <TypeScriptIcon size={size} className={className} />;
    case 'sql':
      return <SqlIcon size={size} className={className} />;
    case 'bash':
      return <BashIcon size={size} className={className} />;
    case 'ollama':
    case 'llms (ollama)':
      return <OllamaIcon size={size} className={className} />;
    case 'hugging face':
    case 'hugging face transformers':
      return <HuggingFaceIcon size={size} className={className} />;
    case 'pytorch':
      return <PyTorchIcon size={size} className={className} />;
    case 'scikit-learn':
      return <ScikitLearnIcon size={size} className={className} />;
    case 'shap':
    case 'shap (explainable ai)':
      return <ShapIcon size={size} className={className} />;
    case 'opencv':
      return <OpenCvIcon size={size} className={className} />;
    case 'tesseract':
    case 'ocr (tesseract)':
      return <OcrIcon size={size} className={className} />;
    case 'fastapi':
      return <FastApiIcon size={size} className={className} />;
    case 'next.js':
    case 'next.js 16':
      return <NextjsIcon size={size} className={className} />;
    case 'react':
    case 'react 19':
      return <ReactIcon size={size} className={className} />;
    case 'platformio':
      return <PlatformIoIcon size={size} className={className} />;
    case 'redis':
      return <RedisIcon size={size} className={className} />;
    case 'sqlalchemy':
      return <SqlAlchemyIcon size={size} className={className} />;
    case 'sqlite':
    case 'sqlite wal':
      return <SqliteIcon size={size} className={className} />;
    case 'jwt':
    case 'jwt & rbac':
    case 'jwt & role-based access (rbac)':
      return <JwtRbacIcon size={size} className={className} />;
    case 'rest apis':
      return <RestApiIcon size={size} className={className} />;
    case 'websockets':
      return <WebSocketsIcon size={size} className={className} />;
    case 'pandas':
      return <PandasIcon size={size} className={className} />;
    case 'numpy':
      return <NumpyIcon size={size} className={className} />;
    case 'plotly':
    case 'plotly dash':
      return <PlotlyDashIcon size={size} className={className} />;
    case 'docker':
      return <DockerIcon size={size} className={className} />;
    case 'git':
      return <GitIcon size={size} className={className} />;
    case 'github actions':
      return <GitHubActionsIcon size={size} className={className} />;
    case 'pytest':
      return <PyTestIcon size={size} className={className} />;
    case 'linux':
      return <LinuxIcon size={size} className={className} />;
    case 'codeforces':
      return <CodeforcesIcon size={size} className={className} />;
    case 'leetcode':
      return <LeetCodeIcon size={size} className={className} />;
    case 'tensorflow':
    case 'tensorflow core':
      return <TensorFlowIcon size={size} className={className} />;
    case 'rag pipelines':
      return <RagIcon size={size} className={className} />;
    case 'vector search':
    case 'vector search (faiss, bm25)':
      return <VectorSearchIcon size={size} className={className} />;
    case 'cross-encoder reranking':
      return <RerankingIcon size={size} className={className} />;
    case 'sentence-transformers':
    case 'sentence transformers':
      return <SentenceTransformersIcon size={size} className={className} />;
    case 'etl pipelines':
      return <EtlIcon size={size} className={className} />;
    default:
      return null;
  }
}

export function TechTag({ name, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-white/70 hover:border-white/20 hover:text-white transition-colors duration-200 ${className}`}>
      <TechIcon name={name} size={13} className="shrink-0 text-white/60" />
      <span>{name}</span>
    </span>
  );
}
