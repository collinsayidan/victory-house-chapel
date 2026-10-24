import Image from 'next/image';
import Link from 'next/link';

/**
 * Page header used at the top of every inner page: breadcrumbs, the
 * page's <h1>, a lead paragraph and, on larger screens, a framed photo.
 */
export default function Hero({ eyebrow, title, intro, backgroundImage, imageAlt = '', children }) {
  return (
    <div className="relative isolate overflow-hidden bg-navy-900 text-white">
      <div aria-hidden="true" className="bg-dots absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-48 -z-10 h-[32rem] w-[32rem] rounded-full bg-navy-600/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/4 -z-10 h-72 w-72 rounded-full bg-navy-600/30 blur-3xl"
      />
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

        <div
          className={`grid gap-10 pb-14 pt-8 sm:pb-16 lg:pb-20 ${
            backgroundImage ? 'lg:grid-cols-[1.15fr_0.85fr] lg:items-center' : ''
          }`}
        >
          <div>
            {eyebrow ? <span className="eyebrow eyebrow-on-dark">{eyebrow}</span> : null}
            <h1 className="max-w-3xl text-white">{title}</h1>
            {intro ? <p className="lead mt-5 text-white/90">{intro}</p> : null}
            {children ? <div className="mt-8 flex flex-wrap gap-4">{children}</div> : null}
          </div>

          {backgroundImage ? (
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-glow ring-1 ring-white/15">
                <Image
                  src={backgroundImage}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1200px) 30rem, 40vw"
                  className="object-cover"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
