import Image from 'next/image';
import CtaBand from '../../components/CtaBand';
import Hero from '../../components/Hero';
import Icon from '../../components/Icon';
import Section from '../../components/Section';
import { sermons } from '../../content/siteContent';

export const metadata = {
  title: 'Sermons',
  description:
    'Listen to, watch or read recent sermons from Victory House Chapel, Edinburgh. Christ-centred Bible teaching for everyday life.'
};

function isExternal(href) {
  return href.startsWith('http');
}

function SermonLink({ sermon, className = 'font-semibold' }) {
  if (!sermon.href) return null;
  const external = isExternal(sermon.href);
  return (
    <a
      href={sermon.href}
      className={className}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {sermon.linkLabel}
      <span className="sr-only">
        : {sermon.title}
        {external ? ' (opens in a new tab)' : ''}
      </span>
    </a>
  );
}

export default function SermonsPage() {
  const [featured, ...rest] = sermons;

  return (
    <>
      <Hero
        eyebrow="Sermons"
        title="Bible teaching for everyday faith"
        intro="Catch up on recent messages from our Sunday services. Our preaching aims to be Christ-centred, rooted in Scripture and relevant to everyday life."
        backgroundImage="/images/hero/Church-ministration.jpeg"
        imageAlt="A minister preaching during a church service"
      />

      <Section caption="Latest message" title={featured.title}>
        <article className="card grid overflow-hidden lg:grid-cols-2">
          <div className="relative aspect-video lg:aspect-auto lg:min-h-[22rem]">
            <Image
              src={featured.image}
              alt={featured.alt}
              fill
              sizes="(min-width: 1024px) 38rem, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-10">
            <dl className="flex flex-wrap gap-x-6 gap-y-1 text-base text-muted">
              <div>
                <dt className="sr-only">Date</dt>
                <dd>{featured.date}</dd>
              </div>
              <div>
                <dt className="inline font-semibold text-ink">Speaker: </dt>
                <dd className="inline">{featured.speaker}</dd>
              </div>
            </dl>
            <p className="mt-4 text-lg">{featured.summary}</p>
            <p className="mt-8">
              <SermonLink sermon={featured} className="btn btn-primary" />
            </p>
          </div>
        </article>
      </Section>

      <Section alt caption="Archive" title="Recent messages">
        <ul className="grid gap-6 md:grid-cols-2">
          {rest.map((sermon) => (
            <li key={sermon.title} className="card flex flex-col overflow-hidden sm:flex-row">
              <div className="relative aspect-video shrink-0 sm:aspect-auto sm:w-56">
                <Image
                  src={sermon.image}
                  alt={sermon.alt}
                  fill
                  sizes="(min-width: 640px) 14rem, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-base text-muted">{sermon.date}</p>
                <h3 className="mt-1">{sermon.title}</h3>
                <p className="mt-1 text-base">
                  <span className="font-semibold">Speaker:</span> {sermon.speaker}
                </p>
                <p className="mt-3 flex-1 text-base">{sermon.summary}</p>
                <p className="mt-4 flex items-center gap-2">
                  <Icon name="play" className="h-5 w-5 text-navy-700" />
                  <SermonLink sermon={sermon} />
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Hear the Word in person"
        text="Every sermon aims to point people to Christ. We would love you to join us on a Sunday at 11:00am."
      />
    </>
  );
}
