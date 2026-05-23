'use client';

import { motion } from 'framer-motion';

const toneStyles = {
  default: {
    wrapper: 'border-church-border bg-white text-church-text',
    heading: 'text-church-heading',
    body:    'text-church-text',
  },
  soft: {
    wrapper: 'border-church-border bg-church-panel text-church-text',
    heading: 'text-church-heading',
    body:    'text-church-text',
  },
  navy: {
    wrapper: 'border-transparent text-white',
    heading: 'text-white',
    body:    'text-white/80',
    bg:      'linear-gradient(135deg, #0f0c29 0%, #1e1b4b 45%, #172554 100%)',
    shadow:  '0 8px 32px 0 rgba(15,23,42,0.28)'
  },
  vivid: {
    wrapper: 'border-transparent text-white',
    heading: 'text-white',
    body:    'text-white/80',
    bg:      'linear-gradient(135deg, var(--navy-dk) 0%, var(--navy) 50%, var(--navy-md) 100%)',
    shadow:  '0 8px 32px 0 rgba(15,23,42,0.28)'
  }
};

export function ContentCard({
  title,
  children,
  tone = 'default',
  featured = false,
  eyebrow = null,
  accentBar = true
}) {
  const styles = toneStyles[tone] ?? toneStyles.default;
  const isDark = tone === 'navy' || tone === 'vivid';
  const defaultShadow = styles.shadow ?? '0 2px 12px 0 rgba(15,23,42,0.07)';
  const hoverShadow = isDark ? defaultShadow : '0 20px 60px 0 rgba(15,23,42,0.14)';

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className={[
        'group relative overflow-hidden rounded-3xl border p-7',
        'transition-all duration-300 hover:-translate-y-2',
        styles.wrapper,
        featured && !isDark ? 'ring-2 ring-offset-2' : ''
      ].join(' ')}
      style={{ background: styles.bg ?? undefined, boxShadow: defaultShadow }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = hoverShadow; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = defaultShadow; }}
    >
      {!isDark && (
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: 'radial-gradient(circle, var(--gold-lt), transparent 70%)' }}
        />
      )}

      {isDark && (
        <div
          className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #ffffff, transparent 70%)' }}
        />
      )}

      {!isDark && accentBar && (
        <div
          className="mb-5 h-1 w-10 rounded-full transition-all duration-300 group-hover:w-16"
          style={{ background: 'var(--gold)' }}
        />
      )}

      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          {eyebrow && (
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-widest"
              style={{ color: isDark ? 'rgba(255,255,255,0.55)' : 'var(--gold)' }}
            >
              {eyebrow}
            </p>
          )}
          <h3
            className={`text-xl tracking-tight ${styles.heading}`}
            style={{ fontFamily: 'var(--font-display)', lineHeight: 1.2 }}
          >
            {title}
          </h3>
        </div>

        {featured && (
          <span
            className="shrink-0 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
            style={
              isDark
                ? { background: 'rgba(255,255,255,0.15)', color: 'white' }
                : { background: 'var(--gold-lt)', color: 'var(--gold)' }
            }
          >
            Featured
          </span>
        )}
      </div>

      <div className={`relative mt-4 space-y-3 text-sm leading-7 sm:text-base ${styles.body}`}>
        {children}
      </div>
    </motion.article>
  );
}