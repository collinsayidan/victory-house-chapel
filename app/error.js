'use client';

import Link from 'next/link';

export default function Error({ reset }) {
  return (
    <div className="container-page section">
      <h1>Sorry, there is a problem with this page</h1>
      <p className="mt-6">Please try again. If the problem continues, you can contact us instead.</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <button type="button" className="btn btn-primary" onClick={() => reset()}>
          Try again
        </button>
        <Link href="/contact" className="btn btn-secondary">
          Contact us
        </Link>
      </div>
    </div>
  );
}
