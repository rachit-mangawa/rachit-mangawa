import React from 'react';
import ScrollDrawCanvas from './ScrollDrawCanvas.jsx';

/**
 * AutodiffGraphArt
 * Bespoke schematic representing TensorFlow Core PR #120944:
 * - Reverse-mode autodiff computational DAG (forward primals & reverse adjoint gradient conduits)
 * - Asymptotic root derivative limit: analytical convergence to 0.5 vs numerical NaN divergence at x -> 0
 * - C++ Eigen kernel boundary patch & Python math_grad.py register gradient rule
 *
 * @param {Object} props
 * @param {string} [props.className='']
 * @param {Object} [props.triggerOpts={}]
 */
export const AutodiffGraphArt = ({
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
      'TENSORFLOW CORE // REVERSE-MODE AUTODIFF & KERNEL GRADIENT'
    ),
    React.createElement(
      'text',
      {
        key: 'hdr-patch',
        x: '715',
        y: '42',
        textAnchor: 'end',
        fill: 'white',
        fillOpacity: '0.45',
        fontFamily: 'monospace',
        fontSize: '9',
        letterSpacing: '0.12em',
      },
      'UPSTREAM PR #120944 // MATH_GRAD.PY'
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
      'EIGEN C++ KERNEL BOUNDARY // BESSEL I0/I1 ASYMPTOTIC CONVERGENCE'
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
    // 2. LEFT PANE: REVERSE-MODE AUTODIFF COMPUTATIONAL DAG
    // ==========================================
    React.createElement('rect', {
      key: 'dag-box',
      x: '30',
      y: '75',
      width: '430',
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
        key: 'dag-title',
        x: '42',
        y: '92',
        fill: 'white',
        fillOpacity: '0.55',
        fontFamily: 'monospace',
        fontSize: '9',
        fontWeight: 'bold',
        letterSpacing: '0.1em',
      },
      'COMPUTATIONAL DAG: PRIMAL FORWARD & ADJOINT BACKWARD PASS'
    ),
    React.createElement(
      'text',
      {
        key: 'dag-sub',
        x: '42',
        y: '104',
        fill: 'white',
        fillOpacity: '0.35',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      'CHAIN RULE: v̄_x = Σ (∂v_j / ∂x) · v̄_j  |  BOUNDARY GUARD: x → 0'
    ),

    // Forward Primal Track (Y ~ 140)
    React.createElement('line', {
      key: 'primal-track-guide',
      x1: '40',
      y1: '115',
      x2: '450',
      y2: '115',
      stroke: 'white',
      strokeOpacity: '0.1',
      strokeDasharray: '3 3',
      strokeWidth: '0.75',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'primal-lbl',
        x: '450',
        y: '112',
        textAnchor: 'end',
        fill: 'white',
        fillOpacity: '0.3',
        fontFamily: 'monospace',
        fontSize: '7',
      },
      'FORWARD EVALUATION (PRIMAL)'
    ),

    // Forward Node 1: Input x
    React.createElement('circle', {
      key: 'node-x',
      cx: '72',
      cy: '145',
      r: '16',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.6',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('circle', {
      key: 'node-x-inner',
      cx: '72',
      cy: '145',
      r: '13',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.2',
      strokeWidth: '0.75',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'node-x-txt',
        x: '72',
        y: '149',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.85',
        fontFamily: 'monospace',
        fontSize: '11',
        fontWeight: 'bold',
      },
      'x'
    ),
    React.createElement(
      'text',
      {
        key: 'node-x-sub',
        x: '72',
        y: '172',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.4',
        fontFamily: 'monospace',
        fontSize: '7',
      },
      'TENSOR [N]'
    ),

    // Forward Node 2: Bessel I0e(x)
    React.createElement('rect', {
      key: 'node-i0',
      x: '155',
      y: '125',
      width: '75',
      height: '32',
      rx: '2',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.6',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'node-i0-txt',
        x: '192',
        y: '142',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.85',
        fontFamily: 'monospace',
        fontSize: '8.5',
        fontWeight: 'bold',
      },
      'bessel_i0e'
    ),
    React.createElement(
      'text',
      {
        key: 'node-i0-sub',
        x: '192',
        y: '151',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.4',
        fontFamily: 'monospace',
        fontSize: '6.5',
      },
      'e^(-|x|)·I₀(x)'
    ),

    // Forward Node 3: Bessel I1e(x)
    React.createElement('rect', {
      key: 'node-i1',
      x: '155',
      y: '170',
      width: '75',
      height: '32',
      rx: '2',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.6',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'node-i1-txt',
        x: '192',
        y: '187',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.85',
        fontFamily: 'monospace',
        fontSize: '8.5',
        fontWeight: 'bold',
      },
      'bessel_i1e'
    ),
    React.createElement(
      'text',
      {
        key: 'node-i1-sub',
        x: '192',
        y: '196',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.4',
        fontFamily: 'monospace',
        fontSize: '6.5',
      },
      'e^(-|x|)·I₁(x)'
    ),

    // Forward Node 4: Ratio & Boundary Quotient
    React.createElement('rect', {
      key: 'node-div',
      x: '275',
      y: '170',
      width: '78',
      height: '32',
      rx: '2',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.6',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'node-div-txt',
        x: '314',
        y: '187',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.85',
        fontFamily: 'monospace',
        fontSize: '8.5',
        fontWeight: 'bold',
      },
      'i1(x) / x'
    ),
    React.createElement(
      'text',
      {
        key: 'node-div-sub',
        x: '314',
        y: '196',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.4',
        fontFamily: 'monospace',
        fontSize: '6.5',
      },
      'lim[x→0] = 0.5'
    ),

    // Forward Node 5: Output Loss y
    React.createElement('circle', {
      key: 'node-y',
      cx: '412',
      cy: '145',
      r: '18',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.6',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'node-y-txt',
        x: '412',
        y: '149',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.85',
        fontFamily: 'monospace',
        fontSize: '11',
        fontWeight: 'bold',
      },
      'y'
    ),
    React.createElement(
      'text',
      {
        key: 'node-y-sub',
        x: '412',
        y: '174',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.4',
        fontFamily: 'monospace',
        fontSize: '7',
      },
      'LOSS L(y)'
    ),

    // Forward Conduits
    React.createElement('path', {
      key: 'forward-path-x-i0',
      d: 'M 88,142 C 112,138 130,138 155,138',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.5',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'forward-path-x-i1',
      d: 'M 88,148 C 112,160 130,175 155,180',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.5',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'forward-path-i1-div',
      d: 'M 230,186 L 275,186',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.5',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'forward-path-x-denom',
      d: 'M 88,154 C 120,215 220,215 275,195',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.3',
      strokeDasharray: '4 3',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'forward-path-i0-y',
      d: 'M 230,140 C 285,136 340,140 394,142',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.5',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'forward-path-div-y',
      d: 'M 353,180 C 375,175 385,165 396,155',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.5',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Reverse Adjoint Track (Y ~ 220-310)
    React.createElement('line', {
      key: 'adjoint-track-guide',
      x1: '40',
      y1: '220',
      x2: '450',
      y2: '220',
      stroke: 'white',
      strokeOpacity: '0.1',
      strokeDasharray: '3 3',
      strokeWidth: '0.75',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'adjoint-lbl',
        x: '450',
        y: '217',
        textAnchor: 'end',
        fill: 'white',
        fillOpacity: '0.45',
        fontFamily: 'monospace',
        fontSize: '7',
      },
      'REVERSE ADJOINT PROPAGATION (BACKWARD GRADIENT)'
    ),

    // Adjoint Seed Node ȳ
    React.createElement('circle', {
      key: 'node-y-bar',
      cx: '412',
      cy: '260',
      r: '16',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.7',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'node-y-bar-txt',
        x: '412',
        y: '264',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.85',
        fontFamily: 'monospace',
        fontSize: '10',
        fontWeight: 'bold',
      },
      'ȳ = 1'
    ),
    React.createElement(
      'text',
      {
        key: 'node-y-bar-sub',
        x: '412',
        y: '286',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.4',
        fontFamily: 'monospace',
        fontSize: '6.5',
      },
      'SEED GRAD'
    ),

    // Adjoint Branch Decision Node (The PR #120944 Fix Point)
    React.createElement('polygon', {
      key: 'node-fix-branch',
      points: '314,242 342,260 314,278 286,260',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.8',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'node-fix-branch-txt',
        x: '314',
        y: '263',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.9',
        fontFamily: 'monospace',
        fontSize: '8',
        fontWeight: 'bold',
      },
      'x == 0 ?'
    ),
    React.createElement(
      'text',
      {
        key: 'node-fix-branch-sub',
        x: '314',
        y: '292',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.45',
        fontFamily: 'monospace',
        fontSize: '6.5',
      },
      'PATCH GUARD'
    ),

    // Adjoint Target Node x̄
    React.createElement('circle', {
      key: 'node-x-bar',
      cx: '72',
      cy: '260',
      r: '16',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.75',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('circle', {
      key: 'node-x-bar-pulse',
      cx: '72',
      cy: '260',
      r: '20',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.2',
      strokeDasharray: '2 2',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'node-x-bar-txt',
        x: '72',
        y: '264',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.9',
        fontFamily: 'monospace',
        fontSize: '10',
        fontWeight: 'bold',
      },
      'x̄_grad'
    ),
    React.createElement(
      'text',
      {
        key: 'node-x-bar-sub',
        x: '72',
        y: '286',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.5',
        fontFamily: 'monospace',
        fontSize: '6.5',
      },
      '∂L/∂x'
    ),

    // Reverse Adjoint Conduits (Right-to-Left Flow)
    React.createElement('path', {
      key: 'adj-path-seed-branch',
      d: 'M 396,260 L 342,260',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.7',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Path A: Unpatched NaN divergence path (warn / dashed)
    React.createElement('path', {
      key: 'adj-path-diverge',
      d: 'M 314,242 C 314,226 230,224 160,234 C 120,238 98,248 88,252',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.25',
      strokeDasharray: '3 3',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'diverge-lbl',
        x: '205',
        y: '232',
        fill: 'white',
        fillOpacity: '0.3',
        fontFamily: 'monospace',
        fontSize: '6.5',
      },
      'UNPATCHED: 0/0 NaN DIVERGENCE'
    ),

    // Path B: Patched Analytic Limit Route (PR #120944)
    React.createElement('path', {
      key: 'adj-path-fixed',
      d: 'M 286,260 L 88,260',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.85',
      strokeWidth: '1.5',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'fixed-lbl',
        x: '185',
        y: '254',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.8',
        fontFamily: 'monospace',
        fontSize: '7.5',
        fontWeight: 'bold',
      },
      'ANALYTIC LIMIT: lim[x→0] = 0.500000 (L\'HÔPITAL)'
    ),

    // Flow direction arrows on adjoint path
    React.createElement('path', {
      key: 'arrow-adj-1',
      d: 'M 368,257 L 362,260 L 368,263',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.7',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'arrow-adj-2',
      d: 'M 195,257 L 189,260 L 195,263',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.85',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'arrow-adj-3',
      d: 'M 115,257 L 109,260 L 115,263',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.85',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Adjoint Metrics Footer in Box
    React.createElement('line', {
      key: 'dag-footer-div',
      x1: '40',
      y1: '304',
      x2: '450',
      y2: '304',
      stroke: 'white',
      strokeOpacity: '0.15',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'dag-footer-txt',
        x: '42',
        y: '318',
        fill: 'white',
        fillOpacity: '0.5',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      'REVERSE ADJOINT FLOW: EXACT REVERSE GRAPH CONTINUITY PRESERVED'
    ),
    React.createElement(
      'text',
      {
        key: 'dag-footer-status',
        x: '448',
        y: '318',
        textAnchor: 'end',
        fill: 'white',
        fillOpacity: '0.6',
        fontFamily: 'monospace',
        fontSize: '7.5',
        fontWeight: 'bold',
      },
      'NUMERICAL DRIFT: Δ = 0.0000000'
    ),

    // ==========================================
    // 3. RIGHT PANE: ASYMPTOTIC LIMIT CONVERGENCE PLOT
    // ==========================================
    React.createElement('rect', {
      key: 'plot-box',
      x: '475',
      y: '75',
      width: '255',
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
        key: 'plot-title',
        x: '487',
        y: '92',
        fill: 'white',
        fillOpacity: '0.55',
        fontFamily: 'monospace',
        fontSize: '9',
        fontWeight: 'bold',
        letterSpacing: '0.1em',
      },
      'ASYMPTOTIC ROOT: dy/dx NEAR x=0'
    ),
    React.createElement(
      'text',
      {
        key: 'plot-sub',
        x: '487',
        y: '104',
        fill: 'white',
        fillOpacity: '0.35',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      'f\'(x) = i1e(x)/x  |  x ∈ [-1.5, +1.5]'
    ),

    // Plot Grid Lines
    React.createElement('line', {
      key: 'plot-grid-1',
      x1: '495',
      y1: '140',
      x2: '715',
      y2: '140',
      stroke: 'white',
      strokeOpacity: '0.1',
      strokeWidth: '0.75',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('line', {
      key: 'plot-grid-2',
      x1: '495',
      y1: '185',
      x2: '715',
      y2: '185',
      stroke: 'white',
      strokeOpacity: '0.1',
      strokeWidth: '0.75',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('line', {
      key: 'plot-grid-3',
      x1: '495',
      y1: '230',
      x2: '715',
      y2: '230',
      stroke: 'white',
      strokeOpacity: '0.1',
      strokeWidth: '0.75',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('line', {
      key: 'plot-grid-x1',
      x1: '545',
      y1: '120',
      x2: '545',
      y2: '270',
      stroke: 'white',
      strokeOpacity: '0.1',
      strokeWidth: '0.75',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('line', {
      key: 'plot-grid-x2',
      x1: '665',
      y1: '120',
      x2: '665',
      y2: '270',
      stroke: 'white',
      strokeOpacity: '0.1',
      strokeWidth: '0.75',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Plot Coordinate Axes (Zero at x=605, y=270 is 0.0, y=185 is 0.5)
    React.createElement('line', {
      key: 'plot-axis-x',
      x1: '495',
      y1: '270',
      x2: '718',
      y2: '270',
      stroke: 'white',
      strokeOpacity: '0.4',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('line', {
      key: 'plot-axis-y',
      x1: '605',
      y1: '115',
      x2: '605',
      y2: '275',
      stroke: 'white',
      strokeOpacity: '0.4',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Axis Ticks & Labels
    React.createElement(
      'text',
      {
        key: 'plot-x-minus1',
        x: '545',
        y: '282',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.35',
        fontFamily: 'monospace',
        fontSize: '7',
      },
      '-1.0'
    ),
    React.createElement(
      'text',
      {
        key: 'plot-x-zero',
        x: '605',
        y: '282',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.6',
        fontFamily: 'monospace',
        fontSize: '7',
        fontWeight: 'bold',
      },
      '0.0'
    ),
    React.createElement(
      'text',
      {
        key: 'plot-x-plus1',
        x: '665',
        y: '282',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.35',
        fontFamily: 'monospace',
        fontSize: '7',
      },
      '+1.0'
    ),
    React.createElement(
      'text',
      {
        key: 'plot-y-0',
        x: '598',
        y: '272',
        textAnchor: 'end',
        fill: 'white',
        fillOpacity: '0.35',
        fontFamily: 'monospace',
        fontSize: '7',
      },
      '0.0'
    ),
    React.createElement(
      'text',
      {
        key: 'plot-y-limit',
        x: '598',
        y: '188',
        textAnchor: 'end',
        fill: 'white',
        fillOpacity: '0.8',
        fontFamily: 'monospace',
        fontSize: '7.5',
        fontWeight: 'bold',
      },
      '0.5'
    ),
    React.createElement(
      'text',
      {
        key: 'plot-y-1',
        x: '598',
        y: '143',
        textAnchor: 'end',
        fill: 'white',
        fillOpacity: '0.35',
        fontFamily: 'monospace',
        fontSize: '7',
      },
      '1.0'
    ),

    // Limit Guide Line (y = 0.5)
    React.createElement('line', {
      key: 'plot-limit-guide',
      x1: '495',
      y1: '185',
      x2: '715',
      y2: '185',
      stroke: 'white',
      strokeOpacity: '0.3',
      strokeDasharray: '4 3',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Unpatched Divergence Curve (Spikes off toward NaN/Infinity)
    React.createElement('path', {
      key: 'curve-unpatched-left',
      d: 'M 505,212 C 545,210 580,205 601,135',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.25',
      strokeDasharray: '2 3',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'curve-unpatched-right',
      d: 'M 609,135 C 625,205 665,210 705,212',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.25',
      strokeDasharray: '2 3',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'curve-unpatched-txt',
        x: '605',
        y: '128',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.35',
        fontFamily: 'monospace',
        fontSize: '6.5',
      },
      'DIV/0 ASYMPTOTE'
    ),

    // Patched Analytic Smooth Convergence Curve
    React.createElement('path', {
      key: 'curve-patched-smooth',
      d: 'M 505,212 C 545,210 575,190 605,185 C 635,190 665,210 705,212',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.85',
      strokeWidth: '1.5',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Target Convergence Reticle at (605, 185)
    React.createElement('circle', {
      key: 'reticle-limit-outer',
      cx: '605',
      cy: '185',
      r: '8',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.6',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('circle', {
      key: 'reticle-limit-inner',
      cx: '605',
      cy: '185',
      r: '2.5',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.9',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('line', {
      key: 'reticle-cross-h',
      x1: '593',
      y1: '185',
      x2: '617',
      y2: '185',
      stroke: 'white',
      strokeOpacity: '0.5',
      strokeWidth: '0.75',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('line', {
      key: 'reticle-cross-v',
      x1: '605',
      y1: '173',
      x2: '605',
      y2: '197',
      stroke: 'white',
      strokeOpacity: '0.5',
      strokeWidth: '0.75',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Convergence Annotation Banner
    React.createElement('path', {
      key: 'callout-pointer',
      d: 'M 615,180 L 640,158 L 712,158',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.6',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'callout-txt1',
        x: '645',
        y: '154',
        fill: 'white',
        fillOpacity: '0.85',
        fontFamily: 'monospace',
        fontSize: '7.5',
        fontWeight: 'bold',
      },
      'ROOT LIMIT = 0.50'
    ),
    React.createElement(
      'text',
      {
        key: 'callout-txt2',
        x: '645',
        y: '168',
        fill: 'white',
        fillOpacity: '0.45',
        fontFamily: 'monospace',
        fontSize: '6.5',
      },
      'I\'_0(0) = 0.5 · I_1\'(0)'
    ),

    // Plot Footer Stats
    React.createElement('line', {
      key: 'plot-footer-div',
      x1: '485',
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
        key: 'plot-footer-txt',
        x: '487',
        y: '318',
        fill: 'white',
        fillOpacity: '0.5',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      'CONTINUITY: C¹ COMPLIANT ACROSS ORIGIN'
    ),

    // ==========================================
    // 4. BOTTOM PANE: DUAL C++ KERNEL & PYTHON MATH_GRAD.PY PATCH
    // ==========================================

    // Box 1: C++ Kernel Patch Box (Left)
    React.createElement('rect', {
      key: 'cpp-box',
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
        key: 'cpp-title',
        x: '42',
        y: '362',
        fill: 'white',
        fillOpacity: '0.6',
        fontFamily: 'monospace',
        fontSize: '8.5',
        fontWeight: 'bold',
        letterSpacing: '0.08em',
      },
      'KERNEL PATCH: tensorflow/core/kernels/bessel_ops.cc'
    ),
    React.createElement('line', {
      key: 'cpp-header-div',
      x1: '40',
      y1: '370',
      x2: '365',
      y2: '370',
      stroke: 'white',
      strokeOpacity: '0.15',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'cpp-diff-1',
        x: '45',
        y: '386',
        fill: 'white',
        fillOpacity: '0.35',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      '- // Unpatched: division yields 0/0 NaN at x=0'
    ),
    React.createElement(
      'text',
      {
        key: 'cpp-diff-2',
        x: '45',
        y: '400',
        fill: 'white',
        fillOpacity: '0.35',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      '- return bessel_i1e(x) / x;'
    ),
    React.createElement(
      'text',
      {
        key: 'cpp-diff-3',
        x: '45',
        y: '416',
        fill: 'white',
        fillOpacity: '0.85',
        fontFamily: 'monospace',
        fontSize: '7.5',
        fontWeight: 'bold',
      },
      '+ // PR #120944: exact analytic limit at boundary'
    ),
    React.createElement(
      'text',
      {
        key: 'cpp-diff-4',
        x: '45',
        y: '430',
        fill: 'white',
        fillOpacity: '0.85',
        fontFamily: 'monospace',
        fontSize: '7.5',
        fontWeight: 'bold',
      },
      '+ if (TF_PREDICT_FALSE(x == static_cast<T>(0))) {'
    ),
    React.createElement(
      'text',
      {
        key: 'cpp-diff-5',
        x: '45',
        y: '444',
        fill: 'white',
        fillOpacity: '0.85',
        fontFamily: 'monospace',
        fontSize: '7.5',
        fontWeight: 'bold',
      },
      '+   return static_cast<T>(0.5);'
    ),
    React.createElement(
      'text',
      {
        key: 'cpp-diff-6',
        x: '45',
        y: '458',
        fill: 'white',
        fillOpacity: '0.85',
        fontFamily: 'monospace',
        fontSize: '7.5',
        fontWeight: 'bold',
      },
      '+ }'
    ),
    React.createElement('line', {
      key: 'cpp-footer-div',
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
        key: 'cpp-footer-status',
        x: '45',
        y: '492',
        fill: 'white',
        fillOpacity: '0.55',
        fontFamily: 'monospace',
        fontSize: '7',
      },
      'STATUS: MERGED UPSTREAM // Eigen::Half & Float32 PASS'
    ),

    // Box 2: Python math_grad.py Autodiff Rule Box (Right)
    React.createElement('rect', {
      key: 'py-box',
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
        key: 'py-title',
        x: '397',
        y: '362',
        fill: 'white',
        fillOpacity: '0.6',
        fontFamily: 'monospace',
        fontSize: '8.5',
        fontWeight: 'bold',
        letterSpacing: '0.08em',
      },
      'AUTODIFF RULE: tensorflow/python/ops/math_grad.py'
    ),
    React.createElement('line', {
      key: 'py-header-div',
      x1: '395',
      y1: '370',
      x2: '720',
      y2: '370',
      stroke: 'white',
      strokeOpacity: '0.15',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'py-code-1',
        x: '400',
        y: '386',
        fill: 'white',
        fillOpacity: '0.8',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      '@RegisterGradient("BesselI0e")'
    ),
    React.createElement(
      'text',
      {
        key: 'py-code-2',
        x: '400',
        y: '400',
        fill: 'white',
        fillOpacity: '0.8',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      'def _BesselI0eGrad(op, grad):'
    ),
    React.createElement(
      'text',
      {
        key: 'py-code-3',
        x: '400',
        y: '414',
        fill: 'white',
        fillOpacity: '0.6',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      '  x, y = op.inputs[0], op.outputs[0]'
    ),
    React.createElement(
      'text',
      {
        key: 'py-code-4',
        x: '400',
        y: '428',
        fill: 'white',
        fillOpacity: '0.85',
        fontFamily: 'monospace',
        fontSize: '7.5',
        fontWeight: 'bold',
      },
      '  # Guard x=0 in reverse autodiff computation'
    ),
    React.createElement(
      'text',
      {
        key: 'py-code-5',
        x: '400',
        y: '442',
        fill: 'white',
        fillOpacity: '0.85',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      '  lim_val = array_ops.where(math_ops.equal(x, 0.0),'
    ),
    React.createElement(
      'text',
      {
        key: 'py-code-6',
        x: '400',
        y: '456',
        fill: 'white',
        fillOpacity: '0.85',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      '                            0.5, bessel_i1e(x) / x)'
    ),
    React.createElement('line', {
      key: 'py-footer-div',
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
        key: 'py-footer-status',
        x: '400',
        y: '492',
        fill: 'white',
        fillOpacity: '0.55',
        fontFamily: 'monospace',
        fontSize: '7',
      },
      'TEST SUITE: math_ops_test.py // 58 BOUNDS VERIFIED'
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

export default AutodiffGraphArt;
