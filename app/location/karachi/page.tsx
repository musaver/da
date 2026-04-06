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
            <div className="d-flex flex-column gap-10">
              <h1 className="text-center mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                Web Design & Development Services in <em className="font-instrument fw-normal">Karachi</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="col-xl-7">
                  <p className="text-center mb-0">
                    Dev Aspire provides professional web design, development, and digital marketing services to businesses across Karachi. From Clifton to Gulshan, we help Karachi entrepreneurs and enterprises build exceptional online presence.
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

        {/* Why Choose Dev Aspire in Karachi */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Why Karachi Businesses Choose <em className="font-instrument">Dev Aspire</em>
              </h2>
              <div className="row">
                {[
                  { icon: 'solar:buildings-3-linear', title: 'Understanding Karachi Market', desc: 'We understand the unique business landscape of Karachi—from DHA and Clifton enterprises to Saddar retail businesses and SITE industrial companies.' },
                  { icon: 'solar:global-linear', title: 'Remote Collaboration', desc: 'Though based in Islamabad, we work seamlessly with Karachi clients through video calls, project management tools, and regular online meetings.' },
                  { icon: 'solar:clock-circle-linear', title: 'Quick Turnaround', desc: 'We respect Karachi's fast-paced business culture with efficient project timelines and responsive communication throughout the development process.' },
                  { icon: 'solar:hand-money-linear', title: 'Competitive Pricing', desc: 'Transparent, competitive rates for Karachi businesses with flexible payment plans and no hidden costs.' },
                ].map((item, idx) => (
                  <div key={idx} className="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                    <div className="card h-100">
                      <div className="card-body d-flex flex-column gap-3">
                        <iconify-icon icon={item.icon} className="fs-9 text-primary"></iconify-icon>
                        <h4 className="mb-0">{item.title}</h4>
                        <p className="mb-0">{item.desc}</p>
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
              <div className="row">
                <div className="col-sm-6 col-md-4 col-lg">
                  <Link href="/services/web-app-development" className="text-decoration-none">
                    <div className="card bg-danger-subtle" data-aos="fade-up" data-aos-delay="100">
                      <div className="card-body d-flex flex-column gap-7">
                        <iconify-icon icon="solar:window-frame-linear" className="fs-9 text-danger"></iconify-icon>
                        <div>
                          <h4 className="text-danger mb-0">Web Development</h4>
                          <p className="mb-0 text-dark mt-2">Custom websites and web applications for Karachi businesses</p>
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
                          <p className="mb-0 text-dark mt-2">Shopify stores for Karachi retailers and online businesses</p>
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
                          <p className="mb-0 text-dark mt-2">SEO and marketing to reach Karachi customers online</p>
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
                          <p className="mb-0 text-dark mt-2">User-friendly designs that convert Karachi visitors</p>
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
                          <p className="mb-0 text-dark mt-2">Build a memorable brand in Karachi's competitive market</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
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
              <div className="row">
                {[
                  { icon: 'solar:cart-large-2-linear', title: 'E-Commerce & Retail', desc: 'Online stores for Karachi retailers from Saddar to Tariq Road, reaching customers across Pakistan.' },
                  { icon: 'solar:wallet-money-linear', title: 'Finance & FinTech', desc: 'Secure web platforms for Karachi\'s financial services, banks, and fintech startups.' },
                  { icon: 'solar:ship-linear', title: 'Logistics & Shipping', desc: 'Custom solutions for Karachi\'s port businesses, logistics companies, and freight forwarders.' },
                  { icon: 'solar:buildings-linear', title: 'Real Estate', desc: 'Property websites for DHA, Clifton, and Bahria Town real estate agencies and developers.' },
                  { icon: 'solar:chef-hat-minimalistic-linear', title: 'Food & Restaurants', desc: 'Online ordering systems and websites for Karachi\'s vibrant restaurant scene.' },
                  { icon: 'solar:shop-2-linear', title: 'Manufacturing', desc: 'B2B platforms for SITE and Korangi industrial manufacturers and exporters.' },
                ].map((industry, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                    <div className="card h-100">
                      <div className="card-body d-flex flex-column gap-3">
                        <iconify-icon icon={industry.icon} className="fs-8 text-primary"></iconify-icon>
                        <h4 className="mb-0">{industry.title}</h4>
                        <p className="mb-0">{industry.desc}</p>
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
                  <p className="fs-5">
                    As Pakistan's largest city and economic hub, Karachi is experiencing rapid digital transformation. With over 16 million residents and home to 70% of Pakistan's e-commerce businesses, Karachi presents enormous opportunities for businesses willing to invest in their online presence.
                  </p>
                  <p className="fs-5">
                    From the bustling markets of Saddar and Tariq Road moving online to DHA startups launching innovative SaaS products, Karachi businesses are embracing digital solutions. The city's thriving entrepreneurial ecosystem, access to talent, and diverse economy make it a prime market for web design and development services.
                  </p>
                  <p className="fs-5">
                    Dev Aspire has worked with numerous Karachi clients across e-commerce, logistics, finance, and real estate sectors, helping them establish strong online presence and compete effectively in Pakistan's digital economy.
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
              <div className="accordion accordion-flush d-flex flex-column gap-3" id="karachiFAQ">
                {[
                  { id: 'One', question: 'Do you work with businesses in Karachi?', answer: 'Yes! While we are based in Islamabad, we work with clients throughout Pakistan including Karachi. We use video calls, project management tools, and online collaboration to deliver the same quality service remotely. Many of our Karachi clients prefer this arrangement as it provides flexibility without geographic limitations.', expanded: true },
                  { id: 'Two', question: 'How much does web design cost in Karachi?', answer: 'Web design costs in Karachi typically range from PKR 200,000 for basic websites to PKR 800,000+ for complex web applications. E-commerce stores range from PKR 250,000 to PKR 600,000. We provide transparent quotes based on your specific requirements, features needed, and project timeline. Contact us for a customized proposal for your Karachi business.', expanded: false },
                  { id: 'Three', question: 'Can you help with digital marketing for Karachi customers?', answer: 'Absolutely! We specialize in digital marketing tailored for the Karachi market. This includes local SEO to rank for "business in Karachi" searches, targeted Google Ads campaigns, social media marketing aimed at Karachi demographics, and content strategies that resonate with Karachi audiences. We understand local preferences and buying behaviors.', expanded: false },
                  { id: 'Four', question: 'Do you offer payment options for Karachi businesses?', answer: 'Yes, we offer flexible payment options including milestone-based payments (40% upfront, 30% mid-project, 30% on completion), bank transfers to Pakistani banks, JazzCash, Easypaisa, or international payments via PayPal and Stripe. We invoice in PKR for Pakistani clients.', expanded: false },
                  { id: 'Five', question: 'How long does it take to complete a website project?', answer: 'Timelines depend on project complexity. A basic business website takes 3-4 weeks, an e-commerce store 4-6 weeks, and custom web applications 8-12 weeks. We provide detailed timelines in our proposal and keep you updated throughout. We respect Karachi\'s fast-paced business culture with efficient delivery.', expanded: false },
                  { id: 'Six', question: 'Do you provide ongoing support after launch?', answer: 'Yes! We offer maintenance packages starting from PKR 25,000/month including bug fixes, security updates, content updates, and technical support. We also provide training so your Karachi team can manage basic updates independently. Our relationship continues long after launch to help your business grow.', expanded: false },
                ].map((faq, idx) => (
                  <div key={idx} className="accordion-item border rounded-1" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                    <h2 className="accordion-header">
                      <button className={`accordion-button fs-7 fw-medium ${!faq.expanded ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse"
                        data-bs-target={`#karachiCollapse${faq.id}`} aria-expanded={faq.expanded} aria-controls={`karachiCollapse${faq.id}`}>
                        {faq.question}
                      </button>
                    </h2>
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
        </section>

        {/* CTA */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="get-in-touch position-relative overflow-hidden rounded-3 border px-4 py-5 py-lg-13 py-xl-14">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="d-flex flex-column gap-7 text-center">
                    <h2 className="mb-0">Ready to Grow Your Karachi <em className="font-instrument">Business Online?</em></h2>
                    <p className="mb-0">Let's discuss how Dev Aspire can help your Karachi business succeed with professional web design and development. Schedule a free consultation today.</p>
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
