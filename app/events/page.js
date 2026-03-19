import Image from 'next/image';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import { CardGrid, ContentCard } from '../../components/CardGrid';
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
        <CardGrid
          items={events}
          columns={2}
          renderItem={(item, index) => (
            <ContentCard
              key={item.title}
              title={item.title}
              tone={index % 2 === 1 ? 'soft' : 'default'}
            >
              {item.image && (
                <div className="mb-4 overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt={item.alt || item.title}
                    width={800}
                    height={500}
                    className="h-56 w-full object-cover"
                  />
                </div>
              )}

              <p>
                <strong>When:</strong> {item.schedule}
              </p>
              <p>
                <strong>Where:</strong> {item.location}
              </p>
              <p>{item.description}</p>
            </ContentCard>
          )}
        />
      </Section>

      <Section
        title="Planning your visit"
        intro="We want your first visit to feel straightforward, welcoming and well supported."
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-2xl border border-church-border bg-white p-6 shadow-soft prose-content max-w-none">
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

          <div className="rounded-2xl border border-navy-800/30 bg-navy-950 p-6 shadow-navy">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">
              Helpful note
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              Keep event details current
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-200">
              Make sure service times, venues, ministry dates and special event
              details are reviewed regularly so visitors always see accurate
              information.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}