import Image from 'next/image';
import CtaBand from '../../components/CtaBand';
import Hero from '../../components/Hero';
import Icon from '../../components/Icon';
import { filled, sermons } from '../../content/siteContent';
import { sermonHref, sermonSpeaker } from '../../lib/sermons';

export const metadata = {
  title: 'Sermons',
  description:
    'Watch, listen to or read recent sermons from Victory House - Assemblies of God, Edinburgh. Christ-centred Bible teaching for everyday life.'
};

function isExternal(href) {
  return href.startsWith('http');
}

// A sermon slot with no title yet is shown as a "coming soon" card
function isUpcoming(sermon) {
  return !filled(sermon.title);
}

function SermonLink({ sermon, className }) {
  const href = sermonHref(sermon.href);
  if (!href) return null;
  const external = isExternal(href);
  return (
    <a
      href={href}
      className={className}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      <Icon name="play" className="h-5 w-5" />
      {sermon.linkLabel}
      <span className="sr-only">
        : {sermon.title}
        {external ? ' (opens in a new tab)' : ''}
      </span>
    </a>
  );
}

// Artwork for a sermon, or a branded placeholder until a photo is uploaded
function SermonArtwork({ sermon, sizes, priority = false }) {
  if (filled(sermon.image)) {
    return <Image src={sermon.image} alt={sermon.alt} fill sizes={sizes} priority={priority} className="object-cover" />;
  }
  return (
    <span className="bg-dots absolute inset-0 flex flex-col items-center justify-center gap-3 bg-navy-900 text-center text-white">
      <span className="relative block h-14 w-14 rounded-xl bg-white p-1">
        <Image src="/images/logo-mark.png" alt="" fill sizes="56px" className="object-contain p-1" />
      </span>
      <span className="text-sm font-bold uppercase tracking-[0.2em] text-gold-300">Coming soon</span>
    </span>
  );
}

function Meta({ sermon, dark = false }) {
  const speaker = sermonSpeaker(sermon) || 'Speaker to be announced';
  const items = [speaker, filled(sermon.date), filled(sermon.scripture)].filter(Boolean);
  return (
    <p className={`text-base ${dark ? 'text-white/85' : 'text-muted'}`}>{items.join(' · ')}</p>
  );
}

export default function SermonsPage() {
  const [featured, ...rest] = sermons;
  const featuredHref = sermonHref(featured.href);
  const series = [...new Set(sermons.map((s) => filled(s.series)).filter(Boolean))];

  return (
    <>
      <Hero
        eyebrow="Sermons"
        title={
          <>
            <span className="block text-2xl font-bold normal-case tracking-normal text-gold-300 sm:text-3xl">Watch</span>
            The latest sermon
          </>
        }
        intro="Catch up on recent messages from our Sunday services. Our preaching is Christ-centred, rooted in Scripture and relevant to everyday life."
        backgroundImage="/images/hero/Church-ministration.jpeg"
        imageAlt="A minister preaching during a church service"
      >
        <a href="#previous-sermons" className="btn btn-inverse">
          Browse previous sermons
        </a>
      </Hero>

      {/* ── Latest sermon ────────────────────────────────────────────── */}
      <section className="section" aria-labelledby="latest-heading">
        <div className="container-page grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14">
          <div className="relative aspect-video overflow-hidden rounded-3xl bg-navy-900 shadow-lift">
            <SermonArtwork sermon={featured} sizes="(min-width: 1024px) 42rem, 100vw" priority />
            {featuredHref ? (
              <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center bg-navy-900/25">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-300 text-ink shadow-lift">
                  <Icon name="play" className="h-10 w-10" />
                </span>
              </span>
            ) : (
              <span className="absolute left-4 top-4 rounded-full bg-navy-900/85 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.14em] text-white">
                Recording coming soon
              </span>
            )}
          </div>

          <div>
            <p className="eyebrow">Latest sermon</p>
            {filled(featured.series) ? (
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.14em] text-gold-800">
                Series: {featured.series}
              </p>
            ) : null}
            <h2 id="latest-heading" className="display-caps text-4xl sm:text-5xl">
              {featured.title}
            </h2>
            <div className="mt-4">
              <Meta sermon={featured} />
            </div>
            <p className="mt-5 text-lg">{featured.summary}</p>

            {featuredHref ? (
              <p className="mt-8">
                <SermonLink sermon={featured} className="btn btn-primary btn-lg" />
              </p>
            ) : null}

            <div className="mt-8 border-t border-navy-900/10 pt-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-navy-700">Sermon resources</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                <li className="rounded-xl border border-dashed border-navy-900/30 px-4 py-3">
                  <span className="block font-semibold">Group discussion guide</span>
                  <span className="block text-base text-muted">Coming soon</span>
                </li>
                <li className="rounded-xl border border-dashed border-navy-900/30 px-4 py-3">
                  <span className="block font-semibold">Weekly devotions</span>
                  <span className="block text-base text-muted">Coming soon</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Series ───────────────────────────────────────────────────── */}
      {series.length ? (
        <section className="bg-navy-900 py-10 text-white" aria-labelledby="series-heading">
          <div className="container-page flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
            <h2 id="series-heading" className="shrink-0 text-sm font-bold uppercase tracking-[0.2em] text-gold-300">
              Sermon series
            </h2>
            <ul className="flex flex-wrap gap-3">
              {series.map((name) => (
                <li key={name} className="rounded-full border border-white/25 px-4 py-2 text-base font-semibold">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* ── Previous sermons ─────────────────────────────────────────── */}
      <section id="previous-sermons" className="section-alt" aria-labelledby="previous-heading">
        <div className="container-page">
          <p className="eyebrow">Archive</p>
          <h2 id="previous-heading" className="display-caps mb-10 text-4xl sm:text-5xl">
            Previous sermons
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((sermon, index) => {
              const upcoming = isUpcoming(sermon);
              return (
                <li key={`${sermon.title}-${index}`} className="card flex flex-col overflow-hidden">
                  <div className="relative aspect-video">
                    <SermonArtwork sermon={sermon} sizes="(min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    {upcoming ? (
                      <>
                        <h3 className="text-xl">New sermon coming soon</h3>
                        <p className="mt-2 flex-1 text-base text-muted">
                          Recordings and notes from our Sunday services will appear here.
                        </p>
                      </>
                    ) : (
                      <>
                        {filled(sermon.series) ? (
                          <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-gold-800">{sermon.series}</p>
                        ) : null}
                        <h3 className="text-xl">{sermon.title}</h3>
                        <div className="mt-2">
                          <Meta sermon={sermon} />
                        </div>
                        <p className="mt-3 flex-1 text-base">{sermon.summary}</p>
                        <p className="mt-5">
                          {sermonHref(sermon.href) ? (
                            <SermonLink sermon={sermon} className="inline-flex items-center gap-2 font-semibold" />
                          ) : (
                            <span className="text-sm font-bold uppercase tracking-[0.14em] text-muted">Recording coming soon</span>
                          )}
                        </p>
                      </>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Hear the Word in person"
        text="Every sermon aims to point people to Christ. We would love you to join us on a Sunday at 11:00am."
      />
    </>
  );
}
