/**
 * Robots.txt Tests
 *
 * Verifies that robots.txt is properly configured for search engine crawling
 */

import robots from '@/app/robots';
import { SITE_URL } from '@/lib/site';

describe('SEO - Robots.txt', () => {
  let robotsConfig: any;

  beforeAll(() => {
    robotsConfig = robots();
  });

  test('robots.txt should have rules defined', () => {
    expect(robotsConfig.rules).toBeDefined();
  });

  test('robots.txt should allow all user agents', () => {
    const rules = Array.isArray(robotsConfig.rules) ? robotsConfig.rules : [robotsConfig.rules];
    const wildcardRule = rules.find((r: any) => r.userAgent === '*');
    expect(wildcardRule).toBeDefined();
  });

  test('robots.txt should allow crawling public pages', () => {
    const rules = Array.isArray(robotsConfig.rules) ? robotsConfig.rules : [robotsConfig.rules];
    const wildcardRule = rules.find((r: any) => r.userAgent === '*');
    expect(wildcardRule.allow).toBeDefined();
    const allowList = Array.isArray(wildcardRule.allow) ? wildcardRule.allow : [wildcardRule.allow];
    expect(allowList).toContain('/');
  });

  test('robots.txt should disallow API routes', () => {
    const rules = Array.isArray(robotsConfig.rules) ? robotsConfig.rules : [robotsConfig.rules];
    const wildcardRule = rules.find((r: any) => r.userAgent === '*');
    expect(wildcardRule.disallow).toBeDefined();
    const disallowList = Array.isArray(wildcardRule.disallow) ? wildcardRule.disallow : [wildcardRule.disallow];
    expect(disallowList).toContain('/api/');
  });

  test('robots.txt should NOT block service pages', () => {
    const rules = Array.isArray(robotsConfig.rules) ? robotsConfig.rules : [robotsConfig.rules];
    const wildcardRule = rules.find((r: any) => r.userAgent === '*');
    const disallowList = Array.isArray(wildcardRule.disallow) ? wildcardRule.disallow : [wildcardRule.disallow];
    expect(disallowList).not.toContain('/services/');
  });

  test('robots.txt should reference the sitemap', () => {
    expect(robotsConfig.sitemap).toBeDefined();
    expect(robotsConfig.sitemap).toBe(`${SITE_URL}/sitemap.xml`);
  });
});
