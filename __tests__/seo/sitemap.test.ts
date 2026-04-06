/**
 * Sitemap Tests
 *
 * Verifies that the sitemap is properly generated with all routes
 */

import sitemap from '@/app/sitemap';
import { SITE_URL } from '@/lib/site';

describe('SEO - Sitemap', () => {
  let sitemapEntries: any[];

  beforeAll(async () => {
    sitemapEntries = await sitemap();
  });

  test('sitemap should return an array of entries', () => {
    expect(Array.isArray(sitemapEntries)).toBe(true);
    expect(sitemapEntries.length).toBeGreaterThan(0);
  });

  test('all entries should have a valid URL', () => {
    sitemapEntries.forEach(entry => {
      expect(entry.url).toBeDefined();
      expect(entry.url).toMatch(/^https?:\/\//);
    });
  });

  test('all entries should have a lastModified date', () => {
    sitemapEntries.forEach(entry => {
      expect(entry.lastModified).toBeDefined();
    });
  });

  test('all entries should have a changeFrequency', () => {
    const validFrequencies = ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'];
    sitemapEntries.forEach(entry => {
      expect(entry.changeFrequency).toBeDefined();
      expect(validFrequencies).toContain(entry.changeFrequency);
    });
  });

  test('all entries should have a priority between 0 and 1', () => {
    sitemapEntries.forEach(entry => {
      expect(entry.priority).toBeDefined();
      expect(entry.priority).toBeGreaterThanOrEqual(0);
      expect(entry.priority).toBeLessThanOrEqual(1);
    });
  });

  test('home page should have the highest priority', () => {
    const homeEntry = sitemapEntries.find(entry => entry.url === SITE_URL);
    expect(homeEntry).toBeDefined();
    expect(homeEntry.priority).toBe(1.0);
  });

  test('service pages should have high priority (0.9)', () => {
    const serviceUrls = [
      '/services/brand-strategy',
      '/services/digital-marketing',
      '/services/ui-ux-design',
      '/services/shopify-development',
      '/services/web-app-development',
    ];
    serviceUrls.forEach(path => {
      const entry = sitemapEntries.find(e => e.url === `${SITE_URL}${path}`);
      expect(entry).toBeDefined();
      expect(entry.priority).toBe(0.9);
    });
  });

  const requiredPages = [
    '/',
    '/about-us',
    '/contact',
    '/services/brand-strategy',
    '/services/digital-marketing',
    '/services/ui-ux-design',
    '/services/shopify-development',
    '/services/web-app-development',
    '/privacy-policy',
    '/terms-and-conditions',
    '/empty-page',
  ];

  test.each(requiredPages)('sitemap should include %s', (path) => {
    const expectedUrl = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
    const entry = sitemapEntries.find(e => e.url === expectedUrl);
    expect(entry).toBeDefined();
  });

  test('sitemap should have at least 11 entries', () => {
    expect(sitemapEntries.length).toBeGreaterThanOrEqual(11);
  });
});
