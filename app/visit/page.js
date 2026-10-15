import Link from 'next/link';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import ServiceTimes from '../../components/ServiceTimes';
import { siteConfig } from '../../content/siteContent';

export const metadata = {
  title: 'Plan your visit',
  description:
    'Everything you need for your first visit to Victory House Chapel in Edinburgh: service times, address, what happens on a Sunday and answers to common questions.'
};

const mapsQuery = encodeURIComponent(`${siteConfig.addressLine1}, ${siteConfig.addressLine2}`);

const visitSteps = [
  {
    title: 'Arrive and feel at ease',
    text: 'Someone from the welcome team will greet you and help you find your way around.'
  },
  {
    title: 'Join the worship service',
    text: 'Our Sunday gatherings include worship, prayer, Bible teaching and time for fellowship.'
  },
  {
    title: 'Stay and connect',
    text: 'After the service you can meet people, ask questions and get to know the church family.'
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
    question: 'Can I get help with access, parking or children’s activities?',
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
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2>Visit summary</h2>
            <dl className="summary-list mt-6">
              <div>
                <dt>Address</dt>
                <dd>
                  {siteConfig.addressLine1}
                  <br />
                  {siteConfig.addressLine2}
                </dd>
              </div>
              <div>
                <dt>Main Sunday service</dt>
                <dd>11:00am (prayer from 10:00am)</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phone}</a>
                </dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get directions<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link href="/contact" className="btn btn-secondary">
                Contact us before you visit
              </Link>
            </div>
          </div>

          <div className="rounded bg-surface p-6 sm:p-8">
            <ServiceTimes />
          </div>
        </div>
      </Section>

      <Section alt title="Your first Sunday, step by step">
        <ol className="grid gap-6 md:grid-cols-3">
          {visitSteps.map((step, index) => (
            <li key={step.title} className="card p-6">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-lg font-bold text-white"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <h3 className="mt-4">
                <span className="sr-only">Step {index + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-3">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Families and children">
        <div className="prose-content">
          <p>
            Families are very welcome. If you would like to know about children’s or youth
            activities before you come, please{' '}
            <Link href="/contact">get in touch</Link> and we will tell you what is available.
          </p>
          {/* TODO: add confirmed details on parking, public transport, step-free access,
              children's provision and refreshments once agreed. */}
        </div>
      </Section>

      <Section alt title="Common questions">
        <div className="max-w-3xl border-t border-line-light">
          {faqs.map((faq) => (
            <details key={faq.question} className="details border-b border-line-light">
              <summary>{faq.question}</summary>
              <p className="pb-5">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
