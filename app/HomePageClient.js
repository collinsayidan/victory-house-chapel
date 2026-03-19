'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import HomeHeroSlider from '../components/HomeHeroSlider';
import Section from '../components/Section';
import { galleryItems, homeHighlights, siteConfig } from '../content/siteContent';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 }
};

export default function HomePageClient() {
  const featuredImages = galleryItems.slice(0, 3);

  return (
    <>
      <HomeHeroSlider
        slides={[
          {
            eyebrow: 'Welcome to Victory House Chapel',
            title: 'A place to worship, grow and belong.',
            intro:
              'A welcoming Christ-centred church in Edinburgh where people of all backgrounds can encounter Jesus, grow in faith and find genuine community.',
            image: '/images/hero/worship.webp',
            imageAlt: 'Worship at Victory House Chapel',
            primaryCta: { href: '/contact', label: 'Plan your visit' },
            secondaryCta: { href: '/about', label: 'Learn more about us' },
            panelKicker: 'This Sunday',
            panelTitle: 'Join us for worship',
            panelText:
              'Come and be part of a warm church family gathered around worship, prayer and the Word of God.',
            panelImage: '/images/hero/church-activities.jpeg',
            panelImageAlt: 'Church worship and fellowship',
            panelItems: siteConfig.serviceTimes.slice(0, 3)
          },
          {
            eyebrow: 'Prayer changes everything',
            title: 'A praying church with a heart for God and people.',
            intro:
              'We believe in Spirit-led prayer, biblical teaching and the transforming power of God in everyday life.',
            image: '/images/hero/Church-Worship.jpeg',
            imageAlt: 'Prayer and worship gathering',
            primaryCta: { href: '/events', label: 'See weekly gatherings' },
            secondaryCta: { href: '/sermons', label: 'Listen to sermons' },
            panelKicker: 'Midweek gathering',
            panelTitle: 'Prayer and discipleship',
            panelText:
              'Gather with us during the week as we pray together and grow as disciples of Jesus.',
            panelImage: '/images/prayer/prayer-04.jpg',
            panelImageAlt: 'Prayer gathering at church',
            panelItems: [
              'Wednesday prayer gathering',
              'Biblical encouragement',
              'Warm fellowship'
            ]
          },
          {
            eyebrow: 'Church life in action',
            title: 'A community of faith, fellowship and service.',
            intro:
              'From worship and discipleship to outreach and care, there is a place for everyone to connect and serve.',
            image: '/images/hero/church-activities.jpeg',
            imageAlt: 'Church community activities',
            primaryCta: { href: '/ministries', label: 'Explore ministries' },
            secondaryCta: { href: '/gallery', label: 'View gallery' },
            panelKicker: 'Get involved',
            panelTitle: 'Find your place to belong',
            panelText:
              'Discover ministries and opportunities to grow, serve and build meaningful Christian community.',
            panelImage: '/images/events/outreach.webp',
            panelImageAlt: 'Community outreach ministry',
            panelItems: [
              'Children and youth ministry',
              'Prayer and worship teams',
              'Outreach and fellowship'
            ]
          },
          {
            eyebrow: 'You are invited',
            title: 'Come as you are and encounter the love of Christ.',
            intro:
              'Whether you are exploring faith, returning to church or looking for a church home, you will be warmly welcomed.',
            image: '/images/hero/victory-voices-ministration-01.jpeg',
            imageAlt: 'Welcome to church service',
            primaryCta: { href: '/contact', label: 'Get in touch' },
            secondaryCta: { href: '/about', label: 'About the church' },
            panelKicker: 'First visit',
            panelTitle: 'We would love to welcome you',
            panelText:
              'Our services include worship, prayer, biblical teaching and time to connect with others in a welcoming environment.',
            panelImage: '/images/gallery/worship05.jpg',
            panelImageAlt: 'Church fellowship after service',
            panelItems: ['Warm welcome', 'Bible teaching', 'Prayer and fellowship']
          }
        ]}
      />

      <section className="relative -mt-4 z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[2rem] border border-brand-200/60 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur lg:p-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_28%)]" />
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
                A church for Edinburgh
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
                Worship, community and biblical teaching in one welcoming church
                home
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">
                Whether you are exploring faith, returning to church or looking
                for a place to belong, Victory House Chapel is here to welcome
                you. We gather to worship Jesus, grow in Scripture, pray
                together and serve our city with compassion.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition duration-200 hover:bg-brand-700"
                >
                  Plan your first visit
                </Link>
                <Link
                  href="/sermons"
                  className="inline-flex items-center rounded-full border border-church-border bg-white px-6 py-3 text-sm font-semibold text-navy-950 shadow-soft transition duration-200 hover:border-brand-300 hover:bg-brand-50"
                >
                  Listen to recent sermons
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                viewport={{ once: true }}
                className="col-span-2 overflow-hidden rounded-2xl shadow-soft"
              >
                <Image
                  src={featuredImages[0].image}
                  alt={featuredImages[0].alt || featuredImages[0].title}
                  width={900}
                  height={700}
                  className="h-56 w-full object-cover"
                />
              </motion.div>

              {featuredImages.slice(1).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-2xl shadow-soft"
                >
                  <Image
                    src={item.image}
                    alt={item.alt || item.title}
                    width={800}
                    height={600}
                    className="h-36 w-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <Section
        title="Join us this week"
        intro="You are warmly invited to worship with us in Edinburgh. Whether you are new to church, returning to faith or looking for a church home, you will be made welcome."
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-3xl border border-church-border bg-white p-8 shadow-soft"
          >
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-brand-100 blur-3xl" />
            <div className="relative flex items-center justify-between gap-4">
              <h3 className="text-2xl font-semibold tracking-tight text-church-heading">
                Service times
              </h3>
              <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-800">
                Weekly
              </span>
            </div>

            <ul className="relative mt-6 space-y-3">
              {siteConfig.serviceTimes.map((time) => (
                <li
                  key={time}
                  className="rounded-2xl border border-church-border bg-church-panel px-4 py-4 text-base font-medium text-church-text transition duration-200 hover:border-brand-300 hover:bg-brand-50"
                >
                  {time}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-3xl border border-navy-800/40 bg-navy-950 p-8 text-white shadow-navy"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_30%)]" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">
                Visit us
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                Join our church family in Edinburgh
              </h3>

              <p className="mt-5 text-base leading-7 text-slate-200">
                {siteConfig.addressLine1}
              </p>
              <p className="text-base leading-7 text-slate-200">
                {siteConfig.addressLine2}
              </p>

              <p className="mt-5 text-base leading-7 text-slate-300">
                We gather as a diverse church family to worship Jesus, hear the
                Bible taught clearly and encourage one another in faith.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/events"
                  className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy-950 shadow-soft transition duration-200 hover:bg-brand-50"
                >
                  View church events
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-white/10"
                >
                  About the church
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section
        title="Church life"
        intro="Our church life is centred on worship, discipleship, prayer and service."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {homeHighlights.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative overflow-hidden rounded-3xl border border-church-border bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-100/70 blur-2xl transition duration-300 group-hover:scale-110" />
              <div className="relative">
                <div className="mb-5 inline-flex rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-800">
                  Ministry focus
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-church-heading">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-church-text">
                  {item.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section
        title="A glimpse of church life"
        intro="Moments of worship, fellowship, outreach and community from Victory House Chapel."
      >
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-3xl shadow-soft"
          >
            <Image
              src={galleryItems[0].image}
              alt={galleryItems[0].alt || galleryItems[0].title}
              width={1400}
              height={900}
              className="h-[420px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-navy-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">
                Featured moment
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                {galleryItems[0].title}
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-200">
                Worship, fellowship and shared life at Victory House Chapel.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {galleryItems.slice(1, 5).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl shadow-soft"
              >
                <Image
                  src={item.image}
                  alt={item.alt || item.title}
                  width={700}
                  height={500}
                  className="h-44 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-sm font-medium text-white">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/gallery"
            className="inline-flex items-center rounded-full border border-church-border bg-white px-5 py-3 text-sm font-semibold text-church-heading shadow-soft transition duration-200 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-800"
          >
            View full gallery
          </Link>
        </div>
      </Section>

      <Section
        title="Explore Victory House Chapel"
        intro="Helpful pathways for visitors, members and anyone getting to know the church."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { href: '/ministries', label: 'Explore ministries' },
            { href: '/sermons', label: 'Listen to sermons' },
            { href: '/donate', label: 'Find out about giving' },
            { href: '/contact', label: 'Contact the church' }
          ].map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              <Link
                href={link.href}
                className="flex min-h-[96px] items-center rounded-3xl border border-church-border bg-white px-6 py-5 text-base font-semibold text-church-heading shadow-soft transition duration-200 hover:-translate-y-1 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-800 hover:shadow-xl"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      <div className="mx-auto mb-12 max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
      </div>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[2rem] bg-navy-950 px-8 py-12 text-white shadow-navy lg:px-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.2),transparent_28%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">
                You are invited
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Come and worship with us this Sunday
              </h2>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-brand-300">
                Sunday worship • Edinburgh
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">
                We would love to welcome you to Victory House Chapel. Whether
                you come on your own, with family or as a first-time visitor,
                there is a place for you here.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 shadow-soft transition duration-200 hover:bg-brand-50"
              >
                Plan your visit
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-white/10"
              >
                Learn more
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}