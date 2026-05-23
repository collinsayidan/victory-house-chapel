import Hero from '../../components/Hero';
import { siteConfig } from '../../content/siteContent';
import AboutPageClient from './AboutPageClient';

export const metadata = {
  title: `About | ${siteConfig.name}`
};

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About us"
        title="A local church with a heart for Edinburgh."
        intro="We are part of the Assemblies of God, committed to biblical teaching, Spirit-led prayer, joyful worship and practical love for our neighbours."
        backgroundImage="/images/hero/worship.webp"
        overlay="about"
      />
      <AboutPageClient />
    </>
  );
}