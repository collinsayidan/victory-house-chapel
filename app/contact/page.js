// app/contact/page.js
import { Suspense } from 'react';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import ContactForm from '../../components/ContactForm';
import GoogleMapEmbed from '../../components/GoogleMapEmbed';
import { filled, siteConfig } from '../../content/siteContent';

export const metadata = {
  title: 'Contact us',
  description:
    'Contact Victory House Chapel in Edinburgh by email, phone or our online form. Find our address at Murrayburn House, Edinburgh EH14 3HR.'
};

export default function ContactPage() {
  const mapsQuery = `${siteConfig.addressLine1}, ${siteConfig.addressLine2}`;

  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Contact us"
        intro="Whether you have a question, would like prayer or are planning your first visit, we would be glad to hear from you."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="eyebrow">Get in touch</span>
            <h2>Contact details</h2>
            <dl className="summary-list mt-6">
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${siteConfig.email}`} className="break-words">
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Address</dt>
                <dd>
                  <address className="not-italic">
                    {siteConfig.addressLine1}
                    <br />
                    {siteConfig.addressLine2}
                  </address>
                </dd>
              </div>
              {filled(siteConfig.officeHours) ? (
                <div>
                  <dt>Office hours</dt>
                  <dd>{siteConfig.officeHours}</dd>
                </div>
              ) : null}
            </dl>
            <div className="inset-text">
              If you are visiting for the first time and need help with directions, access, parking
              or children’s activities, let us know and we will do our best to help.
            </div>
          </div>

          <div>
            <div className="card p-6 sm:p-10">
              <h2>Send us a message</h2>
              <p className="mb-8 mt-3">All fields are required.</p>
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </Section>

      <Section alt caption="Location" title="Find us" intro={`We meet at ${mapsQuery}.`}>
        <GoogleMapEmbed query={mapsQuery} title={`Map showing the location of ${siteConfig.shortName}`} />
      </Section>
    </>
  );
}
