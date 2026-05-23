// app/donate/page.js
import Image from 'next/image';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import { donateOptions, donateSummary, siteConfig } from '../../content/siteContent';

export const metadata = {
  title: `Donate | ${siteConfig.name}`
};

export default function DonatePage() {
  return (
    <>
      <Hero
        eyebrow="Donate"
        title="Support the work of Victory House Chapel."
        intro="Your generosity helps sustain worship, pastoral care, discipleship and practical outreach in Edinburgh."
        backgroundImage="/images/hero/donate.avif"
        overlay="donate"
      />

      {/* ── Why your donation matters ────────────────────────────────────────── */}
      <Section
        title="Why your donation matters"
        intro="Giving helps support the day-to-day ministry of the church and our practical service in the community."
      >
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">

          <div className="rounded-3xl border border-church-border bg-white p-8" style={{ boxShadow: 'var(--shadow-card)' }}>
            <p className="eyebrow">What donations support</p>
            <h2 className="mt-5 text-2xl tracking-tight text-church-heading" style={{ fontFamily: 'var(--font-display)' }}>
              Worship, care and community mission
            </h2>
            <p className="mt-4 text-base leading-7 text-church-text">
              We want giving to be clear, prayerful and transparent. Donations
              help us support gathered worship, Bible teaching, prayer,
              discipleship, pastoral support and practical ministry in the local
              community.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {donateSummary.map((item) => (
                <div key={item.title} className="summary-item">
                  <h3 className="text-base tracking-tight text-church-heading" style={{ fontFamily: 'var(--font-display)' }}>
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-church-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-church-border bg-white" style={{ boxShadow: 'var(--shadow-card)' }}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/donate/donate-to-church.webp"
                alt="Members of Victory House Chapel gathered in worship and community life"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="p-8">
              <p className="eyebrow">Thank you</p>
              <h3 className="mt-4 text-2xl tracking-tight text-church-heading" style={{ fontFamily: 'var(--font-display)' }}>
                Giving supports real ministry
              </h3>
              <p className="mt-4 text-base leading-7 text-church-text">
                Your donation helps us care for people well, maintain ministry
                and continue serving our neighbourhood with Christian love and
                practical compassion.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Ways to donate ───────────────────────────────────────────────────── */}
      <Section
        title="Ways to donate"
        intro="Offer the methods that are secure, straightforward and convenient for your congregation and supporters."
      >
        <div className="grid gap-6 lg:grid-cols-2">

          <div className="rounded-3xl border border-church-border bg-white p-8" style={{ boxShadow: 'var(--shadow-card)' }}>
            <div className="mb-5 h-1 w-10 rounded-full" style={{ background: 'var(--gold)' }} />
            <h3 className="text-xl tracking-tight text-church-heading" style={{ fontFamily: 'var(--font-display)' }}>
              Donation options
            </h3>
            <ul className="mt-5 space-y-2">
              {donateOptions.map((option) => (
                <li key={option} className="donate-option-item">{option}</li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl p-4" style={{ background: 'var(--gold-lt)', border: '1px solid rgba(201,168,76,0.12)' }}>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                PayPal
              </p>
              <p className="mt-2 text-sm leading-6 text-church-text">
                If you offer PayPal giving, replace the placeholder in your
                donation options with your verified PayPal donation link or QR
                code so supporters can give securely online.
              </p>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-3xl p-8 text-white"
            style={{ background: 'linear-gradient(135deg, #0f0c29 0%, #1e1b4b 45%, #172554 100%)', boxShadow: '0 8px 32px 0 rgba(15,23,42,0.28)' }}
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, var(--gold), transparent 70%)' }} />
            <div className="relative">
              <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.55)' }}>Stewardship</p>
              <h3 className="mt-4 text-2xl tracking-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>
                One-off or regular support
              </h3>
              <p className="mt-4 text-base leading-7 text-white/75">
                You may wish to offer both regular and one-off giving, with clear
                digital giving options for general ministry or specific projects.
              </p>
              <p className="mt-4 text-base leading-7 text-white/75">
                Before launch, make sure your giving links, payment provider,
                finance contact details, PayPal details and Gift Aid wording are
                fully checked and accurate.
              </p>
              <div className="mt-6 space-y-2 border-t border-white/10 pt-6">
                {['Secure online giving options', 'Clear guidance for regular giving', 'Transparent finance contact details'].map((item) => (
                  <div key={item} className="rounded-2xl px-4 py-3 text-sm font-medium text-white/90"
                    style={{ background: 'rgba(255,255,255,0.07)', borderLeft: '3px solid rgba(201,168,76,0.6)' }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Gift Aid ─────────────────────────────────────────────────────────── */}
      <Section
        title="Gift Aid and donor consent"
        intro="Make your Gift Aid wording, privacy wording and donor consent clear before publishing."
      >
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">

          <div className="prose-content max-w-none rounded-3xl border border-church-border bg-white p-8" style={{ boxShadow: 'var(--shadow-card)' }}>
            <h2>Gift Aid guidance</h2>
            <p>
              If you are eligible to claim Gift Aid, make sure your final
              wording reflects your actual giving process and is reviewed by the
              appropriate church finance lead before launch.
            </p>
            <p>Example wording for a donor declaration could be adapted to suit your final form or giving page:</p>
            <blockquote>
              I want Victory House Chapel Assemblies of God, Edinburgh to treat
              this donation, and any donations I make in the future or have made
              in the past four years, as Gift Aid donations until I notify you
              otherwise. I confirm that I am a UK taxpayer and understand that,
              if I pay less Income Tax and/or Capital Gains Tax than the amount
              of Gift Aid claimed on all my donations in that tax year, it is my
              responsibility to pay any difference.
            </blockquote>
            <p>Replace this sample wording with your final approved wording if your finance team or adviser uses a different version.</p>
          </div>

          <div className="rounded-3xl border border-church-border bg-church-panel p-8" style={{ boxShadow: 'var(--shadow-soft)' }}>
            <p className="eyebrow">Privacy and consent</p>
            <h3 className="mt-4 text-2xl tracking-tight text-church-heading" style={{ fontFamily: 'var(--font-display)' }}>
              Donor details will be handled with care
            </h3>
            <p className="mt-4 text-base leading-7 text-church-text">
              If you collect donor information through a form, donation platform
              or Gift Aid declaration, make it clear that personal details are
              used only for donation administration, Gift Aid processing,
              finance record-keeping and any related communication the donor has
              agreed to receive.
            </p>
            <div className="mt-6 rounded-2xl border border-church-border bg-white p-5"
              style={{ borderLeftWidth: '3px', borderLeftColor: 'var(--gold)' }}>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                Sample consent wording
              </p>
              <p className="mt-3 text-sm leading-6 text-church-text">
                We will use your details only for processing your donation,
                administering Gift Aid where applicable, maintaining our finance
                records and communicating with you about your giving where
                necessary. We will not pass your personal details to another
                organisation for marketing or fundraising purposes.
              </p>
            </div>
            <p className="mt-4 text-sm leading-6 text-church-text">
              Make sure this wording matches your actual privacy policy,
              donation platform and data handling arrangements before going live.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Financial accountability ──────────────────────────────────────────── */}
      <Section
        title="Financial accountability"
        intro="Victory House Chapel seeks to manage donations responsibly and transparently."
      >
        <div className="prose-content max-w-none rounded-3xl border border-church-border bg-white p-8" style={{ boxShadow: 'var(--shadow-card)' }}>
          <p>
            The church is registered as a charity in Scotland and operates in
            accordance with its governing document and the relevant charity regulations.
          </p>
          <ul>
            <li>Scottish Charity Number: {siteConfig.charityNumber}</li>
            <li>Finance contact: {siteConfig.financeEmail}</li>
          </ul>
          <p>
            If you have questions about donating, Gift Aid, stewardship,
            privacy or financial administration, please contact the church using
            the details above.
          </p>
        </div>
      </Section>
    </>
  );
}