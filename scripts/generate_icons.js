const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('portfolio/src/components/SkillIcons.jsx', 'utf8');
const match = content.match(/const SVG_PATHS = ({[\s\S]*?^};)/m);
if (!match) throw new Error('Could not find SVG_PATHS');

const rawObj = match[1].replace(/;$/, '');
const SVG_PATHS = Function('return (' + rawObj + ')')();

const footerContent = fs.readFileSync('portfolio/src/components/Footer.jsx', 'utf8');
const kaggleMatch = footerContent.match(/<path d="([^"]+)"\/>/);
if (kaggleMatch) {
  SVG_PATHS['kaggle'] = kaggleMatch[1];
}

const outDir = path.resolve('assets/icons');
fs.mkdirSync(outDir, { recursive: true });

let count = 0;
for (const [name, d] of Object.entries(SVG_PATHS)) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <rect width="40" height="40" rx="8" fill="#0D1117" stroke="#262C36" stroke-width="1.2"/>
  <g transform="translate(8, 8)" fill="#E6EDF3">
    <path d="${d}"/>
  </g>
</svg>
`;
  fs.writeFileSync(path.join(outDir, `${name}.svg`), svg, 'utf8');
  count++;
}

console.log(`Successfully generated ${count} icons in ${outDir}`);

