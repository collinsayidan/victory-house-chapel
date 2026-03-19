import Hero from '../../components/Hero';
import Section from '../../components/Section';
import { siteConfig } from '../../content/siteContent';

export const metadata = {
  title: `Data Protection | ${siteConfig.name}`
};

export default function DataProtectionPage() {
  return (
    <>
      <Hero
        eyebrow="Data Protection"
        title="Your rights in plain language."
        intro="A general summary of key UK GDPR rights for church members, visitors and website users."
      />

      <Section>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm leading-7 text-amber-900 shadow-soft">
          Important: This page is a general summary only. It is not legal advice and should be reviewed against the church's real practices and record-keeping arrangements.
        </div>
      </Section>

      <Section title="Key rights under UK GDPR">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            ['Access', 'You can ask whether we hold personal data about you and request a copy of that information.'],
            ['Rectification', 'You can ask us to correct inaccurate or incomplete personal data.'],
            ['Erasure', 'In some circumstances, you can ask us to delete your personal data.'],
            ['Restriction', 'You can ask us to limit how we use your information in certain situations.'],
            ['Portability', 'Where applicable, you can ask for certain personal data in a format that can be transferred elsewhere.'],
            ['Objection', 'You can object to certain types of processing, particularly where we rely on legitimate interests.']
          ].map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h2 className="text-xl font-semibold text-ink">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="How to exercise your rights">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft prose-content max-w-none">
          <p>To make a data protection request, please contact the church using the details below and be as clear as possible about the information or action you are requesting.</p>
          <ul>
            <li>Data protection contact: {siteConfig.dataProtectionContact}</li>
            <li>Email: {siteConfig.privacyEmail}</li>
            <li>Postal address: {siteConfig.addressLine1}, {siteConfig.addressLine2}</li>
          </ul>
          <p>We may need to verify your identity before responding. We aim to respond within applicable legal timescales.</p>
        </div>
      </Section>
    </>
  );
}
