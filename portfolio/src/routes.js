export const ROUTES = [
  {
    path: '/',
    label: 'Home',
    index: '01',
    sub: 'Overview & systems introduction',
    title: 'Rachit Mangawa',
    description: 'Software and machine learning engineer. Embedded systems, air-gapped document intelligence, and upstream TensorFlow contributions.',
    keywords: ['hero', 'overview', 'landing', 'introduction'],
    loader: () => Promise.resolve(),
  },
  {
    path: '/projects',
    label: 'Projects',
    index: '02',
    sub: 'HeartFlow OS, Vera AI & Gateway',
    title: 'Architecture & Code | Rachit Mangawa',
    description: 'HeartFlow OS C99 compiler, Vera multi-tier AI engine, pluggable container gateway, and TensorFlow Core autodiff fixes.',
    keywords: ['architectures', 'heartflow', 'vera', 'gateway', 'semantic', 'systems', 'c99', 'compiler'],
    loader: () => import('./pages/Projects'),
  },
  {
    path: '/experience',
    label: 'Experience',
    index: '03',
    sub: 'UIDAI Aadhaar Internship',
    title: 'Experience & Impact | Rachit Mangawa',
    description: 'Software developer internship at UIDAI (Aadhaar), building offline OCR search pipelines and telemetry backend services.',
    keywords: ['uidai', 'aadhaar', 'internship', 'work', 'telemetry', 'ocr', 'rag'],
    loader: () => import('./pages/Experience'),
  },
  {
    path: '/skills',
    label: 'Skills',
    index: '04',
    sub: 'Languages & technical stack',
    title: 'Skills & Systems | Rachit Mangawa',
    description: 'Technical stack across Python, C++, embedded systems, model inference, and database pipelines.',
    keywords: ['languages', 'python', 'c++', 'fastapi', 'docker', 'tech stack', 'architecture'],
    loader: () => import('./pages/Skills'),
  },
];

export const ROUTE_MAP = Object.fromEntries(
  ROUTES.map((route) => [route.path, route])
);

export const ROUTE_LOADERS = Object.fromEntries(
  ROUTES.map((route) => [route.path, route.loader])
);
