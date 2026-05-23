'use client';

import { motion } from 'framer-motion';
import Section from '../../components/Section';
import { ContentCard } from '../../components/Contentcard';
import { ministries } from '../../content/siteContent';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 }
};

const ease = [0.16, 1, 0.3, 1];

function MinistriesGrid({ items }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: index * 0.07, ease }}
          viewport={{ once: true, amount: 0.15 }}
        >
          <ContentCard
            title={item.title}
            tone={index % 3 === 1 ? 'soft' : 'default'}
          >
            <p>{item.text}</p>
          </ContentCard>
        </motion.div>
      ))}
    </div>
  );
}

export default function MinistriesPageClient() {
  const featuredMinistry = ministries[0];

  return (
    <>
      {/* ── Featured ministry ───────────────────────────────────────────── */}
      <Section
        title="Featured ministry"
        intro="Every ministry area helps build a church life that is prayerful, welcoming, grounded in Scripture and active in service."
      >
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, ease }}
          className="relative overflow-hidden rounded-3xl border border-church-border bg-white p-8"
          style={{ boxShadow: 'var(--shadow-xl)' }}
        >
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, var(--gold-mid), transparent 70%)' }}
          />
          <div
            className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, var(--navy-lt), transparent 70%)' }}
          />

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="eyebrow">Ministry spotlight</p>
              <h2
                className="mt-5 tracking-tight"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)' }}
              >
                {featuredMinistry.title}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                {featuredMinistry.text}
              </p>
            </div>

            <div
              className="rounded-2xl border border-church-border bg-white p-6"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div
                className="mb-4 h-1 w-10 rounded-full"
                style={{ background: 'linear-gradient(90deg, var(--gold), var(--gold-mid))' }}
              />
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: 'var(--gold-dk)' }}
              >
                Why ministry matters
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Ministry is one of the main ways people grow in discipleship,
                build meaningful relationships and serve the church with their
                time, gifts and compassion.
              </p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* ── Ministry grid ───────────────────────────────────────────────── */}
      <Section
        title="Current ministry areas"
        intro="These ministries help shape church life through discipleship, worship, prayer, outreach and pastoral care."
      >
        <MinistriesGrid items={ministries} />
      </Section>

      {/* ── Serving with purpose ────────────────────────────────────────── */}
      <Section
        title="Serving with purpose"
        intro="Every ministry is an opportunity to use our gifts faithfully and strengthen the life of the church."
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.65, ease }}
            className="prose-content max-w-none rounded-3xl border border-church-border bg-white p-8"
            style={{ boxShadow: 'var(--shadow-card)' }}
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

          {/* Dark navy card — uses var(--gradient-card) */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="relative overflow-hidden rounded-3xl p-8 text-white"
            style={{
              background: 'var(--gradient-card)',
              boxShadow: 'var(--shadow-navy)'
            }}
          >
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, var(--gold-mid), transparent 70%)' }}
            />
            <div className="relative">
              <p
                className="eyebrow"
                style={{ color: 'var(--gold-on-dark)' }}
              >
                Getting involved
              </p>
              <h3
                className="mt-4 tracking-tight text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Find your place to serve
              </h3>
              <p className="mt-4 text-base leading-7 text-white/75">
                If you would like to serve in any ministry area, please speak to a
                church leader or use the contact form. We would be glad to help
                you find a place where your gifts, availability and heart for
                service can be used well.
              </p>
              <div className="mt-6 space-y-2 border-t border-white/10 pt-6">
                {[
                  'Prayerfully consider where you can serve',
                  'Speak with a ministry leader or pastor',
                  'Begin serving with guidance and support'
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-white/90"
                    style={{
                      background: 'rgba(255,255,255,0.07)',
                      borderLeft: '3px solid var(--gold-on-dark)'
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── Safeguarding ────────────────────────────────────────────────── */}
      <Section
        title="Safeguarding and responsibility"
        intro="We want ministry to be carried out with care, wisdom and appropriate accountability."
      >
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, ease }}
          className="rounded-3xl border border-church-border bg-church-panel p-8"
          style={{ boxShadow: 'var(--shadow-soft)' }}
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

            <div
              className="rounded-2xl border border-church-border bg-white p-6"
              style={{
                borderLeftWidth: '3px',
                borderLeftColor: 'var(--gold-mid)',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <p className="eyebrow">Important note</p>
              <h3
                className="mt-4 tracking-tight"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)' }}
              >
                Ministry should always be supported well
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
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