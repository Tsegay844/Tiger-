import { useCallback, useEffect, useRef, useState, type CSSProperties, type FocusEvent } from 'react';
import type { GallerySlide } from '../content';
import { Icon } from './Icon';
import { Picture } from './Picture';

const INTERVAL_MS = 5000;

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Passes a slide's crop position to CSS (`--focus`, read by the slide and thumbnail images). */
const focusStyle = ({ focus }: GallerySlide) => (focus ? ({ '--focus': focus } as CSSProperties) : undefined);

/** True for keyboard focus; mouse clicks on the controls should not stop the slideshow. */
function isKeyboardFocus(element: Element) {
  try {
    return element.matches(':focus-visible');
  } catch {
    return true;
  }
}

type GalleryProps = {
  slides: readonly GallerySlide[];
  label: string;
  /** `sizes` attribute for the main slide images. */
  sizes: string;
};

/**
 * Slideshow with arrows, thumbnails (dots on phones), swipe and autoplay.
 * Slides move by native scrolling (CSS scroll snap), so swiping works before JavaScript loads.
 * Autoplay pauses while hovered, while a keyboard user is inside it and in background tabs,
 * and starts paused for visitors who prefer reduced motion.
 */
export function Gallery({ slides, label, sizes }: GalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const count = slides.length;
  const current = slides[active] ?? slides[0];

  const goTo = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      const target = (index + count) % count;
      track.scrollTo({ left: target * track.clientWidth, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    },
    [count],
  );

  useEffect(() => {
    if (prefersReducedMotion()) setPlaying(false);
  }, []);

  useEffect(() => {
    const update = () => setHidden(document.hidden);
    document.addEventListener('visibilitychange', update);
    return () => document.removeEventListener('visibilitychange', update);
  }, []);

  // The slide that is mostly in view is the active one, however it got there.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        }
      },
      { root: track, threshold: 0.6 },
    );
    track.querySelectorAll('[data-index]').forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, []);

  // Each slide change restarts the countdown, so manual navigation never skips a slide early.
  useEffect(() => {
    if (!playing || hovered || focused || hidden || count < 2) return;
    const timer = window.setTimeout(() => goTo(active + 1), INTERVAL_MS);
    return () => window.clearTimeout(timer);
  }, [playing, hovered, focused, hidden, active, count, goTo]);

  if (!current) return null;

  const onFocus = (event: FocusEvent<HTMLDivElement>) => {
    if (isKeyboardFocus(event.target)) setFocused(true);
  };
  const onBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
  };

  return (
    <div
      className="gallery"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onPointerEnter={(event) => event.pointerType === 'mouse' && setHovered(true)}
      onPointerLeave={(event) => event.pointerType === 'mouse' && setHovered(false)}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <div className="gallery-stage">
        <button
          type="button"
          className="gallery-button gallery-toggle"
          aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
          onClick={() => setPlaying((value) => !value)}
        >
          <Icon name={playing ? 'pause' : 'play'} />
        </button>
        <div className="gallery-track" ref={trackRef} tabIndex={0} role="group" aria-label="Slides">
          {slides.map((slide, index) => (
            <figure
              className="gallery-slide"
              key={slide.title}
              data-index={index}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${count}`}
              style={focusStyle(slide)}
            >
              <Picture image={slide.image} sizes={sizes} priority={index === 0} />
              <figcaption className="visually-hidden">
                <span lang={slide.titleLang}>{slide.title}</span>: {slide.detail}
              </figcaption>
            </figure>
          ))}
        </div>
        <button
          type="button"
          className="gallery-button gallery-prev"
          aria-label="Previous image"
          onClick={() => goTo(active - 1)}
        >
          <Icon name="chevronLeft" />
        </button>
        <button
          type="button"
          className="gallery-button gallery-next"
          aria-label="Next image"
          onClick={() => goTo(active + 1)}
        >
          <Icon name="chevronRight" />
        </button>
        {/* Visual caption for the current slide; screen readers get each slide's own figcaption. */}
        <p className="gallery-caption" aria-hidden="true" key={active}>
          <span
            className={current.titleLang ? 'gallery-caption-title ethiopic' : 'gallery-caption-title'}
            lang={current.titleLang}
          >
            {current.title}
          </span>
          <span>{current.detail}</span>
        </p>
        <div className="gallery-dots">
          {slides.map((slide, index) => (
            <button
              type="button"
              className="gallery-dot"
              key={slide.title}
              aria-label={`Show image ${index + 1}`}
              aria-current={index === active}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>
      <div className="gallery-thumbs">
        {slides.map((slide, index) => (
          <button
            type="button"
            className="gallery-thumb"
            key={slide.title}
            aria-label={`Show image ${index + 1}: ${slide.title}`}
            aria-current={index === active}
            onClick={() => goTo(index)}
            style={focusStyle(slide)}
          >
            <Picture image={slide.image} sizes="120px" alt="" />
          </button>
        ))}
      </div>
      <p className="visually-hidden" aria-live="polite">
        {playing ? '' : `Image ${active + 1} of ${count}: ${current.title}`}
      </p>
    </div>
  );
}
