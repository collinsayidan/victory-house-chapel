import Image from 'next/image';
import Link from 'next/link';
import ServiceTimes from '../components/ServiceTimes';
import { galleryItems, homeHighlights, siteConfig } from '../content/siteContent';

export const metadata = {
  title: { absolute: siteConfig.name },
  description:
    'Victory House Chapel is a welcoming Assemblies of God church in Edinburgh. Join us for Sunday prayer at 10am and worship at 11am at Murrayburn House, EH14 3HR.'
};

const mapsQuery = encodeURIComponent(`${siteConfig.addressLine1}, ${siteConfig.addressLine2}`);

const pathways = [
  {
    href: '/visit',
    title: 'Plan your visit',
    text: 'What happens on a Sunday, where to find us and answers to common questions.'
  },
  {
    href: '/events',
    title: 'Services and events',
    text: 'Sunday worship, midweek prayer, youth fellowship and community outreach.'
  },
  {
    href: '/sermons',
    title: 'Listen to sermons',
    text: 'Catch up on recent Bible teaching from our Sunday services.'
  },
  {
    href: '/contact',
    title: 'Get in touch',
    text: 'Ask a question, request prayer or let us know you are coming.'
  }
];

export default function HomePage() {
  const sundayServices = siteConfig.weeklyServices.filter((s) => s.day === 'Sunday');

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-navy-900 text-white">
        <Image
          src="/images/hero/worship.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/60"
          aria-hidden="true"
        />

        <div className="container-page grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:py-20">
          <div>
            <span className="caption-on-dark">Welcome to {siteConfig.shortName}</span>
            <h1 className="text-white">{siteConfig.hero.title}</h1>
            <p className="lead mt-5 text-white">
              A welcoming, Christ-centred church in Edinburgh. Whether you are exploring faith,
              returning to church or looking for a church home, you are welcome here.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/visit" className="btn btn-gold text-lg">
                Plan your visit
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/about" className="btn btn-inverse text-lg">
                About us
              </Link>
            </div>
          </div>

          <div className="rounded bg-white p-6 text-ink sm:p-8">
            <h2 className="font-sans text-2xl">Join us this Sunday</h2>
            <dl className="summary-list mt-4">
              {sundayServices.map((service) => (
                <div key={service.name}>
                  <dt>{service.name}</dt>
                  <dd className="font-semibold">{service.time}</dd>
                </div>
              ))}
              <div>
                <dt>Where</dt>
                <dd>
                  {siteConfig.addressLine1}
                  <br />
                  {siteConfig.addressLine2}
                </dd>
              </div>
            </dl>
            <p className="mt-4">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                Get directions<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Pathways ─────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container-page">
          <h2 className="mb-8">New here? Start with these</h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pathways.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="card-link">
                  <span className="card-link-title">{item.title}</span>
                  <span className="mt-3 block text-base">{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Who we are ───────────────────────────────────────────────── */}
      <section className="section-alt">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="caption">A church for Edinburgh</span>
            <h2>Worship, community and Bible teaching in one welcoming church home</h2>
            <p className="mt-5">
              {siteConfig.name} is part of the Assemblies of God. We are a diverse church family
              from many cultures and generations. We gather to worship Jesus, grow in Scripture,
              pray together and serve our city with compassion.
            </p>
            <p className="mt-6">
              <Link href="/about" className="font-semibold">
                Find out more about us
              </Link>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded">
              <Image
                src="/images/hero/Church-Worship.jpeg"
                alt="The congregation worshipping together during a Sunday service"
                fill
                sizes="(min-width: 1024px) 36rem, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded">
              <Image
                src="/images/prayer/prayer-04.jpg"
                alt="Church members praying together"
                fill
                sizes="(min-width: 1024px) 18rem, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded">
              <Image
                src="/images/gallery/children-ministry.jpeg"
                alt="Children taking part in a church activity"
                fill
                sizes="(min-width: 1024px) 18rem, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Church life ──────────────────────────────────────────────── */}
      <section className="section">
        <div className="container-page">
          <div className="mb-8 max-w-3xl">
            <span className="caption">Church life</span>
            <h2>Built on worship, discipleship and service</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {homeHighlights.map((item) => (
              <article key={item.title} className="border-t-4 border-gold-500 pt-4">
                <h3>{item.title}</h3>
                <p className="mt-3">{item.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8">
            <Link href="/ministries" className="font-semibold">
              See all our ministries
            </Link>
          </p>
        </div>
      </section>

      {/* ── Scripture ────────────────────────────────────────────────── */}
      <section className="bg-navy-900 py-14 text-white sm:py-20">
        <figure className="container-page text-center">
          <blockquote>
            <p className="mx-auto max-w-3xl font-serif text-3xl font-semibold leading-snug text-white sm:text-4xl">
              “Your word is a lamp to my feet and a light to my path.”
            </p>
          </blockquote>
          <figcaption className="mt-5 text-lg font-semibold text-gold-300">Psalm 119:105</figcaption>
        </figure>
      </section>

      {/* ── Gallery ──────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container-page">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="caption">Church life in pictures</span>
              <h2>A glimpse of Victory House</h2>
            </div>
            <Link href="/gallery" className="font-semibold">
              View the full gallery
            </Link>
          </div>
          <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {galleryItems.slice(0, 4).map((item) => (
              <li key={item.id}>
                <figure>
                  <div className="relative aspect-[4/3] overflow-hidden rounded">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 18rem, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 text-base font-semibold">{item.title}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Service times and next steps ─────────────────────────────── */}
      <section className="section-alt">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div className="rounded bg-white p-6 sm:p-8">
            <ServiceTimes />
            <p className="mt-6">
              <Link href="/events" className="font-semibold">
                See all services and events
              </Link>
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <h2>Come and worship with us this Sunday</h2>
            <p className="mt-4">
              Whether you come on your own, with family or as a first-time visitor, there is a
              place for you here. If you would like help before you arrive, please get in touch.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/visit" className="btn btn-primary">
                Plan your visit
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
