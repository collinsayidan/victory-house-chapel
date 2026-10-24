import Hero from '../../components/Hero';
import Section from '../../components/Section';
import LeadershipGrid from '../../components/LeadershipGrid';
import Link from 'next/link';
import CtaBand from '../../components/CtaBand';
import Icon from '../../components/Icon';
import { filled, leaders, siteConfig } from '../../content/siteContent';

export const metadata = {
  title: 'About us',
  description:
    'Victory House Chapel is a Pentecostal church in Edinburgh, part of the Assemblies of God. Learn what we believe, our vision and who leads the church.'
};

const values = [
  {
    icon: 'church',
    title: 'Christ-centred worship',
    text: 'We gather to honour God with joyful, Spirit-led worship and prayer.'
  },
  {
    icon: 'book',
    title: 'Biblical discipleship',
    text: 'We teach the Bible clearly and help one another follow Jesus in everyday life.'
  },
  {
    icon: 'heart',
    title: 'Compassionate outreach',
    text: 'We serve our neighbours in Edinburgh with practical love and hospitality.'
  }
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About us"
        title="A local church with a heart for Edinburgh"
        intro="We are part of the Assemblies of God, committed to biblical teaching, Spirit-led prayer, joyful worship and practical love for our neighbours."
        backgroundImage="/images/hero/worship.webp"
        imageAlt="The congregation worshipping at Victory House Chapel"
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="prose-content">
            <h2 className="!mt-0">Who we are</h2>
            <p>
              {siteConfig.name} is a welcoming Pentecostal church serving people from a range of
              cultures, backgrounds and generations.
            </p>
            <p>
              We believe the Bible is God&apos;s word, salvation is found in Jesus Christ, and the
              Holy Spirit equips the church for holy living, witness and service.
            </p>
            <h2>Our vision</h2>
            <p>
              We want to honour God, share the gospel faithfully and reflect Christ&apos;s love in
              Edinburgh and beyond. We help people grow as disciples, build healthy Christian
              community and serve the city with humility and hope.
            </p>
          </div>

          <aside className="self-start rounded-2xl border border-gold-500/40 bg-gold-50 p-7 shadow-card">
            <h2 className="font-sans text-xl">What to expect on a Sunday</h2>
            <p className="mt-3">
              A warm welcome, worship, prayer, Bible teaching and time to connect with others. Come
              as you are.
            </p>
            <p className="mt-4">
              <Link href="/visit" className="font-semibold">
                Plan your visit
              </Link>
            </p>
          </aside>
        </div>
      </Section>

      <Section alt caption="Our values" title="What matters to us">
        <ul className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <li key={value.title} className="card p-7">
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gold-50 text-gold-800">
                <Icon name={value.icon} />
              </span>
              <h3>{value.title}</h3>
              <p className="mt-3">{value.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        caption="Our team"
        title="Meet the leadership team"
        intro="Our leaders serve the church through prayer, pastoral care, administration and ministry support."
      >
        <LeadershipGrid leaders={leaders} />
      </Section>

      <Section
        alt
        caption="Governance"
        title="Leadership and governance"
        intro="The church is led by its pastoral and leadership team in line with its governing document and charity law in Scotland."
      >
        <dl className="summary-list max-w-3xl">
          <div>
            <dt>Lead Pastor</dt>
            <dd>Rev. Kwarteng Boamah</dd>
          </div>
          {filled(siteConfig.charityNumber) ? (
            <div>
              <dt>Scottish Charity Number</dt>
              <dd>{siteConfig.charityNumber}</dd>
            </div>
          ) : null}
          <div>
            <dt>Correspondence address</dt>
            <dd>
              {siteConfig.addressLine1}, {siteConfig.addressLine2}
            </dd>
          </div>
        </dl>
      </Section>

      <CtaBand />
    </>
  );
}
