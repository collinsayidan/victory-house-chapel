import Hero from '../../components/Hero';
import { siteConfig } from '../../content/siteContent';
import VisitPageClient from './VisitPageClient';

export const metadata = {
  title: `Plan Your Visit | ${siteConfig.name}`
};

export default function VisitPage() {
  return (
    <>
      <Hero
        eyebrow="Plan your visit"
        title="Everything you need for your first visit."
        intro="We want your visit to feel straightforward, welcoming and well supported from the moment you arrive."
        backgroundImage="/images/hero/church-activities.jpeg"
        overlay="contact"
      />

      <VisitPageClient />
    </>
  );
}