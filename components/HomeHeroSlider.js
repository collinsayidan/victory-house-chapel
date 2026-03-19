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
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-navy-950 text-white">
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

      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.88)_0%,rgba(23,37,84,0.72)_45%,rgba(30,64,175,0.46)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,162,255,0.18),transparent_28%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(247,204,85,0.12),transparent_22%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.76),rgba(15,23,42,0.34),rgba(15,23,42,0.46))]" />

      <motion.div
        animate={{ y: [0, -10, 0], opacity: [0.18, 0.26, 0.18] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-10 right-8 h-64 w-64 rounded-full bg-brand-300/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 12, 0], opacity: [0.14, 0.2, 0.14] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-12 left-0 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              >
                {activeSlide.eyebrow ? (
                  <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-brand-300 backdrop-blur">
                    {activeSlide.eyebrow}
                  </p>
                ) : null}

                <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl lg:leading-[1.02]">
                  {activeSlide.title}
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 lg:text-xl">
                  {activeSlide.intro}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {activeSlide.primaryCta ? (
                    <Link
                      href={activeSlide.primaryCta.href}
                      className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-900 shadow-lg transition duration-200 hover:bg-brand-50 hover:shadow-xl"
                    >
                      {activeSlide.primaryCta.label}
                    </Link>
                  ) : null}

                  {activeSlide.secondaryCta ? (
                    <Link
                      href={activeSlide.secondaryCta.href}
                      className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition duration-200 hover:border-brand-200/50 hover:bg-white/15"
                    >
                      {activeSlide.secondaryCta.label}
                    </Link>
                  ) : null}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-3">
              {slides.map((slide, index) => (
                <button
                  key={`${slide.title}-${index}`}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    current === index
                      ? 'w-10 bg-white'
                      : 'w-3 bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24, y: 16 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur" />
            <div className="absolute -bottom-6 -right-4 h-20 w-20 rounded-full border border-white/10 bg-white/5 backdrop-blur" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
              {activeSlide.panelImage ? (
                <div className="relative mb-5 overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={activeSlide.panelImage}
                    alt={activeSlide.panelImageAlt || activeSlide.panelTitle || ''}
                    width={900}
                    height={700}
                    className="h-56 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
                </div>
              ) : null}

              {activeSlide.panelKicker ? (
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">
                  {activeSlide.panelKicker}
                </p>
              ) : null}

              {activeSlide.panelTitle ? (
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                  {activeSlide.panelTitle}
                </h3>
              ) : null}

              {activeSlide.panelText ? (
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  {activeSlide.panelText}
                </p>
              ) : null}

              {activeSlide.panelItems?.length ? (
                <div className="mt-5 space-y-3">
                  {activeSlide.panelItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}