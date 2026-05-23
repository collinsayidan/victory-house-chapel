import './globals.css';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import PageTransition from '../components/PageTransition';
import { siteConfig } from '../content/siteContent';

/* ─── Fonts ────────────────────────────────────────────────────────────────── */
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap'
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap'
});

/* ─── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description
};

/* ─── Root layout ──────────────────────────────────────────────────────────── */
export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${cormorant.variable} ${inter.variable}`}>
      <body
        className="bg-church-bg text-church-text antialiased"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="min-h-screen bg-slate-50">
          <Header />
          <PageTransition>
            <main id="main-content">{children}</main>
          </PageTransition>
          <Footer />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}