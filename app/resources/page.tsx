import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata = {
  title: "Resources - Web Design & Development Guides | Dev Aspire",
  description:
    "Free resources from Dev Aspire: web design guides, development tutorials, case studies, and expert insights for businesses in Pakistan.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/resources`,
    siteName: "Dev Aspire",
    title: "Resources - Web Design & Development Guides | Dev Aspire",
    description:
      "Free web design and development resources, case studies, and guides from Dev Aspire to help Pakistani businesses succeed online.",
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "Dev Aspire Resources - Web Design Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Resources - Dev Aspire",
    description:
      "Free web design and development resources, case studies, and guides for Pakistani businesses.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/resources`,
  },
};

export default function Resources() {
  return (
    <>
      <Header />

      <div className="page-wrapper overflow-hidden">
        {/* Banner Section */}
        <section className="banner-section bg-gradient-shaph position-relative pt-14 pt-md-15 pb-11 pb-lg-12 pb-xl-13">
          <div className="container position-relative z-3">
            <div className="d-flex flex-column gap-10">
              <h1 className="text-center mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                Learn & <em className="font-instrument fw-normal">Grow</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="col-xl-7">
                  <p className="text-center mb-0">
                    Access free resources, guides, case studies, and expert insights from Dev Aspire to help your business succeed online in Pakistan and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <div className="row">
                <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                  <div className="card bg-primary-subtle h-100 border-0">
                    <div className="card-body d-flex flex-column gap-4 p-5">
                      <iconify-icon icon="solar:document-text-linear" className="fs-9 text-primary"></iconify-icon>
                      <h2 className="mb-0 text-primary">Blog & Articles</h2>
                      <p className="mb-0 fs-5">
                        Expert insights on web design, development, digital marketing, and business growth strategies tailored for Pakistani businesses. Learn best practices, trends, and proven techniques.
                      </p>
                      <p className="mb-0 text-muted fst-italic">
                        Coming Soon - We're working on creating comprehensive guides and tutorials for you.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                  <div className="card bg-success-subtle h-100 border-0">
                    <div className="card-body d-flex flex-column gap-4 p-5">
                      <iconify-icon icon="solar:case-round-linear" className="fs-9 text-success"></iconify-icon>
                      <h2 className="mb-0 text-success">Case Studies</h2>
                      <p className="mb-0 fs-5">
                        Detailed breakdowns of our successful projects showcasing how we helped Pakistani and international businesses achieve their goals through strategic design and development.
                      </p>
                      <p className="mb-0 text-muted fst-italic">
                        Coming Soon - We're documenting our client success stories for you to explore.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                  <Link href="/faq" className="text-decoration-none">
                    <div className="card bg-info-subtle h-100 border-0">
                      <div className="card-body d-flex flex-column gap-4 p-5">
                        <iconify-icon icon="solar:question-circle-linear" className="fs-9 text-info"></iconify-icon>
                        <h2 className="mb-0 text-info">Frequently Asked Questions</h2>
                        <p className="mb-0 fs-5">
                          Get answers to common questions about web design, development costs, timelines, processes, and working with Dev Aspire in Pakistan.
                        </p>
                        <div className="d-flex align-items-center gap-2 text-info mt-2">
                          <span className="fw-medium">Explore FAQs</span>
                          <iconify-icon icon="solar:arrow-right-linear" className="fs-6"></iconify-icon>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                  <Link href="/how-it-works" className="text-decoration-none">
                    <div className="card bg-orange text-white h-100 border-0">
                      <div className="card-body d-flex flex-column gap-4 p-5">
                        <iconify-icon icon="solar:settings-linear" className="fs-9 text-white"></iconify-icon>
                        <h2 className="mb-0 text-white">How We Work</h2>
                        <p className="mb-0 fs-5">
                          Discover our proven 8-step process from initial consultation to launch and ongoing support. See exactly how we deliver exceptional results for every project.
                        </p>
                        <div className="d-flex align-items-center gap-2 text-white mt-2">
                          <span className="fw-medium">Learn Our Process</span>
                          <iconify-icon icon="solar:arrow-right-linear" className="fs-6"></iconify-icon>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Guides */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Quick <em className="font-instrument">Guides</em>
              </h2>
              <div className="row">
                {[
                  { title: 'Choosing a Web Design Agency', desc: 'Key factors to consider when selecting a web design partner in Pakistan including portfolio, pricing, and process.', icon: 'solar:checklist-linear' },
                  { title: 'Website Cost Calculator', desc: 'Understand what factors influence web design costs in Pakistan and how to budget for your project effectively.', icon: 'solar:calculator-linear' },
                  { title: 'SEO Basics for Pakistani Businesses', desc: 'Essential SEO strategies to help your website rank higher on Google and attract more customers in Pakistan.', icon: 'solar:magnifer-bug-linear' },
                  { title: 'Mobile App vs Web App', desc: 'Decide which solution is right for your business: native mobile app, web app, or progressive web app (PWA).', icon: 'solar:smartphone-2-linear' },
                  { title: 'E-Commerce Platform Comparison', desc: 'Compare Shopify, WooCommerce, and custom solutions to find the best e-commerce platform for your online store.', icon: 'solar:cart-large-2-linear' },
                  { title: 'Website Maintenance Checklist', desc: 'Essential tasks to keep your website secure, fast, and up-to-date after launch including backups and updates.', icon: 'solar:shield-check-linear' },
                ].map((guide, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                    <div className="card h-100">
                      <div className="card-body d-flex flex-column gap-3">
                        <iconify-icon icon={guide.icon} className="fs-8 text-primary"></iconify-icon>
                        <h4 className="mb-0">{guide.title}</h4>
                        <p className="mb-0">{guide.desc}</p>
                        <span className="text-muted fst-italic mt-auto">Coming Soon</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tools & Downloads */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Free Tools & <em className="font-instrument">Templates</em>
              </h2>
              <div className="row justify-content-center">
                {[
                  { title: 'Website Planning Template', desc: 'Organize your website requirements, content, and goals with our free planning template.', icon: 'solar:document-add-linear', color: 'primary' },
                  { title: 'SEO Checklist', desc: 'Complete pre-launch SEO checklist to ensure your website is optimized for search engines.', icon: 'solar:list-check-linear', color: 'success' },
                  { title: 'Brand Guidelines Template', desc: 'Document your brand colors, fonts, logos, and usage guidelines with our template.', icon: 'solar:palette-round-linear', color: 'orange' },
                  { title: 'Project Brief Template', desc: 'Communicate your project requirements clearly to agencies with our structured brief template.', icon: 'solar:clipboard-text-linear', color: 'info' },
                ].map((tool, idx) => (
                  <div key={idx} className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                    <div className={`card bg-${tool.color}-subtle h-100 text-center`}>
                      <div className="card-body d-flex flex-column gap-3 align-items-center">
                        <iconify-icon icon={tool.icon} className={`fs-8 text-${tool.color}`}></iconify-icon>
                        <h5 className="mb-0">{tool.title}</h5>
                        <p className="mb-0">{tool.desc}</p>
                        <span className="text-muted fst-italic mt-auto">Coming Soon</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-10 py-lg-12 py-xl-13 bg-dark">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="d-flex flex-column gap-5" data-aos="fade-up">
                  <div>
                    <h2 className="mb-3 text-white">Stay Updated</h2>
                    <p className="mb-0 text-white text-opacity-75">
                      Get notified when we publish new guides, case studies, and resources. Join our newsletter for exclusive insights and tips.
                    </p>
                  </div>
                  <div className="d-flex flex-column gap-3">
                    <Link href="/contact" className="btn btn-white mx-auto">
                      <span className="btn-text">Subscribe to Newsletter</span>
                      <iconify-icon icon="solar:letter-linear" className="btn-icon bg-dark text-white round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                    </Link>
                    <p className="mb-0 text-white text-opacity-50 fs-4">Coming Soon - Newsletter launching in 2026</p>
                  </div>
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
                    <h2 className="mb-0">Need Expert <em className="font-instrument">Guidance?</em></h2>
                    <p className="mb-0">Have a specific question about your project? Our team is here to help. Schedule a free consultation to discuss your needs.</p>
                    <Link href="/contact" className="btn btn-dark mx-auto">
                      <span className="btn-text">Talk to an Expert</span>
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
