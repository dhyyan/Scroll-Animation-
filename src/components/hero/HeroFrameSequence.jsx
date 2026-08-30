import React, { useRef, useEffect } from 'react';

/**
 * 60 FPS HTML5 Canvas Frame Sequence Renderer
 * - Zero React state updates on scroll.
 * - Hardware-accelerated requestAnimationFrame loop.
 * - Pre-calculated and cached layout dimensions to eliminate layout thrashing.
 * - Smooth frame interpolation lerp for fluid scrubbing.
 */
export default function HeroFrameSequence({ images, scrollYProgress, totalFrames }) {
  const canvasRef = useRef(null);
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const renderedFrameRef = useRef(-1);
  const rafIdRef = useRef(null);
  const dimensionsRef = useRef({
    width: 0,
    height: 0,
    dpr: 1,
    drawWidth: 0,
    drawHeight: 0,
    offsetX: 0,
    offsetY: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });

    // 1. Recalculate & Cache Canvas Layout Dimensions (Triggered ONLY on Resize)
    const updateDimensions = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Update Canvas Pixel Buffer
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Standard 16:9 vehicle aspect ratio cover calculation
      const imgAspect = 16 / 9; // Default vehicle frame aspect ratio
      const canvasAspect = width / height;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasAspect > imgAspect) {
        drawWidth = width * dpr;
        drawHeight = (width / imgAspect) * dpr;
        offsetX = 0;
        offsetY = ((height * dpr) - drawHeight) / 2;
      } else {
        drawHeight = height * dpr;
        drawWidth = (height * imgAspect) * dpr;
        offsetX = ((width * dpr) - drawWidth) / 2;
        offsetY = 0;
      }

      dimensionsRef.current = {
        width,
        height,
        dpr,
        drawWidth,
        drawHeight,
        offsetX,
        offsetY,
      };

      // Force instant redrawing of current frame after resize
      renderedFrameRef.current = -1;
      drawFrame(Math.round(currentFrameRef.current));
    };

    // 2. High-Performance Frame Drawing Function (Zero DOM reads inside)
    const drawFrame = (frameIdx) => {
      if (!images || images.length === 0) return;

      const clampedIndex = Math.max(0, Math.min(frameIdx, totalFrames - 1));
      const img = images[clampedIndex] || images[0];

      if (!img) return;

      const { drawWidth, drawHeight, offsetX, offsetY, width, height, dpr } = dimensionsRef.current;

      // Fill canvas background
      ctx.fillStyle = '#0A0A0A';
      ctx.fillRect(0, 0, width * dpr, height * dpr);

      // Render pre-decoded image onto hardware-accelerated canvas context
      if (img.complete && img.naturalWidth !== 0) {
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }

      renderedFrameRef.current = clampedIndex;
    };

    // 3. Hardware-Accelerated requestAnimationFrame Loop
    const tick = () => {
      // Micro-lerp (0.35) for smooth scrolling without scroll lag
      const diff = targetFrameRef.current - currentFrameRef.current;

      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current += diff * 0.35;
      } else {
        currentFrameRef.current = targetFrameRef.current;
      }

      const frameToRender = Math.round(currentFrameRef.current);

      if (frameToRender !== renderedFrameRef.current) {
        drawFrame(frameToRender);
      }

      rafIdRef.current = requestAnimationFrame(tick);
    };

    // Initialize dimensions and start RAF loop
    updateDimensions();
    rafIdRef.current = requestAnimationFrame(tick);

    // 4. Subscribe directly to Framer Motion scrollYProgress (Bypassing React State)
    const unsubscribeScroll = scrollYProgress.on('change', (latest) => {
      const targetIdx = Math.min(
        Math.floor(latest * (totalFrames - 1)),
        totalFrames - 1
      );
      targetFrameRef.current = targetIdx;
    });

    // 5. Debounced Resize Handler
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        updateDimensions();
      }, 100);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
      unsubscribeScroll();
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [images, scrollYProgress, totalFrames]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-[#0A0A0A] translate-z-0 will-change-transform">
      {/* Background Smoky Gradient Overlay */}
      <div className="absolute inset-0 bg-studio-radial opacity-90" />

      {/* Single 60 FPS HTML5 Canvas */}
      <canvas
        ref={canvasRef}
        className="relative z-10 w-full h-full block object-cover translate-z-0 will-change-transform"
      />

      {/* Subtle Vignette Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,#0A0A0A_100%)] opacity-70" />
    </div>
  );
}
