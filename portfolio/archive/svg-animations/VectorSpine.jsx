import React from 'react';
import ScrollDrawCanvas from './ScrollDrawCanvas.jsx';

/**
 * VectorSpine
 * Connecting vector track that threads between alternating stages.
 * Provides architectural continuity across section boundaries.
 *
 * @param {Object} props
 * @param {'top-to-right' | 'right-to-left' | 'left-to-right' | 'straight'} [props.variant='straight']
 * @param {string} [props.className='']
 * @param {Object} [props.triggerOpts={}]
 */
export const VectorSpine = ({
  variant = 'straight',
  className = '',
  triggerOpts = {},
  ...rest
}) => {
  const containerClasses = [
    'hidden pointer-events-none select-none',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  let mainPathD = 'M 600,0 L 600,160';
  let accentPathD = 'M 596,0 L 596,160 M 604,0 L 604,160';
  let startX = 600;
  let endX = 600;

  switch (variant) {
    case 'top-to-right':
      mainPathD = 'M 600,0 C 600,80 950,80 950,160';
      accentPathD = 'M 600,0 C 600,80 950,80 950,160';
      startX = 600;
      endX = 950;
      break;
    case 'right-to-left':
      mainPathD = 'M 950,0 C 950,80 250,80 250,160';
      accentPathD = 'M 950,0 C 950,80 250,80 250,160';
      startX = 950;
      endX = 250;
      break;
    case 'left-to-right':
      mainPathD = 'M 250,0 C 250,80 950,80 950,160';
      accentPathD = 'M 250,0 C 250,80 950,80 950,160';
      startX = 250;
      endX = 950;
      break;
    case 'straight':
    default:
      mainPathD = 'M 600,0 L 600,160';
      accentPathD = 'M 596,0 L 596,160 M 604,0 L 604,160';
      startX = 600;
      endX = 600;
      break;
  }

  const svgChildren = [
    // Subtle cadence guide line
    React.createElement('path', {
      key: 'accent-line',
      d: accentPathD,
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.08',
      strokeWidth: '1',
      strokeDasharray: '4 6',
      vectorEffect: 'non-scaling-stroke',
    }),
    // Main connecting spline
    React.createElement('path', {
      key: 'main-spline',
      d: mainPathD,
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.2',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    // Terminal start tick
    React.createElement('line', {
      key: 'start-tick',
      x1: startX - 8,
      y1: 0,
      x2: startX + 8,
      y2: 0,
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.3',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    // Terminal end tick
    React.createElement('line', {
      key: 'end-tick',
      x1: endX - 8,
      y1: 160,
      x2: endX + 8,
      y2: 160,
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.3',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    // Start ring anchor
    React.createElement('circle', {
      key: 'start-ring',
      cx: startX,
      cy: 4,
      r: 3,
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.4',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    // End ring anchor
    React.createElement('circle', {
      key: 'end-ring',
      cx: endX,
      cy: 156,
      r: 3,
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.4',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
  ];

  const svgElement = React.createElement(
    'svg',
    {
      viewBox: '0 0 1200 160',
      fill: 'none',
      preserveAspectRatio: 'none',
      className: 'w-full h-full overflow-visible',
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

export default VectorSpine;
