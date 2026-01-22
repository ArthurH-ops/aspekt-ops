import { useEffect, useRef, useState, useCallback } from 'react';

// Shared IntersectionObserver for better performance
const observerMap = new Map<number, IntersectionObserver>();

function getObserver(threshold: number, callback: (entry: IntersectionObserverEntry) => void): IntersectionObserver {
  if (!observerMap.has(threshold)) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cb = (entry.target as HTMLElement).dataset.observerCallback;
          if (cb) {
            const fn = callbackMap.get(cb);
            if (fn) fn(entry);
          }
        });
      },
      {
        threshold,
        rootMargin: '50px 0px', // Start animation slightly before element enters viewport
      }
    );
    observerMap.set(threshold, observer);
  }
  return observerMap.get(threshold)!;
}

const callbackMap = new Map<string, (entry: IntersectionObserverEntry) => void>();
let callbackId = 0;

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const idRef = useRef<string>(`observer-${callbackId++}`);

  const handleIntersect = useCallback((entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      // Use requestAnimationFrame for smooth state update
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
      // Cleanup after animation triggers
      const observer = getObserver(threshold, handleIntersect);
      observer.unobserve(entry.target);
      callbackMap.delete(idRef.current);
      delete (entry.target as HTMLElement).dataset.observerCallback;
    }
  }, [threshold]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if already visible (for elements in initial viewport)
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
      return;
    }

    callbackMap.set(idRef.current, handleIntersect);
    element.dataset.observerCallback = idRef.current;

    const observer = getObserver(threshold, handleIntersect);
    observer.observe(element);

    return () => {
      observer.unobserve(element);
      callbackMap.delete(idRef.current);
      delete element.dataset.observerCallback;
    };
  }, [threshold, handleIntersect]);

  return { ref, isVisible };
}

// Staggered animation hook for lists
export function useStaggeredAnimation(itemCount: number, baseDelay = 100, threshold = 0.1) {
  const { ref, isVisible } = useScrollAnimation(threshold);

  const getDelay = useCallback((index: number) => ({
    transitionDelay: `${baseDelay + index * 60}ms`
  }), [baseDelay]);

  return { ref, isVisible, getDelay };
}
