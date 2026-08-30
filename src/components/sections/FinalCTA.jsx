import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, Sliders } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="cta" className="py-32 px-6 md:px-12 bg-[#0A0A0A] relative z-20 text-[#F2F2F0] border-t border-white/10 overflow-hidden">
      {/* Background Yellow Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5C400]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono-tech text-xs tracking-[0.3em] text-[#F5C400] uppercase mb-4 inline-block">
            THE APEX V12 HYPERCAR
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-none text-[#F2F2F0] mb-8">
            BUILT TO BE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2F2F0] via-[#F5C400] to-[#FFD52A]">
              EXPERIENCED.
            </span>
          </h2>

          <p className="text-[#9A9A96] text-base md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Limited production allocation. Configure your bespoke engineering specification or reserve a private track preview.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Button */}
            <a
              href="#"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#F5C400] text-black font-extrabold font-mono-tech text-xs tracking-widest uppercase hover:bg-[#FFD52A] transition-all shadow-xl shadow-[#F5C400]/20 flex items-center justify-center gap-2 group hover:scale-105"
            >
              <Sliders className="w-4 h-4" />
              EXPLORE THE MACHINE
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary Button */}
            <a
              href="#"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#17191B] text-[#F2F2F0] border border-white/10 font-extrabold font-mono-tech text-xs tracking-widest uppercase hover:bg-[#222528] hover:border-[#F5C400]/40 transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-[#F5C400]" />
              TECHNICAL SPEC SHEET
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
