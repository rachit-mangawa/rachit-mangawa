import React from 'react';
import ScrollDrawCanvas from './ScrollDrawCanvas.jsx';

/**
 * HeroArtwork
 * Standout generative geometric wireframe / cyber-architectural blueprint.
 * Features concentric orbits, coordinate reticles, polar ticks, inscribed sacred
 * geometry, and a terminal downward spine anchor connecting into VectorSpine.
 *
 * @param {Object} props
 * @param {string} [props.className='']
 * @param {Object} [props.triggerOpts={}]
 */
export const HeroArtwork = ({
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

  // Compute 24 radial compass ticks at r=200 around center (400, 230)
  const ticks = [];
  for (let i = 0; i < 24; i++) {
    const angle = (i * 15 * Math.PI) / 180;
    const isMajor = i % 6 === 0;
    const isSemi = i % 2 === 0;
    const rIn = isMajor ? 190 : isSemi ? 194 : 196;
    const rOut = 200;
    const x1 = +(400 + rIn * Math.cos(angle)).toFixed(2);
    const y1 = +(230 + rIn * Math.sin(angle)).toFixed(2);
    const x2 = +(400 + rOut * Math.cos(angle)).toFixed(2);
    const y2 = +(230 + rOut * Math.sin(angle)).toFixed(2);
    ticks.push({
      key: `tick-${i}`,
      d: `M ${x1},${y1} L ${x2},${y2}`,
      strokeOpacity: isMajor ? '0.45' : isSemi ? '0.3' : '0.15',
    });
  }

  const svgChildren = [
    // Reticle corner brackets
    React.createElement('path', {
      key: 'reticle-tl',
      d: 'M 40,70 L 40,40 L 70,40',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.4',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'reticle-tr',
      d: 'M 730,40 L 760,40 L 760,70',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.4',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'reticle-bl',
      d: 'M 40,470 L 40,500 L 70,500',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.4',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'reticle-br',
      d: 'M 730,500 L 760,500 L 760,470',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.4',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Bounding edge center ticks
    React.createElement('path', {
      key: 'edge-ticks',
      d: 'M 380,40 L 420,40 M 400,35 L 400,45 M 40,220 L 40,240 M 35,230 L 45,230 M 760,220 L 760,240 M 755,230 L 765,230',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.2',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Header metadata labels
    React.createElement(
      'text',
      {
        key: 'txt-tl',
        x: '50',
        y: '58',
        fill: 'white',
        fillOpacity: '0.45',
        fontFamily: 'monospace',
        fontSize: '10',
        letterSpacing: '0.15em',
      },
      'SYSTEM.CORE // SACRED WIREFRAME'
    ),
    React.createElement(
      'text',
      {
        key: 'txt-tr',
        x: '750',
        y: '58',
        textAnchor: 'end',
        fill: 'white',
        fillOpacity: '0.45',
        fontFamily: 'monospace',
        fontSize: '10',
        letterSpacing: '0.15em',
      },
      'REF: 400.00 / 230.00 [RAD 200]'
    ),
    React.createElement(
      'text',
      {
        key: 'txt-bl',
        x: '50',
        y: '492',
        fill: 'white',
        fillOpacity: '0.35',
        fontFamily: 'monospace',
        fontSize: '9',
        letterSpacing: '0.12em',
      },
      'FREQ: 144.00 MHZ // PHI: 1.618'
    ),
    React.createElement(
      'text',
      {
        key: 'txt-br',
        x: '750',
        y: '492',
        textAnchor: 'end',
        fill: 'white',
        fillOpacity: '0.35',
        fontFamily: 'monospace',
        fontSize: '9',
        letterSpacing: '0.12em',
      },
      'AXIS: STAGE-00 -> SPINE'
    ),

    // Coordinate crosshair axes
    React.createElement('path', {
      key: 'axis-h',
      d: 'M 80,230 L 360,230 M 440,230 L 720,230',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.18',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'axis-v-top',
      d: 'M 400,60 L 400,190',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.18',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'axis-diag-1',
      d: 'M 220,50 L 365,195 M 435,265 L 580,410',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.1',
      strokeWidth: '1',
      strokeDasharray: '3 6',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'axis-diag-2',
      d: 'M 580,50 L 435,195 M 365,265 L 220,410',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.1',
      strokeWidth: '1',
      strokeDasharray: '3 6',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Concentric celestial orbits
    React.createElement('circle', {
      key: 'orbit-outer',
      cx: 400,
      cy: 230,
      r: 200,
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.22',
      strokeWidth: '1',
      strokeDasharray: '4 6',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('circle', {
      key: 'orbit-mid-160',
      cx: 400,
      cy: 230,
      r: 160,
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.28',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('circle', {
      key: 'orbit-inner-120',
      cx: 400,
      cy: 230,
      r: 120,
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.15',
      strokeWidth: '1',
      strokeDasharray: '2 4',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('circle', {
      key: 'orbit-core-70',
      cx: 400,
      cy: 230,
      r: 70,
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.35',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('circle', {
      key: 'orbit-micro-28',
      cx: 400,
      cy: 230,
      r: 28,
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.5',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('circle', {
      key: 'orbit-singularity',
      cx: 400,
      cy: 230,
      r: 6,
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.8',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Center crosshair
    React.createElement('path', {
      key: 'center-reticle',
      d: 'M 388,230 L 412,230 M 400,218 L 400,242',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.7',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Radial compass tick marks
    ...ticks.map((t) =>
      React.createElement('path', {
        key: t.key,
        d: t.d,
        fill: 'none',
        stroke: 'white',
        strokeOpacity: t.strokeOpacity,
        strokeWidth: '1',
        vectorEffect: 'non-scaling-stroke',
      })
    ),

    // Tilted elliptical orbital planes
    React.createElement('ellipse', {
      key: 'ellipse-1',
      cx: 400,
      cy: 230,
      rx: 190,
      ry: 75,
      transform: 'rotate(-25 400 230)',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.2',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('ellipse', {
      key: 'ellipse-2',
      cx: 400,
      cy: 230,
      rx: 190,
      ry: 75,
      transform: 'rotate(35 400 230)',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.2',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Orbital satellite nodes
    React.createElement('circle', {
      key: 'sat-1',
      cx: 250,
      cy: 160,
      r: 3.5,
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.7',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('circle', {
      key: 'sat-2',
      cx: 550,
      cy: 300,
      r: 3.5,
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.7',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Sacred Geometry: Inscribed Hexagram on R=160
    React.createElement('polygon', {
      key: 'geom-tri-1',
      points: '560,230 320,368.56 320,91.44',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.28',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('polygon', {
      key: 'geom-tri-2',
      points: '240,230 480,368.56 480,91.44',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.28',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    // Inscribed rotated diamond on R=70
    React.createElement('polygon', {
      key: 'geom-diamond',
      points: '400,160 470,230 400,300 330,230',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.3',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Dimension callout arc: ∠ 45°
    React.createElement('path', {
      key: 'arc-dim',
      d: 'M 470,230 A 70 70 0 0 0 450,180',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.4',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'txt-angle',
        x: '468',
        y: '200',
        fill: 'white',
        fillOpacity: '0.55',
        fontFamily: 'monospace',
        fontSize: '9',
      },
      '∠ 45.0°'
    ),

    // Downward Spine Anchor (connecting to VectorSpine)
    // Converging lateral feeder lines
    React.createElement('path', {
      key: 'spine-feeder-l',
      d: 'M 320,368.56 C 350,420 388,435 388,540',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.25',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'spine-feeder-r',
      d: 'M 480,368.56 C 450,420 412,435 412,540',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.25',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Central spine trunk line
    React.createElement('path', {
      key: 'spine-trunk',
      d: 'M 400,236 L 400,540',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.5',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Guard rails
    React.createElement('path', {
      key: 'spine-guard-l',
      d: 'M 394,400 L 394,540',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.15',
      strokeWidth: '1',
      strokeDasharray: '4 4',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'spine-guard-r',
      d: 'M 406,400 L 406,540',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.15',
      strokeWidth: '1',
      strokeDasharray: '4 4',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Downward directing chevrons
    React.createElement('path', {
      key: 'spine-chevron-1',
      d: 'M 392,440 L 400,448 L 408,440',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.4',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'spine-chevron-2',
      d: 'M 392,475 L 400,483 L 408,475',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.45',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'spine-chevron-3',
      d: 'M 392,510 L 400,518 L 408,510',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.5',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Terminal coupler bead and crossbar at y=540
    React.createElement('circle', {
      key: 'spine-end-bead',
      cx: 400,
      cy: 536,
      r: 3.5,
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.7',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('line', {
      key: 'spine-end-cross',
      x1: 384,
      y1: 540,
      x2: 416,
      y2: 540,
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.5',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
  ];

  const svgElement = React.createElement(
    'svg',
    {
      viewBox: '0 0 800 540',
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

export default HeroArtwork;
