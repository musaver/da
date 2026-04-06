/**
 * Structured Data (JSON-LD) Tests
 *
 * Verifies that structured data is properly implemented for rich search results
 */

import { organizationSchema, websiteSchema, breadcrumbSchema, faqSchema, localBusinessSchema } from '@/lib/structured-data';

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

describe('SEO - Structured Data: FAQ Schema', () => {
  test('should have @context set to schema.org', () => {
    expect(faqSchema['@context']).toBe('https://schema.org');
  });

  test('should have @type set to FAQPage', () => {
    expect(faqSchema['@type']).toBe('FAQPage');
  });

  test('should have at least 5 FAQ items', () => {
    expect(faqSchema.mainEntity.length).toBeGreaterThanOrEqual(5);
  });

  test('each FAQ item should have Question type with name and acceptedAnswer', () => {
    faqSchema.mainEntity.forEach((item: any) => {
      expect(item['@type']).toBe('Question');
      expect(item.name).toBeDefined();
      expect(item.name.length).toBeGreaterThan(10);
      expect(item.acceptedAnswer).toBeDefined();
      expect(item.acceptedAnswer['@type']).toBe('Answer');
      expect(item.acceptedAnswer.text).toBeDefined();
      expect(item.acceptedAnswer.text.length).toBeGreaterThan(20);
    });
  });

  test('FAQ should mention Pakistan-relevant content', () => {
    const allText = faqSchema.mainEntity.map((item: any) => item.acceptedAnswer.text).join(' ').toLowerCase();
    expect(allText).toContain('pakistan');
  });
});

describe('SEO - Structured Data: LocalBusiness Schema', () => {
  test('should have @context set to schema.org', () => {
    expect(localBusinessSchema['@context']).toBe('https://schema.org');
  });

  test('should have @type set to LocalBusiness', () => {
    expect(localBusinessSchema['@type']).toBe('LocalBusiness');
  });

  test('should have correct business name', () => {
    expect(localBusinessSchema.name).toBe(BRAND_NAME);
  });

  test('should have address in Pakistan', () => {
    expect(localBusinessSchema.address).toBeDefined();
    expect(localBusinessSchema.address.addressCountry).toBe('PK');
    expect(localBusinessSchema.address.addressLocality).toBe('Islamabad');
  });

  test('should have geo coordinates', () => {
    expect(localBusinessSchema.geo).toBeDefined();
    expect(localBusinessSchema.geo.latitude).toBeDefined();
    expect(localBusinessSchema.geo.longitude).toBeDefined();
  });

  test('should have telephone and email', () => {
    expect(localBusinessSchema.telephone).toBeDefined();
    expect(localBusinessSchema.email).toBeDefined();
  });

  test('should have area served including Pakistani cities', () => {
    expect(localBusinessSchema.areaServed).toBeDefined();
    const areaNames = localBusinessSchema.areaServed.map((a: any) => a.name);
    expect(areaNames).toContain('Pakistan');
    expect(areaNames).toContain('Islamabad');
  });

  test('should have service catalog', () => {
    expect(localBusinessSchema.hasOfferCatalog).toBeDefined();
    expect(localBusinessSchema.hasOfferCatalog.itemListElement.length).toBeGreaterThanOrEqual(5);
  });
});
