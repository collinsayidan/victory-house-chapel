'use client';

import { motion } from 'framer-motion';
import Section from '../../components/Section';
import { CardGrid, ContentCard } from '../../components/CardGrid';
import { ministries } from '../../content/siteContent';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 }
};

export default function MinistriesPageClient() {
  const featuredMinistry = ministries[0];

  return (
    <>
      <Section
        title="Featured ministry"
        intro="Every ministry area helps build a church life that is prayerful, welcoming, grounded in Scripture and active in service."
      >
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-slate-50 p-8 shadow-soft"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_30%)]" />
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-200/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-navy-900/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
                Ministry spotlight
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
                {featuredMinistry.title}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700">
                {featuredMinistry.text}
              </p>
            </div>

            <div className="rounded-2xl border border-white/70 bg-white/80 p-6 shadow-lg backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-900">
                Why ministry matters
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                Ministry is one of the main ways people grow in discipleship,
                build meaningful relationships and serve the church with their
                time, gifts and compassion.
              </p>
              <div className="mt-6 h-1.5 w-24 rounded-full bg-brand-500" />
            </div>
          </div>
        </motion.div>
      </Section>

      <Section
        title="Current ministry areas"
        intro="These ministries help shape church life through discipleship, worship, prayer, outreach and pastoral care."
      >
        <CardGrid
          items={ministries}
          renderItem={(item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ContentCard
                title={item.title}
                tone={index % 3 === 1 ? 'soft' : 'default'}
              >
                <p>{item.text}</p>
              </ContentCard>
            </motion.div>
          )}
        />
      </Section>

      <Section
        title="Serving with purpose"
        intro="Every ministry is an opportunity to use our gifts faithfully and strengthen the life of the church."
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="rounded-3xl border border-church-border bg-white p-8 shadow-soft prose-content max-w-none"
          >
            <h2>Growing through service</h2>
            <p>
              We believe ministry is not only about helping others, but also
              about growing as disciples of Jesus. As people serve prayerfully
              and faithfully, the church is strengthened and individuals are
              encouraged in their walk with Christ.
            </p>
            <p>
              Some ministries focus on worship and prayer, while others centre
              on practical care, fellowship, discipleship and community
              outreach. Together, these areas help shape a healthy and active
              church family.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="rounded-3xl border border-navy-800/30 bg-navy-950 p-8 shadow-navy"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">
              Getting involved
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              Find your place to serve
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-200">
              If you would like to serve in any ministry area, please speak to a
              church leader or use the contact form. We would be glad to help
              you find a place where your gifts, availability and heart for
              service can be used well.
            </p>

            <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">
                  Prayerfully consider where you can serve
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">
                  Speak with a ministry leader or pastor
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">
                  Begin serving with guidance and support
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section
        title="Safeguarding and responsibility"
        intro="We want ministry to be carried out with care, wisdom and appropriate accountability."
      >
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-3xl border border-church-border bg-church-panel p-8 shadow-soft"
        >
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="prose-content max-w-none">
              <h2>Serving with care</h2>
              <p>
                Some roles, especially those involving children, young people or
                vulnerable adults, may require references, safeguarding checks
                and appropriate training before someone begins serving.
              </p>
              <p>
                Before publishing this page, make sure your safeguarding
                procedures, volunteer pathways and ministry contacts are
                accurate and up to date.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-200 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
                Important note
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-navy-950">
                Ministry should always be supported well
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Healthy ministry requires prayer, trust, accountability and wise
                leadership so that people can serve safely and fruitfully.
              </p>
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
}