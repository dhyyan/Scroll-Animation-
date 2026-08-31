import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { useImagePreloader } from '../../hooks/useImagePreloader';
import Preloader from './Preloader';
import HeroFrameSequence from './HeroFrameSequence';
import HeroText from './HeroText';
import TechnicalOverlay from './TechnicalOverlay';
import ScrollIndicator from './ScrollIndicator';

export default function CinematicHero() {
  const heroRef = useRef(null);

  // Preload all 300 sequential frames with immediate frame 1 render & GPU background decoding
  const { images, progress, firstFrameLoaded, totalFrames } = useImagePreloader(300);

  // Bind scroll progress MotionValue directly to hero container height (Zero React State)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end end'],
  });

  return (
    <>
      {/* Small Fast Loading Screen */}
      <Preloader progress={progress} firstFrameLoaded={firstFrameLoaded} />

      {/* Main 600vh Scroll Container */}
      <section ref={heroRef} className="relative w-full h-[600vh] bg-[#0A0A0A]">
        {/* Sticky 100vh / 100dvh Viewport */}
        <div className="sticky top-0 w-full h-screen h-[100dvh] overflow-hidden flex flex-col justify-between translate-z-0 will-change-transform">
          {/* HTML5 Canvas Frame Sequence (Driven via MotionValue & RAF loop) */}
          <HeroFrameSequence
            images={images}
            scrollYProgress={scrollYProgress}
            totalFrames={totalFrames}
          />

          {/* Technical Engineering Overlay (Driven via MotionValue) */}
          <TechnicalOverlay
            scrollYProgress={scrollYProgress}
            totalFrames={totalFrames}
          />

          {/* Animated Chapter Text Overlay (Driven via MotionValue GPU transforms) */}
          <HeroText scrollYProgress={scrollYProgress} />

          {/* Initial Scroll Prompt Indicator */}
          <ScrollIndicator scrollYProgress={scrollYProgress} />
        </div>
      </section>
    </>
  );
}
