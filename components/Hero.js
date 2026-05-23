'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

/* ─── Overlay gradients ────────────────────────────────────────────────────── */
const overlays = {
  about:      'bg-[linear-gradient(135deg,rgba(15,12,41,0.90)_0%,rgba(30,27,75,0.82)_40%,rgba(23,37,84,0.70)_100%)]',
  ministries: 'bg-[linear-gradient(135deg,rgba(15,12,41,0.90)_0%,rgba(30,41,59,0.80)_45%,rgba(201,168,76,0.25)_100%)]',
  events:     'bg-[linear-gradient(135deg,rgba(15,12,41,0.90)_0%,rgba(30,27,75,0.80)_50%,rgba(109,40,217,0.35)_100%)]',
  sermons:    'bg-[linear-gradient(135deg,rgba(17,24,39,0.92)_0%,rgba(31,41,55,0.82)_45%,rgba(109,40,217,0.28)_100%)]',
  donate:     'bg-[linear-gradient(135deg,rgba(15,12,41,0.90)_0%,rgba(30,27,75,0.80)_40%,rgba(234,88,12,0.28)_100%)]',
  contact:    'bg-[linear-gradient(135deg,rgba(15,12,41,0.90)_0%,rgba(30,27,75,0.80)_40%,rgba(109,40,217,0.35)_100%)]',
  gallery:    'bg-[linear-gradient(135deg,rgba(15,12,41,0.88)_0%,rgba(30,27,75,0.76)_40%,rgba(201,168,76,0.18)_100%)]',
  default:    'bg-[linear-gradient(135deg,rgba(15,12,41,0.92)_0%,rgba(30,27,75,0.85)_35%,rgba(23,37,84,0.75)_65%,rgba(49,86,163,0.60)_100%)]',
};

/* ─── Stagger variants ─────────────────────────────────────────────────────── */
const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};

const heroItem = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
};

export default function Hero({
  title,
  intro,
  eyebrow,
  primaryCta,
  secondaryCta,
  backgroundImage = '/images/hero/Church-Worship.jpeg',
  overlay = 'default',
  align = 'left',
  variant = 'default',
  heroPanel = null
}) {
  const overlayClass = overlays[overlay] ?? overlays.default;
  const isPremium    = variant === 'premium';
  const hasPanel     = isPremium && heroPanel;

  const contentAlign =
    align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left';

  return (
    <section
      className={`relative overflow-hidden bg-navy-950 text-white ${
        isPremium ? 'flex min-h-[88vh] items-center' : ''
      }`}
    >
      {/* ── Background image ──────────────────────────────────────────────── */}
      {isPremium ? (
        <motion.div
          initial={{ scale: 1.08, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <Image src={backgroundImage} alt="" fill priority className="object-cover" />
        </motion.div>
      ) : (
        <div className="absolute inset-0">
          <Image src={backgroundImage} alt="" fill priority className="object-cover" />
        </div>
      )}

      {/* ── Overlay ───────────────────────────────────────────────────────── */}
      <div className={`absolute inset-0 ${overlayClass}`} />

      {/* ── Vivid accent glow orbs — both variants ────────────────────────── */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-25"
        style={{ background: 'radial-gradient(circle, var(--gold), transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 left-0 h-56 w-56 rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #EA580C, transparent 70%)' }}
      />

      {/* ── Premium extra effects ──────────────────────────────────────────── */}
      {isPremium && (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.72),rgba(15,23,42,0.34),rgba(15,23,42,0.46))]" />
          <motion.div
            animate={{ y: [0, -10, 0], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute -top-12 right-8 h-64 w-64 rounded-full blur-3xl"
            style={{ background: 'rgba(201,168,76,0.15)' }}
          />
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [0.14, 0.22, 0.14] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute -bottom-16 left-0 h-72 w-72 rounded-full blur-3xl"
            style={{ background: 'rgba(23,37,84,0.15)' }}
          />
        </>
      )}

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div
        className={`relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${
          isPremium ? 'py-24 lg:py-32' : 'py-16 lg:py-24'
        }`}
      >
        <div
          className={
            hasPanel
              ? 'grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center'
              : 'block'
          }
        >
          {/* ── Text block ────────────────────────────────────────────────── */}
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="show"
            className={`flex max-w-4xl flex-col ${contentAlign}`}
          >
            {/* Eyebrow */}
            {eyebrow && (
              <motion.p
                variants={heroItem}
                className={
                  isPremium
                    ? 'mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/80 backdrop-blur'
                    : 'mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/65'
                }
              >
                {/* Vivid accent bar */}
                <span
                  className="inline-block h-0.5 w-6 rounded-full flex-shrink-0"
                  style={{ background: '#C9A84C' }}
                />
                {eyebrow}
              </motion.p>
            )}

            {/* Title */}
            <motion.h1
              variants={heroItem}
              className={`tracking-tight text-white ${
                isPremium
                  ? 'text-4xl sm:text-5xl lg:text-7xl lg:leading-[1.02]'
                  : 'text-4xl sm:text-5xl'
              } ${align === 'center' ? 'max-w-5xl' : 'max-w-4xl'}`}
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {title}
            </motion.h1>

            {/* Intro */}
            <motion.p
              variants={heroItem}
              className={`mt-6 text-lg leading-8 text-white/80 ${
                align === 'center' ? 'max-w-3xl' : 'max-w-2xl'
              }`}
            >
              {intro}
            </motion.p>

            {/* CTAs */}
            {(primaryCta || secondaryCta) && (
              <motion.div
                variants={heroItem}
                className={`mt-8 flex flex-wrap items-center gap-4 ${
                  align === 'center' ? 'justify-center' : ''
                }`}
              >
                {primaryCta && (
                  <Link href={primaryCta.href} className="btn-primary">
                    {primaryCta.label}
                  </Link>
                )}
                {secondaryCta && (
                  <Link href={secondaryCta.href} className="btn-ghost">
                    {secondaryCta.label}
                  </Link>
                )}
              </motion.div>
            )}
          </motion.div>

          {/* ── Premium panel ─────────────────────────────────────────────── */}
          {hasPanel && (
            <motion.div
              initial={{ opacity: 0, x: 24, y: 16 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="relative hidden lg:block"
            >
              {/* Decorative corner blocks */}
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur" />
              <div className="absolute -bottom-6 -right-4 h-20 w-20 rounded-full border border-white/10 bg-white/5 backdrop-blur" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
                {/* Vivid inner glow */}
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-30"
                  style={{ background: 'radial-gradient(circle, var(--gold), transparent 70%)' }}
                />

                {heroPanel.image && (
                  <div className="relative mb-5 overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={heroPanel.image}
                      alt={heroPanel.imageAlt || heroPanel.title || ''}
                      width={900}
                      height={700}
                      className="h-56 w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
                  </div>
                )}

                {heroPanel.kicker && (
                  <p
                    className="relative text-xs font-semibold uppercase tracking-widest"
                    style={{ color: '#C9A84C' }}
                  >
                    {heroPanel.kicker}
                  </p>
                )}

                {heroPanel.title && (
                  <h3
                    className="relative mt-2 text-2xl tracking-tight text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {heroPanel.title}
                  </h3>
                )}

                {heroPanel.text && (
                  <p className="relative mt-3 text-sm leading-7 text-white/75">
                    {heroPanel.text}
                  </p>
                )}

                {heroPanel.items?.length > 0 && (
                  <div className="relative mt-5 space-y-2">
                    {heroPanel.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl px-4 py-3 text-sm font-medium text-white/90"
                        style={{
                          background: 'rgba(255,255,255,0.07)',
                          borderLeft: '3px solid rgba(201,168,76,0.6)'
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}

                {heroPanel.cta && (
                  <div className="relative mt-5">
                    <Link href={heroPanel.cta.href} className="btn-primary">
                      {heroPanel.cta.label}
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}