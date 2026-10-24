import './globals.css';
import { Figtree } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import ScrollReveal from '../components/ScrollReveal';
import { siteConfig } from '../content/siteContent';

/* ─── Fonts ────────────────────────────────────────────────────────────── */
// One open, friendly sans-serif for headings and body. It keeps clear letter
// spacing at small sizes, so headings stay easy to read on phones.
const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap'
});

/* ─── Metadata ─────────────────────────────────────────────────────────── */
export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`
  },
  description: siteConfig.description,
  // './' resolves to each page's own address on the live domain
  alternates: {
    canonical: './'
  },
  openGraph: {
    type: 'website',
    url: './',
    locale: 'en_GB',
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: '/images/hero/worship.webp',
        alt: 'Worship at Victory House - Assemblies of God, Edinburgh'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image'
  }
};

export const viewport = {
  themeColor: '#16025e'
};

/* ─── Structured data for search engines and maps ──────────────────────── */
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Church',
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  logo: `${siteConfig.url}/images/church-logo.jpeg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.addressLine1,
    addressLocality: 'Edinburgh',
    postalCode: 'EH14 3HR',
    addressCountry: 'GB'
  },
  event: siteConfig.weeklyServices.map((service) => ({
    '@type': 'Event',
    name: service.name,
    description: `${service.day}, ${service.time}`,
    location: { '@type': 'Place', name: siteConfig.shortName }
  }))
};

/* ─── Root layout ──────────────────────────────────────────────────────── */
export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={figtree.variable}>
      <body id="top">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
            {children}
          </main>
          <Footer />
        </div>
        <CookieBanner />
        <ScrollReveal />
      </body>
    </html>
  );
}
