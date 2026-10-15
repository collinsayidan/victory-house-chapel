'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navigation, siteConfig } from '../content/siteContent';

function isCurrent(pathname, href) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname() || '/';
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu after navigating
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        document.getElementById('menu-toggle')?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header className="bg-navy-900 text-white">
      <div className="container-page flex items-center justify-between gap-4 py-3">
        <Link
          href="/"
          className="group flex items-center gap-3 text-white no-underline hover:text-white"
        >
          <span className="relative block h-12 w-12 shrink-0 overflow-hidden rounded bg-white sm:h-14 sm:w-14">
            <Image
              src="/images/logo-mark.png"
              alt=""
              fill
              sizes="56px"
              className="object-contain p-0.5"
              priority
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold group-hover:underline sm:text-xl">
              {siteConfig.shortName}
            </span>
            <span className="text-sm text-gold-300">Assemblies of God, Edinburgh</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link href="/visit" className="btn btn-gold hidden md:inline-flex">
            Plan your visit
          </Link>
          <button
            id="menu-toggle"
            type="button"
            className="inline-flex min-h-[2.75rem] items-center gap-2 rounded border-2 border-white px-3 font-semibold text-white lg:hidden"
            aria-controls="site-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" className="text-xl leading-none">
              {menuOpen ? '×' : '☰'}
            </span>
            Menu
          </button>
        </div>
      </div>

      <div className="h-1 bg-gold-500" aria-hidden="true" />

      <nav
        id="site-navigation"
        aria-label="Main"
        className={`border-b border-line-light bg-white ${menuOpen ? 'block' : 'hidden'} lg:block`}
      >
        <ul className="container-page flex flex-col py-2 lg:flex-row lg:flex-wrap lg:gap-x-6 lg:py-0">
          {navigation.map((item) => {
            const current = isCurrent(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={current ? 'page' : undefined}
                  className={`block border-l-4 py-3 pl-3 font-semibold no-underline hover:underline lg:border-l-0 lg:border-b-4 lg:pl-0 lg:pt-4 lg:pb-3 ${
                    current
                      ? 'border-navy-900 text-navy-900'
                      : 'border-transparent text-navy-700'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
