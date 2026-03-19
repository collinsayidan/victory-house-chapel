import Link from 'next/link';
import {
  Youtube,
  Instagram,
  Music2,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Clock3
} from 'lucide-react';
import { navigation, siteConfig, socialLinks } from '../content/siteContent';

const footerNavigation = navigation.filter((item) => !['/'].includes(item.href));

function SocialIcon({ icon, className = 'h-5 w-5' }) {
  switch (icon) {
    case 'youtube':
      return <Youtube className={className} />;
    case 'instagram':
      return <Instagram className={className} />;
    case 'tiktok':
      return <Music2 className={className} />;
    case 'x':
      return <Twitter className={className} />;
    default:
      return null;
  }
}

export default function Footer() {
  return (
    <footer className="mt-20 bg-navy-950 text-slate-200">
      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.25fr_0.95fr_0.85fr_1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">
              {siteConfig.location}
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              {siteConfig.shortName}
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
              {siteConfig.description}
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">
                You are welcome here
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Join us for Sunday prayer at 10:00 am and Sunday worship at
                11:00 am in Edinburgh.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/visit"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-brand-600 to-brand-700 px-5 py-3 text-sm font-semibold text-white shadow-lg transition duration-200 hover:opacity-90 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400"
              >
                Plan your visit
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400"
              >
                Contact us
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition duration-200 hover:border-brand-300/50 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400"
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">
              Contact
            </h3>

            <ul className="mt-4 space-y-4 text-sm leading-7 text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand-300" />
                <span>
                  {siteConfig.addressLine1}
                  <br />
                  {siteConfig.addressLine2}
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-brand-300" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-brand-300" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="transition hover:text-white"
                >
                  {siteConfig.phone}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Clock3 className="mt-1 h-4 w-4 shrink-0 text-brand-300" />
                <span>{siteConfig.officeHours}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">
              Explore
            </h3>

            <ul className="mt-4 space-y-3 text-sm leading-7">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-300 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">
              Policies & details
            </h3>

            <ul className="mt-4 space-y-3 text-sm leading-7">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-slate-300 transition hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-slate-300 transition hover:text-white"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/data-protection"
                  className="text-slate-300 transition hover:text-white"
                >
                  Data Protection
                </Link>
              </li>
            </ul>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">
                Charity details
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Scottish Charity Number: {siteConfig.charityNumber}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.shortName}. All rights
            reserved.
          </p>
          <p className="max-w-2xl">{siteConfig.footerNotice}</p>
        </div>
      </div>
    </footer>
  );
}