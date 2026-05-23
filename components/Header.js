'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { mainNavigation, moreNavigation, navigation, siteConfig } from '../content/siteContent';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navHoverIn = (e) => {
    e.currentTarget.style.background = 'var(--navy-pale)';
    e.currentTarget.style.color = 'var(--navy)';
  };
  const navHoverOut = (e) => {
    e.currentTarget.style.background = 'transparent';
    e.currentTarget.style.color = 'var(--navy)';
  };

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled
          ? '1px solid rgba(13,27,62,0.10)'
          : '1px solid rgba(13,27,62,0.06)',
        boxShadow: scrolled ? '0 2px 24px 0 rgba(13,27,62,0.08)' : 'none'
      }}
    >
      <div
        className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        style={{
          paddingTop:    scrolled ? '0.65rem' : '0.85rem',
          paddingBottom: scrolled ? '0.65rem' : '0.85rem',
          transition: 'padding 0.3s ease'
        }}
      >
        {/* ── Logo ──────────────────────────────────────────────────────── */}
        <Link href="/" className="flex items-center gap-3">
          <div
            className="relative shrink-0 overflow-hidden rounded-xl"
            style={{ width: '72px', height: '72px' }}
          >
            <Image
              src="/images/church-logo.jpeg"
              alt={`${siteConfig.shortName} logo`}
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <span
              className="block font-semibold tracking-tight"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: scrolled ? '1rem' : '1.1rem',
                color: 'var(--navy)'
              }}
            >
              {siteConfig.shortName}
            </span>
            <span
              className="block text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'var(--gold)', letterSpacing: '0.18em' }}
            >
              Assemblies of God
            </span>
          </div>
        </Link>

        {/* ── Desktop nav ───────────────────────────────────────────────── */}
        <nav className="hidden items-center gap-1 md:flex">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200"
              style={{ color: 'var(--navy)' }}
              onMouseEnter={navHoverIn}
              onMouseLeave={navHoverOut}
            >
              {item.label}
            </Link>
          ))}

          {/* More dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              type="button"
              onClick={() => setMoreOpen((v) => !v)}
              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200"
              style={{ color: 'var(--navy)' }}
              aria-expanded={moreOpen}
              aria-haspopup="menu"
              onMouseEnter={navHoverIn}
              onMouseLeave={navHoverOut}
            >
              More
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.97 }}
                  transition={{ duration: 0.16, ease: 'easeOut' }}
                  className="absolute right-0 top-full mt-2 w-56 overflow-hidden rounded-2xl bg-white"
                  style={{
                    border: '1px solid rgba(13,27,62,0.12)',
                    boxShadow: '0 8px 32px 0 rgba(13,27,62,0.14), 0 2px 8px 0 rgba(13,27,62,0.06)'
                  }}
                >
                  {/* Navy → gold top strip */}
                  <div
                    className="h-1 w-full"
                    style={{ background: 'linear-gradient(90deg, var(--navy), var(--navy-lt), var(--gold-mid))' }}
                  />
                  <div className="p-2">
                    {moreNavigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-150"
                        style={{ color: 'var(--navy)' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'var(--navy-pale)';
                          e.currentTarget.style.color = 'var(--navy)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = 'var(--navy)';
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA — navy → royal navy gradient, gold on hover */}
          <Link
            href="/contact"
            className="ml-3 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-lt) 100%)',
              boxShadow: '0 2px 12px 0 rgba(13,27,62,0.30)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, var(--navy-md) 0%, var(--gold) 100%)';
              e.currentTarget.style.boxShadow = '0 4px 20px 0 rgba(184,149,63,0.35)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, var(--navy) 0%, var(--navy-lt) 100%)';
              e.currentTarget.style.boxShadow = '0 2px 12px 0 rgba(13,27,62,0.30)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Plan your visit
          </Link>
        </nav>

        {/* ── Mobile toggle ─────────────────────────────────────────────── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center rounded-xl border p-2 transition-all duration-200 md:hidden"
          style={{ borderColor: 'rgba(13,27,62,0.18)', color: 'var(--navy)' }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* ── Mobile menu ───────────────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="overflow-hidden md:hidden"
            style={{ borderTop: '1px solid rgba(13,27,62,0.08)', background: 'white' }}
          >
            <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
              {/* Navy → gold divider */}
              <div
                className="mb-5 h-0.5 w-full rounded-full"
                style={{ background: 'linear-gradient(90deg, var(--navy), var(--navy-lt), var(--gold-mid))' }}
              />
              <nav className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-medium transition-all duration-150"
                    style={{ color: 'var(--navy)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--navy-pale)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Mobile CTA — navy with gold hover */}
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white transition-all duration-200"
                  style={{
                    background: 'linear-gradient(135deg, var(--navy) 0%, var(--navy-lt) 100%)',
                    boxShadow: '0 4px 16px 0 rgba(13,27,62,0.25)'
                  }}
                >
                  Plan your visit
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}