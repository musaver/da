import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';
import { serviceSchema, breadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: "E-Commerce Website Design & Development Pakistan | Dev Aspire",
  description:
    "Professional e-commerce website design and development for Pakistani businesses. Shopify stores, custom marketplaces, and online shopping solutions with local payment integration.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/industries/ecommerce`,
    siteName: "Dev Aspire",
    title: "E-Commerce Website Design & Development Pakistan",
    description:
      "Build successful online stores with our e-commerce development services. Shopify, custom platforms, payment integration, and digital marketing.",
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "Dev Aspire - E-Commerce Development Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "E-Commerce Website Design & Development Pakistan",
    description:
      "Build successful online stores with our e-commerce development services.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/industries/ecommerce`,
  },
};

const schema = serviceSchema(
  'E-Commerce Website Development',
  'Professional e-commerce website design and development services for Pakistani businesses including Shopify stores, custom platforms, and marketplace solutions.'
);
const breadcrumb = breadcrumbSchema('E-Commerce', '/industries/ecommerce');

export default function EcommerceIndustry() {
  const challenges = [
    {
      challenge: 'Payment Gateway Integration',
      solution: 'We integrate local payment gateways like JazzCash, Easypaisa, and international options like PayPal and Stripe.',
      icon: 'solar:wallet-linear',
    },
    {
      challenge: 'Logistics & Shipping',
      solution: 'Integration with courier services like TCS, Leopards, and PostEx for seamless order fulfillment.',
      icon: 'solar:delivery-linear',
    },
    {
      challenge: 'Mobile Shopping',
      solution: 'Mobile-first designs optimized for the 90% of Pakistani shoppers who browse on smartphones.',
      icon: 'solar:smartphone-linear',
    },
    {
      challenge: 'Trust & Credibility',
      solution: 'Professional design, customer reviews, secure checkout, and trust badges to build buyer confidence.',
      icon: 'solar:shield-check-linear',
    },
  ];

  const features = [
    { feature: 'Product Catalog Management', icon: 'solar:widget-5-linear' },
    { feature: 'Shopping Cart & Checkout', icon: 'solar:cart-large-2-linear' },
    { feature: 'Payment Gateway Integration', icon: 'solar:card-linear' },
    { feature: 'Order Management System', icon: 'solar:clipboard-list-linear' },
    { feature: 'Inventory Management', icon: 'solar:box-linear' },
    { feature: 'Customer Accounts', icon: 'solar:user-circle-linear' },
    { feature: 'Shipping & Tax Calculation', icon: 'solar:calculator-linear' },
    { feature: 'Coupon & Discount System', icon: 'solar:ticket-linear' },
    { feature: 'Email Notifications', icon: 'solar:letter-linear' },
    { feature: 'Analytics & Reporting', icon: 'solar:chart-2-linear' },
    { feature: 'SEO Optimization', icon: 'solar:magnifer-linear' },
    { feature: 'Multi-Currency Support', icon: 'solar:dollar-linear' },
  ];

  const techStack = [
    { name: 'Shopify', desc: 'Full-featured platform for fast setup', logo: 'simple-icons:shopify' },
    { name: 'WooCommerce', desc: 'WordPress-based flexible solution', logo: 'simple-icons:woocommerce' },
    { name: 'Custom Development', desc: 'Next.js + Stripe for unique needs', logo: 'simple-icons:nextdotjs' },
    { name: 'Medusa', desc: 'Headless commerce platform', logo: 'simple-icons:medusa' },
  ];

  const faqs = [
    {
      question: 'How much does an e-commerce website cost in Pakistan?',
      answer:
        'Costs vary based on complexity. A basic Shopify store starts from PKR 200,000, WooCommerce sites range from PKR 250,000-500,000, and custom marketplace platforms start from PKR 800,000. We provide transparent quotes based on your specific requirements including number of products, custom features, and integrations needed.',
    },
    {
      question: 'Which platform is best for e-commerce in Pakistan?',
      answer:
        'It depends on your needs. Shopify is best for quick setup with lower technical complexity (PKR 15,000-30,000/month costs). WooCommerce offers more flexibility and lower monthly costs. Custom development is ideal for unique requirements or large-scale operations. We help you choose based on budget, technical expertise, and growth plans.',
    },
    {
      question: 'Can you integrate JazzCash and Easypaisa payment gateways?',
      answer:
        'Yes! We integrate all major Pakistani payment gateways including JazzCash, Easypaisa, and bank payment options. We also set up international gateways like PayPal, Stripe, and 2Checkout for businesses targeting global customers. All integrations follow security best practices.',
    },
    {
      question: 'How do you handle shipping and delivery in Pakistan?',
      answer:
        'We integrate with major courier services like TCS, Leopards, PostEx, and Trax for automated shipping calculations and order tracking. You can set up multiple shipping zones, flat rates, or free shipping thresholds. For Karachi, Lahore, and Islamabad, we can also integrate same-day delivery services.',
    },
    {
      question: 'Do you provide digital marketing for e-commerce stores?',
      answer:
        'Yes! We offer complete e-commerce marketing including SEO optimization, Google Shopping ads, Facebook/Instagram ads, email marketing, and conversion rate optimization. Most successful e-commerce businesses in Pakistan invest 10-15% of revenue in marketing to drive growth.',
    },
    {
      question: 'What about ongoing maintenance and support?',
      answer:
        'We offer comprehensive maintenance packages starting from PKR 15,000/month including updates, security monitoring, backup, bug fixes, and technical support. For growing stores, we provide managed services including inventory management, order processing assistance, and performance optimization.',
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
                  <li className="breadcrumb-item"><Link href="/industries">Industries</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">E-Commerce</li>
                </ol>
              </nav>

              <h1 className="mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                E-Commerce Website <em className="font-instrument fw-normal">Development</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="col-xl-9">
                  <p className="mb-0">
                    Launch and grow your online store with professional e-commerce development. From Shopify stores to custom
                    marketplace platforms, we build online shopping experiences that convert visitors into customers.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 justify-content-center flex-wrap" data-aos="fade-up" data-aos-delay="300">
                <Link href="/contact" className="btn btn-dark">
                  <span className="btn-text">Get Free Quote</span>
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

        {/* Challenges & Solutions */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                E-Commerce Challenges <em className="font-instrument">&</em> Our Solutions
              </h2>
              <div className="row g-4">
                {challenges.map((item, idx) => (
                  <div key={idx} className="col-md-6" data-aos="fade-up" data-aos-delay={idx * 100}>
                    <div className="card h-100">
                      <div className="card-body d-flex flex-column gap-3">
                        <iconify-icon icon={item.icon} className="fs-1 text-primary"></iconify-icon>
                        <h4 className="mb-0">{item.challenge}</h4>
                        <p className="mb-0 text-muted">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                E-Commerce <em className="font-instrument">Features</em> We Build
              </h2>
              <div className="row g-4">
                {features.map((item, idx) => (
                  <div key={idx} className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={idx * 50}>
                    <div className="d-flex align-items-center gap-3">
                      <iconify-icon icon={item.icon} className="fs-3 text-primary"></iconify-icon>
                      <span>{item.feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                E-Commerce <em className="font-instrument">Platforms</em> We Use
              </h2>
              <div className="row g-4">
                {techStack.map((tech, idx) => (
                  <div key={idx} className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={idx * 100}>
                    <div className="card h-100 text-center">
                      <div className="card-body d-flex flex-column gap-3 align-items-center">
                        <iconify-icon icon={tech.logo} className="fs-1 text-primary"></iconify-icon>
                        <h5 className="mb-0">{tech.name}</h5>
                        <p className="mb-0 text-muted fs-4">{tech.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Our E-Commerce <em className="font-instrument">Services</em>
              </h2>
              <div className="row g-4">
                {[
                  {
                    title: 'Shopify Development',
                    desc: 'Complete Shopify store setup including theme customization, app integration, and optimization.',
                    link: '/services/shopify-development',
                  },
                  {
                    title: 'Custom E-Commerce',
                    desc: 'Tailored marketplace platforms and multi-vendor stores built with Next.js and modern frameworks.',
                    link: '/services/web-app-development',
                  },
                  {
                    title: 'UI/UX Design',
                    desc: 'Conversion-focused designs that guide customers through the buying journey seamlessly.',
                    link: '/services/ui-ux-design',
                  },
                  {
                    title: 'Digital Marketing',
                    desc: 'SEO, Google Ads, Facebook/Instagram marketing to drive traffic and sales to your store.',
                    link: '/services/digital-marketing',
                  },
                ].map((service, idx) => (
                  <div key={idx} className="col-md-6" data-aos="fade-up" data-aos-delay={idx * 100}>
                    <Link href={service.link} className="text-decoration-none">
                      <div className="card h-100 hover-lift">
                        <div className="card-body d-flex flex-column gap-3">
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

        {/* FAQ */}
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

        {/* CTA */}
        <section className="py-10 py-lg-12 py-xl-13 bg-dark">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="d-flex flex-column gap-7" data-aos="fade-up">
                  <div>
                    <h2 className="mb-4 text-white">
                      Ready to Launch Your <em className="font-instrument">Online Store?</em>
                    </h2>
                    <p className="mb-0 text-white text-opacity-75">
                      Get a free consultation and discover how we can help you build a successful e-commerce business
                      in Pakistan with the right platform, features, and marketing strategy.
                    </p>
                  </div>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Link href="/contact" className="btn btn-white">
                      <span className="btn-text">Get Free Consultation</span>
                      <iconify-icon icon="solar:arrow-right-up-linear" className="btn-icon bg-dark text-white round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                    </Link>
                    <Link href="/services/shopify-development" className="btn btn-outline-white">
                      <span className="btn-text">Shopify Services</span>
                      <iconify-icon icon="solar:shop-linear" className="btn-icon round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
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
