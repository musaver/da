import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';
import { locationServiceSchema, breadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: "Web Design & Development Services in Islamabad | Dev Aspire",
  description:
    "Leading web design and development agency in Islamabad, Pakistan. Custom websites, e-commerce solutions, and digital marketing for businesses in the capital.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/location/islamabad`,
    siteName: "Dev Aspire",
    title: "Web Design & Development Services in Islamabad",
    description:
      "Professional web design, development, and digital marketing services for Islamabad businesses. Serving government, startups, and enterprises.",
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "Dev Aspire - Web Design Agency in Islamabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Web Design & Development Services in Islamabad",
    description:
      "Professional web design, development, and digital marketing services for Islamabad businesses.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/location/islamabad`,
  },
};

const schema = locationServiceSchema('Islamabad');
const breadcrumb = breadcrumbSchema('Islamabad', '/location/islamabad');

export default function IslamabadLocation() {
  const services = [
    {
      title: 'Brand Strategy',
      desc: 'Build strong brand identities for Islamabad businesses',
      link: '/services/brand-strategy',
      icon: 'solar:target-linear',
    },
    {
      title: 'Digital Marketing',
      desc: 'SEO, PPC, and social media marketing for the capital',
      link: '/services/digital-marketing',
      icon: 'solar:chart-2-linear',
    },
    {
      title: 'UI/UX Design',
      desc: 'User-centered design for government and private sectors',
      link: '/services/ui-ux-design',
      icon: 'solar:palette-linear',
    },
    {
      title: 'Shopify Development',
      desc: 'E-commerce stores for Islamabad retailers',
      link: '/services/shopify-development',
      icon: 'solar:shop-linear',
    },
    {
      title: 'Web App Development',
      desc: 'Custom web applications for enterprises and startups',
      link: '/services/web-app-development',
      icon: 'solar:code-linear',
    },
  ];

  const industries = [
    {
      name: 'Government & Public Sector',
      desc: 'Digital solutions for government departments and public services',
      icon: 'solar:buildings-3-linear',
    },
    {
      name: 'Tech Startups',
      desc: 'Web platforms for Islamabad&apos;s growing startup ecosystem',
      icon: 'solar:rocket-2-linear',
    },
    {
      name: 'Education & Training',
      desc: 'Learning platforms for universities and training centers',
      icon: 'solar:book-linear',
    },
    {
      name: 'Healthcare',
      desc: 'Hospital websites and patient management systems',
      icon: 'solar:medical-kit-linear',
    },
    {
      name: 'Real Estate',
      desc: 'Property listing websites for Islamabad developers',
      icon: 'solar:home-linear',
    },
    {
      name: 'Professional Services',
      desc: 'Websites for law firms, consultancies, and agencies',
      icon: 'solar:case-minimalistic-linear',
    },
  ];

  const faqs = [
    {
      question: 'Why choose a web design agency in Islamabad?',
      answer:
        'Islamabad agencies understand the local market dynamics, government sector requirements, and the unique needs of businesses in the capital. We offer competitive pricing compared to international agencies while maintaining high-quality standards and providing face-to-face meetings when needed.',
    },
    {
      question: 'How much does website development cost in Islamabad?',
      answer:
        'Costs vary based on complexity. A basic business website starts from PKR 50,000, professional corporate sites range from PKR 150,000-400,000, and custom web applications start from PKR 500,000. We offer transparent pricing and free consultations to provide accurate quotes for your Islamabad business.',
    },
    {
      question: 'Do you work with government departments in Islamabad?',
      answer:
        'Yes, we have experience working with government and semi-government organizations. We understand compliance requirements, security standards, and procurement processes. Our team can help with tender documentation and follow all necessary protocols for government projects.',
    },
    {
      question: 'Can you help with SEO for Islamabad-based businesses?',
      answer:
        'Absolutely! We specialize in local SEO for Islamabad businesses, helping you rank for location-specific keywords like "services in Islamabad" or "Islamabad [industry]". Our strategies include Google Business Profile optimization, local citations, and content targeting the capital&apos;s audience.',
    },
    {
      question: 'What makes Islamabad different for digital marketing?',
      answer:
        'Islamabad has a highly educated demographic, strong government and corporate presence, and growing startup ecosystem. Marketing strategies need to reflect the city&apos;s professional culture, emphasize credibility and quality, and target both B2B and B2C audiences effectively.',
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer:
        'Yes, we offer maintenance packages starting from PKR 10,000/month including updates, backups, security monitoring, and technical support. We also provide training for your Islamabad team to manage content updates independently if preferred.',
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
                  <li className="breadcrumb-item active" aria-current="page">Islamabad</li>
                </ol>
              </nav>

              <h1 className="mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                Web Design & Development in <em className="font-instrument fw-normal">Islamabad</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="col-xl-9">
                  <p className="mb-0">
                    Professional web design, development, and digital marketing services for businesses in Pakistan's capital city.
                    Serving government departments, tech startups, educational institutions, and enterprises across Islamabad.
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
                    Why Choose Dev Aspire in <em className="font-instrument">Islamabad?</em>
                  </h2>
                  <p className="text-center mb-0" data-aos="fade-up" data-aos-delay="100">
                    As Islamabad's leading web design and development agency, we combine technical expertise with deep understanding
                    of the capital's business landscape. Whether you're a government department, a growing startup, or an established
                    enterprise, we deliver digital solutions that drive results.
                  </p>
                </div>
              </div>

              <div className="row g-4">
                {[
                  {
                    title: 'Local Expertise',
                    desc: 'Deep understanding of Islamabad&apos;s business environment, from government procurement processes to startup culture.',
                    icon: 'solar:map-point-linear',
                  },
                  {
                    title: 'Face-to-Face Meetings',
                    desc: 'Located in Islamabad for easy in-person consultations, project discussions, and ongoing collaboration.',
                    icon: 'solar:users-group-rounded-linear',
                  },
                  {
                    title: 'Fast Turnaround',
                    desc: 'Same-city operations mean quicker response times, faster revisions, and efficient project delivery.',
                    icon: 'solar:rocket-linear',
                  },
                  {
                    title: 'Government Experience',
                    desc: 'Proven track record working with government departments and understanding compliance requirements.',
                    icon: 'solar:shield-check-linear',
                  },
                  {
                    title: 'Startup-Friendly',
                    desc: 'Flexible pricing and agile development processes perfect for Islamabad&apos;s growing startup ecosystem.',
                    icon: 'solar:lightbulb-bolt-linear',
                  },
                  {
                    title: 'Ongoing Support',
                    desc: 'Local support team available for maintenance, updates, and emergency fixes when you need them.',
                    icon: 'solar:chat-round-like-linear',
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
                Our Services in <em className="font-instrument">Islamabad</em>
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
                Industries We Serve in <em className="font-instrument">Islamabad</em>
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

        {/* About Islamabad Digital Landscape */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="d-flex flex-column gap-5" data-aos="fade-up">
                  <h2 className="mb-0 text-center">
                    Islamabad's <em className="font-instrument">Digital Landscape</em>
                  </h2>
                  <p>
                    As Pakistan's capital and a planned city, Islamabad represents a unique digital opportunity. The city is home to
                    government departments, international organizations, educational institutions, tech startups, and growing corporate sector.
                    This diverse business environment demands sophisticated digital solutions that balance professionalism, innovation, and accessibility.
                  </p>
                  <p>
                    The Islamabad market is characterized by highly educated professionals, strong purchasing power, and increasing digital
                    adoption. Businesses here compete not just locally but nationally and internationally, requiring world-class websites
                    and digital presence that reflect quality and credibility.
                  </p>
                  <p>
                    With government initiatives promoting digitalization and a thriving startup ecosystem in sectors like FinTech, EdTech,
                    and HealthTech, Islamabad businesses need partners who understand both technical requirements and local market dynamics.
                    Our experience spans government projects requiring compliance and security, to agile startup MVPs needing rapid development.
                  </p>
                  <p className="mb-0">
                    Whether you're targeting government contracts, serving the corporate sector, or building the next big startup,
                    Dev Aspire provides the digital foundation for your success in Islamabad's competitive landscape.
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
                      Ready to Transform Your <em className="font-instrument">Islamabad Business?</em>
                    </h2>
                    <p className="mb-0 text-white text-opacity-75">
                      Get a free consultation and discover how we can help your business succeed online.
                      Whether you're in government, corporate, or startup sector, we're here to help.
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
