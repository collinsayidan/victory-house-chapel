import Image from 'next/image';
import Link from 'next/link';
import Hero from '../../components/Hero';
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

export default function SermonsPage() {
  return (
    <>
      <Hero
        eyebrow="Sermons"
        title="Bible teaching for everyday faith"
        intro="Catch up on recent messages from our Sunday services. Our preaching aims to be Christ-centred, rooted in Scripture and relevant to everyday life."
        backgroundImage="/images/hero/Church-ministration.jpeg"
        imageAlt="A minister preaching during a church service"
      />

      <Section title="Recent messages">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sermons.map((sermon) => (
            <li key={sermon.title} className="card flex flex-col overflow-hidden">
              <div className="relative aspect-[16/9] bg-surface">
                <Image
                  src={sermon.image}
                  alt={sermon.alt}
                  fill
                  sizes="(min-width: 1024px) 24rem, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-base text-muted">{sermon.date}</p>
                <h3 className="mt-1">{sermon.title}</h3>
                <p className="mt-1 text-base">
                  <span className="font-semibold">Speaker:</span> {sermon.speaker}
                </p>
                <p className="mt-3 flex-1 text-base">{sermon.summary}</p>
                {sermon.href ? (
                  <p className="mt-4">
                    <a
                      href={sermon.href}
                      className="font-semibold"
                      target={isExternal(sermon.href) ? '_blank' : undefined}
                      rel={isExternal(sermon.href) ? 'noopener noreferrer' : undefined}
                    >
                      {sermon.linkLabel}
                      <span className="sr-only">
                        : {sermon.title}
                        {isExternal(sermon.href) ? ' (opens in a new tab)' : ''}
                      </span>
                    </a>
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <section className="bg-navy-900 py-14 text-white">
        <figure className="container-page text-center">
          <blockquote>
            <p className="mx-auto max-w-3xl font-serif text-3xl font-semibold leading-snug text-white">
              “Your word is a lamp to my feet and a light to my path.”
            </p>
          </blockquote>
          <figcaption className="mt-4 text-lg font-semibold text-gold-300">Psalm 119:105</figcaption>
        </figure>
      </section>

      <Section title="Hear it in person">
        <p>
          Every sermon we share aims to point people to Christ and strengthen daily Christian living.
          We would love you to join us on a Sunday.
        </p>
        <p className="mt-6">
          <Link href="/visit" className="btn btn-primary">
            Plan your visit
          </Link>
        </p>
      </Section>
    </>
  );
}
