import { siteConfig } from '../content/siteContent';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${siteConfig.url}/sitemap.xml`
  };
}
