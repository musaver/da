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
                ].map((item, idx) => (
                  <div key={idx} className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay={(idx + 1) * 100} data-aos-duration="1000">
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
