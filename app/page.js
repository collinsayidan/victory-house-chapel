import Image from 'next/image';
import Link from 'next/link';
import CtaBand from '../components/CtaBand';
import Icon from '../components/Icon';
import NextGathering from '../components/NextGathering';
import Section from '../components/Section';
import { galleryItems, homeHighlights, ministries, sermons, siteConfig } from '../content/siteContent';
import { sermonHref, sermonSpeaker } from '../lib/sermons';

export const metadata = {
  title: { absolute: siteConfig.name },
  description:
    'Victory House Chapel is a welcoming Assemblies of God church in Edinburgh. Join us for Sunday prayer at 10am and worship at 11am at Murrayburn House, EH14 3HR.'
};

const mapsQuery = encodeURIComponent(`${siteConfig.addressLine1}, ${siteConfig.addressLine2}`);

const pathways = [
  {
    href: '/visit',
    icon: 'church',
    title: 'Plan your visit',
    text: 'What happens on a Sunday, where to find us and answers to common questions.'
  },
  {
    href: '/events',
    icon: 'calendar',
    title: 'Services and events',
    text: 'Sunday worship, midweek prayer, youth fellowship and community outreach.'
  },
  {
    href: '/sermons',
    icon: 'book',
    title: 'Listen to sermons',
    text: 'Catch up on recent Bible teaching from our Sunday services.'
  },
  {
    href: '/contact?topic=prayer',
    icon: 'heart',
    title: 'Ask for prayer',
    text: 'Share a prayer request or ask a question. We would be glad to hear from you.'
  }
];

const ministryTiles = [
  { title: ministries[0].title, image: '/images/gallery/children-ministry.jpeg', alt: 'Children taking part in a church activity' },
  { title: ministries[1].title, image: '/images/gallery/youth-fellowship.webp', alt: 'Young people at a youth fellowship evening' },
  { title: ministries[2].title, image: '/images/prayer/prayer-04.jpg', alt: 'Church members praying together' },
  { title: ministries[3].title, image: '/images/gallery/Outreach02.webp', alt: 'Volunteers serving the local community' }
];

const facts = [
  { icon: 'clock', label: 'Sundays at 11:00am' },
  { icon: 'pin', label: 'Murrayburn House, EH14' },
  { icon: 'users', label: 'All ages and backgrounds' }
];

export default function HomePage() {
  const sundayServices = siteConfig.weeklyServices.filter((s) => s.day === 'Sunday');
  const latestSermon = sermons[0];
  const latestSermonHref = sermonHref(latestSermon.href);
  const latestSermonSpeaker = sermonSpeaker(latestSermon);
  // Highlight the last word of the headline in gold
  const titleWords = siteConfig.hero.title.split(' ');
  const titleEnd = titleWords.pop();
  const titleStart = titleWords.join(' ');

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-navy-900 text-white">
        <Image src="/images/hero/worship.webp" alt="" fill priority sizes="100vw" className="-z-10 object-cover" />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/50"
          aria-hidden="true"
        />
        <div className="bg-dots absolute inset-0 -z-10 [mask-image:linear-gradient(to_right,black,transparent)]" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-navy-600/30 blur-3xl" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-navy-900/80 to-transparent" aria-hidden="true" />

        <div className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:py-28">
          <div>
            <span className="eyebrow eyebrow-on-dark">Welcome to {siteConfig.shortName}</span>
            <h1 className="text-white sm:text-6xl lg:text-7xl">
              {titleStart} <span className="text-highlight">{titleEnd}</span>
            </h1>
            <p className="lead mt-6 max-w-2xl text-white/90">
              A welcoming, Christ-centred church in Edinburgh. Whether you are exploring faith,
              returning to church or looking for a church home, you are welcome here.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/visit" className="btn btn-gold btn-lg">
                Plan your visit
                <Icon name="arrow" className="h-5 w-5" />
              </Link>
              <Link href="/about" className="btn btn-inverse btn-lg">
                About us
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-3 text-white/90">
              {facts.map((fact) => (
                <li key={fact.label} className="glass flex items-center gap-2 rounded-full px-4 py-2 text-base">
                  <Icon name={fact.icon} className="h-5 w-5 text-gold-300" />
                  {fact.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-3xl bg-white p-6 text-ink shadow-glow ring-1 ring-gold-500/30 sm:p-8">
            <div aria-hidden="true" className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
            <NextGathering />
            <dl className="summary-list mt-5 border-t border-line-light">
              {sundayServices.map((service) => (
                <div key={service.name}>
                  <dt>{service.name}</dt>
                  <dd className="font-semibold">{service.time}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="pin" className="h-5 w-5" />
                Get directions<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a href="/calendar.ics" download className="btn btn-secondary">
                <Icon name="calendar" className="h-5 w-5" />
                Add to my calendar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pathways ─────────────────────────────────────────────────── */}
      <Section caption="New here?" title="Start with these">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pathways.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="card-link group">
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 text-gold-300 shadow-card">
                  <Icon name={item.icon} />
                </span>
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-navy-900/10 text-navy-700 transition-colors group-hover:border-navy-700 group-hover:bg-navy-50"
                >
                  <Icon name="arrowUpRight" className="h-4 w-4" />
                </span>
                <span className="card-link-title">{item.title}</span>
                <span className="mt-2 block flex-1 text-base text-ink/85">{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Who we are ───────────────────────────────────────────────── */}
      <section className="section-alt">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative order-last lg:order-first">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lift">
              <Image
                src="/images/hero/Church-Worship.jpeg"
                alt="The congregation worshipping together during a Sunday service"
                fill
                sizes="(min-width: 1024px) 36rem, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 rounded-2xl bg-white px-5 py-4 shadow-lift ring-1 ring-navy-900/10 sm:left-6">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold-800">Part of the</p>
              <p className="text-lg font-bold text-navy-900">Assemblies of God</p>
            </div>
            <div className="absolute -bottom-6 right-4 hidden w-52 overflow-hidden rounded-2xl border-4 border-white shadow-lift sm:block lg:-right-6">
              <div className="relative aspect-square">
                <Image
                  src="/images/gallery/preaching.jpeg"
                  alt="A minister preaching to the congregation"
                  fill
                  sizes="14rem"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div>
            <span className="eyebrow">A church for Edinburgh</span>
            <h2>Worship, community and Bible teaching in one welcoming church home</h2>
            <p className="mt-6">
              {siteConfig.name} is part of the Assemblies of God. We are a diverse church family
              from many cultures and generations. We gather to worship Jesus, grow in Scripture,
              pray together and serve our city with compassion.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {homeHighlights.map((item) => (
                <li key={item.title} className="flex items-center gap-3 rounded-xl border border-navy-900/10 bg-white px-4 py-3 shadow-card">
                  <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-gold-500" />
                  <h3 className="text-base sm:text-lg">{item.title}</h3>
                </li>
              ))}
            </ul>
            <p className="mt-8">
              <Link href="/about" className="btn btn-primary">
                Find out more about us
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Ministries ───────────────────────────────────────────────── */}
      <Section
        caption="Ministries"
        title="Find your place to grow and serve"
        intro="There is something for every age and stage of life."
        action={
          <Link href="/ministries" className="font-semibold">
            See all ministries
          </Link>
        }
      >
        <ul className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {ministryTiles.map((tile) => (
            <li key={tile.title}>
              <Link href="/ministries" className="tile-link group aspect-[3/4] rounded-3xl">
                <Image
                  src={tile.image}
                  alt={tile.alt}
                  fill
                  sizes="(min-width: 1024px) 18rem, 50vw"
                  className="object-cover opacity-90"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent" aria-hidden="true" />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                  <span className="tile-title text-base font-bold leading-snug text-white sm:text-xl">{tile.title}</span>
                  <span aria-hidden="true" className="glass hidden h-9 w-9 shrink-0 items-center justify-center rounded-full sm:flex">
                    <Icon name="arrowUpRight" className="h-4 w-4" />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Latest sermon ────────────────────────────────────────────── */}
      <section className="section-dark">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-video overflow-hidden rounded-3xl shadow-glow ring-1 ring-white/15">
            <Image
              src={latestSermon.image}
              alt={latestSermon.alt}
              fill
              sizes="(min-width: 1024px) 36rem, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="eyebrow eyebrow-on-dark">Latest sermon</span>
            <h2>{latestSermon.title}</h2>
            <p className="mt-3 text-white/85">
              {latestSermon.date}
              {latestSermonSpeaker ? ` · ${latestSermonSpeaker}` : ''}
            </p>
            <p className="mt-4 text-lg text-white/90">{latestSermon.summary}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              {latestSermonHref ? (
                <a href={latestSermonHref} className="btn btn-gold">
                  <Icon name="play" className="h-5 w-5" />
                  {latestSermon.linkLabel}
                </a>
              ) : null}
              <Link href="/sermons" className={latestSermonHref ? 'btn btn-inverse' : 'btn btn-gold'}>
                All sermons
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Scripture ────────────────────────────────────────────────── */}
      <section className="section">
        <figure className="container-page">
          <div className="bg-dots relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-navy-900 px-6 py-12 text-center shadow-lift sm:px-12 sm:py-16">
          <span aria-hidden="true" className="block font-display text-7xl leading-none text-gold-300">“</span>
          <blockquote>
            <p className="mx-auto max-w-3xl font-display text-3xl font-semibold leading-snug text-white sm:text-4xl">
              Your word is a lamp to my feet and a light to my path.
            </p>
          </blockquote>
          <figcaption className="mt-5 text-lg font-semibold text-gold-300">Psalm 119:105</figcaption>
          </div>
        </figure>
      </section>

      {/* ── Gallery ──────────────────────────────────────────────────── */}
      <Section
        alt
        caption="Church life in pictures"
        title="A glimpse of Victory House"
        action={
          <Link href="/gallery" className="font-semibold">
            View the full gallery
          </Link>
        }
      >
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:grid-rows-2">
          {[galleryItems[0], galleryItems[8], galleryItems[11], galleryItems[2], galleryItems[12]].map((item, index) => (
            <li key={item.id} className={index === 0 ? 'col-span-2 row-span-2' : ''}>
              <figure className="h-full">
                <div className={`relative overflow-hidden rounded-2xl ${index === 0 ? 'aspect-[4/3] lg:aspect-auto lg:h-full' : 'aspect-[4/3]'}`}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes={index === 0 ? '(min-width: 1024px) 38rem, 100vw' : '(min-width: 1024px) 18rem, 50vw'}
                    className="object-cover"
                  />
                </div>
                <figcaption className="sr-only">{item.title}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand title="Come and worship with us this Sunday" />
    </>
  );
}
