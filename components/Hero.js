'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
  const overlayClass =
    overlay === 'about'
      ? 'bg-[linear-gradient(135deg,rgba(23,37,84,0.82)_0%,rgba(34,53,95,0.76)_35%,rgba(40,64,122,0.68)_65%,rgba(49,86,163,0.58)_100%)]'
      : overlay === 'ministries'
        ? 'bg-[linear-gradient(135deg,rgba(15,23,42,0.86)_0%,rgba(30,41,59,0.78)_45%,rgba(37,99,235,0.42)_100%)]'
        : overlay === 'events'
          ? 'bg-[linear-gradient(135deg,rgba(23,37,84,0.88)_0%,rgba(30,64,175,0.70)_55%,rgba(59,130,246,0.46)_100%)]'
          : overlay === 'sermons'
            ? 'bg-[linear-gradient(135deg,rgba(17,24,39,0.90)_0%,rgba(31,41,55,0.78)_45%,rgba(37,99,235,0.34)_100%)]'
            : overlay === 'donate'
              ? 'bg-[linear-gradient(135deg,rgba(23,37,84,0.88)_0%,rgba(34,53,95,0.78)_40%,rgba(180,132,24,0.34)_100%)]'
              : overlay === 'contact'
                ? 'bg-[linear-gradient(135deg,rgba(23,37,84,0.88)_0%,rgba(34,53,95,0.78)_40%,rgba(66,103,214,0.42)_100%)]'
                : overlay === 'gallery'
                  ? 'bg-[linear-gradient(135deg,rgba(23,37,84,0.84)_0%,rgba(34,53,95,0.70)_40%,rgba(247,204,85,0.18)_100%)]'
                  : 'bg-[linear-gradient(135deg,rgba(23,37,84,0.88)_0%,rgba(34,53,95,0.82)_35%,rgba(40,64,122,0.72)_65%,rgba(49,86,163,0.62)_100%)]';

  const isPremium = variant === 'premium';
  const hasPanel = isPremium && heroPanel;

  const contentAlign =
    align === 'center'
      ? 'mx-auto items-center text-center'
      : 'items-start text-left';

  return (
    <section
      className={`relative overflow-hidden bg-navy-950 text-white ${
        isPremium ? 'min-h-[88vh] flex items-center' : ''
      }`}
    >
      {isPremium ? (
        <motion.div
          initial={{ scale: 1.08, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      ) : (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      <div className={`absolute inset-0 ${overlayClass}`} />

      {isPremium && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,162,255,0.20),transparent_28%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(247,204,85,0.10),transparent_22%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.72),rgba(15,23,42,0.34),rgba(15,23,42,0.46))]" />
          <motion.div
            animate={{ y: [0, -10, 0], opacity: [0.2, 0.28, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-12 right-8 h-64 w-64 rounded-full bg-brand-300/10 blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [0.14, 0.22, 0.14] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-16 left-0 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl"
          />
        </>
      )}

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
          <div className={`flex max-w-4xl flex-col ${contentAlign}`}>
            {eyebrow ? (
              isPremium ? (
                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.1 }}
                  className="mb-5 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-brand-300 backdrop-blur"
                >
                  {eyebrow}
                </motion.p>
              ) : (
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">
                  {eyebrow}
                </p>
              )
            ) : null}

            {isPremium ? (
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.16 }}
                className={`text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl lg:leading-[1.02] ${
                  align === 'center' ? 'max-w-5xl' : 'max-w-4xl'
                }`}
              >
                {title}
              </motion.h1>
            ) : (
              <h1
                className={`text-4xl font-bold tracking-tight text-white sm:text-5xl ${
                  align === 'center' ? 'max-w-4xl' : 'max-w-3xl'
                }`}
              >
                {title}
              </h1>
            )}

            {isPremium ? (
              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.28 }}
                className={`mt-6 text-lg leading-8 text-slate-100 lg:text-xl ${
                  align === 'center' ? 'max-w-3xl' : 'max-w-2xl'
                }`}
              >
                {intro}
              </motion.p>
            ) : (
              <p
                className={`mt-6 text-lg leading-8 text-slate-100 ${
                  align === 'center' ? 'max-w-3xl' : 'max-w-2xl'
                }`}
              >
                {intro}
              </p>
            )}

            {(primaryCta || secondaryCta) && (
              <>
                {isPremium ? (
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className={`mt-8 flex flex-wrap items-center gap-4 ${
                      align === 'center' ? 'justify-center' : ''
                    }`}
                  >
                    {primaryCta && (
                      <Link
                        href={primaryCta.href}
                        className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-900 shadow-lg transition duration-200 hover:bg-brand-50 hover:shadow-xl"
                      >
                        {primaryCta.label}
                      </Link>
                    )}

                    {secondaryCta && (
                      <Link
                        href={secondaryCta.href}
                        className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition duration-200 hover:border-brand-200/50 hover:bg-white/15"
                      >
                        {secondaryCta.label}
                      </Link>
                    )}
                  </motion.div>
                ) : (
                  <div
                    className={`mt-8 flex flex-wrap items-center gap-4 ${
                      align === 'center' ? 'justify-center' : ''
                    }`}
                  >
                    {primaryCta && (
                      <Link
                        href={primaryCta.href}
                        className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-900 shadow-soft transition duration-200 hover:bg-brand-50"
                      >
                        {primaryCta.label}
                      </Link>
                    )}

                    {secondaryCta && (
                      <Link
                        href={secondaryCta.href}
                        className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-white/10"
                      >
                        {secondaryCta.label}
                      </Link>
                    )}
                  </div>
                )}
              </>
            )}
          </div>

          {hasPanel ? (
            <motion.div
              initial={{ opacity: 0, x: 24, y: 16 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease: 'easeOut' }}
              className="relative hidden lg:block"
            >
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur" />
              <div className="absolute -bottom-6 -right-4 h-20 w-20 rounded-full border border-white/10 bg-white/5 backdrop-blur" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
                {heroPanel.image ? (
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
                ) : null}

                {heroPanel.kicker ? (
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">
                    {heroPanel.kicker}
                  </p>
                ) : null}

                {heroPanel.title ? (
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                    {heroPanel.title}
                  </h3>
                ) : null}

                {heroPanel.text ? (
                  <p className="mt-3 text-sm leading-7 text-slate-200">
                    {heroPanel.text}
                  </p>
                ) : null}

                {heroPanel.items?.length ? (
                  <div className="mt-5 space-y-3">
                    {heroPanel.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                ) : null}

                {heroPanel.cta ? (
                  <div className="mt-5">
                    <Link
                      href={heroPanel.cta.href}
                      className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy-900 shadow-lg transition duration-200 hover:bg-brand-50"
                    >
                      {heroPanel.cta.label}
                    </Link>
                  </div>
                ) : null}
              </div>
            </motion.div>
          ) : null}
        </div>
      </div>
    </section>
  );
}