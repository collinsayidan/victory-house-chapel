'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navigation } from '../content/siteContent';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative lg:hidden">

      {/* Toggle button */}
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center rounded-xl border p-2 transition-all duration-200"
        style={{
          borderColor: open ? 'var(--violet-mid)' : 'rgba(14,27,61,0.15)',
          background:  open ? 'var(--violet-lt)' : 'white',
          color:       open ? 'var(--violet-dk)' : 'var(--navy)',
          boxShadow:   'var(--shadow-soft)'
        }}
      >
        {open
          ? <X    className="h-5 w-5" aria-hidden="true" />
          : <Menu className="h-5 w-5" aria-hidden="true" />
        }
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0,   scale: 1    }}
            exit={{    opacity: 0, y: -8,   scale: 0.97 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl bg-white"
            style={{
              width: 'min(22rem, calc(100vw - 2rem))',
              border: '1px solid rgba(79,61,140,0.15)',
              boxShadow: '0 8px 32px 0 rgba(14,27,61,0.14), 0 2px 8px 0 rgba(14,27,61,0.06)'
            }}
          >
            {/* Tri-colour top strip */}
            <div
              className="h-1 w-full"
              style={{ background: 'linear-gradient(90deg, var(--navy), var(--violet), var(--gold-mid))' }}
            />

            <nav aria-label="Mobile navigation" className="p-3">
              <ul className="grid gap-0.5">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="mobile-nav-link block rounded-xl px-4 py-3 text-base font-medium transition-all duration-150"
                      style={{ color: 'var(--navy)' }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}

                <li className="pt-3">
                  {/* Divider */}
                  <div
                    className="mb-3 h-px w-full"
                    style={{ background: 'linear-gradient(90deg, var(--navy), var(--violet), var(--gold-mid))' }}
                  />
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="inline-flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold text-white transition-all duration-200"
                    style={{
                      background: 'linear-gradient(135deg, var(--navy) 0%, var(--violet) 100%)',
                      boxShadow: '0 4px 16px 0 rgba(14,27,61,0.25)'
                    }}
                  >
                    Plan your visit
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}