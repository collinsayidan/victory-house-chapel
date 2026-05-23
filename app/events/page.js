import Hero from '../../components/Hero';
import Section from '../../components/Section';
import { EventsGrid } from '../../components/EventsGrid';
import { events, siteConfig } from '../../content/siteContent';

export const metadata = {
  title: `Events | ${siteConfig.name}`
};

export default function EventsPage() {
  return (
    <>
      <Hero
        eyebrow="Events"
        title="Worship, prayer and church life through the week."
        intro="From Sunday worship to prayer gatherings and outreach, here are some of the regular ways we gather as a church family."
        backgroundImage="/images/prayer/prayer-04.jpg"
        overlay="events"
      />

      <Section
        title="Regular events"
        intro="Please replace these sample listings with your confirmed dates, venues and any booking details before launch."
      >
        <EventsGrid events={events} columns={2} />
      </Section>

      <Section
        title="Planning your visit"
        intro="We want your first visit to feel straightforward, welcoming and well supported."
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">

          <div className="prose-content max-w-none rounded-3xl border border-church-border bg-white p-8"
            style={{ boxShadow: 'var(--shadow-card)' }}>
            <h2>What to expect</h2>
            <p>
              If you are planning to attend, you are very welcome to come as you
              are. Our services usually include worship, prayer, Bible teaching
              and time for fellowship.
            </p>
            <p>
              If you would like more information about accessibility, transport,
              parking, children&apos;s provision or anything else before you
              visit, please use the contact page and we will do our best to
              help.
            </p>
          </div>

          <div
            className="relative overflow-hidden rounded-3xl p-8 text-white"
            style={{
              background: 'linear-gradient(135deg, #0f0c29 0%, #1e1b4b 45%, #172554 100%)',
              boxShadow: '0 8px 32px 0 rgba(15,23,42,0.28)'
            }}
          >
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, #6D28D9, transparent 70%)' }}
            />
            <div className="relative">
              <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Helpful note
              </p>
              <h3
                className="mt-4 text-2xl tracking-tight text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Keep event details current
              </h3>
              <p className="mt-4 text-base leading-7 text-white/75">
                Make sure service times, venues, ministry dates and special event
                details are reviewed regularly so visitors always see accurate
                information.
              </p>
            </div>
          </div>

        </div>
      </Section>
    </>
  );
}