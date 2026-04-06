import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';
import { locationServiceSchema, breadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: "Web Design & Development Services in Quetta | Dev Aspire",
  description:
    "Professional web design and development agency in Quetta, Balochistan. Custom websites, e-commerce solutions, and digital marketing for local businesses.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/location/quetta`,
    siteName: "Dev Aspire",
    title: "Web Design & Development Services in Quetta",
    description:
      "Expert web design, development, and digital marketing services for Quetta businesses in energy, mining, trade, and service sectors.",
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "Dev Aspire - Web Design Agency in Quetta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Web Design & Development Services in Quetta",
    description:
      "Expert web design, development, and digital marketing services for Quetta businesses.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/location/quetta`,
  },
};

const schema = locationServiceSchema('Quetta');
const breadcrumb = breadcrumbSchema('Quetta', '/location/quetta');

export default function QuettaLocation() {
  const services = [
    {
      title: 'Brand Strategy',
      desc: 'Build strong brand identities for Quetta businesses',
      link: '/services/brand-strategy',
      icon: 'solar:target-linear',
    },
    {
      title: 'Digital Marketing',
      desc: 'Local SEO and digital marketing for Balochistan',
      link: '/services/digital-marketing',
      icon: 'solar:chart-2-linear',
    },
    {
      title: 'UI/UX Design',
      desc: 'Professional designs for local businesses',
      link: '/services/ui-ux-design',
      icon: 'solar:palette-linear',
    },
    {
      title: 'Shopify Development',
      desc: 'E-commerce stores for Quetta retailers',
      link: '/services/shopify-development',
      icon: 'solar:shop-linear',
    },
    {
      title: 'Web App Development',
      desc: 'Custom solutions for growing businesses',
      link: '/services/web-app-development',
      icon: 'solar:code-linear',
    },
  ];

  const industries = [
    {
      name: 'Energy & Mining',
      desc: 'Corporate websites for energy and mineral resource companies',
      icon: 'solar:bolt-linear',
    },
    {
      name: 'Trade & Logistics',
      desc: 'Trading platforms for cross-border business and logistics',
      icon: 'solar:box-linear',
    },
    {
      name: 'Retail & Shopping',
      desc: 'E-commerce and retail websites for local markets',
      icon: 'solar:shop-2-linear',
    },
    {
      name: 'Education',
      desc: 'University and school websites for Balochistan institutions',
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
      question: 'Why choose Dev Aspire for web design in Quetta?',
      answer:
        'We understand Quetta and Balochistan&apos;s unique business landscape, from the energy sector to traditional trade. Our team creates professional websites that build credibility and help you compete regionally and nationally. We offer competitive pricing, quality work, and ongoing support tailored for Quetta businesses.',
    },
    {
      question: 'How much does website development cost in Quetta?',
      answer:
        'Pricing varies based on your needs. Basic business websites start from PKR 35,000, professional corporate sites range from PKR 100,000-300,000, and custom web applications start from PKR 250,000. We provide transparent quotes after understanding your requirements in a free consultation.',
    },
    {
      question: 'Can you create websites for energy and mining companies?',
      answer:
        'Yes! We have experience creating corporate websites for industrial sectors including energy, mining, and natural resources. Our solutions showcase company capabilities, projects, safety standards, and corporate information to build credibility with stakeholders and potential partners.',
    },
    {
      question: 'Do you provide SEO for Quetta businesses?',
      answer:
        'Absolutely! We optimize websites for both local searches (e.g., "services in Quetta") and regional/national visibility. Our SEO strategies include technical optimization, content creation, and building your online presence to help you reach customers across Balochistan and beyond.',
    },
    {
      question: 'What makes Quetta businesses unique for digital marketing?',
      answer:
        'Quetta has a distinct business environment with strong focus on energy, mining, trading, and cross-border commerce. Digital marketing needs to establish credibility, reach decision-makers in corporate and government sectors, and build professional reputation. We create campaigns that position your business for growth.',
    },
    {
      question: 'Do you provide ongoing website maintenance?',
      answer:
        'Yes, we offer maintenance packages starting from PKR 7,000/month including updates, security monitoring, backups, bug fixes, and technical support. We ensure your website stays secure, up-to-date, and running smoothly with reliable support whenever you need it.',
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
                  <li className="breadcrumb-item active" aria-current="page">Quetta</li>
                </ol>
              </nav>

              <h1 className="mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                Web Design & Development in <em className="font-instrument fw-normal">Quetta</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="col-xl-9">
                  <p className="mb-0">
                    Professional web design, development, and digital marketing services for businesses in Quetta.
                    Serving energy companies, traders, educators, and service providers across Balochistan.
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
                    Why Choose Dev Aspire in <em className="font-instrument">Quetta?</em>
                  </h2>
                  <p className="text-center mb-0" data-aos="fade-up" data-aos-delay="100">
                    Quetta and Balochistan represent emerging opportunities in Pakistan's economy. We help local businesses establish
                    professional online presence that builds credibility, reaches customers, and drives growth across the province.
                  </p>
                </div>
              </div>

              <div className="row g-4">
                {[
                  {
                    title: 'Regional Understanding',
                    desc: 'Knowledge of Quetta and Balochistan&apos;s business environment, industrial sectors, and market dynamics.',
                    icon: 'solar:map-point-linear',
                  },
                  {
                    title: 'Industry Experience',
                    desc: 'Experience with energy, mining, trading, and corporate sectors prevalent in Balochistan.',
                    icon: 'solar:diploma-verified-linear',
                  },
                  {
                    title: 'Professional Standards',
                    desc: 'High-quality websites that build credibility with corporate, government, and international stakeholders.',
                    icon: 'solar:medal-ribbons-star-linear',
                  },
                  {
                    title: 'Competitive Pricing',
                    desc: 'Cost-effective solutions with flexible payment options designed for Quetta businesses.',
                    icon: 'solar:hand-money-linear',
                  },
                  {
                    title: 'Growth Focus',
                    desc: 'Websites designed to help you expand beyond local markets and reach regional/national customers.',
                    icon: 'solar:graph-up-linear',
                  },
                  {
                    title: 'Reliable Support',
                    desc: 'Ongoing maintenance and technical support to keep your website secure and up-to-date.',
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
                Our Services in <em className="font-instrument">Quetta</em>
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
                Industries We Serve in <em className="font-instrument">Quetta</em>
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

        {/* About Quetta Digital Landscape */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="d-flex flex-column gap-5" data-aos="fade-up">
                  <h2 className="mb-0 text-center">
                    Quetta's <em className="font-instrument">Economic Potential</em>
                  </h2>
                  <p>
                    Quetta, the capital of Balochistan, sits at a strategic location connecting Pakistan with Afghanistan and Iran.
                    The province is rich in natural resources including natural gas, minerals, and coal, making Balochistan crucial
                    to Pakistan's energy sector. Quetta serves as the administrative and economic hub for these industries, hosting
                    offices of major energy companies, mining firms, and trading businesses.
                  </p>
                  <p>
                    Beyond natural resources, Quetta has a growing presence in education, healthcare, retail, and professional services.
                    The business environment is evolving, with increasing recognition of digital presence as essential for growth.
                    Companies here need professional websites to build credibility with corporate partners, government agencies, and
                    potential investors.
                  </p>
                  <p>
                    For businesses in Quetta, digital presence serves multiple purposes: establishing professional credibility,
                    reaching customers beyond local markets, and competing with companies from other provinces. Whether you're an
                    energy company showcasing capabilities, a trader expanding your reach, or a service provider building reputation,
                    a well-designed website is your 24/7 representative.
                  </p>
                  <p className="mb-0">
                    We help Quetta businesses leverage digital opportunities while understanding regional context. Our websites
                    combine professional design with practical functionality - helping you build credibility, reach decision-makers,
                    and grow your business across Balochistan and beyond.
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
                      Ready to Grow Your <em className="font-instrument">Quetta Business?</em>
                    </h2>
                    <p className="mb-0 text-white text-opacity-75">
                      Get a free consultation and discover how a professional website can help you build credibility,
                      reach more customers, and expand your business across Balochistan.
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
