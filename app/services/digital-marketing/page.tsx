import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { serviceSchema, breadcrumbSchema } from '@/lib/structured-data';
import { SITE_URL } from '@/lib/site';

export const metadata = {
  title: "Digital Marketing Services in Pakistan - Dev Aspire",
  description:
    "Results-driven digital marketing services in Pakistan by Dev Aspire. SEO, social media marketing, PPC, and content marketing to grow your business.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/services/digital-marketing`,
    siteName: "Dev Aspire",
    title: "Digital Marketing Services in Pakistan - Dev Aspire",
    description:
      "Results-driven digital marketing services in Pakistan by Dev Aspire. SEO, social media marketing, PPC advertising, and content marketing to grow your business.",
    images: [{ url: `${SITE_URL}/assets/images/logos/logo-dark.svg`, width: 1200, height: 630, alt: "Digital Marketing Services - Dev Aspire Pakistan" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Digital Marketing Services in Pakistan - Dev Aspire",
    description: "Results-driven digital marketing in Pakistan. SEO, social media, PPC, and content marketing services by Dev Aspire to grow your business online.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: { canonical: `${SITE_URL}/services/digital-marketing` },
};

const schema = serviceSchema(
  'Digital Marketing Services',
  'Comprehensive digital marketing services including SEO, social media marketing, Google Ads PPC campaigns, content marketing, and email marketing for businesses in Pakistan.'
);
const breadcrumb = breadcrumbSchema('Digital Marketing', '/services/digital-marketing');

export default function DigitalMarketing() {
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
                Digital Marketing Services in <em className="font-instrument fw-normal">Pakistan</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="col-xl-7">
                  <p className="text-center mb-0">
                    Grow your business with data-driven digital marketing strategies. Dev Aspire offers comprehensive SEO, social media marketing,
                    PPC advertising, and content marketing services tailored for the Pakistani market.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                <Link href="/contact" className="btn btn-primary py-md-7 pe-md-14">
                  <span className="btn-text">Get a Free Marketing Audit</span>
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
                Our Digital Marketing <em className="font-instrument">Services</em>
              </h2>
              <div className="row">
                {[
                  { title: 'Search Engine Optimization (SEO)', desc: 'Dominate Google search results in Pakistan with our proven SEO strategies. We handle on-page optimization, technical SEO, link building, and local SEO to drive organic traffic to your website.', color: 'info', icon: 'solar:magnifer-linear' },
                  { title: 'Social Media Marketing', desc: 'Build a strong social media presence across Facebook, Instagram, LinkedIn, and TikTok. Our social media strategies engage Pakistani audiences and convert followers into loyal customers.', color: 'secondary', icon: 'solar:share-circle-linear' },
                  { title: 'PPC & Google Ads Management', desc: 'Maximize your ROI with targeted pay-per-click campaigns. We manage Google Ads and social media ad campaigns optimized for the Pakistani market and beyond.', color: 'orange', icon: 'solar:target-linear' },
                  { title: 'Content Marketing & Copywriting', desc: 'Engage your audience with SEO-optimized content. From blog posts and articles to email newsletters, we create content that ranks on Google and resonates with Pakistani consumers.', color: 'success', icon: 'solar:pen-new-round-linear' },
                  { title: 'Email Marketing & Automation', desc: 'Nurture leads and drive repeat business with automated email campaigns, drip sequences, and personalized email marketing strategies designed for high conversion.', color: 'danger', icon: 'solar:letter-linear' },
                  { title: 'Analytics & Performance Reporting', desc: 'Track every click, conversion, and rupee spent. We provide detailed monthly analytics reports so you can see exactly how your digital marketing investment is performing.', color: 'primary', icon: 'solar:graph-new-linear' },
                ].map((service, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100} data-aos-duration="1000">
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
                Our Digital Marketing <em className="font-instrument">Process</em>
              </h2>
              <div className="row">
                {[
                  { step: '01', title: 'Audit & Strategy', desc: 'We analyze your current online presence, competitors, and target audience in Pakistan to create a customized digital marketing strategy.' },
                  { step: '02', title: 'Campaign Setup', desc: 'We set up SEO optimization, ad campaigns, social media accounts, analytics tracking, and all necessary tools for success.' },
                  { step: '03', title: 'Execution & Optimization', desc: 'We launch campaigns and continuously optimize based on performance data, A/B testing, and market trends to maximize ROI.' },
                  { step: '04', title: 'Reporting & Growth', desc: 'You receive detailed monthly reports showing traffic, leads, conversions, and recommendations for continued growth.' },
                ].map((item, idx) => (
                  <div key={idx} className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100} data-aos-duration="1000">
                    <div className="card h-100">
                      <div className="card-body d-flex flex-column gap-3">
                        <span className="fs-11 fw-bold text-info opacity-25">{item.step}</span>
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

        {/* Why Digital Marketing Matters */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Why Digital Marketing Matters for <em className="font-instrument">Pakistani Businesses</em>
              </h2>
              <div className="row">
                {[
                  { stat: '80M+', label: 'Internet users in Pakistan actively searching for products and services online' },
                  { stat: '71%', label: 'Of consumers research online before making a purchase decision in Pakistan' },
                  { stat: '5x', label: 'Higher ROI from digital marketing compared to traditional advertising methods' },
                ].map((item, idx) => (
                  <div key={idx} className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                    <div className="card h-100 text-center">
                      <div className="card-body d-flex flex-column gap-3">
                        <h2 className="mb-0 text-primary">{item.stat}</h2>
                        <p className="mb-0">{item.label}</p>
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
              <div className="accordion accordion-flush d-flex flex-column gap-3" id="digitalMarketingFAQ">
                {[
                  { id: 'One', question: 'How much do digital marketing services cost in Pakistan?', answer: 'Digital marketing costs vary based on scope and channels. SEO packages start from PKR 50,000/month, social media management from PKR 40,000/month, and PPC campaigns from PKR 30,000/month (plus ad spend). We offer customized packages that fit your budget and business goals.', expanded: true },
                  { id: 'Two', question: 'How long does it take to see results from SEO?', answer: 'SEO is a long-term strategy. You can expect to see initial improvements in 2-3 months and significant results in 4-6 months. Rankings depend on competition, keywords, and your website&apos;s current state. We provide monthly reports so you can track progress throughout.', expanded: false },
                  { id: 'Three', question: 'Do you work with businesses outside of Pakistan?', answer: 'Yes! While we specialize in the Pakistani market (Karachi, Lahore, Islamabad), we serve clients globally. We adapt our strategies for international markets, handling different time zones, languages, and search engine requirements for any geography.', expanded: false },
                  { id: 'Four', question: 'What is the difference between SEO and Google Ads?', answer: 'SEO (organic) takes longer but provides sustainable, free traffic once you rank. Google Ads (PPC) delivers immediate traffic but requires ongoing ad spend. We recommend a balanced approach: PPC for quick results while building long-term SEO rankings.', expanded: false },
                  { id: 'Five', question: 'Can you guarantee first page rankings on Google?', answer: 'No reputable agency can guarantee specific rankings as Google&apos;s algorithm is complex and constantly changing. However, we have a proven track record of achieving first-page rankings for our clients in Pakistan across competitive keywords through ethical white-hat SEO practices.', expanded: false },
                  { id: 'Six', question: 'Do you provide social media content creation?', answer: 'Yes, our social media marketing packages include content creation: graphics, captions, video editing, and posting schedules. We create content tailored to Pakistani audiences while maintaining your brand voice across Facebook, Instagram, LinkedIn, and TikTok.', expanded: false },
                  { id: 'Seven', question: 'How do you measure digital marketing success?', answer: 'We track key metrics including website traffic, Google rankings, conversion rates, cost per lead, ROI, engagement rates, and more. You receive detailed monthly reports with insights and recommendations. We focus on metrics that directly impact your business revenue.', expanded: false },
                ].map((faq, idx) => (
                  <div key={idx} className="accordion-item border rounded-1 position-relative overflow-hidden" data-aos="fade-up"
                    data-aos-delay={(idx + 1) * 100} data-aos-duration="1000">
                    <h2 className="accordion-header">
                      <button className={`accordion-button fs-7 fw-medium ${!faq.expanded ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse"
                        data-bs-target={`#digitalCollapse${faq.id}`} aria-expanded={faq.expanded} aria-controls={`digitalCollapse${faq.id}`}>
                        {faq.question}
                      </button>
                    </h2>
                    <div id={`digitalCollapse${faq.id}`} className={`accordion-collapse collapse ${faq.expanded ? 'show' : ''}`} data-bs-parent="#digitalMarketingFAQ">
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
                    Digital Marketing <em className="font-instrument">Packages</em>
                  </h2>
                  <p className="text-center mt-4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    Affordable digital marketing services for Pakistani businesses. Choose a package that fits your budget and goals.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                  <div className="card h-100 border-0">
                    <div className="card-body d-flex flex-column gap-4 p-5">
                      <div>
                        <span className="badge bg-primary text-white mb-3">SEO Package</span>
                        <h3 className="mb-0">PKR 50,000/mo</h3>
                        <p className="text-muted mt-2 mb-0">Local SEO focused</p>
                      </div>
                      <p className="mb-0">Improve your Google rankings and get more organic traffic from Pakistani customers.</p>
                      <div className="mt-auto">
                        <h6 className="mb-3">Includes:</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-primary fs-5"></iconify-icon>
                            <span>Keyword Research</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-primary fs-5"></iconify-icon>
                            <span>On-Page Optimization</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-primary fs-5"></iconify-icon>
                            <span>Content Writing</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-primary fs-5"></iconify-icon>
                            <span>Local Citations</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-primary fs-5"></iconify-icon>
                            <span>Monthly Reports</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                  <div className="card h-100 bg-success border-0">
                    <div className="card-body d-flex flex-column gap-4 p-5">
                      <div>
                        <span className="badge bg-dark text-white mb-3">Social Media</span>
                        <h3 className="mb-0 text-white">PKR 40,000/mo</h3>
                        <p className="text-white text-opacity-75 mt-2 mb-0">Full management</p>
                      </div>
                      <p className="mb-0 text-white">Professional social media management for Facebook, Instagram, and LinkedIn.</p>
                      <div className="mt-auto">
                        <h6 className="mb-3 text-white">Includes:</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-white fs-5"></iconify-icon>
                            <span className="text-white">Content Creation</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-white fs-5"></iconify-icon>
                            <span className="text-white">20 Posts/Month</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-white fs-5"></iconify-icon>
                            <span className="text-white">Community Management</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-white fs-5"></iconify-icon>
                            <span className="text-white">Performance Analytics</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-white fs-5"></iconify-icon>
                            <span className="text-white">2 Platforms</span>
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
                        <span className="badge bg-info text-white mb-3">Paid Ads</span>
                        <h3 className="mb-0">PKR 35,000/mo</h3>
                        <p className="text-muted mt-2 mb-0">+ ad budget</p>
                      </div>
                      <p className="mb-0">Google Ads and Facebook Ads management to drive targeted traffic and sales.</p>
                      <div className="mt-auto">
                        <h6 className="mb-3">Includes:</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-info fs-5"></iconify-icon>
                            <span>Campaign Setup</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-info fs-5"></iconify-icon>
                            <span>Ad Copy & Design</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-info fs-5"></iconify-icon>
                            <span>A/B Testing</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-info fs-5"></iconify-icon>
                            <span>Conversion Tracking</span>
                          </li>
                          <li className="d-flex gap-2">
                            <iconify-icon icon="solar:check-circle-linear" className="text-info fs-5"></iconify-icon>
                            <span>Weekly Optimization</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                <p className="mb-3"><strong>Need a custom digital marketing strategy?</strong> We create tailored plans combining SEO, social media, and paid ads based on your business goals.</p>
                <Link href="/contact" className="btn btn-dark">
                  <span className="btn-text">Request Custom Plan</span>
                  <iconify-icon icon="solar:arrow-right-up-linear" className="btn-icon bg-white text-dark round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                </Link>
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
                  <Link href="/services/web-app-development" className="text-decoration-none">
                    <div className="card bg-danger-subtle" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                      <div className="card-body d-flex flex-column gap-11">
                        <iconify-icon icon="solar:window-frame-linear" className="fs-9 text-danger"></iconify-icon>
                        <div>
                          <h4 className="text-danger mb-2">Web Development</h4>
                          <p className="mb-0 text-dark">Build a high-converting website optimized for search engines and users.</p>
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
                          <p className="mb-0 text-dark">Define your brand positioning and messaging before marketing campaigns.</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-6 col-md-4">
                  <Link href="/services/ui-ux-design" className="text-decoration-none">
                    <div className="card bg-light-orange" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                      <div className="card-body d-flex flex-column gap-11">
                        <iconify-icon icon="solar:magic-stick-3-linear" className="fs-9 text-orange"></iconify-icon>
                        <div>
                          <h4 className="text-orange mb-2">UI/UX Design</h4>
                          <p className="mb-0 text-dark">Design conversion-optimized landing pages and user experiences.</p>
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
                    <h2 className="mb-0">Ready to Grow Your Business <em className="font-instrument">Online?</em></h2>
                    <p className="mb-0">Get a free digital marketing consultation and discover how Dev Aspire can help your business rank higher and convert more customers in Pakistan.</p>
                    <Link href="/contact" className="btn btn-dark mx-auto">
                      <span className="btn-text">Get Your Free Audit</span>
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
