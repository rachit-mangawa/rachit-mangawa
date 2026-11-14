import React from 'react';

/**
 * StickyStage
 * Alternating 12-column responsive layout container that locks artwork
 * (position: sticky top-24) while content scrolls on desktop, and collapses
 * to natural vertical flow on mobile (<1024px).
 *
 * @param {Object} props
 * @param {string} [props.id] - Anchor id for the section
 * @param {'left' | 'right'} [props.align='right'] - Position of sticky artwork column on desktop
 * @param {string} [props.minHeight='min-h-[70vh]'] - Minimum height utility class
 * @param {React.ReactNode} [props.artwork] - Sticky artwork or canvas element
 * @param {React.ReactNode} [props.children] - Main scrolling content
 * @param {string} [props.className=''] - Additional CSS classes for outer section
 * @param {React.ElementType} [props.as='section'] - HTML tag for outer container
 */
export const StickyStage = ({
  id,
  align = 'right',
  minHeight = 'min-h-[70vh]',
  artwork = null,
  children = null,
  className = '',
  as: Component = 'section',
  ...rest
}) => {
  const isLeft = align === 'left';

  const contentClasses = artwork
    ? isLeft
      ? 'w-full lg:col-span-7 lg:order-2'
      : 'w-full lg:col-span-7'
    : 'w-full lg:col-span-12';

  const artworkClasses = isLeft
    ? 'w-full lg:col-span-5 lg:sticky lg:top-24 lg:order-1'
    : 'w-full lg:col-span-5 lg:sticky lg:top-24';

  const contentCol = React.createElement(
    'div',
    { className: contentClasses, key: 'stage-content' },
    children
  );

  const artworkCol = artwork
    ? React.createElement(
        'div',
        { className: artworkClasses, key: 'stage-artwork' },
        artwork
      )
    : null;

  const gridChildren = artworkCol ? [contentCol, artworkCol] : [contentCol];

  const gridContainer = React.createElement(
    'div',
    { className: 'grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start' },
    gridChildren
  );

  const innerContainer = React.createElement(
    'div',
    { className: 'w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12' },
    gridContainer
  );

  const sectionClasses = [minHeight, 'relative w-full', className].filter(Boolean).join(' ');

  return React.createElement(
    Component,
    {
      id,
      className: sectionClasses,
      ...rest,
    },
    innerContainer
  );
};

export default StickyStage;
