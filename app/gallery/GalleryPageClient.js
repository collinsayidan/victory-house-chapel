'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from '../../components/Lightbox';
import { galleryCategories, galleryItems } from '../../content/siteContent';

// Only offer filters that have at least one photo
const categories = galleryCategories.filter(
  (category) => category === 'All' || galleryItems.some((item) => item.category === category)
);

export default function GalleryPageClient() {
  const [selected, setSelected] = useState(null);
  const [category, setCategory] = useState('All');

  const items =
    category === 'All' ? galleryItems : galleryItems.filter((item) => item.category === category);

  return (
    <>
      <div role="group" aria-label="Filter photos by category" className="mb-8 flex flex-wrap gap-3">
        {categories.map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={category === name}
            onClick={() => setCategory(name)}
            className={`btn ${category === name ? 'btn-primary' : 'btn-secondary'}`}
          >
            {name}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {items.length} {items.length === 1 ? 'photo' : 'photos'}
      </p>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setSelected(item)}
              className="group block w-full text-left"
            >
              <span className="relative block aspect-[4/3] overflow-hidden rounded-2xl bg-surface">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </span>
              <span className="mt-2 block text-base text-muted">{item.category}</span>
              <span className="block text-lg font-semibold text-navy-700 underline underline-offset-2 group-hover:decoration-[3px]">
                {item.title}
                <span className="sr-only"> (view larger)</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Lightbox item={selected} onClose={() => setSelected(null)} />
    </>
  );
}
