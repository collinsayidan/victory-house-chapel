'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Fades page sections up as they scroll into view. Sections already on
 * screen show straight away, and nothing moves for people who ask their
 * device for reduced motion.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (!('IntersectionObserver' in window)) return undefined;

    const sections = [...document.querySelectorAll('main section')].filter(
      (section) => section.getBoundingClientRect().top > window.innerHeight * 0.9
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
    );

    sections.forEach((section) => {
      section.classList.add('reveal');
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
      sections.forEach((section) => section.classList.remove('reveal', 'revealed'));
    };
  }, [pathname]);

  return null;
}
