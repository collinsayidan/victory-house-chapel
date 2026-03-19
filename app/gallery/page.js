import Hero from '../../components/Hero';
import { siteConfig } from '../../content/siteContent';
import GalleryPageClient from './GalleryPageClient';

export const metadata = {
  title: `Gallery | ${siteConfig.name}`
};

export default function GalleryPage() {
  return (
    <>
      <Hero
        eyebrow="Gallery"
        title="Moments from church life"
        intro="A glimpse of worship, fellowship, outreach and ministry at Victory House Chapel."
        backgroundImage="/images/hero/church-activities.jpeg"
        overlay="gallery"
        align="center"
      />

      <GalleryPageClient />
    </>
  );
}