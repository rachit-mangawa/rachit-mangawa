import React from 'react';
import ScrollDrawCanvas from './ScrollDrawCanvas.jsx';

/**
 * AstCompilerArt
 * Bespoke schematic representing HeartFlow OS:
 * - Bare-metal AST parse tree & tokenizer conduits
 * - INT8 hardware register allocations (<512B stack, 8.15KB SRAM, ESP32-S3)
 * - Sub-20µs hard real-time interrupt & execution timing wave
 *
 * @param {Object} props
 * @param {string} [props.className='']
 * @param {Object} [props.triggerOpts={}]
 */
export const AstCompilerArt = ({
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

    // Header Title and Specs
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
      'HEARTFLOW OS // BARE-METAL AST COMPILER'
    ),
    React.createElement(
      'text',
      {
        key: 'hdr-target',
        x: '715',
        y: '42',
        textAnchor: 'end',
        fill: 'white',
        fillOpacity: '0.45',
        fontFamily: 'monospace',
        fontSize: '9',
        letterSpacing: '0.12em',
      },
      'TARGET: ESP32-S3 [XTENSA LX7]'
    ),
    React.createElement(
      'text',
      {
        key: 'hdr-specs',
        x: '45',
        y: '58',
        fill: 'white',
        fillOpacity: '0.35',
        fontFamily: 'monospace',
        fontSize: '9',
        letterSpacing: '0.1em',
      },
      'INT8 SIMD PIPELINE | SRAM: 8.15 KB | STACK: < 512B'
    ),

    // ==========================================
    // 2. AST Parse Tree (Left & Center Section)
    // ==========================================

    // Tree Root Node [PROGRAM]
    React.createElement('rect', {
      key: 'node-root-rect',
      x: '200',
      y: '78',
      width: '120',
      height: '28',
      rx: '2',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.5',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'node-root-txt',
        x: '260',
        y: '96',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.8',
        fontFamily: 'monospace',
        fontSize: '10',
        letterSpacing: '0.1em',
      },
      'ROOT: AST_PROG'
    ),
    React.createElement('circle', {
      key: 'node-root-dot',
      cx: '260',
      cy: '106',
      r: '2',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.8',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Branches from Root to Level 1
    React.createElement('path', {
      key: 'branch-root-l',
      d: 'M 260,106 L 260,126 L 140,126 L 140,146',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.35',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'branch-root-r',
      d: 'M 260,106 L 260,126 L 380,126 L 380,146',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.35',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Level 1 Nodes
    // Node L1-A: FN_DECL ecg_filter
    React.createElement('rect', {
      key: 'node-l1a-rect',
      x: '80',
      y: '146',
      width: '120',
      height: '26',
      rx: '2',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.45',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'node-l1a-txt',
        x: '140',
        y: '163',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.75',
        fontFamily: 'monospace',
        fontSize: '9',
      },
      'FN: ecg_filter'
    ),

    // Node L1-B: OP_GRAPH qrs_detect
    React.createElement('rect', {
      key: 'node-l1b-rect',
      x: '320',
      y: '146',
      width: '120',
      height: '26',
      rx: '2',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.45',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'node-l1b-txt',
        x: '380',
        y: '163',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.75',
        fontFamily: 'monospace',
        fontSize: '9',
      },
      'OP: qrs_detect'
    ),

    // Branches from Level 1 to Level 2
    React.createElement('path', {
      key: 'branch-l1a-to-l2',
      d: 'M 140,172 L 140,190 M 140,190 L 85,190 L 85,208 M 140,190 L 195,190 L 195,208',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.3',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'branch-l1b-to-l2',
      d: 'M 380,172 L 380,190 M 380,190 L 325,190 L 325,208 M 380,190 L 435,190 L 435,208',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.3',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Level 2 Nodes (Tokenizer & Operator Blocks)
    React.createElement('rect', {
      key: 'node-l2-1',
      x: '45',
      y: '208',
      width: '80',
      height: '24',
      rx: '2',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.35',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'node-l2-1-txt',
        x: '85',
        y: '224',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.65',
        fontFamily: 'monospace',
        fontSize: '8.5',
      },
      'TOK_STREAM'
    ),

    React.createElement('rect', {
      key: 'node-l2-2',
      x: '155',
      y: '208',
      width: '80',
      height: '24',
      rx: '2',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.35',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'node-l2-2-txt',
        x: '195',
        y: '224',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.65',
        fontFamily: 'monospace',
        fontSize: '8.5',
      },
      'INT8_CONV'
    ),

    React.createElement('rect', {
      key: 'node-l2-3',
      x: '285',
      y: '208',
      width: '80',
      height: '24',
      rx: '2',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.35',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'node-l2-3-txt',
        x: '325',
        y: '224',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.65',
        fontFamily: 'monospace',
        fontSize: '8.5',
      },
      'PEAK_R_EVAL'
    ),

    React.createElement('rect', {
      key: 'node-l2-4',
      x: '395',
      y: '208',
      width: '80',
      height: '24',
      rx: '2',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.35',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'node-l2-4-txt',
        x: '435',
        y: '224',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.65',
        fontFamily: 'monospace',
        fontSize: '8.5',
      },
      'EVT_EMIT'
    ),

    // Level 3 Leaf Nodes and Bus Conduits
    React.createElement('path', {
      key: 'leaf-drops',
      d: 'M 85,232 L 85,268 M 195,232 L 195,268 M 325,232 L 325,268 M 435,232 L 435,268',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.25',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('circle', {
      key: 'leaf-dot-1',
      cx: '85',
      cy: '272',
      r: '3',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.6',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('circle', {
      key: 'leaf-dot-2',
      cx: '195',
      cy: '272',
      r: '3',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.6',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('circle', {
      key: 'leaf-dot-3',
      cx: '325',
      cy: '272',
      r: '3',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.6',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('circle', {
      key: 'leaf-dot-4',
      cx: '435',
      cy: '272',
      r: '3',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.6',
      vectorEffect: 'non-scaling-stroke',
    }),

    React.createElement(
      'text',
      {
        key: 'leaf-txt-1',
        x: '85',
        y: '288',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.5',
        fontFamily: 'monospace',
        fontSize: '8',
      },
      '0x00FF ADC'
    ),
    React.createElement(
      'text',
      {
        key: 'leaf-txt-2',
        x: '195',
        y: '288',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.5',
        fontFamily: 'monospace',
        fontSize: '8',
      },
      'SIMD_DOTP'
    ),
    React.createElement(
      'text',
      {
        key: 'leaf-txt-3',
        x: '325',
        y: '288',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.5',
        fontFamily: 'monospace',
        fontSize: '8',
      },
      'R_PEAK_TRIG'
    ),
    React.createElement(
      'text',
      {
        key: 'leaf-txt-4',
        x: '435',
        y: '288',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.5',
        fontFamily: 'monospace',
        fontSize: '8',
      },
      'BLE_BEACON'
    ),

    // Sub-system Interconnect Bus routing into Register Bank
    React.createElement('path', {
      key: 'interconnect-bus',
      d: 'M 50,310 L 470,310 L 495,310 L 495,190 L 520,190',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.3',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('circle', {
      key: 'bus-junction-1',
      cx: '495',
      cy: '190',
      r: '2.5',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.7',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'bus-txt',
        x: '60',
        y: '322',
        fill: 'white',
        fillOpacity: '0.35',
        fontFamily: 'monospace',
        fontSize: '8',
        letterSpacing: '0.12em',
      },
      'SYSTEM BUS // DMA TO INT8 REGISTER ALLOCATOR'
    ),

    // ==========================================
    // 3. INT8 Hardware Register Bank (Right Box)
    // ==========================================
    React.createElement('rect', {
      key: 'reg-bank-frame',
      x: '520',
      y: '78',
      width: '200',
      height: '246',
      rx: '2',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.35',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    // Reg Bank Title Bar
    React.createElement('path', {
      key: 'reg-header-line',
      d: 'M 520,102 L 720,102',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.3',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'reg-header-txt',
        x: '530',
        y: '95',
        fill: 'white',
        fillOpacity: '0.6',
        fontFamily: 'monospace',
        fontSize: '9',
        fontWeight: 'bold',
        letterSpacing: '0.08em',
      },
      'INT8 REGISTER BANK'
    ),

    // Registers List
    React.createElement(
      'text',
      {
        key: 'reg-r0',
        x: '532',
        y: '120',
        fill: 'white',
        fillOpacity: '0.7',
        fontFamily: 'monospace',
        fontSize: '8.5',
      },
      'R0 [0x00]: ACC_LOW  -> 0x4B'
    ),
    React.createElement(
      'text',
      {
        key: 'reg-r1',
        x: '532',
        y: '138',
        fill: 'white',
        fillOpacity: '0.7',
        fontFamily: 'monospace',
        fontSize: '8.5',
      },
      'R1 [0x01]: ACC_HIGH -> 0x02'
    ),
    React.createElement(
      'text',
      {
        key: 'reg-r2',
        x: '532',
        y: '156',
        fill: 'white',
        fillOpacity: '0.7',
        fontFamily: 'monospace',
        fontSize: '8.5',
      },
      'R2 [0x02]: ECG_SMPL -> 0x8F'
    ),
    React.createElement(
      'text',
      {
        key: 'reg-r3',
        x: '532',
        y: '174',
        fill: 'white',
        fillOpacity: '0.7',
        fontFamily: 'monospace',
        fontSize: '8.5',
      },
      'R3 [0x03]: PEAK_WIN -> 0x1A'
    ),

    // Mid Divider Line
    React.createElement('line', {
      key: 'reg-divider-1',
      x1: '520',
      y1: '186',
      x2: '720',
      y2: '186',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.2',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),

    React.createElement(
      'text',
      {
        key: 'reg-sp',
        x: '532',
        y: '204',
        fill: 'white',
        fillOpacity: '0.75',
        fontFamily: 'monospace',
        fontSize: '8.5',
        fontWeight: 'bold',
      },
      'SP [0x1FFA]: < 512B STACK'
    ),
    React.createElement(
      'text',
      {
        key: 'reg-pc',
        x: '532',
        y: '222',
        fill: 'white',
        fillOpacity: '0.65',
        fontFamily: 'monospace',
        fontSize: '8.5',
      },
      'PC [0x4008]: XTENSA LX7'
    ),

    // Second Divider
    React.createElement('line', {
      key: 'reg-divider-2',
      x1: '520',
      y1: '236',
      x2: '720',
      y2: '236',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.2',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),

    React.createElement(
      'text',
      {
        key: 'reg-sram',
        x: '532',
        y: '256',
        fill: 'white',
        fillOpacity: '0.75',
        fontFamily: 'monospace',
        fontSize: '8.5',
      },
      'SRAM ALLOC: 8.15 KB'
    ),
    React.createElement(
      'text',
      {
        key: 'reg-sram-bar',
        x: '532',
        y: '272',
        fill: 'white',
        fillOpacity: '0.45',
        fontFamily: 'monospace',
        fontSize: '8',
      },
      'HEAP ALLOC: 0 B (STATIC ONLY)'
    ),
    React.createElement(
      'text',
      {
        key: 'reg-lut-status',
        x: '532',
        y: '288',
        fill: 'white',
        fillOpacity: '0.45',
        fontFamily: 'monospace',
        fontSize: '8',
      },
      'FIR LUT TABLE: 256 BYTES'
    ),
    React.createElement(
      'text',
      {
        key: 'reg-lock-status',
        x: '532',
        y: '304',
        fill: 'white',
        fillOpacity: '0.5',
        fontFamily: 'monospace',
        fontSize: '8',
        letterSpacing: '0.05em',
      },
      'STATUS: REAL-TIME HARDENED'
    ),

    // ==========================================
    // 4. Sub-20µs Hard Real-Time Timing Pulse Wave
    // ==========================================
    React.createElement('rect', {
      key: 'timing-frame',
      x: '35',
      y: '348',
      width: '685',
      height: '166',
      rx: '2',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.3',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),

    React.createElement(
      'text',
      {
        key: 'timing-title',
        x: '48',
        y: '368',
        fill: 'white',
        fillOpacity: '0.6',
        fontFamily: 'monospace',
        fontSize: '9.5',
        fontWeight: 'bold',
        letterSpacing: '0.1em',
      },
      'REAL-TIME TIMING PROFILE // SUB-20µs HARD DEADLINE'
    ),
    React.createElement(
      'text',
      {
        key: 'timing-status',
        x: '705',
        y: '368',
        textAnchor: 'end',
        fill: 'white',
        fillOpacity: '0.7',
        fontFamily: 'monospace',
        fontSize: '9',
        letterSpacing: '0.08em',
      },
      'EXEC: 18.42µs [DEADLINE PASS]'
    ),

    // Timeline Grid Coordinates (0µs to 20µs)
    // 0µs at x=150, 5µs at x=265, 10µs at x=380, 15µs at x=495, 20µs at x=610 (scale: 23px per µs)
    React.createElement('line', {
      key: 'time-axis-base',
      x1: '150',
      y1: '480',
      x2: '650',
      y2: '480',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.3',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Timeline Vertical Ticks & Grid Guides
    ...[
      { label: '0µs', x: 150 },
      { label: '5µs', x: 265 },
      { label: '10µs', x: 380 },
      { label: '15µs', x: 495 },
      { label: '20µs', x: 610, isDeadline: true },
    ].flatMap((marker) => [
      React.createElement('line', {
        key: `grid-line-${marker.label}`,
        x1: marker.x,
        y1: marker.isDeadline ? 378 : 390,
        x2: marker.x,
        y2: 484,
        fill: 'none',
        stroke: 'white',
        strokeOpacity: marker.isDeadline ? '0.45' : '0.12',
        strokeWidth: '1',
        strokeDasharray: marker.isDeadline ? '3 3' : '2 4',
        vectorEffect: 'non-scaling-stroke',
      }),
      React.createElement(
        'text',
        {
          key: `grid-lbl-${marker.label}`,
          x: marker.x,
          y: '496',
          textAnchor: 'middle',
          fill: 'white',
          fillOpacity: marker.isDeadline ? '0.8' : '0.4',
          fontFamily: 'monospace',
          fontSize: '8',
          fontWeight: marker.isDeadline ? 'bold' : 'normal',
        },
        marker.label
      ),
    ]),

    // Hard Deadline Label at top of x=610 line
    React.createElement(
      'text',
      {
        key: 'deadline-warn',
        x: '610',
        y: '375',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.55',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      '20µs BOUNDARY'
    ),

    // Channel 1: ADC_IRQ Pulse
    React.createElement(
      'text',
      {
        key: 'ch1-lbl',
        x: '48',
        y: '408',
        fill: 'white',
        fillOpacity: '0.5',
        fontFamily: 'monospace',
        fontSize: '8',
      },
      'CH1: ADC_IRQ'
    ),
    React.createElement('path', {
      key: 'ch1-wave',
      // Starts 0µs(150), rises at 1.5µs(185), drops at 4.2µs(247)
      d: 'M 150,412 L 185,412 L 185,398 L 247,398 L 247,412 L 640,412',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.6',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Channel 2: AST_EXEC INT8 SIMD Window
    React.createElement(
      'text',
      {
        key: 'ch2-lbl',
        x: '48',
        y: '438',
        fill: 'white',
        fillOpacity: '0.5',
        fontFamily: 'monospace',
        fontSize: '8',
      },
      'CH2: AST_SIMD'
    ),
    React.createElement('path', {
      key: 'ch2-wave',
      // Rises at 4.2µs(247), executes until 18.42µs (150 + 18.42*23 = 574)
      d: 'M 150,442 L 247,442 L 247,428 L 574,428 L 574,442 L 640,442',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.65',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Channel 3: EMIT_OUT Event Beacon
    React.createElement(
      'text',
      {
        key: 'ch3-lbl',
        x: '48',
        y: '468',
        fill: 'white',
        fillOpacity: '0.5',
        fontFamily: 'monospace',
        fontSize: '8',
      },
      'CH3: EMIT_OUT'
    ),
    React.createElement('path', {
      key: 'ch3-wave',
      // Pulses at 18.42µs(574) to 19.5µs(598)
      d: 'M 150,472 L 574,472 L 574,458 L 598,458 L 598,472 L 640,472',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.7',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Measurement Cursor at 18.42µs (x=574)
    React.createElement('line', {
      key: 'cursor-line',
      x1: '574',
      y1: '388',
      x2: '574',
      y2: '480',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.75',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('circle', {
      key: 'cursor-bead',
      cx: '574',
      cy: '428',
      r: '3.5',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.85',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'cursor-label',
        x: '574',
        y: '384',
        textAnchor: 'end',
        fill: 'white',
        fillOpacity: '0.75',
        fontFamily: 'monospace',
        fontSize: '7.5',
        fontWeight: 'bold',
      },
      't=18.42µs (Δ= +1.58µs SLACK)'
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

export default AstCompilerArt;
