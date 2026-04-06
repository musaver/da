/**
 * Sitemap Tests
 *
 * Verifies that the sitemap is properly generated with all routes
 */

import sitemap from '@/app/sitemap';

const SITE_URL = 'https://devaspire.co';

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

  const requiredPages = [
    '/',
    '/about-us',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/empty-page',
  ];

  test.each(requiredPages)('sitemap should include %s', (path) => {
    const expectedUrl = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
    const entry = sitemapEntries.find(e => e.url === expectedUrl);
    expect(entry).toBeDefined();
  });
});
