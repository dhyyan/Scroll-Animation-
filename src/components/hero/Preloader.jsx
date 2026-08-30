import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ progress, firstFrameLoaded }) {
  // Dismiss loading as soon as initial frame is ready (fast ~200ms unlock)
  const isReady = firstFrameLoaded || progress >= 5;

  return (
    <AnimatePresence>
      {!isReady && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4, ease: 'easeOut' } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A]/80 backdrop-blur-md p-4"
        >
          {/* Small Sleek Compact Loading Card */}
          <div className="flex flex-col items-center bg-[#17191B] border border-white/10 px-6 py-5 rounded-xl shadow-2xl max-w-xs w-full text-center">
            {/* Minimal SVG Spinner */}
            <div className="relative flex items-center justify-center w-8 h-8 mb-3">
              <svg
                className="animate-spin w-8 h-8 text-[#F5C400]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-20"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  className="opacity-90"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </div>

            <span className="font-mono-tech text-[10px] tracking-[0.2em] text-[#F5C400] uppercase font-semibold mb-1">
              APEX LABS
            </span>

            <p className="font-sans text-xs font-medium text-[#F2F2F0] tracking-wider uppercase">
              LOADING EXPERIENCE
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
