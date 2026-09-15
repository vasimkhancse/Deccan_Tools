import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Reusable Carousel component
 * Features:
 * - Clean engineering theme with red arrows & horizontal dashes
 * - Single-card mobile alignment with zero drift
 * - Autoplay, touch gestures, keyboard navigation
 */
export default function Carousel({
  children,
  items,
  renderItem,
  itemsPerView = { base: 1, sm: 1, md: 2, lg: 3, xl: 4 },
  autoplay = true,
  autoplayInterval = 5000,
  pauseOnHover = true,
  showArrows = true,
  showDots = true,
  showCounter = false,
  showProgress = false,
  loop = true,
  arrowVariant = 'default', // 'default' | 'hero' | 'floating' | 'card'
  theme = 'dark', // 'dark' | 'light'
  className = '',
  slideClassName = '',
  onSlideChange,
  ariaLabel = 'Content Carousel'
}) {
  const slideItems = useMemo(() => {
    if (items && renderItem) {
      return items.map((item, idx) => renderItem(item, idx));
    }
    return React.Children.toArray(children);
  }, [items, renderItem, children]);

  const totalSlides = slideItems.length;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);
  const progressTimerRef = useRef(null);
  const autoplayTimerRef = useRef(null);

  // Responsive itemsPerView calculation
  useEffect(() => {
    const updateVisibleCount = () => {
      if (typeof itemsPerView === 'number') {
        setVisibleCount(Math.min(itemsPerView, totalSlides));
        return;
      }
      const width = window.innerWidth;
      let count = itemsPerView.base || 1;
      if (width >= 1280 && itemsPerView.xl) count = itemsPerView.xl;
      else if (width >= 1024 && itemsPerView.lg) count = itemsPerView.lg;
      else if (width >= 768 && itemsPerView.md) count = itemsPerView.md;
      else if (width >= 640 && itemsPerView.sm) count = itemsPerView.sm;

      setVisibleCount(Math.min(count, totalSlides));
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, [itemsPerView, totalSlides]);

  const maxIndex = Math.max(0, totalSlides - visibleCount);

  // When visible count changes, ensure currentIndex does not exceed maxIndex
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  // Slide navigation
  const nextSlide = useCallback(() => {
    if (totalSlides <= visibleCount) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) {
        return loop ? 0 : prev;
      }
      return prev + 1;
    });
    setProgress(0);
  }, [maxIndex, loop, totalSlides, visibleCount]);

  const prevSlide = useCallback(() => {
    if (totalSlides <= visibleCount) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return loop ? maxIndex : 0;
      }
      return prev - 1;
    });
    setProgress(0);
  }, [maxIndex, loop, totalSlides, visibleCount]);

  const goToSlide = useCallback((index) => {
    const target = Math.min(Math.max(0, index), maxIndex);
    setCurrentIndex(target);
    setProgress(0);
  }, [maxIndex]);

  // Slide change callback
  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(currentIndex);
    }
  }, [currentIndex, onSlideChange]);

  // Autoplay and progress bar logic
  useEffect(() => {
    if (!autoplay || (pauseOnHover && isHovered) || totalSlides <= visibleCount) {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      if (autoplayTimerRef.current) clearTimeout(autoplayTimerRef.current);
      return;
    }

    setProgress(0);
    const intervalStep = 50; // ms
    const increment = (intervalStep / autoplayInterval) * 100;

    progressTimerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + increment;
      });
    }, intervalStep);

    autoplayTimerRef.current = setTimeout(() => {
      nextSlide();
    }, autoplayInterval);

    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      if (autoplayTimerRef.current) clearTimeout(autoplayTimerRef.current);
    };
  }, [currentIndex, autoplay, autoplayInterval, pauseOnHover, isHovered, nextSlide, totalSlides, visibleCount]);

  // Touch & Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diffX = touchStartX.current - touchEndX.current;
    const threshold = 35; // minimum px for swipe

    if (diffX > threshold) {
      nextSlide();
    } else if (diffX < -threshold) {
      prevSlide();
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  if (totalSlides === 0) return null;

  // Percentage per slide in track
  const itemWidthPercent = 100 / visibleCount;
  const isSingleSlide = visibleCount === 1;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none w-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label={ariaLabel}
    >
      {/* Slides Viewport */}
      <div className="overflow-hidden w-full h-full">
        <div
          className="flex transition-transform duration-500 ease-out h-full"
          style={{
            transform: `translateX(-${currentIndex * itemWidthPercent}%)`
          }}
          onTransitionEnd={() => setIsTransitioning(false)}
        >
          {slideItems.map((child, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 h-full ${
                !isSingleSlide ? 'px-2 sm:px-3' : 'w-full'
              } ${slideClassName}`}
              style={{
                width: `${itemWidthPercent}%`
              }}
              aria-hidden={idx < currentIndex || idx >= currentIndex + visibleCount}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      {showProgress && (
        <div className={`absolute top-0 left-0 right-0 h-1 z-30 pointer-events-none ${
          theme === 'light' ? 'bg-slate-200' : 'bg-white/10'
        }`}>
          <div
            className="h-full bg-gradient-to-r from-brandRed-600 to-rose-500 transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Left / Right Arrow Controls */}
      {showArrows && totalSlides > visibleCount && (
        <>
          <button
            onClick={prevSlide}
            className={`hidden sm:flex absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full items-center justify-center transition-all duration-200 shadow-md active:scale-95 ${
              theme === 'light'
                ? 'bg-white/95 hover:bg-brandRed-600 text-brandRed-600 hover:text-white border border-slate-200 hover:border-brandRed-600'
                : 'bg-navy-900/90 hover:bg-brandRed-600 text-white border border-navy-700 backdrop-blur-sm'
            } ${currentIndex === 0 && !loop ? 'opacity-30 cursor-not-allowed' : 'opacity-85 hover:opacity-100'}`}
            aria-label="Previous Slide"
            disabled={currentIndex === 0 && !loop}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className={`hidden sm:flex absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full items-center justify-center transition-all duration-200 shadow-md active:scale-95 ${
              theme === 'light'
                ? 'bg-white/95 hover:bg-brandRed-600 text-brandRed-600 hover:text-white border border-slate-200 hover:border-brandRed-600'
                : 'bg-navy-900/90 hover:bg-brandRed-600 text-white border border-navy-700 backdrop-blur-sm'
            } ${currentIndex >= maxIndex && !loop ? 'opacity-30 cursor-not-allowed' : 'opacity-85 hover:opacity-100'}`}
            aria-label="Next Slide"
            disabled={currentIndex >= maxIndex && !loop}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </>
      )}

      {/* Slide Counter (e.g. 01 / 06) */}
      {showCounter && (
        <div className={`absolute top-4 right-4 sm:top-6 sm:right-6 z-30 font-heading font-extrabold text-xs sm:text-sm tracking-widest px-2.5 py-1 sm:px-3 sm:py-1 rounded-md shadow-2xs backdrop-blur-sm ${
          theme === 'light'
            ? 'bg-white/90 border border-slate-200 text-slate-800'
            : 'bg-navy-950/80 border border-navy-700/80 text-white'
        }`}>
          <span className="text-brandRed-600 font-bold">
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          <span className="mx-1 text-slate-400">/</span>
          <span className={theme === 'light' ? 'text-slate-500' : 'text-slate-300'}>
            {String(totalSlides).padStart(2, '0')}
          </span>
        </div>
      )}

      {/* Pagination Dashes (Accusharp reference style) */}
      {showDots && totalSlides > visibleCount && (
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 mt-3 sm:mt-5 z-20">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === idx
                  ? 'w-7 sm:w-9 h-1 sm:h-1.5 bg-brandRed-600 shadow-sm'
                  : theme === 'light'
                  ? 'w-3.5 sm:w-5 h-1 sm:h-1.5 bg-slate-300 hover:bg-slate-400'
                  : 'w-3.5 sm:w-5 h-1 sm:h-1.5 bg-navy-700 hover:bg-navy-500'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={currentIndex === idx ? 'true' : 'false'}
            />
          ))}
        </div>
      )}
    </div>
  );
}
