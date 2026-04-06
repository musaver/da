/**
 * Structured Data (JSON-LD) Tests
 *
 * Verifies that structured data is properly implemented for rich search results
 */

import { organizationSchema, websiteSchema, breadcrumbSchema } from '@/lib/structured-data';

const SITE_URL = 'https://devaspire.co';
const BRAND_NAME = 'Dev Aspire';

describe('SEO - Structured Data: Organization Schema', () => {
  test('should have @context set to schema.org', () => {
    expect(organizationSchema['@context']).toBe('https://schema.org');
  });

  test('should have @type set to Organization', () => {
    expect(organizationSchema['@type']).toBe('Organization');
  });

  test('should have the correct name', () => {
    expect(organizationSchema.name).toBe(BRAND_NAME);
  });

  test('should have a valid URL', () => {
    expect(organizationSchema.url).toBe(SITE_URL);
  });

  test('should have a logo', () => {
    expect(organizationSchema.logo).toBeDefined();
  });

  test('should have contact information', () => {
    expect(organizationSchema.contactPoint).toBeDefined();
  });

  test('should have sameAs social profiles', () => {
    expect(organizationSchema.sameAs).toBeDefined();
    expect(Array.isArray(organizationSchema.sameAs)).toBe(true);
  });
});

describe('SEO - Structured Data: Website Schema', () => {
  test('should have @context set to schema.org', () => {
    expect(websiteSchema['@context']).toBe('https://schema.org');
  });

  test('should have @type set to WebSite', () => {
    expect(websiteSchema['@type']).toBe('WebSite');
  });

  test('should have the correct name', () => {
    expect(websiteSchema.name).toBe(BRAND_NAME);
  });

  test('should have a valid URL', () => {
    expect(websiteSchema.url).toBe(SITE_URL);
  });

  test('should have a search action for sitelinks searchbox', () => {
    expect(websiteSchema.potentialAction).toBeDefined();
    expect(websiteSchema.potentialAction['@type']).toBe('SearchAction');
  });
});

describe('SEO - Structured Data: Breadcrumb Schema', () => {
  test('should return valid breadcrumb schema', () => {
    const breadcrumb = breadcrumbSchema('About Us', '/about-us');
    expect(breadcrumb['@context']).toBe('https://schema.org');
    expect(breadcrumb['@type']).toBe('BreadcrumbList');
  });

  test('should include Home as first breadcrumb item', () => {
    const breadcrumb = breadcrumbSchema('About Us', '/about-us');
    expect(breadcrumb.itemListElement[0].item).toBe(SITE_URL);
    expect(breadcrumb.itemListElement[0].name).toBe('Home');
    expect(breadcrumb.itemListElement[0].position).toBe(1);
  });

  test('should include current page as second breadcrumb item', () => {
    const breadcrumb = breadcrumbSchema('About Us', '/about-us');
    expect(breadcrumb.itemListElement[1].name).toBe('About Us');
    expect(breadcrumb.itemListElement[1].position).toBe(2);
  });
});
