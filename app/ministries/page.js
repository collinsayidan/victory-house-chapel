import Link from 'next/link';
import CtaBand from '../../components/CtaBand';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import { ministries } from '../../content/siteContent';

export const metadata = {
  title: 'Ministries',
  description:
    "Ministries at Victory House Chapel, Edinburgh: children's, youth, prayer, outreach, fellowship, and worship and media. Find a place to grow and serve."
};

const steps = [
  'Pray about where you could serve',
  'Speak with a ministry leader or pastor',
  'Start serving with guidance and support'
];

export default function MinistriesPage() {
  return (
    <>
      <Hero
        eyebrow="Ministries"
        title="Places to grow, serve and belong"
        intro="We want everyone to find a place to connect, be discipled and contribute to the life of the church."
        backgroundImage="/images/hero/victory-voices-ministration-01.jpeg"
        imageAlt="The worship team leading the congregation in song"
      />

      <Section
        caption="Get involved"
        title="Our ministries"
        intro="Each ministry helps build a church life that is prayerful, welcoming, grounded in Scripture and active in service."
      >
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((ministry) => (
            <li key={ministry.title} className="card border-t-4 border-t-gold-500 p-7">
              <h3>{ministry.title}</h3>
              <p className="mt-3">{ministry.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section alt>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="prose-content">
            <h2 className="!mt-0">Growing through service</h2>
            <p>
              Ministry is not only about helping others. It is also how we grow as disciples of
              Jesus. As people serve prayerfully and faithfully, the church is strengthened and
              each person is encouraged in their walk with Christ.
            </p>
            <p>
              Some ministries focus on worship and prayer. Others centre on practical care,
              fellowship, discipleship and community outreach.
            </p>
          </div>
          <div className="card p-6 sm:p-8">
            <h2 className="font-sans text-2xl">How to get involved</h2>
            <ol className="mt-4 space-y-4">
              {steps.map((step, index) => (
                <li key={step} className="flex items-start gap-4">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900 font-bold text-white"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6">
              <Link href="/contact?topic=serving" className="btn btn-primary">
                Ask about serving
              </Link>
            </p>
          </div>
        </div>
      </Section>

      <Section title="Safeguarding">
        <div className="notice">
          <span className="notice-icon" aria-hidden="true">!</span>
          <p>
            <span className="sr-only">Important: </span>
            Roles involving children, young people or vulnerable adults may need references,
            safeguarding checks and training before someone starts serving.
          </p>
        </div>
      </Section>

      <CtaBand
        title="Ready to get involved?"
        text="Tell us where you would like to serve and a ministry leader will be in touch."
        primary={{ href: '/contact?topic=serving', label: 'Ask about serving' }}
        secondary={{ href: '/visit', label: 'Plan your visit' }}
      />
    </>
  );
}
