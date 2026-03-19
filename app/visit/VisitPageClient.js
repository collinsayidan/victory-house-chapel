'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from '../../components/Section';
import { siteConfig } from '../../content/siteContent';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 }
};

const visitSteps = [
  {
    title: 'Arrive and feel at ease',
    text: 'When you arrive, someone from the welcome team will be happy to greet you and help you find your way around.'
  },
  {
    title: 'Join the worship service',
    text: 'Our Sunday gatherings usually include worship, prayer, Bible teaching and time for fellowship in a warm and welcoming setting.'
  },
  {
    title: 'Stay and connect',
    text: 'After the service, there is usually an opportunity to meet people, ask questions and get to know the church family.'
  }
];

const faqs = [
  {
    question: 'What should I wear?',
    answer:
      'Please come as you are. Some people dress more formally and others dress casually. We want you to feel comfortable and welcome.'
  },
  {
    question: 'How long is the service?',
    answer:
      'Our main Sunday worship service begins at 11:00 am. You may wish to update this page later with your usual service length once confirmed.'
  },
  {
    question: 'Can I come if I am new to church or exploring faith?',
    answer:
      'Absolutely. Whether you are familiar with church or visiting for the first time, you are warmly invited to come and learn more.'
  },
  {
    question: 'Is there anything before the main service?',
    answer:
      'Yes. Sunday prayer begins at 10:00 am before the main worship service at 11:00 am.'
  }
];

export default function VisitPageClient() {
  return (
    <>
      <Section
        title="Your first visit"
        intro="We want your visit to feel calm, welcoming and easy from the moment you arrive."
      >
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[2rem] border border-brand-200/70 bg-gradient-to-br from-brand-50 via-white to-slate-50 p-8 shadow-soft lg:p-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_28%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.10),transparent_24%)]" />
          <div className="absolute -right-12 top-10 h-40 w-40 rounded-full bg-brand-200/30 blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-blue-100/40 blur-2xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-700">
                What to expect
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl">
                A warm welcome, Christ-centred worship and biblical teaching
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700">
                Victory House Chapel is a welcoming church family in Edinburgh.
                We gather to worship Jesus, pray together, learn from Scripture
                and encourage one another in faith. Whether you have attended
                church for years or are stepping in for the first time, we want
                you to feel genuinely at home.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition duration-200 hover:bg-brand-700"
                >
                  Contact us before you visit
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center rounded-full border border-church-border bg-white px-6 py-3 text-sm font-semibold text-navy-950 shadow-soft transition duration-200 hover:border-brand-300 hover:bg-brand-50"
                >
                  View service times
                </Link>
              </div>
            </div>

            <div className="relative rounded-[1.75rem] border border-white/70 bg-white/85 p-6 shadow-xl backdrop-blur">
              <div className="absolute right-4 top-4 h-20 w-20 rounded-full bg-brand-100/60 blur-2xl" />
              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-900">
                  Visit summary
                </p>

                <div className="mt-5 space-y-4">
                  <div className="rounded-2xl border border-church-border bg-church-panel p-4">
                    <p className="text-sm font-semibold text-church-heading">
                      Location
                    </p>
                    <p className="mt-1 text-sm leading-6 text-church-text">
                      {siteConfig.addressLine1}
                      <br />
                      {siteConfig.addressLine2}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-church-border bg-church-panel p-4">
                    <p className="text-sm font-semibold text-church-heading">
                      Main Sunday service
                    </p>
                    <p className="mt-1 text-sm leading-6 text-church-text">
                      {siteConfig.serviceTimes[1]}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-church-border bg-church-panel p-4">
                    <p className="text-sm font-semibold text-church-heading">
                      Need help before coming?
                    </p>
                    <p className="mt-1 text-sm leading-6 text-church-text">
                      Email: {siteConfig.email}
                      <br />
                      Phone: {siteConfig.phone}
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-navy-950 px-5 py-4 text-white shadow-navy">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">
                    Encouragement
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">
                    Whether you come on your own, with family or with friends,
                    we would be glad to welcome you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      <Section
        title="A simple journey for your first Sunday"
        intro="A clear path helps first-time visitors feel settled and confident before they even arrive."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {visitSteps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative overflow-hidden rounded-3xl border border-church-border bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_32%)] opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-100/70 blur-2xl transition duration-300 group-hover:scale-110" />

              <div className="relative">
                <div className="mb-5 inline-flex rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-800">
                  Step {index + 1}
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-church-heading">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-church-text">
                  {step.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section
        title="Helpful visitor information"
        intro="This section gives reassurance, reduces uncertainty and makes the church feel easier to approach."
      >
        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="rounded-[2rem] border border-church-border bg-white p-8 shadow-soft prose-content max-w-none"
          >
            <h2>Practical details</h2>
            <p>
              Victory House Chapel meets at {siteConfig.addressLine1},{' '}
              {siteConfig.addressLine2}. If you would like help before
              attending, please contact us in advance and we will do our best to
              assist.
            </p>
            <ul>
              <li>Sunday prayer: 10:00 am</li>
              <li>Sunday worship service: 11:00 am</li>
              <li>Email: {siteConfig.email}</li>
              <li>Phone: {siteConfig.phone}</li>
            </ul>
            <p>
              Before launch, update this section with confirmed details on
              parking, public transport, accessibility, children’s provision and
              whether refreshments are available after the service.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.72, delay: 0.08, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-[2rem] border border-navy-800/30 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 p-8 text-white shadow-navy"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.20),transparent_28%)]" />
            <div className="absolute -right-8 top-8 h-32 w-32 rounded-full bg-brand-300/10 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">
                Families and children
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                Make family information easy to find
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-200">
                If you provide children’s or youth activities, clearly explain
                age groups, check-in arrangements, safeguarding and where
                families should go on arrival.
              </p>

              <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
                <div className="rounded-2xl bg-white/5 p-4 text-sm font-medium text-white">
                  Clear children’s information
                </div>
                <div className="rounded-2xl bg-white/5 p-4 text-sm font-medium text-white">
                  Accessibility and building guidance
                </div>
                <div className="rounded-2xl bg-white/5 p-4 text-sm font-medium text-white">
                  A warm and confident first impression
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section
        title="Frequently asked questions"
        intro="These are some of the questions people often ask before their first visit."
      >
        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative overflow-hidden rounded-3xl border border-church-border bg-white p-6 shadow-soft transition duration-300 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.10),transparent_34%)] opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative">
                <h3 className="text-xl font-semibold tracking-tight text-church-heading">
                  {faq.question}
                </h3>
                <p className="mt-3 text-base leading-7 text-church-text">
                  {faq.answer}
                </p>
              </div>
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.10),transparent_22%)]" />

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">
                Ready to visit?
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                We would love to welcome you this Sunday
              </h2>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-brand-300">
                Sunday worship • Edinburgh
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">
                Whether you come on your own, with friends or as a family, we
                hope you will find a warm welcome, Christ-centred worship and a
                church community ready to receive you.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 shadow-soft transition duration-200 hover:bg-brand-50"
              >
                Contact us before you come
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-white/10"
              >
                See service times
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}