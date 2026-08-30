import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-4 transition-all duration-300 pointer-events-auto">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-panel px-6 py-3 rounded-full border border-white/10 shadow-2xl">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#A98200] to-[#FFD52A] flex items-center justify-center font-extrabold text-black text-sm tracking-tighter shadow-lg shadow-[#F5C400]/20">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-[0.2em] text-sm text-[#F2F2F0] group-hover:text-[#F5C400] transition-colors">
              APEX<span className="text-[#F5C400] font-light">V12</span>
            </span>
            <span className="font-mono-tech text-[8px] text-[#9A9A96] tracking-widest uppercase">
              HYPERCAR LABS
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono-tech text-xs tracking-widest text-[#9A9A96]">
          <a href="#performance" className="hover:text-[#F5C400] transition-colors uppercase">
            PERFORMANCE
          </a>
          <a href="#engineering" className="hover:text-[#F5C400] transition-colors uppercase">
            ENGINEERING
          </a>
          <a href="#features" className="hover:text-[#F5C400] transition-colors uppercase">
            TECHNOLOGY
          </a>
          <a href="#cta" className="hover:text-[#F5C400] transition-colors uppercase">
            SPECIFICATIONS
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#F2F2F0] hover:text-[#F5C400]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-6 glass-panel rounded-2xl border border-white/10 flex flex-col gap-4 text-center font-mono-tech text-xs tracking-widest">
          <a
            href="#performance"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-[#9A9A96] hover:text-[#F5C400]"
          >
            PERFORMANCE
          </a>
          <a
            href="#engineering"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-[#9A9A96] hover:text-[#F5C400]"
          >
            ENGINEERING
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-[#9A9A96] hover:text-[#F5C400]"
          >
            TECHNOLOGY
          </a>
          <a
            href="#cta"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-[#9A9A96] hover:text-[#F5C400]"
          >
            SPECIFICATIONS
          </a>
        </div>
      )}
    </header>
  );
}
