// components/CardGrid.js
export function CardGrid({ items, columns = 3, renderItem }) {
  const gridClass =
    columns === 1
      ? 'grid gap-6'
      : columns === 2
        ? 'grid gap-6 md:grid-cols-2'
        : 'grid gap-6 md:grid-cols-2 xl:grid-cols-3';

  return (
    <div className={gridClass}>
      {items.map((item, index) => renderItem(item, index))}
    </div>
  );
}

export function ContentCard({
  title,
  children,
  tone = 'default',
  featured = false
}) {
  const toneClass =
    tone === 'soft'
      ? 'border-church-border bg-church-panel'
      : tone === 'navy'
        ? 'border-navy-700/20 bg-navy-gradient text-white'
        : 'border-church-border bg-white';

  const headingClass =
    tone === 'navy' ? 'text-white' : 'text-church-heading';

  const bodyClass =
    tone === 'navy' ? 'text-slate-100' : 'text-church-text';

  return (
    <article
      className={[
        'rounded-2xl border p-6 shadow-soft transition duration-300',
        'hover:-translate-y-1 hover:shadow-navy',
        toneClass,
        featured ? 'ring-1 ring-brand-300/60' : ''
      ].join(' ')}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className={`text-xl font-semibold tracking-tight ${headingClass}`}>
          {title}
        </h3>

        {featured ? (
          <span className="shrink-0 rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-800">
            Featured
          </span>
        ) : null}
      </div>

      <div className={`mt-3 space-y-3 text-sm leading-7 sm:text-base ${bodyClass}`}>
        {children}
      </div>
    </article>
  );
}