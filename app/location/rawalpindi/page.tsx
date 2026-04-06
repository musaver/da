import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';
import { locationServiceSchema, breadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: "Web Design & Development Services in Rawalpindi | Dev Aspire",
  description:
    "Professional web design and development agency in Rawalpindi, Pakistan. Custom websites, e-commerce solutions, and digital marketing for local businesses.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/location/rawalpindi`,
    siteName: "Dev Aspire",
    title: "Web Design & Development Services in Rawalpindi",
    description:
      "Expert web design, development, and digital marketing services for Rawalpindi businesses. Serving retail, manufacturing, and service sectors.",
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "Dev Aspire - Web Design Agency in Rawalpindi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Web Design & Development Services in Rawalpindi",
    description:
      "Expert web design, development, and digital marketing services for Rawalpindi businesses.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/location/rawalpindi`,
  },
};

const schema = locationServiceSchema('Rawalpindi');
const breadcrumb = breadcrumbSchema('Rawalpindi', '/location/rawalpindi');

export default function RawalpindiLocation() {
  const services = [
    {
      title: 'Brand Strategy',
      desc: 'Strong brand identities for Rawalpindi businesses',
      link: '/services/brand-strategy',
      icon: 'solar:target-linear',
    },
    {
      title: 'Digital Marketing',
      desc: 'Local SEO and digital marketing for twin cities',
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
      desc: 'E-commerce stores for Rawalpindi retailers',
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
      name: 'Retail & Shopping',
      desc: 'E-commerce and retail websites for Rawalpindi&apos;s shopping districts',
      icon: 'solar:shop-2-linear',
    },
    {
      name: 'Manufacturing',
      desc: 'Business websites for industrial and manufacturing sector',
      icon: 'solar:widget-4-linear',
    },
    {
      name: 'Food & Restaurants',
      desc: 'Online ordering and restaurant websites',
      icon: 'solar:chef-hat-linear',
    },
    {
      name: 'Healthcare',
      desc: 'Medical websites and patient management systems',
      icon: 'solar:medical-kit-linear',
    },
    {
      name: 'Real Estate',
      desc: 'Property listing platforms for developers and agents',
      icon: 'solar:home-linear',
    },
    {
      name: 'Education',
      desc: 'School and coaching center websites',
      icon: 'solar:book-linear',
    },
  ];

  const faqs = [
    {
      question: 'Why work with a Rawalpindi-based web design agency?',
      answer:
        'A local agency understands Rawalpindi&apos;s business culture, target audience preferences, and market dynamics. We offer competitive pricing, easy in-person meetings, and faster turnaround times compared to international agencies. Plus, we&apos;re familiar with local competitors and can help you stand out in the twin cities market.',
    },
    {
      question: 'What is the cost of website development in Rawalpindi?',
      answer:
        'Prices vary based on requirements. A simple business website starts from PKR 40,000, professional corporate sites range from PKR 120,000-350,000, and e-commerce stores start from PKR 200,000. We provide transparent quotes after understanding your needs in a free consultation.',
    },
    {
      question: 'Do you serve both Rawalpindi and Islamabad?',
      answer:
        'Yes! We proudly serve both twin cities - Rawalpindi and Islamabad. Many of our clients operate in both cities, and we understand the unique characteristics of each market. We can help you create digital strategies that work for both locations.',
    },
    {
      question: 'Can you help my Rawalpindi business rank on Google?',
      answer:
        'Absolutely! We specialize in local SEO for Rawalpindi businesses. Our strategies include optimizing for location-based keywords like "best [service] in Rawalpindi", Google Business Profile setup, local citations, and content that attracts Rawalpindi customers. Most clients see improvements within 3-4 months.',
    },
    {
      question: 'What makes Rawalpindi different for digital marketing?',
      answer:
        'Rawalpindi has a strong commercial culture with bustling markets, manufacturing base, and diverse consumer demographics. Marketing needs to be practical, value-focused, and build trust. We create campaigns that resonate with Rawalpindi&apos;s business community and consumer preferences.',
    },
    {
      question: 'Do you provide website maintenance services?',
      answer:
        'Yes, we offer comprehensive maintenance packages starting from PKR 8,000/month. This includes regular updates, security monitoring, backups, bug fixes, and technical support. For Rawalpindi clients, we also offer on-site support visits if needed.',
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
                  <li className="breadcrumb-item active" aria-current="page">Rawalpindi</li>
                </ol>
              </nav>

              <h1 className="mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                Web Design & Development in <em className="font-instrument fw-normal">Rawalpindi</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="col-xl-9">
                  <p className="mb-0">
                    Professional web design, development, and digital marketing services for businesses in Rawalpindi.
                    Serving retailers, manufacturers, restaurants, and service providers across the twin cities.
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
                    Why Choose Dev Aspire in <em className="font-instrument">Rawalpindi?</em>
                  </h2>
                  <p className="text-center mb-0" data-aos="fade-up" data-aos-delay="100">
                    We understand Rawalpindi's vibrant business community and diverse market. From Saddar's commercial hub to
                    Bahria Town's modern businesses, we create digital solutions that help you compete and grow in the twin cities.
                  </p>
                </div>
              </div>

              <div className="row g-4">
                {[
                  {
                    title: 'Local Market Knowledge',
                    desc: 'Deep understanding of Rawalpindi&apos;s business districts, customer preferences, and competitive landscape.',
                    icon: 'solar:map-point-linear',
                  },
                  {
                    title: 'Affordable Pricing',
                    desc: 'Competitive rates designed for Rawalpindi businesses with flexible payment plans and budget-friendly packages.',
                    icon: 'solar:hand-money-linear',
                  },
                  {
                    title: 'Quick Turnaround',
                    desc: 'Fast project delivery with efficient processes, perfect for businesses that need to launch quickly.',
                    icon: 'solar:rocket-linear',
                  },
                  {
                    title: 'Face-to-Face Support',
                    desc: 'Easy in-person meetings in Rawalpindi for consultations, reviews, and ongoing collaboration.',
                    icon: 'solar:users-group-rounded-linear',
                  },
                  {
                    title: 'Proven Track Record',
                    desc: 'Successfully delivered projects for retail, manufacturing, restaurants, and service businesses in twin cities.',
                    icon: 'solar:medal-ribbons-star-linear',
                  },
                  {
                    title: 'Ongoing Maintenance',
                    desc: 'Reliable local support for updates, fixes, and improvements whenever you need assistance.',
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
                Our Services in <em className="font-instrument">Rawalpindi</em>
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
                Industries We Serve in <em className="font-instrument">Rawalpindi</em>
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

        {/* About Rawalpindi Digital Landscape */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="d-flex flex-column gap-5" data-aos="fade-up">
                  <h2 className="mb-0 text-center">
                    Rawalpindi's <em className="font-instrument">Business Scene</em>
                  </h2>
                  <p>
                    Rawalpindi is a thriving commercial hub with a rich business heritage. From the bustling markets of Saddar and
                    Raja Bazaar to modern commercial areas in Bahria Town and DHA, the city represents a diverse and dynamic business
                    landscape. The twin cities of Rawalpindi and Islamabad together form one of Pakistan's most important economic zones.
                  </p>
                  <p>
                    The city's business community includes traditional retailers, manufacturing units, modern shopping centers,
                    restaurants, healthcare facilities, and service providers. This diversity creates unique digital marketing
                    opportunities - businesses need to reach both traditional and modern consumers with different preferences and behaviors.
                  </p>
                  <p>
                    Rawalpindi's commercial culture values relationships, trust, and practical results. Your digital presence needs
                    to reflect professionalism while remaining accessible and relatable to local customers. Whether you're a family-owned
                    retail business or a modern startup, your website should build credibility and drive actual business results.
                  </p>
                  <p className="mb-0">
                    We help Rawalpindi businesses bridge the gap between traditional commerce and digital innovation. Our solutions
                    are practical, cost-effective, and designed to deliver measurable ROI for businesses of all sizes in the twin cities.
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
                      Ready to Grow Your <em className="font-instrument">Rawalpindi Business?</em>
                    </h2>
                    <p className="mb-0 text-white text-opacity-75">
                      Get a free consultation and discover how a professional website can help you reach more customers
                      and grow your business in the twin cities.
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
