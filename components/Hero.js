import Image from 'next/image';
import Link from 'next/link';

/**
 * Page header used at the top of every inner page: a full-width photo
 * under a dark overlay, breadcrumbs, the page's <h1> and a lead paragraph.
 */
export default function Hero({ eyebrow, title, intro, backgroundImage, imageAlt = '', children }) {
  return (
    <div className="relative isolate overflow-hidden bg-navy-900 text-white">
      {backgroundImage ? (
        <>
          <Image src={backgroundImage} alt={imageAlt} fill priority sizes="100vw" className="-z-20 object-cover" />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-900/85 to-navy-900/55"
          />
        </>
      ) : (
        <div aria-hidden="true" className="bg-dots absolute inset-0 -z-10" />
      )}
      <div className="container-page relative">
        <nav aria-label="Breadcrumb" className="pt-6 text-base">
          <ol className="flex flex-wrap items-center gap-2 text-white/85">
            <li>
              <Link href="/" className="text-white hover:text-white">
                Home
              </Link>
            </li>
            {eyebrow ? (
              <li className="flex items-center gap-2">
                <span aria-hidden="true">›</span>
                <span aria-current="page">{eyebrow}</span>
              </li>
            ) : null}
          </ol>
        </nav>

        <div className="pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-28 lg:pt-20">
          {eyebrow ? <span className="eyebrow eyebrow-on-dark">{eyebrow}</span> : null}
          <h1 className="display-caps max-w-4xl text-4xl text-white sm:text-6xl">{title}</h1>
          {intro ? <p className="lead mt-6 max-w-2xl text-white/90">{intro}</p> : null}
          {children ? <div className="mt-8 flex flex-wrap gap-4">{children}</div> : null}
        </div>
      </div>
    </div>
  );
}
