import { legalNavigation, navigation, siteConfig } from '../content/siteContent';

export default function sitemap() {
  return [...navigation, ...legalNavigation].map((item) => ({
    url: `${siteConfig.url}${item.href === '/' ? '' : item.href}`,
    changeFrequency: 'monthly',
    priority: item.href === '/' ? 1 : 0.7
  }));
}
