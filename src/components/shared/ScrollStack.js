import React, { useLayoutEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import '../../styles/ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete
}) => {
  const scrollerRef = useRef(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  const lastTransformsRef = useRef(new Map());
  const isUpdatingRef = useRef(false);
  const rafIdRef = useRef(null);

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement
      };
    } else {
      const scroller = scrollerRef.current;
      if (!scroller) return { scrollTop: 0, containerHeight: 0, scrollContainer: null };
      return {
        scrollTop: scroller.scrollTop,
        containerHeight: scroller.clientHeight,
        scrollContainer: scroller
      };
    }
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    (element) => {
      if (useWindowScroll) {
        const rect = element.getBoundingClientRect();
        return rect.top + window.scrollY;
      } else {
        return element.offsetTop;
      }
    },
    [useWindowScroll]
  );

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const endElement = useWindowScroll
      ? (document.querySelector('.scroll-stack-end'))
      : (scrollerRef.current?.querySelector('.scroll-stack-end'));

    const endElementTop = endElement ? getElementOffset(endElement) : 0;

    // Find the topmost visible card index
    let topCardIndex = -1;
    for (let j = 0; j < cardsRef.current.length; j++) {
      const jCardTop = getElementOffset(cardsRef.current[j]);
      const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
      if (scrollTop >= jTriggerStart - 100) { // Add buffer for smoother transitions
        topCardIndex = j;
      }
    }

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = getElementOffset(card);
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      // Hide cards that are far above the viewport
      const isFarAbove = i < topCardIndex - 2;
      if (isFarAbove) {
        card.style.opacity = '0';
        card.style.pointerEvents = 'none';
        return;
      }

      // Show cards that are in or near view
      card.style.opacity = '1';
      card.style.pointerEvents = 'auto';

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount && topCardIndex >= 0) {
        if (i < topCardIndex) {
          const depthInStack = topCardIndex - i;
          blur = Math.max(0, depthInStack * blurAmount);
        }
      }

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop < pinStart) {
        // Card is above viewport - keep it at its natural position
        translateY = 0;
      }

      // Round translateY to larger increments to reduce shakiness
      const roundedTranslateY = Math.round(translateY / 5) * 5; // Round to nearest 5px
      
      const newTransform = {
        translateY: roundedTranslateY,
        scale: Math.round(scale * 100) / 100,
        rotation: Math.round(rotation),
        blur: Math.round(blur * 10) / 10
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 5 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.01 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 2 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.3;

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';

        card.style.transform = transform;
        card.style.filter = filter || 'none';

        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollData,
    getElementOffset
  ]);

  const handleScroll = useCallback(() => {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }
    
    rafIdRef.current = requestAnimationFrame(() => {
      updateCardTransforms();
    });
  }, [updateCardTransforms]);

  const scrollSnapRef = useRef({ isScrolling: false, lastScrollTop: 0, snapTimeout: null, touchStartY: null });
  
  const snapToCard = useCallback((scrollTop, direction) => {
    if (!cardsRef.current.length) return;
    
    const containerHeight = useWindowScroll ? window.innerHeight : scrollerRef.current?.clientHeight || 0;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    
    // Find current card index
    let currentCardIndex = 0;
    let minDistance = Infinity;
    
    cardsRef.current.forEach((card, i) => {
      const cardTop = getElementOffset(card);
      const snapPoint = cardTop - stackPositionPx - itemStackDistance * i;
      const distance = Math.abs(scrollTop - snapPoint);
      
      if (distance < minDistance) {
        minDistance = distance;
        currentCardIndex = i;
      }
    });
    
    // Determine next/previous card based on scroll direction
    let targetCardIndex = currentCardIndex;
    if (direction > 0 && currentCardIndex < cardsRef.current.length - 1) {
      // Scrolling down - go to next card
      targetCardIndex = currentCardIndex + 1;
    } else if (direction < 0 && currentCardIndex > 0) {
      // Scrolling up - go to previous card
      targetCardIndex = currentCardIndex - 1;
    }
    
    const targetCard = cardsRef.current[targetCardIndex];
    if (targetCard) {
      const cardTop = getElementOffset(targetCard);
      const targetScroll = cardTop - stackPositionPx - itemStackDistance * targetCardIndex;
      
      if (useWindowScroll) {
        window.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
      } else if (scrollerRef.current) {
        scrollerRef.current.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
      }
    }
  }, [useWindowScroll, stackPosition, itemStackDistance, parsePercentage, getElementOffset]);

  const handleWheel = useCallback((e) => {
    // Always prevent default scroll
    e.preventDefault();
    e.stopPropagation();
    
    // If already snapping, ignore new scroll events
    if (scrollSnapRef.current.isScrolling) {
      return;
    }
    
    const scrollTop = useWindowScroll ? window.scrollY : scrollerRef.current?.scrollTop || 0;
    const direction = e.deltaY > 0 ? 1 : -1;
    
    // Immediately snap to next/previous card - ignore scroll amount
    scrollSnapRef.current.isScrolling = true;
    snapToCard(scrollTop, direction);
    
    // Reset scrolling flag after snap animation completes
    setTimeout(() => {
      scrollSnapRef.current.isScrolling = false;
      // Update transforms after snap completes
      updateCardTransforms();
    }, 600);
  }, [useWindowScroll, snapToCard, updateCardTransforms]);

  const handleTouchStart = useCallback((e) => {
    scrollSnapRef.current.touchStartY = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e) => {
    if (!scrollSnapRef.current.touchStartY || scrollSnapRef.current.isScrolling) return;
    
    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = scrollSnapRef.current.touchStartY - touchEndY;
    
    // Only snap if swipe is significant enough
    if (Math.abs(deltaY) > 50) {
      const scrollTop = useWindowScroll ? window.scrollY : scrollerRef.current?.scrollTop || 0;
      const direction = deltaY > 0 ? 1 : -1;
      
      scrollSnapRef.current.isScrolling = true;
      snapToCard(scrollTop, direction);
      
      setTimeout(() => {
        scrollSnapRef.current.isScrolling = false;
        updateCardTransforms();
      }, 600);
    }
    
    scrollSnapRef.current.touchStartY = null;
  }, [useWindowScroll, snapToCard, updateCardTransforms]);

  const setupLenis = useCallback(() => {
    // Disable Lenis for segmented scrolling - use native scroll with snapping
    if (useWindowScroll) {
      window.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('touchstart', handleTouchStart, { passive: true });
      window.addEventListener('touchend', handleTouchEnd, { passive: true });
    } else {
      const scroller = scrollerRef.current;
      if (!scroller) return;
      
      scroller.addEventListener('wheel', handleWheel, { passive: false });
      scroller.addEventListener('scroll', handleScroll, { passive: true });
      scroller.addEventListener('touchstart', handleTouchStart, { passive: true });
      scroller.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
    
    return null;
  }, [handleScroll, handleWheel, handleTouchStart, handleTouchEnd, useWindowScroll]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : scroller.querySelectorAll('.scroll-stack-card')
    );

    cardsRef.current = cards;
    const transformsCache = lastTransformsRef.current;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
      card.style.willChange = 'transform';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
      card.style.transform = 'translateZ(0)';
      card.style.webkitTransform = 'translateZ(0)';
      card.style.perspective = '1000px';
      card.style.webkitPerspective = '1000px';
    });

    setupLenis();
    
    // Initial state - hide all cards except first one, then show them properly
    cards.forEach((card, i) => {
      if (i > 0) {
        card.style.opacity = '0';
      }
    });
    
    // Small delay to ensure DOM is ready, then update transforms
    setTimeout(() => {
      updateCardTransforms();
    }, 100);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      if (scrollSnapRef.current.snapTimeout) {
        clearTimeout(scrollSnapRef.current.snapTimeout);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      if (useWindowScroll) {
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchend', handleTouchEnd);
      } else if (scrollerRef.current) {
        scrollerRef.current.removeEventListener('wheel', handleWheel);
        scrollerRef.current.removeEventListener('scroll', handleScroll);
        scrollerRef.current.removeEventListener('touchstart', handleTouchStart);
        scrollerRef.current.removeEventListener('touchend', handleTouchEnd);
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      transformsCache.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    setupLenis,
    updateCardTransforms,
    handleWheel,
    handleTouchStart,
    handleTouchEnd,
    snapToCard,
    parsePercentage,
    getElementOffset
  ]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
