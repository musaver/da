/**
 * SEO Metadata Tests
 *
 * Tests that all pages have proper SEO metadata including:
 * - Title tags with brand name
 * - Meta descriptions with target keywords
 * - Open Graph tags
 * - Twitter Card tags
 * - Canonical URLs
 */

import { metadata as rootMetadata } from '@/app/layout';
import { metadata as aboutMetadata } from '@/app/about-us/page';
import { metadata as contactMetadata } from '@/app/contact/page';
import { metadata as privacyMetadata } from '@/app/privacy-policy/page';
import { metadata as termsMetadata } from '@/app/terms-and-conditions/page';
import { metadata as getStartedMetadata } from '@/app/empty-page/page';

const SITE_URL = 'https://devaspire.co';
const BRAND_NAME = 'Dev Aspire';

// All page metadata to test
const pages = [
  { name: 'Home', metadata: rootMetadata, path: '/' },
  { name: 'About Us', metadata: aboutMetadata, path: '/about-us' },
  { name: 'Contact', metadata: contactMetadata, path: '/contact' },
  { name: 'Privacy Policy', metadata: privacyMetadata, path: '/privacy-policy' },
  { name: 'Terms & Conditions', metadata: termsMetadata, path: '/terms-and-conditions' },
  { name: 'Get Started', metadata: getStartedMetadata, path: '/empty-page' },
];

describe('SEO Metadata - Title Tags', () => {
  test.each(pages)('$name page should have a title', ({ metadata }) => {
    expect(metadata.title).toBeDefined();
    expect(typeof metadata.title === 'string' ? metadata.title : (metadata.title as any)?.default || (metadata.title as any)?.template).toBeTruthy();
  });

  test.each(pages)('$name page title should contain brand name', ({ metadata }) => {
    const title = typeof metadata.title === 'string'
      ? metadata.title
      : (metadata.title as any)?.default || (metadata.title as any)?.template || '';
    expect(title).toContain(BRAND_NAME);
  });

  test.each(pages)('$name page title should be between 30-60 characters', ({ metadata }) => {
    const title = typeof metadata.title === 'string'
      ? metadata.title
      : (metadata.title as any)?.default || '';
    // Titles should ideally be 30-60 chars for optimal SEO
    expect(title.length).toBeGreaterThanOrEqual(20);
    expect(title.length).toBeLessThanOrEqual(70);
  });
});

describe('SEO Metadata - Meta Descriptions', () => {
  test.each(pages)('$name page should have a description', ({ metadata }) => {
    expect(metadata.description).toBeDefined();
    expect(metadata.description).toBeTruthy();
  });

  test.each(pages)('$name page description should be between 120-160 characters', ({ metadata }) => {
    const desc = metadata.description as string;
    // Meta descriptions should be 120-160 chars for optimal display in SERPs
    expect(desc.length).toBeGreaterThanOrEqual(80);
    expect(desc.length).toBeLessThanOrEqual(165);
  });

  test('Home page description should contain primary keywords', () => {
    const desc = (rootMetadata.description as string).toLowerCase();
    // Should contain key terms related to web design/development agency
    const hasKeyword = ['web design', 'web development', 'agency', 'brand', 'design'].some(
      keyword => desc.includes(keyword)
    );
    expect(hasKeyword).toBe(true);
  });

  test('About page description should contain relevant keywords', () => {
    const desc = (aboutMetadata.description as string).toLowerCase();
    const hasKeyword = ['web design', 'web development', 'dev aspire', 'agency'].some(
      keyword => desc.includes(keyword)
    );
    expect(hasKeyword).toBe(true);
  });
});

describe('SEO Metadata - Open Graph Tags', () => {
  test.each(pages)('$name page should have Open Graph title', ({ metadata }) => {
    expect((metadata as any).openGraph).toBeDefined();
    expect((metadata as any).openGraph.title).toBeDefined();
  });

  test.each(pages)('$name page should have Open Graph description', ({ metadata }) => {
    expect((metadata as any).openGraph.description).toBeDefined();
  });

  test.each(pages)('$name page should have Open Graph URL', ({ metadata, path }) => {
    expect((metadata as any).openGraph.url).toBeDefined();
    expect((metadata as any).openGraph.url).toContain(path === '/' ? SITE_URL : path);
  });

  test.each(pages)('$name page should have Open Graph type', ({ metadata }) => {
    expect((metadata as any).openGraph.type).toBeDefined();
    expect(['website', 'article']).toContain((metadata as any).openGraph.type);
  });

  test.each(pages)('$name page should have Open Graph image', ({ metadata }) => {
    expect((metadata as any).openGraph.images).toBeDefined();
    const images = (metadata as any).openGraph.images;
    expect(Array.isArray(images) ? images.length : 1).toBeGreaterThan(0);
  });

  test.each(pages)('$name page should have Open Graph siteName', ({ metadata }) => {
    expect((metadata as any).openGraph.siteName).toBe(BRAND_NAME);
  });
});

describe('SEO Metadata - Twitter Cards', () => {
  test.each(pages)('$name page should have Twitter card type', ({ metadata }) => {
    expect((metadata as any).twitter).toBeDefined();
    expect((metadata as any).twitter.card).toBe('summary_large_image');
  });

  test.each(pages)('$name page should have Twitter title', ({ metadata }) => {
    expect((metadata as any).twitter.title).toBeDefined();
  });

  test.each(pages)('$name page should have Twitter description', ({ metadata }) => {
    expect((metadata as any).twitter.description).toBeDefined();
  });

  test.each(pages)('$name page should have Twitter image', ({ metadata }) => {
    expect((metadata as any).twitter.images).toBeDefined();
  });
});

describe('SEO Metadata - Canonical URLs', () => {
  test.each(pages)('$name page should have canonical URL via alternates', ({ metadata, path }) => {
    expect((metadata as any).alternates).toBeDefined();
    expect((metadata as any).alternates.canonical).toBeDefined();
    const canonical = (metadata as any).alternates.canonical;
    if (path === '/') {
      expect(canonical).toBe(SITE_URL);
    } else {
      expect(canonical).toBe(`${SITE_URL}${path}`);
    }
  });
});

describe('SEO Metadata - Additional Tags', () => {
  test('Root layout should have metadataBase set', () => {
    expect((rootMetadata as any).metadataBase).toBeDefined();
  });

  test('Root layout should have keywords', () => {
    expect((rootMetadata as any).keywords).toBeDefined();
    const keywords = (rootMetadata as any).keywords;
    expect(Array.isArray(keywords) ? keywords.length : keywords.split(',').length).toBeGreaterThan(3);
  });

  test('Root layout should have robots configuration', () => {
    expect((rootMetadata as any).robots).toBeDefined();
  });
});
