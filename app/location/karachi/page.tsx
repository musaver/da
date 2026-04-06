import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';
import { locationServiceSchema, breadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: "Web Design & Development Services in Karachi - Dev Aspire",
  description:
    "Professional web design and development services in Karachi, Pakistan. Dev Aspire helps businesses in Karachi build powerful online presence with custom websites and apps.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/location/karachi`,
    siteName: "Dev Aspire",
    title: "Web Design & Development in Karachi - Dev Aspire",
    description:
      "Professional web design and development services in Karachi. Custom websites, e-commerce, and digital marketing solutions for Karachi businesses.",
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "Dev Aspire - Karachi Web Design Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Web Design & Development in Karachi - Dev Aspire",
    description:
      "Professional web design and development services in Karachi, Pakistan. Custom solutions for Karachi businesses.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/location/karachi`,
  },
};

const schema = locationServiceSchema('Karachi');
const breadcrumb = breadcrumbSchema('Karachi Services', '/location/karachi');

export default function KarachiLocation() {
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
              <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="50">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="breadcrumb-item"><Link href="/locations">Locations</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Karachi</li>
                </ol>
              </nav>

              <h1 className="mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                Web Design & Development in <em className="font-instrument fw-normal">Karachi</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="col-xl-9">
                  <p className="mb-0">
                    Dev Aspire provides professional web design, development, and digital marketing services to businesses across Karachi. From Clifton to Gulshan, we help Karachi entrepreneurs and enterprises build exceptional online presence.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 justify-content-center flex-wrap" data-aos="fade-up" data-aos-delay="300">
                <Link href="/contact" className="btn btn-dark">
                  <span className="btn-text">Get Free Consultation</span>
                  <iconify-icon icon="solar:arrow-right-up-linear" className="btn-icon bg-white text-dark round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                </Link>
                <Link href="/portfolio" className="btn btn-outline-dark">
                  <span className="btn-text">View Portfolio</span>
                  <iconify-icon icon="solar:gallery-linear" className="btn-icon round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Dev Aspire in Karachi */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Why Karachi Businesses Choose <em className="font-instrument">Dev Aspire</em>
              </h2>
              <div className="row g-4">
                {[
                  { icon: 'solar:buildings-3-linear', title: 'Understanding Karachi Market', desc: 'We understand the unique business landscape of Karachi—from DHA and Clifton enterprises to Saddar retail businesses and SITE industrial companies.', color: 'primary' },
                  { icon: 'solar:global-linear', title: 'Remote Collaboration', desc: 'Though based in Islamabad, we work seamlessly with Karachi clients through video calls, project management tools, and regular online meetings.', color: 'success' },
                  { icon: 'solar:clock-circle-linear', title: 'Quick Turnaround', desc: 'We respect Karachi&apos;s fast-paced business culture with efficient project timelines and responsive communication throughout the development process.', color: 'info' },
                  { icon: 'solar:hand-money-linear', title: 'Competitive Pricing', desc: 'Transparent, competitive rates for Karachi businesses with flexible payment plans and no hidden costs.', color: 'warning' },
                ].map((item, idx) => (
                  <div key={idx} className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                    <div className={`card h-100 bg-${item.color}-subtle border-0`}>
                      <div className="card-body d-flex flex-column gap-4 p-5">
                        <div className={`bg-${item.color} round-50 rounded-circle hstack justify-content-center align-self-start`} style={{width: '50px', height: '50px'}}>
                          <iconify-icon icon={item.icon} className="fs-4 text-white"></iconify-icon>
                        </div>
                        <div>
                          <h4 className="mb-2">{item.title}</h4>
                          <p className="mb-0 text-muted fs-4">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services We Offer in Karachi */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Our Services for <em className="font-instrument">Karachi Businesses</em>
              </h2>
              <div className="row g-4">
                {[
                  { title: 'Web Development', desc: 'Custom websites and web applications', link: '/services/web-app-development', icon: 'solar:code-linear', color: 'primary' },
                  { title: 'E-Commerce', desc: 'Shopify stores and online shops', link: '/services/shopify-development', icon: 'solar:cart-large-2-linear', color: 'success' },
                  { title: 'Digital Marketing', desc: 'SEO and online marketing', link: '/services/digital-marketing', icon: 'solar:chart-2-linear', color: 'info' },
                  { title: 'UI/UX Design', desc: 'User-friendly designs', link: '/services/ui-ux-design', icon: 'solar:palette-linear', color: 'warning' },
                  { title: 'Brand Strategy', desc: 'Build memorable brand', link: '/services/brand-strategy', icon: 'solar:target-linear', color: 'danger' },
                ].map((service, idx) => (
                  <div key={idx} className="col-md-6 col-lg" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                    <Link href={service.link} className="text-decoration-none">
                      <div className={`card h-100 bg-${service.color}-subtle hover-lift border-0`}>
                        <div className="card-body d-flex flex-column gap-3 p-4 text-center">
                          <iconify-icon icon={service.icon} className={`fs-1 text-${service.color}`}></iconify-icon>
                          <div>
                            <h5 className="mb-2">{service.title}</h5>
                            <p className="mb-0 text-muted fs-5">{service.desc}</p>
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

        {/* Industries We Serve in Karachi */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Industries We Serve in <em className="font-instrument">Karachi</em>
              </h2>
              <div className="row g-4 g-lg-5">
                {[
                  { icon: 'solar:cart-large-2-linear', title: 'E-Commerce & Retail', desc: 'Online stores for retailers from Saddar to Tariq Road.' },
                  { icon: 'solar:wallet-money-linear', title: 'Finance & FinTech', desc: 'Secure platforms for financial services and startups.' },
                  { icon: 'solar:ship-linear', title: 'Logistics & Shipping', desc: 'Solutions for port businesses and freight forwarders.' },
                  { icon: 'solar:buildings-linear', title: 'Real Estate', desc: 'Property websites for DHA and Clifton agencies.' },
                  { icon: 'solar:chef-hat-linear', title: 'Food & Restaurants', desc: 'Online ordering for Karachi&apos;s restaurant scene.' },
                  { icon: 'solar:shop-2-linear', title: 'Manufacturing', desc: 'B2B platforms for SITE and Korangi industries.' },
                ].map((industry, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                    <div className="card h-100 border-0 shadow-sm hover-lift transition-all">
                      <div className="card-body d-flex flex-column gap-4 p-4 p-lg-5">
                        <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 text-primary" style={{ width: '56px', height: '56px' }}>
                          <iconify-icon icon={industry.icon} style={{ fontSize: '28px' }}></iconify-icon>
                        </div>
                        <div className="d-flex flex-column gap-2">
                          <h5 className="mb-0 fw-semibold">{industry.title}</h5>
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

        {/* About Karachi's Digital Landscape */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="d-flex flex-column gap-5" data-aos="fade-up">
                  <h2 className="mb-0 text-center">
                    Karachi's Growing <em className="font-instrument">Digital Economy</em>
                  </h2>
                  <div className="fs-5 text-muted">
                    <p>
                      As Pakistan&apos;s largest city and economic hub, Karachi is experiencing rapid digital transformation. With over 16 million residents and home to 70% of Pakistan&apos;s e-commerce businesses, Karachi presents enormous opportunities for businesses willing to invest in their online presence.
                    </p>
                    <p>
                      From the bustling markets of Saddar and Tariq Road moving online to DHA startups launching innovative SaaS products, Karachi businesses are embracing digital solutions. The city&apos;s thriving entrepreneurial ecosystem, access to talent, and diverse economy make it a prime market for web design and development services.
                    </p>
                  </div>
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
                  <div className="accordion accordion-flush d-flex flex-column gap-3" id="karachiFAQ" data-aos="fade-up">
                    {[
                      { id: 'One', question: 'Do you work with businesses in Karachi?', answer: 'Yes! While we are based in Islamabad, we work with clients throughout Pakistan including Karachi. We use video calls, project management tools, and online collaboration to deliver the same quality service remotely. Many of our Karachi clients prefer this arrangement as it provides flexibility without geographic limitations.', expanded: true },
                      { id: 'Two', question: 'How much does web design cost in Karachi?', answer: 'Web design costs in Karachi typically range from PKR 200,000 for basic websites to PKR 800,000+ for complex web applications. E-commerce stores range from PKR 250,000 to PKR 600,000. We provide transparent quotes based on your specific requirements, features needed, and project timeline. Contact us for a customized proposal for your Karachi business.', expanded: false },
                      { id: 'Three', question: 'Can you help with digital marketing for Karachi customers?', answer: 'Absolutely! We specialize in digital marketing tailored for the Karachi market. This includes local SEO to rank for "business in Karachi" searches, targeted Google Ads campaigns, social media marketing aimed at Karachi demographics, and content strategies that resonate with Karachi audiences. We understand local preferences and buying behaviors.', expanded: false },
                      { id: 'Four', question: 'How long does it take to complete a website project?', answer: 'Timelines depend on project complexity. A basic business website takes 3-4 weeks, an e-commerce store 4-6 weeks, and custom web applications 8-12 weeks. We provide detailed timelines in our proposal and keep you updated throughout. We respect Karachi&apos;s fast-paced business culture with efficient delivery.', expanded: false },
                    ].map((faq, idx) => (
                      <div key={idx} className="accordion-item border rounded-1">
                        <h3 className="accordion-header">
                          <button className={`accordion-button fs-7 fw-medium ${!faq.expanded ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse"
                            data-bs-target={`#karachiCollapse${faq.id}`} aria-expanded={faq.expanded} aria-controls={`karachiCollapse${faq.id}`}>
                            {faq.question}
                          </button>
                        </h3>
                        <div id={`karachiCollapse${faq.id}`} className={`accordion-collapse collapse ${faq.expanded ? 'show' : ''}`} data-bs-parent="#karachiFAQ">
                          <div className="accordion-body pt-0">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="card bg-dark mb-0" data-aos="fade-up">
                  <div className="card-body px-lg-7 py-lg-10">
                    <div className="row align-items-center justify-content-between gap-4 gap-lg-0">
                      <div className="col-lg-6">
                        <h2 className="mb-0 text-white">
                          Ready to Grow Your Karachi <em className="font-instrument">Business Online?</em>
                        </h2>
                        <p className="mb-0 text-white text-opacity-75 mt-3">
                          Let's discuss how Dev Aspire can help your Karachi business succeed with professional web design and development. Schedule a free consultation today.
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-end gap-3">
                          <Link href="/contact" className="btn btn-white">
                            <span className="btn-text">Get Free Consultation</span>
                            <iconify-icon icon="solar:arrow-right-up-linear" className="btn-icon bg-dark text-white round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                          </Link>
                          <Link href="/industries" className="btn btn-outline-white">
                            <span className="btn-text">View Industries</span>
                            <iconify-icon icon="solar:widget-linear" className="btn-icon round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                          </Link>
                        </div>
                      </div>
                    </div>
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
