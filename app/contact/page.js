// app/contact/page.js
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import ContactForm from '../../components/ContactForm';
import GoogleMapEmbed from '../../components/GoogleMapEmbed';
import { siteConfig } from '../../content/siteContent';
import { Mail, Phone, MapPin, Clock3, Navigation } from 'lucide-react';

export const metadata = {
  title: `Contact | ${siteConfig.name}`
};

export default function ContactPage() {
  const mapsQuery = `${siteConfig.addressLine1}, ${siteConfig.addressLine2}`;

  return (
    <>
      <Hero
        eyebrow="Contact"
        title="We would be glad to hear from you."
        intro="Whether you have a question, would like prayer, or are planning your first visit, please get in touch."
        backgroundImage="/images/hero/nightsafe-header-contact-us-bg.jpg"
        overlay="contact"
      />

      <Section
        title="Get in touch"
        intro="We welcome enquiries from visitors, members and anyone wanting to know more about the life of the church."
      >
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">

          {/* ── Contact details — navy→violet gradient panel ────────────── */}
          <div
            className="relative overflow-hidden rounded-3xl p-8 text-white"
            style={{
              background: 'var(--gradient-card)',
              boxShadow: 'var(--shadow-navy)'
            }}
          >
            {/* Gold glow — top right */}
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-25"
              style={{ background: 'radial-gradient(circle, var(--gold-mid), transparent 70%)' }}
            />
            {/* Violet glow — bottom left */}
            <div
              className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full opacity-30"
              style={{ background: 'radial-gradient(circle, var(--violet-mid), transparent 70%)' }}
            />

            <div className="relative">
              <p
                className="eyebrow"
                style={{ color: 'var(--gold-on-dark)' }}
              >
                Contact details
              </p>

              <h2
                className="mt-4 text-2xl tracking-tight text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Plan your visit or send an enquiry
              </h2>

              <div className="mt-6 space-y-4 text-base leading-7 text-white/85">
                <p className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 shrink-0" style={{ color: 'var(--gold-on-dark)' }} />
                  <span>
                    <strong className="text-white">Email:</strong>{' '}
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="underline underline-offset-4 transition-colors duration-200 hover:text-white"
                      style={{ color: 'rgba(255,255,255,0.80)' }}
                    >
                      {siteConfig.email}
                    </a>
                  </span>
                </p>

                <p className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0" style={{ color: 'var(--gold-on-dark)' }} />
                  <span>
                    <strong className="text-white">Telephone:</strong>{' '}
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="transition-colors duration-200 hover:text-white"
                      style={{ color: 'rgba(255,255,255,0.80)' }}
                    >
                      {siteConfig.phone}
                    </a>
                  </span>
                </p>

                <p className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0" style={{ color: 'var(--gold-on-dark)' }} />
                  <span>
                    <strong className="text-white">Address:</strong>{' '}
                    {siteConfig.addressLine1}, {siteConfig.addressLine2}
                  </span>
                </p>

                <p className="flex items-start gap-3">
                  <Clock3 className="mt-1 h-5 w-5 shrink-0" style={{ color: 'var(--gold-on-dark)' }} />
                  <span>
                    <strong className="text-white">Office hours:</strong>{' '}
                    {siteConfig.officeHours}
                  </span>
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold inline-flex items-center gap-2"
                >
                  <MapPin className="h-4 w-4" />
                  Open in Google Maps
                </a>

                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapsQuery)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost inline-flex items-center gap-2"
                >
                  <Navigation className="h-4 w-4" />
                  Get directions
                </a>
              </div>

              {/* Helpful note */}
              <div
                className="mt-8 rounded-2xl p-5"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderLeft: '3px solid var(--gold-on-dark)'
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: 'var(--gold-on-dark)' }}
                >
                  Helpful note
                </p>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  If you are visiting for the first time and would like help
                  with directions, accessibility, parking or children&apos;s
                  provision, please let us know in advance and we will do our
                  best to help.
                </p>
              </div>
            </div>
          </div>

          {/* ── Contact form ───────────────────────────────────────────── */}
          <ContactForm />
        </div>
      </Section>

      <Section
        title="Find us"
        intro="You can find us at Murrayburn House, 2nd Floor, Edinburgh EH14 3HR."
      >
        <GoogleMapEmbed
          query={mapsQuery}
          title={`${siteConfig.shortName} location map`}
        />
      </Section>
    </>
  );
}