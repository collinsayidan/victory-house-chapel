'use client';

import { motion } from 'framer-motion';
import Section from '../../components/Section';
import LeadershipGrid from '../../components/LeadershipGrid';
import { leaders, siteConfig } from '../../content/siteContent';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 }
};

export default function AboutPageClient() {
  return (
    <>
      <Section
        title="Who we are"
        intro="Victory House Chapel is a welcoming church family seeking to honour Christ, serve our city and help people grow in faith."
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
                Our church family
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
                Rooted in Scripture, shaped by grace
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700">
                Victory House Chapel Assemblies of God, Edinburgh is a welcoming
                Pentecostal church serving people from a range of cultures,
                backgrounds and generations. We believe the Bible is God&apos;s
                word, salvation is found in Jesus Christ, and the Holy Spirit
                equips the church for holy living, witness and service.
              </p>
            </div>

            <div className="rounded-2xl border border-white/70 bg-white/80 p-6 shadow-lg backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-900">
                Our vision
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-navy-950">
                Loving God and serving Edinburgh
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-700">
                We want to honour God, proclaim the gospel faithfully and
                reflect Christ&apos;s love in Edinburgh and beyond. We seek to
                help people grow as disciples, build healthy Christian community
                and serve the city with humility and hope.
              </p>
              <div className="mt-6 h-1.5 w-24 rounded-full bg-brand-500" />
            </div>
          </div>
        </motion.div>
      </Section>

      <Section
        title="What to expect"
        intro="We want visitors to feel at ease from the moment they arrive."
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="rounded-3xl border border-church-border bg-white p-8 shadow-soft prose-content max-w-none"
          >
            <h2>Sunday worship and fellowship</h2>
            <p>
              On a typical Sunday, you can expect a warm welcome, worship,
              prayer, Bible teaching and time to connect with others. We are a
              diverse church family and encourage people to come as they are.
            </p>
            <p>
              If children&apos;s activities or youth provision are available,
              these should be clearly listed on the site once confirmed. Before
              publishing, make sure all safeguarding and volunteer arrangements
              are up to date.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="rounded-3xl border border-navy-800/30 bg-navy-950 p-8 shadow-navy"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">
              Our heart
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              Worship, discipleship and outreach
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-200">
              We desire to be a Christ-centred church where people encounter
              God, grow in faith, experience genuine community and are equipped
              to serve others in love.
            </p>

            <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">
                  Christ-centred worship
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">
                  Biblical discipleship
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4">
                <p className="text-sm font-semibold text-white">
                  Compassionate outreach
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section
        title="Meet the leadership team"
        intro="Our leaders serve the church through prayer, pastoral care, administration and ministry support."
      >
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <LeadershipGrid leaders={leaders} />
        </motion.div>
      </Section>

      <Section
        title="Leadership and governance"
        intro="We aim to serve with integrity, accountability and faithfulness in accordance with charity law in Scotland."
      >
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-3xl border border-church-border bg-white p-8 shadow-soft"
        >
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="prose-content max-w-none">
              <h2>Serving with integrity and accountability</h2>
              <p>
                The church is led by its pastoral and leadership team in
                accordance with its governing document and the requirements of
                charity law in Scotland.
              </p>
              <ul>
                <li>Lead Pastor: [Rev. Kwarteng Boamah]</li>
                <li>Associate Leaders / Elders: [Insert names]</li>
                <li>
                  Registered Scottish Charity Number: {siteConfig.charityNumber}
                </li>
                <li>
                  Principal correspondence address: {siteConfig.addressLine1},{' '}
                  {siteConfig.addressLine2}
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-brand-200 bg-church-panel p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
                Governance note
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-navy-950">
                Clear structure helps support healthy church life
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Strong governance helps ensure that ministry, finances,
                safeguarding and leadership responsibilities are carried out with
                wisdom, care and transparency.
              </p>
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
}