'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navigation, siteConfig } from '../content/siteContent';

const mapsQuery = encodeURIComponent(`${siteConfig.addressLine1}, ${siteConfig.addressLine2}`);

function isCurrent(pathname, href) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname() || '/';
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  // Links shown in the bar itself: the logo links home and "Plan your visit" is the button
  const barLinks = navigation.filter((item) => item.href !== '/visit' && item.href !== '/');

  return (
    <>
      {/* Utility bar: the answer to "when and where?" on every page */}
      <aside aria-label="Service times and location" className="border-b border-white/10 bg-[#071229] text-sm text-white">
        <div className="container-page flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2">
          <p className="max-w-none">
            <span className="font-semibold text-gold-300">Sundays</span> Prayer 10:00am · Worship
            11:00am
          </p>
          <p className="hidden max-w-none sm:block">
            {siteConfig.addressLine1}, Edinburgh{' '}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}
              className="ml-2 font-semibold text-white hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
        </div>
      </aside>

      <header
        className={`sticky top-0 z-40 border-b border-white/10 text-white backdrop-blur-xl transition-all duration-300 ${
          scrolled ? 'bg-navy-900/95 shadow-lift' : 'bg-navy-900'
        }`}
      >
        <div className="container-page flex h-[4.5rem] items-center justify-between gap-6">
          <Link href="/" className="group flex min-w-0 items-center gap-3 text-white no-underline hover:text-white">
            <span className="relative block h-12 w-12 shrink-0 rounded-xl bg-white p-1">
              <Image src="/images/logo-mark.png" alt="" fill sizes="48px" className="object-contain p-1" priority />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-[0.95rem] font-extrabold uppercase leading-tight tracking-[0.04em] text-white group-hover:underline sm:whitespace-nowrap sm:text-lg">
                {siteConfig.shortName}
              </span>
              <span className="hidden text-xs font-semibold uppercase tracking-[0.12em] text-gold-300 sm:block sm:whitespace-nowrap">
                Assemblies of God · Edinburgh
              </span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center">
              {barLinks.map((item) => {
                const current = isCurrent(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={current ? 'page' : undefined}
                      className={`relative block whitespace-nowrap px-2.5 py-2 text-[0.8rem] font-bold uppercase tracking-[0.1em] no-underline transition-colors hover:text-white ${
                        current
                          ? 'text-white after:absolute after:inset-x-2.5 after:-bottom-1 after:h-0.5 after:bg-gold-300'
                          : 'text-white/80'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <Link href="/visit" className="btn btn-gold btn-sm hidden sm:inline-flex">
              Plan your visit
            </Link>
            <button
              ref={toggleRef}
              type="button"
              className="inline-flex min-h-[2.75rem] items-center gap-2 rounded-full px-4 text-sm font-bold uppercase tracking-[0.12em] text-white ring-2 ring-inset ring-white/80 xl:hidden"
              aria-controls="mobile-navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen ? (
                  <path d="M4 4l12 12M16 4L4 16" />
                ) : (
                  <path d="M2 5h16M2 10h16M2 15h16" />
                )}
              </svg>
              Menu
            </button>
          </div>
        </div>

        <nav
          id="mobile-navigation"
          aria-label="Main"
          hidden={!menuOpen}
          className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-white/10 bg-navy-900 xl:hidden"
        >
          <ul className="container-page grid gap-2 py-4 sm:grid-cols-2">
            {navigation.map((item) => {
              const current = isCurrent(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? 'page' : undefined}
                    className={`flex items-center justify-between rounded-xl border px-4 py-3 text-base font-bold uppercase tracking-[0.1em] no-underline hover:bg-white/10 hover:text-white ${
                      current ? 'border-gold-300/70 bg-white/10 text-white' : 'border-white/15 text-white/90'
                    }`}
                  >
                    {item.label}
                    <span aria-hidden="true" className="text-gold-300">→</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="container-page border-t border-white/10 py-4 sm:hidden">
            <Link href="/visit" className="btn btn-gold w-full">
              Plan your visit
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
