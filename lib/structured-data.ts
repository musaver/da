import { SITE_URL } from '@/lib/site';

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

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does Dev Aspire Agency offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dev Aspire provides a complete range of digital solutions including web design, web development, e-commerce website creation, Shopify development, UI/UX design, digital marketing, SEO optimization, and brand strategy services in Pakistan.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a typical project take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Project timelines depend on the scope and complexity of your website or service requirements. A standard website usually takes 2-4 weeks, while larger projects such as e-commerce stores or SEO campaigns may take longer.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is pricing structured at Dev Aspire Agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dev Aspire offers flexible and transparent pricing packages tailored to your business needs. There are no hidden charges - you can choose from ready-made plans or request a customized quote depending on your project size, design complexity, and features required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer ongoing support after project completion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, absolutely. Dev Aspire believes in long-term partnerships. We provide post-launch support, including website maintenance, SEO updates, and technical assistance to ensure your site runs smoothly even after delivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes Dev Aspire different from other agencies in Pakistan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dev Aspire stands out because of its dedicated team based in Islamabad, personalized approach, and focus on quality. With years of experience and global clients, we ensure every project is built using modern tools like React, Next.js, and Node.js to help your business grow online.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Dev Aspire located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dev Aspire is based in G9 Markaz, Islamabad, Pakistan. We serve clients across Pakistan including Karachi, Lahore, Islamabad, and Rawalpindi, as well as international clients worldwide.',
      },
    },
  ],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BRAND_NAME,
  image: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
  url: SITE_URL,
  telephone: '+923006825223',
  email: 'hello@devaspire.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'G9 Markaz',
    addressLocality: 'Islamabad',
    addressCountry: 'PK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.7215,
    longitude: 73.0433,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  priceRange: '$$',
  areaServed: [
    { '@type': 'Country', name: 'Pakistan' },
    { '@type': 'City', name: 'Islamabad' },
    { '@type': 'City', name: 'Karachi' },
    { '@type': 'City', name: 'Lahore' },
    { '@type': 'City', name: 'Rawalpindi' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Design & Development Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shopify Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Marketing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Strategy' } },
    ],
  },
};

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

export function blogListingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${BRAND_NAME} Blog`,
    description: 'Expert insights on web design, development, and digital marketing for businesses in Pakistan.',
    url: `${SITE_URL}/blog`,
    publisher: {
      '@type': 'Organization',
      name: BRAND_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
      },
    },
  };
}

export function articleSchema(
  title: string,
  description: string,
  slug: string,
  publishedDate: string,
  modifiedDate: string,
  authorName: string,
  imageUrl?: string,
  keywords?: string[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: imageUrl || `${SITE_URL}/assets/images/logos/logo-dark.svg`,
    datePublished: publishedDate,
    dateModified: modifiedDate,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: BRAND_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
      },
    },
    keywords: keywords?.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${slug}`,
    },
  };
}

export function locationServiceSchema(cityName: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Web Design and Development',
    provider: {
      '@type': 'Organization',
      name: BRAND_NAME,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'City',
      name: cityName,
      addressCountry: 'PK',
    },
  };
}

export function caseStudySchema(
  title: string,
  description: string,
  client: string,
  industry: string,
  url?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: title,
    description: description,
    author: {
      '@type': 'Organization',
      name: BRAND_NAME,
    },
    about: {
      '@type': 'Thing',
      name: industry,
    },
    url: url || SITE_URL,
  };
}
