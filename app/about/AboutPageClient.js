'use client';

import { motion } from 'framer-motion';
import Section from '../../components/Section';
import LeadershipGrid from '../../components/LeadershipGrid';
import { leaders, siteConfig } from '../../content/siteContent';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 }
};

const ease = [0.16, 1, 0.3, 1];

export default function AboutPageClient() {
  return (
    <>
      {/* ── Who we are ─────────────────────────────────────────────────── */}
      <Section
        title="Who we are"
        intro="Victory House Chapel is a welcoming church family seeking to honour Christ, serve our city and help people grow in faith."
      >
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, ease }}
          className="relative overflow-hidden rounded-3xl border border-church-border bg-white p-8"
          style={{ boxShadow: 'var(--shadow-xl)' }}
        >
          {/* Gold glow — top right */}
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, var(--gold-mid), transparent 70%)' }}
          />
          {/* Navy glow — bottom left */}
          <div
            className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, var(--navy-lt), transparent 70%)' }}
          />

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="eyebrow">Our church family</p>
              <h2
                className="mt-5 tracking-tight"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)' }}
              >
                Rooted in Scripture, shaped by grace
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                Victory House Chapel Assemblies of God, Edinburgh is a welcoming
                Pentecostal church serving people from a range of cultures,
                backgrounds and generations. We believe the Bible is God&apos;s
                word, salvation is found in Jesus Christ, and the Holy Spirit
                equips the church for holy living, witness and service.
              </p>
            </div>

            {/* Vision card */}
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
                Our vision
              </p>
              <h3
                className="mt-3 tracking-tight"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)' }}
              >
                Loving God and serving Edinburgh
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-600">
                We want to honour God, proclaim the gospel faithfully and
                reflect Christ&apos;s love in Edinburgh and beyond. We seek to
                help people grow as disciples, build healthy Christian community
                and serve the city with humility and hope.
              </p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* ── What to expect ─────────────────────────────────────────────── */}
      <Section
        title="What to expect"
        intro="We want visitors to feel at ease from the moment they arrive."
      >
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.65, ease }}
            className="prose-content max-w-none rounded-3xl border border-church-border bg-white p-8"
            style={{ boxShadow: 'var(--shadow-card)' }}
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

          {/* Dark navy card — uses correct token names */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="relative overflow-hidden rounded-3xl p-8 text-white"
            style={{
              background: 'var(--gradient-card)',
              boxShadow: 'var(--shadow-navy)'
            }}
          >
            {/* Gold glow */}
            <div
              className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20"
              style={{ background: 'radial-gradient(circle, var(--gold-mid), transparent 70%)' }}
            />
            <div className="relative">
              <p
                className="eyebrow"
                style={{ color: 'var(--gold-on-dark)' }}
              >
                Our heart
              </p>
              <h3
                className="mt-4 tracking-tight text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Worship, discipleship and outreach
              </h3>
              <p className="mt-4 text-base leading-7 text-white/75">
                We desire to be a Christ-centred church where people encounter
                God, grow in faith, experience genuine community and are equipped
                to serve others in love.
              </p>
              <div className="mt-6 space-y-2 border-t border-white/10 pt-6">
                {['Christ-centred worship', 'Biblical discipleship', 'Compassionate outreach'].map((item) => (
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

      {/* ── Leadership team ────────────────────────────────────────────── */}
      <Section
        title="Meet the leadership team"
        intro="Our leaders serve the church through prayer, pastoral care, administration and ministry support."
      >
        <motion.div {...fadeUp} transition={{ duration: 0.7, ease }}>
          <LeadershipGrid leaders={leaders} />
        </motion.div>
      </Section>

      {/* ── Governance ─────────────────────────────────────────────────── */}
      <Section
        title="Leadership and governance"
        intro="We aim to serve with integrity, accountability and faithfulness in accordance with charity law in Scotland."
      >
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, ease }}
          className="rounded-3xl border border-church-border bg-white p-8"
          style={{ boxShadow: 'var(--shadow-card)' }}
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
                <li>Registered Scottish Charity Number: {siteConfig.charityNumber}</li>
                <li>
                  Principal correspondence address: {siteConfig.addressLine1},{' '}
                  {siteConfig.addressLine2}
                </li>
              </ul>
            </div>

            {/* Governance note — gold left border */}
            <div
              className="rounded-2xl border border-church-border bg-church-panel p-6"
              style={{
                borderLeftWidth: '3px',
                borderLeftColor: 'var(--gold-mid)',
                boxShadow: 'var(--shadow-soft)'
              }}
            >
              <p className="eyebrow">Governance note</p>
              <h3
                className="mt-4 tracking-tight"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--navy)' }}
              >
                Clear structure supports healthy church life
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
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