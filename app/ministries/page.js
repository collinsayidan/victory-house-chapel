import Hero from '../../components/Hero';
import { siteConfig } from '../../content/siteContent';
import MinistriesPageClient from './MinistriesPageClient';

export const metadata = {
  title: `Ministries | ${siteConfig.name}`
};

export default function MinistriesPage() {
  return (
    <>
      <Hero
        eyebrow="Ministries"
        title="Places to grow, serve and belong."
        intro="We want every person to find a place to connect, be discipled and contribute to the life of the church."
        backgroundImage="/images/hero/victory-voices-ministration-01.jpeg"
        overlay="ministries"
      />
      <MinistriesPageClient />
    </>
  );
}