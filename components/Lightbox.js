'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

/**
 * Accessible image viewer built on the native <dialog> element, which
 * moves focus in, traps it, and closes on Escape.
 */
export default function Lightbox({ item, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (item && !dialog.open) dialog.showModal();
    if (!item && dialog.open) dialog.close();
  }, [item]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="lightbox-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
      className="w-[min(64rem,calc(100vw-2rem))] max-w-none rounded bg-white p-0 backdrop:bg-black/80"
    >
      {item ? (
        <div>
          <div className="flex items-center justify-between gap-4 border-b border-line-light p-4">
            <h2 id="lightbox-title" className="font-sans text-xl">
              {item.title}
            </h2>
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close<span className="sr-only"> image</span>
            </button>
          </div>
          <div className="relative aspect-[3/2] bg-ink">
            <Image src={item.image} alt={item.alt} fill sizes="64rem" className="object-contain" />
          </div>
          <p className="p-4 text-base text-muted">{item.alt}</p>
        </div>
      ) : null}
    </dialog>
  );
}
