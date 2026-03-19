import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import PageTransition from '../components/PageTransition';
import { siteConfig } from '../content/siteContent';

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body className="bg-slate-50 text-church-text">
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