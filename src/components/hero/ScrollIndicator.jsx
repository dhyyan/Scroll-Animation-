import React from 'react';
import { motion, useTransform } from 'framer-motion';

export default function ScrollIndicator({ scrollYProgress }) {
  // Direct GPU opacity transform (Zero React re-renders)
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center gap-2 translate-z-0 will-change-transform"
    >
      <span className="font-mono-tech text-[10px] tracking-[0.25em] text-[#9A9A96] uppercase">
        SCROLL TO EXPLORE
      </span>

      {/* Animated scroll line */}
      <div className="w-[1px] h-8 bg-gradient-to-b from-[#F5C400] to-transparent relative overflow-hidden">
        <motion.div
          animate={{ y: [0, 32, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-full h-1/2 bg-[#FFD52A]"
        />
      </div>
    </motion.div>
  );
}
