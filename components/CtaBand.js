import Image from 'next/image';
import Link from 'next/link';
import Icon from './Icon';

/**
 * Closing call to action used at the foot of most pages, so every page
 * ends with a clear next step.
 */
export default function CtaBand({
  title = 'We would love to welcome you',
  text = 'Join us on Sunday for prayer at 10:00am and worship at 11:00am. Come as you are.',
  primary = { href: '/visit', label: 'Plan your visit' },
  secondary = { href: '/contact', label: 'Contact us' }
}) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="relative isolate overflow-hidden rounded-3xl bg-navy-900 px-6 py-14 text-white shadow-lift sm:px-12 sm:py-16 lg:px-16">
          <Image
            src="/images/hero/Church-Worship.jpeg"
            alt=""
            fill
            sizes="(min-width: 1216px) 76rem, 100vw"
            className="-z-20 object-cover opacity-25"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/60" aria-hidden="true" />
          <div className="bg-dots absolute inset-0 -z-10" aria-hidden="true" />
          <div
            className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-navy-600/50 blur-3xl"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="display-caps text-3xl text-white sm:text-5xl">{title}</h2>
              <p className="mt-3 text-lg text-white/90">{text}</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-4">
              <Link href={primary.href} className="btn btn-gold btn-lg">
                {primary.label}
                <Icon name="arrow" className="h-5 w-5" />
              </Link>
              {secondary ? (
                <Link href={secondary.href} className="btn btn-inverse btn-lg">
                  {secondary.label}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
