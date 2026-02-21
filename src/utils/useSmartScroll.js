/**
 * useSmartScroll - React hook for smart scroll behavior
 * Use in chat/editor components
 */

import { useRef, useCallback, useEffect } from 'react';
import SmartScroll from './SmartScroll';

export function useSmartScroll(options = {}) {
  const containerRef = useRef(null);
  const rafIdRef = useRef(null);
  const { thresholdPx = 50 } = options;

  const scrollToBottom = useCallback((force = false, useQueue = true) => {
    const container = containerRef.current;
    if (!container) return;

    const { shouldScroll, targetScroll } = SmartScroll.calculateScrollNeed(container);
    
    if (force || shouldScroll) {
      if (useQueue) {
        const scroll = () => {
          if (container.scrollTo) {
            container.scrollTo({ top: targetScroll, behavior: 'auto' });
          }
        };
        
        if (rafIdRef.current) {
          cancelAnimationFrame(rafIdRef.current);
        }
        rafIdRef.current = requestAnimationFrame(scroll);
      } else {
        container.scrollTop = targetScroll;
      }
    }
  }, []);

  const getScrollState = useCallback(() => {
    return SmartScroll.getScrollState(containerRef.current);
  }, []);

  const handleContentLoad = useCallback((contentElement) => {
    SmartScroll.handleContentLoad(containerRef.current, contentElement);
  }, []);

  const cleanup = useCallback(() => {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
  }, []);

  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  return {
    containerRef,
    scrollToBottom,
    getScrollState,
    handleContentLoad,
    cleanup
  };
}

export default useSmartScroll;
