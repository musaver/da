import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { serviceSchema, breadcrumbSchema } from '@/lib/structured-data';
import { SITE_URL } from '@/lib/site';

export const metadata = {
  title: "Shopify Development Services in Pakistan - Dev Aspire",
  description:
    "Custom Shopify development services in Pakistan by Dev Aspire. Store setup, theme development, app integration, and e-commerce optimization.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/services/shopify-development`,
    siteName: "Dev Aspire",
    title: "Shopify Development Services in Pakistan - Dev Aspire",
    description:
      "Custom Shopify development in Pakistan. Store setup, theme development, app integration, and e-commerce optimization by Dev Aspire for growing businesses.",
    images: [{ url: `${SITE_URL}/assets/images/logos/logo-dark.svg`, width: 1200, height: 630, alt: "Shopify Development Services - Dev Aspire Pakistan" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Shopify Development Services in Pakistan - Dev Aspire",
    description: "Custom Shopify development services in Pakistan. Store setup, theme development, and app integration by Dev Aspire for growing e-commerce businesses.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: { canonical: `${SITE_URL}/services/shopify-development` },
};

const schema = serviceSchema(
  'Shopify Development Services',
  'Custom Shopify development services including store setup, theme customization, Shopify app development, payment gateway integration, and e-commerce optimization in Pakistan.'
);
const breadcrumb = breadcrumbSchema('Shopify Development', '/services/shopify-development');

export default function ShopifyDevelopment() {
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
                Shopify Development Services in <em className="font-instrument fw-normal">Pakistan</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="col-xl-7">
                  <p className="text-center mb-0">
                    Launch and scale your e-commerce business with Dev Aspire&apos;s expert Shopify development services. We build high-converting
                    Shopify stores with custom themes, apps, and integrations tailored for the Pakistani and global market.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                <Link href="/contact" className="btn btn-primary py-md-7 pe-md-14">
                  <span className="btn-text">Get a Free Store Consultation</span>
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
                Our Shopify Development <em className="font-instrument">Services</em>
              </h2>
              <div className="row">
                {[
                  { title: 'Shopify Store Setup & Configuration', desc: 'Complete store setup including domain configuration, payment gateways (JazzCash, Easypaisa, Stripe), shipping zones, and tax settings optimized for Pakistani e-commerce.', color: 'success', icon: 'solar:shop-linear' },
                  { title: 'Custom Shopify Theme Development', desc: 'Bespoke Shopify themes built from scratch using Liquid, HTML, CSS, and JavaScript that perfectly match your brand identity and convert visitors into customers.', color: 'info', icon: 'solar:palette-round-linear' },
                  { title: 'Shopify App Development', desc: 'Custom Shopify apps and integrations that extend your store functionality — from inventory management to custom checkout flows and loyalty programs.', color: 'orange', icon: 'solar:widget-add-linear' },
                  { title: 'Shopify Plus Development', desc: 'Enterprise-grade Shopify Plus solutions for high-volume businesses with custom scripts, advanced automation, and multi-channel selling capabilities.', color: 'secondary', icon: 'solar:star-shine-linear' },
                  { title: 'E-Commerce SEO Optimization', desc: 'On-page SEO optimization for your Shopify store including product page optimization, schema markup, site speed improvements, and content strategy to rank higher on Google Pakistan.', color: 'primary', icon: 'solar:magnifer-linear' },
                  { title: 'Store Migration to Shopify', desc: 'Seamless migration from WooCommerce, Magento, or other platforms to Shopify with zero data loss, URL redirects, and SEO preservation.', color: 'danger', icon: 'solar:transfer-horizontal-linear' },
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
                Our Shopify Development <em className="font-instrument">Process</em>
              </h2>
              <div className="row">
                {[
                  { step: '01', title: 'Discovery & Planning', desc: 'We understand your business goals, product catalog, target audience, and e-commerce strategy to plan the perfect Shopify solution for Pakistan and beyond.' },
                  { step: '02', title: 'Design & Development', desc: 'Our team creates custom Shopify themes, configures payment gateways, sets up shipping, and builds features tailored to your business needs.' },
                  { step: '03', title: 'Testing & Optimization', desc: 'We rigorously test every aspect of your store including checkout flow, mobile responsiveness, page speed, and SEO to ensure optimal performance.' },
                  { step: '04', title: 'Launch & Support', desc: 'After going live, we provide training, ongoing maintenance, marketing integrations, and continuous optimization to grow your sales.' },
                ].map((item, idx) => (
                  <div key={idx} className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100} data-aos-duration="1000">
                    <div className="card h-100">
                      <div className="card-body d-flex flex-column gap-3">
                        <span className="fs-11 fw-bold text-success opacity-25">{item.step}</span>
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

        {/* Why Shopify */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Why Choose Shopify for Your <em className="font-instrument">E-Commerce Business</em>
              </h2>
              <div className="row">
                {[
                  { title: 'Easy to Manage', desc: 'Shopify\'s intuitive admin panel lets you manage products, orders, and customers without any technical knowledge.' },
                  { title: 'Secure & Reliable', desc: 'PCI-DSS compliant hosting with 99.99% uptime, SSL certificates, and automatic security updates out of the box.' },
                  { title: 'Scalable Platform', desc: 'From your first sale to millions in revenue, Shopify scales with your business without performance issues.' },
                  { title: 'Global Payments', desc: 'Accept payments via JazzCash, Easypaisa, Stripe, PayPal, and 100+ other payment providers for Pakistani and international customers.' },
                ].map((item, idx) => (
                  <div key={idx} className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
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
              <div className="accordion accordion-flush d-flex flex-column gap-3" id="shopifyFAQ">
                {[
                  { id: 'One', question: 'How much does Shopify development cost in Pakistan?', answer: 'Shopify development costs range from PKR 150,000 for basic store setup with a premium theme to PKR 500,000+ for custom theme development. This includes store configuration, theme customization, payment gateway setup, and training. Shopify subscription itself starts at $39/month for the Basic plan.', expanded: true },
                  { id: 'Two', question: 'Can I integrate local Pakistani payment gateways?', answer: 'Yes! We integrate JazzCash, Easypaisa, and other local payment gateways alongside international options like Stripe, PayPal, and 2Checkout. This ensures Pakistani customers can pay using their preferred method while also accepting international payments.', expanded: false },
                  { id: 'Three', question: 'How long does it take to launch a Shopify store?', answer: 'A basic Shopify store can be launched in 2-3 weeks. Custom theme development takes 4-6 weeks. This includes design, development, product upload, payment setup, and testing. We can work faster if you have an urgent timeline.', expanded: false },
                  { id: 'Four', question: 'Do you migrate existing stores to Shopify?', answer: 'Yes! We migrate stores from WooCommerce, Magento, BigCommerce, or any platform to Shopify. We transfer all products, customers, orders, and content while preserving SEO rankings with proper 301 redirects. Migration typically takes 1-2 weeks depending on store size.', expanded: false },
                  { id: 'Five', question: 'Can you develop custom Shopify apps?', answer: 'Absolutely! We build custom Shopify apps for unique business needs: custom checkout flows, inventory management systems, loyalty programs, subscription billing, and integrations with third-party systems. Custom apps start from PKR 300,000 depending on complexity.', expanded: false },
                  { id: 'Six', question: 'Do you provide ongoing Shopify maintenance?', answer: 'Yes, we offer monthly retainer packages for ongoing support including theme updates, bug fixes, adding new features, SEO optimization, and speed improvements. Maintenance packages start from PKR 25,000/month based on your needs.', expanded: false },
                  { id: 'Seven', question: 'Is Shopify good for small businesses in Pakistan?', answer: 'Yes! Shopify is perfect for Pakistani startups and small businesses. It\'s cost-effective (starting at $39/month), requires no technical knowledge to manage, handles all hosting and security, and scales as you grow. You can start small and upgrade as sales increase.', expanded: false },
                ].map((faq, idx) => (
                  <div key={idx} className="accordion-item border rounded-1 position-relative overflow-hidden" data-aos="fade-up"
                    data-aos-delay={(idx + 1) * 100} data-aos-duration="1000">
                    <h2 className="accordion-header">
                      <button className={`accordion-button fs-7 fw-medium ${!faq.expanded ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse"
                        data-bs-target={`#shopifyCollapse${faq.id}`} aria-expanded={faq.expanded} aria-controls={`shopifyCollapse${faq.id}`}>
                        {faq.question}
                      </button>
                    </h2>
                    <div id={`shopifyCollapse${faq.id}`} className={`accordion-collapse collapse ${faq.expanded ? 'show' : ''}`} data-bs-parent="#shopifyFAQ">
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

        {/* Related Services */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                Related <em className="font-instrument">Services</em>
              </h2>
              <div className="row justify-content-center">
                <div className="col-sm-6 col-md-4">
                  <Link href="/services/digital-marketing" className="text-decoration-none">
                    <div className="card bg-info-subtle" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                      <div className="card-body d-flex flex-column gap-11">
                        <iconify-icon icon="solar:gallery-wide-linear" className="fs-9 text-info"></iconify-icon>
                        <div>
                          <h4 className="text-info mb-2">Digital Marketing</h4>
                          <p className="mb-0 text-dark">Drive traffic and sales to your Shopify store with SEO and ads.</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-sm-6 col-md-4">
                  <Link href="/services/ui-ux-design" className="text-decoration-none">
                    <div className="card bg-light-orange" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                      <div className="card-body d-flex flex-column gap-11">
                        <iconify-icon icon="solar:magic-stick-3-linear" className="fs-9 text-orange"></iconify-icon>
                        <div>
                          <h4 className="text-orange mb-2">UI/UX Design</h4>
                          <p className="mb-0 text-dark">Design a beautiful, conversion-optimized Shopify store experience.</p>
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
                          <h4 className="text-danger mb-2">Custom E-Commerce</h4>
                          <p className="mb-0 text-dark">Need more than Shopify? We build custom e-commerce platforms.</p>
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
                    <h2 className="mb-0">Ready to Launch Your <em className="font-instrument">Shopify Store?</em></h2>
                    <p className="mb-0">Let Dev Aspire build a high-converting Shopify store that drives sales and grows your e-commerce business in Pakistan.</p>
                    <Link href="/contact" className="btn btn-dark mx-auto">
                      <span className="btn-text">Start Your Shopify Project</span>
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
