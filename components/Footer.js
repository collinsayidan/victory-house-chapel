import Link from 'next/link';
import {
  isPlaceholder,
  legalNavigation,
  navigation,
  siteConfig,
  socialLinks
} from '../content/siteContent';

// Only show social accounts once a real handle has been added
const liveSocialLinks = socialLinks.filter((social) => !isPlaceholder(social.href));

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t-4 border-gold-500 bg-navy-900 text-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <h2 className="text-2xl text-white">{siteConfig.shortName}</h2>
          <p className="mt-3 text-white/90">{siteConfig.description}</p>
          <p className="mt-6">
            <Link href="/visit" className="btn btn-gold">
              Plan your visit
            </Link>
          </p>
        </div>

        <div>
          <h2 className="font-sans text-lg text-white">Visit or contact us</h2>
          <address className="mt-3 not-italic text-white/90">
            {siteConfig.addressLine1}
            <br />
            {siteConfig.addressLine2}
          </address>
          <ul className="mt-4 space-y-2">
            <li>
              <span className="text-white/90">Email: </span>
              <a href={`mailto:${siteConfig.email}`} className="text-white hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <span className="text-white/90">Phone: </span>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="text-white hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li className="text-white/90">Office hours: {siteConfig.officeHours}</li>
          </ul>

          <h3 className="mt-6 text-base text-white">Sunday services</h3>
          <ul className="mt-2 space-y-1 text-white/90">
            {siteConfig.weeklyServices
              .filter((service) => service.day === 'Sunday')
              .map((service) => (
                <li key={service.name}>
                  {service.name}: {service.time}
                </li>
              ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-sans text-lg text-white">Explore</h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2">
            {navigation
              .filter((item) => item.href !== '/')
              .map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>

          {liveSocialLinks.length > 0 ? (
            <>
              <h3 className="mt-6 text-base text-white">Follow us</h3>
              <ul className="mt-2 space-y-2">
                {liveSocialLinks.map((social) => (
                  <li key={social.name}>
                    <a href={social.href} className="text-white hover:text-white" rel="noopener noreferrer">
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </nav>
      </div>

      <div className="border-t border-white/25">
        <div className="container-page flex flex-col gap-4 py-6 text-sm text-white/90 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="max-w-none">
            © {year} {siteConfig.name}. Scottish Charity Number: {siteConfig.charityNumber}
          </p>
        </div>
      </div>
    </footer>
  );
}
