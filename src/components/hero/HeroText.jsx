import React from 'react';
import { motion, useTransform } from 'framer-motion';

const chapters = [
  {
    id: 'ch-01',
    start: 0.00,
    end: 0.18,
    label: '01 // ARCHITECTURE',
    titleLine1: 'ENGINEERED',
    titleLine2: 'WITHOUT COMPROMISE',
    sub: 'Precision meets performance.',
    position: 'left',
  },
  {
    id: 'ch-02',
    start: 0.18,
    end: 0.38,
    label: '02 // DECONSTRUCTION',
    titleLine1: 'EVERY COMPONENT',
    titleLine2: 'HAS A PURPOSE',
    sub: 'Explore the architecture beneath the surface.',
    position: 'right',
  },
  {
    id: 'ch-03',
    start: 0.38,
    end: 0.58,
    label: '03 // POWERTRAIN',
    titleLine1: 'BUILT',
    titleLine2: 'FROM THE INSIDE OUT',
    sub: 'Performance begins with engineering.',
    position: 'left',
  },
  {
    id: 'ch-04',
    start: 0.58,
    end: 0.78,
    label: '04 // AERODYNAMICS',
    titleLine1: 'PRECISION',
    titleLine2: 'IN MOTION',
    sub: 'Dynamic chassis decoupling & active aero integration.',
    position: 'right',
  },
  {
    id: 'ch-05',
    start: 0.78,
    end: 1.00,
    label: '05 // SYNTHESIS',
    titleLine1: 'REASSEMBLED',
    titleLine2: 'TO PERFORM',
    sub: 'The ultimate synthesis of power and intelligence.',
    position: 'left',
  },
];

function ChapterItem({ ch, scrollYProgress }) {
  const fadeDuration = 0.04;
  
  // Transform opacity and y directly on GPU via Framer Motion MotionValues (Zero React Re-renders)
  const opacity = useTransform(
    scrollYProgress,
    [ch.start, ch.start + fadeDuration, ch.end - fadeDuration, ch.end],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [ch.start, ch.start + fadeDuration, ch.end - fadeDuration, ch.end],
    [30, 0, 0, -20]
  );

  const isRight = ch.position === 'right';

  return (
    <motion.div
      style={{ opacity, y }}
      className={`absolute bottom-12 md:bottom-24 max-w-[calc(100vw-2.5rem)] sm:max-w-xl translate-z-0 will-change-transform ${
        isRight ? 'right-4 sm:right-8 md:right-16 text-right' : 'left-4 sm:left-8 md:left-16 text-left'
      }`}
    >
      {/* Chapter Label */}
      <div
        className={`inline-flex items-center gap-2 mb-2 sm:mb-3 px-2.5 py-1 rounded bg-[#17191B]/90 border border-white/10 text-[10px] sm:text-xs font-mono-tech tracking-widest text-[#F5C400] ${
          isRight ? 'flex-row-reverse' : ''
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#F5C400] animate-pulse" />
        {ch.label}
      </div>

      {/* Main Headline */}
      <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold tracking-[0.04em] sm:tracking-[0.06em] leading-[1.1] sm:leading-[1.05] uppercase text-[#F2F2F0] drop-shadow-2xl">
        <div>{ch.titleLine1}</div>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F0] via-[#F5C400] to-[#FFD52A]">
          {ch.titleLine2}
        </div>
      </h1>

      {/* Supporting Description */}
      <p className="mt-2 sm:mt-4 text-xs sm:text-base md:text-lg text-[#9A9A96] font-light tracking-wider leading-relaxed max-w-xs sm:max-w-md">
        {ch.sub}
      </p>
    </motion.div>
  );
}

export default function HeroText({ scrollYProgress }) {
  return (
    <div className="absolute inset-0 z-30 pointer-events-none flex flex-col justify-between p-4 sm:p-6 md:p-12">
      {chapters.map((ch) => (
        <ChapterItem key={ch.id} ch={ch} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
}
