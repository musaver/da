import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';
import { locationServiceSchema, breadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: "Web Design & Development Services in Lahore - Dev Aspire",
  description:
    "Professional web design and development services in Lahore, Pakistan. Dev Aspire helps Lahore businesses with custom websites, e-commerce, and digital marketing solutions.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/location/lahore`,
    siteName: "Dev Aspire",
    title: "Web Design & Development in Lahore - Dev Aspire",
    description:
      "Professional web design and development services in Lahore. Custom websites, apps, and digital marketing for Lahore businesses.",
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "Dev Aspire - Lahore Web Design Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Web Design & Development in Lahore - Dev Aspire",
    description:
      "Professional web design and development services in Lahore, Pakistan. Custom solutions for Lahore businesses.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/location/lahore`,
  },
};

const schema = locationServiceSchema('Lahore');
const breadcrumb = breadcrumbSchema('Lahore Services', '/location/lahore');

export default function LahoreLocation() {
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
                Web Design & Development Services in <em className="font-instrument fw-normal">Lahore</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="col-xl-7">
                  <p className="text-center mb-0">
                    Dev Aspire delivers professional web design, development, and digital marketing services to businesses across Lahore. From Gulberg to Johar Town, we help Lahore's creative businesses and enterprises build exceptional digital products.
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

        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Why Lahore Businesses Choose <em className="font-instrument">Dev Aspire</em>
              </h2>
              <div className="row g-4 g-lg-5">
                {[
                  { icon: 'solar:palette-linear', title: 'Creative Excellence', desc: 'We match Lahore&apos;s creative spirit with innovative designs and modern development techniques that make your brand stand out.' },
                  { icon: 'solar:diploma-linear', title: 'EdTech & Education', desc: 'Specialized expertise in building platforms for Lahore&apos;s thriving education sector, from schools to online learning platforms.' },
                  { icon: 'solar:money-bag-linear', title: 'Fashion & E-Commerce', desc: 'Perfect solutions for Lahore&apos;s fashion industry with beautiful e-commerce stores that showcase your products.' },
                  { icon: 'solar:cpu-bolt-linear', title: 'Tech Startups', desc: 'Supporting Lahore&apos;s growing startup ecosystem with scalable web and mobile applications built for growth.' },
                ].map((item, idx) => (
                  <div key={idx} className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                    <div className="card h-100 border-0 shadow-sm transition-all">
                      <div className="card-body d-flex flex-column gap-4 p-4 p-lg-5">
                        <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 text-primary" style={{ width: '56px', height: '56px' }}>
                          <iconify-icon icon={item.icon} style={{ fontSize: '28px' }}></iconify-icon>
                        </div>
                        <div className="d-flex flex-column gap-2">
                          <h4 className="mb-0 fw-semibold">{item.title}</h4>
                          <p className="mb-0 text-muted fs-6">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Our Services for <em className="font-instrument">Lahore Businesses</em>
              </h2>
              <div className="row">
                <div className="col-sm-6 col-md-4 col-lg">
                  <Link href="/services/web-app-development" className="text-decoration-none">
                    <div className="card bg-danger-subtle" data-aos="fade-up" data-aos-delay="100">
                      <div className="card-body d-flex flex-column gap-7">
                        <iconify-icon icon="solar:window-frame-linear" className="fs-9 text-danger"></iconify-icon>
                        <div>
                          <h4 className="text-danger mb-0">Web Development</h4>
                          <p className="mb-0 text-dark mt-2">Custom websites for Lahore's diverse businesses</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-6 col-md-4 col-lg">
                  <Link href="/services/shopify-development" className="text-decoration-none">
                    <div className="card bg-success-subtle" data-aos="fade-up" data-aos-delay="200">
                      <div className="card-body d-flex flex-column gap-7">
                        <iconify-icon icon="solar:chart-linear" className="fs-9 text-success"></iconify-icon>
                        <div>
                          <h4 className="text-success mb-0">E-Commerce</h4>
                          <p className="mb-0 text-dark mt-2">Fashion and retail stores for Lahore brands</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-6 col-md-4 col-lg">
                  <Link href="/services/digital-marketing" className="text-decoration-none">
                    <div className="card bg-info-subtle" data-aos="fade-up" data-aos-delay="300">
                      <div className="card-body d-flex flex-column gap-7">
                        <iconify-icon icon="solar:gallery-wide-linear" className="fs-9 text-info"></iconify-icon>
                        <div>
                          <h4 className="text-info mb-0">Digital Marketing</h4>
                          <p className="mb-0 text-dark mt-2">SEO and marketing for Lahore audiences</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-6 col-md-4 col-lg">
                  <Link href="/services/ui-ux-design" className="text-decoration-none">
                    <div className="card bg-light-orange" data-aos="fade-up" data-aos-delay="400">
                      <div className="card-body d-flex flex-column gap-7">
                        <iconify-icon icon="solar:magic-stick-3-linear" className="fs-9 text-orange"></iconify-icon>
                        <div>
                          <h4 className="text-orange mb-0">UI/UX Design</h4>
                          <p className="mb-0 text-dark mt-2">Beautiful designs that convert Lahore visitors</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-6 col-md-4 col-lg">
                  <Link href="/services/brand-strategy" className="text-decoration-none">
                    <div className="card bg-secondary-subtle" data-aos="fade-up" data-aos-delay="500">
                      <div className="card-body d-flex flex-column gap-7">
                        <iconify-icon icon="solar:palette-round-linear" className="fs-9 text-secondary"></iconify-icon>
                        <div>
                          <h4 className="text-secondary mb-0">Brand Strategy</h4>
                          <p className="mb-0 text-dark mt-2">Stand out in Lahore's creative market</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Industries We Serve in <em className="font-instrument">Lahore</em>
              </h2>
              <div className="row g-4 g-lg-5">
                {[
                  { icon: 'solar:diploma-linear', title: 'Education & EdTech', desc: 'Learning platforms for Lahore&apos;s schools, universities, and online education startups.' },
                  { icon: 'solar:t-shirt-linear', title: 'Fashion & Apparel', desc: 'E-commerce websites for Lahore&apos;s fashion designers and clothing brands.' },
                  { icon: 'solar:buildings-3-linear', title: 'Real Estate', desc: 'Property portals for DHA, Bahria Town, and other Lahore housing societies.' },
                  { icon: 'solar:chef-hat-minimalistic-linear', title: 'Food & Restaurants', desc: 'Online menus and ordering for Lahore&apos;s famous food scene from MM Alam to Liberty.' },
                  { icon: 'solar:heart-pulse-linear', title: 'Healthcare', desc: 'Medical websites and appointment systems for Lahore&apos;s hospitals and clinics.' },
                  { icon: 'solar:rocket-2-linear', title: 'Tech Startups', desc: 'MVPs and scalable platforms for Lahore&apos;s growing startup ecosystem.' },
                ].map((industry, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                    <div className="card h-100 border-0 shadow-sm hover-lift transition-all">
                      <div className="card-body d-flex flex-column gap-4 p-4 p-lg-5">
                        <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10 text-primary" style={{ width: '56px', height: '56px' }}>
                          <iconify-icon icon={industry.icon} style={{ fontSize: '28px' }}></iconify-icon>
                        </div>
                        <div className="d-flex flex-column gap-2">
                          <h4 className="mb-0 fw-semibold">{industry.title}</h4>
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

        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="d-flex flex-column gap-5" data-aos="fade-up">
                  <h2 className="mb-0 text-center">
                    Lahore's Vibrant <em className="font-instrument">Digital Scene</em>
                  </h2>
                  <p className="fs-5">
                    Lahore, Pakistan's cultural and creative capital, is rapidly becoming a digital powerhouse. With a population of over 11 million and home to Pakistan's most prestigious universities (LUMS, UET, PU), Lahore boasts a talented pool of young professionals driving digital innovation.
                  </p>
                  <p className="fs-5">
                    The city's thriving fashion industry, creative agencies, education sector, and growing startup ecosystem create diverse opportunities for web design and development. From Gulberg's fashion boutiques going online to Arfa Tower's tech startups launching SaaS products, Lahore businesses are investing heavily in digital transformation.
                  </p>
                  <p className="fs-5">
                    Dev Aspire has partnered with numerous Lahore clients in fashion, education, healthcare, and technology, helping them leverage digital solutions to reach wider audiences and scale their businesses across Pakistan and internationally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Frequently Asked <em className="font-instrument">Questions</em>
              </h2>
              <div className="accordion accordion-flush d-flex flex-column gap-3" id="lahoreFAQ">
                {[
                  { id: 'One', question: 'Do you have an office in Lahore?', answer: 'We are based in Islamabad but work seamlessly with Lahore clients through online collaboration. Many Lahore businesses prefer this arrangement as it provides access to our full team without geographic constraints. We use video calls, Slack, and project management tools for smooth communication.', expanded: true },
                  { id: 'Two', question: 'How much does web design cost for Lahore businesses?', answer: 'Web design costs in Lahore range from PKR 200,000 for basic websites to PKR 1,000,000+ for complex applications. Fashion e-commerce stores typically cost PKR 300,000-600,000. Education platforms range from PKR 500,000-1,500,000. We provide detailed quotes tailored to your specific needs and budget.', expanded: false },
                  { id: 'Three', question: 'Can you help Lahore fashion brands sell online?', answer: 'Yes! We specialize in e-commerce solutions for Lahore&apos;s fashion industry. We build beautiful Shopify stores with features like size guides, lookbooks, Instagram integration, and payment gateways (JazzCash, Easypaisa, Stripe). We understand fashion e-commerce&apos;s unique requirements and Pakistani buyer preferences.', expanded: false },
                  { id: 'Four', question: 'Do you build educational platforms for Lahore schools?', answer: 'Absolutely! We have experience building learning management systems (LMS), online course platforms, and school websites for Lahore&apos;s education sector. Features include student portals, online assignments, video lessons, quizzes, parent dashboards, and fee management systems.', expanded: false },
                  { id: 'Five', question: 'What payment methods do you accept?', answer: 'We accept bank transfers (Pakistani banks), JazzCash, Easypaisa, and international payments via PayPal or Stripe. We offer milestone-based payments (40% upfront, 30% mid-project, 30% completion) for larger projects and monthly retainers for ongoing services.', expanded: false },
                  { id: 'Six', question: 'How long does a typical project take?', answer: 'Project timelines vary: basic websites (3-4 weeks), fashion e-commerce stores (4-6 weeks), education platforms (8-12 weeks), and custom applications (12+ weeks). We provide detailed timelines in proposals and keep you updated with regular progress reports throughout development.', expanded: false },
                ].map((faq, idx) => (
                  <div key={idx} className="accordion-item border rounded-1" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                    <h2 className="accordion-header">
                      <button className={`accordion-button fs-7 fw-medium ${!faq.expanded ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse"
                        data-bs-target={`#lahoreCollapse${faq.id}`} aria-expanded={faq.expanded} aria-controls={`lahoreCollapse${faq.id}`}>
                        {faq.question}
                      </button>
                    </h2>
                    <div id={`lahoreCollapse${faq.id}`} className={`accordion-collapse collapse ${faq.expanded ? 'show' : ''}`} data-bs-parent="#lahoreFAQ">
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

        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="get-in-touch position-relative overflow-hidden rounded-3 border px-4 py-5 py-lg-13 py-xl-14">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="d-flex flex-column gap-7 text-center">
                    <h2 className="mb-0">Ready to Grow Your Lahore <em className="font-instrument">Business Online?</em></h2>
                    <p className="mb-0">Let's discuss how Dev Aspire can help your Lahore business with professional web design and development. Get a free consultation today.</p>
                    <Link href="/contact" className="btn btn-dark mx-auto">
                      <span className="btn-text">Get Your Free Consultation</span>
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
