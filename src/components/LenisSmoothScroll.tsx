import { useEffect, useRef } from "react";

/**
 * Global Lenis smooth scroll integration for the whole app.
 * This component should be rendered once at the root (e.g., in App.tsx).
 */
const LenisSmoothScroll = () => {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    let animationFrame: number;
    let isMounted = true;

    import("lenis").then(({ default: Lenis }) => {
      if (!isMounted) return;
      if (!lenisRef.current) {
        lenisRef.current = new Lenis({
          duration: 1.2,
          touchMultiplier: 2,
        });
      }

      function raf(time: number) {
        lenisRef.current?.raf(time);
        animationFrame = requestAnimationFrame(raf);
      }
      animationFrame = requestAnimationFrame(raf);
    });

    return () => {
      isMounted = false;
      if (animationFrame) cancelAnimationFrame(animationFrame);
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  return null;
};

export default LenisSmoothScroll;
