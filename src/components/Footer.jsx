import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 py-12 px-6 md:px-12 text-[#9A9A96] font-mono-tech text-xs relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-[#F5C400] text-black font-extrabold flex items-center justify-center text-[10px]">
            A
          </div>
          <span className="text-[#F2F2F0] font-bold tracking-widest uppercase">
            APEX AUTOMOTIVE LABS
          </span>
          <span className="text-[#5E6264]">© {new Date().getFullYear()}</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] tracking-widest uppercase">
          <a href="#performance" className="hover:text-[#F5C400] transition-colors">
            TELEMETRY
          </a>
          <a href="#engineering" className="hover:text-[#F5C400] transition-colors">
            ARCHITECTURE
          </a>
          <a href="#features" className="hover:text-[#F5C400] transition-colors">
            SPECIFICATIONS
          </a>
          <a href="#" className="hover:text-[#F5C400] transition-colors">
            PRESS KIT
          </a>
          <a href="#" className="hover:text-[#F5C400] transition-colors">
            PRIVACY
          </a>
        </div>

        {/* Technical Stamp */}
        <div className="text-[10px] text-[#5E6264] tracking-widest uppercase">
          FRAME DYNAMICS // 300 SEQUENTIAL STILLS
        </div>
      </div>
    </footer>
  );
}
