import { useEffect, useRef } from "react";

const DURATION = 700;
const COOLDOWN = 300;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * Replaces the browser's native (short, fixed-duration) smooth-scroll with a
 * longer custom-eased animation, while preserving the existing "one wheel
 * gesture = jump straight to the next/previous section" snap behavior.
 */
export function useSnapScroll() {
  const animatingRef = useRef(false);
  const cooldownRef = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const getSectionTops = () =>
      Array.from(document.querySelectorAll<HTMLElement>("section")).map(
        (section) => section.offsetTop,
      );

    const animateTo = (targetY: number) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      if (Math.abs(distance) < 1) return;

      animatingRef.current = true;
      const startTime = performance.now();

      const step = (now: number) => {
        const progress = Math.min((now - startTime) / DURATION, 1);
        window.scrollTo(0, startY + distance * easeOutCubic(progress));

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          animatingRef.current = false;
          cooldownRef.current = true;
          window.setTimeout(() => {
            cooldownRef.current = false;
          }, COOLDOWN);
        }
      };

      requestAnimationFrame(step);
    };

    const handleWheel = (event: WheelEvent) => {
      if (animatingRef.current || cooldownRef.current) {
        event.preventDefault();
        return;
      }

      if (event.deltaY === 0) return;

      const sectionTops = getSectionTops();
      if (sectionTops.length === 0) return;

      const currentY = window.scrollY;
      let currentIndex = 0;
      let minDiff = Infinity;
      sectionTops.forEach((top, index) => {
        const diff = Math.abs(top - currentY);
        if (diff < minDiff) {
          minDiff = diff;
          currentIndex = index;
        }
      });

      const direction = event.deltaY > 0 ? 1 : -1;
      const targetIndex = Math.min(
        Math.max(currentIndex + direction, 0),
        sectionTops.length - 1,
      );

      if (targetIndex === currentIndex) return;

      event.preventDefault();
      animateTo(sectionTops[targetIndex]);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);
}
