// app/donate/page.js
import Image from 'next/image';
import Link from 'next/link';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import {
  donateOptions,
  donateSummary,
  filled,
  financeContactEmail,
  siteConfig
} from '../../content/siteContent';

export const metadata = {
  title: 'Give',
  description:
    'Support the work of Victory House Chapel, Edinburgh. Ways to give, Gift Aid and how we handle donations responsibly.'
};

// "Bank transfer: details" → { method, details }
function splitOption(option) {
  const index = option.indexOf(':');
  if (index === -1) return { method: option, details: '' };
  return { method: option.slice(0, index), details: option.slice(index + 1).trim() };
}

export default function DonatePage() {
  // Hide any giving method whose details are still a placeholder
  const givingOptions = donateOptions
    .map(splitOption)
    .filter(({ method, details }) => filled(method) && filled(details));

  return (
    <>
      <Hero
        eyebrow="Give"
        title="Support the work of Victory House Chapel"
        intro="Your generosity helps sustain worship, pastoral care, discipleship and practical outreach in Edinburgh."
        backgroundImage="/images/donate/donate-to-church.webp"
        imageAlt="Hands holding a young plant growing from coins"
      />

      <Section caption="Give online or in person" title="Ways to give">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {givingOptions.length ? (
            <dl className="summary-list">
              {givingOptions.map(({ method, details }) => (
                <div key={method}>
                  <dt>{method}</dt>
                  <dd>{details}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <div className="prose-content">
              <p>
                We are setting up our online and bank giving details. In the meantime you can give
                in person at a Sunday service, or{' '}
                <a href={`mailto:${financeContactEmail}`}>email us</a> and we will tell you how to
                give by bank transfer.
              </p>
            </div>
          )}
          <aside className="self-start rounded-2xl border border-gold-500/40 bg-gold-50 p-7 shadow-card">
            <h3 className="text-xl">Questions about giving?</h3>
            <p className="mt-3">
              Email <a href={`mailto:${financeContactEmail}`}>{financeContactEmail}</a> or{' '}
              <Link href="/contact">send us a message</Link>.
            </p>
          </aside>
        </div>
      </Section>

      <Section alt caption="Your impact" title="What your giving supports">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {donateSummary.map((item) => (
            <li key={item.title} className="card relative overflow-hidden p-7 before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-gold-500 before:to-gold-300">
              <h3 className="text-xl">{item.title}</h3>
              <p className="mt-3 text-base">{item.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section caption="UK taxpayers" title="Gift Aid">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="prose-content">
            <p>
              If you are a UK taxpayer, Gift Aid lets the church claim an extra 25p from HMRC for
              every £1 you give, at no extra cost to you.
            </p>
            {/* TODO: confirm the final declaration wording with the church finance lead. */}
            <details className="details border-y border-line-light">
              <summary>Read the Gift Aid declaration</summary>
              <blockquote className="mb-5">
                I want {siteConfig.name} to treat this donation, and any donations I make in the
                future or have made in the past four years, as Gift Aid donations until I notify you
                otherwise. I confirm that I am a UK taxpayer and understand that, if I pay less
                Income Tax and/or Capital Gains Tax than the amount of Gift Aid claimed on all my
                donations in that tax year, it is my responsibility to pay any difference.
              </blockquote>
            </details>
            <h2>How we use your details</h2>
            <p>
              We only use your details to process your donation, claim Gift Aid where it applies,
              keep our finance records and contact you about your giving if we need to. We will not
              pass your details to another organisation for marketing or fundraising. Read our{' '}
              <Link href="/privacy-policy">privacy policy</Link>.
            </p>
          </div>
          <div className="relative hidden aspect-[4/3] overflow-hidden rounded-3xl lg:block">
            <Image
              src="/images/donate/giving-to-god.jpg"
              alt=""
              fill
              sizes="30rem"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section alt caption="Transparency" title="Financial accountability">
        <p>
          The church is a registered charity in Scotland and manages donations in line with its
          governing document and charity regulations.
        </p>
        <dl className="summary-list mt-6 max-w-3xl">
          {filled(siteConfig.charityNumber) ? (
            <div>
              <dt>Scottish Charity Number</dt>
              <dd>{siteConfig.charityNumber}</dd>
            </div>
          ) : null}
          <div>
            <dt>Finance contact</dt>
            <dd>
              <a href={`mailto:${financeContactEmail}`}>{financeContactEmail}</a>
            </dd>
          </div>
        </dl>
      </Section>
    </>
  );
}
