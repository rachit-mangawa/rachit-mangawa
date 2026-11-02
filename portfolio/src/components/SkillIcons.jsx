import React from 'react';
import {
  Code,
  Brain,
  Cpu,
  HardDrives,
  Database,
  Globe,
  Broadcast,
  ChartBar,
  Sliders,
  ArrowsMerge,
  MagnifyingGlass,
  FileText,
  Graph,
  Robot,
  Lightning
} from '@phosphor-icons/react';
import {
  siPython,
  siCplusplus,
  siC,
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
  siRedis,
  siLangchain,
  siN8n,
  siModelcontextprotocol
} from 'simple-icons';

// Helper to render official Simple Icons SVG path in monochrome currentColor
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
export const CIcon = (props) => <SimpleIcon icon={siC} {...props} />;
export const TypeScriptIcon = (props) => <SimpleIcon icon={siTypescript} {...props} />;
export const BashIcon = (props) => <SimpleIcon icon={siGnubash} {...props} />;
export const SqlIcon = (props) => <Database size={props.size || 18} className={props.className || ""} />;

// 2. GenAI & NLP
export const OllamaIcon = (props) => <SimpleIcon icon={siOllama} {...props} />;
export const HuggingFaceIcon = (props) => <SimpleIcon icon={siHuggingface} {...props} />;
export const RagIcon = (props) => <MagnifyingGlass size={props.size || 18} className={props.className || ""} />;
export const VectorSearchIcon = (props) => <Graph size={props.size || 18} className={props.className || ""} />;
export const RerankingIcon = (props) => <Sliders size={props.size || 18} className={props.className || ""} />;
export const SentenceTransformersIcon = (props) => <Brain size={props.size || 18} className={props.className || ""} />;
export const AgenticAiIcon = (props) => <Robot size={props.size || 18} className={props.className || ""} />;
export const McpIcon = (props) => <SimpleIcon icon={siModelcontextprotocol} {...props} />;
export const AiAutomationIcon = (props) => <Lightning size={props.size || 18} className={props.className || ""} />;
export const LangChainIcon = (props) => <SimpleIcon icon={siLangchain} {...props} />;
export const N8nIcon = (props) => <SimpleIcon icon={siN8n} {...props} />;

// 3. Machine Learning & Vision
export const PyTorchIcon = (props) => <SimpleIcon icon={siPytorch} {...props} />;
export const ScikitLearnIcon = (props) => <SimpleIcon icon={siScikitlearn} {...props} />;
export const OpenCvIcon = (props) => <SimpleIcon icon={siOpencv} {...props} />;
export const ShapIcon = (props) => <ChartBar size={props.size || 18} className={props.className || ""} />;
export const OcrIcon = (props) => <FileText size={props.size || 18} className={props.className || ""} />;

// 4. Backend & Web
export const FastApiIcon = (props) => <SimpleIcon icon={siFastapi} {...props} />;
export const NextjsIcon = (props) => <SimpleIcon icon={siNextdotjs} {...props} />;
export const ReactIcon = (props) => <SimpleIcon icon={siReact} {...props} />;
export const PlatformIoIcon = (props) => <SimpleIcon icon={siPlatformio} {...props} />;
export const RedisIcon = (props) => <SimpleIcon icon={siRedis} {...props} />;
export const SqlAlchemyIcon = (props) => <SimpleIcon icon={siSqlalchemy} {...props} />;
export const SqliteIcon = (props) => <SimpleIcon icon={siSqlite} {...props} />;
export const JwtRbacIcon = (props) => <SimpleIcon icon={siJsonwebtokens} {...props} />;
export const RestApiIcon = (props) => <Globe size={props.size || 18} className={props.className || ""} />;
export const WebSocketsIcon = (props) => <Broadcast size={props.size || 18} className={props.className || ""} />;

// 5. Data Engineering & Tools
export const PandasIcon = (props) => <SimpleIcon icon={siPandas} {...props} />;
export const NumpyIcon = (props) => <SimpleIcon icon={siNumpy} {...props} />;
export const PlotlyDashIcon = (props) => <SimpleIcon icon={siPlotly} {...props} />;
export const DockerIcon = (props) => <SimpleIcon icon={siDocker} {...props} />;
export const GitIcon = (props) => <SimpleIcon icon={siGit} {...props} />;
export const GitHubActionsIcon = (props) => <SimpleIcon icon={siGithubactions} {...props} />;
export const PyTestIcon = (props) => <SimpleIcon icon={siPytest} {...props} />;
export const LinuxIcon = (props) => <SimpleIcon icon={siLinux} {...props} />;
export const EtlIcon = (props) => <ArrowsMerge size={props.size || 18} className={props.className || ""} />;

// 6. External Ecosystem / Achievements
export const CodeforcesIcon = (props) => <SimpleIcon icon={siCodeforces} {...props} />;
export const LeetCodeIcon = (props) => <SimpleIcon icon={siLeetcode} {...props} />;
export const TensorFlowIcon = (props) => <SimpleIcon icon={siTensorflow} {...props} />;

// 7. Category Discipline Icons (Phosphor Icons)
export const LanguagesCategoryIcon = (props) => <Code size={props.size || 18} className={props.className || ""} />;
export const GenAiCategoryIcon = (props) => <Brain size={props.size || 18} className={props.className || ""} />;
export const MlCategoryIcon = (props) => <Cpu size={props.size || 18} className={props.className || ""} />;
export const BackendCategoryIcon = (props) => <HardDrives size={props.size || 18} className={props.className || ""} />;
export const DataCategoryIcon = (props) => <Database size={props.size || 18} className={props.className || ""} />;

// 8. Dynamic Tech Icon Component & Tag
export function TechIcon({ name, size = 14, className = "" }) {
  if (!name) return null;
  const key = String(name).trim().toLowerCase();
  switch (key) {
    case 'python':
    case 'python 3.10':
    case 'python 3.11':
      return <PythonIcon size={size} className={className} />;
    case 'llama.cpp':
    case 'llamagrammar':
    case 'nemotron':
    case 'nemotron 550b':
      return <Brain size={size} className={className} />;
    case 'uv':
    case 'uvicorn':
      return <Sliders size={size} className={className} />;
    case 'c':
      return <CIcon size={size} className={className} />;
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
    case 'tesseract ocr':
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
    case 'esp32':
    case 'microcontrollers':
      return <Cpu size={size} className={className} />;
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
    case 'faiss + bm25':
    case 'vector search':
    case 'vector search (faiss, bm25)':
      return <VectorSearchIcon size={size} className={className} />;
    case 'quantization':
    case 'int8 quantization':
      return <Cpu size={size} className={className} />;
    case 'cross-encoder reranking':
      return <RerankingIcon size={size} className={className} />;
    case 'sentence-transformers':
    case 'sentence transformers':
      return <SentenceTransformersIcon size={size} className={className} />;
    case 'etl pipelines':
      return <EtlIcon size={size} className={className} />;
    case 'agentic ai':
    case 'autonomous agents':
    case 'ai agents':
      return <AgenticAiIcon size={size} className={className} />;
    case 'mcp':
    case 'modelcontextprotocol':
    case 'model context protocol':
      return <McpIcon size={size} className={className} />;
    case 'ai automation':
    case 'automation':
      return <AiAutomationIcon size={size} className={className} />;
    case 'langchain':
      return <LangChainIcon size={size} className={className} />;
    case 'n8n':
      return <N8nIcon size={size} className={className} />;
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
