import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';
import { serviceSchema, breadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: "Real Estate Website Design & Development Pakistan | Dev Aspire",
  description:
    "Professional real estate website design for property developers, agents, and brokers in Pakistan. Property listing platforms, CRM integration, and lead generation.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/industries/real-estate`,
    siteName: "Dev Aspire",
    title: "Real Estate Website Design & Development Pakistan",
    description:
      "Custom real estate websites with property listings, advanced search, virtual tours, and CRM integration for Pakistani property businesses.",
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "Dev Aspire - Real Estate Website Development Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Real Estate Website Design & Development Pakistan",
    description:
      "Custom real estate websites with property listings and lead generation.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/industries/real-estate`,
  },
};

const schema = serviceSchema(
  'Real Estate Website Development',
  'Professional website design for real estate developers, agents, and property businesses in Pakistan with advanced listing and search features.'
);
const breadcrumb = breadcrumbSchema('Real Estate', '/industries/real-estate');

export default function RealEstateIndustry() {
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="page-wrapper overflow-hidden">
        <section className="banner-section bg-gradient-shaph position-relative pt-14 pt-md-15 pb-11 pb-lg-12 pb-xl-13">
          <div className="container position-relative z-3">
            <div className="d-flex flex-column gap-7">
              <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="50">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="breadcrumb-item"><Link href="/industries">Industries</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Real Estate</li>
                </ol>
              </nav>

              <h1 className="mb-0" data-aos="fade-up" data-aos-delay="100">
                Real Estate Website <em className="font-instrument fw-normal">Development</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <div className="col-xl-9">
                  <p className="mb-0">
                    Showcase properties and generate leads with professional real estate websites. From property listings
                    to virtual tours, we build platforms that help you sell faster in Pakistan's competitive market.
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 justify-content-center flex-wrap" data-aos="fade-up" data-aos-delay="300">
                <Link href="/contact" className="btn btn-dark">
                  <span className="btn-text">Get Free Quote</span>
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
                Real Estate Solutions <em className="font-instrument">We Build</em>
              </h2>
              <div className="row g-4">
                {[
                  { title: 'Property Listing Websites', desc: 'Full-featured listing platforms with advanced search, filters, and property comparison.', icon: 'solar:home-2-linear' },
                  { title: 'Developer Websites', desc: 'Showcase projects, floor plans, payment plans, and generate qualified leads for developers.', icon: 'solar:buildings-3-linear' },
                  { title: 'Agent Portals', desc: 'Personal websites for real estate agents with property portfolios and lead capture forms.', icon: 'solar:user-id-linear' },
                  { title: 'Property Marketplaces', desc: 'Multi-vendor platforms connecting buyers, sellers, and agents like Zameen and OLX.', icon: 'solar:shop-2-linear' },
                  { title: 'Rental Management', desc: 'Systems for property managers to list rentals, screen tenants, and collect payments.', icon: 'solar:key-linear' },
                  { title: 'Investment Platforms', desc: 'Platforms for real estate investment opportunities with ROI calculators and documentation.', icon: 'solar:chart-2-linear' },
                ].map((item, idx) => (
                  <div key={idx} className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={idx * 100}>
                    <div className="card h-100">
                      <div className="card-body d-flex flex-column gap-3">
                        <iconify-icon icon={item.icon} className="fs-1 text-primary"></iconify-icon>
                        <h4 className="mb-0">{item.title}</h4>
                        <p className="mb-0 text-muted">{item.desc}</p>
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
                Essential <em className="font-instrument">Features</em>
              </h2>
              <div className="row g-4">
                {[
                  'Advanced Property Search',
                  'Map Integration & Geolocation',
                  'Property Comparison Tool',
                  '360° Virtual Tours',
                  'Photo & Video Galleries',
                  'Lead Capture Forms',
                  'Mortgage Calculator',
                  'Payment Plan Details',
                  'Agent/Developer Profiles',
                  'WhatsApp Integration',
                  'SEO for Local Searches',
                  'Mobile-First Design',
                ].map((feature, idx) => (
                  <div key={idx} className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={idx * 50}>
                    <div className="d-flex align-items-center gap-2">
                      <iconify-icon icon="solar:check-circle-linear" className="fs-5 text-primary"></iconify-icon>
                      <span className="fs-4">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 py-lg-12 py-xl-13 bg-dark">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="d-flex flex-column gap-7" data-aos="fade-up">
                  <h2 className="mb-0 text-white">
                    Ready to Sell More <em className="font-instrument">Properties?</em>
                  </h2>
                  <p className="mb-0 text-white text-opacity-75">
                    Get a free consultation to discuss how a professional real estate website can help you generate
                    more leads and close deals faster in Pakistan's property market.
                  </p>
                  <Link href="/contact" className="btn btn-white mx-auto">
                    <span className="btn-text">Get Free Consultation</span>
                    <iconify-icon icon="solar:arrow-right-up-linear" className="btn-icon bg-dark text-white round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                  </Link>
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
