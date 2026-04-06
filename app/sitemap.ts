import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { blogPosts } from '@/data/blog-posts';
import { caseStudies } from '@/data/case-studies';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about-us`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Service Pages - high priority for keyword ranking
    {
      url: `${SITE_URL}/services/brand-strategy`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/digital-marketing`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/ui-ux-design`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/shopify-development`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/web-app-development`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Support Pages
    {
      url: `${SITE_URL}/faq`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/how-it-works`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/resources`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Blog Hub
    {
      url: `${SITE_URL}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Location Hub
    {
      url: `${SITE_URL}/locations`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Industries Hub
    {
      url: `${SITE_URL}/industries`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Portfolio Hub
    {
      url: `${SITE_URL}/portfolio`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Legal Pages
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-and-conditions`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Blog Posts
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.modifiedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Location Pages
  const locationSlugs = ['karachi', 'lahore', 'islamabad', 'rawalpindi', 'faisalabad', 'multan', 'peshawar', 'quetta'];
  const locationPages: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${SITE_URL}/location/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Industry Pages
  const industrySlugs = ['ecommerce', 'education', 'healthcare', 'real-estate', 'finance', 'food-restaurant', 'travel-hospitality', 'startups-saas'];
  const industryPages: MetadataRoute.Sitemap = industrySlugs.map((slug) => ({
    url: `${SITE_URL}/industries/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Portfolio Pages
  const portfolioPages: MetadataRoute.Sitemap = caseStudies.map((project) => ({
    url: `${SITE_URL}/portfolio/${project.slug}`,
    lastModified: new Date(project.completedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...blogPages,
    ...locationPages,
    ...industryPages,
    ...portfolioPages,
  ];
}
