import React from 'react';
import ScrollDrawCanvas from './ScrollDrawCanvas.jsx';

/**
 * IngestionGraphArt
 * Bespoke schematic representing UIDAI Aadhaar:
 * - Air-gapped document intelligence scanner ingress
 * - Multi-lingual OCR pipeline flow (Devanagari, Tamil, Bengali, Latin)
 * - SQLite WAL async ETL queuing with checkpoint buffer
 * - 4-Quadrant telemetry & audit matrix (throughput, latency, confidence, drift)
 *
 * @param {Object} props
 * @param {string} [props.className='']
 * @param {Object} [props.triggerOpts={}]
 */
export const IngestionGraphArt = ({
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
      'UIDAI AADHAAR // AIR-GAPPED DOCUMENT INTELLIGENCE'
    ),
    React.createElement(
      'text',
      {
        key: 'hdr-env',
        x: '715',
        y: '42',
        textAnchor: 'end',
        fill: 'white',
        fillOpacity: '0.45',
        fontFamily: 'monospace',
        fontSize: '9',
        letterSpacing: '0.12em',
      },
      'ZONE: AIR-GAPPED HARDENED'
    ),
    React.createElement(
      'text',
      {
        key: 'hdr-sub',
        x: '45',
        y: '58',
        fill: 'white',
        fillOpacity: '0.35',
        fontFamily: 'monospace',
        fontSize: '9',
        letterSpacing: '0.1em',
      },
      'MULTI-LINGUAL OCR | ASYNC SQLITE WAL ETL | 4-QUADRANT AUDIT MATRIX'
    ),

    // ==========================================
    // 2. Upper Pipeline: Ingress -> OCR -> SQLite WAL
    // ==========================================

    // Stage 1: Document Scanner Ingress
    React.createElement('rect', {
      key: 'stage-ingress-frame',
      x: '38',
      y: '74',
      width: '182',
      height: '162',
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
        key: 'ingress-title',
        x: '48',
        y: '91',
        fill: 'white',
        fillOpacity: '0.55',
        fontFamily: 'monospace',
        fontSize: '8.5',
        fontWeight: 'bold',
        letterSpacing: '0.08em',
      },
      '01. SCANNER INGRESS'
    ),
    // Document Wireframe Representation
    React.createElement('rect', {
      key: 'doc-wireframe',
      x: '68',
      y: '104',
      width: '122',
      height: '116',
      rx: '2',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.5',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    // Document Photo Box
    React.createElement('rect', {
      key: 'doc-photo-box',
      x: '78',
      y: '114',
      width: '30',
      height: '36',
      rx: '1',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.45',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    // Document ID Text Lines
    React.createElement('path', {
      key: 'doc-lines',
      d: 'M 118,120 L 178,120 M 118,132 L 178,132 M 118,144 L 160,144 M 78,162 L 180,162 M 78,176 L 180,176 M 78,190 L 150,190 M 78,204 L 130,204',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.35',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    // Scanner Crop Reticles
    React.createElement('path', {
      key: 'doc-crop-reticles',
      d: 'M 62,112 L 62,98 L 76,98 M 184,98 L 196,98 L 196,112 M 62,212 L 62,226 L 76,226 M 184,226 L 196,226 L 196,212',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.55',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Ingress to OCR Connector Bus
    React.createElement('path', {
      key: 'bus-ingress-ocr',
      d: 'M 220,155 L 244,155',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.5',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'arrow-ingress-ocr',
      d: 'M 238,151 L 244,155 L 238,159',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.7',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Stage 2: Multi-Lingual OCR Engine
    React.createElement('rect', {
      key: 'stage-ocr-frame',
      x: '244',
      y: '74',
      width: '232',
      height: '162',
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
        key: 'ocr-title',
        x: '254',
        y: '91',
        fill: 'white',
        fillOpacity: '0.55',
        fontFamily: 'monospace',
        fontSize: '8.5',
        fontWeight: 'bold',
        letterSpacing: '0.08em',
      },
      '02. MULTI-LINGUAL OCR'
    ),
    // Preprocess / Layout Decomposition Sub-boxes
    React.createElement('rect', {
      key: 'ocr-box-bin',
      x: '254',
      y: '102',
      width: '102',
      height: '24',
      rx: '1',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.4',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'ocr-txt-bin',
        x: '305',
        y: '118',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.7',
        fontFamily: 'monospace',
        fontSize: '8',
      },
      'BINARIZE / DESKEW'
    ),
    React.createElement('rect', {
      key: 'ocr-box-layout',
      x: '364',
      y: '102',
      width: '102',
      height: '24',
      rx: '1',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.4',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'ocr-txt-layout',
        x: '415',
        y: '118',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.7',
        fontFamily: 'monospace',
        fontSize: '8',
      },
      'SEGMENTATION'
    ),

    // 4 Script Tokenizer Nodes
    // Devanagari Node
    React.createElement('rect', {
      key: 'script-deva-rect',
      x: '254',
      y: '136',
      width: '102',
      height: '22',
      rx: '1',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.35',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'script-deva-txt',
        x: '305',
        y: '151',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.65',
        fontFamily: 'monospace',
        fontSize: '8',
      },
      'DEVA [हिन्दी]'
    ),
    // Tamil Node
    React.createElement('rect', {
      key: 'script-taml-rect',
      x: '364',
      y: '136',
      width: '102',
      height: '22',
      rx: '1',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.35',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'script-taml-txt',
        x: '415',
        y: '151',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.65',
        fontFamily: 'monospace',
        fontSize: '8',
      },
      'TAML [தமிழ்]'
    ),
    // Bengali Node
    React.createElement('rect', {
      key: 'script-beng-rect',
      x: '254',
      y: '166',
      width: '102',
      height: '22',
      rx: '1',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.35',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'script-beng-txt',
        x: '305',
        y: '181',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.65',
        fontFamily: 'monospace',
        fontSize: '8',
      },
      'BENG [বাংলা]'
    ),
    // Latin Node
    React.createElement('rect', {
      key: 'script-latn-rect',
      x: '364',
      y: '166',
      width: '102',
      height: '22',
      rx: '1',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.35',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'script-latn-txt',
        x: '415',
        y: '181',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.65',
        fontFamily: 'monospace',
        fontSize: '8',
      },
      'LATN [ENGLISH]'
    ),

    // OCR Feature Vector Bus
    React.createElement('path', {
      key: 'ocr-feature-bus',
      d: 'M 254,204 L 466,204',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.25',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'ocr-conf-summary',
        x: '360',
        y: '222',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.5',
        fontFamily: 'monospace',
        fontSize: '8',
        letterSpacing: '0.06em',
      },
      'EXTRACT CONFIDENCE: 99.82%'
    ),

    // OCR to WAL Connector Bus
    React.createElement('path', {
      key: 'bus-ocr-wal',
      d: 'M 476,155 L 498,155',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.5',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'arrow-ocr-wal',
      d: 'M 492,151 L 498,155 L 492,159',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.7',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Stage 3: SQLite WAL Async ETL Queuing
    React.createElement('rect', {
      key: 'stage-wal-frame',
      x: '498',
      y: '74',
      width: '224',
      height: '162',
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
        key: 'wal-title',
        x: '508',
        y: '91',
        fill: 'white',
        fillOpacity: '0.55',
        fontFamily: 'monospace',
        fontSize: '8.5',
        fontWeight: 'bold',
        letterSpacing: '0.08em',
      },
      '03. SQLITE ASYNC WAL'
    ),
    // WAL Ring Buffer Pages
    React.createElement('rect', {
      key: 'wal-page-1',
      x: '508',
      y: '102',
      width: '204',
      height: '22',
      rx: '1',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.4',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'wal-page-1-txt',
        x: '516',
        y: '117',
        fill: 'white',
        fillOpacity: '0.7',
        fontFamily: 'monospace',
        fontSize: '8',
      },
      'WAL-PAGE [0x01]: COMMITTED (4KB)'
    ),

    React.createElement('rect', {
      key: 'wal-page-2',
      x: '508',
      y: '128',
      width: '204',
      height: '22',
      rx: '1',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.5',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'wal-page-2-txt',
        x: '516',
        y: '143',
        fill: 'white',
        fillOpacity: '0.8',
        fontFamily: 'monospace',
        fontSize: '8',
        fontWeight: 'bold',
      },
      'WAL-PAGE [0x02]: INGESTION ETL [ACTIVE]'
    ),

    React.createElement('rect', {
      key: 'wal-page-3',
      x: '508',
      y: '154',
      width: '204',
      height: '22',
      rx: '1',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.3',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'wal-page-3-txt',
        x: '516',
        y: '169',
        fill: 'white',
        fillOpacity: '0.55',
        fontFamily: 'monospace',
        fontSize: '8',
      },
      'WAL-PAGE [0x03]: RING BUFFER STAGING'
    ),

    // Checkpoint Pointer and Target
    React.createElement('path', {
      key: 'checkpoint-flow',
      d: 'M 610,176 L 610,192',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.45',
      strokeWidth: '1',
      strokeDasharray: '2 2',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('rect', {
      key: 'wal-checkpoint-box',
      x: '508',
      y: '192',
      width: '204',
      height: '34',
      rx: '1',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.45',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'wal-chk-1',
        x: '610',
        y: '206',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.7',
        fontFamily: 'monospace',
        fontSize: '8',
        fontWeight: 'bold',
      },
      'WAL-CHECKPOINT -> ENCRYPTED STORAGE'
    ),
    React.createElement(
      'text',
      {
        key: 'wal-chk-2',
        x: '610',
        y: '220',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.45',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      'ZERO DATA LOSS // SHARD RESILIENT'
    ),

    // ==========================================
    // 3. Lower Section: Telemetry & Audit Matrix
    // ==========================================
    React.createElement('rect', {
      key: 'matrix-frame',
      x: '38',
      y: '254',
      width: '684',
      height: '264',
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
        key: 'matrix-title',
        x: '50',
        y: '272',
        fill: 'white',
        fillOpacity: '0.6',
        fontFamily: 'monospace',
        fontSize: '9.5',
        fontWeight: 'bold',
        letterSpacing: '0.1em',
      },
      'AIR-GAP TELEMETRY & AUDIT MATRIX'
    ),
    React.createElement(
      'text',
      {
        key: 'matrix-status',
        x: '710',
        y: '272',
        textAnchor: 'end',
        fill: 'white',
        fillOpacity: '0.7',
        fontFamily: 'monospace',
        fontSize: '9',
        letterSpacing: '0.08em',
      },
      'PIPELINE DRIFT: 0.002% [NOMINAL]'
    ),

    // Quadrant Division Axes (Intersection at 380, 396)
    React.createElement('line', {
      key: 'axis-h-left',
      x1: '50',
      y1: '396',
      x2: '360',
      y2: '396',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.3',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('line', {
      key: 'axis-h-right',
      x1: '400',
      y1: '396',
      x2: '710',
      y2: '396',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.3',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('line', {
      key: 'axis-v-top',
      x1: '380',
      y1: '286',
      x2: '380',
      y2: '376',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.3',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('line', {
      key: 'axis-v-bottom',
      x1: '380',
      y1: '416',
      x2: '380',
      y2: '506',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.3',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),

    // Center Crosshair & Reticle
    React.createElement('circle', {
      key: 'center-reticle-ring',
      cx: '380',
      cy: '396',
      r: '16',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.5',
      strokeWidth: '1',
      strokeDasharray: '3 3',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('circle', {
      key: 'center-reticle-core',
      cx: '380',
      cy: '396',
      r: '2.5',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.8',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('path', {
      key: 'center-reticle-cross',
      d: 'M 372,396 L 388,396 M 380,388 L 380,404',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.6',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),

    // ----------------------------------------------------
    // Q1 (Top-Right): Ingestion Throughput Vector
    // ----------------------------------------------------
    React.createElement(
      'text',
      {
        key: 'q1-title',
        x: '410',
        y: '298',
        fill: 'white',
        fillOpacity: '0.7',
        fontFamily: 'monospace',
        fontSize: '8.5',
        fontWeight: 'bold',
      },
      'Q1: INGESTION THROUGHPUT (~1.2M DOCS/DAY)'
    ),
    React.createElement(
      'text',
      {
        key: 'q1-rate',
        x: '410',
        y: '312',
        fill: 'white',
        fillOpacity: '0.45',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      'STREAM RATE: 14.2 BATCH/SEC [ASYNC ETL]'
    ),
    // Throughput Step Curve & Data Nodes
    React.createElement('path', {
      key: 'q1-curve',
      d: 'M 410,382 L 445,372 L 480,360 L 525,352 L 565,338 L 615,326 L 685,310',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.7',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    ...[
      { x: 410, y: 382 },
      { x: 445, y: 372 },
      { x: 480, y: 360 },
      { x: 525, y: 352 },
      { x: 565, y: 338 },
      { x: 615, y: 326 },
      { x: 685, y: 310 },
    ].map((pt, i) =>
      React.createElement('circle', {
        key: `q1-dot-${i}`,
        cx: pt.x,
        cy: pt.y,
        r: '2',
        fill: 'none',
        stroke: 'white',
        strokeOpacity: '0.8',
        vectorEffect: 'non-scaling-stroke',
      })
    ),

    // ----------------------------------------------------
    // Q2 (Top-Left): Latency Profile (p99 < 42ms)
    // ----------------------------------------------------
    React.createElement(
      'text',
      {
        key: 'q2-title',
        x: '50',
        y: '298',
        fill: 'white',
        fillOpacity: '0.7',
        fontFamily: 'monospace',
        fontSize: '8.5',
        fontWeight: 'bold',
      },
      'Q2: LATENCY PROFILE (p99 < 42ms)'
    ),
    React.createElement(
      'text',
      {
        key: 'q2-median',
        x: '50',
        y: '312',
        fill: 'white',
        fillOpacity: '0.45',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      'MEDIAN p50: 16.4ms | p99: 41.8ms'
    ),
    // Latency Distribution Envelope
    React.createElement('path', {
      key: 'q2-density-curve',
      d: 'M 65,382 C 105,382 145,368 175,324 C 195,296 215,296 235,334 C 255,368 290,382 345,382',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.65',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    // Baseline and p99 marker
    React.createElement('line', {
      key: 'q2-baseline',
      x1: '65',
      y1: '382',
      x2: '345',
      y2: '382',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.2',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('line', {
      key: 'q2-p99-cursor',
      x1: '280',
      y1: '340',
      x2: '280',
      y2: '386',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.7',
      strokeWidth: '1',
      strokeDasharray: '2 2',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'q2-p99-label',
        x: '280',
        y: '334',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.7',
        fontFamily: 'monospace',
        fontSize: '7',
      },
      'p99=41.8ms'
    ),

    // ----------------------------------------------------
    // Q3 (Bottom-Left): Extraction Confidence Matrix
    // ----------------------------------------------------
    React.createElement(
      'text',
      {
        key: 'q3-title',
        x: '50',
        y: '416',
        fill: 'white',
        fillOpacity: '0.7',
        fontFamily: 'monospace',
        fontSize: '8.5',
        fontWeight: 'bold',
      },
      'Q3: OCR ACCURACY & CONFIDENCE'
    ),
    React.createElement(
      'text',
      {
        key: 'q3-metric',
        x: '50',
        y: '430',
        fill: 'white',
        fillOpacity: '0.45',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      'GLOBAL AVERAGE: 99.82% ACCURACY'
    ),
    // Polar / Radar Target
    React.createElement('circle', {
      key: 'radar-ring-1',
      cx: '185',
      cy: '464',
      r: '16',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.15',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('circle', {
      key: 'radar-ring-2',
      cx: '185',
      cy: '464',
      r: '32',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.18',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('line', {
      key: 'radar-axis-h',
      x1: '145',
      y1: '464',
      x2: '225',
      y2: '464',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.2',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('line', {
      key: 'radar-axis-v',
      x1: '185',
      y1: '424',
      x2: '185',
      y2: '504',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.2',
      strokeWidth: '1',
      vectorEffect: 'non-scaling-stroke',
    }),
    // Radar Confidence Polygon
    React.createElement('polygon', {
      key: 'radar-poly',
      points: '185,434 216,462 188,494 154,466',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.7',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'radar-lbl-deva',
        x: '185',
        y: '430',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.55',
        fontFamily: 'monospace',
        fontSize: '7',
      },
      'DEV: 99.9%'
    ),
    React.createElement(
      'text',
      {
        key: 'radar-lbl-taml',
        x: '220',
        y: '467',
        fill: 'white',
        fillOpacity: '0.55',
        fontFamily: 'monospace',
        fontSize: '7',
      },
      'TAM: 99.7%'
    ),
    React.createElement(
      'text',
      {
        key: 'radar-lbl-beng',
        x: '185',
        y: '504',
        textAnchor: 'middle',
        fill: 'white',
        fillOpacity: '0.55',
        fontFamily: 'monospace',
        fontSize: '7',
      },
      'BEN: 99.8%'
    ),
    React.createElement(
      'text',
      {
        key: 'radar-lbl-latn',
        x: '150',
        y: '467',
        textAnchor: 'end',
        fill: 'white',
        fillOpacity: '0.55',
        fontFamily: 'monospace',
        fontSize: '7',
      },
      'LAT: 99.9%'
    ),

    // ----------------------------------------------------
    // Q4 (Bottom-Right): Model Stability & Drift
    // ----------------------------------------------------
    React.createElement(
      'text',
      {
        key: 'q4-title',
        x: '410',
        y: '416',
        fill: 'white',
        fillOpacity: '0.7',
        fontFamily: 'monospace',
        fontSize: '8.5',
        fontWeight: 'bold',
      },
      'Q4: MODEL STABILITY & DRIFT BOUND'
    ),
    React.createElement(
      'text',
      {
        key: 'q4-var',
        x: '410',
        y: '430',
        fill: 'white',
        fillOpacity: '0.45',
        fontFamily: 'monospace',
        fontSize: '7.5',
      },
      'VARIANCE: σ² < 0.003 [BOUND CORRIDOR]'
    ),
    // Upper and Lower Bound Lines
    React.createElement('line', {
      key: 'q4-bound-upper',
      x1: '410',
      y1: '450',
      x2: '690',
      y2: '450',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.25',
      strokeWidth: '1',
      strokeDasharray: '3 3',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement('line', {
      key: 'q4-bound-lower',
      x1: '410',
      y1: '482',
      x2: '690',
      y2: '482',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.25',
      strokeWidth: '1',
      strokeDasharray: '3 3',
      vectorEffect: 'non-scaling-stroke',
    }),
    // Drift Signal Path
    React.createElement('path', {
      key: 'q4-signal',
      d: 'M 410,466 L 440,463 L 470,468 L 505,464 L 540,467 L 575,463 L 610,466 L 650,464 L 690,466',
      fill: 'none',
      stroke: 'white',
      strokeOpacity: '0.7',
      strokeWidth: '1.25',
      vectorEffect: 'non-scaling-stroke',
    }),
    React.createElement(
      'text',
      {
        key: 'q4-corridor-lbl',
        x: '690',
        y: '446',
        textAnchor: 'end',
        fill: 'white',
        fillOpacity: '0.45',
        fontFamily: 'monospace',
        fontSize: '7',
      },
      '+0.05% THRESHOLD'
    ),
    React.createElement(
      'text',
      {
        key: 'q4-corridor-lower-lbl',
        x: '690',
        y: '492',
        textAnchor: 'end',
        fill: 'white',
        fillOpacity: '0.45',
        fontFamily: 'monospace',
        fontSize: '7',
      },
      '-0.05% THRESHOLD'
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

export default IngestionGraphArt;
