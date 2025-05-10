import siteData from '../data/site.json';

export function useSiteData() {
  return {
    hero: siteData.hero,
    about: siteData.about,
    services: siteData.services,
    testimonials: siteData.testimonials,
    cta: siteData.cta,
    images: siteData.images,
    icons: siteData.icons,
  };
} 