import React from 'react';
import ScrollDrawCanvas from './ScrollDrawCanvas.jsx';

/**
 * AlgorithmicLatticeArt
 * Bespoke schematic representing Competitive Programming & Algorithmic Rigor:
 * - High-dimensional state transition search lattice & memoization DAG
 * - Global Elo contest rating Gaussian distribution & Top 0.83% cutoff
 * - Platform metrics ledger: LeetCode Knight (1987) & Codeforces Specialist (1422)
 *
 * @param {Object} props
 * @param {string} [props.className='']
 * @param {Object} [props.triggerOpts={}]
 */
export const AlgorithmicLatticeArt = ({
  className = '',
  triggerOpts = {},
  ...rest
}) => {
  const containerClasses = [
    'relative w-full max-w-4xl mx-auto flex items-center justify-center select-none pointer-events-none overflow-visible',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const svgChildren = [
    // 1. Outer Corner Framing Reticles
    React.createElement('path', {
      key: 'reticle-tl',
      d: 'M 30,55 L 30,30 L 55,30',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.4',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'reticle-tr',
      d: 'M 705,30 L 730,30 L 730,55',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.4',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'reticle-bl',
      d: 'M 30,505 L 30,530 L 55,530',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.4',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'reticle-br',
      d: 'M 705,530 L 730,530 L 730,505',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.4',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Header Title and Metadata
    React.createElement(
      'text',
      {
        key: 'hdr-title',
        x: '45',
        y: '42',
        fill: 'white',
        fillOpacity: '0.6',
        fontFamily: 'monospace',
        fontSize: '11',
        fontWeight: 'bold',
        letterSpacing: '0.14em',
      },
      'COMPETITIVE ALGORITHM LATTICE // ELO RATING MATRIX'
    ),
    React.createElement(
      'text',
      {
        key: 'hdr-rank',
        x: '715',
        y: '42',
        textAnchor: 'end',
        fill: 'white',
        fillOpacity: '0.45',
        fontFamily: 'monospace',
        fontSize: '9',
        letterSpacing: '0.12em',
      },
      'LEETCODE KNIGHT 1987 // TOP 0.83%'
    ),
    React.createElement(
      'text',
      {
        key: 'hdr-sub',
        x: '45',
        y: '56',
        fill: 'white',
        fillOpacity: '0.35',
        fontFamily: 'monospace',
        fontSize: '8',
        letterSpacing: '0.08em',
      },
      'CODEFORCES SPECIALIST 1422 // BIWEEKLY 190 (GLOBAL RANK 316 / 38,291)'
    ),

    // Header Divider
    React.createElement('line', {
      key: 'hdr-divider',
      x1: '30',
      y1: '64',
      x2: '730',
      y2: '64',
      stroke: 'white',
      strokeOpacity: '0.2',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),

    // ==========================================
    // 2. LEFT PANE: SEARCH LATTICE & STATE-SPACE TRAVERSAL
    // ==========================================
    React.createElement('rect', {
      key: 'lattice-box',
      x: '30',
      y: '75',
      width: '400',
      height: '255',
      rx: '2',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.2',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'lattice-title',
        x: '42',
        y: '92',
        fill: 'white',
        fillOpacity: '0.55',
        fontFamily: 'monospace',
        fontSize: '9',
        fontWeight: 'bold',
        letterSpacing: '0.1em',
      },
      'STATE TRANSITION LATTICE & CONVEX OPTIMAL TRAJECTORY'
    ),
    React.createElement(
      'text',
      {
        key: 'lattice-sub',
        x: '42',
        y: '104',
        fill: 'white',
        fillOpacity: '0.35',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      'SEARCH SPACE: O(V + E log V)  |  MEMO: 2D BITMASK MATRIX'
    ),

    // Grid Coordinates / Lattice Background Network
    ...[125, 160, 195, 230, 265].map((y, rowIdx) =>
      React.createElement('line', {
        key: `lat-h-${rowIdx}`,
        x1: '55',
        y1: y,
        x2: '410',
        y2: y,
        stroke: 'white',
        strokeOpacity: '0.08',
        strokeDasharray: '2 3',
        strokeWidth: '0.75',
        vectorEffect: 'non-scaling-stroke',
      })
    ),
    ...[55, 115, 175, 235, 295, 355, 410].map((x, colIdx) =>
      React.createElement('line', {
        key: `lat-v-${colIdx}`,
        x1: x,
        y1: '125',
        x2: x,
        y2: '265',
        stroke: 'white',
        strokeOpacity: '0.08',
        strokeDasharray: '2 3',
        strokeWidth: '0.75',
        vectorEffect: 'non-scaling-stroke',
      })
    ),

    // Lattice Grid Intersections (Subtle Vertex Circles)
    ...[
      [55, 125], [115, 125], [175, 125], [235, 125], [295, 125], [355, 125],
      [55, 160], [115, 160], [175, 160], [235, 160], [295, 160], [355, 160],
      [55, 195], [115, 195], [175, 195], [235, 195], [295, 195], [355, 195],
      [55, 230], [115, 230], [175, 230], [235, 230], [295, 230], [355, 230],
      [55, 265], [115, 265], [175, 265], [235, 265], [295, 265], [355, 265],
    ].map(([x, y], idx) =>
      React.createElement('circle', {
        key: `lat-pt-${idx}`,
        cx: x,
        cy: y,
        r: '1.5',
        fill: 'none',
        stroke: 'white',
        strokeOpacity: '0.2',
        strokeWidth: '1',
        vectorEffect: 'non-scaling-stroke',
      })
    ),

    // Secondary State Conduits (Alternative paths being pruned)
    React.createElement('path', {
      key: 'pruned-branch-1',
      d: 'M 55,125 L 115,160 L 175,160 L 235,125',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.2',
      strokeDasharray: '3 3',
      strokeWidth: '0.75',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'pruned-branch-2',
      d: 'M 175,160 L 235,230 L 295,265',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.2',
      strokeDasharray: '3 3',
      strokeWidth: '0.75',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'pruned-branch-3',
      d: 'M 235,160 L 295,195 L 355,195',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.2',
      strokeDasharray: '3 3',
      strokeWidth: '0.75',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'prune-lbl',
        x: '185',
        y: '148',
        fill: 'white',
        fillOpacity: '0.3',
        fontFamily: 'monospace',
        fontSize: '6.5',
      },
      '[PRUNED: COST > OPT]'
    ),

    // Highlighted Optimal Path Traversal (Continuous vector with diamond vertices)
    React.createElement('path', {
      key: 'optimal-path',
      d: 'M 55,125 L 115,125 L 175,195 L 235,195 L 295,230 L 355,265 L 410,265',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.85',
      strokeWidth: '1.75',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Optimal Path Diamond Vertices
    ...[
      [55, 125, 'S₀ (INIT)', '121'],
      [115, 125, 'S₁ (GREEDY)', '115'],
      [175, 195, 'S₂ (BITMASK)', '209'],
      [235, 195, 'S₃ (SEG_TREE)', '185'],
      [295, 230, 'S₄ (BRANCH)', '244'],
      [355, 265, 'S_OPT (TARGET)', '279'],
    ].map(([x, y, label, textY], idx) =>
      React.createElement(
        React.Fragment,
        { key: `opt-vertex-${idx}` },
        React.createElement('polygon', {
          points: `${x},${y - 4} ${x + 4},${y} ${x},${y + 4} ${x - 4},${y}`,
          fill: 'none',
          stroke: 'white',
          strokeOpacity: '0.9',
          strokeWidth: '1.25',
          vectorEffect: 'non-scaling-stroke',
        }),
        React.createElement('circle', {
          cx: x,
          cy: y,
          r: '7',
          fill: 'none',
          stroke: 'white',
          strokeOpacity: '0.3',
          strokeDasharray: '2 2',
          strokeWidth: '0.75',
          vectorEffect: 'non-scaling-stroke',
        }),
        React.createElement(
          'text',
          {
            x,
            y: textY,
            textAnchor: 'middle',
            fill: 'white',
            fillOpacity: '0.75',
            fontFamily: 'monospace',
            fontSize: '6.5',
            fontWeight: 'bold',
          },
          label
        )
      )
    ),

    // Target Terminal Crosshair at (410, 265)
    React.createElement('circle', {
      key: 'target-circle-outer',
      cx: '410',
      cy: '265',
      r: '9',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.7',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('circle', {
      key: 'target-circle-inner',
      cx: '410',
      cy: '265',
      r: '3',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.9',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'target-lbl',
        x: '410',
        y: '286',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.85',
        fontFamily: 'monospace',
        fontSize: '7',
        fontWeight: 'bold',
      },
      'ACCEPTED 0ms'
    ),

    // Lattice Footer Stats
    React.createElement('line', {
      key: 'lattice-footer-div',
      x1: '40',
      y1: '304',
      x2: '420',
      y2: '304',
      stroke: 'white',
      strokeOpacity: '0.15',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'lattice-footer-txt',
        x: '42',
        y: '318',
        fill: 'white',
        fillOpacity: '0.5',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      'SEARCH: MINIMAL PATH RECOVERY // ZERO RECURSION OVERFLOW'
    ),
    React.createElement(
      'text',
      {
        key: 'lattice-footer-compl',
        x: '418',
        y: '318',
        textAnchor: 'end',
        fill: 'white',
        fillOpacity: '0.6',
        fontFamily: 'monospace',
        fontSize: '7.5',
        fontWeight: 'bold',
      },
      'SPACE: O(N) IN-PLACE'
    ),

    // ==========================================
    // 3. RIGHT PANE: GLOBAL CONTEST ELO GAUSSIAN DENSITY CURVE
    // ==========================================
    React.createElement('rect', {
      key: 'density-box',
      x: '445',
      y: '75',
      width: '285',
      height: '255',
      rx: '2',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.2',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'density-title',
        x: '457',
        y: '92',
        fill: 'white',
        fillOpacity: '0.55',
        fontFamily: 'monospace',
        fontSize: '9',
        fontWeight: 'bold',
        letterSpacing: '0.1em',
      },
      'GLOBAL CONTEST ELO DENSITY CURVE'
    ),
    React.createElement(
      'text',
      {
        key: 'density-sub',
        x: '457',
        y: '104',
        fill: 'white',
        fillOpacity: '0.35',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      'N = 38,291 PARTICIPANTS  |  GAUSSIAN μ=1380, σ=245'
    ),

    // Density Axis
    React.createElement('line', {
      key: 'density-axis-x',
      x1: '460',
      y1: '270',
      x2: '715',
      y2: '270',
      stroke: 'white',
      strokeOpacity: '0.4',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('line', {
      key: 'density-axis-y',
      x1: '468',
      y1: '115',
      x2: '468',
      y2: '270',
      stroke: 'white',
      strokeOpacity: '0.4',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),

    // X-Axis Rating Ticks & Labels
    ...[
      [475, '1000'],
      [515, '1200'],
      [555, '1400 (μ)'],
      [595, '1600'],
      [635, '1800'],
      [672, '1987'],
      [710, '2200'],
    ].map(([x, label], idx) =>
      React.createElement(
        React.Fragment,
        { key: `tick-x-${idx}` },
        React.createElement('line', {
          x1: x,
          y1: '270',
          x2: x,
          y2: '274',
          stroke: 'white',
          strokeOpacity: '0.4',
          strokeWidth: '1',
          vectorEffect: 'non-scaling-stroke',
        }),
        React.createElement(
          'text',
          {
            x,
            y: '283',
            textAnchor: 'middle',
            fill: 'white',
            fillOpacity: label.includes('1987') ? '0.9' : '0.4',
            fontFamily: 'monospace',
            fontSize: '6.5',
            fontWeight: label.includes('1987') ? 'bold' : 'normal',
          },
          label
        )
      )
    ),

    // Smooth Gaussian Bell Curve
    React.createElement('path', {
      key: 'density-curve',
      d: 'M 468,268 C 490,266 520,240 545,150 C 555,120 565,120 575,150 C 600,210 635,250 672,262 C 690,266 705,268 715,268',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.85',
      strokeWidth: '1.5',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Top 0.83% Cutoff Vertical Threshold Line at X = 672 (Rating 1987)
    React.createElement('line', {
      key: 'cutoff-line',
      x1: '672',
      y1: '115',
      x2: '672',
      y2: '270',
      stroke: 'white',
      strokeOpacity: '0.75',
      strokeDasharray: '3 3',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Hatching under the right tail (Top 0.83% Percentile Region)
    ...[677, 683, 689, 695, 701, 707].map((hx, idx) =>
      React.createElement('line', {
        key: `hatch-${idx}`,
        x1: hx,
        y1: '270',
        x2: hx,
        y2: 263 + idx * 0.8,
        stroke: 'white',
        strokeOpacity: '0.5',
        strokeWidth: '1',
        vectorEffect: 'non-scaling-stroke',
      })
    ),

    // Reticle & Marker at Cutoff Point (672, 262)
    React.createElement('circle', {
      key: 'cutoff-reticle',
      cx: '672',
      cy: '262',
      r: '4',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.9',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('circle', {
      key: 'cutoff-reticle-inner',
      cx: '672',
      cy: '262',
      r: '1.5',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '1',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Callout Bracket & Annotation for Top 0.83%
    React.createElement('path', {
      key: 'callout-tail',
      d: 'M 672,135 L 630,135 L 610,150',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.6',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'callout-rank-1',
        x: '665',
        y: '130',
        textAnchor: 'end',
        fill: 'white',
        fillOpacity: '0.9',
        fontFamily: 'monospace',
        fontSize: '8.5',
        fontWeight: 'bold',
      },
      'TOP 0.83% PERCENTILE'
    ),
    React.createElement(
      'text',
      {
        key: 'callout-rank-2',
        x: '665',
        y: '143',
        textAnchor: 'end',
        fill: 'white',
        fillOpacity: '0.6',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      'GLOBAL RANK 316 / 38,291'
    ),
    React.createElement(
      'text',
      {
        key: 'callout-rank-3',
        x: '665',
        y: '155',
        textAnchor: 'end',
        fill: 'white',
        fillOpacity: '0.45',
        fontFamily: 'monospace',
        fontSize: '6.5',
      },
      'KNIGHT BADGE (Z = +2.48σ)'
    ),

    // Density Footer Stats
    React.createElement('line', {
      key: 'density-footer-div',
      x1: '455',
      y1: '304',
      x2: '720',
      y2: '304',
      stroke: 'white',
      strokeOpacity: '0.15',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'density-footer-txt',
        x: '457',
        y: '318',
        fill: 'white',
        fillOpacity: '0.5',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      'SAMPLE POOL: BIWEEKLY CONTEST 190'
    ),
    React.createElement(
      'text',
      {
        key: 'density-footer-status',
        x: '718',
        y: '318',
        textAnchor: 'end',
        fill: 'white',
        fillOpacity: '0.6',
        fontFamily: 'monospace',
        fontSize: '7.5',
        fontWeight: 'bold',
      },
      'RATING: 1987 ELO'
    ),

    // ==========================================
    // 4. BOTTOM PANE: DUAL PLATFORM PERFORMANCE LEDGER
    // ==========================================

    // Box 1: LeetCode Knight Ledger (Left)
    React.createElement('rect', {
      key: 'lc-box',
      x: '30',
      y: '345',
      width: '345',
      height: '160',
      rx: '2',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.2',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'lc-title',
        x: '42',
        y: '362',
        fill: 'white',
        fillOpacity: '0.6',
        fontFamily: 'monospace',
        fontSize: '8.5',
        fontWeight: 'bold',
        letterSpacing: '0.08em',
      },
      'PLATFORM 01: LEETCODE (@rachit-mangawa)'
    ),
    React.createElement('line', {
      key: 'lc-header-div',
      x1: '40',
      y1: '370',
      x2: '365',
      y2: '370',
      stroke: 'white',
      strokeOpacity: '0.15',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),

    // LeetCode Stats Items
    React.createElement(
      'text',
      {
        key: 'lc-stat-1',
        x: '45',
        y: '388',
        fill: 'white',
        fillOpacity: '0.85',
        fontFamily: 'monospace',
        fontSize: '8',
        fontWeight: 'bold',
      },
      'TIER BADGE: KNIGHT  |  RATING: 1987 ELO'
    ),
    React.createElement(
      'text',
      {
        key: 'lc-stat-2',
        x: '45',
        y: '404',
        fill: 'white',
        fillOpacity: '0.6',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      '• Biweekly Contest 190: 4 / 4 Solved (100% Clear)'
    ),
    React.createElement(
      'text',
      {
        key: 'lc-stat-3',
        x: '45',
        y: '418',
        fill: 'white',
        fillOpacity: '0.6',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      '• Global Standing: Rank 316 of 38,291 Participants'
    ),
    React.createElement(
      'text',
      {
        key: 'lc-stat-4',
        x: '45',
        y: '432',
        fill: 'white',
        fillOpacity: '0.6',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      '• Percentile: Top 0.83% Worldwide Contest Rank'
    ),
    React.createElement(
      'text',
      {
        key: 'lc-stat-5',
        x: '45',
        y: '446',
        fill: 'white',
        fillOpacity: '0.6',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      '• Solve Times: Q1 (1:45), Q2 (5:12), Q3 (14:30), Q4 (28:10)'
    ),
    React.createElement(
      'text',
      {
        key: 'lc-stat-6',
        x: '45',
        y: '460',
        fill: 'white',
        fillOpacity: '0.45',
        fontFamily: 'monospace',
        fontSize: '7',
      },
      '• Penalty Count: 0 WAs  |  First-Pass Clean Solution'
    ),
    React.createElement('line', {
      key: 'lc-footer-div',
      x1: '40',
      y1: '476',
      x2: '365',
      y2: '476',
      stroke: 'white',
      strokeOpacity: '0.15',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'lc-footer-status',
        x: '45',
        y: '492',
        fill: 'white',
        fillOpacity: '0.55',
        fontFamily: 'monospace',
        fontSize: '7',
      },
      'VERIFIED URL: leetcode.com/contest/biweekly-contest-190/'
    ),

    // Box 2: Codeforces Specialist Ledger (Right)
    React.createElement('rect', {
      key: 'cf-box',
      x: '385',
      y: '345',
      width: '345',
      height: '160',
      rx: '2',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.2',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'cf-title',
        x: '397',
        y: '362',
        fill: 'white',
        fillOpacity: '0.6',
        fontFamily: 'monospace',
        fontSize: '8.5',
        fontWeight: 'bold',
        letterSpacing: '0.08em',
      },
      'PLATFORM 02: CODEFORCES (@i_win_again)'
    ),
    React.createElement('line', {
      key: 'cf-header-div',
      x1: '395',
      y1: '370',
      x2: '720',
      y2: '370',
      stroke: 'white',
      strokeOpacity: '0.15',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Codeforces Stats Items
    React.createElement(
      'text',
      {
        key: 'cf-stat-1',
        x: '400',
        y: '388',
        fill: 'white',
        fillOpacity: '0.85',
        fontFamily: 'monospace',
        fontSize: '8',
        fontWeight: 'bold',
      },
      'TIER BADGE: SPECIALIST  |  RATING: 1422 PEAK'
    ),
    React.createElement(
      'text',
      {
        key: 'cf-stat-2',
        x: '400',
        y: '404',
        fill: 'white',
        fillOpacity: '0.6',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      '• Div. 2 / Educational Contests: Regular Participant'
    ),
    React.createElement(
      'text',
      {
        key: 'cf-stat-3',
        x: '400',
        y: '418',
        fill: 'white',
        fillOpacity: '0.6',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      '• Focus: Number Theory, Graph Trees, Disjoint Set Union'
    ),
    React.createElement(
      'text',
      {
        key: 'cf-stat-4',
        x: '400',
        y: '432',
        fill: 'white',
        fillOpacity: '0.6',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      '• Speed Strategy: Sub-12 Min A-B Solution Turnaround'
    ),
    React.createElement(
      'text',
      {
        key: 'cf-stat-5',
        x: '400',
        y: '446',
        fill: 'white',
        fillOpacity: '0.6',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      '• Execution Environment: C++20 (GCC 13) // Zero-Overhead'
    ),
    React.createElement(
      'text',
      {
        key: 'cf-stat-6',
        x: '400',
        y: '460',
        fill: 'white',
        fillOpacity: '0.45',
        fontFamily: 'monospace',
        fontSize: '7',
      },
      '• Optimizations: Fast I/O, Custom Hashes, Monotonic Stacks'
    ),
    React.createElement('line', {
      key: 'cf-footer-div',
      x1: '395',
      y1: '476',
      x2: '720',
      y2: '476',
      stroke: 'white',
      strokeOpacity: '0.15',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'cf-footer-status',
        x: '400',
        y: '492',
        fill: 'white',
        fillOpacity: '0.55',
        fontFamily: 'monospace',
        fontSize: '7',
      },
      'VERIFIED URL: codeforces.com/profile/i_win_again'
    ),
  ];

  const svgElement = React.createElement(
    'svg',
    {
      viewBox: '0 0 760 540',
      fill: 'none',
      className: 'w-full h-auto overflow-visible',
      'aria-hidden': 'true',
    },
    svgChildren
  );

  return React.createElement(
    ScrollDrawCanvas,
    {
      className: containerClasses,
      triggerOpts,
      ...rest,
    },
    svgElement
  );
};

export default AlgorithmicLatticeArt;
