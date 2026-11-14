import React from 'react';
import ScrollDrawCanvas from './ScrollDrawCanvas.jsx';

/**
 * KeywordAnnotation
 * Inline text wrapper rendering an overlay SVG that draws around
 * or underlines critical terms on scroll entry:
 * - 'bracket': Technical corner brackets [ and ] flanking the text
 * - 'underline': Fine dual hairline or callout stroke beneath the text
 * - 'loop': Delicate hand-crafted oval loop circling the phrase with natural terminal overlap
 *
 * @param {Object} props
 * @param {'bracket'|'underline'|'loop'} [props.type='bracket']
 * @param {string} [props.className='']
 * @param {Object} [props.triggerOpts={}]
 * @param {string} [props.as='span']
 * @param {React.ReactNode} props.children
 */
export const KeywordAnnotation = ({
  type = 'bracket',
  className = '',
  triggerOpts = {},
  as = 'span',
  children,
  ...rest
}) => {
  const containerClasses = [
    'relative inline align-baseline font-medium text-white/95',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  let svgElements;
  if (type === 'underline') {
    svgElements = [
      // Primary Dynamic Underline
      React.createElement('path', {
        key: 'underline-primary',
        d: 'M -2,94 C 25,91 75,95 102,93',
        fill: 'none',
        stroke: 'currentColor',
        strokeOpacity: '0.8',
        strokeWidth: '1.25',
        strokeLinecap: 'round',
        vectorEffect: 'non-scaling-stroke',
      }),
      // Secondary Accent Echo Underline
      React.createElement('path', {
        key: 'underline-secondary',
        d: 'M 8,99 C 35,97 65,100 96,98',
        fill: 'none',
        stroke: 'currentColor',
        strokeOpacity: '0.35',
        strokeWidth: '0.75',
        strokeLinecap: 'round',
        vectorEffect: 'non-scaling-stroke',
      }),
    ];
  } else if (type === 'loop') {
    svgElements = [
      // Delicate Oval Loop circling phrase with natural terminal overlap
      React.createElement('path', {
        key: 'loop-path',
        d: 'M 4,40 C 2,15 20,2 50,2 C 82,2 101,15 101,50 C 101,85 80,98 50,98 C 18,98 -1,85 -1,52 C -1,22 18,-2 55,-2 C 78,-2 95,8 98,22',
        fill: 'none',
        stroke: 'currentColor',
        strokeOpacity: '0.7',
        strokeWidth: '1.25',
        strokeLinecap: 'round',
        vectorEffect: 'non-scaling-stroke',
      }),
    ];
  } else {
    // default 'bracket'
    svgElements = [
      // Left Bracket [
      React.createElement('path', {
        key: 'bracket-left',
        d: 'M 4,2 L 0,2 L 0,98 L 4,98',
        fill: 'none',
        stroke: 'currentColor',
        strokeOpacity: '0.75',
        strokeWidth: '1.25',
        vectorEffect: 'non-scaling-stroke',
      }),
      // Right Bracket ]
      React.createElement('path', {
        key: 'bracket-right',
        d: 'M 96,2 L 100,2 L 100,98 L 96,98',
        fill: 'none',
        stroke: 'currentColor',
        strokeOpacity: '0.75',
        strokeWidth: '1.25',
        vectorEffect: 'non-scaling-stroke',
      }),
    ];
  }

  const svgOverlay = React.createElement(
    'svg',
    {
      key: 'annotation-svg',
      viewBox: '0 0 100 100',
      preserveAspectRatio: 'none',
      fill: 'none',
      className:
        'hidden absolute -inset-x-1.5 -inset-y-0.5 w-[calc(100%+0.75rem)] h-[calc(100%+0.25rem)] pointer-events-none overflow-visible',
      'aria-hidden': 'true',
    },
    svgElements
  );

  const textElement = React.createElement(
    'span',
    {
      key: 'annotation-text',
      className: 'relative z-10',
    },
    children
  );

  return React.createElement(
    ScrollDrawCanvas,
    {
      as,
      className: containerClasses,
      triggerOpts: {
        trigger: 'top 85%',
        ...triggerOpts,
      },
      ...rest,
    },
    textElement,
    svgOverlay
  );
};

export default KeywordAnnotation;
