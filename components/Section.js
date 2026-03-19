// components/Section.js
export default function Section({ title, intro, children, className = '' }) {
  return (
    <section className={`mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16 ${className}`}>
      {(title || intro) ? (
        <div className="mb-8 max-w-3xl">
          {title ? (
            <h2 className="text-3xl font-bold tracking-tight text-church-heading">
              {title}
            </h2>
          ) : null}

          {intro ? (
            <p className="mt-3 text-base leading-7 text-church-text">
              {intro}
            </p>
          ) : null}
        </div>
      ) : null}

      {children}
    </section>
  );
}