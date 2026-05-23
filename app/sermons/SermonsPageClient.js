'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Section from '../../components/Section';
import { ContentCard } from '../../components/Contentcard';
import { sermons } from '../../content/siteContent';

const floatingTransition = {
  duration: 5,
  repeat: Infinity,
  repeatType: 'reverse',
  ease: 'easeInOut'
};

/* ─── Sermons grid — owns its own rendering, no renderItem prop ─────────────── */
function SermonsGrid({ items, columns = 2 }) {
  const gridClass =
    columns === 2
      ? 'grid gap-6 md:grid-cols-2'
      : 'grid gap-6 md:grid-cols-2 xl:grid-cols-3';

  return (
    <div className={gridClass}>
      {items.map((sermon, index) => (
        <motion.div
          key={sermon.title}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <ContentCard
            title={sermon.title}
            tone={index % 2 === 1 ? 'soft' : 'default'}
          >
            {sermon.image && (
              <div className="mb-4 overflow-hidden rounded-2xl">
                <Image
                  src={sermon.image}
                  alt={sermon.alt || sermon.title}
                  width={800}
                  height={500}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}

            <p><strong>Speaker:</strong> {sermon.speaker}</p>
            <p><strong>Date:</strong> {sermon.date}</p>
            <p>{sermon.summary}</p>

            {sermon.href && (
              <p>
                <Link
                  href={sermon.href}
                  className="inline-flex items-center gap-1 font-semibold underline underline-offset-4 transition-colors duration-200"
                  style={{ color: 'var(--accent-vivid)' }}
                  target={sermon.href.startsWith('http') ? '_blank' : undefined}
                  rel={sermon.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {sermon.linkLabel || 'Listen or read message notes'}
                </Link>
              </p>
            )}
          </ContentCard>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────────── */
export default function SermonsPageClient() {
  return (
    <>
      {/* ── Featured scripture banner ──────────────────────────────────────── */}
      <Section
        title="Scripture for the season"
        intro="God's Word remains living, active and full of hope for everyday life."
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-3xl border border-church-border bg-white p-8"
          style={{ boxShadow: 'var(--shadow-xl)' }}
        >
          {/* Vivid accent glow */}
          <motion.div
            aria-hidden="true"
            animate={{ x: 12, y: -10, scale: 1.06 }}
            transition={floatingTransition}
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-30"
            style={{ background: 'radial-gradient(circle, var(--accent-vivid-lt), transparent 70%)' }}
          />
          <motion.div
            aria-hidden="true"
            animate={{ x: -10, y: 12, scale: 1.08 }}
            transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            className="pointer-events-none absolute -bottom-12 -left-12 h-44 w-44 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, var(--accent-flame-lt), transparent 70%)' }}
          />

          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="eyebrow">Featured Scripture</p>

              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-5 text-3xl tracking-tight text-navy-950 sm:text-4xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                "Your word is a lamp to my feet and a light to my path."
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-4 text-lg font-medium"
                style={{ color: 'var(--accent-vivid)' }}
              >
                Psalm 119:105
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-6 max-w-2xl text-base leading-8 text-slate-600"
              >
                Every sermon we share is intended to point people to Christ,
                ground faith in Scripture and strengthen daily Christian living.
                This section becomes a welcoming doorway for visitors who want to
                hear the heart of the church before they attend in person.
              </motion.p>
            </div>

            {/* Scripture reflection card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-2xl border border-church-border bg-white/90 p-6 backdrop-blur"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div
                className="mb-4 h-1 w-10 rounded-full"
                style={{ background: 'var(--accent-vivid)' }}
              />
              <p className="text-sm font-semibold uppercase tracking-widest text-navy-900">
                Scripture reflection
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                The Word of God guides, corrects, comforts and strengthens His
                people. A strong sermons page helps visitors and members alike
                keep returning to biblical truth throughout the week.
              </p>

              <motion.div
                animate={{ width: ['6rem', '9rem', '6rem'] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                className="mt-6 h-1 rounded-full"
                style={{ background: 'var(--accent-vivid)' }}
              />
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* ── Sermons grid ───────────────────────────────────────────────────── */}
      <Section
        title="Recent messages"
        intro="Our preaching seeks to be Christ-centred, rooted in Scripture and relevant to everyday life."
      >
        <SermonsGrid items={sermons} columns={2} />
      </Section>

      {/* ── Guidance section ───────────────────────────────────────────────── */}
      <Section
        title="Using this section well"
        intro="A well-maintained sermons page helps visitors hear the church's voice and theology before they attend."
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">

          <div
            className="prose-content max-w-none rounded-3xl border border-church-border bg-white p-8"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <h2>What to include</h2>
            <p>
              This page works best when each sermon includes a clear title,
              speaker name, date and a direct link to audio, video or written
              notes.
            </p>
            <p>
              You may also wish to organise sermons by series, Bible book, guest
              speaker or ministry theme as the library grows.
            </p>
          </div>

          <div
            className="relative overflow-hidden rounded-3xl p-8 text-white"
            style={{
              background: 'linear-gradient(135deg, #0f0c29 0%, #1e1b4b 45%, #172554 100%)',
              boxShadow: '0 8px 32px 0 rgba(15,23,42,0.28)'
            }}
          >
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, #6D28D9, transparent 70%)' }}
            />
            <div className="relative">
              <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Helpful note
              </p>
              <h3
                className="mt-4 text-2xl tracking-tight text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Keep sermon links current
              </h3>
              <p className="mt-4 text-base leading-7 text-white/75">
                Before launch, replace placeholder links with your real sermon
                platform, whether that is YouTube, SoundCloud, a podcast feed or
                uploaded message notes.
              </p>
            </div>
          </div>

        </div>
      </Section>
    </>
  );
}