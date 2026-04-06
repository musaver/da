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
