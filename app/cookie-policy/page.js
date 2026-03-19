import Link from 'next/link';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import { siteConfig } from '../../content/siteContent';

export const metadata = {
  title: `Cookie Policy | ${siteConfig.name}`
};

export default function CookiePolicyPage() {
  return (
    <>
      <Hero
        eyebrow="Cookie Policy"
        title="How cookies may be used on this website."
        intro="This page explains how visitors can make choices about non-essential cookies and how the church can describe cookie use in a UK context."
      />

      <Section title="What are cookies?">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft prose-content max-w-none">
          <p>
            Cookies are small text files stored on your device when you visit a website. Some cookies are necessary for the website to function properly,
            while others may be used to remember preferences or gather analytics information.
          </p>
        </div>
      </Section>

      <Section title="How we use cookies">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft prose-content max-w-none">
          <ul>
            <li><strong>Necessary cookies</strong> help with essential site functions, such as remembering your cookie preferences.</li>
            <li><strong>Analytics cookies</strong> may be used to help us understand how visitors use the site, but only if you choose to accept non-essential cookies.</li>
          </ul>
        </div>
      </Section>

      <Section title="Your choices">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft prose-content max-w-none">
          <p>
            On your first visit, you will be shown a cookie banner that allows you to accept all cookies or reject non-essential cookies.
            If you reject non-essential cookies, only necessary cookies should remain active.
          </p>
          <p>
            For more detail on how personal data may be handled alongside cookie technologies, please read our{' '}
            <Link href="/privacy-policy" className="font-semibold text-brand-700 underline underline-offset-2">Privacy Policy</Link>.
          </p>
        </div>
      </Section>
    </>
  );
}
