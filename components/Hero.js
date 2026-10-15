import Image from 'next/image';
import Link from 'next/link';

/**
 * Page header used at the top of every inner page.
 * Shows breadcrumbs, the page's <h1>, a short lead paragraph and,
 * on larger screens, an optional photo.
 */
export default function Hero({ eyebrow, title, intro, backgroundImage, imageAlt = '' }) {
  return (
    <div className="border-b border-line-light bg-navy-50">
      <div className="container-page">
        <nav aria-label="Breadcrumb" className="pt-4 text-base">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            {eyebrow ? (
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="text-muted">›</span>
                <span aria-current="page">{eyebrow}</span>
              </li>
            ) : null}
          </ol>
        </nav>

        <div
          className={`grid gap-8 pb-10 pt-6 sm:pb-12 ${
            backgroundImage ? 'lg:grid-cols-[1.2fr_0.8fr] lg:items-center' : ''
          }`}
        >
          <div>
            {eyebrow ? <span className="caption">{eyebrow}</span> : null}
            <h1 className="max-w-3xl">{title}</h1>
            {intro ? <p className="lead mt-4">{intro}</p> : null}
          </div>

          {backgroundImage ? (
            <div className="relative hidden aspect-[4/3] overflow-hidden rounded lg:block">
              <Image
                src={backgroundImage}
                alt={imageAlt}
                fill
                priority
                sizes="(min-width: 1200px) 30rem, 40vw"
                className="object-cover"
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
