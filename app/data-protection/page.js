import Hero from '../../components/Hero';
import Section from '../../components/Section';
import { siteConfig } from '../../content/siteContent';

export const metadata = {
  title: `Data Protection | ${siteConfig.name}`
};

const rights = [
  ['Access',       'You can ask whether we hold personal data about you and request a copy of that information.'],
  ['Rectification','You can ask us to correct inaccurate or incomplete personal data.'],
  ['Erasure',      'In some circumstances, you can ask us to delete your personal data.'],
  ['Restriction',  'You can ask us to limit how we use your information in certain situations.'],
  ['Portability',  'Where applicable, you can ask for certain personal data in a format that can be transferred elsewhere.'],
  ['Objection',    'You can object to certain types of processing, particularly where we rely on legitimate interests.']
];

/* Cycle: white / gold-lt / navy-violet dark */
const toneStyles = [
  { border: 'rgba(14,27,61,0.08)',    bg: 'white',                       heading: 'var(--navy)',    body: 'var(--navy)' },
  { border: 'rgba(184,149,63,0.25)',  bg: 'var(--gold-lt)',               heading: 'var(--navy)',    body: 'var(--navy)' },
  { border: 'rgba(79,61,140,0.25)',   bg: 'var(--gradient-card)',         heading: 'white',          body: 'rgba(255,255,255,0.80)' },
];

export default function DataProtectionPage() {
  return (
    <>
      <Hero
        eyebrow="Data Protection"
        title="Your rights in plain language."
        intro="A general summary of key UK GDPR rights for church members, visitors and website users."
      />

      {/* ── Important notice ─────────────────────────────────────────────── */}
      <Section>
        <div
          className="rounded-3xl p-6 text-sm leading-7"
          style={{
            background: 'var(--gold-lt)',
            border: '1px solid rgba(184,149,63,0.35)',
            borderLeft: '4px solid var(--gold-mid)',
            color: 'var(--gold-dk)',
            boxShadow: 'var(--shadow-gold)'
          }}
        >
          <p className="font-semibold uppercase tracking-widest text-xs mb-2" style={{ color: 'var(--gold-dk)' }}>
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
            const tone = toneStyles[index % 3];
            return (
              <article
                key={title}
                className="rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderColor: tone.border,
                  background:  tone.bg,
                  boxShadow:   'var(--shadow-card)'
                }}
              >
                {/* Gold–violet accent bar */}
                <div
                  className="mb-4 h-1 w-10 rounded-full"
                  style={{ background: 'linear-gradient(90deg, var(--gold-mid), var(--violet-mid))' }}
                />
                <h2
                  className="text-xl font-bold"
                  style={{ fontFamily: 'var(--font-display)', color: tone.heading }}
                >
                  {title}
                </h2>
                <p
                  className="mt-3 text-sm leading-7"
                  style={{ color: tone.body }}
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
          className="prose-content max-w-none rounded-3xl border border-church-border bg-white p-8"
          style={{ boxShadow: 'var(--shadow-card)' }}
        >
          <p>
            To make a data protection request, please contact the church using
            the details below and be as clear as possible about the information
            or action you are requesting.
          </p>
          <ul>
            <li>Data protection contact: {siteConfig.dataProtectionContact}</li>
            <li>Email: {siteConfig.privacyEmail}</li>
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