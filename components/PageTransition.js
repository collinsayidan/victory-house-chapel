'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function PageTransition({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const overlay = document.getElementById('site-transition-overlay');
    const bar = document.getElementById('site-transition-bar');

    if (!overlay) return;

    const timer = setTimeout(() => {
      overlay.style.transform = 'translateY(-100%)';
      overlay.style.pointerEvents = 'none';

      if (bar) {
        bar.style.transform = 'scaleX(0)';
      }
    }, 80);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <div className="relative min-h-screen bg-slate-50">
        <motion.div
          key={pathname}
          initial={{ opacity: 0.98, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="min-h-screen bg-slate-50"
        >
          {children}
        </motion.div>
      </div>

      <div
        id="site-transition-overlay"
        className="pointer-events-none fixed inset-0 z-[9999] flex -translate-y-full flex-col bg-navy-950 transition-transform duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        aria-hidden="true"
      >
        <div
          id="site-transition-bar"
          className="h-1 origin-left scale-x-0 bg-brand-400 transition-transform duration-[500ms] ease-out"
        />
        <div className="flex-1 bg-navy-950" />
      </div>
    </>
  );
}