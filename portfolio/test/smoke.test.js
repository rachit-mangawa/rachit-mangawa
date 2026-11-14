import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { register } from 'node:module';
import { ROUTES, ROUTE_MAP, ROUTE_LOADERS } from '../src/routes.js';
import { coordinateResourceLoading } from '../src/utils/preloadAssets.js';

register('./jsx-loader.mjs', import.meta.url);

test('data.json defines valid structure, links, projects and experience', () => {
  const dataRaw = readFileSync(resolve('src/data.json'), 'utf-8');
  const data = JSON.parse(dataRaw);

  assert.ok(data.personal.email.includes('@'), 'email must be valid');
  assert.ok(data.personal.github.startsWith('https://'), 'github must be https url');
  assert.ok(data.personal.linkedin.startsWith('https://'), 'linkedin must be https url');

  assert.ok(Array.isArray(data.skills), 'skills must be an array');
  assert.ok(data.skills.length >= 4, 'skills must have multiple categories');

  assert.ok(Array.isArray(data.projects), 'projects must be an array');
  assert.ok(data.projects.length >= 4, 'projects must contain all key systems');
  for (const proj of data.projects) {
    assert.ok(proj.title, 'project must have title');
    assert.ok(proj.repo?.startsWith('https://'), `project ${proj.id} repo link must be https`);
    assert.ok(Array.isArray(proj.metrics), `project ${proj.id} must have metrics`);
  }

  assert.ok(Array.isArray(data.experience), 'experience must be an array');
  assert.ok(data.experience[0].company, 'experience must have company');
  assert.ok(data.experience[0].projects.length >= 2, 'experience must list major projects');
});

test('routes configuration defines valid unique routes and loaders', () => {
  assert.ok(ROUTES.length >= 4, 'must define at least 4 main routes');

  const paths = new Set();
  for (const route of ROUTES) {
    assert.ok(!paths.has(route.path), `duplicate route path: ${route.path}`);
    paths.add(route.path);

    assert.ok(route.title, `route ${route.path} must have a title`);
    assert.ok(route.description, `route ${route.path} must have a meta description`);
    assert.equal(typeof route.loader, 'function', `route ${route.path} loader must be a function`);
  }

  assert.ok(ROUTE_MAP['/'], 'root route must exist in ROUTE_MAP');
  assert.ok(ROUTE_LOADERS['/projects'], 'projects loader must exist in ROUTE_LOADERS');
});

test('Home page sections contain all valid anchor targets without duplicates', () => {
  const homeFile = readFileSync(resolve('src/pages/Home.jsx'), 'utf-8');
  const heroFile = readFileSync(resolve('src/components/Hero.jsx'), 'utf-8');
  const contactFile = readFileSync(resolve('src/components/ContactSection.jsx'), 'utf-8');
  const combinedHome = homeFile + '\n' + heroFile + '\n' + contactFile;
  const sectionIds = ['top', 'featured', 'experience', 'open-source', 'skills', 'achievements', 'contact'];

  for (const id of sectionIds) {
    assert.ok(combinedHome.includes(`id="${id}"`), `Home must contain anchor #${id}`);
  }

  const skillsOccurrences = (combinedHome.match(/id="skills"/g) || []).length;
  assert.equal(skillsOccurrences, 1, 'Home must have exactly one element with id="skills"');
});

test('Home and Hero assemble alternating sticky scrub stages, artworks, and vector spine', () => {
  const homeFile = readFileSync(resolve('src/pages/Home.jsx'), 'utf-8');
  const heroFile = readFileSync(resolve('src/components/Hero.jsx'), 'utf-8');

  // HeroArtwork in Hero
  assert.ok(heroFile.includes('HeroArtwork'), 'Hero.jsx must import and render HeroArtwork');

  // StickyStage and VectorSpine in Home
  assert.ok(homeFile.includes('StickyStage'), 'Home.jsx must import and render StickyStage');
  assert.ok(homeFile.includes('VectorSpine'), 'Home.jsx must import and render VectorSpine');

  // All 4 stage artworks integrated
  assert.ok(homeFile.includes('AstCompilerArt'), 'Home.jsx must integrate AstCompilerArt');
  assert.ok(homeFile.includes('IngestionGraphArt'), 'Home.jsx must integrate IngestionGraphArt');
  assert.ok(homeFile.includes('AutodiffGraphArt'), 'Home.jsx must integrate AutodiffGraphArt');
  assert.ok(homeFile.includes('AlgorithmicLatticeArt'), 'Home.jsx must integrate AlgorithmicLatticeArt');

  // KeywordAnnotation variants
  assert.ok(homeFile.includes('KeywordAnnotation'), 'Home.jsx must integrate KeywordAnnotation');
  assert.ok(homeFile.includes('type="bracket"'), 'Home.jsx must use bracket KeywordAnnotation');
  assert.ok(homeFile.includes('type="loop"'), 'Home.jsx must use loop KeywordAnnotation');
  assert.ok(homeFile.includes('type="underline"'), 'Home.jsx must use underline KeywordAnnotation');

  // VectorSpine variants
  assert.ok(homeFile.includes('variant="top-to-right"'), 'Home.jsx must use top-to-right spine');
  assert.ok(homeFile.includes('variant="right-to-left"'), 'Home.jsx must use right-to-left spine');
  assert.ok(homeFile.includes('variant="left-to-right"'), 'Home.jsx must use left-to-right spine');
  assert.ok(homeFile.includes('variant="straight"'), 'Home.jsx must use straight spine');
});

test('preload pipeline exports coordinateResourceLoading and handles lifecycle', () => {
  assert.equal(typeof coordinateResourceLoading, 'function', 'coordinateResourceLoading must be a function');
  let progressReported = 0;
  const cancel = coordinateResourceLoading('/', (pct) => {
    progressReported = pct;
  });
  assert.equal(typeof cancel, 'function', 'coordinateResourceLoading must return a cancel cleanup function');
  assert.ok(progressReported >= 0, 'progress must be non-negative');
  cancel();
});

test('ScrollDrawCanvas module exports a valid React component and handles lifecycle', async () => {
  const mod = await import('../src/components/art/ScrollDrawCanvas.jsx');
  assert.strictEqual(typeof mod.default, 'function');
  assert.strictEqual(typeof mod.ScrollDrawCanvas, 'function');

  // Verify component creates React element with expected props
  const React = (await import('react')).default;
  const element = React.createElement(
    mod.default,
    {
      className: 'vector-test-canvas',
      as: 'div',
    },
    null
  );
  assert.strictEqual(element.type, mod.default);
  assert.strictEqual(element.props.className, 'vector-test-canvas');
});

test('StickyStage and VectorSpine export valid layout and spine components', async () => {
  const stageMod = await import('../src/components/StickyStage.jsx');
  const spineMod = await import('../src/components/art/VectorSpine.jsx');
  assert.strictEqual(typeof stageMod.default, 'function');
  assert.strictEqual(typeof stageMod.StickyStage, 'function');
  assert.strictEqual(typeof spineMod.default, 'function');
  assert.strictEqual(typeof spineMod.VectorSpine, 'function');

  const React = (await import('react')).default;

  // Test StickyStage align="right"
  const stageRight = stageMod.default({
    id: 'test-stage-right',
    align: 'right',
    artwork: React.createElement('div', null, 'art-right'),
    children: React.createElement('div', null, 'content-right'),
  });
  assert.strictEqual(stageRight.type, 'section');
  assert.strictEqual(stageRight.props.id, 'test-stage-right');
  const innerGridRight = stageRight.props.children.props.children;
  assert.strictEqual(innerGridRight.props.children[0].props.className.includes('lg:col-span-7'), true);
  assert.strictEqual(innerGridRight.props.children[1].props.className.includes('lg:col-span-5 lg:sticky lg:top-24'), true);

  // Test StickyStage align="left"
  const stageLeft = stageMod.default({
    id: 'test-stage-left',
    align: 'left',
    artwork: React.createElement('div', null, 'art-left'),
    children: React.createElement('div', null, 'content-left'),
  });
  assert.strictEqual(stageLeft.type, 'section');
  const innerGridLeft = stageLeft.props.children.props.children;
  assert.strictEqual(innerGridLeft.props.children[0].props.className.includes('lg:order-2'), true);
  assert.strictEqual(innerGridLeft.props.children[1].props.className.includes('lg:order-1'), true);

  // Test VectorSpine variants
  const variants = ['top-to-right', 'right-to-left', 'left-to-right', 'straight'];
  for (const variant of variants) {
    const spine = spineMod.default({ variant });
    assert.ok(spine, `variant ${variant} must render`);
    assert.strictEqual(typeof spine.type, 'function');
    const svgChild = spine.props.children;
    assert.strictEqual(svgChild.type, 'svg');
    assert.ok(Array.isArray(svgChild.props.children), 'svg must contain vector elements');
    assert.strictEqual(svgChild.props.children.length >= 4, true);
  }
});

test('Hero, AST Compiler, and Ingestion Graph artworks export valid SVG components', async () => {
  const heroArt = await import('../src/components/art/HeroArtwork.jsx');
  const astArt = await import('../src/components/art/AstCompilerArt.jsx');
  const ingArt = await import('../src/components/art/IngestionGraphArt.jsx');
  assert.strictEqual(typeof heroArt.default, 'function');
  assert.strictEqual(typeof astArt.default, 'function');
  assert.strictEqual(typeof ingArt.default, 'function');
  assert.strictEqual(typeof heroArt.HeroArtwork, 'function');
  assert.strictEqual(typeof astArt.AstCompilerArt, 'function');
  assert.strictEqual(typeof ingArt.IngestionGraphArt, 'function');

  for (const mod of [heroArt, astArt, ingArt]) {
    const element = mod.default({ className: 'test-art' });
    assert.ok(element);
    assert.strictEqual(typeof element.type, 'function');
    assert.strictEqual(element.props.className.includes('test-art'), true);
    const svg = element.props.children;
    assert.strictEqual(svg.type, 'svg');
    assert.ok(Array.isArray(svg.props.children) || svg.props.children, 'must contain vector children');
  }
});

test('Autodiff, Algorithmic Lattice, and KeywordAnnotation export valid components', async () => {
  const autoArt = await import('../src/components/art/AutodiffGraphArt.jsx');
  const latArt = await import('../src/components/art/AlgorithmicLatticeArt.jsx');
  const annot = await import('../src/components/art/KeywordAnnotation.jsx');
  assert.strictEqual(typeof autoArt.default, 'function');
  assert.strictEqual(typeof latArt.default, 'function');
  assert.strictEqual(typeof annot.default, 'function');
  assert.strictEqual(typeof autoArt.AutodiffGraphArt, 'function');
  assert.strictEqual(typeof latArt.AlgorithmicLatticeArt, 'function');
  assert.strictEqual(typeof annot.KeywordAnnotation, 'function');

  // Test AutodiffGraphArt
  const autoEl = autoArt.default({ className: 'custom-autodiff' });
  assert.ok(autoEl);
  assert.strictEqual(autoEl.props.className.includes('custom-autodiff'), true);
  const autoSvg = autoEl.props.children;
  assert.strictEqual(autoSvg.type, 'svg');
  assert.ok(Array.isArray(autoSvg.props.children), 'AutodiffGraphArt svg must have vector children');

  // Test AlgorithmicLatticeArt
  const latEl = latArt.default({ className: 'custom-lattice' });
  assert.ok(latEl);
  assert.strictEqual(latEl.props.className.includes('custom-lattice'), true);
  const latSvg = latEl.props.children;
  assert.strictEqual(latSvg.type, 'svg');
  assert.ok(Array.isArray(latSvg.props.children), 'AlgorithmicLatticeArt svg must have vector children');

  // Test KeywordAnnotation for all 3 variants: bracket, underline, loop
  for (const type of ['bracket', 'underline', 'loop']) {
    const annotEl = annot.default({
      type,
      className: `annot-${type}`,
      children: `Annotated text ${type}`,
    });
    assert.ok(annotEl);
    assert.strictEqual(typeof annotEl.type, 'function');
    assert.strictEqual(annotEl.props.className.includes(`annot-${type}`), true);
    const childrenArray = Array.isArray(annotEl.props.children)
      ? annotEl.props.children
      : [annotEl.props.children];
    const svgOverlay = childrenArray.find((c) => c && c.type === 'svg');
    assert.ok(svgOverlay, `KeywordAnnotation type ${type} must contain an SVG overlay`);
  }
});

test('Projects and Experience sub-pages integrate hero vector schematics', async () => {
  const fs = await import('node:fs');
  const path = await import('node:path');

  const projectsFilePath = path.resolve('src/pages/Projects.jsx');
  const experienceFilePath = path.resolve('src/pages/Experience.jsx');

  const projectsFile = fs.readFileSync(projectsFilePath, 'utf8');
  const experienceFile = fs.readFileSync(experienceFilePath, 'utf8');

  // Verify AstCompilerArt in Projects.jsx
  assert.ok(projectsFile.includes('AstCompilerArt'), 'Projects.jsx must import and render AstCompilerArt');
  assert.ok(projectsFile.includes('grid grid-cols-1 lg:grid-cols-12'), 'Projects.jsx header must have responsive 12-col split grid');
  assert.ok(projectsFile.includes('lg:col-span-7'), 'Projects.jsx header text must span 7 cols');
  assert.ok(projectsFile.includes('lg:col-span-5'), 'Projects.jsx AstCompilerArt container must span 5 cols');
  assert.ok(projectsFile.includes('<AstCompilerArt className="w-full max-w-md lg:max-w-none" />'), 'Projects.jsx must render AstCompilerArt with responsive width');

  // Verify IngestionGraphArt in Experience.jsx
  assert.ok(experienceFile.includes('IngestionGraphArt'), 'Experience.jsx must import and render IngestionGraphArt');
  assert.ok(experienceFile.includes('grid grid-cols-1 lg:grid-cols-12'), 'Experience.jsx header must have responsive 12-col split grid');
  assert.ok(experienceFile.includes('lg:col-span-7'), 'Experience.jsx header text must span 7 cols');
  assert.ok(experienceFile.includes('lg:col-span-5'), 'Experience.jsx IngestionGraphArt container must span 5 cols');
  assert.ok(experienceFile.includes('<IngestionGraphArt className="w-full max-w-md lg:max-w-none" />'), 'Experience.jsx must render IngestionGraphArt with responsive width');

  // Verify instantiation of hero vector schematic components
  const React = (await import('react')).default;
  const astArtMod = await import('../src/components/art/AstCompilerArt.jsx');
  const ingArtMod = await import('../src/components/art/IngestionGraphArt.jsx');

  const astElement = React.createElement(astArtMod.default, {
    className: 'w-full max-w-md lg:max-w-none',
  });
  assert.ok(astElement, 'AstCompilerArt element must instantiate');
  assert.strictEqual(typeof astElement.type, 'function');
  assert.strictEqual(astElement.props.className, 'w-full max-w-md lg:max-w-none');

  const ingElement = React.createElement(ingArtMod.default, {
    className: 'w-full max-w-md lg:max-w-none',
  });
  assert.ok(ingElement, 'IngestionGraphArt element must instantiate');
  assert.strictEqual(typeof ingElement.type, 'function');
  assert.strictEqual(ingElement.props.className, 'w-full max-w-md lg:max-w-none');
});




