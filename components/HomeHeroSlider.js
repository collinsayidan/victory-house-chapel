'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

export default function HomeHeroSlider({ slides = [] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!slides.length) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const activeSlide = slides[current];
  if (!activeSlide) return null;

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden text-white" style={{ background: 'var(--navy)' }}>

      {/* ── Background image ─────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.image}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <Image
            src={activeSlide.image}
            alt={activeSlide.imageAlt || activeSlide.title}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Tri-colour overlay — navy → violet → gold hint ───────────────── */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(14,27,61,0.96) 0%, rgba(14,27,61,0.82) 45%, rgba(14,27,61,0.60) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(46,33,96,0.45) 0%, transparent 60%, rgba(184,149,63,0.15) 100%)' }} />

      {/* ── Atmospheric orbs ─────────────────────────────────────────────── */}
      {/* Gold — top right */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -12, 0], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--gold-mid), transparent 70%)' }}
      />
      {/* Violet — bottom left */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 14, 0], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -bottom-14 -left-10 h-80 w-80 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--violet-mid), transparent 70%)' }}
      />
      {/* Gold — centre-left subtle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, var(--gold-on-dark), transparent 70%)' }}
      />

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

          {/* Text block */}
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Eyebrow — gold-on-dark so it's visible */}
                {activeSlide.eyebrow && (
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.05 }}
                    className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] backdrop-blur"
                    style={{ color: 'var(--gold-on-dark)' }}
                  >
                    {/* Gold–violet gradient bar */}
                    <span
                      className="inline-block h-0.5 w-5 flex-shrink-0 rounded-full"
                      style={{ background: 'linear-gradient(90deg, var(--gold-on-dark), var(--violet-mid))' }}
                    />
                    {activeSlide.eyebrow}
                  </motion.p>
                )}

                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.12 }}
                  className="max-w-4xl text-4xl tracking-tight text-white sm:text-5xl lg:text-7xl lg:leading-[1.02]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {activeSlide.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.22 }}
                  className="mt-6 max-w-2xl text-lg leading-8 text-white/80 lg:text-xl"
                >
                  {activeSlide.intro}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.34 }}
                  className="mt-8 flex flex-wrap items-center gap-4"
                >
                  {activeSlide.primaryCta && (
                    <Link href={activeSlide.primaryCta.href} className="btn-gold">
                      {activeSlide.primaryCta.label}
                    </Link>
                  )}
                  {activeSlide.secondaryCta && (
                    <Link href={activeSlide.secondaryCta.href} className="btn-ghost">
                      {activeSlide.secondaryCta.label}
                    </Link>
                  )}
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Slide indicators */}
            <div className="mt-10 flex items-center gap-3">
              {slides.map((slide, index) => (
                <button
                  key={`${slide.title}-${index}`}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    height: '10px',
                    width: current === index ? '2.5rem' : '10px',
                    background: current === index
                      ? 'linear-gradient(90deg, var(--gold-on-dark), var(--violet-mid))'
                      : 'rgba(255,255,255,0.35)'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 24, y: 16 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            {/* Decorative corner blocks */}
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur" />
            <div className="absolute -bottom-6 -right-4 h-20 w-20 rounded-full border border-white/10 bg-white/5 backdrop-blur" />

            <div
              className="relative overflow-hidden rounded-[2rem] border border-white/12 p-5 shadow-2xl backdrop-blur-xl"
              style={{ background: 'rgba(14,27,61,0.55)' }}
            >
              {/* Inner gold glow */}
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20"
                style={{ background: 'radial-gradient(circle, var(--gold-mid), transparent 70%)' }}
              />
              {/* Inner violet glow */}
              <div
                className="pointer-events-none absolute -bottom-8 -left-8 h-28 w-28 rounded-full opacity-20"
                style={{ background: 'radial-gradient(circle, var(--violet-mid), transparent 70%)' }}
              />

              {activeSlide.panelImage && (
                <div className="relative mb-5 overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={activeSlide.panelImage}
                    alt={activeSlide.panelImageAlt || activeSlide.panelTitle || ''}
                    width={900}
                    height={700}
                    className="h-56 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              )}

              {activeSlide.panelKicker && (
                <p
                  className="relative text-xs font-semibold uppercase tracking-widest"
                  style={{ color: 'var(--gold-on-dark)' }}
                >
                  {activeSlide.panelKicker}
                </p>
              )}

              {activeSlide.panelTitle && (
                <h3
                  className="relative mt-2 text-2xl tracking-tight text-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {activeSlide.panelTitle}
                </h3>
              )}

              {activeSlide.panelText && (
                <p className="relative mt-3 text-sm leading-7 text-white/75">
                  {activeSlide.panelText}
                </p>
              )}

              {activeSlide.panelItems?.length > 0 && (
                <div className="relative mt-5 space-y-2">
                  {activeSlide.panelItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl px-4 py-3 text-sm font-medium text-white/90"
                      style={{
                        background: 'rgba(255,255,255,0.07)',
                        borderLeft: '3px solid var(--gold-on-dark)'
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}