import React from 'react';
import Navbar from './components/Navbar';
import CinematicHero from './components/hero/CinematicHero';
import Performance from './components/sections/Performance';
import Engineering from './components/sections/Engineering';
import Features from './components/sections/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F2F2F0] font-sans selection:bg-[#F5C400] selection:text-black">
      {/* Navigation Overlay */}
      <Navbar />

      {/* Main 600vh Cinematic Hero with Pinned HTML5 Canvas Frame Sequence */}
      <main>
        <CinematicHero />

        {/* Subsequent Product Sections */}
        <Performance />
        <Engineering />
        <Features />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
