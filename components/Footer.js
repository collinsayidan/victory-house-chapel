import Link from 'next/link';
import {
  Youtube, Instagram, Music2, Twitter,
  Mail, Phone, MapPin, Clock3
} from 'lucide-react';
import { navigation, siteConfig, socialLinks } from '../content/siteContent';

const footerNavigation = navigation.filter((item) => !['/'].includes(item.href));

function SocialIcon({ icon, className = 'h-5 w-5' }) {
  switch (icon) {
    case 'youtube':   return <Youtube   className={className} />;
    case 'instagram': return <Instagram className={className} />;
    case 'tiktok':    return <Music2    className={className} />;
    case 'x':         return <Twitter   className={className} />;
    default:          return null;
  }
}

const Divider = () => (
  <div
    className="mt-2 mb-4 h-px w-10 rounded-full"
    style={{ background: 'linear-gradient(90deg, var(--gold-on-dark), var(--violet-mid))' }}
  />
);

export default function Footer() {
  return (
    <footer className="mt-20 text-slate-200" style={{ background: 'var(--gradient-card)' }}>

      {/* Tri-colour top bar */}
      <div
        className="h-1 w-full"
        style={{ background: 'linear-gradient(90deg, var(--navy), var(--violet), var(--gold-mid))' }}
      />

      {/* Main grid */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.25fr_0.95fr_0.85fr_1fr] lg:px-8">

        {/* Col 1 — brand */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold-on-dark)' }}>
            {siteConfig.location}
          </p>
          <h2 className="mt-3 text-2xl tracking-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>
            {siteConfig.shortName}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
            {siteConfig.description}
          </p>

          <div
            className="mt-6 rounded-2xl p-4"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.10)',
              borderLeft: '3px solid var(--gold-on-dark)'
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold-on-dark)' }}>
              You are welcome here
            </p>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Join us for Sunday prayer at 10:00 am and Sunday worship at 11:00 am in Edinburgh.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-gold">Plan your visit</Link>
            <Link href="/contact" className="btn-ghost">Contact us</Link>
          </div>

          {/* Social icons — CSS-only hover via .footer-social */}
          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="footer-social"
              >
                <SocialIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Contact */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold-on-dark)' }}>
            Contact
          </h3>
          <Divider />
          <ul className="space-y-4 text-sm leading-7 text-white/65">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0" style={{ color: 'var(--gold-on-dark)' }} />
              <span>{siteConfig.addressLine1}<br />{siteConfig.addressLine2}</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-1 h-4 w-4 shrink-0" style={{ color: 'var(--gold-on-dark)' }} />
              <a href={`mailto:${siteConfig.email}`} className="footer-link">{siteConfig.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-1 h-4 w-4 shrink-0" style={{ color: 'var(--gold-on-dark)' }} />
              <a href={`tel:${siteConfig.phone}`} className="footer-link">{siteConfig.phone}</a>
            </li>
            <li className="flex items-start gap-3">
              <Clock3 className="mt-1 h-4 w-4 shrink-0" style={{ color: 'var(--gold-on-dark)' }} />
              <span>{siteConfig.officeHours}</span>
            </li>
          </ul>
        </div>

        {/* Col 3 — Explore */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold-on-dark)' }}>
            Explore
          </h3>
          <Divider />
          <ul className="space-y-1">
            {footerNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="footer-link">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Policies */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold-on-dark)' }}>
            Policies &amp; details
          </h3>
          <Divider />
          <ul className="space-y-1">
            {[
              { href: '/privacy-policy',  label: 'Privacy Policy' },
              { href: '/cookie-policy',   label: 'Cookie Policy' },
              { href: '/data-protection', label: 'Data Protection' }
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="footer-link">{item.label}</Link>
              </li>
            ))}
          </ul>

          <div
            className="mt-6 rounded-2xl p-4"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.10)',
              borderLeft: '3px solid var(--violet-mid)'
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold-on-dark)' }}>
              Charity details
            </p>
            <p className="mt-2 text-sm leading-6 text-white/65">
              Scottish Charity Number: {siteConfig.charityNumber}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/40 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} {siteConfig.shortName}. All rights reserved.</p>
          <p className="max-w-2xl">{siteConfig.footerNotice}</p>
        </div>
      </div>
    </footer>
  );
}