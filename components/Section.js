// components/Section.js
export default function Section({ title, intro, caption, children, className = '', alt = false, id }) {
  return (
    <section id={id} className={`${alt ? 'section-alt' : 'section'} ${className}`}>
      <div className="container-page">
        {title || intro ? (
          <div className="mb-8 max-w-3xl">
            {caption ? <span className="caption">{caption}</span> : null}
            {title ? <h2>{title}</h2> : null}
            {intro ? <p className="lead mt-3">{intro}</p> : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
