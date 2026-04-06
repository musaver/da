import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';
import { locationServiceSchema, breadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: "Web Design & Development Services in Peshawar | Dev Aspire",
  description:
    "Professional web design and development agency in Peshawar, Pakistan. Custom websites, e-commerce solutions, and digital marketing for KPK businesses.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/location/peshawar`,
    siteName: "Dev Aspire",
    title: "Web Design & Development Services in Peshawar",
    description:
      "Expert web design, development, and digital marketing services for Peshawar businesses in trade, retail, and service sectors.",
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "Dev Aspire - Web Design Agency in Peshawar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Web Design & Development Services in Peshawar",
    description:
      "Expert web design, development, and digital marketing services for Peshawar businesses.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/location/peshawar`,
  },
};

const schema = locationServiceSchema('Peshawar');
const breadcrumb = breadcrumbSchema('Peshawar', '/location/peshawar');

export default function PeshawarLocation() {
  const services = [
    {
      title: 'Brand Strategy',
      desc: 'Strong brand identities for Peshawar businesses',
      link: '/services/brand-strategy',
      icon: 'solar:target-linear',
    },
    {
      title: 'Digital Marketing',
      desc: 'Local SEO and digital marketing for KPK',
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
      desc: 'E-commerce stores for Peshawar retailers',
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
      name: 'Trade & Export',
      desc: 'Trading platforms for import/export and cross-border business',
      icon: 'solar:box-linear',
    },
    {
      name: 'Retail & Shopping',
      desc: 'E-commerce websites for traditional and modern retail',
      icon: 'solar:shop-2-linear',
    },
    {
      name: 'Food & Restaurants',
      desc: 'Restaurant websites and online ordering systems',
      icon: 'solar:chef-hat-linear',
    },
    {
      name: 'Education',
      desc: 'School and university websites for KPK institutions',
      icon: 'solar:book-linear',
    },
    {
      name: 'Healthcare',
      desc: 'Medical websites and patient management systems',
      icon: 'solar:medical-kit-linear',
    },
    {
      name: 'Professional Services',
      desc: 'Websites for consultancies, agencies, and service providers',
      icon: 'solar:case-minimalistic-linear',
    },
  ];

  const faqs = [
    {
      question: 'Why choose Dev Aspire for web design in Peshawar?',
      answer:
        'We understand Peshawar&apos;s unique business environment and Khyber Pakhtunkhwa&apos;s market dynamics. Our team delivers professional websites at competitive rates with ongoing support. We combine modern design standards with cultural sensitivity and local market knowledge to create websites that resonate with your audience.',
    },
    {
      question: 'How much does website development cost in Peshawar?',
      answer:
        'Costs depend on your requirements. Basic business websites start from PKR 35,000, professional corporate sites range from PKR 100,000-300,000, and e-commerce platforms start from PKR 180,000. We offer transparent pricing and flexible payment plans suitable for Peshawar businesses.',
    },
    {
      question: 'Can you create websites for trading businesses?',
      answer:
        'Yes! Peshawar has a strong trading heritage, and we have experience creating websites for import/export businesses, wholesale traders, and cross-border commerce. Our solutions include product catalogs, inquiry systems, multi-currency support, and B2B features tailored for trading companies.',
    },
    {
      question: 'Do you provide SEO for Peshawar businesses?',
      answer:
        'Absolutely! We specialize in local SEO to help Peshawar businesses rank higher in search results. Our strategies include optimizing for location-based keywords like "services in Peshawar", Google Business Profile setup, local citations, and content that attracts KPK customers.',
    },
    {
      question: 'What makes Peshawar businesses unique for digital marketing?',
      answer:
        'Peshawar has a strong entrepreneurial culture, trading heritage, and close-knit business community. Digital marketing needs to build trust through relationships, emphasize quality and reliability, and reach both local consumers and regional buyers. We create campaigns that respect local business culture while leveraging modern marketing techniques.',
    },
    {
      question: 'Do you provide ongoing website support?',
      answer:
        'Yes, we offer maintenance packages starting from PKR 7,000/month including updates, security monitoring, backups, bug fixes, and technical support. We provide training for your Peshawar team to manage content updates and offer responsive support whenever you need assistance.',
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
                  <li className="breadcrumb-item active" aria-current="page">Peshawar</li>
                </ol>
              </nav>

              <h1 className="mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                Web Design & Development in <em className="font-instrument fw-normal">Peshawar</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="col-xl-9">
                  <p className="mb-0">
                    Professional web design, development, and digital marketing services for businesses in Peshawar.
                    Serving traders, retailers, educators, and service providers across Khyber Pakhtunkhwa.
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
                    Why Choose Dev Aspire in <em className="font-instrument">Peshawar?</em>
                  </h2>
                  <p className="text-center mb-0" data-aos="fade-up" data-aos-delay="100">
                    Peshawar's rich trading heritage and entrepreneurial spirit create unique business opportunities. We help local
                    companies establish professional online presence that builds trust, reaches customers, and drives growth across KPK.
                  </p>
                </div>
              </div>

              <div className="row g-4">
                {[
                  {
                    title: 'Regional Knowledge',
                    desc: 'Deep understanding of Peshawar and KPK&apos;s business culture, trading practices, and market dynamics.',
                    icon: 'solar:map-point-linear',
                  },
                  {
                    title: 'Trading Expertise',
                    desc: 'Experience with import/export businesses, wholesale trading, and cross-border commerce websites.',
                    icon: 'solar:box-linear',
                  },
                  {
                    title: 'Cost-Effective',
                    desc: 'Competitive pricing with flexible payment options designed for Peshawar businesses.',
                    icon: 'solar:hand-money-linear',
                  },
                  {
                    title: 'Cultural Sensitivity',
                    desc: 'Designs and content that respect local values while maintaining professional standards.',
                    icon: 'solar:shield-check-linear',
                  },
                  {
                    title: 'Trust Building',
                    desc: 'Websites that establish credibility and build trust with your target audience.',
                    icon: 'solar:handshake-linear',
                  },
                  {
                    title: 'Reliable Support',
                    desc: 'Ongoing maintenance and support to keep your website running smoothly.',
                    icon: 'solar:settings-linear',
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
                Our Services in <em className="font-instrument">Peshawar</em>
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
                Industries We Serve in <em className="font-instrument">Peshawar</em>
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

        {/* About Peshawar Digital Landscape */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="d-flex flex-column gap-5" data-aos="fade-up">
                  <h2 className="mb-0 text-center">
                    Peshawar's <em className="font-instrument">Business Heritage</em>
                  </h2>
                  <p>
                    Peshawar, the capital of Khyber Pakhtunkhwa, sits at a historic crossroads of trade routes connecting South Asia
                    with Central Asia and beyond. For centuries, the city has been a center of commerce, with a strong entrepreneurial
                    culture and thriving business community. Today, Peshawar continues this heritage with modern trade, retail, services,
                    and growing technology adoption.
                  </p>
                  <p>
                    The business environment in Peshawar is characterized by strong relationships, trust-based transactions, and
                    word-of-mouth reputation. From traditional bazaars like Qissa Khwani to modern commercial areas, businesses here
                    value personal connections and long-term relationships. Digital presence needs to complement these values by building
                    credibility and making it easier for trusted partners to find and contact you.
                  </p>
                  <p>
                    As internet and smartphone adoption grows across KPK, Peshawar businesses increasingly recognize the importance of
                    professional online presence. Whether you're a trading company reaching national buyers, a retailer serving local
                    customers, or a service provider building your reputation, a well-designed website establishes credibility and
                    professional standing.
                  </p>
                  <p className="mb-0">
                    We help Peshawar businesses leverage digital tools while respecting local business culture. Our websites balance
                    professional presentation with cultural appropriateness - helping you build trust, reach more customers, and grow
                    your business in Peshawar and throughout Khyber Pakhtunkhwa.
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
                      Ready to Grow Your <em className="font-instrument">Peshawar Business?</em>
                    </h2>
                    <p className="mb-0 text-white text-opacity-75">
                      Get a free consultation and discover how a professional website can help you build credibility,
                      reach more customers, and expand your business across KPK.
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
