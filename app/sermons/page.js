import Hero from '../../components/Hero';
import { siteConfig } from '../../content/siteContent';
import SermonsPageClient from './SermonsPageClient';

export const metadata = {
  title: `Sermons | ${siteConfig.name}`
};

export default function SermonsPage() {
  return (
    <>
      <Hero
        eyebrow="Sermons"
        title="Biblical teaching for everyday faith."
        intro="Browse recent messages and teaching from Victory House Chapel."
        backgroundImage="/images/hero/Church-ministration.jpeg"
        overlay="sermons"
      />

      <SermonsPageClient />
    </>
  );
}