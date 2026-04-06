import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { serviceSchema, breadcrumbSchema } from '@/lib/structured-data';
import { SITE_URL } from '@/lib/site';

export const metadata = {
  title: "UI/UX Design Services in Pakistan - Dev Aspire",
  description:
    "Expert UI/UX design services in Pakistan by Dev Aspire. Intuitive user interfaces and seamless experiences for websites, mobile apps, and SaaS products.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/services/ui-ux-design`,
    siteName: "Dev Aspire",
    title: "UI/UX Design Services in Pakistan - Dev Aspire",
    description:
      "Expert UI/UX design services in Pakistan by Dev Aspire. Intuitive user interfaces and seamless experiences for websites, mobile apps, and SaaS products.",
    images: [{ url: `${SITE_URL}/assets/images/logos/logo-dark.svg`, width: 1200, height: 630, alt: "UI/UX Design Services - Dev Aspire Pakistan" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "UI/UX Design Services in Pakistan - Dev Aspire",
    description: "Expert UI/UX design services in Pakistan. Intuitive interfaces and seamless user experiences for websites, mobile apps, and SaaS products by Dev Aspire.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: { canonical: `${SITE_URL}/services/ui-ux-design` },
};

const schema = serviceSchema(
  'UI/UX Design Services',
  'Professional UI/UX design services including user research, wireframing, prototyping, interface design, and usability testing for web and mobile applications in Pakistan.'
);
const breadcrumb = breadcrumbSchema('UI/UX Design', '/services/ui-ux-design');

export default function UIUXDesign() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="page-wrapper overflow-hidden">
        <section className="banner-section bg-gradient-shaph position-relative pt-14 pt-md-15 pb-11 pb-lg-12 pb-xl-13">
          <div className="container position-relative z-3">
            <div className="d-flex flex-column gap-10">
              <h1 className="text-center mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                UI/UX Design Services in <em className="font-instrument fw-normal">Pakistan</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="col-xl-7">
                  <p className="text-center mb-0">
                    We design digital experiences that users love. From user research to pixel-perfect interfaces, Dev Aspire&apos;s UI/UX design
                    services help Pakistani businesses create products that are both beautiful and functional.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                <Link href="/contact" className="btn btn-primary py-md-7 pe-md-14">
                  <span className="btn-text">Discuss Your Design Project</span>
                  <iconify-icon icon="solar:arrow-right-up-linear" className="btn-icon bg-white text-dark round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10 gap-lg-12">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Our UI/UX Design <em className="font-instrument">Process</em>
              </h2>
              <div className="row">
                {[
                  { title: 'User Research & Discovery', desc: 'We start by understanding your users, business goals, and market landscape through interviews, surveys, and competitive analysis tailored for Pakistani and global audiences.', color: 'secondary', icon: 'solar:users-group-rounded-linear', step: '01' },
                  { title: 'Wireframing & Information Architecture', desc: 'We create low-fidelity wireframes and site maps that define the structure, navigation, and user flows of your product before any visual design begins.', color: 'info', icon: 'solar:layers-linear', step: '02' },
                  { title: 'Visual Design & Prototyping', desc: 'Our designers create stunning, pixel-perfect interfaces in Figma with interactive prototypes that bring your product to life before development starts.', color: 'orange', icon: 'solar:magic-stick-3-linear', step: '03' },
                  { title: 'Usability Testing & Iteration', desc: 'We test designs with real users to identify pain points and iterate until the experience is smooth, intuitive, and optimized for conversion.', color: 'success', icon: 'solar:test-tube-linear', step: '04' },
                ].map((service, idx) => (
                  <div key={idx} className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100} data-aos-duration="1000">
                    <div className={`card bg-${service.color}-subtle h-100`}>
                      <div className="card-body d-flex flex-column gap-4">
                        <div className="d-flex align-items-center justify-content-between">
                          <iconify-icon icon={service.icon} className={`fs-9 text-${service.color}`}></iconify-icon>
                          <span className={`fs-11 fw-bold text-${service.color} opacity-25`}>{service.step}</span>
                        </div>
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

        {/* What We Design */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                What We <em className="font-instrument">Design</em>
              </h2>
              <div className="row">
                {[
                  { title: 'Website UI/UX Design', desc: 'Responsive, conversion-optimized website designs for businesses, startups, and e-commerce stores in Pakistan.' },
                  { title: 'Mobile App Design', desc: 'Native iOS and Android app interfaces with intuitive navigation and engaging user experiences.' },
                  { title: 'SaaS Product Design', desc: 'Complex dashboard and SaaS application interfaces designed for usability, scalability, and user retention.' },
                  { title: 'E-Commerce UX Design', desc: 'Shopping experiences optimized for conversions with smooth checkout flows and product discovery.' },
                  { title: 'Landing Page Design', desc: 'High-converting landing pages designed to capture leads and drive sales for marketing campaigns.' },
                  { title: 'Design System Creation', desc: 'Scalable design systems and component libraries that ensure consistency across your entire product.' },
                ].map((item, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
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

        {/* Tools & Technologies */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Design <em className="font-instrument">Tools We Use</em>
              </h2>
              <div className="row justify-content-center">
                {[
                  { tool: 'Figma', desc: 'Our primary design tool for creating responsive, collaborative, and interactive prototypes.' },
                  { tool: 'Adobe XD', desc: 'Advanced prototyping and design system creation for complex enterprise applications.' },
                  { tool: 'Sketch', desc: 'Vector design and UI toolkit for creating pixel-perfect interfaces on macOS.' },
                  { tool: 'Principle', desc: 'Animation and micro-interaction design to bring interfaces to life with smooth transitions.' },
                ].map((item, idx) => (
                  <div key={idx} className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                    <div className="card h-100 text-center">
                      <div className="card-body d-flex flex-column gap-3">
                        <h3 className="mb-0 text-primary">{item.tool}</h3>
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
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="d-flex flex-column gap-10 gap-lg-12">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-xl-4">
                  <h2 className="mb-0 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    Frequently Asked <em className="font-instrument">Questions</em>
                  </h2>
                </div>
              </div>
              <div className="accordion accordion-flush d-flex flex-column gap-3" id="uiuxFAQ">
                {[
                  { id: 'One', question: 'How much does UI/UX design cost in Pakistan?', answer: 'UI/UX design costs vary based on complexity. Simple landing pages start from PKR 100,000, mobile app design from PKR 250,000, and complex SaaS product design from PKR 500,000+. We provide custom quotes based on your specific project requirements, timeline, and deliverables.', expanded: true },
                  { id: 'Two', question: 'How long does a UI/UX design project take?', answer: 'Timelines depend on project scope. A landing page takes 1-2 weeks, a mobile app design 3-4 weeks, and a complete SaaS product 6-8 weeks. This includes research, wireframing, visual design, prototyping, and iterations based on your feedback.', expanded: false },
                  { id: 'Three', question: 'Do you work with developers to implement the design?', answer: 'Yes! We provide complete design handoff with developer-ready files, design specifications, assets, and style guides. We also offer post-design support to work with your development team, ensuring the final product matches the design vision pixel-perfectly.', expanded: false },
                  { id: 'Four', question: 'What is the difference between UI and UX design?', answer: 'UX (User Experience) focuses on how users interact with your product: research, flows, and structure. UI (User Interface) focuses on visual design: colors, typography, buttons, and aesthetics. We provide both: strategy-backed UX and beautiful UI that works together seamlessly.', expanded: false },
                  { id: 'Five', question: 'Can you redesign my existing website or app?', answer: 'Absolutely! We specialize in redesigns. We analyze your current design, identify pain points through user research and analytics, and create a modernized, conversion-optimized design that improves user experience while maintaining your brand identity.', expanded: false },
                  { id: 'Six', question: 'Do you conduct user research for Pakistani audiences?', answer: 'Yes, we conduct user research tailored to Pakistani markets including interviews, surveys, usability testing, and competitive analysis. We understand cultural nuances, user behaviors, and preferences across major cities like Karachi, Lahore, and Islamabad.', expanded: false },
                  { id: 'Seven', question: 'What deliverables do I receive at the end?', answer: 'You receive high-fidelity designs in Figma, interactive prototypes, design system/style guide, all assets (icons, images) in multiple formats, design specifications for developers, and source files. We ensure you have everything needed for development and future updates.', expanded: false },
                ].map((faq, idx) => (
                  <div key={idx} className="accordion-item border rounded-1 position-relative overflow-hidden" data-aos="fade-up"
                    data-aos-delay={(idx + 1) * 100} data-aos-duration="1000">
                    <h2 className="accordion-header">
                      <button className={`accordion-button fs-7 fw-medium ${!faq.expanded ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse"
                        data-bs-target={`#uiuxCollapse${faq.id}`} aria-expanded={faq.expanded} aria-controls={`uiuxCollapse${faq.id}`}>
                        {faq.question}
                      </button>
                    </h2>
                    <div id={`uiuxCollapse${faq.id}`} className={`accordion-collapse collapse ${faq.expanded ? 'show' : ''}`} data-bs-parent="#uiuxFAQ">
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
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h2 className="mb-0 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                    UI/UX Design <em className="font-instrument">Pricing</em>
                  </h2>
                  <p className="text-center mt-4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    Professional UI/UX design services for web and mobile applications. Clear pricing with no hidden costs.
                  </p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                  <div className="card h-100 border-0">
                    <div className="card-body d-flex flex-column gap-4 p-5">
                      <div>
                        <span className="badge bg-info text-white mb-3">Website Design</span>
                        <h3 className="mb-0">PKR 80,000+</h3>
                        <p className="text-muted mt-2 mb-0">5-10 pages</p>
                      </div>
                      <p className="mb-0">Complete UI/UX design for your website with user research and prototyping.</p>
                      <div className="mt-auto">
                        <h6 className="mb-3">Includes:</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-info fs-5"></iconify-icon>
                            <span>User Research</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-info fs-5"></iconify-icon>
                            <span>Wireframes & Prototypes</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-info fs-5"></iconify-icon>
                            <span>High-Fidelity Mockups</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-info fs-5"></iconify-icon>
                            <span>Responsive Design</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-info fs-5"></iconify-icon>
                            <span>Design System</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                  <div className="card h-100 bg-info border-0">
                    <div className="card-body d-flex flex-column gap-4 p-5">
                      <div>
                        <span className="badge bg-dark text-white mb-3">Mobile App Design</span>
                        <h3 className="mb-0 text-white">PKR 150,000+</h3>
                        <p className="text-white text-opacity-75 mt-2 mb-0">iOS & Android</p>
                      </div>
                      <p className="mb-0 text-white">Complete mobile app UI/UX design for both iOS and Android platforms.</p>
                      <div className="mt-auto">
                        <h6 className="mb-3 text-white">Includes:</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-white fs-5"></iconify-icon>
                            <span className="text-white">User Flow Mapping</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-white fs-5"></iconify-icon>
                            <span className="text-white">Interactive Prototypes</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-white fs-5"></iconify-icon>
                            <span className="text-white">Platform-Specific Design</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-white fs-5"></iconify-icon>
                            <span className="text-white">Usability Testing</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-white fs-5"></iconify-icon>
                            <span className="text-white">Developer Handoff</span>
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
                        <span className="badge bg-success text-white mb-3">SaaS Dashboard</span>
                        <h3 className="mb-0">PKR 200,000+</h3>
                        <p className="text-muted mt-2 mb-0">Complex applications</p>
                      </div>
                      <p className="mb-0">Design for complex SaaS products, admin panels, and enterprise applications.</p>
                      <div className="mt-auto">
                        <h6 className="mb-3">Includes:</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-success fs-5"></iconify-icon>
                            <span>Information Architecture</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-success fs-5"></iconify-icon>
                            <span>Data Visualization</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-success fs-5"></iconify-icon>
                            <span>Component Library</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-success fs-5"></iconify-icon>
                            <span>Design Documentation</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-success fs-5"></iconify-icon>
                            <span>Ongoing Support</span>
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
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                Related <em className="font-instrument">Services</em>
              </h2>
              <div className="row justify-content-center">
                <div className="col-sm-6 col-md-4">
                  <Link href="/services/web-app-development" className="text-decoration-none">
                    <div className="card bg-danger-subtle" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                      <div className="card-body d-flex flex-column gap-11">
                        <iconify-icon icon="solar:window-frame-linear" className="fs-9 text-danger"></iconify-icon>
                        <div>
                          <h4 className="text-danger mb-2">Web Development</h4>
                          <p className="mb-0 text-dark">Turn your designs into fully functional websites and web apps.</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-6 col-md-4">
                  <Link href="/services/brand-strategy" className="text-decoration-none">
                    <div className="card bg-secondary-subtle" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                      <div className="card-body d-flex flex-column gap-11">
                        <iconify-icon icon="solar:palette-round-linear" className="fs-9 text-secondary"></iconify-icon>
                        <div>
                          <h4 className="text-secondary mb-2">Brand Strategy</h4>
                          <p className="mb-0 text-dark">Define your brand identity before designing your digital products.</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-6 col-md-4">
                  <Link href="/services/digital-marketing" className="text-decoration-none">
                    <div className="card bg-info-subtle" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                      <div className="card-body d-flex flex-column gap-11">
                        <iconify-icon icon="solar:gallery-wide-linear" className="fs-9 text-info"></iconify-icon>
                        <div>
                          <h4 className="text-info mb-2">Digital Marketing</h4>
                          <p className="mb-0 text-dark">Drive traffic and conversions to your beautifully designed product.</p>
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
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="get-in-touch position-relative overflow-hidden rounded-3 border px-4 py-5 py-lg-13 py-xl-14">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="d-flex flex-column gap-7 text-center">
                    <h2 className="mb-0">Let&apos;s Design Something <em className="font-instrument">Amazing</em></h2>
                    <p className="mb-0">Transform your digital product with user-centered design. Get a free UI/UX consultation from Dev Aspire today.</p>
                    <Link href="/contact" className="btn btn-dark mx-auto">
                      <span className="btn-text">Start Your Design Project</span>
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
