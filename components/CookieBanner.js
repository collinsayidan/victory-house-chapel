'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

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

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 sm:inset-x-auto sm:right-4 sm:w-full sm:max-w-xl">
      <div
        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
        role="dialog"
        aria-label="Cookie consent banner"
      >
        <p className="text-sm leading-6 text-slate-700">
          We use necessary cookies by default to help this website work properly. Non-essential cookies,
          such as analytics cookies, are optional. You can accept all cookies or reject non-essential cookies.
        </p>
        <p className="mt-3 text-sm text-slate-700">
          Read our{' '}
          <Link href="/cookie-policy" className="font-semibold text-brand-700 underline underline-offset-2">
            Cookie Policy
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => saveChoice('accepted')}
            className="rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white"
          >
            Accept all cookies
          </button>
          <button
            type="button"
            onClick={() => saveChoice('rejected')}
            className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800"
          >
            Reject non-essential cookies
          </button>
        </div>
      </div>
    </div>
  );
}
