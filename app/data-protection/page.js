import Hero from '../../components/Hero';
import Section from '../../components/Section';
import { filled, privacyContactEmail, siteConfig } from '../../content/siteContent';

export const metadata = {
  title: 'Data protection'
};

const rights = [
  ['Access',       'You can ask whether we hold personal data about you and request a copy of that information.'],
  ['Rectification','You can ask us to correct inaccurate or incomplete personal data.'],
  ['Erasure',      'In some circumstances, you can ask us to delete your personal data.'],
  ['Restriction',  'You can ask us to limit how we use your information in certain situations.'],
  ['Portability',  'Where applicable, you can ask for certain personal data in a format that can be transferred elsewhere.'],
  ['Objection',    'You can object to certain types of processing, particularly where we rely on legitimate interests.']
];

export default function DataProtectionPage() {
  return (
    <>
      <Hero
        eyebrow="Data protection"
        title="Your rights in plain language"
        intro="A general summary of key UK GDPR rights for church members, visitors and website users."
      />

      {/* ── Important notice ─────────────────────────────────────────────── */}
      <Section>
        <div
          className="border-l-8 border-gold-500 bg-gold-50 p-6 max-w-prose"
        >
          <p className="mb-2 font-bold">
            Important
          </p>
          This page is a general summary only. It is not legal advice and should
          be reviewed against the church's real practices and record-keeping
          arrangements.
        </div>
      </Section>

      {/* ── Rights grid ──────────────────────────────────────────────────── */}
      <Section title="Key rights under UK GDPR">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {rights.map(([title, text], index) => {
            return (
              <article
                key={title}
                className="card border-t-4 border-t-navy-900 p-6"
              >
                
                <div
                  className="hidden"
                />
                <h2
                  className="text-xl font-bold"
                >
                  {title}
                </h2>
                <p
                  className="mt-3"
                >
                  {text}
                </p>
              </article>
            );
          })}
        </div>
      </Section>

      {/* ── How to exercise rights ────────────────────────────────────────── */}
      <Section title="How to exercise your rights">
        <div
          className="prose-content"
        >
          <p>
            To make a data protection request, please contact the church using
            the details below and be as clear as possible about the information
            or action you are requesting.
          </p>
          <ul>
            {filled(siteConfig.dataProtectionContact) ? (
              <li>Data protection contact: {siteConfig.dataProtectionContact}</li>
            ) : null}
            <li>
              Email: <a href={`mailto:${privacyContactEmail}`}>{privacyContactEmail}</a>
            </li>
            <li>
              Postal address: {siteConfig.addressLine1},{' '}
              {siteConfig.addressLine2}
            </li>
          </ul>
          <p>
            We may need to verify your identity before responding. We aim to
            respond within applicable legal timescales.
          </p>
        </div>
      </Section>
    </>
  );
}