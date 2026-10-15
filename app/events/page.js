import Link from 'next/link';
import CtaBand from '../../components/CtaBand';
import Hero from '../../components/Hero';
import Icon from '../../components/Icon';
import Section from '../../components/Section';
import ServiceTimes from '../../components/ServiceTimes';
import { EventsGrid } from '../../components/EventsGrid';
import { events } from '../../content/siteContent';

export const metadata = {
  title: 'Services and events',
  description:
    'Regular services and events at Victory House Chapel, Edinburgh: Sunday worship, midweek prayer, youth fellowship and community outreach.'
};

export default function EventsPage() {
  return (
    <>
      <Hero
        eyebrow="Events"
        title="Worship, prayer and church life through the week"
        intro="From Sunday worship to prayer meetings and outreach, these are the regular ways we gather as a church family."
        backgroundImage="/images/prayer/prayer-04.jpg"
        imageAlt="Church members praying together"
      >
        <a href="/calendar.ics" download className="btn btn-gold">
          <Icon name="calendar" className="h-5 w-5" />
          Add services to my calendar
        </a>
      </Hero>

      <Section caption="Every week" title="Regular gatherings">
        <EventsGrid events={events} />
      </Section>

      <Section alt>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="card p-6 sm:p-8">
            <ServiceTimes caption="Service times at a glance" />
          </div>
          <div className="prose-content">
            <h2 className="!mt-0">Coming for the first time?</h2>
            <p>
              You are welcome to come as you are. Our services include worship, prayer, Bible
              teaching and time for fellowship.
            </p>
            <p>
              If you need information about access, transport, parking or children’s activities,
              please <Link href="/contact">contact us</Link> and we will do our best to help.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
