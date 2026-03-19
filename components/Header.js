'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { mainNavigation, moreNavigation, navigation, siteConfig } from '../content/siteContent';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-900/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-4">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden sm:h-20 sm:w-20">
            <Image
              src="/images/church-logo.jpeg"
              alt={`${siteConfig.shortName} logo`}
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="leading-tight">
            <span className="block text-lg font-semibold tracking-tight text-navy-900 sm:text-xl">
              {siteConfig.shortName}
            </span>
            <span className="block text-xs uppercase tracking-[0.18em] text-brand-600 sm:text-sm">
              Assemblies of God
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-church-text transition hover:text-brand-700"
            >
              {item.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              type="button"
              onClick={() => setMoreOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 text-sm font-medium text-church-text transition hover:text-brand-700"
              aria-expanded={moreOpen}
              aria-haspopup="menu"
            >
              More
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  moreOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="absolute right-0 top-full mt-3 w-56 overflow-hidden rounded-2xl border border-church-border bg-white shadow-xl"
                >
                  <div className="p-2">
                    {moreNavigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-xl px-4 py-3 text-sm font-medium text-church-text transition hover:bg-brand-50 hover:text-brand-700"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/visit"
            className="rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-navy-800"
          >
            Plan your visit
          </Link>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center rounded-lg border border-church-border p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-navy-900" />
          ) : (
            <Menu className="h-6 w-6 text-navy-900" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="border-t border-church-border bg-white md:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-base font-medium text-church-text transition hover:text-brand-700"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/visit"
                  onClick={() => setMenuOpen(false)}
                  className="mt-3 inline-flex items-center justify-center rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-navy-800"
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