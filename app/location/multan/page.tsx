import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';
import { locationServiceSchema, breadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: "Web Design & Development Services in Multan | Dev Aspire",
  description:
    "Professional web design and development agency in Multan, Pakistan. Custom websites, e-commerce solutions, and digital marketing for local businesses.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/location/multan`,
    siteName: "Dev Aspire",
    title: "Web Design & Development Services in Multan",
    description:
      "Expert web design, development, and digital marketing services for Multan businesses in agriculture, retail, and service sectors.",
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "Dev Aspire - Web Design Agency in Multan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Web Design & Development Services in Multan",
    description:
      "Expert web design, development, and digital marketing services for Multan businesses.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/location/multan`,
  },
};

const schema = locationServiceSchema('Multan');
const breadcrumb = breadcrumbSchema('Multan', '/location/multan');

export default function MultanLocation() {
  const services = [
    {
      title: 'Brand Strategy',
      desc: 'Build strong brand identities for Multan businesses',
      link: '/services/brand-strategy',
      icon: 'solar:target-linear',
    },
    {
      title: 'Digital Marketing',
      desc: 'Local SEO and digital marketing for South Punjab',
      link: '/services/digital-marketing',
      icon: 'solar:chart-2-linear',
    },
    {
      title: 'UI/UX Design',
      desc: 'User-friendly designs for local businesses',
      link: '/services/ui-ux-design',
      icon: 'solar:palette-linear',
    },
    {
      title: 'Shopify Development',
      desc: 'E-commerce stores for Multan retailers and traders',
      link: '/services/shopify-development',
      icon: 'solar:shop-linear',
    },
    {
      title: 'Web App Development',
      desc: 'Custom web solutions for growing businesses',
      link: '/services/web-app-development',
      icon: 'solar:code-linear',
    },
  ];

  const industries = [
    {
      name: 'Agriculture & Trading',
      desc: 'Platforms for agricultural products, traders, and exporters',
      icon: 'solar:leaf-linear',
    },
    {
      name: 'Retail & Shopping',
      desc: 'E-commerce websites for Multan&apos;s traditional and modern retail',
      icon: 'solar:shop-2-linear',
    },
    {
      name: 'Food & Restaurants',
      desc: 'Restaurant websites and online ordering systems',
      icon: 'solar:chef-hat-linear',
    },
    {
      name: 'Education',
      desc: 'School, college, and coaching institute websites',
      icon: 'solar:book-linear',
    },
    {
      name: 'Healthcare',
      desc: 'Medical websites and patient management systems',
      icon: 'solar:medical-kit-linear',
    },
    {
      name: 'Real Estate',
      desc: 'Property listing websites for developers and agents',
      icon: 'solar:home-linear',
    },
  ];

  const faqs = [
    {
      question: 'Why choose a web design agency in Multan?',
      answer:
        'A local agency understands Multan&apos;s business culture, target demographics, and regional preferences. We provide personalized service, competitive pricing, and easy face-to-face consultations. Plus, we&apos;re familiar with the South Punjab market and can help you reach customers effectively across the region.',
    },
    {
      question: 'What is the cost of website development in Multan?',
      answer:
        'Website costs vary based on features and complexity. A basic business website starts from PKR 35,000, professional corporate sites range from PKR 100,000-300,000, and e-commerce stores start from PKR 180,000. We offer transparent pricing and flexible payment plans for Multan businesses.',
    },
    {
      question: 'Can you help with e-commerce for agricultural products?',
      answer:
        'Yes! Multan is a major agricultural hub, and we have experience creating e-commerce platforms for agricultural traders, food processors, and exporters. Our solutions include product catalogs, inquiry systems, B2B features, and integration with logistics and payment systems.',
    },
    {
      question: 'Do you provide SEO services for Multan businesses?',
      answer:
        'Absolutely! We specialize in local SEO to help Multan businesses rank higher on Google. Our strategies include optimizing for location-based keywords like "services in Multan", Google Business Profile setup, local citations, and content targeting South Punjab customers.',
    },
    {
      question: 'What makes Multan businesses unique for digital marketing?',
      answer:
        'Multan has a rich cultural heritage and strong agricultural/trading economy. Digital marketing needs to balance traditional values with modern approaches, emphasize trust and relationships, and reach both local consumers and B2B buyers. We create campaigns that resonate with Multan&apos;s business community.',
    },
    {
      question: 'Do you provide ongoing website maintenance?',
      answer:
        'Yes, we offer maintenance packages starting from PKR 7,000/month including regular updates, security monitoring, backups, bug fixes, and technical support. For Multan clients, we provide training and ongoing assistance to keep your website running smoothly.',
    },
  ];

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="page-wrapper overflow-hidden">
        {/* Banner Section */}
        <section className="banner-section bg-gradient-shaph position-relative pt-14 pt-md-15 pb-11 pb-lg-12 pb-xl-13">
          <div className="container position-relative z-3">
            <div className="d-flex flex-column gap-7">
              {/* Breadcrumb */}
              <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="50">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="breadcrumb-item"><Link href="/locations">Locations</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Multan</li>
                </ol>
              </nav>

              <h1 className="mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                Web Design & Development in <em className="font-instrument fw-normal">Multan</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="col-xl-9">
                  <p className="mb-0">
                    Professional web design, development, and digital marketing services for businesses in Multan.
                    Serving agricultural traders, retailers, educators, and service providers across South Punjab.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 justify-content-center flex-wrap" data-aos="fade-up" data-aos-delay="300">
                <Link href="/contact" className="btn btn-dark">
                  <span className="btn-text">Get Free Quote</span>
                  <iconify-icon icon="solar:arrow-right-up-linear" className="btn-icon bg-white text-dark round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                </Link>
                <Link href="/portfolio" className="btn btn-outline-dark">
                  <span className="btn-text">View Our Work</span>
                  <iconify-icon icon="solar:gallery-linear" className="btn-icon round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <h2 className="mb-4 text-center" data-aos="fade-up">
                    Why Choose Dev Aspire in <em className="font-instrument">Multan?</em>
                  </h2>
                  <p className="text-center mb-0" data-aos="fade-up" data-aos-delay="100">
                    Multan's rich heritage and growing economy create unique opportunities for businesses. We help local companies
                    establish professional online presence that builds trust, reaches customers, and drives growth across South Punjab.
                  </p>
                </div>
              </div>

              <div className="row g-4">
                {[
                  {
                    title: 'Regional Expertise',
                    desc: 'Deep understanding of Multan and South Punjab&apos;s business landscape, culture, and consumer behavior.',
                    icon: 'solar:map-point-linear',
                  },
                  {
                    title: 'Agricultural Focus',
                    desc: 'Experience creating solutions for agricultural traders, food processing, and export businesses.',
                    icon: 'solar:leaf-linear',
                  },
                  {
                    title: 'Affordable Pricing',
                    desc: 'Competitive rates designed for Multan businesses with flexible payment options.',
                    icon: 'solar:hand-money-linear',
                  },
                  {
                    title: 'Local Support',
                    desc: 'Available for in-person meetings and consultations with businesses in Multan.',
                    icon: 'solar:users-group-rounded-linear',
                  },
                  {
                    title: 'Quality Results',
                    desc: 'Professional websites that reflect well on your business and build customer trust.',
                    icon: 'solar:medal-ribbons-star-linear',
                  },
                  {
                    title: 'Ongoing Partnership',
                    desc: 'Reliable support for updates, maintenance, and growing your online presence over time.',
                    icon: 'solar:handshake-linear',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={idx * 100}>
                    <div className="card h-100">
                      <div className="card-body d-flex flex-column gap-3">
                        <iconify-icon icon={item.icon} className="fs-1 text-primary"></iconify-icon>
                        <h4 className="mb-0">{item.title}</h4>
                        <p className="mb-0 text-muted">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Our Services in <em className="font-instrument">Multan</em>
              </h2>
              <div className="row g-4 g-lg-5">
                {services.map((service, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={idx * 100}>
                    <Link href={service.link} className="text-decoration-none">
                      <div className="card h-100 border-0 shadow-sm hover-lift transition-all bg-white">
                        <div className="card-body d-flex flex-column gap-4 p-4 p-lg-5">
                          <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 text-primary" style={{ width: '56px', height: '56px' }}>
                            <iconify-icon icon={service.icon} style={{ fontSize: '28px' }}></iconify-icon>
                          </div>
                          <div className="d-flex flex-column gap-2">
                            <h4 className="mb-0 fw-semibold text-dark">{service.title}</h4>
                            <p className="mb-0 text-muted fs-6">{service.desc}</p>
                          </div>
                          <div className="mt-auto">
                            <span className="text-primary fw-medium d-inline-flex align-items-center gap-2">
                              Learn More
                              <iconify-icon icon="solar:arrow-right-linear" className="fs-6"></iconify-icon>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Industries We Serve in <em className="font-instrument">Multan</em>
              </h2>
              <div className="row g-4 g-lg-5">
                {industries.map((industry, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={idx * 100}>
                    <div className="card h-100 border-0 shadow-sm hover-lift transition-all">
                      <div className="card-body d-flex flex-column gap-4 p-4 p-lg-5">
                        <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 text-primary" style={{ width: '56px', height: '56px' }}>
                          <iconify-icon icon={industry.icon} style={{ fontSize: '28px' }}></iconify-icon>
                        </div>
                        <div className="d-flex flex-column gap-2">
                          <h5 className="mb-0 fw-semibold">{industry.name}</h5>
                          <p className="mb-0 text-muted fs-6">{industry.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Multan Digital Landscape */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="d-flex flex-column gap-5" data-aos="fade-up">
                  <h2 className="mb-0 text-center">
                    Multan's <em className="font-instrument">Growing Economy</em>
                  </h2>
                  <p>
                    Multan, the City of Saints, is one of Pakistan's oldest cities with a rich cultural heritage. As South Punjab's
                    economic hub, the city plays a vital role in agriculture, trading, and commerce. Multan's fertile lands produce
                    cotton, wheat, sugarcane, and mangoes - making it a major center for agricultural trade and food processing.
                  </p>
                  <p>
                    The business environment in Multan balances tradition with modern growth. From agricultural traders and food processors
                    to modern retail chains and educational institutions, businesses here serve both local markets and national supply chains.
                    The city's strategic location on major trade routes makes it a logistics and distribution center for South Punjab.
                  </p>
                  <p>
                    Digital adoption is growing steadily in Multan. Consumers increasingly search online before making purchases, and
                    businesses need professional websites to build credibility. For B2B companies, an online presence is crucial for
                    reaching buyers from other cities and establishing trust with new business partners.
                  </p>
                  <p className="mb-0">
                    We help Multan businesses navigate digital transformation while respecting local business culture. Our websites
                    combine professional presentation with practical functionality - helping you reach more customers, build trust,
                    and grow your business in Multan and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Frequently Asked <em className="font-instrument">Questions</em>
              </h2>
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="accordion" id="faqAccordion" data-aos="fade-up">
                    {faqs.map((faq, idx) => (
                      <div key={idx} className="accordion-item">
                        <h3 className="accordion-header">
                          <button
                            className={`accordion-button ${idx !== 0 ? 'collapsed' : ''}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#faq${idx}`}
                            aria-expanded={idx === 0 ? 'true' : 'false'}
                          >
                            {faq.question}
                          </button>
                        </h3>
                        <div
                          id={`faq${idx}`}
                          className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`}
                          data-bs-parent="#faqAccordion"
                        >
                          <div className="accordion-body">{faq.answer}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 py-lg-12 py-xl-13 bg-dark">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="d-flex flex-column gap-7" data-aos="fade-up">
                  <div>
                    <h2 className="mb-4 text-white">
                      Ready to Grow Your <em className="font-instrument">Multan Business?</em>
                    </h2>
                    <p className="mb-0 text-white text-opacity-75">
                      Get a free consultation and discover how a professional website can help you reach more customers
                      and expand your business across South Punjab.
                    </p>
                  </div>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Link href="/contact" className="btn btn-white">
                      <span className="btn-text">Get Free Consultation</span>
                      <iconify-icon icon="solar:arrow-right-up-linear" className="btn-icon bg-dark text-white round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                    </Link>
                    <Link href="/services" className="btn btn-outline-white">
                      <span className="btn-text">View All Services</span>
                      <iconify-icon icon="solar:widget-linear" className="btn-icon round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <ScrollToTop />
    </>
  );
}
