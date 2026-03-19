// app/contact/page.js
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import ContactForm from '../../components/ContactForm';
import GoogleMapEmbed from '../../components/GoogleMapEmbed';
import { siteConfig } from '../../content/siteContent';
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Navigation
} from 'lucide-react';

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
          <div className="relative overflow-hidden rounded-2xl border border-navy-800/80 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 p-6 text-white shadow-navy">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,162,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(247,204,85,0.08),transparent_22%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_28%,transparent_72%,rgba(255,255,255,0.03))]" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">
                Contact details
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                Plan your visit or send an enquiry
              </h2>

              <div className="mt-6 space-y-4 text-base leading-7 text-slate-200">
                <p className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-brand-300" />
                  <span>
                    <strong className="text-white">Email:</strong>{' '}
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="underline underline-offset-4 transition hover:text-brand-200"
                    >
                      {siteConfig.email}
                    </a>
                  </span>
                </p>

                <p className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-brand-300" />
                  <span>
                    <strong className="text-white">Telephone:</strong>{' '}
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="transition hover:text-brand-200"
                    >
                      {siteConfig.phone}
                    </a>
                  </span>
                </p>

                <p className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-300" />
                  <span>
                    <strong className="text-white">Address:</strong>{' '}
                    {siteConfig.addressLine1}, {siteConfig.addressLine2}
                  </span>
                </p>

                <p className="flex items-start gap-3">
                  <Clock3 className="mt-1 h-5 w-5 shrink-0 text-brand-300" />
                  <span>
                    <strong className="text-white">Office hours:</strong>{' '}
                    {siteConfig.officeHours}
                  </span>
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    mapsQuery
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy-900 shadow-soft transition duration-200 hover:bg-navy-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400"
                >
                  <MapPin className="h-4 w-4" />
                  Open in Google Maps
                </a>

                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    mapsQuery
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:border-brand-200/50 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-400"
                >
                  <Navigation className="h-4 w-4" />
                  Get directions
                </a>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">
                  Helpful note
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  If you are visiting for the first time and would like help
                  with directions, accessibility, parking or children&apos;s
                  provision, please let us know in advance and we will do our
                  best to help.
                </p>
              </div>
            </div>
          </div>

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