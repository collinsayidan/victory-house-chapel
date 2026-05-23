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

      {/* ── Header ──────────────────────────────────────────────────────── */}
      <div className="mb-10 max-w-3xl">
        <p className="eyebrow">Gallery</p>
        <h2
          className="mt-4 tracking-tight text-church-heading"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {title}
        </h2>
        <p className="mt-4 text-base leading-7 text-church-text">
          {intro}
        </p>
      </div>

      {/* ── Grid ────────────────────────────────────────────────────────── */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {visibleItems.map((item, index) => {
          /* Alternate card tone: default white / soft panel / navy-violet dark */
          const tone = index % 3;

          return (
            <article
              key={item.id}
              className="gallery-card group overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-2"
              style={{
                borderColor: tone === 2
                  ? 'rgba(79,61,140,0.25)'
                  : 'rgba(14,27,61,0.08)',
                background: tone === 2
                  ? 'var(--gradient-card)'
                  : tone === 1
                    ? 'var(--gold-lt)'
                    : 'white',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
                {/* Overlay — navy→violet on dark cards, lighter on others */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: tone === 2
                      ? 'linear-gradient(to top, rgba(14,27,61,0.65) 0%, rgba(46,33,96,0.20) 50%, transparent 100%)'
                      : 'linear-gradient(to top, rgba(14,27,61,0.45) 0%, transparent 60%)'
                  }}
                />
                {/* Gold accent pip — top left corner */}
                <div
                  className="absolute left-4 top-4 h-1 w-8 rounded-full opacity-90"
                  style={{ background: 'linear-gradient(90deg, var(--gold-on-dark), var(--violet-mid))' }}
                />
              </div>

              {/* Caption */}
              <div className="p-5">
                <p
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: tone === 2 ? 'var(--gold-on-dark)' : 'var(--gold-dk)' }}
                >
                  {item.category}
                </p>
                <h3
                  className="mt-2 tracking-tight"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: tone === 2 ? 'white' : 'var(--navy)'
                  }}
                >
                  {item.title}
                </h3>
              </div>
            </article>
          );
        })}
      </div>

      {/* ── View all link ────────────────────────────────────────────────── */}
      {showViewAll && (
        <div className="mt-10">
          <Link href="/gallery" className="btn-secondary">
            View full gallery
          </Link>
        </div>
      )}
    </section>
  );
}