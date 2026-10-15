import Link from 'next/link';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import { siteConfig } from '../../content/siteContent';

export const metadata = {
  title: 'Cookie policy'
};

export default function CookiePolicyPage() {
  return (
    <>
      <Hero
        eyebrow="Cookie policy"
        title="How cookies may be used on this website"
        intro="This page explains how visitors can make choices about non-essential cookies and how the church can describe cookie use in a UK context."
      />

      <Section title="What are cookies?">
        <div
          className="prose-content"
        >
          <p>
            Cookies are small text files stored on your device when you visit a
            website. Some cookies are necessary for the website to function
            properly, while others may be used to remember preferences or gather
            analytics information.
          </p>
        </div>
      </Section>

      <Section title="How we use cookies">
        <div
          className="prose-content"
        >
          <ul>
            <li>
              <strong>Necessary cookies</strong> help with essential site
              functions, such as remembering your cookie preferences.
            </li>
            <li>
              <strong>Analytics cookies</strong> may be used to help us
              understand how visitors use the site, but only if you choose to
              accept non-essential cookies.
            </li>
          </ul>
        </div>
      </Section>

      <Section title="Your choices">
        <div
          className="prose-content"
        >
          <p>
            On your first visit, you will be shown a cookie banner that allows
            you to accept all cookies or reject non-essential cookies. If you
            reject non-essential cookies, only necessary cookies should remain
            active.
          </p>
          <p>
            For more detail on how personal data may be handled alongside cookie
            technologies, please read our{' '}
            <Link
              href="/privacy-policy"
              
            >
              Privacy Policy
            </Link>.
          </p>
        </div>
      </Section>
    </>
  );
}