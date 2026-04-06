import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { serviceSchema, breadcrumbSchema } from '@/lib/structured-data';
import { SITE_URL } from '@/lib/site';

export const metadata = {
  title: "Brand Strategy Services in Pakistan - Dev Aspire",
  description:
    "Professional brand strategy services in Pakistan by Dev Aspire. We craft compelling brand identities, logos, and visual strategies for businesses.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/services/brand-strategy`,
    siteName: "Dev Aspire",
    title: "Brand Strategy Services in Pakistan - Dev Aspire",
    description:
      "Professional brand strategy services in Pakistan by Dev Aspire. We craft compelling brand identities, logos, and visual strategies that help businesses stand out.",
    images: [{ url: `${SITE_URL}/assets/images/logos/logo-dark.svg`, width: 1200, height: 630, alt: "Brand Strategy Services - Dev Aspire Pakistan" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Brand Strategy Services in Pakistan - Dev Aspire",
    description: "Professional brand strategy services in Pakistan by Dev Aspire. We craft compelling brand identities and visual strategies for competitive markets.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: { canonical: `${SITE_URL}/services/brand-strategy` },
};

const schema = serviceSchema(
  'Brand Strategy Services',
  'Professional brand strategy and identity design services including logo design, brand guidelines, visual identity systems, and market positioning for businesses in Pakistan.'
);
const breadcrumb = breadcrumbSchema('Brand Strategy', '/services/brand-strategy');

export default function BrandStrategy() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="page-wrapper overflow-hidden">
        {/* Hero Section */}
        <section className="banner-section bg-gradient-shaph position-relative pt-14 pt-md-15 pb-11 pb-lg-12 pb-xl-13">
          <div className="container position-relative z-3">
            <div className="d-flex flex-column gap-10">
              <h1 className="text-center mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                Brand Strategy Services in <em className="font-instrument fw-normal">Pakistan</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="col-xl-7">
                  <p className="text-center mb-0">
                    At Dev Aspire, we build powerful brand identities that resonate with your audience. From logo design to complete brand guidelines,
                    our brand strategy services help Pakistani businesses and startups create memorable impressions that drive growth.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                <Link href="/contact" className="btn btn-primary py-md-7 pe-md-14">
                  <span className="btn-text">Get a Free Consultation</span>
                  <iconify-icon icon="solar:arrow-right-up-linear" className="btn-icon bg-white text-dark round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10 gap-lg-12">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h2 className="mb-0 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    What Our Brand Strategy <em className="font-instrument">Includes</em>
                  </h2>
                </div>
              </div>
              <div className="row">
                {[
                  { title: 'Logo Design & Visual Identity', desc: 'Custom logo designs and cohesive visual identity systems that represent your brand values and appeal to your target market in Pakistan and globally.', color: 'secondary', icon: 'solar:palette-round-linear' },
                  { title: 'Brand Guidelines & Style Guides', desc: 'Comprehensive brand guidelines covering typography, color palettes, imagery, and tone of voice to ensure consistency across all touchpoints.', color: 'info', icon: 'solar:document-text-linear' },
                  { title: 'Market Research & Positioning', desc: 'In-depth competitor analysis and market research to position your brand uniquely in the Pakistani and international markets.', color: 'orange', icon: 'solar:chart-linear' },
                  { title: 'Brand Messaging & Storytelling', desc: 'Compelling brand narratives, taglines, and messaging frameworks that connect emotionally with your audience and drive conversions.', color: 'success', icon: 'solar:chat-round-dots-linear' },
                ].map((service, idx) => (
                  <div key={idx} className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100} data-aos-duration="1000">
                    <div className={`card bg-${service.color}-subtle h-100`}>
                      <div className="card-body d-flex flex-column gap-4">
                        <iconify-icon icon={service.icon} className={`fs-9 text-${service.color}`}></iconify-icon>
                        <h3 className={`text-${service.color} mb-0`}>{service.title}</h3>
                        <p className="mb-0">{service.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                Our Brand Strategy <em className="font-instrument">Process</em>
              </h2>
              <div className="row">
                {[
                  { step: '01', title: 'Discovery & Research', desc: 'We analyze your business, competitors, target audience, and market trends in Pakistan to understand your unique positioning opportunities.' },
                  { step: '02', title: 'Strategy Development', desc: 'We craft your brand positioning, messaging framework, visual direction, and create a comprehensive strategy document.' },
                  { step: '03', title: 'Design & Identity Creation', desc: 'Our designers bring your brand to life with logo design, color palettes, typography, and complete visual identity systems.' },
                  { step: '04', title: 'Guidelines & Launch', desc: 'We deliver comprehensive brand guidelines and support your brand launch across digital and physical touchpoints.' },
                ].map((item, idx) => (
                  <div key={idx} className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100} data-aos-duration="1000">
                    <div className="card h-100">
                      <div className="card-body d-flex flex-column gap-3">
                        <span className="fs-11 fw-bold text-secondary opacity-25">{item.step}</span>
                        <h3 className="mb-0">{item.title}</h3>
                        <p className="mb-0">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                Why Choose Dev Aspire for <em className="font-instrument">Brand Strategy</em>
              </h2>
              <div className="row">
                {[
                  { title: '10+ Years of Experience', desc: 'Our seasoned team has helped dozens of brands in Pakistan and internationally build strong identities.' },
                  { title: 'Data-Driven Approach', desc: 'We combine creative excellence with market data to ensure your brand strategy delivers measurable results.' },
                  { title: 'End-to-End Service', desc: 'From initial research to final deliverables, we handle every aspect of your brand strategy under one roof.' },
                  { title: 'Pakistani Market Expertise', desc: 'We understand the nuances of branding in Pakistan, from cultural considerations to market preferences in cities like Karachi, Lahore, and Islamabad.' },
                ].map((item, idx) => (
                  <div key={idx} className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100} data-aos-duration="1000">
                    <div className="card h-100">
                      <div className="card-body d-flex flex-column gap-3">
                        <h3 className="mb-0">{item.title}</h3>
                        <p className="mb-0">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10 gap-lg-12">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-xl-4">
                  <h2 className="mb-0 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    Frequently Asked <em className="font-instrument">Questions</em>
                  </h2>
                </div>
              </div>
              <div className="accordion accordion-flush d-flex flex-column gap-3" id="brandStrategyFAQ">
                {[
                  { id: 'One', question: 'How much does brand strategy cost in Pakistan?', answer: 'Brand strategy costs in Pakistan typically range from PKR 150,000 to PKR 500,000 depending on scope. Our packages include discovery, strategy development, logo design, and brand guidelines. We offer flexible pricing to match your budget and business needs.', expanded: true },
                  { id: 'Two', question: 'How long does the brand strategy process take?', answer: 'A comprehensive brand strategy project typically takes 4-6 weeks. This includes discovery and research (1 week), strategy development (1-2 weeks), design and identity creation (2 weeks), and finalization of guidelines (1 week). We can adjust timelines based on your urgency.', expanded: false },
                  { id: 'Three', question: 'What deliverables do I receive?', answer: 'You receive a complete brand strategy document, logo files in all formats (AI, EPS, SVG, PNG), brand guidelines (PDF), color palette specifications, typography guide, social media templates, business card designs, and letterhead templates. Everything you need to launch your brand consistently.', expanded: false },
                  { id: 'Four', question: 'Do you offer rebranding services?', answer: 'Yes, we specialize in rebranding for businesses looking to refresh their identity or pivot their positioning. We assess your current brand equity, identify what to keep and what to change, and develop a strategic rebranding plan that honors your history while positioning you for future growth.', expanded: false },
                  { id: 'Five', question: 'Can you help with brand strategy for startups in Pakistan?', answer: 'Absolutely! We have extensive experience working with Pakistani startups in Islamabad, Karachi, and Lahore. We offer startup-friendly packages that provide essential brand strategy and identity at accessible prices, helping you make a strong first impression in the market.', expanded: false },
                  { id: 'Six', question: 'What industries do you create brand strategies for?', answer: 'We work across all industries including technology startups, e-commerce, healthcare, education, real estate, finance, and hospitality. Our process is flexible and adapts to your industry-specific needs, competitive landscape, and target audience in Pakistan or internationally.', expanded: false },
                  { id: 'Seven', question: 'Do you provide ongoing brand management support?', answer: 'Yes, we offer retainer packages for ongoing brand management including ensuring consistency across new materials, updating guidelines as your brand evolves, designing marketing collateral, and providing strategic guidance as your business grows.', expanded: false },
                ].map((faq, idx) => (
                  <div key={idx} className="accordion-item border rounded-1 position-relative overflow-hidden" data-aos="fade-up"
                    data-aos-delay={(idx + 1) * 100} data-aos-duration="1000">
                    <h2 className="accordion-header">
                      <button className={`accordion-button fs-7 fw-medium ${!faq.expanded ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse"
                        data-bs-target={`#brandCollapse${faq.id}`} aria-expanded={faq.expanded} aria-controls={`brandCollapse${faq.id}`}>
                        {faq.question}
                      </button>
                    </h2>
                    <div id={`brandCollapse${faq.id}`} className={`accordion-collapse collapse ${faq.expanded ? 'show' : ''}`} data-bs-parent="#brandStrategyFAQ">
                      <div className="accordion-body pt-0">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h2 className="mb-0 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    Brand Strategy <em className="font-instrument">Pricing</em>
                  </h2>
                  <p className="text-center mt-4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    Professional brand identity and strategy services for startups and established businesses in Pakistan.
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                  <div className="card h-100 border-0">
                    <div className="card-body d-flex flex-column gap-4 p-5">
                      <div>
                        <span className="badge bg-secondary text-white mb-3">Logo Design</span>
                        <h3 className="mb-0">PKR 30,000+</h3>
                        <p className="text-muted mt-2 mb-0">Quick start</p>
                      </div>
                      <p className="mb-0">Professional logo design with multiple concepts and unlimited revisions.</p>
                      <div className="mt-auto">
                        <h6 className="mb-3">Includes:</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-secondary fs-5"></iconify-icon>
                            <span>3 Logo Concepts</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-secondary fs-5"></iconify-icon>
                            <span>Unlimited Revisions</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-secondary fs-5"></iconify-icon>
                            <span>Source Files</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-secondary fs-5"></iconify-icon>
                            <span>All Formats</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-secondary fs-5"></iconify-icon>
                            <span>1 Week Delivery</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                  <div className="card h-100 bg-secondary border-0">
                    <div className="card-body d-flex flex-column gap-4 p-5">
                      <div>
                        <span className="badge bg-dark text-white mb-3">Brand Identity</span>
                        <h3 className="mb-0 text-white">PKR 100,000+</h3>
                        <p className="text-white text-opacity-75 mt-2 mb-0">Complete package</p>
                      </div>
                      <p className="mb-0 text-white">Full brand identity system with logo, colors, typography, and guidelines.</p>
                      <div className="mt-auto">
                        <h6 className="mb-3 text-white">Includes:</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-white fs-5"></iconify-icon>
                            <span className="text-white">Logo System</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-white fs-5"></iconify-icon>
                            <span className="text-white">Color Palette</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-white fs-5"></iconify-icon>
                            <span className="text-white">Typography System</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-white fs-5"></iconify-icon>
                            <span className="text-white">Brand Guidelines</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-white fs-5"></iconify-icon>
                            <span className="text-white">3 Weeks Delivery</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="card h-100 border-0">
                    <div className="card-body d-flex flex-column gap-4 p-5">
                      <div>
                        <span className="badge bg-primary text-white mb-3">Brand Strategy</span>
                        <h3 className="mb-0">PKR 200,000+</h3>
                        <p className="text-muted mt-2 mb-0">Full transformation</p>
                      </div>
                      <p className="mb-0">Complete brand strategy with positioning, messaging, and visual identity.</p>
                      <div className="mt-auto">
                        <h6 className="mb-3">Includes:</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-primary fs-5"></iconify-icon>
                            <span>Market Research</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-primary fs-5"></iconify-icon>
                            <span>Brand Positioning</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-primary fs-5"></iconify-icon>
                            <span>Messaging Framework</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-primary fs-5"></iconify-icon>
                            <span>Complete Identity</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-primary fs-5"></iconify-icon>
                            <span>6 Weeks Delivery</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                Related <em className="font-instrument">Services</em>
              </h2>
              <div className="row justify-content-center">
                <div className="col-sm-6 col-md-4">
                  <Link href="/services/ui-ux-design" className="text-decoration-none">
                    <div className="card bg-light-orange" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                      <div className="card-body d-flex flex-column gap-11">
                        <iconify-icon icon="solar:magic-stick-3-linear" className="fs-9 text-orange"></iconify-icon>
                        <div>
                          <h4 className="text-orange mb-2">UI/UX Design</h4>
                          <p className="mb-0 text-dark">Transform your brand into beautiful, user-friendly digital experiences.</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-6 col-md-4">
                  <Link href="/services/digital-marketing" className="text-decoration-none">
                    <div className="card bg-info-subtle" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                      <div className="card-body d-flex flex-column gap-11">
                        <iconify-icon icon="solar:gallery-wide-linear" className="fs-9 text-info"></iconify-icon>
                        <div>
                          <h4 className="text-info mb-2">Digital Marketing</h4>
                          <p className="mb-0 text-dark">Amplify your brand reach with strategic digital marketing campaigns.</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-6 col-md-4">
                  <Link href="/services/web-app-development" className="text-decoration-none">
                    <div className="card bg-danger-subtle" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                      <div className="card-body d-flex flex-column gap-11">
                        <iconify-icon icon="solar:window-frame-linear" className="fs-9 text-danger"></iconify-icon>
                        <div>
                          <h4 className="text-danger mb-2">Web Development</h4>
                          <p className="mb-0 text-dark">Bring your brand to life with a powerful website or web application.</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="get-in-touch position-relative overflow-hidden rounded-3 border px-4 py-5 py-lg-13 py-xl-14">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="d-flex flex-column gap-7 text-center">
                    <h2 className="mb-0">Ready to Build a <em className="font-instrument">Powerful Brand?</em></h2>
                    <p className="mb-0">Let Dev Aspire create a brand strategy that positions your business for success in Pakistan and beyond.</p>
                    <Link href="/contact" className="btn btn-dark mx-auto">
                      <span className="btn-text">Start Your Brand Journey</span>
                      <iconify-icon icon="solar:arrow-right-up-linear" className="btn-icon bg-white text-dark round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
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
