import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';
import { breadcrumbSchema } from '@/lib/structured-data';

export const metadata = {
  title: "Locations We Serve Across Pakistan | Dev Aspire",
  description:
    "Dev Aspire serves businesses across major Pakistani cities including Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, and Quetta with professional web design and development services.",
  openGraph: {
    type: "website" as const,
    url: `${SITE_URL}/locations`,
    siteName: "Dev Aspire",
    title: "Locations We Serve Across Pakistan - Dev Aspire",
    description:
      "Professional web design and development services across Pakistan's major cities. Local expertise with national reach.",
    images: [
      {
        url: `${SITE_URL}/assets/images/logos/logo-dark.svg`,
        width: 1200,
        height: 630,
        alt: "Dev Aspire - Serving Businesses Across Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Locations We Serve Across Pakistan - Dev Aspire",
    description:
      "Professional web design and development services across Pakistan's major cities.",
    images: [`${SITE_URL}/assets/images/logos/logo-dark.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/locations`,
  },
};

const breadcrumb = breadcrumbSchema('Locations', '/locations');

export default function LocationsHub() {
  const locations = [
    {
      city: 'Karachi',
      province: 'Sindh',
      description: 'Pakistan&apos;s largest city and commercial hub. Serving e-commerce, finance, logistics, and diverse industries.',
      highlights: ['E-Commerce Hub', 'Financial Services', 'Logistics', 'Manufacturing'],
      icon: 'solar:city-linear',
      color: 'primary',
      slug: 'karachi',
    },
    {
      city: 'Lahore',
      province: 'Punjab',
      description: 'Cultural capital with thriving education, fashion, and tech sectors. Home to creative and innovative businesses.',
      highlights: ['Education', 'Fashion', 'Tech Startups', 'Creative'],
      icon: 'solar:buildings-3-linear',
      color: 'success',
      slug: 'lahore',
    },
    {
      city: 'Islamabad',
      province: 'Federal Capital',
      description: 'Pakistan&apos;s capital serving government, corporate, and growing startup ecosystem.',
      highlights: ['Government', 'Startups', 'Corporate', 'International'],
      icon: 'solar:star-circle-linear',
      color: 'info',
      slug: 'islamabad',
    },
    {
      city: 'Rawalpindi',
      province: 'Punjab',
      description: 'Commercial twin city with strong retail, manufacturing, and service sectors.',
      highlights: ['Retail', 'Manufacturing', 'Healthcare', 'Food Services'],
      icon: 'solar:shop-2-linear',
      color: 'warning',
      slug: 'rawalpindi',
    },
    {
      city: 'Faisalabad',
      province: 'Punjab',
      description: 'Manchester of Pakistan - textile and manufacturing powerhouse with strong export focus.',
      highlights: ['Textile', 'Manufacturing', 'B2B Export', 'Agriculture'],
      icon: 'solar:widget-4-linear',
      color: 'danger',
      slug: 'faisalabad',
    },
    {
      city: 'Multan',
      province: 'Punjab',
      description: 'City of Saints and South Punjab&apos;s economic hub serving agriculture, trade, and regional businesses.',
      highlights: ['Agriculture', 'Food Processing', 'Retail', 'Education'],
      icon: 'solar:leaf-linear',
      color: 'success',
      slug: 'multan',
    },
    {
      city: 'Peshawar',
      province: 'Khyber Pakhtunkhwa',
      description: 'Historic trading hub serving KPK&apos;s businesses in trade, retail, and emerging sectors.',
      highlights: ['Trade', 'Retail', 'Education', 'Services'],
      icon: 'solar:box-linear',
      color: 'info',
      slug: 'peshawar',
    },
    {
      city: 'Quetta',
      province: 'Balochistan',
      description: 'Balochistan&apos;s capital serving energy, mining, trading, and growing service sectors.',
      highlights: ['Energy', 'Mining', 'Trade', 'Services'],
      icon: 'solar:bolt-linear',
      color: 'warning',
      slug: 'quetta',
    },
  ];

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <div className="page-wrapper overflow-hidden">
        {/* Banner Section */}
        <section className="banner-section bg-gradient-shaph position-relative pt-14 pt-md-15 pb-11 pb-lg-12 pb-xl-13">
          <div className="container position-relative z-3">
            <div className="d-flex flex-column gap-7">
              <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="50">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Locations</li>
                </ol>
              </nav>

              <h1 className="mb-0" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                Locations We <em className="font-instrument fw-normal">Serve</em>
              </h1>
              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="col-xl-9">
                  <p className="mb-0">
                    Dev Aspire proudly serves businesses across Pakistan's major cities. From Karachi's commercial hub to
                    Quetta's emerging economy, we provide professional web design, development, and digital marketing services
                    tailored to each region's unique business landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cities We Serve */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Cities We <em className="font-instrument">Serve</em>
              </h2>
              <div className="row g-4">
                {locations.map((location, idx) => (
                  <div key={idx} className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={idx * 100}>
                    <Link href={`/location/${location.slug}`} className="text-decoration-none">
                      <div className={`card h-100 bg-${location.color}-subtle hover-lift border-0`}>
                        <div className="card-body d-flex flex-column gap-4 p-5">
                          <div className="d-flex justify-content-between align-items-start">
                            <div className={`bg-${location.color} round-50 rounded-circle hstack justify-content-center`} style={{width: '50px', height: '50px'}}>
                              <iconify-icon icon={location.icon} className="fs-4 text-white"></iconify-icon>
                            </div>
                            <span className="badge bg-white text-dark fs-5">{location.province}</span>
                          </div>
                          <div>
                            <h3 className="mb-2">{location.city}</h3>
                            <p className="mb-0 text-muted fs-4">{location.description}</p>
                          </div>
                          <div className="mt-auto">
                            <h6 className="mb-2 fs-4">Key Industries:</h6>
                            <div className="d-flex flex-wrap gap-2">
                              {location.highlights.slice(0, 2).map((highlight, hidx) => (
                                <span key={hidx} className="badge bg-white text-dark fs-5">{highlight}</span>
                              ))}
                            </div>
                          </div>
                          <span className={`text-${location.color} fw-bold`}>
                            Explore {location.city} <iconify-icon icon="solar:arrow-right-linear" className="ms-1"></iconify-icon>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Local Expertise Matters */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="d-flex flex-column gap-10" data-aos="fade-up">
                  <h2 className="mb-0 text-center">
                    Why <em className="font-instrument">Local Expertise</em> Matters
                  </h2>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="card h-100 border-0">
                        <div className="card-body d-flex flex-column gap-3">
                          <iconify-icon icon="solar:map-point-linear" className="fs-1 text-primary"></iconify-icon>
                          <h4 className="mb-0">Regional Market Knowledge</h4>
                          <p className="mb-0 text-muted">
                            Each Pakistani city has unique business culture, consumer preferences, and competitive dynamics.
                            We understand these nuances and create strategies that work for your specific market.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card h-100 border-0">
                        <div className="card-body d-flex flex-column gap-3">
                          <iconify-icon icon="solar:target-linear" className="fs-1 text-primary"></iconify-icon>
                          <h4 className="mb-0">Location-Specific SEO</h4>
                          <p className="mb-0 text-muted">
                            We optimize your website for location-based searches, helping customers in your city find you easily.
                            From "web design Karachi" to "services in Peshawar," we get you ranking locally.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card h-100 border-0">
                        <div className="card-body d-flex flex-column gap-3">
                          <iconify-icon icon="solar:users-group-rounded-linear" className="fs-1 text-primary"></iconify-icon>
                          <h4 className="mb-0">Cultural Relevance</h4>
                          <p className="mb-0 text-muted">
                            Our designs and content respect local business culture while maintaining modern professional standards.
                            We create websites that resonate with your target audience's values and preferences.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card h-100 border-0">
                        <div className="card-body d-flex flex-column gap-3">
                          <iconify-icon icon="solar:graph-up-linear" className="fs-1 text-primary"></iconify-icon>
                          <h4 className="mb-0">Industry Understanding</h4>
                          <p className="mb-0 text-muted">
                            From Faisalabad's textiles to Karachi's finance, we understand the key industries in each city
                            and create solutions that address sector-specific needs and challenges.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-10 py-lg-12 py-xl-13">
          <div className="container">
            <div className="d-flex flex-column gap-10">
              <h2 className="mb-0 text-center" data-aos="fade-up">
                Serving Businesses <em className="font-instrument">Nationwide</em>
              </h2>
              <div className="row g-4">
                {[
                  { number: '8+', label: 'Major Cities', icon: 'solar:city-linear', color: 'primary' },
                  { number: '40+', label: 'Projects Delivered', icon: 'solar:clipboard-check-linear', color: 'success' },
                  { number: '30+', label: 'Happy Clients', icon: 'solar:smile-circle-linear', color: 'info' },
                  { number: '10+', label: 'Years Experience', icon: 'solar:star-circle-linear', color: 'warning' },
                ].map((stat, idx) => (
                  <div key={idx} className="col-6 col-md-3" data-aos="fade-up" data-aos-delay={(idx + 1) * 100}>
                    <div className={`card text-center bg-${stat.color}-subtle border-0 h-100`}>
                      <div className="card-body d-flex flex-column gap-3 align-items-center justify-content-center py-5">
                        <iconify-icon icon={stat.icon} className={`fs-1 text-${stat.color}`}></iconify-icon>
                        <h2 className="mb-0">{stat.number}</h2>
                        <p className="mb-0 text-muted">{stat.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 py-lg-12 py-xl-13 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="card bg-dark mb-0" data-aos="fade-up">
                  <div className="card-body px-lg-7 py-lg-10">
                    <div className="row align-items-center justify-content-between gap-4 gap-lg-0">
                      <div className="col-lg-6">
                        <h2 className="mb-0 text-white">
                          Ready to Start Your <em className="font-instrument">Project?</em>
                        </h2>
                        <p className="mb-0 text-white text-opacity-75 mt-3">
                          Whether you're in Karachi, Lahore, Islamabad, or any other Pakistani city, we're here to help
                          your business succeed online. Get a free consultation today.
                        </p>
                      </div>
                      <div className="col-lg-6">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-end gap-3">
                          <Link href="/contact" className="btn btn-white">
                            <span className="btn-text">Get Free Consultation</span>
                            <iconify-icon icon="solar:arrow-right-up-linear" className="btn-icon bg-dark text-white round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                          </Link>
                          <Link href="/portfolio" className="btn btn-outline-white">
                            <span className="btn-text">View Portfolio</span>
                            <iconify-icon icon="solar:gallery-linear" className="btn-icon round-32 rounded-circle hstack justify-content-center fs-6"></iconify-icon>
                          </Link>
                        </div>
                      </div>
                    </div>
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
