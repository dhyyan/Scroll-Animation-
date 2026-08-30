import React from 'react';
import { motion, useTransform } from 'framer-motion';

const annotations = [
  {
    id: 'powertrain',
    num: '01',
    label: 'POWERTRAIN',
    spec: '4.0L TWIN-TURBO V8 + ELECTRIC HYBRID',
    left: '22%',
    top: '32%',
    minProgress: 0.30,
    maxProgress: 0.72,
  },
  {
    id: 'suspension',
    num: '02',
    label: 'ACTIVE SUSPENSION',
    spec: 'ADAPTIVE DOUBLE-WISHBONE PUSHROD',
    left: '68%',
    top: '40%',
    minProgress: 0.35,
    maxProgress: 0.75,
  },
  {
    id: 'braking',
    num: '03',
    label: 'BRAKING SYSTEM',
    spec: 'CARBON-CERAMIC 420MM MONOBLOC',
    left: '30%',
    top: '65%',
    minProgress: 0.40,
    maxProgress: 0.70,
  },
  {
    id: 'chassis',
    num: '04',
    label: 'MONOCOQUE CHASSIS',
    spec: 'FULL CARBON FIBER ARCHITECTURE',
    left: '72%',
    top: '60%',
    minProgress: 0.28,
    maxProgress: 0.68,
  },
];

function AnnotationCallout({ item, scrollYProgress }) {
  const fade = 0.03;
  const opacity = useTransform(
    scrollYProgress,
    [item.minProgress - fade, item.minProgress, item.maxProgress, item.maxProgress + fade],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [item.minProgress - fade, item.minProgress, item.maxProgress, item.maxProgress + fade],
    [0.85, 1, 1, 0.85]
  );

  return (
    <motion.div
      style={{ opacity, scale, left: item.left, top: item.top }}
      className="absolute hidden md:flex items-center gap-3 transform -translate-x-1/2 -translate-y-1/2 translate-z-0 will-change-transform"
    >
      {/* Target Reticle */}
      <div className="relative flex items-center justify-center w-6 h-6">
        <div className="absolute inset-0 rounded-full border border-[#F5C400] animate-ping opacity-40" />
        <div className="w-2 h-2 bg-[#F5C400] rounded-full" />
      </div>

      {/* Connecting Target Line */}
      <div className="w-12 h-[1px] bg-gradient-to-r from-[#F5C400] to-transparent" />

      {/* Technical Annotation Card */}
      <div className="bg-[#17191B]/90 backdrop-blur-md border border-[#F5C400]/30 px-3 py-2 rounded-sm shadow-xl max-w-xs">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-1 mb-1">
          <span className="font-mono-tech text-[10px] text-[#F5C400] tracking-widest uppercase">
            {item.label}
          </span>
          <span className="font-mono-tech text-[9px] text-[#5E6264]">{item.num}</span>
        </div>
        <p className="font-mono-tech text-[10px] text-[#F2F2F0] tracking-tight">
          {item.spec}
        </p>
      </div>
    </motion.div>
  );
}

export default function TechnicalOverlay({ scrollYProgress }) {
  return (
    <div className="absolute inset-0 z-25 pointer-events-none overflow-hidden">
      {/* Callouts */}
      {annotations.map((item) => (
        <AnnotationCallout key={item.id} item={item} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
}
