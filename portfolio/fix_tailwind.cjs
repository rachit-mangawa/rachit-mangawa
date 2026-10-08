const fs = require('fs');

const replacements = {
  'ml-[2px]': 'ml-0.5',
  'rounded-[2rem]': 'rounded-4xl',
  'rounded-[calc(2rem-0.375rem)]': 'rounded-[1.625rem]',
  'break-words': 'wrap-break-word',
  'group-hover:-translate-y-[1px]': 'group-hover:-translate-y-px',
  'min-h-[400px]': 'min-h-100',
  '-top-[20%]': 'top-[-20%]',
  '-left-[10%]': 'left-[-10%]',
  '-bottom-[20%]': 'bottom-[-20%]',
  '-right-[10%]': 'right-[-10%]',
  'border-white/[0.08]': 'border-white/8',
  'bg-white/[0.02]': 'bg-white/2',
  'border-white/[0.1]': 'border-white/10',
  'h-[48px]': 'h-12',
  'flex-shrink-0': 'shrink-0',
  'tracking-[0.1em]': 'tracking-widest',
  'hover:bg-white/[0.05]': 'hover:bg-white/5',
  'hover:bg-white/[0.02]': 'hover:bg-white/2',
  'pb-[1px]': 'pb-px'
};

const files = [
  'fix.cjs',
  'src/components/UI.jsx',
  'src/pages/Experience.jsx',
  'src/pages/Home.jsx',
  'src/pages/Projects.jsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    for (const [search, replace] of Object.entries(replacements)) {
      content = content.split(search).join(replace);
    }
    
    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  }
});
