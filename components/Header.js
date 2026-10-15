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
      <aside aria-label="Service times and location" className="bg-navy-900 text-sm text-white">
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
        className={`sticky top-0 z-40 border-b bg-white/95 backdrop-blur transition-shadow ${
          scrolled ? 'border-line-light shadow-card' : 'border-transparent'
        }`}
      >
        <div className="container-page flex h-[4.5rem] items-center justify-between gap-6">
          <Link href="/" className="group flex min-w-0 items-center gap-3 text-ink no-underline hover:text-ink">
            <span className="relative block h-12 w-12 shrink-0">
              <Image src="/images/logo-mark.png" alt="" fill sizes="48px" className="object-contain" priority />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base font-bold text-navy-900 group-hover:underline sm:text-xl">
                {siteConfig.shortName}
              </span>
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-gold-800 sm:text-xs">
                Assemblies of God · Edinburgh
              </span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {barLinks.map((item) => {
                const current = isCurrent(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={current ? 'page' : undefined}
                      className={`relative block rounded-md px-3 py-2 text-[0.975rem] font-semibold no-underline hover:bg-navy-50 hover:text-navy-900 ${
                        current
                          ? 'text-navy-900 after:absolute after:inset-x-3 after:-bottom-[0.95rem] after:h-1 after:bg-gold-500'
                          : 'text-ink/85'
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
            <Link href="/visit" className="btn btn-primary btn-sm hidden sm:inline-flex">
              Plan your visit
            </Link>
            <button
              ref={toggleRef}
              type="button"
              className="inline-flex min-h-[2.75rem] items-center gap-2 rounded-md px-3 font-semibold text-navy-900 ring-2 ring-inset ring-navy-900 xl:hidden"
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
          className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-line-light bg-white xl:hidden"
        >
          <ul className="container-page grid gap-1 py-4 sm:grid-cols-2">
            {navigation.map((item) => {
              const current = isCurrent(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? 'page' : undefined}
                    className={`block rounded-md border-l-4 px-4 py-3 text-lg font-semibold no-underline hover:bg-navy-50 ${
                      current ? 'border-gold-500 bg-navy-50 text-navy-900' : 'border-transparent text-navy-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="container-page border-t border-line-light py-4 sm:hidden">
            <Link href="/visit" className="btn btn-primary w-full">
              Plan your visit
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
