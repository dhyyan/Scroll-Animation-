import { useState, useEffect, useRef } from 'react';

/**
 * High-Performance Automotive Hero Frame Preloader Hook
 * - Loads Frame 001 immediately so hero displays right away.
 * - Background preloads remaining 299 frames.
 * - Uses HTMLImageElement.decode() to decode images onto GPU memory before scrolling.
 */
export function useImagePreloader(totalFramesCount = 300) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const imagesRef = useRef([]);

  useEffect(() => {
    let isMounted = true;
    const images = new Array(totalFramesCount);
    imagesRef.current = images;

    const framePaths = Array.from({ length: totalFramesCount }, (_, i) => {
      const frameNum = String(i + 1).padStart(3, '0');
      return `/images/herosection/ezgif-frame-${frameNum}.png`;
    });

    // 1. Load Frame 1 immediately
    const firstImg = new Image();
    firstImg.src = framePaths[0];

    const loadFirstFrame = async () => {
      try {
        if ('decode' in firstImg) {
          await firstImg.decode();
        }
      } catch (e) {
        // Fallback for decoding errors
      }
      if (isMounted) {
        images[0] = firstImg;
        setFirstFrameLoaded(true);
      }
    };

    firstImg.onload = loadFirstFrame;
    if (firstImg.complete) {
      loadFirstFrame();
    }

    // 2. Preload remaining frames in background with concurrency limit
    let loadedCount = 0;

    const loadRemainingFrames = async () => {
      const BATCH_SIZE = 12; // Controlled parallel loading to prevent network throttling
      
      for (let i = 0; i < framePaths.length; i += BATCH_SIZE) {
        if (!isMounted) break;

        const batch = framePaths.slice(i, i + BATCH_SIZE);
        
        await Promise.all(
          batch.map(async (path, batchIdx) => {
            const index = i + batchIdx;
            const img = new Image();
            img.src = path;

            try {
              if ('decode' in img) {
                await img.decode();
              }
            } catch (e) {
              // Ignore decode fallback
            }

            images[index] = img;
            loadedCount++;

            if (isMounted) {
              const currentProgress = Math.round((loadedCount / totalFramesCount) * 100);
              setProgress(currentProgress);
            }
          })
        );
      }

      if (isMounted) {
        setIsLoaded(true);
      }
    };

    loadRemainingFrames();

    return () => {
      isMounted = false;
    };
  }, [totalFramesCount]);

  return {
    images: imagesRef.current,
    totalFrames: totalFramesCount,
    firstFrameLoaded,
    isLoaded,
    progress,
  };
}
