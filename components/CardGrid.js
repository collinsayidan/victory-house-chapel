// No 'use client' — this is a Server Component.
// renderItem receives plain data and returns ContentCard elements,
// so no function is serialised across the server/client boundary.

/* ─── CardGrid ─────────────────────────────────────────────────────────────── */
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