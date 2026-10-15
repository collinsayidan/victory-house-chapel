import CtaBand from '../../components/CtaBand';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import GalleryPageClient from './GalleryPageClient';

export const metadata = {
  title: 'Gallery',
  description:
    'Photos from worship services, prayer gatherings, outreach and church life at Victory House Chapel, Edinburgh.'
};

export default function GalleryPage() {
  return (
    <>
      <Hero
        eyebrow="Gallery"
        title="Moments from church life"
        intro="Photos from worship services, prayer gatherings, outreach and community life at Victory House Chapel. Select a photo to see it larger."
      />
      <Section>
        <GalleryPageClient />
      </Section>
      <CtaBand title="Be part of the story" />
    </>
  );
}
