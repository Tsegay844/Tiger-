import { useEffect } from 'react';
import { useUI } from '../state/UIContext';

export function useSectionObserver() {
  const { setActiveSection } = useUI();
  useEffect(() => {
    const sections = [...document.querySelectorAll<HTMLElement>('main section[id]')];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-20% 0px -65%', threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [setActiveSection]);
}
