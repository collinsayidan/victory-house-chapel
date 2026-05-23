'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import HomeHeroSlider from '../components/HomeHeroSlider';
import { galleryItems, homeHighlights, siteConfig } from '../content/siteContent';

/* ─── Shared animation presets ─────────────────────────────────────────────── */
const ease = [0.16, 1, 0.3, 1];

const fadeUp = {
  initial:     { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, amount: 0.12 }
};

const stagger = {
  initial:     {},
  whileInView: { transition: { staggerChildren: 0.10 } },
  viewport:    { once: true, amount: 0.08 }
};

const child = {
  initial:     { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 }
};

/* ─── Tiny reusable accent bar ──────────────────────────────────────────────── */
function AccentBar() {
  return (
    <div
      className="mb-5 h-0.5 w-12 rounded-full"
      style={{ background: 'linear-gradient(90deg, var(--gold-mid), var(--violet-mid))' }}
    />
  );
}

/* ─── Service time pill ─────────────────────────────────────────────────────── */
function TimePill({ time }) {
  return (
    <div
      className="service-time-item"
      style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}
    >
      {time}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════ */
export default function HomePageClient() {
  return (
    <>

      {/* ══════════════════════════════════════════════════════════════════
          1. HERO SLIDER
      ══════════════════════════════════════════════════════════════════ */}
      <HomeHeroSlider
        slides={[
          {
            eyebrow: 'Welcome to Victory House Chapel',
            title: 'A place to worship, grow and belong.',
            intro: 'A welcoming Christ-centred church in Edinburgh where people of all backgrounds can encounter Jesus, grow in faith and find genuine community.',
            image: '/images/hero/worship.webp',
            imageAlt: 'Worship at Victory House Chapel',
            primaryCta:   { href: '/contact', label: 'Plan your visit' },
            secondaryCta: { href: '/about',   label: 'Learn more' },
            panelKicker: 'This Sunday',
            panelTitle: 'Join us for worship',
            panelText: 'Come and be part of a warm church family gathered around worship, prayer and the Word of God.',
            panelImage: '/images/hero/church-activities.jpeg',
            panelImageAlt: 'Church worship and fellowship',
            panelItems: siteConfig.serviceTimes.slice(0, 3)
          },
          {
            eyebrow: 'Prayer changes everything',
            title: 'A praying church with a heart for God and people.',
            intro: 'We believe in Spirit-led prayer, biblical teaching and the transforming power of God in everyday life.',
            image: '/images/hero/Church-Worship.jpeg',
            imageAlt: 'Prayer and worship gathering',
            primaryCta:   { href: '/events',  label: 'See gatherings' },
            secondaryCta: { href: '/sermons', label: 'Listen to sermons' },
            panelKicker: 'Midweek',
            panelTitle: 'Prayer and discipleship',
            panelText: 'Gather with us during the week as we pray together and grow as disciples of Jesus.',
            panelImage: '/images/prayer/prayer-04.jpg',
            panelImageAlt: 'Prayer gathering',
            panelItems: ['Wednesday prayer gathering', 'Biblical encouragement', 'Warm fellowship']
          },
          {
            eyebrow: 'You are invited',
            title: 'Come as you are and encounter the love of Christ.',
            intro: 'Whether you are exploring faith, returning to church or looking for a church home, you will be warmly welcomed.',
            image: '/images/hero/victory-voices-ministration-01.jpeg',
            imageAlt: 'Welcome to church service',
            primaryCta:   { href: '/contact', label: 'Get in touch' },
            secondaryCta: { href: '/about',   label: 'About the church' },
            panelKicker: 'First visit',
            panelTitle: 'We would love to welcome you',
            panelText: 'Our services include worship, prayer, biblical teaching and time to connect with others.',
            panelImage: '/images/gallery/worship05.jpg',
            panelImageAlt: 'Church fellowship',
            panelItems: ['Warm welcome', 'Bible teaching', 'Prayer and fellowship']
          }
        ]}
      />

      {/* ══════════════════════════════════════════════════════════════════
          2. OVERLAPPING WELCOME CARD
          Floats above the hero — first thing visitors read after the headline.
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative z-10 mx-auto -mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, ease }}
          className="relative overflow-hidden rounded-[2rem] bg-white p-8 lg:p-12"
          style={{ boxShadow: '0 40px 100px rgba(14,27,61,0.20), 0 4px 20px rgba(14,27,61,0.08)' }}
        >
          {/* Tri-colour top border */}
          <div
            className="absolute inset-x-0 top-0 h-1 rounded-t-[2rem]"
            style={{ background: 'linear-gradient(90deg, var(--navy), var(--violet), var(--gold-mid))' }}
          />
          {/* Gold glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, var(--gold-mid), transparent 70%)' }} />
          {/* Violet glow */}
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full opacity-15"
            style={{ background: 'radial-gradient(circle, var(--violet-mid), transparent 70%)' }} />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            {/* Left — copy */}
            <div>
              <AccentBar />
              <p className="eyebrow">A church for Edinburgh</p>
              <h2
                className="mt-4 font-bold tracking-tight"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)' }}
              >
                Worship, community and{' '}
                <span style={{ color: 'var(--violet-dk)' }}>biblical teaching</span>
                {' '}in one welcoming church home
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8" style={{ color: '#475569' }}>
                Whether you are exploring faith, returning to church or looking for a place to
                belong, Victory House Chapel is here to welcome you. We gather to worship Jesus,
                grow in Scripture, pray together and serve our city with compassion.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Plan your first visit</Link>
                <Link href="/sermons" className="btn-secondary">Listen to sermons</Link>
              </div>
            </div>

            {/* Right — stacked image collage */}
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              className="grid grid-cols-2 gap-3"
            >
              <motion.div variants={child} transition={{ duration: 0.5 }}
                className="col-span-2 overflow-hidden rounded-2xl"
                style={{ boxShadow: 'var(--shadow-card)' }}>
                <Image
                  src={galleryItems[0]?.image || '/images/hero/worship.webp'}
                  alt={galleryItems[0]?.alt || 'Church worship'}
                  width={900} height={500}
                  className="h-52 w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
              {[1, 2].map((i) => (
                <motion.div key={i} variants={child} transition={{ duration: 0.5 }}
                  className="overflow-hidden rounded-2xl"
                  style={{ boxShadow: 'var(--shadow-card)' }}>
                  <Image
                    src={galleryItems[i]?.image || '/images/hero/worship.webp'}
                    alt={galleryItems[i]?.alt || 'Church life'}
                    width={500} height={400}
                    className="h-36 w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. SERVICE TIMES + VISIT INFO
          Two-panel layout — one light, one dark.
      ══════════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <AccentBar />
          <p className="eyebrow">Join us this week</p>
          <h2
            className="mt-4 font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)' }}
          >
            You are warmly invited to worship with us
          </h2>
          <p className="mt-4 text-base leading-7" style={{ color: '#475569' }}>
            Whether you are new to church, returning to faith or looking for a church home,
            you will be made welcome in Edinburgh.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Service times — light card */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.65, ease }}
            className="relative overflow-hidden rounded-3xl border border-church-border bg-white p-8"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, var(--gold-mid), transparent 70%)' }} />
            <div className="relative flex items-center justify-between">
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)', fontWeight: 700 }}
                className="text-2xl">Service times</h3>
              <span
                className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
                style={{ background: 'var(--violet-lt)', color: 'var(--violet-dk)' }}
              >Weekly</span>
            </div>
            <ul className="relative mt-6 space-y-2">
              {siteConfig.serviceTimes.map((t) => <li key={t}><TimePill time={t} /></li>)}
            </ul>
          </motion.div>

          {/* Visit info — dark gradient card */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="relative overflow-hidden rounded-3xl p-8 text-white"
            style={{ background: 'var(--gradient-card)', boxShadow: 'var(--shadow-navy)' }}
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, var(--gold-mid), transparent 70%)' }} />
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, var(--violet-mid), transparent 70%)' }} />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold-on-dark)' }}>
                Visit us
              </p>
              <h3
                className="mt-3 text-2xl font-bold tracking-tight text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Join our church family in Edinburgh
              </h3>
              <p className="mt-4 text-base leading-7 text-white/70">{siteConfig.addressLine1}</p>
              <p className="text-base leading-7 text-white/70">{siteConfig.addressLine2}</p>
              <p className="mt-4 text-base leading-7 text-white/65">
                We gather as a diverse church family to worship Jesus, hear the Bible taught
                clearly and encourage one another in faith.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact"
                  className="rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: 'var(--gold-on-dark)', color: 'var(--navy)' }}>
                  Plan your visit
                </Link>
                <Link href="/about" className="btn-ghost text-sm">About the church</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. THREE PILLARS — "What we believe & do"
          Bold statement section with alternating tones.
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="py-20"
        style={{ background: 'linear-gradient(180deg, #f8fafc 0%, var(--violet-lt) 50%, #f8fafc 100%)' }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <AccentBar />
            <p className="eyebrow mx-auto">Church life</p>
            <h2
              className="mt-4 font-bold tracking-tight"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)' }}
            >
              Built on worship, discipleship and service
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7" style={{ color: '#475569' }}>
              Our church life is centred on three things — encountering God in worship,
              growing as disciples, and serving our city with love.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            className="grid gap-6 md:grid-cols-3"
          >
            {homeHighlights.map((item, i) => {
              const tones = [
                { bg: 'white',                    border: 'rgba(14,27,61,0.08)',   heading: 'var(--navy)',    body: '#475569',              barEnd: 'var(--violet-mid)' },
                { bg: 'var(--gradient-card)',      border: 'transparent',          heading: 'white',          body: 'rgba(255,255,255,0.75)', barEnd: 'var(--gold-on-dark)' },
                { bg: 'var(--gold-lt)',             border: 'rgba(184,149,63,0.25)', heading: 'var(--navy)',    body: 'var(--gold-dk)',        barEnd: 'var(--gold-mid)' },
              ];
              const t = tones[i % 3];
              return (
                <motion.article
                  key={item.title}
                  variants={child}
                  transition={{ duration: 0.55, ease }}
                  className="group rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2"
                  style={{
                    background: t.bg,
                    borderColor: t.border,
                    boxShadow: 'var(--shadow-card)'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-xl)'; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-card)'; }}
                >
                  <div
                    className="mb-5 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-20"
                    style={{ background: `linear-gradient(90deg, var(--gold-mid), ${t.barEnd})` }}
                  />
                  <h3
                    className="text-2xl font-bold tracking-tight"
                    style={{ fontFamily: 'var(--font-display)', color: t.heading }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7" style={{ color: t.body }}>
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. FULL-BLEED SCRIPTURE BANNER
          A bold typographic moment — no cards, just words.
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-24 text-white"
        style={{ background: 'var(--gradient-brand)' }}
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, var(--gold-mid), transparent 70%)' }} />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, var(--violet-mid), transparent 70%)' }} />

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.9, ease }}
          className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: 'var(--gold-on-dark)' }}
          >
            Scripture for the season
          </p>
          <blockquote
            className="font-bold leading-tight tracking-tight text-white"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: 1.15
            }}
          >
            "Your word is a lamp to my feet
            <br className="hidden sm:block" />
            {' '}and a light to my path."
          </blockquote>
          <p
            className="mt-6 text-lg font-semibold"
            style={{ color: 'var(--gold-on-dark)' }}
          >
            Psalm 119:105
          </p>
          <div
            className="mx-auto mt-8 h-px w-24 rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, var(--gold-mid), transparent)' }}
          />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          6. GALLERY STRIP — full-bleed dark background
      ══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-20"
        style={{ background: 'linear-gradient(180deg, #0E1B3D 0%, #162247 50%, #2E2160 100%)' }}
      >
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 -translate-y-1/3 translate-x-1/3 rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, var(--gold-mid), transparent 70%)' }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold-on-dark)' }}>
                Church life in pictures
              </p>
              <h2
                className="mt-3 font-bold tracking-tight text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                A glimpse of{' '}
                <span style={{ color: 'var(--gold-on-dark)' }}>Victory House</span>
              </h2>
            </div>
            <Link
              href="/gallery"
              className="self-start rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 sm:self-auto"
            >
              View full gallery →
            </Link>
          </div>

          {/* Asymmetric image grid */}
          <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">

            {/* Large featured */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.65, ease }}
              className="group relative overflow-hidden rounded-3xl"
              style={{ boxShadow: 'var(--shadow-xl)' }}
            >
              <Image
                src={galleryItems[0]?.image || '/images/hero/worship.webp'}
                alt={galleryItems[0]?.alt || 'Church worship'}
                width={1400} height={900}
                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(14,27,61,0.80) 0%, rgba(14,27,61,0.15) 50%, transparent 100%)' }} />
              {/* Gold pip */}
              <div className="absolute left-6 top-6 h-1 w-10 rounded-full"
                style={{ background: 'linear-gradient(90deg, var(--gold-on-dark), var(--violet-mid))' }} />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold-on-dark)' }}>
                  Featured moment
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  {galleryItems[0]?.title || 'Worship at Victory House Chapel'}
                </h3>
              </div>
            </motion.div>

            {/* 2×2 thumbnails */}
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              className="grid grid-cols-2 gap-4"
            >
              {galleryItems.slice(1, 5).map((item) => (
                <motion.div
                  key={item.id}
                  variants={child}
                  transition={{ duration: 0.5 }}
                  className="group relative overflow-hidden rounded-2xl"
                  style={{ boxShadow: 'var(--shadow-navy)' }}
                >
                  <Image
                    src={item.image} alt={item.alt || item.title}
                    width={700} height={500}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(14,27,61,0.70) 0%, transparent 55%)' }} />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-sm font-medium text-white/90">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          7. QUICK LINKS — four pathways
      ══════════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <AccentBar />
          <p className="eyebrow">Explore</p>
          <h2
            className="mt-4 font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)' }}
          >
            Helpful pathways for visitors and members
          </h2>
        </div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { href: '/ministries', label: 'Explore ministries',    sub: 'Worship, youth, outreach' },
            { href: '/sermons',    label: 'Listen to sermons',     sub: 'Recent Bible teaching'    },
            { href: '/donate',     label: 'Support the church',    sub: 'Give generously'          },
            { href: '/contact',    label: 'Get in touch',          sub: 'We would love to hear from you' },
          ].map((link, i) => (
            <motion.div key={link.href} variants={child} transition={{ duration: 0.45, ease }}>
              <Link
                href={link.href}
                className="quick-link-card group flex flex-col justify-between rounded-3xl border border-church-border bg-white p-6 transition-all duration-200 hover:-translate-y-1"
                style={{ minHeight: '130px', boxShadow: 'var(--shadow-soft)' }}
              >
                <div>
                  <span
                    className="mb-1 inline-block text-xs font-semibold uppercase tracking-widest"
                    style={{ color: 'var(--violet-mid)' }}
                  >
                    0{i + 1}
                  </span>
                  <p
                    className="text-base font-semibold leading-snug"
                    style={{ color: 'var(--navy)', fontFamily: 'var(--font-display)' }}
                  >
                    {link.label}
                  </p>
                  <p className="mt-1 text-sm" style={{ color: '#64748b' }}>{link.sub}</p>
                </div>
                <span
                  className="mt-4 self-end text-xl opacity-30 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1"
                  style={{ color: 'var(--gold-mid)' }}
                >
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          8. FINAL CTA BANNER
      ══════════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.8, ease }}
          className="relative overflow-hidden rounded-[2rem] px-8 py-16 text-white lg:px-16"
          style={{ background: 'var(--gradient-brand)', boxShadow: 'var(--shadow-navy)' }}
        >
          {/* Tri-colour top bar */}
          <div
            className="absolute inset-x-0 top-0 h-1 rounded-t-[2rem]"
            style={{ background: 'linear-gradient(90deg, var(--navy), var(--violet), var(--gold-mid))' }}
          />
          {/* Glow orbs */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-25"
            style={{ background: 'radial-gradient(circle, var(--gold-mid), transparent 70%)' }} />
          <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, var(--violet-mid), transparent 70%)' }} />

          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold-on-dark)' }}>
                You are invited
              </p>
              <h2
                className="mt-4 font-bold tracking-tight text-white"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Come and worship with us{' '}
                <span style={{ color: 'var(--gold-on-dark)' }}>this Sunday</span>
              </h2>
              <p className="mt-2 text-sm font-medium uppercase tracking-widest text-white/40">
                Sunday worship · Edinburgh
              </p>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
                We would love to welcome you to Victory House Chapel. Whether you come on your own,
                with family or as a first-time visitor, there is a place for you here.
              </p>
            </div>

            {/* Service times on dark */}
            <div className="space-y-3">
              {siteConfig.serviceTimes.map((t) => (
                <div
                  key={t}
                  className="rounded-2xl px-5 py-3.5 text-sm font-medium text-white/90"
                  style={{
                    background: 'rgba(255,255,255,0.07)',
                    borderLeft: '3px solid var(--gold-on-dark)'
                  }}
                >
                  {t}
                </div>
              ))}
              <div className="mt-6 flex flex-wrap gap-3 pt-2">
                <Link href="/contact" className="btn-gold">Plan your visit</Link>
                <Link href="/about"   className="btn-ghost">Learn more</Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

    </>
  );
}