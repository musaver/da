const SITE_URL = 'https://devaspire.co';
const BRAND_NAME = 'Dev Aspire';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BRAND_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
  description:
    'Dev Aspire is a leading web design and development agency helping startups and businesses build bold brands with thoughtful design.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    url: `${SITE_URL}/contact`,
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.linkedin.com/company/devaspire',
    'https://twitter.com/devaspire',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BRAND_NAME,
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/?s={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export function breadcrumbSchema(pageName: string, pagePath: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: pageName,
        item: `${SITE_URL}${pagePath}`,
      },
    ],
  };
}

export function serviceSchema(name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: BRAND_NAME,
      url: SITE_URL,
    },
  };
}
