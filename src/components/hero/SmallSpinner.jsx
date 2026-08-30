import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SmallSpinner({ progress, isLoaded }) {
  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10, transition: { duration: 0.5 } }}
          className="fixed top-24 left-6 md:left-12 z-35 flex items-center gap-3 bg-[#17191B]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#F5C400]/30 shadow-lg pointer-events-none"
        >
          {/* Small SVG Spinner */}
          <svg
            className="animate-spin w-3.5 h-3.5 text-[#F5C400]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>

          {/* Progress Status */}
          <div className="font-mono-tech text-[10px] tracking-wider text-[#9A9A96]">
            LOADING FRAMES <span className="text-[#F5C400] font-bold">{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
