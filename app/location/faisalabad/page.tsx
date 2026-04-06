import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';
import { locationServiceSchema, breadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: "Web Design & Development Services in Faisalabad | Dev Aspire",
  description:
    "Leading web design and development agency in Faisalabad, Pakistan. Custom websites, e-commerce solutions, and digital marketing for textile and manufacturing businesses.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/location/faisalabad`,
    siteName: "Dev Aspire",
    title: "Web Design & Development Services in Faisalabad",
    description:
      "Professional web design, development, and digital marketing for Faisalabad's textile, manufacturing, and business sectors.",
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "Dev Aspire - Web Design Agency in Faisalabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Web Design & Development Services in Faisalabad",
    description:
      "Professional web design, development, and digital marketing for Faisalabad businesses.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/location/faisalabad`,
  },
};

const schema = locationServiceSchema('Faisalabad');
const breadcrumb = breadcrumbSchema('Faisalabad', '/location/faisalabad');

export default function FaisalabadLocation() {
  const services = [
    {
      title: 'Brand Strategy',
      desc: 'Strong brand identities for textile and manufacturing businesses',
      link: '/services/brand-strategy',
      icon: 'solar:target-linear',
    },
    {
      title: 'Digital Marketing',
      desc: 'SEO and digital marketing for Faisalabad businesses',
      link: '/services/digital-marketing',
      icon: 'solar:chart-2-linear',
    },
    {
      title: 'UI/UX Design',
      desc: 'Professional designs for industrial and retail websites',
      link: '/services/ui-ux-design',
      icon: 'solar:palette-linear',
    },
    {
      title: 'Shopify Development',
      desc: 'E-commerce stores for textile exporters and retailers',
      link: '/services/shopify-development',
      icon: 'solar:shop-linear',
    },
    {
      title: 'Web App Development',
      desc: 'Custom solutions for manufacturing and B2B businesses',
      link: '/services/web-app-development',
      icon: 'solar:code-linear',
    },
  ];

  const industries = [
    {
      name: 'Textile & Garments',
      desc: 'B2B websites for manufacturers, exporters, and retailers',
      icon: 'solar:t-shirt-linear',
    },
    {
      name: 'Manufacturing',
      desc: 'Industrial websites showcasing capabilities and products',
      icon: 'solar:widget-4-linear',
    },
    {
      name: 'Agriculture',
      desc: 'Agricultural trading platforms and supply chain solutions',
      icon: 'solar:leaf-linear',
    },
    {
      name: 'Retail & Shopping',
      desc: 'E-commerce and retail websites for local markets',
      icon: 'solar:shop-2-linear',
    },
    {
      name: 'Food & Restaurants',
      desc: 'Restaurant websites and online ordering systems',
      icon: 'solar:chef-hat-linear',
    },
    {
      name: 'Education',
      desc: 'School and coaching institute websites',
      icon: 'solar:book-linear',
    },
  ];

  const faqs = [
    {
      question: 'Why choose Dev Aspire for web design in Faisalabad?',
      answer:
        'We understand Faisalabad\'s industrial and commercial landscape, especially the textile and manufacturing sectors. We create professional websites that help local businesses compete nationally and internationally. Our team delivers quality work at competitive rates with ongoing support.',
    },
    {
      question: 'How much does a website cost in Faisalabad?',
      answer:
        'Website costs depend on complexity and features. Basic business websites start from PKR 35,000, professional corporate sites range from PKR 100,000-300,000, and B2B e-commerce platforms start from PKR 250,000. We offer flexible payment plans for Faisalabad businesses.',
    },
    {
      question: 'Can you create B2B websites for textile exporters?',
      answer:
        'Yes! We specialize in B2B websites for Faisalabad\'s textile and manufacturing sector. Our solutions include product catalogs, inquiry forms, sample request systems, and integration with international payment gateways. We understand the needs of exporters and buyers.',
    },
    {
      question: 'Do you help with SEO for Faisalabad businesses?',
      answer:
        'Absolutely! We optimize websites for both local searches (e.g., "textile manufacturers Faisalabad") and national/international searches for export businesses. Our SEO strategies include technical optimization, content creation, and link building to improve your Google rankings.',
    },
    {
      question: 'What makes Faisalabad businesses different online?',
      answer:
        'Faisalabad has a strong manufacturing and export focus. Websites need to build international credibility, showcase industrial capabilities, and facilitate B2B inquiries. We create professional sites that help you compete with international suppliers while maintaining cost-effectiveness.',
    },
    {
      question: 'Do you provide support after website launch?',
      answer:
        'Yes, we offer maintenance packages starting from PKR 7,000/month including updates, security monitoring, backups, and technical support. For Faisalabad clients, we also provide training to help your team manage content updates independently.',
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
                  <li className="breadcrumb-item active" aria-current="page">Faisalabad</li>
                </ol>
              </nav>

              <h1 className="mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                Web Design & Development in <em className="font-instrument fw-normal">Faisalabad</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="col-xl-9">
                  <p className="mb-0">
                    Professional web design, development, and digital marketing services for Faisalabad businesses.
                    Serving textile manufacturers, exporters, retailers, and industrial businesses across the Manchester of Pakistan.
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
                    Why Choose Dev Aspire in <em className="font-instrument">Faisalabad?</em>
                  </h2>
                  <p className="text-center mb-0" data-aos="fade-up" data-aos-delay="100">
                    As Faisalabad's textile and manufacturing hub drives Pakistan's economy, we help local businesses establish
                    strong digital presence. From textile exporters to local retailers, we create websites that build credibility and drive growth.
                  </p>
                </div>
              </div>

              <div className="row g-4">
                {[
                  {
                    title: 'Industry Expertise',
                    desc: 'Deep understanding of textile, manufacturing, and B2B business requirements for online presence.',
                    icon: 'solar:diploma-verified-linear',
                  },
                  {
                    title: 'Export-Ready Websites',
                    desc: 'Create professional B2B websites that help you compete in international markets.',
                    icon: 'solar:planet-3-linear',
                  },
                  {
                    title: 'Cost-Effective Solutions',
                    desc: 'Competitive pricing with flexible payment options designed for Faisalabad businesses.',
                    icon: 'solar:hand-money-linear',
                  },
                  {
                    title: 'B2B Focus',
                    desc: 'Specialized in business-to-business platforms with inquiry systems and product catalogs.',
                    icon: 'solar:case-round-linear',
                  },
                  {
                    title: 'Local Support',
                    desc: 'Available for in-person meetings and consultations with businesses in Faisalabad.',
                    icon: 'solar:users-group-rounded-linear',
                  },
                  {
                    title: 'Proven Results',
                    desc: 'Track record of helping industrial and commercial businesses succeed online.',
                    icon: 'solar:graph-up-linear',
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
                Our Services in <em className="font-instrument">Faisalabad</em>
              </h2>
              <div className="row g-4">
                {services.map((service, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={idx * 100}>
                    <Link href={service.link} className="text-decoration-none">
                      <div className="card h-100 hover-lift">
                        <div className="card-body d-flex flex-column gap-3">
                          <iconify-icon icon={service.icon} className="fs-1 text-primary"></iconify-icon>
                          <h4 className="mb-0">{service.title}</h4>
                          <p className="mb-0 text-muted">{service.desc}</p>
                          <span className="text-primary mt-auto">Learn More →</span>
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
                Industries We Serve in <em className="font-instrument">Faisalabad</em>
              </h2>
              <div className="row g-4">
                {industries.map((industry, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={idx * 100}>
                    <div className="card h-100">
                      <div className="card-body d-flex flex-column gap-3">
                        <iconify-icon icon={industry.icon} className="fs-1 text-primary"></iconify-icon>
                        <h5 className="mb-0">{industry.name}</h5>
                        <p className="mb-0 text-muted">{industry.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Faisalabad Digital Landscape */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="d-flex flex-column gap-5" data-aos="fade-up">
                  <h2 className="mb-0 text-center">
                    Faisalabad's <em className="font-instrument">Industrial Hub</em>
                  </h2>
                  <p>
                    Known as the "Manchester of Pakistan," Faisalabad is the country's third-largest city and a major industrial center.
                    The city's textile industry alone contributes significantly to Pakistan's exports, with hundreds of manufacturing units,
                    textile mills, and processing facilities operating across the region. This industrial strength makes Faisalabad crucial
                    to Pakistan's economy.
                  </p>
                  <p>
                    Beyond textiles, Faisalabad has a growing presence in agriculture, food processing, chemicals, and consumer goods.
                    The business environment is practical, result-oriented, and focused on trade and export. Companies here compete not just
                    locally but in international markets, requiring professional digital presence to build credibility with global buyers.
                  </p>
                  <p>
                    For B2B businesses, a website is often the first point of contact with international buyers. It needs to showcase
                    manufacturing capabilities, product quality, certifications, and reliability. For local businesses serving Faisalabad
                    consumers, websites must build trust, highlight competitive advantages, and make it easy for customers to contact you.
                  </p>
                  <p className="mb-0">
                    We help Faisalabad businesses bridge traditional manufacturing excellence with modern digital marketing. Our websites
                    combine professional design with practical functionality - helping you reach buyers, generate inquiries, and grow your
                    business in both local and international markets.
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
                      Ready to Expand Your <em className="font-instrument">Faisalabad Business?</em>
                    </h2>
                    <p className="mb-0 text-white text-opacity-75">
                      Get a free consultation and discover how a professional website can help you reach more buyers,
                      expand into new markets, and grow your business.
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
