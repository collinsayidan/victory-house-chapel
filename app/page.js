import Image from 'next/image';
import Link from 'next/link';
import CtaBand from '../components/CtaBand';
import Icon from '../components/Icon';
import NextGathering from '../components/NextGathering';
import { galleryItems, ministries, sermons, siteConfig } from '../content/siteContent';
import { sermonHref, sermonSpeaker } from '../lib/sermons';

export const metadata = {
  title: { absolute: `${siteConfig.name} | Church in Edinburgh` },
  description:
    'Victory House - Assemblies of God is a welcoming Pentecostal church in Edinburgh. Join us for Sunday prayer at 10am and worship at 11am at Murrayburn House, EH14 3HR.'
};

const mapsQuery = encodeURIComponent(`${siteConfig.addressLine1}, ${siteConfig.addressLine2}`);

// "For the whole family": one photo card per age group or ministry
const familyCards = [
  { title: ministries[0].title, detail: 'Babies to primary age', image: '/images/gallery/children-ministry.jpeg', alt: 'Children taking part in a church activity' },
  { title: ministries[1].title, detail: 'Teenagers and young adults', image: '/images/gallery/youth-fellowship.webp', alt: 'Young people at a youth fellowship evening' },
  { title: ministries[2].title, detail: 'Every Sunday and midweek', image: '/images/prayer/prayer-04.jpg', alt: 'Church members praying together' },
  { title: ministries[3].title, detail: 'Serving across Edinburgh', image: '/images/gallery/Outreach02.webp', alt: 'Volunteers serving the local community' }
];

// "Take your next step": large photo tiles with a single action each
const nextSteps = [
  { href: '/visit', title: 'Plan a visit', image: '/images/hero/Church-Worship.jpeg' },
  { href: '/events', title: 'Join a gathering', image: '/images/events/prayer-meeting.png' },
  { href: '/contact?topic=prayer', title: 'Ask for prayer', image: '/images/prayer/worship.jpg' },
  { href: '/contact?topic=serving', title: 'Find a place to serve', image: '/images/gallery/Community Engagement 01.webp' }
];

// Full-width link rows with arrows
const explore = [
  { href: '/about', label: 'About us', text: 'Who we are and what we believe' },
  { href: '/events', label: 'Services and events', text: 'Sunday worship, prayer and fellowship' },
  { href: '/sermons', label: 'Sermons', text: 'Recent Bible teaching' },
  { href: '/gallery', label: 'Gallery', text: 'Church life in pictures' },
  { href: '/donate', label: 'Give', text: 'Support the work of the church' }
];

const [heroName, heroSub] = siteConfig.name.split(' - ');

export default function HomePage() {
  const sundayServices = siteConfig.weeklyServices.filter((s) => s.day === 'Sunday');
  const latestSermon = sermons[0];
  const latestSermonHref = sermonHref(latestSermon.href);
  const latestSermonSpeaker = sermonSpeaker(latestSermon);

  return (
    <>
      {/* ── Hero: our hall as a full-width photo, shaded only behind the text ── */}
      <section className="relative isolate flex min-h-[38rem] items-end overflow-hidden bg-navy-900 text-white sm:min-h-[42rem] lg:min-h-[calc(100svh-7.5rem)] lg:items-center">
        {/* On phones the photo fills the top of the hero; on larger screens, all of it */}
        <div className="absolute inset-x-0 top-0 -z-20 h-80 overflow-hidden sm:h-96 lg:inset-0 lg:h-auto">
          <Image
            src="/images/venue/church-place.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-drift object-cover object-center blur-[6px]"
          />
          {/* A soft, even navy wash gives the blurred photo a calm, worshipful feel */}
          <div aria-hidden="true" className="absolute inset-0 bg-navy-900/35" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-navy-900/10 via-navy-900/40 to-navy-900 lg:hidden" />
        </div>
        {/* Larger screens: shade sits on the left, behind the text */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent lg:block"
        />
        <div className="container-page w-full pb-14 pt-64 sm:pb-20 sm:pt-72 lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow eyebrow-on-dark hero-rise" style={{ animationDelay: '0.05s' }}>
              A Pentecostal church in Edinburgh
            </p>
            <h1 className="display-caps hero-rise text-[2.75rem] text-white sm:text-7xl" style={{ animationDelay: '0.15s' }}>
              {heroName}
              <span className="sr-only"> - </span>
              <span className="mt-3 block text-2xl text-gold-300 sm:text-4xl">{heroSub}</span>
            </h1>
            <span aria-hidden="true" className="hero-line mt-6 block h-1 w-24 rounded-full bg-gold-300" />
            <p
              className="hero-rise mt-6 text-base font-bold uppercase tracking-[0.3em] text-white sm:text-lg"
              style={{ animationDelay: '0.3s' }}
            >
              Worship <span aria-hidden="true">·</span> Grow <span aria-hidden="true">·</span> Belong
            </p>
            <p className="lead hero-rise mt-5 max-w-xl text-white/90" style={{ animationDelay: '0.4s' }}>
              A welcoming, Christ-centred church in Edinburgh. Whether you are exploring faith,
              returning to church or looking for a church home, you are welcome here.
            </p>
            <div className="hero-rise mt-9 flex flex-wrap gap-4" style={{ animationDelay: '0.5s' }}>
              <Link href="/visit" className="btn btn-gold btn-lg">
                Plan your visit
                <Icon name="arrow" className="h-5 w-5" />
              </Link>
              <Link href="/sermons" className="btn btn-inverse btn-lg">
                Watch sermons
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service times and location ───────────────────────────────── */}
      <section aria-labelledby="sunday-heading" className="border-b border-navy-900/10 bg-white">
        <h2 id="sunday-heading" className="sr-only">Sunday gatherings</h2>
        <div className="container-page grid divide-y divide-navy-900/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          <div className="py-8 md:pr-8">
            <NextGathering />
          </div>
          <div className="py-8 md:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-navy-700">Service times</p>
            <dl className="mt-3 space-y-2">
              {sundayServices.map((service) => (
                <div key={service.name} className="flex items-baseline justify-between gap-4">
                  <dt>{service.name}</dt>
                  <dd className="text-xl font-bold text-navy-900">{service.time}</dd>
                </div>
              ))}
            </dl>
            <a href="/calendar.ics" download className="mt-4 inline-flex items-center gap-2 font-semibold">
              <Icon name="calendar" className="h-5 w-5" />
              Add to my calendar
            </a>
          </div>
          <div className="py-8 md:pl-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-navy-700">Location</p>
            <address className="mt-3 not-italic text-lg">
              {siteConfig.addressLine1}
              <br />
              {siteConfig.addressLine2}
            </address>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}
              className="mt-4 inline-flex items-center gap-2 font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="pin" className="h-5 w-5" />
              Get directions<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── New here: split feature ──────────────────────────────────── */}
      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/gallery/after-church-gathring.jpeg"
              alt="Church members talking together after a Sunday service"
              fill
              sizes="(min-width: 1024px) 36rem, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">I'm new</p>
            <h2 className="display-caps text-4xl sm:text-5xl">We look forward to meeting you</h2>
            <p className="mt-6">
              {siteConfig.name} is a diverse church family from many cultures and generations. We
              gather to worship Jesus, grow in Scripture, pray together and serve our city with
              compassion. Come as you are: someone will be at the door to welcome you.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/visit" className="btn btn-primary">
                Plan your visit
              </Link>
              <Link href="/about" className="btn btn-secondary">
                About us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── For the whole family ─────────────────────────────────────── */}
      <section className="section-alt">
        <div className="container-page">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Ministries</p>
              <h2 className="display-caps text-4xl sm:text-5xl">For the whole family</h2>
            </div>
            <Link href="/ministries" className="font-semibold">
              See all ministries
            </Link>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {familyCards.map((card) => (
              <li key={card.title}>
                <Link href="/ministries" className="lift group block h-full overflow-hidden rounded-2xl bg-white text-ink no-underline shadow-card ring-1 ring-navy-900/10 hover:text-ink">
                  <span className="relative block aspect-[4/3] overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(min-width: 1024px) 18rem, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </span>
                  <span className="block p-5">
                    <span className="block text-lg font-extrabold uppercase tracking-[0.04em] text-navy-900">{card.title}</span>
                    <span className="mt-1 block text-base text-muted">{card.detail}</span>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-navy-700 group-hover:underline">
                      Learn more
                      <Icon name="arrow" className="h-4 w-4" />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Latest sermon ────────────────────────────────────────────── */}
      <section className="section-dark">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div className="relative aspect-video overflow-hidden rounded-3xl ring-1 ring-white/15">
            <Image
              src={latestSermon.image}
              alt={latestSermon.alt}
              fill
              sizes="(min-width: 1024px) 40rem, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow eyebrow-on-dark">Latest sermon</p>
            <h2 className="display-caps text-4xl sm:text-5xl">{latestSermon.title}</h2>
            <p className="mt-4 text-white/85">
              {latestSermon.date}
              {latestSermonSpeaker ? ` · ${latestSermonSpeaker}` : ''}
            </p>
            <p className="mt-4 text-lg text-white/90">{latestSermon.summary}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              {latestSermonHref ? (
                <a href={latestSermonHref} className="btn btn-gold">
                  <Icon name="play" className="h-5 w-5" />
                  Watch now
                </a>
              ) : null}
              <Link href="/sermons" className={latestSermonHref ? 'btn btn-inverse' : 'btn btn-gold'}>
                All sermons
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Take your next step ──────────────────────────────────────── */}
      <section className="section">
        <div className="container-page">
          <p className="eyebrow">Get involved</p>
          <h2 className="display-caps mb-10 text-4xl sm:text-5xl">
            Take your <br className="hidden sm:block" />
            next step
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {nextSteps.map((step) => (
              <li key={step.href}>
                <Link href={step.href} className="tile-link group flex aspect-[4/5] items-center justify-center rounded-2xl text-center">
                  <Image
                    src={step.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 18rem, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span className="absolute inset-0 bg-navy-900/60 transition-colors group-hover:bg-navy-900/70" aria-hidden="true" />
                  <span className="tile-title relative px-6 text-2xl font-extrabold uppercase leading-tight tracking-[0.04em] text-white">
                    {step.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Scripture ────────────────────────────────────────────────── */}
      <section className="bg-navy-900 py-20 text-white sm:py-28">
        <figure className="container-page text-center">
          <span aria-hidden="true" className="quote-mark block font-display text-7xl font-extrabold leading-none text-gold-300 sm:text-8xl">
            “
          </span>
          <blockquote>
            <p className="mx-auto max-w-4xl font-display text-3xl font-bold leading-snug text-white sm:text-5xl">
              Your word is a lamp to my feet and a light to my path.
            </p>
          </blockquote>
          <figcaption className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-gold-300">Psalm 119:105</figcaption>
        </figure>
      </section>

      {/* ── Explore: full-width link rows ────────────────────────────── */}
      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Explore</p>
            <h2 className="display-caps text-4xl sm:text-5xl">Find your way around</h2>
          </div>
          <ul className="border-t border-navy-900/15">
            {explore.map((item) => (
              <li key={item.href} className="border-b border-navy-900/15">
                <Link href={item.href} className="group flex items-center justify-between gap-6 py-5 text-ink no-underline hover:text-ink">
                  <span>
                    <span className="block text-xl font-extrabold uppercase tracking-[0.04em] text-navy-900 group-hover:underline sm:text-2xl">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-base text-muted">{item.text}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-navy-900/20 text-navy-900 transition-colors group-hover:bg-navy-900 group-hover:text-white"
                  >
                    <Icon name="arrow" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────────────────── */}
      <section className="section-alt">
        <div className="container-page">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Church life</p>
              <h2 className="display-caps text-4xl sm:text-5xl">A glimpse of Victory House</h2>
            </div>
            <Link href="/gallery" className="font-semibold">
              View the full gallery
            </Link>
          </div>
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
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <figcaption className="sr-only">{item.title}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Come and worship with us this Sunday" />
    </>
  );
}
