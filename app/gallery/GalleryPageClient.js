'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Lightbox from '../../components/Lightbox';
import { galleryItems } from '../../content/siteContent';

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.07 } }
};

const staggerChild = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

export default function GalleryPageClient() {
  const [selectedImage, setSelectedImage] = useState(null);
  const featuredImage = galleryItems[0];

  return (
    <>
      {/* ── Hero feature + overview ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">

          {/* Large featured image */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-3xl"
            style={{ boxShadow: 'var(--shadow-xl)' }}
          >
            <Image
              src={featuredImage.image}
              alt={featuredImage.alt || featuredImage.title}
              width={1400}
              height={900}
              className="h-[440px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>Featured moment</p>
              <h2 className="mt-3 text-3xl tracking-tight text-white sm:text-4xl" style={{ fontFamily: 'var(--font-display)' }}>
                {featuredImage.title}
              </h2>
              <p className="mt-2 text-base text-white/75">
                A visual glimpse into the worship, community and shared life of Victory House Chapel.
              </p>
            </div>
          </motion.div>

          {/* Side panel */}
          <div className="flex flex-col gap-5">
            {/* Overview card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-church-border bg-white p-7"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div
                className="mb-4 h-1 w-10 rounded-full"
                style={{ background: 'var(--accent-vivid)' }}
              />
              <p className="eyebrow">Gallery overview</p>
              <h3 className="mt-3 text-2xl tracking-tight text-navy-950" style={{ fontFamily: 'var(--font-display)' }}>
                Church life, ministry and fellowship
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Our gallery shares moments from worship services, prayer gatherings, outreach
                activities and church community life. Each image reflects the warmth, faith and
                fellowship of Victory House Chapel.
              </p>
            </motion.div>

            {/* Thumbnail grid — fixed: no hacky mt- offsets */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid grid-cols-2 gap-4"
            >
              {galleryItems.slice(1, 5).map((item) => (
                <motion.button
                  key={item.id}
                  variants={staggerChild}
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  className="group relative overflow-hidden rounded-2xl text-left transition-all duration-300 hover:-translate-y-1"
                  style={{ boxShadow: 'var(--shadow-soft)' }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-xl)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-soft)'; }}
                >
                  <Image
                    src={item.image}
                    alt={item.alt || item.title}
                    width={600}
                    height={500}
                    className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  {/* Vivid accent overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
                    style={{ background: 'var(--accent-vivid)' }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <p className="text-sm font-medium text-white/90">{item.title}</p>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Full masonry gallery ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="mb-12">
          <p className="eyebrow">Church life in pictures</p>
          <h2 className="mt-4 text-4xl tracking-tight text-navy-950 sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
            A curated gallery of{' '}
            <em className="not-italic" style={{ color: 'var(--accent-vivid)' }}>worship and fellowship</em>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            These images help tell the story of our church family, ministry and community life.
          </p>
        </div>

        {/*
          Clean masonry: CSS columns only.
          Removed all the hacky index % N offset classes — they produced
          conflicting margins and unpredictable layout at mid-breakpoints.
        */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="columns-1 gap-6 sm:columns-2 lg:columns-3"
        >
          {galleryItems.map((item) => (
            <motion.button
              key={item.id}
              variants={staggerChild}
              type="button"
              onClick={() => setSelectedImage(item)}
              className="group mb-6 block w-full break-inside-avoid overflow-hidden rounded-3xl bg-white text-left transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: 'var(--shadow-card)' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-xl)'; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-card)'; }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt || item.title}
                  width={900}
                  height={700}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ aspectRatio: 'auto' }}
                />
                {/* Vivid accent overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-15"
                  style={{ background: 'var(--accent-vivid)' }}
                />
              </div>

              <div className="p-5">
                <p
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: 'var(--accent-vivid)' }}
                >
                  {item.category}
                </p>
                <h3
                  className="mt-2 text-xl tracking-tight text-navy-950"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-500">{item.alt}</p>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </section>

      <Lightbox item={selectedImage} onClose={() => setSelectedImage(null)} />
    </>
  );
}