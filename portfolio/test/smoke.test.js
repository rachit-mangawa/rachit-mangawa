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

test('Home and Hero assemble clean stages and sections', () => {
  const homeFile = readFileSync(resolve('src/pages/Home.jsx'), 'utf-8');
  const heroFile = readFileSync(resolve('src/components/Hero.jsx'), 'utf-8');

  // Hero renders typography and subtitle cleanly
  assert.ok(heroFile.includes('RACHIT'), 'Hero.jsx must render title');
  assert.ok(heroFile.includes('Mangawa'), 'Hero.jsx must render name');

  // StickyStage in Home
  assert.ok(homeFile.includes('StickyStage'), 'Home.jsx must import and render StickyStage');
  assert.ok(homeFile.includes('id="featured"'), 'Home.jsx must contain #featured');
  assert.ok(homeFile.includes('id="experience"'), 'Home.jsx must contain #experience');
  assert.ok(homeFile.includes('id="open-source"'), 'Home.jsx must contain #open-source');
  assert.ok(homeFile.includes('id="achievements"'), 'Home.jsx must contain #achievements');
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

test('StickyStage exports valid responsive layout component', async () => {
  const stageMod = await import('../src/components/StickyStage.jsx');
  assert.strictEqual(typeof stageMod.default, 'function');
  assert.strictEqual(typeof stageMod.StickyStage, 'function');

  const React = (await import('react')).default;

  // Test StickyStage default full-width layout without artwork
  const stageFull = stageMod.default({
    id: 'test-stage-full',
    children: React.createElement('div', null, 'content-full'),
  });
  assert.strictEqual(stageFull.type, 'section');
  assert.strictEqual(stageFull.props.id, 'test-stage-full');
  const innerGridFull = stageFull.props.children.props.children;
  assert.strictEqual(innerGridFull.props.children[0].props.className.includes('lg:col-span-12'), true);

  // Test StickyStage align="right" with artwork
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

  // Test StickyStage align="left" with artwork
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
});

test('Archived SVG animations exist in archive folder and export valid components', async () => {
  const heroArt = await import('../archive/svg-animations/HeroArtwork.jsx');
  const astArt = await import('../archive/svg-animations/AstCompilerArt.jsx');
  const ingArt = await import('../archive/svg-animations/IngestionGraphArt.jsx');
  const autoArt = await import('../archive/svg-animations/AutodiffGraphArt.jsx');
  const latArt = await import('../archive/svg-animations/AlgorithmicLatticeArt.jsx');
  const spineMod = await import('../archive/svg-animations/VectorSpine.jsx');
  const annotMod = await import('../archive/svg-animations/KeywordAnnotation.jsx');
  const canvasMod = await import('../archive/svg-animations/ScrollDrawCanvas.jsx');

  assert.strictEqual(typeof heroArt.default, 'function');
  assert.strictEqual(typeof astArt.default, 'function');
  assert.strictEqual(typeof ingArt.default, 'function');
  assert.strictEqual(typeof autoArt.default, 'function');
  assert.strictEqual(typeof latArt.default, 'function');
  assert.strictEqual(typeof spineMod.default, 'function');
  assert.strictEqual(typeof annotMod.default, 'function');
  assert.strictEqual(typeof canvasMod.default, 'function');

  // Verify HeroArtwork renders SVG
  const heroEl = heroArt.default({ className: 'test-hero' });
  assert.ok(heroEl);
  assert.strictEqual(heroEl.props.children.type, 'svg');

  // Verify VectorSpine variants
  const variants = ['top-to-right', 'right-to-left', 'left-to-right', 'straight'];
  for (const variant of variants) {
    const spine = spineMod.default({ variant });
    assert.ok(spine, `variant ${variant} must render`);
    const svgChild = spine.props.children;
    assert.strictEqual(svgChild.type, 'svg');
  }

  // Verify KeywordAnnotation
  const annot = annotMod.default({ type: 'bracket', children: 'Test' });
  assert.ok(annot);
});

test('Projects and Experience sub-pages render clean responsive headers', async () => {
  const fs = await import('node:fs');
  const path = await import('node:path');

  const projectsFilePath = path.resolve('src/pages/Projects.jsx');
  const experienceFilePath = path.resolve('src/pages/Experience.jsx');

  const projectsFile = fs.readFileSync(projectsFilePath, 'utf8');
  const experienceFile = fs.readFileSync(experienceFilePath, 'utf8');

  // Verify clean headers without embedded schematics in live pages
  assert.ok(projectsFile.includes('Featured'), 'Projects.jsx must render title');
  assert.ok(projectsFile.includes('Systems Directory'), 'Projects.jsx must render directory');
  assert.ok(experienceFile.includes('Experience'), 'Experience.jsx must render title');
  assert.ok(experienceFile.includes('Professional Experience'), 'Experience.jsx must render experience section');
});




