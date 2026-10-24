// components/Section.js
const variants = { light: 'section', alt: 'section-alt', dark: 'section-dark' };

export default function Section({
  title,
  intro,
  caption,
  action,
  children,
  className = '',
  alt = false,
  tone,
  id
}) {
  const variant = tone || (alt ? 'alt' : 'light');
  const dark = variant === 'dark';

  return (
    <section id={id} className={`${variants[variant]} ${className}`}>
      <div className="container-page">
        {title || intro ? (
          <div className="mb-10 flex flex-col gap-4 sm:mb-12 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              {caption ? <span className={`eyebrow ${dark ? 'eyebrow-on-dark' : ''}`}>{caption}</span> : null}
              {title ? <h2 className="display-caps text-3xl sm:text-5xl">{title}</h2> : null}
              {intro ? <p className={`lead mt-4 ${dark ? 'text-white/90' : ''}`}>{intro}</p> : null}
            </div>
            {action ? <div className="shrink-0">{action}</div> : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
