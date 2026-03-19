'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Section from '../../components/Section';
import { CardGrid, ContentCard } from '../../components/CardGrid';
import { sermons } from '../../content/siteContent';

const floatingTransition = {
  duration: 5,
  repeat: Infinity,
  repeatType: 'reverse',
  ease: 'easeInOut'
};

export default function SermonsPageClient() {
  return (
    <>
      <Section
        title="Scripture for the season"
        intro="God’s Word remains living, active and full of hope for everyday life."
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-slate-50 p-8 shadow-soft"
        >
          <motion.div
            aria-hidden="true"
            animate={{ x: 12, y: -10, scale: 1.06 }}
            transition={floatingTransition}
            className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-200/25 blur-3xl"
          />
          <motion.div
            aria-hidden="true"
            animate={{ x: -10, y: 12, scale: 1.08 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
            className="absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-navy-900/10 blur-3xl"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_30%)]" />

          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
                Featured Scripture
              </p>

              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-3 text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl"
              >
                “Your word is a lamp to my feet and a light to my path.”
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-4 text-lg font-medium text-brand-700"
              >
                Psalm 119:105
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-6 max-w-2xl text-base leading-8 text-slate-700"
              >
                Every sermon we share is intended to point people to Christ,
                ground faith in Scripture and strengthen daily Christian living.
                This section becomes a welcoming doorway for visitors who want to
                hear the heart of the church before they attend in person.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-6 shadow-lg backdrop-blur"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-100/40 to-transparent" />

              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-900">
                  Scripture reflection
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700">
                  The Word of God guides, corrects, comforts and strengthens His
                  people. A strong sermons page helps visitors and members alike
                  keep returning to biblical truth throughout the week.
                </p>

                <motion.div
                  animate={{ width: ['6rem', '9rem', '6rem'] }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="mt-6 h-1.5 rounded-full bg-brand-500"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      <Section
        title="Recent messages"
        intro="Our preaching seeks to be Christ-centred, rooted in Scripture and relevant to everyday life."
      >
        <CardGrid
          items={sermons}
          columns={2}
          renderItem={(sermon, index) => (
            <motion.div
              key={sermon.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ContentCard
                title={sermon.title}
                tone={index % 2 === 1 ? 'soft' : 'default'}
              >
                {sermon.image && (
                  <div className="mb-4 overflow-hidden rounded-2xl">
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.35 }}
                    >
                      <Image
                        src={sermon.image}
                        alt={sermon.alt || sermon.title}
                        width={800}
                        height={500}
                        className="h-56 w-full object-cover"
                      />
                    </motion.div>
                  </div>
                )}

                <p>
                  <strong>Speaker:</strong> {sermon.speaker}
                </p>
                <p>
                  <strong>Date:</strong> {sermon.date}
                </p>
                <p>{sermon.summary}</p>

                {sermon.href && (
                  <p>
                    <Link
                      href={sermon.href}
                      className="font-semibold text-brand-700 underline underline-offset-4 transition hover:text-brand-800"
                      target={sermon.href.startsWith('http') ? '_blank' : undefined}
                      rel={
                        sermon.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                    >
                      {sermon.linkLabel || 'Listen or read message notes'}
                    </Link>
                  </p>
                )}
              </ContentCard>
            </motion.div>
          )}
        />
      </Section>

      <Section
        title="Using this section well"
        intro="A well-maintained sermons page helps visitors hear the church’s voice and theology before they attend."
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-2xl border border-church-border bg-white p-6 shadow-soft prose-content max-w-none">
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

          <div className="rounded-2xl border border-navy-800/30 bg-navy-950 p-6 shadow-navy">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">
              Helpful note
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              Keep sermon links current
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-200">
              Before launch, replace placeholder links with your real sermon
              platform, whether that is YouTube, SoundCloud, a podcast feed or
              uploaded message notes.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}