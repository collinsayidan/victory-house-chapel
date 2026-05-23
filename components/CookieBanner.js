'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STORAGE_KEY = 'vhc-cookie-consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) setVisible(true);
  }, []);

  function saveChoice(choice) {
    window.localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-4 bottom-4 z-50 sm:inset-x-auto sm:right-4 sm:w-full sm:max-w-md"
        >
          <div
            className="relative overflow-hidden rounded-2xl bg-white p-5"
            role="dialog"
            aria-label="Cookie consent banner"
            style={{
              border: '1px solid rgba(13,27,62,0.10)',
              boxShadow: '0 8px 40px rgba(13,27,62,0.16), 0 2px 8px rgba(13,27,62,0.08)'
            }}
          >
            {/* Navy → gold top bar */}
            <div
              className="absolute inset-x-0 top-0 h-1 rounded-t-2xl"
              style={{ background: 'linear-gradient(90deg, var(--navy), var(--navy-lt), var(--gold-mid))' }}
            />

            <div className="pt-1">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'var(--gold-dk)' }}
              >
                Cookie settings
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                We use necessary cookies to keep this site working. Non-essential
                cookies (such as analytics) are optional — you choose.
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Read our{' '}
                <Link
                  href="/cookie-policy"
                  className="font-semibold underline underline-offset-2 transition-colors duration-200"
                  style={{ color: 'var(--navy)' }}
                >
                  Cookie Policy
                </Link>
                .
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => saveChoice('accepted')}
                  className="btn-primary px-4 py-2 text-xs"
                >
                  Accept all
                </button>
                <button
                  type="button"
                  onClick={() => saveChoice('rejected')}
                  className="btn-secondary px-4 py-2 text-xs"
                >
                  Reject non-essential
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}