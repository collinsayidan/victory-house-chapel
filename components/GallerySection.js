// components/GallerySection.js
import Image from 'next/image';
import Link from 'next/link';

export default function GallerySection({
  items = [],
  title = 'A glimpse of church life',
  intro = 'From worship and prayer to outreach and fellowship, here is a glimpse of life at Victory House Chapel.',
  limit = 6,
  showViewAll = true
}) {
  const visibleItems = items.slice(0, limit);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
          Gallery
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-church-heading">
          {title}
        </h2>
        <p className="mt-3 text-base leading-7 text-church-text">
          {intro}
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {visibleItems.map((item, index) => (
          <article
            key={item.id}
            className={`group overflow-hidden rounded-2xl border shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-navy ${
              index % 3 === 1
                ? 'border-church-border bg-church-panel'
                : 'border-church-border bg-white'
            }`}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
            </div>

            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                {item.category}
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-church-heading">
                {item.title}
              </h3>
            </div>
          </article>
        ))}
      </div>

      {showViewAll ? (
        <div className="mt-8">
          <Link
            href="/gallery"
            className="inline-flex items-center rounded-full border border-church-border bg-white px-5 py-3 text-sm font-semibold text-church-heading shadow-soft transition duration-200 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400"
          >
            View full gallery
          </Link>
        </div>
      ) : null}
    </section>
  );
}