import Link from 'next/link';
import CtaBand from '../../components/CtaBand';
import Hero from '../../components/Hero';
import Icon from '../../components/Icon';
import Section from '../../components/Section';
import ServiceTimes from '../../components/ServiceTimes';
import { siteConfig } from '../../content/siteContent';

export const metadata = {
  title: 'Plan your visit',
  description:
    'Everything you need for your first visit to Victory House Chapel in Edinburgh: service times, address, what happens on a Sunday and answers to common questions.'
};

const mapsQuery = encodeURIComponent(`${siteConfig.addressLine1}, ${siteConfig.addressLine2}`);

const sunday = [
  {
    time: '10:00am',
    title: 'Sunday prayer',
    text: 'Start the morning praying together before the main service. Everyone is welcome to join.'
  },
  {
    time: 'Before 11:00am',
    title: 'Arrive and feel at ease',
    text: 'Someone from the welcome team will greet you and help you find your way around.'
  },
  {
    time: '11:00am',
    title: 'Worship service',
    text: 'Our Sunday gathering includes worship, prayer and Bible teaching.'
  },
  {
    time: 'Afterwards',
    title: 'Stay and connect',
    text: 'Meet people, ask questions and get to know the church family.'
  }
];

const faqs = [
  {
    question: 'What should I wear?',
    answer:
      'Please come as you are. Some people dress formally and others casually. We want you to feel comfortable.'
  },
  {
    question: 'What time should I arrive?',
    answer:
      'Our main Sunday worship service starts at 11:00am. Sunday prayer starts at 10:00am if you would like to join that too.'
  },
  {
    question: 'Can I come if I am new to church or exploring faith?',
    answer:
      'Yes. Whether you are familiar with church or visiting for the first time, you are warmly invited.'
  },
  {
    question: 'Can I bring my children?',
    answer:
      'Yes, families are very welcome. If you would like to know about children’s or youth activities before you come, please get in touch.'
  },
  {
    question: 'Can I get help with access or parking?',
    answer:
      'Please contact us before you visit and tell us what you need. We will do our best to help.'
  }
];

export default function VisitPage() {
  return (
    <>
      <Hero
        eyebrow="Plan your visit"
        title="Everything you need for your first visit"
        intro="We want your first Sunday with us to feel straightforward and welcoming from the moment you arrive."
        backgroundImage="/images/hero/church-activities.jpeg"
        imageAlt="Church members gathered together at Victory House Chapel"
      >
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}
          className="btn btn-gold"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="pin" className="h-5 w-5" />
          Get directions<span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a href="/calendar.ics" download className="btn btn-inverse">
          <Icon name="calendar" className="h-5 w-5" />
          Add services to my calendar
        </a>
      </Hero>

      <Section caption="The essentials" title="When and where">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="card p-6 sm:p-8">
            <ServiceTimes />
          </div>
          <div className="card p-6 sm:p-8">
            <h3 className="text-xl">Where to find us</h3>
            <dl className="summary-list mt-3">
              <div>
                <dt>Address</dt>
                <dd>
                  {siteConfig.addressLine1}
                  <br />
                  {siteConfig.addressLine2}
                </dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${siteConfig.email}`} className="break-words">
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phone}</a>
                </dd>
              </div>
            </dl>
            <p className="mt-6">
              <Link href="/contact?topic=visit" className="font-semibold">
                Let us know you are coming
              </Link>
            </p>
          </div>
        </div>
      </Section>

      <Section alt caption="Your first Sunday" title="What happens on a Sunday">
        <ol className="relative max-w-3xl border-l-2 border-gold-500 pl-8">
          {sunday.map((step) => (
            <li key={step.title} className="relative pb-10 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute -left-[2.6rem] top-1 h-5 w-5 rounded-full border-4 border-surface bg-navy-900"
              />
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-gold-800">{step.time}</p>
              <h3 className="mt-1">{step.title}</h3>
              <p className="mt-2">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section caption="Questions" title="Common questions">
        <div className="max-w-3xl border-t border-line-light">
          {faqs.map((faq) => (
            <details key={faq.question} className="details border-b border-line-light">
              <summary>{faq.question}</summary>
              <p className="pb-6">{faq.answer}</p>
            </details>
          ))}
        </div>
        {/* TODO: add confirmed details on parking, public transport, step-free access,
            children's provision and refreshments once agreed. */}
      </Section>

      <CtaBand
        title="Have a question before you come?"
        text="Tell us you are coming or ask us anything. We will be glad to help."
        primary={{ href: '/contact?topic=visit', label: 'Contact us' }}
        secondary={{ href: '/events', label: 'See all services' }}
      />
    </>
  );
}
