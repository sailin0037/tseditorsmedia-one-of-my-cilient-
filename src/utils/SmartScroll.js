/**
 * SmartScroll - Production-ready scroll management for chat/editor interfaces
 * Handles auto-scroll, jitter prevention, and sticky-scroll logic
 */

const SmartScroll = (function () {
  let rafId = null;
  let pendingScroll = null;
  const THRESHOLD_PX = 50;

  /**
   * Check if user is near the bottom of the scroll container
   * @param {HTMLElement} container - Scroll container element
   * @returns {boolean} - True if within threshold of bottom
   */
  function isAtBottom(container) {
    if (!container) return true;
    
    const { scrollHeight, scrollTop, clientHeight } = container;
    const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
    
    return distanceFromBottom <= THRESHOLD_PX;
  }

  /**
   * Check if user has scrolled up to read history
   * @param {HTMLElement} container - Scroll container element
   * @returns {boolean} - True if user has scrolled up
   */
  function isUserScrolledUp(container) {
    return !isAtBottom(container);
  }

  /**
   * Execute scroll using requestAnimationFrame to prevent jitter
   * @param {HTMLElement} container - Scroll container element
   * @param {number} targetScroll - Target scroll position
   */
  function executeScroll(container, targetScroll) {
    if (rafId) {
      cancelAnimationFrame(rafId);
    }

    rafId = requestAnimationFrame(() => {
      if (container && container.scrollTo) {
        container.scrollTo({
          top: targetScroll,
          behavior: 'auto'
        });
      }
      rafId = null;
    });
  }

  /**
   * Queue a scroll action (for rapid consecutive updates)
   * @param {HTMLElement} container - Scroll container element
   * @param {number} targetScroll - Target scroll position
   */
  function queueScroll(container, targetScroll) {
    pendingScroll = { container, targetScroll };
    
    if (!rafId) {
      rafId = requestAnimationFrame(() => {
        if (pendingScroll) {
          const { container: c, targetScroll: t } = pendingScroll;
          if (c && c.scrollTo) {
            c.scrollTo({ top: t, behavior: 'auto' });
          }
        }
        pendingScroll = null;
        rafId = null;
      });
    }
  }

  /**
   * Main scroll function - call this when appending new content
   * @param {HTMLElement} container - Scroll container element
   * @param {Object} options - Configuration options
   * @param {boolean} options.force - Force scroll to bottom regardless of position
   * @param {boolean} options.useQueue - Use requestAnimationFrame queue for rapid updates
   */
  function scrollToBottom(container, options = {}) {
    const { force = false, useQueue = false } = options;
    
    if (!container) return;

    if (force) {
      const targetScroll = container.scrollHeight;
      if (useQueue) {
        queueScroll(container, targetScroll);
      } else {
        executeScroll(container, targetScroll);
      }
      return;
    }

    if (isAtBottom(container)) {
      const targetScroll = container.scrollHeight;
      if (useQueue) {
        queueScroll(container, targetScroll);
      } else {
        executeScroll(container, targetScroll);
      }
    }
  }

  /**
   * Calculate if scrolling is needed before appending content
   * Call this BEFORE appending new content
   * @param {HTMLElement} container - Scroll container element
   * @returns {Object} - { shouldScroll: boolean, targetScroll: number }
   */
  function calculateScrollNeed(container) {
    if (!container) {
      return { shouldScroll: false, targetScroll: 0 };
    }

    const wasAtBottom = isAtBottom(container);
    const targetScroll = container.scrollHeight;

    return {
      shouldScroll: wasAtBottom,
      targetScroll
    };
  }

  /**
   * Scroll to bottom only if user was already at bottom
   * Call this AFTER appending new content
   * @param {HTMLElement} container - Scroll container element
   * @param {Object} options - Configuration options
   */
  function smartScrollAfterAppend(container, options = {}) {
    const { useQueue = false } = options;
    
    if (!container) return;

    const { shouldScroll, targetScroll } = calculateScrollNeed(container);
    
    if (shouldScroll) {
      if (useQueue) {
        queueScroll(container, targetScroll);
      } else {
        executeScroll(container, targetScroll);
      }
    }
  }

  /**
   * Handle dynamic content loading (images, code blocks)
   * Call this when content dimensions change
   * @param {HTMLElement} container - Scroll container element
   * @param {HTMLElement} contentElement - The newly loaded content element
   */
  function handleContentLoad(container, contentElement) {
    if (!container || !contentElement) return;

    const wasAtBottom = isAtBottom(container);
    const previousHeight = container.scrollHeight;

    const checkHeightChange = () => {
      const newHeight = container.scrollHeight;
      const heightDiff = newHeight - previousHeight;
      
      if (wasAtBottom && heightDiff > 0) {
        const newScrollPos = container.scrollTop + heightDiff;
        if (useQueue) {
          queueScroll(container, newScrollPos);
        } else {
          executeScroll(container, newScrollPos);
        }
      }
    };

    if (contentElement.complete !== false) {
      checkHeightChange();
    } else {
      contentElement.addEventListener('load', checkHeightChange);
      contentElement.addEventListener('error', checkHeightChange);
    }
  }

  /**
   * Cleanup function to cancel pending animations
   */
  function cleanup() {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    pendingScroll = null;
  }

  /**
   * Get current scroll state
   * @param {HTMLElement} container - Scroll container element
   * @returns {Object} - Scroll state information
   */
  function getScrollState(container) {
    if (!container) return null;

    return {
      isAtBottom: isAtBottom(container),
      isScrolledUp: isUserScrolledUp(container),
      scrollTop: container.scrollTop,
      scrollHeight: container.scrollHeight,
      clientHeight: container.clientHeight,
      distanceFromBottom: container.scrollHeight - container.scrollTop - container.clientHeight
    };
  }

  return {
    scrollToBottom,
    smartScrollAfterAppend,
    calculateScrollNeed,
    handleContentLoad,
    getScrollState,
    isAtBottom,
    cleanup,
    THRESHOLD_PX
  };
})();

// Export for different module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SmartScroll;
} else if (typeof window !== 'undefined') {
  window.SmartScroll = SmartScroll;
}
