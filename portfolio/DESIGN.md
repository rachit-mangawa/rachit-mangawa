# Portfolio Design System & Guidelines

This document serves as the source of truth for the visual, structural, and editorial principles governing this portfolio. Any new pages, components, or updates should strictly adhere to these rules to maintain the aesthetic integrity of the site.

## 1. Visual Thesis: Refined Neo-Industrial

The portfolio avoids generic "startup landing page" aesthetics in favor of a **Refined Neo-Industrial** or **Terminal Chic** vibe. It is built for a backend / AI engineer, meaning the design should look highly technical, data-driven, and serious—yet undeniably premium.

### Core Principles
- **Structure Over Decoration:** Do not use unnecessary backgrounds, gradients, or floating shapes. The layout itself (margins, grid lines, and spacing) is the decoration.
- **Deep Contrast:** The site lives in a true dark mode. Depth is achieved not through drop-shadows, but through opacity stepping on text and subtle 1px border lines.
- **Mathematical Alignment:** Elements must align perfectly. (e.g., the center of a timeline logo aligns exactly with the left edge of the section header above it).

## 2. Color Palette & Texture

We rely on a monochromatic scale to establish hierarchy, rather than multiple colors.

- **Background:** True off-black (`bg-[#050505]`). It creates a void-like canvas.
- **Primary Text:** Off-white (`text-[#FAFAFA]` or `text-white`). Used only for headings and highly important data.
- **Secondary Text (Body):** Muted white (`text-white/60` or `text-white/70`). This is the workhorse color for reading paragraphs without fatiguing the eyes.
- **Tertiary Text (Labels/Metadata):** Dim white (`text-white/40`). Used for small uppercase tags, dates, and subtle borders (`border-white/10`).
- **Texture:** The background includes a fixed SVG noise overlay (`.noise-overlay` at 3% opacity) and a very subtle radial glow at the top to prevent the black from feeling flat.

## 3. Typography & Hierarchy

The global typeface is **Plus Jakarta Sans**, offering a clean, geometric, and modern look. Hierarchy is established through extreme contrast in size, weight, and letter-spacing.

- **Headings (h1, h2):** Massive, medium weight, tightly tracked (`tracking-tight`). 
- **Body Paragraphs:** Large, lightweight, and breathable (`text-xl md:text-2xl font-light leading-relaxed`).
- **Labels & Overheads:** Tiny, bold, and widely spaced (`text-xs uppercase tracking-[0.2em] font-bold`). 

## 4. Layout Patterns

### The Timeline (Experience)
- **No Bullet Points:** Standard corporate bullet points are strictly forbidden. Experience is condensed into 1-2 powerful, punchy sentences.
- **The Track:** A strict 1px vertical line (`border-l border-white/10`) runs down the left side.
- **The Node:** Company logos are placed inside absolute-positioned, perfectly squared/rounded boxes that sit exactly centered on the timeline track.
- **Data Chips:** Technologies are not written in a comma-separated list. They are placed in uniform chips (`bg-white/5 border-white/10 rounded-full px-4 py-2`).

### The Hero
- Clean vertical stacking. 
- Left-aligned emphasis.
- The "Core Stack" is displayed as a crisp, dot-separated list (`Python · TypeScript · FastAPI`) rather than a bulky paragraph.

## 5. Motion & Micro-Interactions

Motion must feel deliberate, snappy, and expensive. It should never feel sluggish or "bouncy."

- **Scroll Reveal:** New sections fade up as they enter the viewport using custom CSS animations (`.reveal`, `.animate-fade-up`). Elements inside a block should stagger their entrance (`reveal-delay-1`, `reveal-delay-2`) to create a cascading effect.
- **Hover States:** Buttons and links use subtle transform scaling (`hover:scale-[1.02] active:scale-[0.98]`) and directional arrow nudges (the arrow in the CTA slides up and to the right on hover).

## 6. Editorial Guidelines (Anti-Slop)

The writing must match the design: crisp, technical, and brutally efficient.

- **Ban Generic Fluff:** Remove phrases like "passionate developer," "innovative solutions," or "team player."
- **Focus on the "How":** Don't just say what was built; say the architectural decisions behind it (e.g., "Secured concurrent SQLite I/O using WAL mode" instead of "Used SQLite database").
- **Dense Data:** Optimize for the reader's time. A 2-line summary packed with metrics and tech names is infinitely better than 5 lines of vague responsibilities.
