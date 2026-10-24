import Image from 'next/image';
import Link from 'next/link';
import {
  filled,
  isPlaceholder,
  legalNavigation,
  siteConfig,
  socialLinks
} from '../content/siteContent';

// Only show social accounts once a real handle has been added
const liveSocialLinks = socialLinks.filter((social) => !isPlaceholder(social.href));

const columns = [
  {
    heading: 'Visit',
    links: [
      { href: '/visit', label: 'Plan your visit' },
      { href: '/events', label: 'Services and events' },
      { href: '/calendar.ics', label: 'Add services to your calendar' },
      { href: '/contact', label: 'Contact us' }
    ]
  },
  {
    heading: 'Church life',
    links: [
      { href: '/about', label: 'About us' },
      { href: '/ministries', label: 'Ministries' },
      { href: '/sermons', label: 'Sermons' },
      { href: '/gallery', label: 'Gallery' },
      { href: '/donate', label: 'Give' }
    ]
  }
];

export default function Footer() {
  const year = new Date().getFullYear();
  const mapsQuery = encodeURIComponent(`${siteConfig.addressLine1}, ${siteConfig.addressLine2}`);

  return (
    <footer className="relative isolate overflow-hidden bg-navy-900 text-white">
      <div className="h-1 bg-gradient-to-r from-gold-800 via-gold-500 to-gold-300" aria-hidden="true" />
      <div className="bg-dots absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-96 w-96 rounded-full bg-navy-600/40 blur-3xl" aria-hidden="true" />

      <div className="container-page grid gap-12 py-14 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3 text-white no-underline hover:text-white">
            <span className="relative block h-14 w-14 shrink-0 rounded-2xl bg-white p-1 shadow-card">
              <Image src="/images/logo-mark.png" alt="" fill sizes="56px" className="object-contain p-1" />
            </span>
            <span className="font-display text-xl font-extrabold uppercase leading-tight tracking-[0.04em]">{siteConfig.shortName}</span>
          </Link>
          <p className="mt-4 text-white/85">{siteConfig.description}</p>
          {liveSocialLinks.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2" aria-label="Social media">
              {liveSocialLinks.map((social) => (
                <li key={social.name}>
                  <a href={social.href} className="text-white hover:text-white" rel="noopener noreferrer">
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {columns.map((column) => (
          <nav key={column.heading} aria-label={`Footer: ${column.heading}`}>
            <h2 className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-gold-300">
              {column.heading}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((item) => (
                <li key={item.href}>
                  {item.href.endsWith('.ics') ? (
                    <a href={item.href} download className="text-white no-underline hover:text-white hover:underline">
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className="text-white no-underline hover:text-white hover:underline">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-gold-300">
            Find us
          </h2>
          <address className="mt-4 not-italic text-white/90">
            {siteConfig.addressLine1}
            <br />
            {siteConfig.addressLine2}
          </address>
          <p className="mt-2">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}
              className="font-semibold text-white hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
          <ul className="mt-4 space-y-1.5 text-white/90">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="break-words text-white hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="text-white hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            {filled(siteConfig.officeHours) ? <li>Office hours: {siteConfig.officeHours}</li> : null}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="container-page flex flex-col gap-4 py-6 text-sm text-white/85 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-none">
            © {year} {siteConfig.name}.
            {filled(siteConfig.charityNumber) ? ` Scottish Charity Number: ${siteConfig.charityNumber}` : ''}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="#top" className="font-semibold text-white hover:text-white">
                Back to top <span aria-hidden="true">↑</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
