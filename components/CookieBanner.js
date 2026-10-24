'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'vhc-cookie-consent';

/**
 * Cookie banner in the GOV.UK style: shown at the top of the page until
 * the visitor makes a choice, then replaced by a short confirmation.
 */
export default function CookieBanner() {
  const [state, setState] = useState('hidden'); // hidden | asking | accepted | rejected

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) setState('asking');
    } catch {
      setState('asking');
    }
  }, []);

  function saveChoice(choice) {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* storage unavailable – keep the choice for this page view only */
    }
    setState(choice);
  }

  if (state === 'hidden') return null;

  return (
    <div
      role="region"
      aria-label="Cookies on this website"
      className="fixed inset-x-3 bottom-3 z-50 rounded-2xl border border-navy-900/15 bg-white shadow-lift sm:inset-x-6 sm:bottom-6"
    >
      <div className="container-page py-5">
        {state === 'asking' ? (
          <>
            <h2 className="font-sans text-xl">Cookies on this website</h2>
            <p className="mt-2">
              We use some essential cookies to make this website work. We would also like to
              set optional cookies to understand how you use the site, so we can improve it.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <button type="button" className="btn btn-primary" onClick={() => saveChoice('accepted')}>
                Accept optional cookies
              </button>
              <button type="button" className="btn btn-primary" onClick={() => saveChoice('rejected')}>
                Reject optional cookies
              </button>
              <Link href="/cookie-policy">View cookies</Link>
            </div>
          </>
        ) : (
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p>
              You have {state} optional cookies. You can{' '}
              <Link href="/cookie-policy">change your cookie settings</Link> at any time.
            </p>
            <button type="button" className="btn btn-secondary" onClick={() => setState('hidden')}>
              Hide cookie message
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
